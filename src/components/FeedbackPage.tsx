import React, { useEffect } from 'react';

interface FeedbackPageProps {
  onBack: () => void;
}

export default function FeedbackPage({ onBack }: FeedbackPageProps) {
  // Hacer scroll al top cuando se monta el componente
  useEffect(() => {
    // Intentar hacer scroll en el contenedor principal (desktop) o window (móvil)
    const mainElement = document.querySelector('main');
    if (mainElement && mainElement.classList.contains('overflow-y-auto')) {
      // Desktop: hacer scroll en el main container
      mainElement.scrollTo(0, 0);
    } else {
      // Móvil: hacer scroll en window
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <div className="bg-black">
      {/* Contenido principal con líneas */}
      <div className="relative min-h-screen bg-black">
        {/* Header móvil */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black border-b border-zinc-800">
          <div className="flex items-center justify-between px-4 py-4">
            <button onClick={onBack} className="text-zinc-400 hover:text-white transition-colors">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 12H5m7-7l-7 7 7 7"
                />
              </svg>
            </button>
            <span className="font-extrabold text-2xl tracking-tight text-white font-sans">
              AIFinder
            </span>
            <div className="w-6"></div>
          </div>
        </div>

        {/* Botón Back desktop - movido hacia abajo y izquierda */}
        <button
          onClick={onBack}
          className="hidden md:flex absolute top-6 left-0 z-50 items-center gap-2 text-white hover:text-zinc-300 transition-colors p-4"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 12H5m7-7l-7 7 7 7"
            />
          </svg>
          Volver
        </button>

        {/* Líneas específicas como en la foto */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Líneas horizontales específicas */}
          {/* Línea debajo del botón back */}
          <div className="absolute top-26 md:top-20 left-0 right-0 h-px bg-zinc-700 opacity-60"></div>

          {/* Línea vertical que divide la primera sección */}
          <div className="absolute top-0 left-1/2 w-px h-26 md:h-20 bg-zinc-700 opacity-60"></div>

          {/* Segunda línea horizontal */}
          <div className="absolute top-36 md:top-48 left-0 right-0 h-px bg-zinc-700 opacity-60"></div>

          {/* Líneas horizontales abajo */}
          <div className="hidden md:block absolute bottom-48 left-0 right-0 h-px bg-zinc-700 opacity-60"></div>
          <div className="hidden md:block absolute bottom-24 left-0 right-0 h-px bg-zinc-700 opacity-60"></div>

          {/* Línea vertical que divide la sección del medio en 2 */}
          <div className="hidden md:block absolute bottom-24 left-1/2 w-px h-24 bg-zinc-700 opacity-60"></div>

          {/* Líneas verticales que dividen la sección de abajo en 3 */}
          <div className="hidden md:block absolute bottom-0 left-1/3 w-px h-24 bg-zinc-700 opacity-60"></div>
          <div className="hidden md:block absolute bottom-0 left-2/3 w-px h-24 bg-zinc-700 opacity-60"></div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 min-h-screen flex items-start justify-center pt-40 md:pt-52">
          <div className="w-full max-w-none px-4 md:px-0">
            {/* Layout móvil */}
            <div className="md:hidden w-full">
              {/* Título y descripción */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-white mb-4 leading-tight">
                  ¡TU FEEDBACK ES
                  <br />
                  APRECIADO!
                </h1>
                <p className="text-base text-zinc-300 leading-relaxed">
                  Esperamos con ansias leer tus comentarios,
                  <br />
                  ideas y recomendaciones.
                </p>
              </div>

              {/* Formulario móvil - ancho completo */}
              <div className="bg-black rounded-xl p-6 border border-zinc-700">
                <form className="space-y-4">
                  {/* Nombre */}
                  <div>
                    <label className="block text-white font-medium mb-2">Nombre</label>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="email@gmail.com"
                      className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>

                  {/* Campo de comentarios */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      ¡Cuéntanos tus ideas!
                    </label>
                    <textarea
                      rows={4}
                      placeholder="¡Estoy disfrutando AIFinder! Deberían agregar..."
                      className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Enviar Sugerencia
                  </button>
                </form>
              </div>
            </div>

            {/* Layout desktop - original */}
            <div className="hidden md:block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                {/* Columna izquierda - Texto */}
                <div className="px-16 lg:px-20">
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight whitespace-nowrap text-center lg:text-left">
                    ¡TU FEEDBACK ES APRECIADO!
                  </h1>
                  <p className="text-base text-zinc-300 leading-relaxed text-center">
                    Esperamos con ansias leer tus comentarios, ideas y recomendaciones.
                  </p>
                </div>

                {/* Columna derecha - Formulario con colores exactos de la foto */}
                <div className="bg-black rounded-xl p-8 border border-zinc-700 ml-2 lg:ml-6 mr-16 lg:mr-20">
                  <form className="space-y-6">
                    {/* Fila de Nombre y Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Nombre</label>
                        <input
                          type="text"
                          placeholder="Nombre"
                          className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="email@gmail.com"
                          className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Campo de comentarios */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        ¡Cuéntanos tus ideas!
                      </label>
                      <textarea
                        rows={6}
                        placeholder="¡Estoy disfrutando AIFinder! Deberían agregar..."
                        className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                      />
                    </div>

                    {/* Botón de envío */}
                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      Enviar Sugerencia
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer original */}
      <footer className="bg-black border-t border-zinc-800 mt-0">
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
                  onClick={onBack}
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
                <p className="text-white text-sm">Todas las IAs que necesitas en un solo lugar.</p>
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
                      onClick={onBack}
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
    </div>
  );
}
