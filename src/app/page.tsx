'use client';

import React, { useState, useEffect, useRef } from 'react';
import { aiCategories } from '../data/ai-tools';
import FeedbackPage from '../components/Pages/FeedbackPage';
import MobileHeader from '../components/Header/MobileHeader';
import DesktopHeader from '../components/Header/DesktopHeader';
import HeroSection from '../components/Hero/HeroSection';
import Footer from '../components/Footer/Footer';
import FeaturedToolsSection from '../components/Sections/FeaturedToolsSection';
import NewestAdditionsSection from '../components/Sections/NewestAdditionsSection';
import PromotionalCard from '../components/Sections/PromotionalCard';
import SpotlightSection from '../components/Sections/SpotlightSection';
import AICoursesSection from '../components/Sections/AICoursesSection';
import AIRecommendationsSection from '../components/Sections/AIRecommendationsSection';
import AIBootcampsSection from '../components/Sections/AIBootcampsSection';
import CategoriesGridSection from '../components/Sections/CategoriesGridSection';
import ToolSection from '../components/Sections/ToolSection';
import CategoryContentSection from '../components/Sections/CategoryContentSection';
import {
  useAppContext,
  useSubcategoryContext,
  SidebarDrawerContext,
  useFeedbackContext,
} from './layout';
import { getToolsByCategory } from '../utils/toolUtils';
import {
  getVideoAITools,
  getCodeAITools,
  getAutomationTools,
  getOfficeTools,
  getDataAnalysisTools,
  getProjectManagementTools,
  getLegalAITools,
} from '../utils/toolSectionUtils';
import { useScrollEffects } from '../hooks/useScrollEffects';
import { useMobileScrollDetection } from '../hooks/useMobileScrollDetection';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSubcategoryHandlers } from '../hooks/useSubcategoryHandlers';
import { useNavigationManager } from '../hooks/useNavigationManager';

export default function HomePage() {
  const { activeCategory, setActiveCategory } = useAppContext();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContext();
  const { setSidebarOpen } = React.useContext(SidebarDrawerContext);
  const { showFeedback, setShowFeedback } = useFeedbackContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState('explorar');
  const [isClient, setIsClient] = useState(false);

  // Refs para las filas del header
  const headerRow1Ref = useRef<HTMLDivElement | null>(null);
  const headerRow2Ref = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const isProgrammaticScroll = useRef(false);

  // Hooks personalizados
  const { handleSubcategoryClick, handleMobileSubcategoryClick } = useSubcategoryHandlers(
    setActiveSubcategory,
    setIsScrolled,
    headerRow1Ref,
    headerRow2Ref,
    tabRefs,
    tabsContainerRef,
  );

  // Hook de navegación centralizada
  const { navigateToSubcategory } = useNavigationManager(
    setActiveSubcategory,
    isProgrammaticScroll,
  );

  // Efecto para asegurar que estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentCategory = activeCategory
    ? aiCategories.find((cat) => cat.name === activeCategory) || null
    : null;

  // Usar hooks personalizados
  useLocalStorage(isClient, activeCategory, activeSubcategory);

  // Usar detección de scroll específica para móvil
  useMobileScrollDetection(
    currentCategory,
    activeSubcategory,
    setActiveSubcategory,
    isProgrammaticScroll,
  );

  // Usar efectos de scroll para desktop
  useScrollEffects(
    currentCategory,
    activeSubcategory,
    setActiveSubcategory,
    setIsScrolled,
    isProgrammaticScroll,
    tabRefs,
    tabsContainerRef,
  );

  // Resetear subcategoría activa cuando cambie la categoría
  useEffect(() => {
    if (currentCategory && currentCategory.subcategories.length > 0) {
      const firstSubcategory = currentCategory.subcategories[0].name;
      setActiveSubcategory(firstSubcategory);

      // Siempre ir arriba del todo al cambiar de categoría
      isProgrammaticScroll.current = true;
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Resetear el estado de scroll después de ir arriba
      setTimeout(() => {
        isProgrammaticScroll.current = false;
        setIsScrolled(false);
      }, 400);
    } else {
      setActiveSubcategory(null);
    }
  }, [currentCategory, setActiveSubcategory]);

  // Sincronización de categoría/subcategoría
  useEffect(() => {
    if (
      activeSubcategory &&
      (!activeCategory ||
        !aiCategories
          .find((cat) => cat.name === activeCategory)
          ?.subcategories.some((sub) => sub.name === activeSubcategory))
    ) {
      const foundCategory = aiCategories.find((cat) =>
        cat.subcategories.some((sub) => sub.name === activeSubcategory),
      );
      if (foundCategory && activeCategory !== foundCategory.name) {
        setActiveCategory(foundCategory.name);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSubcategory]);

  // Mostrar loading breve durante la hidratación
  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </div>
    );
  }

  // Si showFeedback es true, mostrar la página de feedback
  if (showFeedback) {
    return (
      <FeedbackPage
        onBack={() => {
          setShowFeedback(false);
          setActiveCategory(null);
          setActiveSubcategory(null);
          if (isClient) {
            localStorage.removeItem('activeCategory');
            localStorage.removeItem('activeSubcategory');
          }
          const mainElement = document.querySelector('main');
          if (mainElement && mainElement.classList.contains('overflow-y-auto')) {
            mainElement.scrollTo(0, 0);
          } else {
            window.scrollTo(0, 0);
          }
        }}
      />
    );
  }

  // Si no hay categoría activa, muestra la página Explorar completa
  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-black">
        <MobileHeader
          currentCategory={currentCategory}
          activeSubcategory={activeSubcategory}
          setActiveCategory={setActiveCategory}
          setActiveSubcategory={setActiveSubcategory}
          setSidebarOpen={setSidebarOpen}
          isClient={isClient}
          tabRefs={tabRefs}
          tabsContainerRef={tabsContainerRef}
          onSubcategoryClick={handleMobileSubcategoryClick}
        />

        <DesktopHeader
          currentCategory={currentCategory}
          activeSubcategory={activeSubcategory}
          setActiveCategory={setActiveCategory}
          setActiveSubcategory={setActiveSubcategory}
          isScrolled={isScrolled}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          hoveredFilter={hoveredFilter}
          setHoveredFilter={setHoveredFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          headerRow1Ref={headerRow1Ref}
          headerRow2Ref={headerRow2Ref}
          onSubcategoryClick={handleSubcategoryClick}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
        />

        {/* Contenido con padding-top para compensar header fijo en desktop */}
        <div className="pt-0 md:pt-[60px]">
          {/* Mostrar contenido según la navegación activa */}
          {activeNav === 'explorar' ? (
            <>
              <HeroSection />

              <FeaturedToolsSection />

              <NewestAdditionsSection onViewAll={() => setActiveNav('nuevas')} />

              <PromotionalCard />

              <SpotlightSection
                onViewAll={() => {
                  console.log('SpotlightSection: Navegando a Video');
                  setActiveCategory('Generativa');
                  // Usar la función de navegación centralizada
                  setTimeout(() => {
                    console.log('SpotlightSection: Ejecutando navegación después de 100ms');
                    navigateToSubcategory('Video');
                    // También usar la función de navegación móvil si es necesario
                    if (window.innerWidth < 768) {
                      console.log(
                        'SpotlightSection: Detectado móvil, usando handleMobileSubcategoryClick',
                      );
                      setTimeout(() => {
                        handleMobileSubcategoryClick('Video');
                      }, 200);
                    }
                  }, 100);
                }}
              />

              <AICoursesSection
                onViewAll={() => {
                  console.log('AICoursesSection: Navegando a cursos');
                  // Por ahora solo mostrar un mensaje, puedes cambiar esto después
                  alert('Sección de cursos - próximamente');
                }}
              />

              <AIRecommendationsSection
                onViewAll={() => {
                  console.log('AIRecommendationsSection: Navegando a recomendaciones');
                  // Por ahora solo mostrar un mensaje, puedes cambiar esto después
                  alert('Sección de recomendaciones - próximamente');
                }}
              />

              <AIBootcampsSection
                onViewAll={() => {
                  console.log('AIBootcampsSection: Navegando a bootcamps');
                  // Por ahora solo mostrar un mensaje, puedes cambiar esto después
                  alert('Sección de bootcamps - próximamente');
                }}
              />

              <Footer
                setShowFeedback={setShowFeedback}
                setActiveCategory={setActiveCategory}
                setActiveSubcategory={setActiveSubcategory}
              />
            </>
          ) : activeNav === 'nuevas' ? (
            /* Sección "Nuevas adiciones" - Por ahora en blanco */
            <div className="py-20 px-4 max-w-7xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Nuevas adiciones</h1>
              <p className="text-zinc-400 text-lg">Esta sección estará disponible próximamente.</p>
              <button
                onClick={() => setActiveNav('explorar')}
                className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Volver a Explorar
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // Renderizar página de categoría específica
  return (
    <div className="min-h-screen bg-black">
      <MobileHeader
        currentCategory={currentCategory}
        activeSubcategory={activeSubcategory}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        setSidebarOpen={setSidebarOpen}
        isClient={isClient}
        tabRefs={tabRefs}
        tabsContainerRef={tabsContainerRef}
        onSubcategoryClick={handleMobileSubcategoryClick}
      />

      <DesktopHeader
        currentCategory={currentCategory}
        activeSubcategory={activeSubcategory}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        isScrolled={isScrolled}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        hoveredFilter={hoveredFilter}
        setHoveredFilter={setHoveredFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        headerRow1Ref={headerRow1Ref}
        headerRow2Ref={headerRow2Ref}
        onSubcategoryClick={handleSubcategoryClick}
      />

      <CategoryContentSection
        currentCategory={currentCategory}
        activeFilter={activeFilter}
        searchTerm={searchTerm}
      />

      <Footer
        setShowFeedback={setShowFeedback}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
      />
    </div>
  );
}
