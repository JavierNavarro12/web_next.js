'use client';

import React from 'react';
import FloatingCards from './FloatingCards';

export default function HeroSection() {
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
    </div>
  );
}
