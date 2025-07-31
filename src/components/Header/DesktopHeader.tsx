'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AICategory, AITool } from '../../data/ai-tools';
import SearchDropdown from './SearchDropdown';
import { useHighlightedToolContext } from '../../app/layout';

interface DesktopHeaderProps {
  currentCategory: AICategory | null;
  activeSubcategory: string | null;
  setActiveCategory: (category: string | null) => void;
  setActiveSubcategory: (subcategory: string | null) => void;
  isScrolled: boolean;
  activeFilter: 'all' | 'free' | 'paid';
  setActiveFilter: (filter: 'all' | 'free' | 'paid') => void;
  hoveredFilter: string | null;
  setHoveredFilter: (filter: string | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  headerRow1Ref: React.RefObject<HTMLDivElement | null>;
  headerRow2Ref: React.RefObject<HTMLDivElement | null>;
  onSubcategoryClick: (subcategoryName: string) => void;
  activeNav?: string;
  setActiveNav?: (nav: string) => void;
}

export default function DesktopHeader({
  currentCategory,
  activeSubcategory,
  setActiveCategory,
  setActiveSubcategory,
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
  activeNav = 'explorar',
  setActiveNav,
}: DesktopHeaderProps) {
  const [hoveredNav, setHoveredNav] = React.useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { setHighlightedTool } = useHighlightedToolContext();

  // Manejar clics fuera del componente de búsqueda
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Manejar click en herramienta del dropdown
  const handleToolClick = (tool: AITool, category: string, subcategory: string) => {
    // Navegar a la categoría y subcategoría donde está la IA
    setActiveCategory(category);

    // Usar onSubcategoryClick para navegar correctamente a la subcategoría
    setTimeout(() => {
      onSubcategoryClick(subcategory);
      // Resaltar la IA después de navegar
      setTimeout(() => {
        setHighlightedTool(tool.name);
        // Limpiar el resaltado después de 3 segundos
        setTimeout(() => {
          setHighlightedTool(null);
        }, 3000);
      }, 500); // Delay para que se complete la navegación
    }, 100);

    setIsSearchFocused(false);
    setSearchTerm(''); // Limpiar búsqueda
  };
  if (!currentCategory) {
    return (
      <div className="hidden md:block bg-black border-b border-zinc-800 fixed top-0 left-[calc(4px+270px+1px)] right-[calc(12px+1px)] z-50 shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <button
              className={`relative font-medium transition-colors ${
                activeNav === 'explorar'
                  ? 'text-white'
                  : hoveredNav === 'explorar'
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
              }`}
              onClick={() => setActiveNav && setActiveNav('explorar')}
              onMouseEnter={() => setHoveredNav('explorar')}
              onMouseLeave={() => setHoveredNav(null)}
            >
              Explorar
              {(activeNav === 'explorar' || hoveredNav === 'explorar') && (
                <span
                  className={`absolute -left-3 -right-3 -bottom-5 h-0.5 rounded ${
                    activeNav === 'explorar' ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              )}
            </button>
            <button
              className={`relative font-medium transition-colors ${
                activeNav === 'nuevas'
                  ? 'text-white'
                  : hoveredNav === 'nuevas'
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
              }`}
              onClick={() => setActiveNav && setActiveNav('nuevas')}
              onMouseEnter={() => setHoveredNav('nuevas')}
              onMouseLeave={() => setHoveredNav(null)}
            >
              Nuevas Adiciones
              {(activeNav === 'nuevas' || hoveredNav === 'nuevas') && (
                <span
                  className={`absolute -left-3 -right-3 -bottom-5 h-0.5 rounded ${
                    activeNav === 'nuevas' ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              )}
            </button>
          </nav>

          {/* Search */}
          <div className="relative" ref={searchRef}>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Buscar IAs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className="w-64 bg-black border border-zinc-800 rounded-md pl-10 pr-4 py-2 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
            />
            <SearchDropdown
              searchTerm={searchTerm}
              isVisible={isSearchFocused}
              onToolClick={handleToolClick}
              isMobile={false}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden md:block">
      {/* Primera fila: Se oculta al hacer scroll */}
      <div
        ref={headerRow1Ref}
        className={`flex items-center bg-black px-6 py-3 border-b border-zinc-800 transition-all duration-200 ${
          isScrolled ? 'h-0 p-0 m-0 overflow-hidden opacity-0 border-0' : ''
        }`}
      >
        <div
          className="text-xl font-bold text-white cursor-pointer select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          onClick={() => {
            setActiveCategory(null);
            setActiveSubcategory(null);
            const mainElement = document.querySelector('main');
            if (mainElement) {
              mainElement.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          {currentCategory.name}
        </div>
        <div className="flex-1 flex justify-end">
          <div className="flex gap-[0.5px] mr-0 relative">
            {[
              { key: 'all', label: 'Ver Todas' },
              { key: 'free', label: 'Gratis' },
              { key: 'paid', label: 'Pago' },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`relative px-3 py-1.5 text-sm font-semibold text-white transition-colors border-none bg-transparent focus:outline-none hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${
                  activeFilter === key ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]' : ''
                }`}
                onClick={() => setActiveFilter(key as 'all' | 'free' | 'paid')}
                onMouseEnter={() => setHoveredFilter(key)}
                onMouseLeave={() => setHoveredFilter(null)}
              >
                {label}
                {/* Línea intensa si es activo */}
                {activeFilter === key && (
                  <span className="absolute left-0 right-0 -bottom-3 h-0.5 bg-white rounded drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                )}
                {/* Línea tenue si está en hover y no es el activo */}
                {hoveredFilter === key && activeFilter !== key && (
                  <span className="absolute left-0 right-0 -bottom-3 h-0.5 bg-white/40 rounded" />
                )}
              </button>
            ))}
            {/* Línea base continua que conecta todos los filtros */}
            <div className="absolute left-0 right-0 -bottom-3 h-0.5 bg-white/10 rounded" />
          </div>
        </div>
      </div>

      {/* Segunda fila: Se queda fija arriba al hacer scroll */}
      <div
        ref={headerRow2Ref}
        className={`flex items-center justify-between bg-black px-6 py-3 border-b border-zinc-800 transition-all duration-150 ${
          isScrolled
            ? 'fixed top-0 left-[calc(4px+270px+1px)] right-[calc(12px+1px)] z-50 shadow-lg border-t border-zinc-800'
            : 'relative z-20'
        }`}
      >
        <div className="flex gap-1 ml-1">
          {currentCategory.subcategories.map((subcat) => (
            <button
              key={subcat.name}
              onClick={() => onSubcategoryClick(subcat.name)}
              className={`px-3 py-1.5 text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none rounded-full ${
                activeSubcategory === subcat.name
                  ? 'bg-blue-600 text-white drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]'
                  : 'text-white/90 hover:bg-blue-600 hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]'
              }`}
            >
              {subcat.name}
            </button>
          ))}
        </div>
        <div className="flex items-center w-full max-w-[280px] mr-0">
          <div className="relative w-full" ref={searchRef}>
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Buscar IAs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              className="w-full bg-black border border-zinc-600 rounded-md pl-10 pr-3 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500 transition-colors"
            />
            <SearchDropdown
              searchTerm={searchTerm}
              isVisible={isSearchFocused}
              onToolClick={handleToolClick}
              isMobile={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
