'use client';

import React from 'react';

import { AICategory } from '../../data/ai-tools';

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
}: DesktopHeaderProps) {
  if (!currentCategory) {
    return (
      <div className="hidden md:block bg-black border-b border-zinc-800">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <button className="text-white hover:text-zinc-300 transition-colors font-medium border-b-2 border-white pb-1">
              Explorar
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors font-medium">
              Códigos de Cupón
            </button>
            <button className="text-zinc-400 hover:text-white transition-colors font-medium">
              Nuevas Adiciones
            </button>
          </nav>

          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
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
              className="w-64 bg-black border border-zinc-800 rounded-md pl-10 pr-4 py-2 text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
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
        className={`flex items-center bg-black px-6 py-3 border-b border-zinc-800 transition-all duration-300 ${
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
                  <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-white rounded drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                )}
                {/* Línea tenue si está en hover y no es el activo */}
                {hoveredFilter === key && activeFilter !== key && (
                  <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-white/40 rounded" />
                )}
              </button>
            ))}
            {/* Línea base continua que conecta todos los filtros */}
            <div className="absolute left-0 right-0 -bottom-2 h-0.5 bg-white/10 rounded" />
          </div>
        </div>
      </div>

      {/* Segunda fila: Se queda fija arriba al hacer scroll */}
      <div
        ref={headerRow2Ref}
        className={`flex items-center justify-between bg-black px-6 py-3 border-b border-zinc-800 transition-all duration-300 ${
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
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
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
              className="w-full bg-black border border-zinc-600 rounded-md pl-10 pr-3 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-500 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
