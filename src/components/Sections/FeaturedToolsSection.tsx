'use client';

import React from 'react';
import Image from 'next/image';
import { getPricingText, handleToolClick, getFeaturedTools } from '../../utils/toolUtils';

export default function FeaturedToolsSection() {
  return (
    <div className="py-0 px-4 max-w-7xl mx-auto">
      <div className="bg-black rounded-2xl border border-zinc-700 p-4 md:p-6">
        <h2
          className="text-xl md:text-2xl font-semibold text-white mb-4 text-left drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          IAs Destacadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {getFeaturedTools()
            .slice(0, 8)
            .map((tool) => (
              <div
                key={tool.name}
                className="group cursor-pointer"
                onClick={() => handleToolClick(tool)}
              >
                <div className="relative aspect-video bg-zinc-800 rounded mb-2 md:mb-3 overflow-hidden border border-[#232323]">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    fill
                    className="w-full h-full object-cover rounded transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-zinc-800/90 text-white px-2 md:px-3 py-1 md:py-1.5 rounded-lg text-xs md:text-sm font-medium">
                      {getPricingText(tool.pricing)}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base md:text-lg mb-1 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.5)] transition-all">
                    {tool.name}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
