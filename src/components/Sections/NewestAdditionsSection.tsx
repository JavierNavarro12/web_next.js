'use client';

import React from 'react';
import Image from 'next/image';
import { handleToolClick } from '../../utils/toolUtils';

// Obtener las 10 herramientas más recientes (puedes modificar esta lógica)
const getNewestTools = () => {
  const newestTools = [
    {
      name: 'ChatGPT',
      description: 'Asistente IA conversacional',
      image: '/images/chatpgt-web.png',
      logo: '/logos/chatgpt-movil.png',
      url: 'https://chatgpt.com',
      pricing: 'freemium' as const,
    },
    {
      name: 'Claude',
      description: 'IA avanzada para conversación',
      image: '/images/claude-web.png',
      logo: '/logos/claude-movil.png',
      url: 'https://claude.ai',
      pricing: 'freemium' as const,
    },
    {
      name: 'Midjourney',
      description: 'Generación de imágenes IA',
      image: '/images/midjourney-web.png',
      logo: '/logos/midjourney-movil.png',
      url: 'https://midjourney.com',
      pricing: 'paid' as const,
    },
    {
      name: 'GitHub Copilot',
      description: 'Asistente de código IA',
      image: '/images/githubcopilot-web.png',
      logo: '/logos/githubcopilto-movil.png',
      url: 'https://github.com/features/copilot',
      pricing: 'paid' as const,
    },
    {
      name: 'Perplexity',
      description: 'Buscador con IA',
      image: '/images/perplexity-web.png',
      logo: '/logos/perplexity-movil.png',
      url: 'https://perplexity.ai',
      pricing: 'freemium' as const,
    },
    {
      name: 'Cursor',
      description: 'Editor de código IA',
      image: '/images/cursor-web.png',
      logo: '/logos/cursor-movil.png',
      url: 'https://cursor.sh',
      pricing: 'freemium' as const,
    },
    {
      name: 'Notion',
      description: 'Workspace inteligente',
      image: '/images/notion-web.png',
      logo: '/logos/notion-movil.jpg',
      url: 'https://notion.so',
      pricing: 'freemium' as const,
    },
    {
      name: 'Gamma',
      description: 'Presentaciones con IA',
      image: '/images/gamma-web.png',
      logo: '/logos/gamma-movil.jpeg',
      url: 'https://gamma.app',
      pricing: 'freemium' as const,
    },
    {
      name: 'Runway',
      description: 'Video generativo IA',
      image: '/images/runway-web.png',
      logo: '/logos/runway-movil.webp',
      url: 'https://runwayml.com',
      pricing: 'freemium' as const,
    },
    {
      name: 'Jasper',
      description: 'Escritura con IA',
      image: '/images/jasper-web.png',
      logo: '/logos/jasper-movil.png',
      url: 'https://jasper.ai',
      pricing: 'paid' as const,
    },
  ];

  return newestTools;
};

interface NewestAdditionsSectionProps {
  onViewAll?: () => void;
}

export default function NewestAdditionsSection({ onViewAll }: NewestAdditionsSectionProps = {}) {
  const newestTools = getNewestTools();

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      <div className="bg-black rounded-2xl border border-zinc-700 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Nuevas adiciones
          </h2>
          <button
            className="text-sm text-zinc-300 hover:text-white transition-colors cursor-pointer"
            onClick={() => {
              if (onViewAll) {
                onViewAll();
              }
            }}
          >
            Ver Todo
          </button>
        </div>

        {/* Grid de herramientas - Sin tarjetas individuales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {newestTools.slice(0, 8).map((tool, _index) => (
            <div
              key={tool.name}
              className="group cursor-pointer p-3 hover:bg-zinc-900/30 rounded-lg transition-all duration-200"
              onClick={() => handleToolClick(tool)}
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
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white text-sm truncate">{tool.name}</h3>
                    {/* Todas las herramientas tienen badge NUEVO */}
                    <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                      NUEVO
                    </span>
                  </div>
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
  );
}
