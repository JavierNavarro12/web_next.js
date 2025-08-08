'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AIAudioSectionProps {
  onViewAll: () => void;
}

export default function AIAudioSection({ onViewAll }: AIAudioSectionProps) {
  const [displayCount] = useState(4);

  const allAudioTools = [
    {
      name: 'Suno',
      creator: 'Suno AI',
      price: 'Freemium',
      description: 'Generación de música IA',
      image: '/images/suno-web.webp',
      logo: '/logos/suno-movil.png',
      url: 'https://suno.ai',
    },
    {
      name: 'ElevenLabs',
      creator: 'ElevenLabs',
      price: 'Freemium',
      description: 'Síntesis de voz natural',
      image: '/images/elevenlabs-web.webp',
      logo: '/logos/elevenlabs-movil.png',
      url: 'https://elevenlabs.io',
    },
    {
      name: 'Descript',
      creator: 'Descript',
      price: 'Freemium',
      description: 'Edición de audio con IA',
      image: '/images/descript-web.webp',
      logo: '/logos/descript-movil.png',
      url: 'https://www.descript.com',
    },
    {
      name: 'Voice.ai',
      creator: 'Voice.ai',
      price: 'Freemium',
      description: 'Clonación de voz IA',
      image: '/images/voice.ai-web.webp',
      logo: '/logos/voice.ai-movil.png',
      url: 'https://voice.ai',
    },
  ];

  const displayedTools = allAudioTools.slice(0, displayCount);

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
            Audio
          </h2>
          <button
            className="text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer"
            onClick={onViewAll}
          >
            Ver todas
          </button>
        </div>

        {/* Vista móvil: Lista vertical con iconos */}
        <div className="md:hidden">
          <div className="space-y-3">
            {displayedTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
                onClick={() => handleToolClick(tool.url)}
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{tool.description}</p>
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
