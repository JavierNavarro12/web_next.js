'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AICategory, AITool } from '../../data/ai-tools';
import SearchDropdown from './SearchDropdown';
import { useHighlightedToolContext } from '../../app/providers';

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
  activeNav?: string;
  setActiveNav?: (nav: string) => void;
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
  activeNav = 'explorar',
  setActiveNav,
}: MobileHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const { setHighlightedTool } = useHighlightedToolContext();

  // Manejar clics fuera del componente de búsqueda
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Excluir el botón de búsqueda y el área de búsqueda de la lógica de "click afuera"
      if (
        searchRef.current &&
        !searchRef.current.contains(target) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(target)
      ) {
        setIsSearchOpen(false);
        setSearchTerm(''); // Limpiar búsqueda al cerrar
      }
    };

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isSearchOpen, setIsSearchOpen, setSearchTerm]);

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

    setIsSearchOpen(false);
    setSearchTerm(''); // Limpiar búsqueda
  };
  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black border-b border-zinc-800 flex flex-col w-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-4 w-full max-w-full border-b border-zinc-800">
        <span
          className="font-extrabold text-3xl tracking-tight text-white font-sans cursor-pointer select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
          onClick={() => {
            setActiveCategory(null);
            setActiveSubcategory(null);
            // Navegar a explorar si existe setActiveNav
            if (setActiveNav) {
              setActiveNav('explorar');
            }
            // Asegurar navegación a la home si estamos en /articles/[slug]
            if (
              typeof window !== 'undefined' &&
              window.location.pathname.startsWith('/articles/')
            ) {
              window.location.href = '/';
            }
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
          <button
            ref={searchButtonRef}
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label={isSearchOpen ? 'Cerrar búsqueda' : 'Buscar herramientas de IA'}
            title={isSearchOpen ? 'Cerrar búsqueda' : 'Buscar herramientas de IA'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (isSearchOpen) {
                // Cerrar búsqueda
                setIsSearchOpen(false);
                setSearchTerm(''); // Limpiar búsqueda al cerrar
              } else {
                // Abrir búsqueda
                setIsSearchOpen(true);
              }
            }}
          >
            {isSearchOpen ? (
              // Cruz (X) cuando está abierto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Lupa cuando está cerrado
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-white focus:outline-none cursor-pointer"
            aria-label="Abrir menú de navegación"
            title="Abrir menú de navegación"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" aria-hidden="true">
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

      {/* Barra de búsqueda móvil */}
      {isSearchOpen && (
        <div className="w-full bg-black border-b border-zinc-800 px-4 py-4" ref={searchRef}>
          <div className="relative">
            {/* Barra de búsqueda con lupa */}
            <div className="flex items-center bg-black border border-zinc-600 rounded-lg">
              <div className="pl-4 pr-2 py-3 pointer-events-none select-none">
                <span style={{ color: '#d4d4d8', fontSize: '16px' }}>🔍</span>
              </div>
              <input
                type="text"
                placeholder="Buscar IAs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none py-3 pr-4 text-base text-white placeholder-zinc-400"
                autoFocus
              />
            </div>

            {/* SearchDropdown responsive para móvil - posicionado debajo */}
            <SearchDropdown
              searchTerm={searchTerm}
              isVisible={true}
              onToolClick={handleToolClick}
              isMobile={true}
            />
          </div>
        </div>
      )}

      {/* Navegación principal móvil - ocultar header "Artículos" */}
      {!currentCategory && activeNav !== 'articulos' && activeNav !== 'explorar' && (
        <div className="w-full bg-black border-b border-zinc-800">
          <div className="flex gap-1 overflow-x-auto scrollbar-none px-4 py-3">
            <button
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-all ${
                activeNav === 'explorar'
                  ? 'bg-blue-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
              onClick={() => setActiveNav && setActiveNav('explorar')}
            >
              Explorar
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-full transition-all ${
                activeNav === 'nuevas'
                  ? 'bg-blue-600 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
              onClick={() => {
                setActiveNav && setActiveNav('nuevas');
                if (
                  typeof window !== 'undefined' &&
                  window.location.pathname.startsWith('/articles/')
                ) {
                  window.location.href = '/';
                }
              }}
            >
              Nuevas Adiciones
            </button>
          </div>
        </div>
      )}

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
