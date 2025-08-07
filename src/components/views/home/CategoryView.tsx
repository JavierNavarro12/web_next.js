import React from 'react';
import MobileHeader from '../../Header/MobileHeader';
import DesktopHeader from '../../Header/DesktopHeader';
import dynamic from 'next/dynamic';
import type { AICategory } from '../../../data/ai-tools';
function LoadingBlock() {
  return (
    <div
      className="h-24 animate-pulse bg-zinc-800/50 rounded-xl"
      role="status"
      aria-live="polite"
      aria-busy="true"
    />
  );
}
const CategoryContentSection = dynamic(() => import('../../Sections/CategoryContentSection'), {
  loading: () => <LoadingBlock />,
});
import Footer from '../../Footer/Footer';

type CategoryViewProps = {
  currentCategory: AICategory | null;
  activeSubcategory: string | null;
  setActiveCategory: (c: string | null) => void;
  setActiveSubcategory: (s: string | null) => void;
  setSidebarOpen: (open: boolean) => void;
  isClient: boolean;
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>;
  tabsContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  onMobileSubcategoryClick: (name: string) => void;
  isScrolled: boolean;
  activeFilter: 'all' | 'free' | 'paid';
  setActiveFilter: (f: 'all' | 'free' | 'paid') => void;
  hoveredFilter: string | null;
  setHoveredFilter: (v: string | null) => void;
  searchTerm: string;
  setSearchTerm: (t: string) => void;
  headerRow1Ref: React.MutableRefObject<HTMLDivElement | null>;
  headerRow2Ref: React.MutableRefObject<HTMLDivElement | null>;
  onSubcategoryClick: (name: string) => void;
  onSetShowFeedback: (v: boolean) => void;
  onSetShowBugReport: (v: boolean) => void;
};

export default function CategoryView({
  currentCategory,
  activeSubcategory,
  setActiveCategory,
  setActiveSubcategory,
  setSidebarOpen,
  isClient,
  tabRefs,
  tabsContainerRef,
  onMobileSubcategoryClick,
  isScrolled,
  activeFilter,
  setActiveFilter,
  hoveredFilter,
  setHoveredFilter,
  searchTerm,
  setSearchTerm,
  headerRow1Ref,
  headerRow2Ref,
  onSubcategoryClick,
  onSetShowFeedback,
  onSetShowBugReport,
}: CategoryViewProps) {
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
        onSubcategoryClick={onMobileSubcategoryClick}
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
        onSubcategoryClick={onSubcategoryClick}
      />
      <CategoryContentSection
        currentCategory={currentCategory}
        activeFilter={activeFilter}
        searchTerm={searchTerm}
      />
      <Footer
        setShowFeedback={onSetShowFeedback}
        setShowBugReport={onSetShowBugReport}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
      />
    </div>
  );
}
