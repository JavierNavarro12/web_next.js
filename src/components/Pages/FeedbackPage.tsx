import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import Footer from '../Footer/Footer';

// Inicializar EmailJS una sola vez desde configuración (sin hardcodear claves)
emailjs.init(EMAILJS_CONFIG.USER_ID);

interface FeedbackPageProps {
  onBack: () => void;
  setActiveCategory?: (category: string | null) => void;
  setActiveSubcategory?: (subcategory: string | null) => void;
  navigateToBugReport?: () => void;
}

export default function FeedbackPage({
  onBack,
  setActiveCategory,
  setActiveSubcategory,
  navigateToBugReport,
}: FeedbackPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.FEEDBACK_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.feedback,
          time: new Date().toLocaleString('es-ES'),
        },
      );

      if (process.env.NODE_ENV !== 'production') {
        console.log('Email de feedback enviado exitosamente:', result);
      }
      setShowSuccess(true);
      setFormData({ name: '', email: '', feedback: '' });

      // Cerrar después de 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
        onBack();
      }, 3000);
    } catch (error) {
      console.error('Error al enviar email de feedback:', error);
      // Mostrar notificación no bloqueante
      setShowSuccess(false);
      // Reutilizamos el botón de envío deshabilitado como indicativo y mensaje visual via estado local
      // Puedes integrar un sistema de toasts global en el futuro
      const el = document.createElement('div');
      el.textContent = 'Error al enviar el feedback. Por favor, inténtalo de nuevo.';
      el.className =
        'fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-[1000]';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="bg-black">
      {/* Contenido principal con líneas */}
      <div className="relative min-h-screen bg-black">
        {/* Header móvil */}
        <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black border-b border-zinc-800">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={onBack}
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Volver a la página anterior"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
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
          className="hidden md:flex absolute top-4 left-0 z-50 items-center gap-2 text-white hover:text-zinc-300 transition-colors p-4"
          aria-label="Volver a la página anterior"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
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
                {showSuccess ? (
                  <div className="text-center py-8">
                    <div className="text-green-400 text-6xl mb-4">✓</div>
                    <h3 className="text-white text-xl font-semibold mb-2">¡Feedback enviado!</h3>
                    <p className="text-zinc-400">
                      Gracias por tu feedback. Te responderemos pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Nombre */}
                    <div>
                      <label className="block text-white font-medium mb-2">Nombre</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nombre"
                        className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@gmail.com"
                        className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                        required
                      />
                    </div>

                    {/* Campo de comentarios */}
                    <div>
                      <label className="block text-white font-medium mb-2">
                        ¡Cuéntanos tus ideas!
                      </label>
                      <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="¡Estoy disfrutando AIFinder! Deberían agregar..."
                        className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                        required
                      />
                    </div>

                    {/* Botón de envío */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Sugerencia'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Layout desktop - original */}
            <div className="hidden md:block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
                {/* Columna izquierda - Texto */}
                <div className="px-16 lg:px-20 relative">
                  {/* Línea vertical decorativa a la izquierda del título */}
                  <div className="hidden md:block absolute left-10 lg:left-14 -top-48 -bottom-48 w-px bg-zinc-700 opacity-60"></div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight whitespace-nowrap text-center lg:text-left">
                    ¡TU FEEDBACK ES APRECIADO!
                  </h1>
                  <p className="text-base text-zinc-300 leading-relaxed text-center">
                    Esperamos con ansias leer tus comentarios, ideas y recomendaciones.
                  </p>
                </div>

                {/* Columna derecha - Formulario con colores exactos de la foto */}
                <div className="bg-black rounded-xl p-8 border border-zinc-700 ml-2 lg:ml-6 mr-16 lg:mr-20 relative">
                  {/* Línea vertical decorativa a la derecha del formulario */}
                  <div className="hidden md:block absolute -right-4 lg:-right-6 -top-4 -bottom-3 w-px bg-zinc-700 opacity-60"></div>
                  {showSuccess ? (
                    <div className="text-center py-12">
                      <div className="text-green-400 text-8xl mb-6">✓</div>
                      <h3 className="text-white text-2xl font-semibold mb-3">¡Feedback enviado!</h3>
                      <p className="text-zinc-400 text-lg">
                        Gracias por tu feedback. Te responderemos pronto.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Fila de Nombre y Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-white font-medium mb-2">Nombre</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Nombre"
                            className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email@gmail.com"
                            className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      {/* Campo de comentarios */}
                      <div>
                        <label className="block text-white font-medium mb-2">
                          ¡Cuéntanos tus ideas!
                        </label>
                        <textarea
                          name="feedback"
                          value={formData.feedback}
                          onChange={handleInputChange}
                          rows={6}
                          placeholder="¡Estoy disfrutando AIFinder! Deberían agregar..."
                          className="w-full px-4 py-3 bg-zinc-900 text-white placeholder-zinc-500 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                          required
                        />
                      </div>

                      {/* Botón de envío */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Sugerencia'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer
        setShowFeedback={() => {}} // No hacer nada ya que estamos en la página de feedback
        setShowBugReport={navigateToBugReport || (() => {})} // Navegar a reportar bug
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        className="mt-0"
      />
    </div>
  );
}
