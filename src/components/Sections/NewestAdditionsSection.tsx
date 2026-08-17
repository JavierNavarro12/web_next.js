'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '../../utils/slugify';
import { aiCategories, AITool } from '../../data/ai-tools';
import { discontinuedTools } from '../../data/discontinued';

// Las últimas incorporaciones reales: fichas de la tanda publicada más
// reciente. Solo se fijan los nombres; los datos (logo, descripción, URL)
// salen del catálogo para que no vuelvan a divergir de él.
const NEWEST_NAMES = [
  'DeepSeek',
  'Suno',
  'Descript',
  'Kling',
  'Google Flow',
  'Leonardo AI',
  'Speechify',
  'Recraft',
];

const getNewestTools = () => {
  const byName = new Map<string, AITool>();
  for (const category of aiCategories) {
    for (const subcategory of category.subcategories) {
      for (const tool of subcategory.tools) {
        if (!byName.has(tool.name)) byName.set(tool.name, tool);
      }
    }
  }
  return NEWEST_NAMES.map((name) => byName.get(name)).filter(
    (tool): tool is AITool & { logo: string } =>
      Boolean(tool && tool.logo && !discontinuedTools[tool.name]),
  );
};

export default function NewestAdditionsSection() {
  const newestTools = getNewestTools();

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      <div className="bg-black rounded-2xl border border-zinc-700 p-4 md:p-6">
        <div className="mb-6">
          <h2
            className="text-xl md:text-2xl font-semibold text-white text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Nuevas adiciones
          </h2>
        </div>

        {/* Grid de herramientas - Sin tarjetas individuales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {newestTools.slice(0, 8).map((tool, _index) => (
            <Link
              key={tool.name}
              href={`/herramienta/${slugify(tool.name)}`}
              className="group cursor-pointer p-3 hover:bg-zinc-900/30 rounded-lg transition-all duration-200"
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
