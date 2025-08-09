'use client';

import React from 'react';
import Image from 'next/image';

interface AIRecommendationsSectionProps {
  onViewAll?: () => void;
}

export default function AIRecommendationsSection({
  onViewAll: _onViewAll,
}: AIRecommendationsSectionProps) {
  const recommendations = [
    {
      name: 'Cursor',
      description: 'Editor de código IA',
      image: '/images/cursor-web.webp',
      logo: '/logos/cursor-movil.png',
      url: 'https://cursor.sh',
      isNew: true,
    },
    {
      name: 'Descript',
      description: 'Edición de video con IA',
      image: '/images/descript-web.webp',
      logo: '/logos/descript-movil.png',
      url: 'https://www.descript.com',
      isNew: true,
    },
    {
      name: 'Make',
      description: 'Automatización visual',
      image: '/images/make-web.webp',
      logo: '/logos/make-movil.png',
      url: 'https://www.make.com',
      isNew: false,
    },
    {
      name: 'Midjourney',
      description: 'Generación de imágenes',
      image: '/images/midjourney-web.webp',
      logo: '/logos/midjourney-movil.png',
      url: 'https://www.midjourney.com',
      isNew: false,
    },
    {
      name: 'ElevenLabs',
      description: 'Síntesis de voz IA',
      image: '/images/elevenlabs-web.webp',
      logo: '/logos/elevenlabs-movil.png',
      url: 'https://elevenlabs.io',
      isNew: false,
    },
    {
      name: 'Synthesia',
      description: 'Videos con avatares IA',
      image: '/images/Synthesia-web.webp',
      logo: '/logos/synthesia-movil.png',
      url: 'https://www.synthesia.io',
      isNew: false,
    },
    {
      name: 'Pika Labs',
      description: 'Generación de video',
      image: '/images/pikalabs-web.webp',
      logo: '/logos/pikalabs-movil.png',
      url: 'https://pika.art',
      isNew: true,
    },
    {
      name: 'ClickUp',
      description: 'Gestión de tareas',
      image: '/images/clickup-web.webp',
      logo: '/logos/clickup-movil.jpeg',
      url: 'https://clickup.com',
      isNew: true,
    },
  ];

  const handleRecommendationClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="py-4 px-4 max-w-7xl mx-auto">
      {/* Contenedor principal con bordes */}
      <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
        {/* Header con título */}
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Recomendaciones IA
          </h2>
        </div>

        {/* Vista móvil: Tarjetas tipo Framer Templates */}
        <div className="md:hidden">
          <div className="space-y-6">
            {recommendations.map((tool) => (
              <div
                key={tool.name}
                className="group cursor-pointer"
                onClick={() => handleRecommendationClick(tool.url)}
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
                  {/* Overlay hover con descripción */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-medium text-center max-w-[80%] px-4">
                      {tool.description}
                    </div>
                  </div>
                </div>

                {/* Información de la herramienta */}
                <div className="relative">
                  {/* Título con NEW si aplica */}
                  <div className="mb-1">
                    {tool.name.length > 20 ? (
                      <h3 className="font-bold text-white text-base leading-tight transition-all">
                        {tool.name.split(' ').slice(0, -2).join(' ')}
                        <br />
                        {tool.name.split(' ').slice(-2).join(' ')}
                        {tool.isNew && <span className="text-zinc-500 text-xs ml-1">NEW</span>}
                      </h3>
                    ) : (
                      <h3 className="font-bold text-white text-base leading-tight transition-all">
                        {tool.name}{' '}
                        {tool.isNew && <span className="text-zinc-500 text-xs ml-1">NEW</span>}
                      </h3>
                    )}
                  </div>

                  <div className="text-zinc-400 text-sm leading-relaxed mb-1">
                    <span>{tool.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vista desktop: Grid de tarjetas */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {recommendations.map((tool) => (
            <div
              key={tool.name}
              className="group cursor-pointer"
              onClick={() => handleRecommendationClick(tool.url)}
            >
              {/* Contenedor de imagen separado */}
              <div className="relative aspect-video bg-zinc-800 rounded mb-3 overflow-hidden border border-[#232323]">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                />
                {/* Overlay hover con descripción */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-sm font-medium text-center max-w-[80%] px-4">
                    {tool.description}
                  </div>
                </div>
              </div>

              {/* Título y descripción sueltos */}
              <div className="relative">
                {/* Título con NEW si aplica */}
                <div className="mb-1">
                  {tool.name.length > 20 ? (
                    <h3 className="font-bold text-white text-base leading-tight transition-all">
                      {tool.name.split(' ').slice(0, -2).join(' ')}
                      <br />
                      {tool.name.split(' ').slice(-2).join(' ')}{' '}
                      {tool.isNew && <span className="text-zinc-500 text-xs">NEW</span>}
                    </h3>
                  ) : (
                    <h3 className="font-bold text-white text-base leading-tight transition-all">
                      {tool.name} {tool.isNew && <span className="text-zinc-500 text-xs">NEW</span>}
                    </h3>
                  )}
                </div>

                <div className="text-zinc-400 text-sm leading-relaxed mb-1">
                  <span>{tool.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
