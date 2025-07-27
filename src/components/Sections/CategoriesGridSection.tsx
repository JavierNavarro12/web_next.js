'use client';

import React from 'react';
import { aiCategories } from '../../data/ai-tools';

interface CategoriesGridSectionProps {
  setActiveCategory: (category: string | null) => void;
}

export default function CategoriesGridSection({ setActiveCategory }: CategoriesGridSectionProps) {
  return (
    <div className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-12 text-center">
        Explorar por Categoría
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {aiCategories.slice(0, 6).map((category) => (
          <div
            key={category.name}
            className="group bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-zinc-600 transition-all duration-300 cursor-pointer"
            onClick={() => setActiveCategory(category.name)}
          >
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {category.name}
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              {category.subcategories.length} subcategorías
            </p>
            <div className="flex flex-wrap gap-2">
              {category.subcategories.slice(0, 3).map((subcat) => (
                <span
                  key={subcat.name}
                  className="bg-zinc-800 text-zinc-300 px-2 py-1 rounded text-xs"
                >
                  {subcat.name}
                </span>
              ))}
              {category.subcategories.length > 3 && (
                <span className="text-zinc-500 text-xs px-2 py-1">
                  +{category.subcategories.length - 3} más
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
