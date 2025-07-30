'use client';

import React from 'react';
import Image from 'next/image';

interface SpotlightSectionProps {
  onViewAll: () => void;
}

export default function SpotlightSection({ onViewAll }: SpotlightSectionProps) {
  const videoTools = [
    {
      name: 'Sora',
      image: '/images/sora-web.png',
      logo: '/logos/sora-movil.png',
      description: 'Video generativo',
      category: 'Generación de Video',
      url: 'https://openai.com/sora',
      pricing: 'Gratis',
    },
    {
      name: 'Veo',
      image: '/images/veo-web.png',
      logo: '/logos/veo-movil.png',
      description: 'Video IA',
      category: 'Video IA',
      url: 'https://deepmind.google/models/veo/',
      pricing: 'Freemium',
    },
    {
      name: 'Runway',
      image: '/images/runway-web.png',
      logo: '/logos/runway-movil.webp',
      description: 'Edición de video',
      category: 'Edición de Video',
      url: 'https://runwayml.com',
      pricing: 'Freemium',
    },
    {
      name: 'Pika Labs',
      image: '/images/pikalabs-web.png',
      logo: '/logos/pikalabs-movil.png',
      description: 'Video IA',
      category: 'Video IA',
      url: 'https://pika.art',
      pricing: 'Freemium',
    },
  ];

  const handleToolClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="py-4 px-4 max-w-7xl mx-auto">
      {/* Contenedor principal con bordes */}
      <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
        {/* Header con título y botón */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Video</h2>
          <button
            className="text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer"
            onClick={onViewAll}
          >
            Ver todo
          </button>
        </div>

        {/* Vista móvil: Lista vertical con iconos */}
        <div className="md:hidden">
          <div className="space-y-3">
            {videoTools.map((tool) => (
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
          {videoTools.map((tool) => (
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
                    {tool.pricing}
                  </div>
                </div>
              </div>

              {/* Título y descripción sueltos */}
              <div>
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-all">
                  {tool.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
