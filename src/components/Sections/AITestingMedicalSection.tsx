'use client';

import React from 'react';
import Image from 'next/image';

interface AITestingMedicalSectionProps {
  onViewAllTesting: () => void;
  onViewAllMedical: () => void;
}

export default function AITestingMedicalSection({
  onViewAllTesting: _onViewAllTesting,
  onViewAllMedical: _onViewAllMedical,
}: AITestingMedicalSectionProps) {
  const testingTools = [
    {
      name: 'Codium',
      logo: '/logos/codium-movil.png',
      description: 'Testing IA',
      url: 'https://www.codium.ai',
    },
    {
      name: 'Testim',
      logo: '/logos/testim-movil.jpeg',
      description: 'Testing IA',
      url: 'https://www.testim.io',
    },
    {
      name: 'Diffblue',
      logo: '/logos/diffblue-movil.png',
      description: 'Testing IA',
      url: 'https://www.diffblue.com',
    },
    {
      name: 'Testbot',
      logo: '/logos/testingbot-movil.svg',
      description: 'Testing IA',
      url: 'https://testingbot.com',
    },
  ];

  const medicalTools = [
    {
      name: 'Aidoc',
      logo: '/logos/aidoc-movil.png',
      description: 'Imágenes médicas',
      url: 'https://www.aidoc.com',
    },
    {
      name: 'PathAI',
      logo: '/logos/pathai-movil.png',
      description: 'Imágenes médicas',
      url: 'https://pathai.com',
    },
    {
      name: 'Zebra Medical',
      logo: '/logos/zebra-movil.png',
      description: 'Imágenes médicas',
      url: 'http://www.zebra-med.com',
    },
    {
      name: 'Lunit',
      logo: '/logos/lunit-movil.webp',
      description: 'Imágenes médicas',
      url: 'https://www.lunit.io',
    },
  ];

  const handleToolClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="py-4 px-4 max-w-7xl mx-auto">
      {/* Vista móvil: Lista vertical con iconos */}
      <div className="md:hidden space-y-6">
        {/* Contenedor Testing y QA - Móvil */}
        <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
          <div className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Testing y QA
            </h2>
          </div>

          <div className="space-y-3">
            {testingTools.map((tool) => (
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

        {/* Contenedor Imágenes Médicas - Móvil */}
        <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
          <div className="mb-6">
            <h2
              className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Imágenes Médicas
            </h2>
          </div>

          <div className="space-y-3">
            {medicalTools.map((tool) => (
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
      </div>

      {/* Vista desktop: Grid de dos contenedores lado a lado */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Contenedor Testing y QA */}
        <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
          <div className="mb-4">
            <h2
              className="text-lg md:text-xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Testing y QA
            </h2>
          </div>

          {/* Grid de 2 columnas para herramientas de testing */}
          <div className="grid grid-cols-2 gap-2">
            {testingTools.map((tool) => (
              <div
                key={tool.name}
                className="group cursor-pointer p-2 hover:bg-zinc-900/30 rounded-lg transition-all duration-200"
                onClick={() => handleToolClick(tool.url)}
              >
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      sizes="48px"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm mb-1 truncate">{tool.name}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contenedor Imágenes Médicas */}
        <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
          <div className="mb-4">
            <h2
              className="text-lg md:text-xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Imágenes Médicas
            </h2>
          </div>

          {/* Grid de 2 columnas para herramientas de imágenes médicas */}
          <div className="grid grid-cols-2 gap-2">
            {medicalTools.map((tool) => (
              <div
                key={tool.name}
                className="group cursor-pointer p-2 hover:bg-zinc-900/30 rounded-lg transition-all duration-200"
                onClick={() => handleToolClick(tool.url)}
              >
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      fill
                      sizes="48px"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm mb-1 truncate">{tool.name}</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
