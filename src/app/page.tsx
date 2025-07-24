'use client';

import React, { useState, useEffect, useRef } from 'react';
import { aiCategories, AITool } from '../data/ai-tools';
import CategorySection from '../components/CategorySection';
import AIToolCard from '../components/AIToolCard';
import { useAppContext, useSubcategoryContext, SidebarDrawerContext } from './layout';

export default function HomePage() {
  const { activeCategory, setActiveCategory } = useAppContext();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContext();
  const { setSidebarOpen } = React.useContext(SidebarDrawerContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const isProgrammaticScroll = useRef(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'free'>('all');

  // Refs para las filas del header
  const headerRow1Ref = useRef<HTMLDivElement>(null);
  const headerRow2Ref = useRef<HTMLDivElement>(null);

  // 1. Crea un ref para cada tab de subcategoría:
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  const currentCategory = activeCategory
    ? aiCategories.find((cat) => cat.name === activeCategory)
    : null;

  // Función para formatear el texto de pricing
  const getPricingText = (pricing?: string) => {
    switch (pricing) {
      case 'free':
        return 'Gratis';
      case 'paid':
        return 'Pago';
      case 'freemium':
        return 'Gratis y pago';
      default:
        return 'Gratis y pago';
    }
  };

  // Función para manejar click en herramienta
  const handleToolClick = (tool: AITool) => {
    if (tool.url) {
      window.open(tool.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Manejar scroll para detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      if (currentCategory) {
        const sections = currentCategory.subcategories.map((subcat) => ({
          id: subcat.name.replace(/\s+/g, '-'),
          name: subcat.name,
          element: document.getElementById(subcat.name.replace(/\s+/g, '-')),
        }));

        const currentSection = '';
        const mainElement = document.querySelector('main');
        const scrollTop = mainElement ? mainElement.scrollTop : window.scrollY;

        // En móvil, el header es fijo, así que necesitamos ajustar el offset
        const isMobile = window.innerWidth < 768;
        const headerOffset = isMobile ? 180 : 50; // Header móvil fijo es más alto

        // Encontrar la sección activa considerando también el final de la página
        let closestSection = '';
        let closestDistance = Infinity;

        // Verificar si estamos cerca del final de la página
        const isNearBottom = mainElement
          ? mainElement.clientHeight + scrollTop >= mainElement.scrollHeight - 100
          : window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 100;

        sections.forEach(({ name, element }, index) => {
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;

            // Si estamos cerca del final, activar la última sección visible
            if (isNearBottom && index === sections.length - 1) {
              closestSection = name;
              return;
            }

            // Si el elemento está visible en el viewport (considerando el header)
            if (elementTop <= headerOffset + 100 && elementBottom > headerOffset) {
              const distance = Math.abs(elementTop - headerOffset);
              if (distance < closestDistance) {
                closestDistance = distance;
                closestSection = name;
              }
            }
          }
        });

        // Si no encontramos ninguna sección pero hay secciones disponibles
        if (!closestSection && sections.length > 0) {
          // Si estamos al principio, usar la primera sección
          if (scrollTop < headerOffset) {
            closestSection = sections[0].name;
          }
          // Si estamos al final, usar la última sección
          else if (isNearBottom) {
            closestSection = sections[sections.length - 1].name;
          }
        }

        if (closestSection && closestSection !== activeSubcategory) {
          setActiveSubcategory(closestSection);
        }

        // Controlar el estado de scroll para desktop
        if (!isMobile) {
          if (scrollTop > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        }
      }
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll, { passive: true });
      return () => mainElement.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentCategory, setActiveSubcategory, activeSubcategory]);

  // Función para detectar la sección activa basada en el scroll actual
  const detectActiveSection = () => {
    if (!currentCategory) return;

    const sections = currentCategory.subcategories.map((subcat) => ({
      id: subcat.name.replace(/\s+/g, '-'),
      name: subcat.name,
      element: document.getElementById(subcat.name.replace(/\s+/g, '-')),
    }));

    let currentSection = '';
    const viewportCenter = window.innerHeight / 2;

    sections.forEach(({ name, element }) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;

        if (Math.abs(elementCenter - viewportCenter) < 300) {
          currentSection = name;
        }
      }
    });

    if (currentSection && currentSection !== activeSubcategory) {
      setActiveSubcategory(currentSection);
    }
  };

  // Detectar sección activa al cargar y cuando cambie la categoría
  useEffect(() => {
    if (currentCategory) {
      // Detectar inmediatamente
      detectActiveSection();
    }
  }, [currentCategory]);

  // Auto-scroll del tab cuando cambie la subcategoría activa (tanto por clic como por scroll)
  useEffect(() => {
    if (activeSubcategory && tabRefs.current[activeSubcategory] && tabsContainerRef.current) {
      const button = tabRefs.current[activeSubcategory];
      const container = tabsContainerRef.current;

      // Verificar si es móvil
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // En móvil, siempre centrar la subcategoría activa
        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const isOutOfView =
          buttonRect.left < containerRect.left || buttonRect.right > containerRect.right;

        // Si está fuera de vista o queremos centrarlo automáticamente
        if (isOutOfView) {
          // Scroll para poner el elemento seleccionado al inicio
          const scrollLeft = button.offsetLeft - 16; // 16px de padding

          container.scrollTo({
            left: Math.max(0, scrollLeft),
            behavior: 'smooth',
          });
        }
      }
    }
  }, [activeSubcategory]);

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
  }, [currentCategory]);

  // Reemplaza el useEffect de sincronización por:
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

  // Función para scroll suave a sección con offset dinámico
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calcular la altura real del header
      let offset = 0;
      if (headerRow1Ref.current) offset += headerRow1Ref.current.offsetHeight;
      if (headerRow2Ref.current) offset += headerRow2Ref.current.offsetHeight;
      const elementPosition = element.offsetTop - offset;
      const mainScrollElement = document.querySelector('main');
      if (mainScrollElement) {
        mainScrollElement.scrollTo({ top: elementPosition, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
      // Solo forzar isScrolled si NO es la primera subcategoría
      const isFirstSubcategory =
        currentCategory &&
        currentCategory.subcategories.length > 0 &&
        sectionId === currentCategory.subcategories[0].name.replace(/\s+/g, '-');
      const scrollElement = document.querySelector('main');
      let lastScrollY = scrollElement ? scrollElement.scrollTop : window.scrollY;
      let stableCount = 0;
      const poll = setInterval(() => {
        const currentScrollY = scrollElement ? scrollElement.scrollTop : window.scrollY;
        if (currentScrollY === lastScrollY) {
          stableCount++;
        } else {
          stableCount = 0;
          lastScrollY = currentScrollY;
        }
        if (stableCount > 2 || stableCount > 30) {
          if (!isFirstSubcategory && currentScrollY > 50) setIsScrolled(true);
          else if (isFirstSubcategory) setIsScrolled(false);
          clearInterval(poll);
        }
      }, 16);
    }
  };

  // Función para manejar clic en subcategoría
  const handleSubcategoryClick = (subcategoryName: string) => {
    setActiveSubcategory(subcategoryName);
    isProgrammaticScroll.current = true;
    scrollToSection(subcategoryName.replace(/\s+/g, '-'));
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 400);
  };

  // Reemplaza el return principal para que si no hay categoría activa, muestre solo el header móvil y la sección Explorar centrada y vacía.
  return (
    <div className="min-h-screen bg-black">
      {/* Contenido principal - solo cuando hay categoría activa */}
      {currentCategory && (
        <div className="bg-black relative overflow-hidden">
          {/* Header móvil */}
          <div className="md:hidden absolute top-0 left-0 right-0 z-40 bg-black border-b border-zinc-800 flex flex-col w-full overflow-hidden">
            <div className="flex items-center justify-between px-4 py-4 w-full max-w-full border-b border-zinc-800">
              <span
                className="font-extrabold text-3xl tracking-tight text-white font-sans cursor-pointer select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
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
                  {currentCategory.subcategories.map((subcat, index) => (
                    <button
                      key={subcat.name}
                      ref={(el) => {
                        tabRefs.current[subcat.name] = el;
                      }}
                      onClick={() => {
                        // 1. Primero actualizar la subcategoría activa y hacer scroll a la sección
                        setActiveSubcategory(subcat.name);
                        const sectionId = subcat.name.replace(/\s+/g, '-');
                        const element = document.getElementById(sectionId);

                        if (element) {
                          // Calcular la altura real del header móvil
                          const mobileHeader = document.querySelector('.md\\:hidden.sticky');
                          const headerHeight = mobileHeader
                            ? mobileHeader.getBoundingClientRect().height
                            : 120;
                          const elementPosition = element.offsetTop - headerHeight - 10; // 10px extra de padding

                          // Scroll hacia la sección
                          window.scrollTo({
                            top: Math.max(0, elementPosition),
                            behavior: 'smooth',
                          });
                        }

                        // 2. Después hacer scroll del carrusel de tabs
                        setTimeout(() => {
                          const button = tabRefs.current[subcat.name];
                          const container = tabsContainerRef.current;

                          if (button && container) {
                            // Calcular scroll para poner el elemento seleccionado al inicio
                            const scrollLeft = button.offsetLeft - 16; // 16px de padding

                            container.scrollTo({
                              left: Math.max(0, scrollLeft),
                              behavior: 'smooth',
                            });
                          }
                        }, 100);
                      }}
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

          {/* Desktop: header de dos filas como ToolFolio */}
          <div className="hidden md:block">
            {currentCategory && (
              <>
                {/* Primera fila: Se oculta al hacer scroll */}
                <div
                  ref={headerRow1Ref}
                  className={`flex items-center justify-between bg-black px-8 py-3 border-b border-zinc-800 transition-all duration-300 ${isScrolled ? 'h-0 p-0 m-0 overflow-hidden opacity-0 border-0' : ''}`}
                >
                  <div
                    className="text-2xl font-bold text-white cursor-pointer select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
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
                  <div className="flex gap-6">
                    <button
                      className={`relative px-4 py-2 text-sm font-semibold text-white transition-colors border-none bg-transparent focus:outline-none hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${activeFilter === 'all' ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]' : ''}`}
                      onClick={() => setActiveFilter('all')}
                    >
                      View All
                      {activeFilter === 'all' && (
                        <span className="absolute left-0 right-0 -bottom-3 h-0.5 bg-white rounded drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                      )}
                    </button>
                    <button
                      className={`relative px-4 py-2 text-sm font-semibold text-white transition-colors border-none bg-transparent focus:outline-none hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${activeFilter === 'free' ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]' : ''}`}
                      onClick={() => setActiveFilter('free')}
                    >
                      Agentic
                      {activeFilter === 'free' && (
                        <span className="absolute left-0 right-0 -bottom-3 h-0.5 bg-white rounded drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                      )}
                    </button>
                    <button className="relative px-4 py-2 text-sm font-semibold text-white transition-colors border-none bg-transparent focus:outline-none hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]">
                      Open Source
                    </button>
                  </div>
                </div>

                {/* Segunda fila: Se queda fija arriba al hacer scroll */}
                <div
                  ref={headerRow2Ref}
                  className={`flex items-center justify-between bg-black px-8 py-3 border-b border-zinc-800 transition-all duration-300 ${isScrolled ? 'fixed top-0 left-[calc(4px+270px+1px)] right-[calc(12px+1px)] z-50 shadow-lg border-t border-zinc-800' : 'relative z-20'}`}
                >
                  <div className="flex gap-2">
                    {currentCategory.subcategories.map((subcat) => (
                      <button
                        key={subcat.name}
                        onClick={() => handleSubcategoryClick(subcat.name)}
                        className={`px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none rounded-full ${activeSubcategory === subcat.name ? 'bg-blue-600 text-white drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]' : 'text-white/90 hover:bg-blue-600 hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]'}`}
                      >
                        {subcat.name}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center w-full max-w-xs ml-4">
                    <div className="relative w-full">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
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
                        placeholder="Search Tools"
                        className="w-full bg-black border border-white/10 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Si no hay categoría activa, muestra sección Explorar vacía */}
          {!currentCategory && (
            <div className="flex items-center justify-center h-96 md:pt-0 pt-24">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Explorar</h2>
                <p className="text-zinc-400">Selecciona una categoría del menú para comenzar</p>
              </div>
            </div>
          )}

          {/* Contenido: responsive layout */}
          {currentCategory && (
            <div className="px-2 py-1 md:px-4 md:py-6 md:pt-4 pt-[140px]">
              {currentCategory.subcategories.map((subcat) => (
                <div
                  key={subcat.name}
                  id={subcat.name.replace(/\s+/g, '-')}
                  className="mb-4 md:mb-6"
                >
                  {/* Vista móvil: Lista en contenedores */}
                  <div className="md:hidden">
                    <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
                      <h2 className="text-xl font-bold mb-4 text-white pl-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                        {subcat.name}
                      </h2>
                      <div className="space-y-3">
                        {subcat.tools.map((tool) => (
                          <div
                            key={tool.name}
                            className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
                            onClick={() => handleToolClick(tool)}
                          >
                            <img
                              src={tool.logo || tool.image}
                              alt={tool.name}
                              className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
                              <p className="text-zinc-400 text-sm leading-relaxed">
                                {tool.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Vista desktop: Cada subcategoría en su propio contenedor */}
                  <div className="hidden md:block">
                    <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
                      <h2 className="text-xl font-bold mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                        {subcat.name}
                      </h2>
                      <div className="grid grid-cols-4 gap-4">
                        {subcat.tools.map((tool) => (
                          <div
                            key={tool.name}
                            className="group cursor-pointer"
                            onClick={() => handleToolClick(tool)}
                          >
                            {/* Imagen grande con overlay */}
                            <div className="relative aspect-video bg-zinc-800 rounded mb-3 overflow-hidden">
                              <img
                                src={tool.image}
                                alt={tool.name}
                                className="w-full h-full object-cover rounded transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                              />
                              {/* Overlay con pricing */}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <div className="bg-zinc-800/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                                  {getPricingText(tool.pricing)}
                                </div>
                              </div>
                            </div>
                            {/* Texto debajo */}
                            <div>
                              <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-all">
                                {tool.name}
                              </h3>
                              <p className="text-zinc-400 text-sm leading-relaxed">
                                {tool.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Si no hay categoría activa, muestra sección Explorar vacía */}
      {!currentCategory && (
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Explorar</h2>
            <p className="text-zinc-400">Selecciona una categoría del menú para comenzar</p>
          </div>
        </div>
      )}
    </div>
  );
}
