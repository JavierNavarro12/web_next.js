'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AISymptomsSectionProps {
  onViewAll: () => void;
}

export default function AISymptomsSection({ onViewAll }: AISymptomsSectionProps) {
  const [displayCount] = useState(4);

  const symptomsTools = [
    {
      name: 'Ada Health',
      creator: 'Ada Health',
      price: 'Freemium',
      description: 'Triage IA',
      image: '/images/adahealth-web.webp',
      logo: '/logos/adahealt-movil.jpg',
      url: 'https://ada.com',
    },
    {
      name: 'eMed',
      creator: 'eMed',
      price: 'Freemium',
      description: 'Triage IA',
      image: '/images/emed-web.webp',
      logo: '/logos/emed-movil.jpg',
      url: 'https://emed.com',
    },
    {
      name: 'Buoy Health',
      creator: 'Buoy Health',
      price: 'Freemium',
      description: 'Triage IA',
      image: '/images/buoy-web.webp',
      logo: '/logos/buoy-movil.png',
      url: 'https://www.buoyhealth.com',
    },
    {
      name: 'Your.MD',
      creator: 'Your.MD',
      price: 'Free',
      description: 'Triage IA',
      image: '/images/your.md-web.webp',
      logo: '/logos/your.md-movil.png',
      url: 'https://your.md',
    },
  ];

  const displayedTools = symptomsTools.slice(0, displayCount);

  const handleToolClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="py-4 px-4 max-w-7xl mx-auto">
      {/* Contenedor principal con bordes */}
      <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
        {/* Header con título y botón */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Síntomas
          </h2>
          <button
            className="text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer"
            onClick={onViewAll}
          >
            Ver todas
          </button>
        </div>

        {/* Vista móvil: Tarjetas tipo Framer Templates */}
        <div className="md:hidden">
          <div className="space-y-6">
            {displayedTools.map((tool) => (
              <div
                key={tool.name}
                className="group cursor-pointer"
                onClick={() => handleToolClick(tool.url)}
              >
                {/* Imagen de la herramienta */}
                <div className="relative aspect-video bg-zinc-800 rounded-lg mb-3 overflow-hidden border border-[#232323]">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    sizes="100vw"
                    className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                  />
                  {/* Overlay hover con pricing */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-zinc-800/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                      {tool.price}
                    </div>
                  </div>
                </div>

                {/* Información de la herramienta */}
                <div className="relative">
                  {/* Título */}
                  <div className="mb-1">
                    <h3 className="font-bold text-white text-base leading-tight transition-all">
                      {tool.name}
                    </h3>
                  </div>

                  <div className="text-zinc-400 text-sm leading-relaxed mb-1">
                    <span>{tool.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vista desktop: Grid de tarjetas con imágenes */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedTools.map((tool) => (
            <div
              key={tool.name}
              className="group cursor-pointer"
              onClick={() => handleToolClick(tool.url)}
            >
              {/* Contenedor de imagen separado */}
              <div className="relative aspect-video bg-zinc-800 rounded mb-3 overflow-hidden border border-[#232323]">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                />
                {/* Overlay hover con pricing */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-zinc-800/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                    {tool.price}
                  </div>
                </div>
              </div>

              {/* Título y descripción sueltos */}
              <div>
                <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
