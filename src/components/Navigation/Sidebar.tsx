'use client';

import React, { useState, useRef, useEffect } from 'react';
import { aiCategories } from '../../data/ai-tools';
import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  HeartIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  PencilIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
  CubeTransparentIcon,
  PlusCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  NewspaperIcon,
  LightBulbIcon,
  CogIcon,
  ArrowTrendingUpIcon,
  LanguageIcon,
  ExclamationCircleIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import {
  useAppContext,
  useSubcategoryContext,
  useFeedbackContext,
  useAddAIToolContext,
  useBugReportContext,
  useActiveNavContext,
} from '../../app/layout';
import { useNavigationManager } from '../../hooks/useNavigationManager';

const defaultIcon = PlusCircleIcon;
const icons = [
  SparklesIcon, // Generativa
  ChatBubbleLeftRightIcon, // Chatbots
  BriefcaseIcon, // Negocios
  CodeBracketIcon, // DevTools
  HeartIcon, // Salud
  AcademicCapIcon, // Educación
  CurrencyDollarIcon, // Finanzas
  PencilIcon, // Creatividad
  ShieldCheckIcon, // Seguridad
  CpuChipIcon, // Robótica
  GlobeAltIcon, // Multimodal
  CubeTransparentIcon, // OpenSource
  LightBulbIcon, // Cognitiva y Razonamiento
  CogIcon, // MLOps
  ArrowTrendingUpIcon, // Marketing y Ventas
  LanguageIcon, // Traducción y Localización
  ExclamationCircleIcon, // Ética y Detección
  BookOpenIcon, // Gestión del Conocimiento
];

// Generar nombres cortos dinámicamente o usar el nombre de la categoría si faltan
const shortCategoryNames = [
  'Generativa',
  'Chatbots',
  'Negocios',
  'DevTools',
  'Salud',
  'Educación',
  'Finanzas',
  'Creatividad',
  'Seguridad',
  'Robótica',
  'Multimodal',
  'OpenSource',
  'Cognitiva',
  'MLOps',
  'Marketing',
  'Traducción',
  'Ética',
  'Conocimiento',
];

const mainSections = [
  { key: 'explorar', label: 'Explorar', icon: GlobeAltIcon },
  { key: 'articulos', label: 'Artículos', icon: NewspaperIcon },
  { key: 'herramientas', label: 'Herramientas', icon: WrenchScrewdriverIcon },
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void } = {}) {
  const { activeCategory, setActiveCategory } = useAppContext();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContext();
  const { showFeedback, setShowFeedback } = useFeedbackContext();
  const { showBugReport, setShowBugReport } = useBugReportContext();
  const { setShowAddAITool } = useAddAIToolContext();
  const { activeNav, setActiveNav } = useActiveNavContext();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('explorar');
  const subcatRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const [hoverLineStyle, setHoverLineStyle] = useState<{ top: number; height: number } | null>(
    null,
  );

  // Crear una referencia para el scroll programático
  const isProgrammaticScroll = useRef(false);
  const { navigateToSubcategory, navigateToTop } = useNavigationManager(
    setActiveSubcategory,
    isProgrammaticScroll,
  );

  // Detectar la categoría activa y abrirla automáticamente
  useEffect(() => {
    if (showFeedback || showBugReport) {
      // Si estamos en la página de feedback o reportar bug, no mostrar nada seleccionado
      setOpenCategory(null);
      setActiveSection('');
    } else if (activeCategory) {
      const categoryIndex = aiCategories.findIndex((cat) => cat.name === activeCategory);
      if (categoryIndex !== -1) {
        setOpenCategory(categoryIndex);
        setActiveSection('explorar');
      }
    } else {
      setOpenCategory(null);
      setActiveSection('explorar');
    }
  }, [activeCategory, showFeedback, showBugReport]); // Dependemos de activeCategory, showFeedback y showBugReport

  // Establecer la primera subcategoría cuando cambie la categoría
  useEffect(() => {
    if (activeCategory && !activeSubcategory) {
      const categoryIndex = aiCategories.findIndex((cat) => cat.name === activeCategory);
      if (categoryIndex !== -1 && aiCategories[categoryIndex].subcategories.length > 0) {
        setActiveSubcategory(aiCategories[categoryIndex].subcategories[0].name);
      }
    }
  }, [activeCategory, activeSubcategory, setActiveSubcategory]);

  useEffect(() => {
    if (hoveredSub && subcatRefs.current[hoveredSub]) {
      const el = subcatRefs.current[hoveredSub];
      if (el) {
        const rect = el.getBoundingClientRect();
        const parentRect = el.parentElement?.getBoundingClientRect();
        if (parentRect) {
          setHoverLineStyle({
            top: rect.top - parentRect.top,
            height: rect.height,
          });
        }
      }
    } else {
      setHoverLineStyle(null);
    }
  }, [hoveredSub]);

  const handleCategoryClick = (categoryName: string) => {
    // Si estamos en feedback, primero cerrarlo
    if (showFeedback) {
      setShowFeedback(false);
    }

    // Si estamos en reportar bug, primero cerrarlo
    if (showBugReport) {
      setShowBugReport(false);
    }

    // Si estamos en la página "Añadir una IA", cerrarla
    if (setShowAddAITool) {
      setShowAddAITool(false);
    }

    if (setActiveCategory) {
      setActiveCategory(categoryName);
    }
  };

  // Función para manejar clic en subcategoría usando el sistema centralizado
  const handleSubcategoryClick = (subcategoryName: string) => {
    // Si estamos en feedback, primero cerrarlo
    if (showFeedback) {
      setShowFeedback(false);
      // Dar tiempo para que se cierre el feedback antes de hacer scroll
      setTimeout(() => {
        navigateToSubcategory(subcategoryName);
      }, 100);
    } else if (showBugReport) {
      setShowBugReport(false);
      // Dar tiempo para que se cierre el reportar bug antes de hacer scroll
      setTimeout(() => {
        navigateToSubcategory(subcategoryName);
      }, 100);
    } else {
      navigateToSubcategory(subcategoryName);
    }

    // Si estamos en la página "Añadir una IA", cerrarla
    if (setShowAddAITool) {
      setShowAddAITool(false);
    }
  };

  const handleSectionClick = (sectionKey: string) => {
    // Si estamos en feedback, primero cerrarlo
    if (showFeedback) {
      setShowFeedback(false);
    }

    // Si estamos en reportar bug, primero cerrarlo
    if (showBugReport) {
      setShowBugReport(false);
    }

    // Si estamos en la página "Añadir una IA", cerrarla
    if (setShowAddAITool) {
      setShowAddAITool(false);
    }

    setActiveSection(sectionKey);

    // Manejar navegación directamente usando el contexto
    if (sectionKey === 'explorar' && setActiveCategory) {
      setActiveCategory(null); // Limpiar categoría activa cuando se va a Explorar
      setActiveSubcategory(null); // Limpiar subcategoría también
      setActiveNav('explorar'); // Cambiar navegación
      navigateToTop(); // Ir a la parte superior
    } else if (sectionKey === 'herramientas' && setActiveCategory) {
      setActiveCategory(null); // Limpiar categoría activa cuando se va a Herramientas
      setActiveSubcategory(null); // Limpiar subcategoría también
      navigateToTop(); // Ir a la parte superior
    } else if (sectionKey === 'articulos' && setActiveCategory) {
      setActiveCategory(null); // Limpiar categoría activa cuando se va a Artículos
      setActiveSubcategory(null); // Limpiar subcategoría también
      setActiveNav('articulos'); // Cambiar navegación a artículos
      navigateToTop(); // Ir a la parte superior
    }
  };

  // Elimina la lógica de isMobile y renderiza ambos layouts:
  const mobileCategoryNames = [
    'Generativa',
    'Chatbots',
    'Negocios',
    'DevTools',
    'Salud',
    'Educación',
    'Finanzas',
    'Creatividad',
    'Seguridad',
    'Robótica',
    'Multimodal',
    'OpenSource',
    'IA Cognitiva',
    'Marketing',
    'Ética',
    'Desarrollo de IA',
    'Traducción',
    'Conocimiento',
  ];

  return (
    <aside className="w-full h-screen flex flex-col px-0 pt-0 pb-0">
      {/* Links destacados arriba */}
      <div className="pt-6 pb-6 px-6 hidden md:block">
        <span
          className="font-extrabold text-2xl tracking-tight text-white font-sans cursor-pointer select-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-200"
          style={{ fontFamily: 'Inter, Sora, sans-serif' }}
          onClick={() => {
            setActiveCategory(null);
            setActiveSubcategory(null);
            setActiveSection('explorar');
            // Limpiar localStorage
            if (typeof window !== 'undefined') {
              localStorage.removeItem('activeCategory');
              localStorage.removeItem('activeSubcategory');
            }
            // Scroll al inicio
            const mainElement = document.querySelector('main');
            if (mainElement) {
              mainElement.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            if (onNavigate) onNavigate();
          }}
        >
          AIFinder
        </span>
      </div>
      <nav className="mb-2 px-0 mt-4 md:mt-0">
        <ul className="space-y-0 w-full">
          {mainSections.map((section) => {
            const Icon = section.icon;
            const isActive =
              section.key === 'articulos'
                ? activeNav === 'articulos' && !activeCategory && !showFeedback && !showBugReport
                : (activeSection === section.key || activeNav === section.key) &&
                  !activeCategory &&
                  !activeSubcategory &&
                  !showFeedback &&
                  !showBugReport;
            return (
              <li key={section.key} className="relative w-full">
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-white z-20" />}
                <a
                  href="#"
                  className={`flex items-center gap-2 w-full py-2 px-3 font-extrabold transition-colors relative z-0 rounded-none text-base md:text-sm ${
                    isActive
                      ? 'bg-zinc-800 text-white'
                      : 'text-white md:text-white/90 hover:bg-zinc-800'
                  }`}
                  style={{ borderRadius: 0 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section.key);
                    if (onNavigate) onNavigate();
                  }}
                >
                  <Icon className="w-5 h-5" /> {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Título de la sección de categorías */}
      <div className="px-4 pt-2 pb-1">
        <span
          className="uppercase text-xs tracking-widest text-zinc-300 font-semibold"
          style={{ fontFamily: 'Inter, Sora, sans-serif' }}
        >
          IAs
        </span>
      </div>
      {/* Recuadro de categorías con scroll */}
      <div
        className="flex-1 flex flex-col bg-black rounded-none border border-zinc-800 p-0 w-full relative overflow-hidden"
        style={{ maxHeight: 'calc(100vh - 200px)' }}
      >
        <nav
          className="flex-1 overflow-y-auto pr-0 scrollbar-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            maxHeight: 'calc(100% - 0px)',
            overscrollBehavior: 'contain',
          }}
        >
          {/* Elimina la lógica de isMobile y renderiza ambos layouts: */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 p-2 mt-2 md:hidden">
            {aiCategories.map((cat, i) => {
              const Icon = icons[i] || defaultIcon;
              const shortName = mobileCategoryNames[i] || cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    handleCategoryClick(cat.name);
                    if (onNavigate) onNavigate();
                  }}
                  className="flex flex-row items-center justify-start bg-transparent rounded-none p-0 pl-2 text-white font-semibold text-sm hover:text-blue-400 transition-colors gap-1 min-h-7"
                >
                  <Icon className="w-4 h-4" />
                  <span>{shortName}</span>
                </button>
              );
            })}
          </div>
          <ul className="space-y-1 hidden md:block pb-0">
            {aiCategories.map((cat, i) => {
              const Icon = icons[i] || defaultIcon;
              const shortName = shortCategoryNames[i] || cat.name;
              const isActive = activeCategory === cat.name;
              const isSubActive = cat.subcategories.some((sub) => sub.name === activeSubcategory);
              const isCategoryActive =
                (isActive || isSubActive || (!activeCategory && isSubActive)) && !showFeedback;
              const isOpen = openCategory === i;
              const isHovered = hoveredCategory === i;
              return (
                <li key={cat.name} className="relative">
                  {(isActive || isHovered) && !isOpen && (
                    <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-white rounded-r z-0" />
                  )}
                  <div
                    className={`flex items-center w-full py-1 font-semibold text-sm font-sans transition-colors relative z-10 ${isCategoryActive ? 'bg-zinc-800' : ''} rounded-none ${cat.subcategories.length > 0 ? 'cursor-pointer' : ''}`}
                    style={{ fontFamily: 'Inter, Sora, sans-serif', borderRadius: 0 }}
                    onMouseEnter={() => setHoveredCategory(i)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenCategory(isOpen ? null : i);
                      handleCategoryClick(cat.name);
                      if (onNavigate) onNavigate();
                      setActiveSection(''); // Desactiva la sección superior
                    }}
                  >
                    {(isHovered || isCategoryActive) && (
                      <>
                        <div className="absolute left-0 w-0.5 h-full bg-white z-20" />
                        <div className="absolute left-0 right-0 top-0 h-full bg-zinc-800 z-0" />
                      </>
                    )}
                    <span
                      className={`flex items-center w-full py-1 pl-4 font-semibold text-sm font-sans transition-colors relative z-10 ${isCategoryActive ? 'bg-zinc-800' : ''} rounded-none ${cat.subcategories.length > 0 ? 'cursor-pointer' : ''}`}
                      style={{ fontFamily: 'Inter, Sora, sans-serif', borderRadius: 0 }}
                    >
                      <Icon className="text-white w-4 h-4 mr-2" />
                      <span
                        className="font-semibold flex-1 truncate text-[15px] text-white"
                        style={{ fontFamily: 'Inter, Sora, sans-serif' }}
                      >
                        {shortName}
                      </span>
                    </span>
                    {cat.subcategories.length > 0 && (
                      <button
                        className={`mx-1 flex items-center justify-center px-1.5 py-0.5 ${isOpen || isHovered || isCategoryActive ? 'bg-white/10' : ''} rounded transition-colors z-10 cursor-pointer`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenCategory(isOpen ? null : i);
                          handleCategoryClick(cat.name);
                        }}
                        aria-label={isOpen ? 'Cerrar subcategorías' : 'Abrir subcategorías'}
                        type="button"
                      >
                        {isOpen ? (
                          <ChevronUpIcon className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <ChevronDownIcon className="w-3.5 h-3.5 text-zinc-400" />
                        )}
                      </button>
                    )}
                  </div>
                  {isOpen && cat.subcategories.length > 0 && (
                    <div className="flex flex-row relative pr-0 mr-0">
                      {/* Línea divisoria vertical continua a la izquierda de todas las subcategorías */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 ml-4 bg-zinc-800 transition-colors" />
                      {hoverLineStyle && (
                        <div
                          className="absolute left-0 ml-4 w-0.5 bg-white transition-colors z-10"
                          style={{ top: hoverLineStyle.top, height: hoverLineStyle.height }}
                        />
                      )}
                      <ul
                        className="flex-1 flex flex-col pr-0 mr-0 scrollbar-none"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                      >
                        {cat.subcategories.map((sub, subIdx) => (
                          <li
                            key={sub.name}
                            className={`flex items-center group w-full relative${subIdx === 0 ? ' mt-0.5' : ''}`}
                            ref={(el) => {
                              subcatRefs.current[sub.name] = el || null;
                            }}
                            onMouseEnter={() => setHoveredSub(sub.name)}
                            onMouseLeave={() => setHoveredSub(null)}
                          >
                            {(hoveredSub === sub.name ||
                              (activeSubcategory === sub.name && !showFeedback)) && (
                              <>
                                <div
                                  className={`absolute left-4 right-0 top-0 h-full z-0 ${activeSubcategory === sub.name && !showFeedback ? 'bg-zinc-800' : 'bg-white/10'}`}
                                />
                                <div
                                  className="absolute left-4 w-0.5 bg-white transition-colors z-10"
                                  style={{ height: '100%' }}
                                />
                              </>
                            )}
                            <button
                              onClick={() => {
                                handleSubcategoryClick(sub.name);
                                if (onNavigate) onNavigate();
                              }}
                              className={`block w-full pl-10 py-2 font-semibold text-sm font-sans cursor-pointer transition-colors relative z-10 text-left ${
                                activeSubcategory === sub.name && !showFeedback
                                  ? 'text-white'
                                  : 'text-zinc-200'
                              }`}
                              style={{ fontFamily: 'Inter, Sora, sans-serif' }}
                            >
                              {sub.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Botón Añadir una IA fijo al final del sidebar */}
      <div className="mt-auto shrink-0 pt-0 pb-6">
        <div className="border-t border-zinc-800 bg-black rounded-none p-0 w-full">
          <button
            onClick={() => {
              setShowAddAITool(true);
              if (onNavigate) onNavigate();
            }}
            className="flex items-center gap-2 w-full py-3 px-3 font-extrabold transition-colors relative z-0 hover:bg-zinc-800 rounded-none text-base text-white md:text-sm md:text-white/90"
            style={{ borderRadius: 0 }}
          >
            <PlusCircleIcon className="w-5 h-5" /> Añadir una IA
          </button>
        </div>
      </div>
      {/* Ocultar scrollbar en webkit */}
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </aside>
  );
}
