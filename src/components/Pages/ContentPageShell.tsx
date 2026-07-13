'use client';

import React, { useEffect, useRef } from 'react';
import MobileHeader from '../Header/MobileHeader';
import {
  useAppContext,
  useSubcategoryContext,
  SidebarDrawerContext,
  useActiveNavContext,
} from '../../app/providers';

/**
 * Envoltorio de las páginas de contenido servidas desde el servidor
 * (fichas de herramienta y páginas de categoría).
 *
 * Los children llegan ya renderizados en el servidor, así que el HTML
 * indexable no depende de la hidratación.
 */
export default function ContentPageShell({ children }: { children: React.ReactNode }) {
  const { setActiveCategory } = useAppContext();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContext();
  const { setActiveNav, activeNav } = useActiveNavContext();
  const { setSidebarOpen } = React.useContext(SidebarDrawerContext);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    setActiveNav('explorar');
    setActiveCategory(null);
    setActiveSubcategory(null);
  }, [setActiveNav, setActiveCategory, setActiveSubcategory]);

  return (
    <div className="min-h-screen bg-black text-white">
      <MobileHeader
        currentCategory={null}
        activeSubcategory={activeSubcategory}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        setSidebarOpen={setSidebarOpen}
        isClient={isClient}
        tabRefs={tabRefs}
        tabsContainerRef={tabsContainerRef}
        onSubcategoryClick={() => {}}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <div className="max-w-5xl mx-auto px-4 py-6 pt-[96px] md:pt-8">{children}</div>
    </div>
  );
}
