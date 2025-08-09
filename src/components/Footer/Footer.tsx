'use client';

import React, { useEffect, useState } from 'react';
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

  const footerClassName = `bg-black border-t border-zinc-800 ${className ?? 'mt-16'}`;

  // Estado de cookies (consentimiento) y panel
  type CookieConsent = 'accepted' | 'rejected' | null;
  const [showCookieMenu, setShowCookieMenu] = useState(false);
  const [cookieConsent, setCookieConsent] = useState<CookieConsent>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('cookieConsent') as CookieConsent | null;
    if (saved === 'accepted' || saved === 'rejected') setCookieConsent(saved);
  }, []);

  const handleConsent = (value: Exclude<CookieConsent, null>) => {
    setCookieConsent(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cookieConsent', value);
    }
    setShowCookieMenu(false);
  };

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
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Botón de cookies en móvil */}
            <div className="pt-2">
              <button
                onClick={() => setShowCookieMenu((v) => !v)}
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
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="relative">
                <button
                  onClick={() => setShowCookieMenu((v) => !v)}
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

                {showCookieMenu && (
                  <div className="absolute right-0 bottom-8 mb-2 w-80 bg-black/95 backdrop-blur border border-zinc-800 rounded-xl shadow-xl p-4 z-50">
                    <h4 className="text-white font-semibold mb-2">Cookies</h4>
                    <p className="text-zinc-300 text-sm mb-3">
                      Usamos cookies y tecnologías similares para analizar el uso del sitio y
                      mejorar tu experiencia. Puedes aceptar o rechazar su uso.
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleConsent('rejected')}
                        className="px-3 py-2 text-sm rounded-md border border-zinc-700 text-zinc-200 hover:bg-zinc-800"
                      >
                        Rechazar
                      </button>
                      <button
                        onClick={() => handleConsent('accepted')}
                        className="px-3 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Aceptar todas
                      </button>
                    </div>
                    {cookieConsent && (
                      <div className="mt-2 text-xs text-zinc-500">
                        Estado actual: {cookieConsent === 'accepted' ? 'aceptadas' : 'rechazadas'}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Panel de cookies reutilizable (visible en móvil o desktop) */}
          {showCookieMenu && (
            <div className="md:hidden fixed left-4 right-4 bottom-20 z-50 bg-black/95 backdrop-blur border border-zinc-800 rounded-xl shadow-xl p-4">
              <h4 className="text-white font-semibold mb-2">Cookies</h4>
              <p className="text-zinc-300 text-sm mb-3">
                Usamos cookies y tecnologías similares para analizar el uso del sitio y mejorar tu
                experiencia. Puedes aceptar o rechazar su uso.
              </p>
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => handleConsent('rejected')}
                  className="px-3 py-2 text-sm rounded-md border border-zinc-700 text-zinc-200 hover:bg-zinc-800"
                >
                  Rechazar
                </button>
                <button
                  onClick={() => handleConsent('accepted')}
                  className="px-3 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Aceptar todas
                </button>
              </div>
              {cookieConsent && (
                <div className="mt-2 text-xs text-zinc-500">
                  Estado actual: {cookieConsent === 'accepted' ? 'aceptadas' : 'rechazadas'}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
