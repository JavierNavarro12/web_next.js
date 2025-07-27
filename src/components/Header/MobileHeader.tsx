'use client';

import React from 'react';

import { AICategory } from '../../data/ai-tools';

interface MobileHeaderProps {
  currentCategory: AICategory | null;
  activeSubcategory: string | null;
  setActiveCategory: (category: string | null) => void;
  setActiveSubcategory: (subcategory: string | null) => void;
  setSidebarOpen: (open: boolean) => void;
  isClient: boolean;
  tabRefs: React.MutableRefObject<{ [key: string]: HTMLButtonElement | null }>;
  tabsContainerRef: React.RefObject<HTMLDivElement | null>;
  onSubcategoryClick: (subcategoryName: string) => void;
}

export default function MobileHeader({
  currentCategory,
  activeSubcategory,
  setActiveCategory,
  setActiveSubcategory,
  setSidebarOpen,
  isClient,
  tabRefs,
  tabsContainerRef,
  onSubcategoryClick,
}: MobileHeaderProps) {
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black border-b border-zinc-800 flex flex-col w-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-4 w-full max-w-full border-b border-zinc-800">
        <span
          className="font-extrabold text-3xl tracking-tight text-white font-sans cursor-pointer select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          onClick={() => {
            setActiveCategory(null);
            setActiveSubcategory(null);
            // Limpiar localStorage al regresar a Explorar
            if (isClient) {
              localStorage.removeItem('activeCategory');
              localStorage.removeItem('activeSubcategory');
            }
            const mainElement = document.querySelector('main');
            if (mainElement) {
              mainElement.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          AIFinder
        </span>
        <span className="flex-1 flex justify-end gap-4">
          <button className="text-zinc-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white focus:outline-none cursor-pointer"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </span>
      </div>
      {/* Tabs de subcategorías solo si hay categoría activa */}
      {currentCategory && (
        <div className="w-full bg-black">
          <div
            ref={tabsContainerRef}
            className="tabs-scroll-container"
            style={{
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'hidden',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              maxWidth: '100vw',
              padding: '12px 16px',
            }}
          >
            {currentCategory.subcategories.map((subcat) => (
              <button
                key={subcat.name}
                ref={(el) => {
                  tabRefs.current[subcat.name] = el;
                }}
                onClick={() => onSubcategoryClick(subcat.name)}
                style={{
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  marginRight: '16px',
                }}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-full ${
                  activeSubcategory === subcat.name
                    ? 'bg-blue-600 text-white'
                    : 'text-white/80 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {subcat.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
