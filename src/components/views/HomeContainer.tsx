'use client';

import React, { useState, useEffect, useRef } from 'react';
import { aiCategories } from '../../data/ai-tools';
import FeedbackPage from '../../components/Pages/FeedbackPage';
import BugReportPage from '../../components/Pages/BugReportPage';
import ExploreView from './home/ExploreView';
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
};

export default function HomeContainer({
  initialSearchTerm = '',
  initialCategory = '',
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

  // Fijar categoría inicial si llega por query (?category=)
  useEffect(() => {
    if (initialCategory && !activeCategory) {
      setActiveCategory(initialCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCategory]);

  // Al cambiar de sección principal (explorar, artículos, herramientas en home),
  // resetea el scroll y el estado isScrolled para que el hero/primera tarjeta sea visible
  useEffect(() => {
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
      const firstSubcategory = currentCategory.subcategories[0].name;
      setActiveSubcategory(firstSubcategory);
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
    } else {
      setActiveSubcategory(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

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
    return (
      <>
        {/* BreadcrumbList JSON-LD para home / explorar */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://aifinder.es' },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Explorar',
                  item: 'https://aifinder.es/',
                },
              ],
            }),
          }}
        />
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
