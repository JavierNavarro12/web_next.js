'use client';

import React from 'react';

interface FooterProps {
  setShowFeedback: (show: boolean) => void;
}

export default function Footer({ setShowFeedback }: FooterProps) {
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/javier-navarro-rodríguez-056023331/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: 'mailto:navarrojavi107@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
    'Legal',
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

  const tools = [
    'Comparador de IAs',
    'Calculadora de costos',
    'Generador de prompts',
    'Evaluador de calidad',
  ];

  const connectLinks = [
    { label: 'Feedback', onClick: () => setShowFeedback(true) },
    { label: 'Reportar Bug', href: '#' },
    { label: 'Contactar', href: '#' },
  ];

  const legalLinks = [
    { label: 'Directrices de Listado', href: '#' },
    { label: 'Política de Privacidad', href: '#' },
    { label: 'Términos y Condiciones', href: '#' },
  ];

  return (
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
            <p className="text-white text-sm mb-6">Todas las IAs que necesitas en un solo lugar.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-zinc-400 hover:text-white transition-colors"
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
                <a
                  key={category}
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Tools - Mobile */}
          <div>
            <h3 className="text-white font-semibold mb-4">Herramientas</h3>
            <div className="space-y-2">
              {tools.map((tool) => (
                <a
                  key={tool}
                  href="#"
                  className="block text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {tool}
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
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {category}
                    </a>
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
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-white font-semibold mb-4">Herramientas</h3>
              <ul className="space-y-2">
                {tools.map((tool) => (
                  <li key={tool}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-white transition-colors text-sm"
                    >
                      {tool}
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
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-8">
          {/* Mobile */}
          <div className="md:hidden text-left space-y-2">
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
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-zinc-400 text-sm">© 2025 AIFinder</span>
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
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
  );
}
