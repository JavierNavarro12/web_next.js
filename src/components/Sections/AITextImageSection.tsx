'use client';

import React from 'react';
import Image from 'next/image';

interface AITextImageSectionProps {
  onViewAllTexto: () => void;
  onViewAllImagenes: () => void;
}

export default function AITextImageSection({
  onViewAllTexto: _onViewAllTexto,
  onViewAllImagenes: _onViewAllImagenes,
}: AITextImageSectionProps) {
  const textoTools = [
    {
      name: 'Qwen',
      logo: '/logos/qwen-movil.webp',
      description: 'Modelo de texto',
      url: 'https://qwen.ai',
    },
    {
      name: 'Mistral',
      logo: '/logos/mistral-movil.png',
      description: 'Modelo open source',
      url: 'https://mistral.ai',
    },
    {
      name: 'Falcon',
      logo: '/logos/falcon-movil.jpeg',
      description: 'Modelo open source',
      url: 'https://falconllm.tii.ae',
    },
    {
      name: 'BioGPT',
      logo: '/logos/biogpt-movil.png',
      description: 'Texto biomédico',
      url: 'https://github.com/microsoft/BioGPT',
    },
    {
      name: 'DeepSeek',
      logo: '/logos/deepseek-movil.png',
      description: 'IA de texto',
      url: 'https://deepseek.com',
    },
    {
      name: 'Sudowrite',
      logo: '/logos/sudowrite-movil.webp',
      description: 'Asistente de escritura',
      url: 'https://sudowrite.com',
    },
    {
      name: 'Copy.ai',
      logo: '/logos/copyai-movil.jpg',
      description: 'Copywriting AI',
      url: 'https://copy.ai',
    },
  ];

  const imagenesTools = [
    {
      name: 'FLUX',
      logo: '/logos/flux-movil.png',
      description: 'Arte generativo',
      url: 'https://bfl.ai',
    },
    {
      name: 'Ideogram',
      logo: '/logos/ideogram-movil.jpg',
      description: 'Texto a imagen',
      url: 'https://ideogram.ai',
    },
    {
      name: 'Recraft',
      logo: '/logos/recraft-movil.png',
      description: 'Diseño IA',
      url: 'https://recraft.ai',
    },
    {
      name: 'Seedream',
      logo: '/logos/seedream-movil.jpeg',
      description: 'Imágenes IA',
      url: 'https://seed.bytedance.com/en/tech/seedream3_0',
    },
    {
      name: 'Aurora',
      logo: '/logos/aurora-movil.png',
      description: 'Arte generativo',
      url: 'https://x.ai/news/grok-image-generation-release',
    },
    {
      name: 'Playground AI',
      logo: '/logos/playgroundai-movil.png',
      description: 'Imágenes IA',
      url: 'https://playgroundai.com',
    },
    {
      name: 'Leonardo AI',
      logo: '/logos/leonardoai-movil.jpg',
      description: 'Arte generativo',
      url: 'https://leonardo.ai',
    },
    {
      name: 'Imagen',
      logo: '/logos/imagen-movil.svg',
      description: 'Modelo de Google',
      url: 'https://deepmind.google/models/imagen/',
    },
  ];

  return (
    <div className="py-4 px-4 max-w-7xl mx-auto">
      {/* Vista móvil: Lista vertical con iconos */}
      <div className="md:hidden space-y-6">
        {/* Contenedor Texto - Móvil */}
        <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Texto
            </h2>
          </div>

          <div className="space-y-3">
            {textoTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contenedor Imágenes - Móvil */}
        <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Imágenes
            </h2>
          </div>

          <div className="space-y-3">
            {imagenesTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain rounded-lg flex-shrink-0"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{tool.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{tool.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Vista desktop: Grid de dos contenedores lado a lado */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Contenedor Texto */}
        <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
          <div className="mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Texto
            </h2>
          </div>

          {/* Grid de 2 columnas para herramientas de texto */}
          <div className="grid grid-cols-2 gap-2">
            {textoTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer p-2 hover:bg-zinc-900/30 rounded-lg transition-all duration-200"
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
                      loading="lazy"
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
              </a>
            ))}
          </div>
        </div>

        {/* Contenedor Imágenes */}
        <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
          <div className="mb-4">
            <h2 className="text-lg md:text-xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Imágenes
            </h2>
          </div>

          {/* Grid de 2 columnas para herramientas de imágenes */}
          <div className="grid grid-cols-2 gap-2">
            {imagenesTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer p-2 hover:bg-zinc-900/30 rounded-lg transition-all duration-200"
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
                      loading="lazy"
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
