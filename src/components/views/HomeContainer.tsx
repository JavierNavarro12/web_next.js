'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { aiCategories } from '../../data/ai-tools';
import ExploreView from './home/ExploreView';

// Lazy load modales pesados (contienen @emailjs/browser ~20KB)
const FeedbackPage = dynamic(() => import('../../components/Pages/FeedbackPage'), {
  ssr: false,
});
const BugReportPage = dynamic(() => import('../../components/Pages/BugReportPage'), {
  ssr: false,
});
import CategoryView from './home/CategoryView';
import {
  useAppContext as useAppContextFromProviders,
  useSubcategoryContext as useSubcategoryContextFromProviders,
  SidebarDrawerContext as SidebarDrawerContextFromProviders,
  useFeedbackContext as useFeedbackContextFromProviders,
  useBugReportContext as useBugReportContextFromProviders,
  useActiveNavContext as useActiveNavContextFromProviders,
} from '../../app/providers';
import { useScrollEffects } from '../../hooks/useScrollEffects';
import { useMobileScrollDetection } from '../../hooks/useMobileScrollDetection';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useSubcategoryHandlers } from '../../hooks/useSubcategoryHandlers';
import { useNavigationManager } from '../../hooks/useNavigationManager';

type HomeContainerProps = {
  initialSearchTerm?: string;
  initialCategory?: string;
  initialSubcategory?: string;
};

export default function HomeContainer({
  initialSearchTerm = '',
  initialCategory = '',
  initialSubcategory = '',
}: HomeContainerProps) {
  const { activeCategory, setActiveCategory } = useAppContextFromProviders();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContextFromProviders();
  const { setSidebarOpen } = React.useContext(SidebarDrawerContextFromProviders);
  const { showFeedback, setShowFeedback } = useFeedbackContextFromProviders();
  const { showBugReport, setShowBugReport } = useBugReportContextFromProviders();
  const { activeNav, setActiveNav } = useActiveNavContextFromProviders();

  const navigateBetweenPages = (fromFeedback: boolean) => {
    if (fromFeedback) {
      setShowFeedback(false);
      setShowBugReport(true);
      setActiveCategory(null);
      setActiveSubcategory(null);
      if (isClient) {
        localStorage.removeItem('activeCategory');
        localStorage.removeItem('activeSubcategory');
      }
    } else {
      setShowBugReport(false);
      setShowFeedback(true);
      setActiveCategory(null);
      setActiveSubcategory(null);
      if (isClient) {
        localStorage.removeItem('activeCategory');
        localStorage.removeItem('activeSubcategory');
      }
    }
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const headerRow1Ref = useRef<HTMLDivElement | null>(null);
  const headerRow2Ref = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const isProgrammaticScroll = useRef(false);

  const { handleSubcategoryClick, handleMobileSubcategoryClick } = useSubcategoryHandlers(
    setActiveSubcategory,
    setIsScrolled,
    headerRow1Ref,
    headerRow2Ref,
    tabRefs,
    tabsContainerRef,
  );

  const { navigateToSubcategory } = useNavigationManager(
    setActiveSubcategory,
    isProgrammaticScroll,
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fijar categoría inicial si llega por query (?category=) o por ruta
  useEffect(() => {
    if (initialCategory && !activeCategory) {
      setActiveCategory(initialCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCategory]);

  // Fijar subcategoría inicial si llega por ruta (/categoria/x/subcategoria)
  useEffect(() => {
    if (initialSubcategory && !activeSubcategory) {
      setActiveSubcategory(initialSubcategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSubcategory]);

  // Al cambiar de sección principal (explorar, artículos, herramientas en home),
  // resetea el scroll y el estado isScrolled para que el hero/primera tarjeta sea visible
  // PERO solo si no es navegación programática (ej: click en subcategoría del sidebar)
  useEffect(() => {
    // Si es navegación programática, no resetear el scroll
    if (isProgrammaticScroll.current) {
      return;
    }

    // Retrasar un frame para esperar al cambio de vista/layout
    const id = requestAnimationFrame(() => {
      const mainElement = document.querySelector('main');
      if (mainElement && (mainElement as HTMLElement).scrollTop !== 0) {
        (mainElement as HTMLElement).scrollTo({ top: 0, behavior: 'auto' });
      } else if (typeof window !== 'undefined' && window.scrollY !== 0) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      setIsScrolled(false);
    });
    return () => cancelAnimationFrame(id);
  }, [activeNav]);

  const currentCategory = activeCategory
    ? aiCategories.find((cat) => cat.name === activeCategory) || null
    : null;

  useLocalStorage(isClient, activeCategory, activeSubcategory);

  useMobileScrollDetection(
    currentCategory,
    activeSubcategory,
    setActiveSubcategory,
    isProgrammaticScroll,
  );

  useScrollEffects(
    currentCategory,
    activeSubcategory,
    setActiveSubcategory,
    setIsScrolled,
    isProgrammaticScroll,
    tabRefs,
    tabsContainerRef,
  );

  useEffect(() => {
    if (currentCategory && currentCategory.subcategories.length > 0) {
      // Si la subcategoría activa ya es válida para esta categoría, no cambiarla
      // Esto evita sobrescribir la subcategoría cuando se navega desde el sidebar
      const currentSubcategoryIsValid =
        activeSubcategory &&
        currentCategory.subcategories.some((sub) => sub.name === activeSubcategory);

      if (currentSubcategoryIsValid) {
        // La subcategoría actual es válida, no hacer nada
        return;
      }

      // Si hay initialSubcategory válida para esta categoría, úsala en lugar de la primera
      const validInitialSubcategory =
        initialSubcategory &&
        currentCategory.subcategories.some((sub) => sub.name === initialSubcategory);

      const targetSubcategory = validInitialSubcategory
        ? initialSubcategory
        : currentCategory.subcategories[0].name;

      // Solo actualizar si es diferente para evitar loops
      if (activeSubcategory !== targetSubcategory) {
        setActiveSubcategory(targetSubcategory);
        isProgrammaticScroll.current = true;
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setTimeout(() => {
          isProgrammaticScroll.current = false;
          setIsScrolled(false);
        }, 400);
      }
    } else {
      setActiveSubcategory(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory, initialSubcategory]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sincronizar categoría padre cuando cambia la subcategoría activa
  }, [activeSubcategory]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </div>
    );
  }

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
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        navigateToBugReport={() => navigateBetweenPages(true)}
      />
    );
  }

  if (showBugReport) {
    return (
      <BugReportPage
        onBack={() => {
          setShowBugReport(false);
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
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        navigateToFeedback={() => navigateBetweenPages(false)}
      />
    );
  }

  if (!currentCategory) {
    // Los schemas JSON-LD (FAQPage y BreadcrumbList) se renderizan en el servidor
    // en src/app/page.tsx para evitar duplicación y mejorar SEO

    return (
      <>
        <ExploreView
          currentCategory={currentCategory}
          activeSubcategory={activeSubcategory}
          setActiveCategory={setActiveCategory}
          setActiveSubcategory={setActiveSubcategory}
          setSidebarOpen={setSidebarOpen}
          isClient={isClient}
          tabRefs={tabRefs}
          tabsContainerRef={tabsContainerRef}
          onMobileSubcategoryClick={handleMobileSubcategoryClick}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
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
          navigateToSubcategory={navigateToSubcategory}
          onSetShowFeedback={setShowFeedback}
          onSetShowBugReport={setShowBugReport}
        />
      </>
    );
  }

  return (
    <CategoryView
      currentCategory={currentCategory}
      activeSubcategory={activeSubcategory}
      setActiveCategory={setActiveCategory}
      setActiveSubcategory={setActiveSubcategory}
      setSidebarOpen={setSidebarOpen}
      isClient={isClient}
      tabRefs={tabRefs}
      tabsContainerRef={tabsContainerRef}
      onMobileSubcategoryClick={handleMobileSubcategoryClick}
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
      onSetShowFeedback={setShowFeedback}
      onSetShowBugReport={setShowBugReport}
    />
  );
}
