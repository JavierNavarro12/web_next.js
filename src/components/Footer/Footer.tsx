'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCookieConsent } from '../../store/cookieConsent';
import { useRouter } from 'next/navigation';
import {
  useAppContext,
  useSubcategoryContext,
  useAddAIToolContext,
  useFeedbackContext,
  useBugReportContext,
} from '../../app/providers';

interface FooterProps {
  setShowFeedback: (show: boolean) => void;
  setShowBugReport?: (show: boolean) => void;
  setActiveCategory?: (category: string | null) => void;
  setActiveSubcategory?: (subcategory: string | null) => void;
  className?: string;
}

export default function Footer({
  setShowFeedback,
  setShowBugReport,
  setActiveCategory: _propSetActiveCategory,
  setActiveSubcategory: _propSetActiveSubcategory,
  className,
}: FooterProps) {
  const router = useRouter();
  // Usar contextos directamente si las props no están disponibles
  const { setActiveCategory: contextSetActiveCategory } = useAppContext();
  const { setActiveSubcategory: contextSetActiveSubcategory } = useSubcategoryContext();
  const { setShowAddAITool } = useAddAIToolContext();
  const { setShowFeedback: contextSetShowFeedback } = useFeedbackContext();
  const { setShowBugReport: contextSetShowBugReport } = useBugReportContext();
  // ActiveNav puede no estar disponible en tests; navegamos con router como fallback

  // Usar contextos directamente para asegurar que funcione en todas las páginas
  const setActiveCategory = contextSetActiveCategory;
  const setActiveSubcategory = contextSetActiveSubcategory;
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/javier-navarro-rodríguez-056023331/',
      label: 'Visitar perfil de LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: 'mailto:navarrojavi107@gmail.com',
      label: 'Enviar email',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      href: 'https://wa.me/34693744798',
      label: 'Contactar por WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      ),
    },
  ];

  const categories = [
    'Generativa',
    'Chatbots',
    'Negocios',
    'DevTools',
    'Creatividad',
    'Salud',
    'Educación',
    'Finanzas',
    'Seguridad',
    'Robótica',
    'Multimodal',
    'OpenSource',
    'Cognitiva',
    'MLOps',
    'Marketing',
    'Traducción',
    'Ética',
  ];

  // Mapeo de nombres del footer a nombres reales de categorías
  const categoryMapping: { [key: string]: string } = {
    Generativa: 'Generativa',
    Chatbots: 'Chatbots',
    Negocios: 'Negocios',
    DevTools: 'DevTools',
    Creatividad: 'Creatividad',
    Salud: 'Salud',
    Educación: 'Educación',
    Finanzas: 'Finanzas',
    Seguridad: 'Seguridad',
    Robótica: 'Robótica',
    Multimodal: 'Multimodal',
    OpenSource: 'OpenSource',
    Cognitiva: 'IA Cognitiva y Razonamiento',
    MLOps: 'MLOps y Desarrollo de Modelos',
    Marketing: 'IA para Marketing y Ventas',
    Traducción: 'Traducción y Localización Automática',
    Ética: 'Ética y Detección de IA',
  };

  const handleCategoryClick = (categoryName: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Footer: Click en categoría:', categoryName);
    }

    // Cerrar la página "Añadir una IA" si está abierta
    if (setShowAddAITool) setShowAddAITool(false);

    // Cerrar las páginas de feedback y reportar bug usando contextos directamente
    contextSetShowFeedback(false);
    contextSetShowBugReport(false);

    if (setActiveCategory && setActiveSubcategory) {
      const realCategoryName = categoryMapping[categoryName];
      if (process.env.NODE_ENV !== 'production') {
        console.log('Footer: Nombre real de categoría:', realCategoryName);
      }
      if (realCategoryName) {
        if (process.env.NODE_ENV !== 'production') {
          console.log('Footer: Navegando a categoría:', realCategoryName);
        }
        setActiveCategory(realCategoryName);
        setActiveSubcategory(null);
        // Asegurar navegación a la vista principal de categorías
        // Mantener navegación consistente
        try {
          router.push('/');
        } catch {}
      } else {
        if (process.env.NODE_ENV !== 'production') {
          console.log('Footer: No se encontró mapeo para:', categoryName);
        }
      }
    } else {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Footer: setActiveCategory o setActiveSubcategory no están disponibles');
      }
    }
  };

  const tools = [
    { label: 'Comparador de IAs', onClick: () => navigateToTools() },
    { label: 'Calculadora de costos', onClick: () => navigateToTools() },
    { label: 'Generador de prompts', onClick: () => navigateToTools() },
    { label: 'Evaluador de calidad', onClick: () => navigateToTools() },
  ];

  const openFeedback = () => {
    // Cerrar modales/páginas superpuestas
    if (setShowAddAITool) setShowAddAITool(false);
    contextSetShowBugReport(false);
    // Avisar vía props y contexto para compatibilidad con tests y runtime
    try {
      setShowFeedback(true);
    } catch {}
    contextSetShowFeedback(true);
    // Reset navegación a home
    setActiveCategory(null);
    setActiveSubcategory(null);
    try {
      router.push('/');
    } catch {}
  };

  const openBugReport = () => {
    if (setShowAddAITool) setShowAddAITool(false);
    contextSetShowFeedback(false);
    // Avisar vía props y contexto para compatibilidad con tests y runtime
    try {
      setShowBugReport && setShowBugReport(true);
    } catch {}
    contextSetShowBugReport(true);
    setActiveCategory(null);
    setActiveSubcategory(null);
    try {
      router.push('/');
    } catch {}
  };

  const connectLinks = [
    { label: 'Feedback', onClick: openFeedback },
    { label: 'Reportar Bug', onClick: openBugReport },
    { label: 'Contactar', href: 'mailto:navarrojavi107@gmail.com' },
  ];

  const navigateToTools = () => {
    // Cerrar overlays
    if (setShowAddAITool) setShowAddAITool(false);
    contextSetShowFeedback(false);
    contextSetShowBugReport(false);
    // Limpiar selección de categorías
    setActiveCategory && setActiveCategory(null);
    setActiveSubcategory && setActiveSubcategory(null);
    // Ir a Herramientas
    try {
      router.push('/herramientas');
    } catch {}
  };

  const legalLinks = [
    { label: 'Directrices de Listado', href: '/directrices' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Términos y Condiciones', href: '/terminos' },
  ];

  // Prompt pre-configurado para las IAs sobre AIFinder
  const aiPrompt = `Como usuario potencial, quiero entender concretamente qué me ofrece AIFinder (aifinder.es). Detalla paso a paso qué incluye la plataforma: qué herramientas de IA encuentro, cómo están organizadas las categorías, qué información veo de cada herramienta (precios, características, pros/contras), cómo puedo comparar herramientas y qué funcionalidades ofrece. Explícalo de forma sencilla, como si estuvieras describiendo la experiencia real de usar el directorio.`;

  const aiLinks = [
    {
      name: 'ChatGPT',
      url: `https://chat.openai.com/?q=${encodeURIComponent(aiPrompt)}`,
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
        </svg>
      ),
    },
    {
      name: 'Claude',
      url: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`,
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 50 50" fill="currentColor">
          <path d="M19.861,27.625v-0.716l-16.65-0.681L2.07,25.985L1,24.575l0.11-0.703l0.959-0.645l17.95,1.345l0.11-0.314L5.716,14.365l-0.729-0.924l-0.314-2.016L5.985,9.98l2.214,0.24l11.312,8.602l0.327-0.353L12.623,5.977c0,0-0.548-2.175-0.548-2.697l1.494-2.029l0.827-0.266l2.833,0.995l7.935,17.331h0.314l1.348-14.819l0.752-1.822l1.494-0.985l1.167,0.557l0.959,1.374l-2.551,14.294h0.425l0.486-0.486l8.434-10.197l1.092-0.862h2.065l1.52,2.259l-0.681,2.334l-7.996,11.108l0.146,0.217l0.376-0.036l12.479-2.405l1.666,0.778l0.182,0.791l-0.655,1.617l-15.435,3.523l-0.084,0.062l0.097,0.12l13.711,0.814l1.578,1.044L49,29.868l-0.159,0.972l-2.431,1.238l-13.561-3.254h-0.363v0.217l11.218,10.427l0.256,1.154l-0.645,0.911l-0.681-0.097l-9.967-8.058h-0.256v0.34l5.578,8.35l0.243,2.162l-0.34,0.703l-1.215,0.425l-1.335-0.243l-7.863-12.083l-0.279,0.159l-1.348,14.524l-0.632,0.742l-1.459,0.558l-1.215-0.924L21.9,46.597l2.966-14.939l-0.023-0.084l-0.279,0.036L13.881,45.138l-0.827,0.327l-1.433-0.742l0.133-1.326l0.801-1.18l9.52-12.019l-0.013-0.314h-0.11l-12.69,8.239l-2.259,0.292L6.03,37.505l0.12-1.494l0.46-0.486L19.861,27.625z" />
        </svg>
      ),
    },
    {
      name: 'Grok',
      url: `https://x.com/i/grok?text=${encodeURIComponent(aiPrompt)}`,
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="currentColor">
          <path d="M18.542 30.532l15.956-11.776c.783-.576 1.902-.354 2.274.545 1.962 4.728 1.084 10.411-2.819 14.315-3.903 3.901-9.333 4.756-14.299 2.808l-5.423 2.511c7.778 5.315 17.224 4 23.125-1.903 4.682-4.679 6.131-11.058 4.775-16.812l.011.011c-1.966-8.452.482-11.829 5.501-18.735C47.759 1.332 47.88 1.166 48 1l-6.602 6.599V7.577l-22.86 22.958M15.248 33.392c-5.582-5.329-4.619-13.579.142-18.339 3.521-3.522 9.294-4.958 14.331-2.847l5.412-2.497c-.974-.704-2.224-1.46-3.659-1.994-6.478-2.666-14.238-1.34-19.505 3.922C6.904 16.701 5.31 24.488 8.045 31.133c2.044 4.965-1.307 8.48-4.682 12.023C2.164 44.411.967 45.67 0 47l15.241-13.608" />
        </svg>
      ),
    },
  ];

  const footerClassName = `bg-black border-t border-zinc-800 ${className ?? 'mt-16'}`;

  const { openPreferences, status } = useCookieConsent();
  const [showCookieMenu, setShowCookieMenu] = useState(false);

  return (
    <footer className={footerClassName}>
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
            <p className="text-white text-sm mb-6">Todas las IAs que necesitas en un solo lugar.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Ask AI Section */}
            <div className="mt-6">
              <p className="text-zinc-400 text-sm mb-3">Solicita un resumen de AIFinder a una IA</p>
              <div className="flex items-center gap-4">
                {aiLinks.map((ai) => (
                  <a
                    key={ai.name}
                    href={ai.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label={`Preguntar a ${ai.name}`}
                    title={ai.name}
                  >
                    {ai.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Categories - Mobile */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categorías de IAs</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="text-zinc-400 hover:text-white transition-colors text-sm text-left"
                  aria-label={`Explorar categoría ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tools - Mobile */}
          <div>
            <h3 className="text-white font-semibold mb-4">Herramientas</h3>
            <div className="space-y-2">
              {tools.map((tool) => (
                <a
                  key={tool.label}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    tool.onClick();
                  }}
                  className="block text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {tool.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect - Mobile */}
          <div>
            <h3 className="text-white font-semibold mb-4">Conectar</h3>
            <div className="space-y-2">
              {connectLinks.map((link) =>
                link.onClick ? (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className="block text-zinc-400 hover:text-white transition-colors text-sm text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-zinc-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col lg:flex-row justify-between items-start mb-8">
          {/* Left Side - Logo, Tagline, Social Icons */}
          <div className="mb-8 lg:mb-0 lg:w-1/3">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <span className="font-extrabold text-2xl tracking-tight text-white font-sans drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  AIFinder
                </span>
              </div>
              <p className="text-white text-sm">Todas las IAs que necesitas en un solo lugar.</p>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Ask AI Section */}
            <div className="mt-6">
              <p className="text-zinc-400 text-sm mb-3">Solicita un resumen de AIFinder a una IA</p>
              <div className="flex items-center gap-4">
                {aiLinks.map((ai) => (
                  <a
                    key={ai.name}
                    href={ai.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-white transition-colors"
                    aria-label={`Preguntar a ${ai.name}`}
                    title={ai.name}
                  >
                    {ai.icon}
                  </a>
                ))}
              </div>
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
                {categories.slice(0, 9).map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="text-zinc-400 hover:text-white transition-colors text-sm text-left"
                      aria-label={`Explorar categoría ${category}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More AI Categories */}
            <div className="ml-8">
              <div className="h-10"></div>
              <ul className="space-y-2">
                {categories.slice(9).map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="text-zinc-400 hover:text-white transition-colors text-sm text-left"
                      aria-label={`Explorar categoría ${category}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-white font-semibold mb-4">Herramientas</h3>
              <ul className="space-y-2">
                {tools.map((tool) => (
                  <li key={tool.label}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        tool.onClick();
                      }}
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {tool.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-4">Conectar</h3>
              <ul className="space-y-2">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    {link.onClick ? (
                      <button
                        onClick={link.onClick}
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-zinc-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 pt-1.5 pb-8 md:pb-4">
          {/* Mobile */}
          <div className="md:hidden text-left space-y-2 mb-6">
            <div className="text-zinc-400 text-sm">© 2025 AIFinder</div>
            <div className="space-y-1">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Botón de cookies en móvil */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setShowCookieMenu(false);
                  openPreferences();
                }}
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Preferencias de cookies"
                title="Preferencias de cookies"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 12a9 9 0 11-9-9 3 3 0 003 3 3 3 0 003 3 3 3 0 003 3z" />
                  <circle cx="9" cy="10" r="1.25" fill="black" />
                  <circle cx="13.5" cy="7.5" r="1.25" fill="black" />
                  <circle cx="14" cy="13.5" r="1.25" fill="black" />
                </svg>
                <span className="text-sm">Cookies</span>
              </button>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-center relative">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-zinc-400 text-sm">© 2025 AIFinder</span>
            </div>
            <div className="flex items-center space-x-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowCookieMenu(false);
                    openPreferences();
                  }}
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Configuración"
                  title="Configuración"
                >
                  {/* Icono de cookie */}
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M21 12a9 9 0 11-9-9 3 3 0 003 3 3 3 0 003 3 3 3 0 003 3z" />
                    <circle cx="9" cy="10" r="1.25" fill="black" />
                    <circle cx="13.5" cy="7.5" r="1.25" fill="black" />
                    <circle cx="14" cy="13.5" r="1.25" fill="black" />
                  </svg>
                </button>
                {/* El panel inline se reemplaza por el modal global de preferencias */}
              </div>
            </div>
          </div>

          {/* El panel móvil inline también se reemplaza por el modal global */}
        </div>
      </div>
    </footer>
  );
}
