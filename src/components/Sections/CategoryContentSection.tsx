'use client';

import React from 'react';
import Image from 'next/image';
import { AITool, AICategory } from '../../data/ai-tools';
import { filterTools, handleToolClick, getPricingText } from '../../utils/toolUtils';

interface CategoryContentSectionProps {
  currentCategory: AICategory | null;
  activeFilter: 'all' | 'free' | 'paid';
  searchTerm: string;
}

export default function CategoryContentSection({
  currentCategory,
  activeFilter,
  searchTerm,
}: CategoryContentSectionProps) {
  if (!currentCategory) return null;

  return (
    <div className="px-2 py-1 md:px-4 md:py-6 md:pt-4 pt-[140px]">
      {currentCategory.subcategories.map((subcat) => (
        <div key={subcat.name} id={subcat.name.replace(/\s+/g, '-')} className="mb-4 md:mb-6">
          {/* Vista móvil: Lista en contenedores */}
          <div className="md:hidden">
            <div className="bg-zinc-950 rounded-xl p-3 border border-zinc-800">
              <h2 className="text-xl font-bold mb-4 text-white pl-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                {subcat.name}
              </h2>
              <div className="space-y-3">
                {subcat.tools &&
                  filterTools(subcat.tools, activeFilter, searchTerm).map((tool: AITool) => (
                    <div
                      key={tool.name}
                      className="flex items-start gap-3 py-1 pl-1 cursor-pointer hover:bg-zinc-900/50 rounded-lg transition-colors p-2"
                      onClick={() => handleToolClick(tool)}
                    >
                      <Image
                        src={tool.logo || tool.image}
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

          {/* Vista desktop: Grid de tarjetas */}
          <div className="hidden md:block">
            <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800">
              <h2 className="text-xl font-bold mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                {subcat.name}
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {subcat.tools &&
                  filterTools(subcat.tools, activeFilter, searchTerm).map((tool: AITool) => (
                    <div
                      key={tool.name}
                      className="group cursor-pointer"
                      onClick={() => handleToolClick(tool)}
                    >
                      <div className="relative aspect-video bg-zinc-800 rounded mb-3 overflow-hidden border border-[#232323]">
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          fill
                          className="w-full h-full object-cover rounded transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                          <div className="bg-zinc-800/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
                            {getPricingText(tool.pricing)}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-all">
                          {tool.name}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
