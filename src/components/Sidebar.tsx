'use client';

import React, { useState, useRef, useEffect } from 'react';
import { aiCategories } from '../data/ai-tools';
import {
  HiOutlineSparkles,
  HiOutlineChat,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineHeart,
  HiOutlineAcademicCap,
  HiOutlineCurrencyDollar,
  HiOutlinePencil,
  HiOutlineShieldCheck,
  HiOutlineChip,
  HiOutlineGlobeAlt,
  HiOutlineCubeTransparent,
  HiOutlinePlusCircle,
  HiChevronDown,
  HiChevronUp,
  HiOutlineNewspaper,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineTrendingUp,
  HiOutlineTranslate,
  HiOutlineExclamationCircle,
  HiOutlineBookOpen,
} from 'react-icons/hi';
import { useAppContext, useSubcategoryContext } from '../app/layout';

const defaultIcon = HiOutlinePlusCircle;
const icons = [
  HiOutlineSparkles, // Generativa
  HiOutlineChat, // Chatbots
  HiOutlineBriefcase, // Negocios
  HiOutlineCode, // DevTools
  HiOutlineHeart, // Salud
  HiOutlineAcademicCap, // Educación
  HiOutlineCurrencyDollar, // Finanzas
  HiOutlinePencil, // Creatividad
  HiOutlineShieldCheck, // Seguridad
  HiOutlineChip, // Robótica
  HiOutlineGlobeAlt, // Multimodal
  HiOutlineCubeTransparent, // OpenSource
  HiOutlineLightBulb, // Cognitiva y Razonamiento
  HiOutlineCog, // MLOps
  HiOutlineTrendingUp, // Marketing y Ventas
  HiOutlineTranslate, // Traducción y Localización
  HiOutlineExclamationCircle, // Ética y Detección
  HiOutlineBookOpen, // Gestión del Conocimiento
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

function isObjectToolArray(arr: unknown[]): arr is { name: string; examples: string[] }[] {
  return arr.length > 0 && arr[0] !== null && typeof arr[0] === 'object' && 'name' in arr[0];
}

const mainSections = [
  { key: 'explorar', label: 'Explorar', icon: HiOutlineGlobeAlt },
  { key: 'articulos', label: 'Artículos', icon: HiOutlineNewspaper },
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void } = {}) {
  const { activeCategory, setActiveCategory } = useAppContext();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContext();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('explorar');
  const subcatRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const [hoverLineStyle, setHoverLineStyle] = useState<{ top: number; height: number } | null>(
    null,
  );

  // Detectar la categoría activa y abrirla automáticamente
  useEffect(() => {
    if (activeCategory) {
      const categoryIndex = aiCategories.findIndex((cat) => cat.name === activeCategory);
      if (categoryIndex !== -1) {
        setOpenCategory(categoryIndex);
        setActiveSection('explorar');
      }
    } else {
      setOpenCategory(null);
      setActiveSection('explorar');
    }
  }, [activeCategory]); // Solo dependemos de activeCategory

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
    if (setActiveCategory) {
      setActiveCategory(categoryName);
    }
  };

  // Función para manejar clic en subcategoría
  const handleSubcategoryClick = (subcategoryName: string) => {
    const sectionId = subcategoryName.replace(/\s+/g, '-');
    const element = document.getElementById(sectionId);
    if (element) {
      // Detectar si se ha hecho scroll para ajustar el offset
      const scrollTop = window.scrollY;
      const isScrolled = scrollTop > 50;
      const offset = isScrolled ? 60 : 140; // Offset dinámico según el estado del header
      const elementPosition = element.offsetTop - offset;

      // Actualizar el estado de la subcategoría activa INMEDIATAMENTE
      setActiveSubcategory(subcategoryName);

      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTo({ top: elementPosition, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      }
    }
  };

  const handleSectionClick = (sectionKey: string) => {
    setActiveSection(sectionKey);
    if (sectionKey === 'explorar' && setActiveCategory) {
      setActiveCategory(null); // Limpiar categoría activa cuando se va a Explorar
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
    <aside className="w-full min-h-full flex flex-col px-0 pt-0 pb-0">
      {/* Links destacados arriba */}
      <div className="pt-6 pb-6 px-6 hidden md:block">
        <span
          className="font-extrabold text-2xl tracking-tight text-white font-sans"
          style={{ fontFamily: 'Inter, Sora, sans-serif' }}
        >
          AIFinder
        </span>
      </div>
      <nav className="mb-2 px-0 mt-4 md:mt-0">
        <ul className="space-y-0 w-full">
          {mainSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.key && !activeCategory && !activeSubcategory;
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
          {/* 1. Haz que 'Añadir una IA' tenga el mismo margen y estilo que los otros links destacados: */}
          <li className="relative w-full">
            <a
              href="#"
              className="flex items-center gap-2 w-full py-2 px-3 font-extrabold transition-colors relative z-0 hover:bg-zinc-800 rounded-none text-base text-white md:text-sm md:text-white/90"
              style={{ borderRadius: 0 }}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate();
              }}
            >
              <HiOutlinePlusCircle className="w-5 h-5" /> Añadir una IA
            </a>
          </li>
        </ul>
      </nav>
      {/* Título de la sección de categorías */}
      <div className="px-4 pt-2 pb-1">
        <span
          className="uppercase text-xs tracking-widest text-zinc-400 font-semibold"
          style={{ fontFamily: 'Inter, Sora, sans-serif' }}
        >
          IAs
        </span>
      </div>
      {/* Recuadro de categorías */}
      <div className="flex-1 flex flex-col bg-black rounded-none border border-zinc-800 p-0 w-full relative min-h-[400px]">
        <nav
          className="flex-1 overflow-y-auto pr-0 scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
          <ul className="space-y-1 hidden md:block">
            {aiCategories.map((cat, i) => {
              const Icon = icons[i] || defaultIcon;
              const shortName = shortCategoryNames[i] || cat.name;
              const isActive = activeCategory === cat.name;
              const isSubActive = cat.subcategories.some((sub) => sub.name === activeSubcategory);
              const isCategoryActive = isActive || isSubActive || (!activeCategory && isSubActive);
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
                      if (setActiveCategory) {
                        setActiveCategory(cat.name);
                      }
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
                        className="font-semibold flex-1 truncate text-[15px]"
                        style={{ fontFamily: 'Inter, Sora, sans-serif' }}
                      >
                        {shortName}
                      </span>
                    </span>
                    {cat.subcategories.length > 0 && (
                      <span
                        className={`mx-1 flex items-center justify-center px-1.5 py-0.5 ${isOpen || isHovered || isCategoryActive ? 'bg-white/10' : ''} rounded transition-colors z-10 cursor-pointer`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenCategory(isOpen ? null : i);
                          if (setActiveCategory) {
                            setActiveCategory(cat.name);
                          }
                        }}
                        tabIndex={-1}
                        aria-label={isOpen ? 'Cerrar' : 'Abrir'}
                      >
                        {isOpen ? (
                          <HiChevronUp className="w-3.5 h-3.5 text-white" />
                        ) : (
                          <HiChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                        )}
                      </span>
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
                            {(hoveredSub === sub.name || activeSubcategory === sub.name) && (
                              <>
                                <div
                                  className={`absolute left-4 right-0 top-0 h-full z-0 ${activeSubcategory === sub.name ? 'bg-zinc-800' : 'bg-white/10'}`}
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
                                activeSubcategory === sub.name ? 'text-white' : 'text-zinc-200'
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
      {/* Ocultar scrollbar en webkit */}
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </aside>
  );
}
