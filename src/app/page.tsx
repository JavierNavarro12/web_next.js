'use client';

import React, { useState, useEffect, useRef } from 'react';
import { aiCategories, AITool } from '../data/ai-tools';
import CategorySection from '../components/CategorySection';
import AIToolCard from '../components/AIToolCard';
import FeedbackPage from '../components/FeedbackPage';
import {
  useAppContext,
  useSubcategoryContext,
  SidebarDrawerContext,
  useFeedbackContext,
} from './layout';
import Image from 'next/image';

export default function HomePage() {
  const { activeCategory, setActiveCategory } = useAppContext();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContext();
  const { setSidebarOpen } = React.useContext(SidebarDrawerContext);
  const { showFeedback, setShowFeedback } = useFeedbackContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const isProgrammaticScroll = useRef(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'free' | 'paid'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Refs para las filas del header
  const headerRow1Ref = useRef<HTMLDivElement>(null);
  const headerRow2Ref = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Efecto para asegurar que estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efecto para persistir categoría activa en localStorage
  useEffect(() => {
    if (isClient && activeCategory) {
      localStorage.setItem('activeCategory', activeCategory);
    } else if (isClient && !activeCategory) {
      localStorage.removeItem('activeCategory');
    }
  }, [activeCategory, isClient]);

  // Efecto para persistir subcategoría activa en localStorage
  useEffect(() => {
    if (isClient && activeSubcategory) {
      localStorage.setItem('activeSubcategory', activeSubcategory);
    } else if (isClient && !activeSubcategory) {
      localStorage.removeItem('activeSubcategory');
    }
  }, [activeSubcategory, isClient]);

  // Efecto para hacer scroll al principio al cambiar de categoría
  useEffect(() => {
    if (isClient && activeCategory) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 100);
    }
  }, [activeCategory, isClient]);

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

  // Nueva función para filtrar herramientas según el filtro y búsqueda
  const filterTools = (tools: AITool[]) => {
    let filtered = tools;
    if (activeFilter === 'free') filtered = filtered.filter((t) => t.pricing === 'free');
    if (activeFilter === 'paid') filtered = filtered.filter((t) => t.pricing === 'paid');
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (t) =>
          t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (t.description && t.description.toLowerCase().includes(searchTerm.toLowerCase())),
      );
    }
    return filtered;
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

  // Función para obtener herramientas destacadas (mezcla de diferentes categorías)
  const getFeaturedTools = (): AITool[] => {
    const allTools: AITool[] = [];
    aiCategories.forEach((category) => {
      category.subcategories.forEach((subcat) => {
        if (subcat.tools) {
          allTools.push(...subcat.tools);
        }
      });
    });

    // Las 8 IAs más populares basadas en datos reales de uso y reconocimiento
    const popularToolNames = [
      'ChatGPT', // #1 - OpenAI, líder indiscutible en IA conversacional
      'Claude', // #2 - Anthropic, competidor directo de ChatGPT
      'Midjourney', // #3 - Líder en generación de imágenes
      'DALL·E', // #4 - OpenAI, pionero en generación de imágenes
      'Sora', // #5 - OpenAI, líder en generación de video
      'Gemini', // #6 - Google, competidor principal
      'Stable Diffusion', // #7 - Open source, muy popular
      'GitHub Copilot', // #8 - Microsoft, líder en IA para programación
    ];

    const featured = popularToolNames
      .map((name) => allTools.find((t) => t.name === name))
      .filter((tool): tool is AITool => tool !== undefined);

    // Si no encontramos suficientes herramientas populares, usar las primeras disponibles
    if (featured.length < 8) {
      const remaining = allTools
        .filter((tool) => !featured.some((f) => f.name === tool.name))
        .slice(0, 8 - featured.length);
      featured.push(...remaining);
    }

    return featured;
  };

  // Función para obtener herramientas por categoría específica
  const getToolsByCategory = (categoryName: string, limit?: number) => {
    const category = aiCategories.find((cat) => cat.name === categoryName);
    if (!category) return [];

    const tools: AITool[] = [];
    category.subcategories.forEach((subcat) => {
      if (subcat.tools) {
        tools.push(...subcat.tools);
      }
    });

    return limit ? tools.slice(0, limit) : tools;
  };

  // Función para contar herramientas por categoría
  const getToolsCount = (categoryName: string) => {
    const tools = getToolsByCategory(categoryName);
    return tools.length;
  };

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
          // Limpiar categoría y subcategoría activa para ir a Explorar
          setActiveCategory(null);
          setActiveSubcategory(null);
          // Limpiar localStorage
          if (isClient) {
            localStorage.removeItem('activeCategory');
            localStorage.removeItem('activeSubcategory');
          }
          // Hacer scroll al top
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
        {/* Header móvil SIEMPRE visible */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black border-b border-zinc-800 flex flex-col w-full overflow-hidden">
          <div className="flex items-center justify-between px-4 py-4 w-full max-w-full border-b border-zinc-800">
            <span className="font-extrabold text-3xl tracking-tight text-white font-sans cursor-pointer select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
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
        </div>

        {/* Header Desktop estilo ToolFolio */}
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

        {/* Contenido principal de Explorar */}
        <div className="pt-20 md:pt-0">
          {/* Hero Section */}
          <div className="relative bg-black overflow-hidden py-4 md:py-8">
            {/* Hero Card con elementos flotantes dentro */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
              <div className="relative bg-black border border-zinc-700 rounded-2xl p-6 md:p-8 text-center overflow-hidden min-h-[450px] md:min-h-[320px]">
                {/* Vista MÓVIL - Tarjetas como en la foto original */}
                <div className="md:hidden absolute inset-0 pointer-events-none">
                  {/* Generativa - Top Left */}
                  <div
                    className="absolute top-4 left-4 w-28 h-10 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(14deg) rotateY(8deg) rotateZ(-11deg)',
                      boxShadow:
                        '-4px 4px 0px #1e40af, -5px 7px 8px rgba(30, 64, 175, 0.57), -10px 13px 18px rgba(30, 64, 175, 0.31), -20px 20px 40px rgba(30, 64, 175, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #3b82f6, #1d4ed8)',
                        boxShadow: 'inset 0px -6px 10px rgba(30, 64, 175, 0.3)',
                        textShadow: '-1px 1px 3px rgba(30, 64, 175, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Generativa
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Generativa')}
                    </span>
                  </div>

                  {/* Chatbots - Top Center */}
                  <div
                    className="absolute top-8 left-1/2 transform -translate-x-1/2 w-28 h-10 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #c084fc, #9333ea)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(12deg) rotateY(-6deg) rotateZ(8deg)',
                      boxShadow:
                        '-4px 4px 0px #7c3aed, -5px 7px 8px rgba(124, 58, 237, 0.57), -10px 13px 18px rgba(124, 58, 237, 0.31), -20px 20px 40px rgba(124, 58, 237, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #9333ea, #6b21a8)',
                        boxShadow: 'inset 0px -6px 10px rgba(124, 58, 237, 0.3)',
                        textShadow: '-1px 1px 3px rgba(124, 58, 237, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Chatbots
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Chatbots')}
                    </span>
                  </div>

                  {/* Negocios - Top Right */}
                  <div
                    className="absolute top-4 right-4 w-28 h-10 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #4ade80, #16a34a)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(14deg) rotateY(-8deg) rotateZ(11deg)',
                      boxShadow:
                        '4px 4px 0px #15803d, 5px 7px 8px rgba(21, 128, 61, 0.57), 10px 13px 18px rgba(21, 128, 61, 0.31), 20px 20px 40px rgba(21, 128, 61, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #16a34a, #14532d)',
                        boxShadow: 'inset 0px -6px 10px rgba(21, 128, 61, 0.3)',
                        textShadow: '-1px 1px 3px rgba(21, 128, 61, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Negocios
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Negocios')}
                    </span>
                  </div>

                  {/* Creatividad - Middle Left */}
                  <div
                    className="absolute top-20 left-4 w-24 h-10 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #f472b6, #ec4899)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(18deg) rotateY(6deg) rotateZ(10deg)',
                      boxShadow:
                        '-4px 4px 0px #db2777, -5px 7px 8px rgba(219, 39, 119, 0.57), -10px 13px 18px rgba(219, 39, 119, 0.31), -20px 20px 40px rgba(219, 39, 119, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #ec4899, #be185d)',
                        boxShadow: 'inset 0px -6px 10px rgba(219, 39, 119, 0.3)',
                        textShadow: '-1px 1px 3px rgba(219, 39, 119, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Creatividad
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Creatividad')}
                    </span>
                  </div>

                  {/* Salud - Middle Right */}
                  <div
                    className="absolute top-20 right-4 w-28 h-10 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #22d3ee, #0891b2)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(18deg) rotateY(-6deg) rotateZ(-10deg)',
                      boxShadow:
                        '4px 4px 0px #0e7490, 5px 7px 8px rgba(14, 116, 144, 0.57), 10px 13px 18px rgba(14, 116, 144, 0.31), 20px 20px 40px rgba(14, 116, 144, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #0891b2, #164e63)',
                        boxShadow: 'inset 0px -6px 10px rgba(14, 116, 144, 0.3)',
                        textShadow: '-1px 1px 3px rgba(14, 116, 144, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Salud
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Salud')}
                    </span>
                  </div>

                  {/* DevTools - Middle Center */}
                  <div
                    className="absolute top-32 left-1/2 transform -translate-x-1/2 w-24 h-10 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #fb923c, #ea580c)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(18deg) rotateY(-6deg) rotateZ(-10deg)',
                      boxShadow:
                        '4px 4px 0px #c2410c, 5px 7px 8px rgba(194, 65, 12, 0.57), 10px 13px 18px rgba(194, 65, 12, 0.31), 20px 20px 40px rgba(194, 65, 12, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #ea580c, #9a3412)',
                        boxShadow: 'inset 0px -6px 10px rgba(194, 65, 12, 0.3)',
                        textShadow: '-1px 1px 3px rgba(194, 65, 12, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      DevTools
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('DevTools')}
                    </span>
                  </div>
                </div>

                {/* Vista WEB - Tarjetas con los cambios actuales */}
                <div className="hidden md:block absolute inset-0 pointer-events-none">
                  {/* Generativa - Top Left */}
                  <div
                    className="absolute top-8 left-8 w-36 h-12 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(14deg) rotateY(8deg) rotateZ(-11deg)',
                      boxShadow:
                        '-4px 4px 0px #1e40af, -5px 7px 8px rgba(30, 64, 175, 0.57), -10px 13px 18px rgba(30, 64, 175, 0.31), -20px 20px 40px rgba(30, 64, 175, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #3b82f6, #1d4ed8)',
                        boxShadow: 'inset 0px -6px 10px rgba(30, 64, 175, 0.3)',
                        textShadow: '-1px 1px 3px rgba(30, 64, 175, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Generativa
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Generativa')}
                    </span>
                  </div>

                  {/* Chatbots - Top Left, más a la derecha */}
                  <div
                    className="absolute top-12 left-44 w-28 h-10 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #c084fc, #9333ea)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(12deg) rotateY(-6deg) rotateZ(8deg)',
                      boxShadow:
                        '-4px 4px 0px #7c3aed, -5px 7px 8px rgba(124, 58, 237, 0.57), -10px 13px 18px rgba(124, 58, 237, 0.31), -20px 20px 40px rgba(124, 58, 237, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #9333ea, #6b21a8)',
                        boxShadow: 'inset 0px -6px 10px rgba(124, 58, 237, 0.3)',
                        textShadow: '-1px 1px 3px rgba(124, 58, 237, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Chatbots
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Chatbots')}
                    </span>
                  </div>

                  {/* Negocios - Top Right (espejo de Generativa) */}
                  <div
                    className="absolute top-8 right-8 w-36 h-12 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #4ade80, #16a34a)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(14deg) rotateY(-8deg) rotateZ(11deg)',
                      boxShadow:
                        '4px 4px 0px #15803d, 5px 7px 8px rgba(21, 128, 61, 0.57), 10px 13px 18px rgba(21, 128, 61, 0.31), 20px 20px 40px rgba(21, 128, 61, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #16a34a, #14532d)',
                        boxShadow: 'inset 0px -6px 10px rgba(21, 128, 61, 0.3)',
                        textShadow: '-1px 1px 3px rgba(21, 128, 61, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Negocios
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Negocios')}
                    </span>
                  </div>

                  {/* Salud - Top Right, más a la izquierda (espejo de Chatbots) */}
                  <div
                    className="absolute top-12 right-44 w-28 h-10 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #22d3ee, #0891b2)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(12deg) rotateY(6deg) rotateZ(-8deg)',
                      boxShadow:
                        '4px 4px 0px #0e7490, 5px 7px 8px rgba(14, 116, 144, 0.57), 10px 13px 18px rgba(14, 116, 144, 0.31), 20px 20px 40px rgba(14, 116, 144, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #0891b2, #164e63)',
                        boxShadow: 'inset 0px -6px 10px rgba(14, 116, 144, 0.3)',
                        textShadow: '-1px 1px 3px rgba(14, 116, 144, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Salud
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Salud')}
                    </span>
                  </div>

                  {/* Creatividad - Bottom Left */}
                  <div
                    className="absolute bottom-20 left-8 w-32 h-12 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #f472b6, #ec4899)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(18deg) rotateY(6deg) rotateZ(10deg)',
                      boxShadow:
                        '-4px 4px 0px #db2777, -5px 7px 8px rgba(219, 39, 119, 0.57), -10px 13px 18px rgba(219, 39, 119, 0.31), -20px 20px 40px rgba(219, 39, 119, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #ec4899, #be185d)',
                        boxShadow: 'inset 0px -6px 10px rgba(219, 39, 119, 0.3)',
                        textShadow: '-1px 1px 3px rgba(219, 39, 119, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      Creatividad
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('Creatividad')}
                    </span>
                  </div>

                  {/* DevTools - Bottom Right (espejo de Creatividad) */}
                  <div
                    className="absolute bottom-20 right-8 w-32 h-12 flex items-center justify-center text-white font-semibold text-xs transition-all duration-400"
                    style={{
                      padding: '3px',
                      background: 'linear-gradient(180deg, #fb923c, #ea580c)',
                      borderRadius: '12px',
                      transform: 'perspective(850px) rotateX(18deg) rotateY(-6deg) rotateZ(-10deg)',
                      boxShadow:
                        '4px 4px 0px #c2410c, 5px 7px 8px rgba(194, 65, 12, 0.57), 10px 13px 18px rgba(194, 65, 12, 0.31), 20px 20px 40px rgba(194, 65, 12, 0.66)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
                      style={{
                        background: 'linear-gradient(180deg, #ea580c, #9a3412)',
                        boxShadow: 'inset 0px -6px 10px rgba(194, 65, 12, 0.3)',
                        textShadow: '-1px 1px 3px rgba(194, 65, 12, 0.73)',
                        fontSize: '10px',
                      }}
                    >
                      DevTools
                    </div>
                    <span
                      className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
                      style={{
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        width: '18px',
                        height: '18px',
                        fontSize: '9px',
                      }}
                    >
                      {getToolsCount('DevTools')}
                    </span>
                  </div>
                </div>

                {/* Contenido principal - Separado también por vista */}
                {/* Vista móvil del contenido */}
                <div className="md:hidden absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 text-center max-w-3xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    Todas las IAs
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl">
                      que necesitas en un lugar.
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-4 md:mb-5 leading-relaxed">
                    Herramientas, recursos y productos de IA. Entregado semanalmente.
                  </p>

                  {/* Newsletter signup */}
                  <div className="flex justify-center items-center max-w-md mx-auto">
                    <div className="flex w-full gap-2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 px-4 py-3 bg-zinc-800 text-white placeholder-zinc-300 focus:outline-none border border-zinc-600 rounded-full text-sm md:text-base"
                      />
                      <button className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors rounded-full text-sm md:text-base whitespace-nowrap">
                        Suscribirse
                      </button>
                    </div>
                  </div>
                </div>

                {/* Vista web del contenido */}
                <div className="hidden md:block absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-8 text-center max-w-3xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    Todas las IAs
                    <br />
                    <span className="text-2xl sm:text-3xl md:text-4xl">
                      que necesitas en un lugar.
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-4 md:mb-5 leading-relaxed">
                    Herramientas, recursos y productos de IA. Entregado semanalmente.
                  </p>

                  {/* Newsletter signup */}
                  <div className="flex justify-center items-center max-w-md mx-auto">
                    <div className="flex w-full gap-2">
                      <input
                        type="email"
                        placeholder="Email"
                        className="flex-1 px-4 py-3 bg-zinc-800 text-white placeholder-zinc-300 focus:outline-none border border-zinc-600 rounded-full text-sm md:text-base"
                      />
                      <button className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors rounded-full text-sm md:text-base whitespace-nowrap">
                        Suscribirse
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Tools Section */}
          <div className="py-0 px-4 max-w-7xl mx-auto">
            <div className="bg-black rounded-2xl border border-zinc-700 p-4 md:p-6">
              <h2
                className="text-xl md:text-2xl font-semibold text-white mb-4 text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                IAs Destacadas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {getFeaturedTools()
                  .slice(0, 8)
                  .map((tool) => (
                    <div
                      key={tool.name}
                      className="group cursor-pointer"
                      onClick={() => handleToolClick(tool)}
                    >
                      {/* Imagen grande con overlay */}
                      <div className="relative aspect-video bg-zinc-800 rounded mb-2 md:mb-3 overflow-hidden border border-[#232323]">
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          fill
                          className="w-full h-full object-cover rounded transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                        />
                        {/* Overlay con pricing */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="bg-zinc-800/90 text-white px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-xs md:text-sm font-medium">
                            {getPricingText(tool.pricing)}
                          </div>
                        </div>
                      </div>
                      {/* Texto debajo */}
                      <div>
                        <h3 className="font-bold text-white text-base md:text-lg mb-1 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-all">
                          {tool.name}
                        </h3>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Generative AI Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">IA Generativa</h2>
              <button
                onClick={() => {
                  setActiveCategory('Generativa');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Generativa', 8).map((tool) => (
                <div
                  key={tool.name}
                  className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                  onClick={() => handleToolClick(tool)}
                >
                  <div className="relative aspect-video bg-zinc-800">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-zinc-400 text-sm">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video AI Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">IA de Video</h2>
              <button
                onClick={() => {
                  setActiveCategory('Generativa');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Generativa', 8)
                .filter(
                  (tool) =>
                    tool.name === 'Sora' ||
                    tool.name === 'Veo' ||
                    tool.name === 'Runway' ||
                    tool.name === 'Pika Labs' ||
                    tool.name === 'Synthesia' ||
                    tool.name === 'Colossyan' ||
                    tool.name === 'InVideo' ||
                    tool.name === 'Fliki',
                )
                .slice(0, 8)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Code AI Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">IA para Código</h2>
              <button
                onClick={() => {
                  setActiveCategory('Generativa');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Generativa', 12)
                .filter(
                  (tool) =>
                    tool.name === 'GitHub Copilot' ||
                    tool.name === 'Cursor' ||
                    tool.name === 'Claude' ||
                    tool.name === 'Gemini' ||
                    tool.name === 'Tabnine' ||
                    tool.name === 'Codium' ||
                    tool.name === 'AskTheCode' ||
                    tool.name === 'Testim' ||
                    tool.name === 'Diffblue' ||
                    tool.name === 'Jules' ||
                    tool.name === 'DeepSource' ||
                    tool.name === 'LangChain',
                )
                .slice(0, 8)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Automation Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">Automatización de Flujos</h2>
              <button
                onClick={() => {
                  setActiveCategory('Negocios');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Negocios', 8)
                .filter(
                  (tool) =>
                    tool.name === 'Zapier' ||
                    tool.name === 'n8n' ||
                    tool.name === 'Make' ||
                    tool.name === 'Power Automate' ||
                    tool.name === 'IFTTT' ||
                    tool.name === 'Manus' ||
                    tool.name === 'Trigger.dev',
                )
                .slice(0, 8)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Office AI Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">Ofimática Inteligente</h2>
              <button
                onClick={() => {
                  setActiveCategory('Negocios');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Negocios', 8)
                .filter(
                  (tool) =>
                    tool.name === 'Notion AI' ||
                    tool.name === 'Microsoft 365 Copilot' ||
                    tool.name === 'Google Workspace Duet' ||
                    tool.name === 'Gamma' ||
                    tool.name === 'Magic Write' ||
                    tool.name === 'Canva Magic Studio',
                )
                .slice(0, 6)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Data Analysis Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">Análisis de Datos</h2>
              <button
                onClick={() => {
                  setActiveCategory('Negocios');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Negocios', 8)
                .filter(
                  (tool) =>
                    tool.name === 'Power BI' ||
                    tool.name === 'Tableau' ||
                    tool.name === 'ThoughtSpot' ||
                    tool.name === 'Perplexity' ||
                    tool.name === 'AlphaSense' ||
                    tool.name === 'Kavout',
                )
                .slice(0, 6)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Project Management Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">Gestión de Proyectos</h2>
              <button
                onClick={() => {
                  setActiveCategory('Negocios');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Negocios', 8)
                .filter(
                  (tool) =>
                    tool.name === 'ClickUp' ||
                    tool.name === 'Asana' ||
                    tool.name === 'Monday.com' ||
                    tool.name === 'Trello',
                )
                .slice(0, 4)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Legal AI Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">IA Legal</h2>
              <button
                onClick={() => {
                  setActiveCategory('Negocios');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Negocios', 8)
                .filter(
                  (tool) =>
                    tool.name === 'Harvey' ||
                    tool.name === 'Luminance' ||
                    tool.name === 'DoNotPay' ||
                    tool.name === 'Spellbook' ||
                    tool.name === 'Evisort' ||
                    tool.name === 'LawGeex',
                )
                .slice(0, 6)
                .map((tool) => (
                  <div
                    key={tool.name}
                    className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                    onClick={() => handleToolClick(tool)}
                  >
                    <div className="relative aspect-video bg-zinc-800">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-zinc-400 text-sm">{tool.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Business & Productivity Section */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-white">Negocios y Productividad</h2>
              <button
                onClick={() => {
                  setActiveCategory('Negocios');
                }}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
              >
                Ver Todas →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {getToolsByCategory('Negocios', 4).map((tool) => (
                <div
                  key={tool.name}
                  className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
                  onClick={() => handleToolClick(tool)}
                >
                  <div className="relative aspect-video bg-zinc-800">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-zinc-400 text-sm">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-12 text-center">
              Explorar por Categoría
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {aiCategories.slice(0, 6).map((category) => (
                <div
                  key={category.name}
                  className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-zinc-600 transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveCategory(category.name)}
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    {category.subcategories.length} subcategorías
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 3).map((subcat) => (
                      <span
                        key={subcat.name}
                        className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-xs"
                      >
                        {subcat.name}
                      </span>
                    ))}
                    {category.subcategories.length > 3 && (
                      <span className="text-zinc-500 text-xs px-2 py-1">
                        +{category.subcategories.length - 3} más
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-black border-t border-zinc-800 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-12">
              {/* Mobile Layout */}
              <div className="md:hidden space-y-8">
                {/* Logo, Tagline, Social Icons */}
                <div>
                  <div className="mb-4">
                    <span className="font-extrabold text-2xl tracking-tight text-white font-sans drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                      AIFinder
                    </span>
                  </div>
                  <p className="text-white text-sm mb-6">
                    Todas las IAs que necesitas en un solo lugar.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/javier-navarro-rodríguez-056023331/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:navarrojavi107@gmail.com"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/34693744798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Tool Categories - Mobile */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Categorías de IAs</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Generativa
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Seguridad
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Chatbots
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Robótica
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Negocios
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Multimodal
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      DevTools
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      OpenSource
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Creatividad
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Cognitiva
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Salud
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      MLOps
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Educación
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Marketing
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Finanzas
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Traducción
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Legal
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Ética
                    </a>
                  </div>
                </div>

                {/* Tools - Mobile */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Herramientas</h3>
                  <div className="space-y-2">
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Comparador de IAs
                    </a>
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Calculadora de costos
                    </a>
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Generador de prompts
                    </a>
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Evaluador de calidad
                    </a>
                  </div>
                </div>

                {/* Connect - Mobile */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Conectar</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setShowFeedback(true)}
                      className="block text-zinc-400 hover:text-white transition-colors text-sm text-left"
                    >
                      Feedback
                    </button>
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Reportar Bug
                    </a>
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Contactar
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-col lg:flex-row justify-between items-start mb-8">
                {/* Left Side - Logo, Tagline, Social Icons */}
                <div className="mb-8 lg:mb-0 lg:w-1/3">
                  {/* Logo and Tagline */}
                  <div className="mb-8">
                    <div className="flex items-center mb-6">
                      <span className="font-extrabold text-2xl tracking-tight text-white font-sans drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                        AIFinder
                      </span>
                    </div>
                    <p className="text-white text-sm">
                      Todas las IAs que necesitas en un solo lugar.
                    </p>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/javier-navarro-rodríguez-056023331/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="mailto:navarrojavi107@gmail.com"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/34693744798"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Side - Navigation Columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:w-2/3">
                  {/* Tool Categories */}
                  <div className="ml-8">
                    <h3 className="text-white font-semibold mb-4 ml-16 whitespace-nowrap">
                      Categorías de IAs
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Generativa
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Chatbots
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Negocios
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          DevTools
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Creatividad
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Salud
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Educación
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Finanzas
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Legal
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* More AI Categories */}
                  <div className="ml-8">
                    <div className="h-10"></div> {/* Spacer to align with first column */}
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Seguridad
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Robótica
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Multimodal
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          OpenSource
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Cognitiva
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          MLOps
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Marketing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Traducción
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Ética
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Tools */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Herramientas</h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Comparador de IAs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Calculadora de costos
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Generador de prompts
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Evaluador de calidad
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Connect */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Conectar</h3>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => setShowFeedback(true)}
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Feedback
                        </button>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Reportar Bug
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-zinc-400 hover:text-white transition-colors text-sm"
                        >
                          Contactar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section with full-width border */}
            <div className="border-t border-zinc-800">
              <div className="max-w-7xl mx-auto px-4 pt-6 pb-8">
                {/* Mobile: single line left-aligned */}
                <div className="md:hidden text-left space-y-2">
                  <div className="text-zinc-400 text-sm">© 2025 AIFinder</div>
                  <div className="space-y-1">
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Directrices de Listado
                    </a>
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Política de Privacidad
                    </a>
                    <a
                      href="#"
                      className="block text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Términos y Condiciones
                    </a>
                  </div>
                </div>

                {/* Desktop: original layout */}
                <div className="hidden md:flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <span className="text-zinc-400 text-sm">© 2025 AIFinder</span>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Directrices de Listado
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Política de Privacidad
                    </a>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      Términos y Condiciones
                    </a>
                  </div>
                  <button className="text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  // Reemplaza el return principal para que si no hay categoría activa, muestre solo el header móvil y la sección Explorar centrada y vacía.
  return (
    <div className="min-h-screen bg-black">
      {/* Header móvil SIEMPRE visible */}
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
              className={`flex items-center bg-black px-6 py-3 border-b border-zinc-800 transition-all duration-300 ${isScrolled ? 'h-0 p-0 m-0 overflow-hidden opacity-0 border-0' : ''}`}
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
                      className={`relative px-3 py-1.5 text-sm font-semibold text-white transition-colors border-none bg-transparent focus:outline-none hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] ${activeFilter === key ? 'drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]' : ''}`}
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
              className={`flex items-center justify-between bg-black px-6 py-3 border-b border-zinc-800 transition-all duration-300 ${isScrolled ? 'fixed top-0 left-[calc(4px+270px+1px)] right-[calc(12px+1px)] z-50 shadow-lg border-t border-zinc-800' : 'relative z-20'}`}
            >
              <div className="flex gap-1 ml-1">
                {currentCategory.subcategories.map((subcat) => (
                  <button
                    key={subcat.name}
                    onClick={() => handleSubcategoryClick(subcat.name)}
                    className={`px-3 py-1.5 text-sm font-semibold transition-all duration-200 cursor-pointer focus:outline-none rounded-full ${activeSubcategory === subcat.name ? 'bg-blue-600 text-white drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]' : 'text-white/90 hover:bg-blue-600 hover:text-white hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]'}`}
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
          </>
        )}
      </div>

      {/* Contenido: responsive layout */}
      {currentCategory && (
        <div className="px-2 py-1 md:px-4 md:py-6 md:pt-4 pt-[140px]">
          {currentCategory.subcategories.map((subcat) => (
            <div key={subcat.name} id={subcat.name.replace(/\s+/g, '-')} className="mb-4 md:mb-6">
              {/* Vista móvil: Lista en contenedores */}
              <div className="md:hidden">
                <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
                  <h2 className="text-xl font-bold mb-4 text-white pl-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                    {subcat.name}
                  </h2>
                  <div className="space-y-3">
                    {subcat.tools &&
                      filterTools(subcat.tools).map((tool) => (
                        <div
                          key={tool.name}
                          className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
                          onClick={() => handleToolClick(tool)}
                        >
                          <Image
                            src={tool.logo || tool.image}
                            alt={tool.name}
                            width={48}
                            height={48}
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
                    {subcat.tools &&
                      filterTools(subcat.tools).map((tool) => (
                        <div
                          key={tool.name}
                          className="group cursor-pointer"
                          onClick={() => handleToolClick(tool)}
                        >
                          {/* Imagen grande con overlay */}
                          <div className="relative aspect-video bg-zinc-800 rounded mb-3 overflow-hidden border border-[#232323]">
                            <Image
                              src={tool.image}
                              alt={tool.name}
                              fill
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

      {/* Footer para categorías */}
      {currentCategory && (
        <footer className="bg-black border-t border-zinc-800 mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Mobile Layout */}
            <div className="md:hidden space-y-8">
              {/* Logo, Tagline, Social Icons */}
              <div>
                <div className="mb-4">
                  <span className="font-extrabold text-2xl tracking-tight text-white font-sans drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    AIFinder
                  </span>
                </div>
                <p className="text-white text-sm mb-6">
                  Todas las IAs que necesitas en un solo lugar.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/javier-navarro-rodríguez-056023331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:navarrojavi107@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/34693744798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Tool Categories - Mobile */}
              <div>
                <h3 className="text-white font-semibold mb-4">Categorías de IAs</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Generativa
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Seguridad
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Chatbots
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Robótica
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Negocios
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Multimodal
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    DevTools
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    OpenSource
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Creatividad
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Cognitiva
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Salud
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    MLOps
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Educación
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Marketing
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Finanzas
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Traducción
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Legal
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Ética
                  </a>
                </div>
              </div>

              {/* Tools - Mobile */}
              <div>
                <h3 className="text-white font-semibold mb-4">Herramientas</h3>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Comparador de IAs
                  </a>
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Calculadora de costos
                  </a>
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Generador de prompts
                  </a>
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Evaluador de calidad
                  </a>
                </div>
              </div>

              {/* Connect - Mobile */}
              <div>
                <h3 className="text-white font-semibold mb-4">Conectar</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setShowFeedback(true)}
                    className="block text-zinc-400 hover:text-white transition-colors text-sm text-left"
                  >
                    Feedback
                  </button>
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Reportar Bug
                  </a>
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Contactar
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col lg:flex-row justify-between items-start mb-8">
              {/* Left Side - Logo, Tagline, Social Icons */}
              <div className="mb-8 lg:mb-0 lg:w-1/3">
                {/* Logo and Tagline */}
                <div className="mb-8">
                  <div className="flex items-center mb-6">
                    <span className="font-extrabold text-2xl tracking-tight text-white font-sans drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                      AIFinder
                    </span>
                  </div>
                  <p className="text-white text-sm">
                    Todas las IAs que necesitas en un solo lugar.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/javier-navarro-rodríguez-056023331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:navarrojavi107@gmail.com"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/34693744798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Side - Navigation Columns */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:w-2/3">
                {/* Tool Categories */}
                <div className="ml-8">
                  <h3 className="text-white font-semibold mb-4 ml-16 whitespace-nowrap">
                    Categorías de IAs
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Generativa
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Chatbots
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Negocios
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        DevTools
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Creatividad
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Salud
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Educación
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Finanzas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Legal
                      </a>
                    </li>
                  </ul>
                </div>

                {/* More AI Categories */}
                <div className="ml-8">
                  <div className="h-10"></div> {/* Spacer to align with first column */}
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Seguridad
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Robótica
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Multimodal
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        OpenSource
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Cognitiva
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        MLOps
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Traducción
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Ética
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Herramientas</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Comparador de IAs
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Calculadora de costos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Generador de prompts
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Evaluador de calidad
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Connect */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Conectar</h3>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={() => setShowFeedback(true)}
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Feedback
                      </button>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Reportar Bug
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        Contactar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section with full-width border */}
          <div className="border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 pt-6 pb-8">
              {/* Mobile: single line left-aligned */}
              <div className="md:hidden text-left space-y-2">
                <div className="text-zinc-400 text-sm">© 2025 AIFinder</div>
                <div className="space-y-1">
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Directrices de Listado
                  </a>
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Política de Privacidad
                  </a>
                  <a
                    href="#"
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    Términos y Condiciones
                  </a>
                </div>
              </div>

              {/* Desktop: original layout */}
              <div className="hidden md:flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <span className="text-zinc-400 text-sm">© 2025 AIFinder</span>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Directrices de Listado
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Política de Privacidad
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">
                    Términos y Condiciones
                  </a>
                </div>
                <button className="text-zinc-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
