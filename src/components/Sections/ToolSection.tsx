'use client';

import React from 'react';
import Image from 'next/image';
import { AITool } from '../../data/ai-tools';
import { handleToolClick } from '../../utils/toolUtils';

interface ToolSectionProps {
  title: string;
  tools: AITool[];
  onViewAll?: () => void;
}

export default function ToolSection({ title, tools, onViewAll }: ToolSectionProps) {
  return (
    <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6 md:mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-white">{title}</h2>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm md:text-base"
          >
            Ver Todas →
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="group bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 cursor-pointer"
            onClick={() => handleToolClick(tool)}
          >
            <div className="relative aspect-video bg-zinc-800">
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-zinc-400 text-sm">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
