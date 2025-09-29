'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PromotionalCard() {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showMouseCursor, setShowMouseCursor] = useState(false);
  const [mouseClicked, setMouseClicked] = useState(false);
  const [mouseAnimationStarted, setMouseAnimationStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fullPrompt =
    'A futuristic cyberpunk cityscape at night with neon lights, flying cars, holographic billboards';

  // Animación de escritura del prompt
  useEffect(() => {
    if (currentDemo === 0 && isTyping) {
      if (typedText.length < fullPrompt.length) {
        const timer = setTimeout(() => {
          setTypedText(fullPrompt.slice(0, typedText.length + 1));
        }, 50); // 50ms por carácter
        return () => clearTimeout(timer);
      } else {
        // Cuando termina de escribir, muestra el cursor del ratón
        const timer = setTimeout(() => {
          setIsTyping(false);
          setShowMouseCursor(true);

          // Inicia la animación del ratón después de 100ms
          setTimeout(() => {
            setMouseAnimationStarted(true);
          }, 100);

          // Después de 1s, simula el clic
          setTimeout(() => {
            setMouseClicked(true);

            // Después del clic, muestra pantalla de carga
            setTimeout(() => {
              setIsLoading(true);

              // Después de 1s de carga, muestra el resultado
              setTimeout(() => {
                setCurrentDemo(1);
                setIsLoading(false);
              }, 1000);
            }, 300);
          }, 1000);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [typedText, currentDemo, isTyping]);

  // Reset para reiniciar la animación
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      if (currentDemo === 1) {
        setCurrentDemo(0);
        setTypedText('');
        setIsTyping(true);
        setShowMouseCursor(false);
        setMouseClicked(false);
        setMouseAnimationStarted(false);
        setIsLoading(false);
      }
    }, 4000); // Muestra el resultado 4s

    return () => clearTimeout(resetTimer);
  }, [currentDemo]);

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      {/* Tarjeta promocional - Tamaño compacto */}
      <div className="relative bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl border border-stone-300 p-6 overflow-hidden min-h-[320px] lg:h-[200px]">
        {/* Patrón de fondo decorativo */}
        <div className="absolute inset-0 opacity-[0.1]">
          <div className="absolute top-5 left-5 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-5 right-5 w-24 h-24 bg-purple-500/30 rounded-full blur-xl"></div>
        </div>

        <div className="relative h-full">
          {/* Layout móvil: Grid 2x2 */}
          <div className="lg:hidden grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {/* Texto arriba izquierda */}
            <div className="col-span-1 row-span-1 flex flex-col justify-start">
              <h2 className="text-lg font-bold text-gray-900 leading-tight mb-3">
                Transforma ideas simples en
                <br />
                <span className="text-blue-600">imágenes profesionales con Leonardo AI.</span>
              </h2>
              <button
                onClick={() => window.open('https://leonardo.ai', '_blank')}
                className="px-3 py-1.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium rounded-md transition-all duration-200 shadow-lg cursor-pointer w-fit"
              >
                Crear imágenes gratis
              </button>
            </div>

            {/* Espacio arriba derecha (vacío) */}
            <div className="col-span-1 row-span-1"></div>

            {/* Espacio abajo izquierda (vacío) */}
            <div className="col-span-1 row-span-1"></div>

            {/* Demo abajo derecha */}
            <div className="col-span-1 row-span-1 flex justify-end items-start -mt-4">
              <div className="relative">
                {/* Efecto blur decorativo - Tamaño normal */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-green-500 rounded-2xl blur-xl opacity-30 transform rotate-6"></div>

                {/* Mockup de Leonardo AI - Tamaño similar a desktop */}
                <div className="relative bg-white rounded-2xl shadow-2xl transform -rotate-8">
                  {/* Contenido de Leonardo AI */}
                  <div className="relative w-[280px] h-[250px] transition-all duration-1000 ease-in-out overflow-hidden rounded-2xl bg-gray-900">
                    {currentDemo === 0 && !isLoading ? (
                      /* Estado 1: Interfaz de Leonardo AI escribiendo prompt */
                      <div className="w-full h-full p-4 bg-gray-900 text-white relative">
                        {/* Header de Leonardo AI - Tamaño normal */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-5 h-5 rounded overflow-hidden">
                            <Image
                              src="/logos/leonardoai-movil.jpg"
                              alt="Leonardo AI logo"
                              width={20}
                              height={20}
                              className="w-full h-full object-cover rounded"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-sm font-medium">Leonardo AI</span>
                        </div>

                        {/* Área de prompt - Tamaño normal */}
                        <div className="bg-gray-800 rounded-lg p-3 mb-3">
                          <div className="text-xs text-gray-400 mb-2">Prompt</div>
                          <div className="text-sm text-white min-h-[60px] leading-relaxed">
                            {typedText}
                            {isTyping && typedText.length < fullPrompt.length && (
                              <span className="inline-block w-0.5 h-4 bg-blue-500 ml-1 animate-pulse"></span>
                            )}
                          </div>
                        </div>

                        {/* Botón Generate - Tamaño normal */}
                        <button
                          className={`w-full text-gray-900 text-sm py-2 rounded-lg font-medium transition-all duration-200 border ${
                            mouseClicked
                              ? 'bg-gray-100 scale-95 border-gray-300'
                              : 'bg-white border-gray-200'
                          }`}
                        >
                          Generate
                        </button>

                        {/* Cursor del ratón animado - Tamaño normal */}
                        {showMouseCursor && (
                          <div
                            className={`absolute pointer-events-none transition-all duration-1000 ease-out ${
                              mouseAnimationStarted
                                ? 'bottom-[28px] left-1/2 transform -translate-x-1/2 opacity-100'
                                : 'bottom-[90px] left-[30%] opacity-0'
                            }`}
                          >
                            <div className="relative">
                              {/* Cursor tamaño normal */}
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="drop-shadow-lg"
                              >
                                <path
                                  d="M7.5 2L18 12.5L13 12.5L16 19L14 20L11 13L7.5 17V2Z"
                                  fill="white"
                                  stroke="black"
                                  strokeWidth="1"
                                />
                              </svg>
                              {/* Efecto de clic tamaño normal */}
                              {mouseClicked && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-blue-400 rounded-full animate-ping"></div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : isLoading ? (
                      /* Estado de carga - Tamaño normal */
                      <div className="w-full h-full p-4 bg-gray-900 text-white relative flex flex-col items-center justify-center">
                        {/* Header de Leonardo AI */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <div className="w-5 h-5 rounded overflow-hidden">
                            <Image
                              src="/logos/leonardoai-movil.jpg"
                              alt="Leonardo AI logo"
                              width={20}
                              height={20}
                              className="w-full h-full object-cover rounded"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-sm font-medium">Leonardo AI</span>
                        </div>

                        {/* Indicador de carga tamaño normal */}
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
                          <div className="text-center">
                            <div className="text-sm font-medium text-white mb-1">
                              Generating image...
                            </div>
                            <div className="text-xs text-gray-400">This may take a few seconds</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Estado 2: Resultado generado */
                      <Image
                        src="/images/leonardofinal.webp"
                        alt="Leonardo AI generated result"
                        fill
                        sizes="280px"
                        className="object-cover rounded-2xl"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Layout desktop: Como estaba antes */}
          <div className="hidden lg:flex lg:items-center h-full">
            {/* Contenido izquierda en desktop */}
            <div className="w-3/5 space-y-4 pr-4">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                  Transforma ideas simples en
                  <br />
                  <span className="text-blue-600">imágenes profesionales con Leonardo.</span>
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open('https://leonardo.ai', '_blank')}
                  className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Crear imágenes gratis
                </button>
              </div>
            </div>

            {/* Demo derecha en desktop */}
            <div className="relative flex justify-end items-center w-2/5 pr-12">
              {/* Efecto blur decorativo - Más grande */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-green-500 rounded-2xl blur-xl opacity-30 transform rotate-6"></div>

              {/* Mockup de Leonardo AI - Capturas reales */}
              <div className="relative bg-white rounded-2xl shadow-2xl transform -rotate-8 ml-0 lg:ml-4">
                {/* Contenido de Leonardo AI - Capturas reales */}
                <div className="relative w-[280px] h-[200px] lg:w-[320px] lg:h-[240px] transition-all duration-1000 ease-in-out overflow-hidden rounded-2xl bg-gray-900">
                  {currentDemo === 0 && !isLoading ? (
                    /* Estado 1: Interfaz de Leonardo AI escribiendo prompt */
                    <div className="w-full h-full p-4 bg-gray-900 text-white relative">
                      {/* Header de Leonardo AI */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded overflow-hidden">
                          <Image
                            src="/logos/leonardoai-movil.jpg"
                            alt="Leonardo AI logo"
                            width={24}
                            height={24}
                            className="w-full h-full object-cover rounded"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm font-medium">Leonardo AI</span>
                      </div>

                      {/* Área de prompt */}
                      <div className="bg-gray-800 rounded-lg p-3 mb-3">
                        <div className="text-xs text-gray-400 mb-2">Prompt</div>
                        <div className="text-sm text-white min-h-[40px]">
                          {typedText}
                          {isTyping && typedText.length < fullPrompt.length && (
                            <span className="inline-block w-0.5 h-4 bg-blue-500 ml-1 animate-pulse"></span>
                          )}
                        </div>
                      </div>

                      {/* Botón Generate */}
                      <button
                        className={`w-full text-gray-900 text-sm py-2 rounded-lg font-medium transition-all duration-200 border ${
                          mouseClicked
                            ? 'bg-gray-100 scale-95 border-gray-300'
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        Generate
                      </button>

                      {/* Cursor del ratón animado */}
                      {showMouseCursor && (
                        <div
                          className={`absolute pointer-events-none transition-all duration-1000 ease-out ${
                            mouseAnimationStarted
                              ? 'bottom-[18px] left-1/2 transform -translate-x-1/2 opacity-100'
                              : 'bottom-[80px] left-[30%] opacity-0'
                          }`}
                        >
                          <div className="relative">
                            {/* Cursor */}
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="drop-shadow-lg"
                            >
                              <path
                                d="M7.5 2L18 12.5L13 12.5L16 19L14 20L11 13L7.5 17V2Z"
                                fill="white"
                                stroke="black"
                                strokeWidth="1"
                              />
                            </svg>
                            {/* Efecto de clic */}
                            {mouseClicked && (
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-blue-400 rounded-full animate-ping"></div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : isLoading ? (
                    /* Estado de carga: Generando imagen */
                    <div className="w-full h-full p-4 bg-gray-900 text-white relative flex flex-col items-center justify-center">
                      {/* Header de Leonardo AI */}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="w-6 h-6 rounded overflow-hidden">
                          <Image
                            src="/logos/leonardoai-movil.jpg"
                            alt="Leonardo AI logo"
                            width={24}
                            height={24}
                            className="w-full h-full object-cover rounded"
                            loading="lazy"
                          />
                        </div>
                        <span className="text-sm font-medium">Leonardo AI</span>
                      </div>

                      {/* Indicador de carga */}
                      <div className="flex flex-col items-center gap-3">
                        {/* Spinner */}
                        <div className="w-8 h-8 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>

                        {/* Texto */}
                        <div className="text-center">
                          <div className="text-sm font-medium text-white mb-1">
                            Generating image...
                          </div>
                          <div className="text-xs text-gray-400">This may take a few seconds</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Estado 2: Resultado generado */
                    <Image
                      src="/images/leonardofinal.webp"
                      alt="Leonardo AI generated result"
                      fill
                      sizes="(max-width: 1024px) 280px, 320px"
                      className="object-cover rounded-2xl"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
