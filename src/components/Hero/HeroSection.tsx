'use client';

import React, { useState } from 'react';
import FloatingCards from './FloatingCards';
import { newsletterService } from '../../services/newsletterService';

export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setError('Por favor ingresa tu email');
      return;
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await newsletterService.subscribeToNewsletter(email, 'hero');
      setShowSuccess(true);
      setEmail('');

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error: unknown) {
      setError((error as Error).message || 'Error al suscribirse. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 md:pt-0">
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden py-4 md:py-8">
        {/* Hero Card con elementos flotantes dentro */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="relative bg-black border border-zinc-700 rounded-2xl p-6 md:p-8 text-center overflow-hidden min-h-[450px] md:min-h-[320px]">
            {/* Tarjetas flotantes para móvil */}
            <FloatingCards isMobile={true} />

            {/* Tarjetas flotantes para web */}
            <FloatingCards isMobile={false} />

            {/* Contenido principal - Vista móvil */}
            <div className="md:hidden absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 text-center max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                Todas las IAs
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl">que necesitas en un lugar.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-4 md:mb-5 leading-relaxed">
                Herramientas, recursos y productos de IA. Entregado semanalmente.
              </p>

              {/* Newsletter signup */}
              <div className="flex justify-center items-center max-w-md mx-auto">
                <form onSubmit={handleSubscribe} className="flex w-full gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="flex-1 px-4 py-3 bg-zinc-800 text-white placeholder-zinc-300 focus:outline-none border border-zinc-600 rounded-full text-sm md:text-base"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold transition-colors rounded-full text-sm md:text-base whitespace-nowrap"
                  >
                    {isSubmitting ? 'Enviando...' : 'Suscribirse'}
                  </button>
                </form>
              </div>

              {/* Mensajes de éxito y error */}
              {showSuccess && (
                <div className="mt-3 text-green-400 text-sm">
                  ¡Suscripción exitosa! Revisa tu email.
                </div>
              )}
              {error && <div className="mt-3 text-red-400 text-sm">{error}</div>}
            </div>

            {/* Contenido principal - Vista web */}
            <div className="hidden md:block absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-8 text-center max-w-3xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                Todas las IAs
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl">que necesitas en un lugar.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-4 md:mb-5 leading-relaxed">
                Herramientas, recursos y productos de IA. Entregado semanalmente.
              </p>

              {/* Newsletter signup */}
              <div className="flex justify-center items-center max-w-md mx-auto">
                <form onSubmit={handleSubscribe} className="flex w-full gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="flex-1 px-4 py-3 bg-zinc-800 text-white placeholder-zinc-300 focus:outline-none border border-zinc-600 rounded-full text-sm md:text-base"
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 md:px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold transition-colors rounded-full text-sm md:text-base whitespace-nowrap"
                  >
                    {isSubmitting ? 'Enviando...' : 'Suscribirse'}
                  </button>
                </form>
              </div>

              {/* Mensajes de éxito y error */}
              {showSuccess && (
                <div className="mt-3 text-green-400 text-sm">
                  ¡Suscripción exitosa! Revisa tu email.
                </div>
              )}
              {error && <div className="mt-3 text-red-400 text-sm">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
