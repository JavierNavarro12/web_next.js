'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { aiCategories, AITool } from '../../data/ai-tools';

interface SearchDropdownProps {
  searchTerm: string;
  isVisible: boolean;
  onToolClick: (tool: AITool, category: string, subcategory: string) => void;
  isMobile?: boolean;
}

// Función para mezclar array usando Fisher-Yates shuffle
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Función para obtener todas las herramientas con su ubicación y mezclarlas
const getAllToolsWithLocationShuffled = (): Array<
  AITool & { category: string; subcategory: string }
> => {
  const allTools: Array<AITool & { category: string; subcategory: string }> = [];

  aiCategories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      subcategory.tools.forEach((tool) => {
        allTools.push({
          ...tool,
          category: category.name,
          subcategory: subcategory.name,
        });
      });
    });
  });

  return shuffleArray(allTools);
};

// Función de búsqueda que incluye nombre y descripción
const searchTools = (
  tools: Array<AITool & { category: string; subcategory: string }>,
  term: string,
): Array<AITool & { category: string; subcategory: string }> => {
  if (!term.trim()) return [];

  const searchTerm = term.toLowerCase().trim();
  return tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm),
  );
};

export default function SearchDropdown({
  searchTerm,
  isVisible,
  onToolClick,
  isMobile = false,
}: SearchDropdownProps) {
  const [showCount, setShowCount] = useState(6);
  const [shuffledTools] = useState(() => getAllToolsWithLocationShuffled());

  // Resetear contador cuando se cierre el dropdown
  useEffect(() => {
    if (!isVisible) {
      setShowCount(6);
    }
  }, [isVisible]);

  const displayedTools = useMemo(() => {
    if (searchTerm.trim()) {
      // Si hay término de búsqueda, mostrar resultados filtrados
      return searchTools(shuffledTools, searchTerm);
    } else {
      // Si no hay búsqueda, mostrar herramientas aleatorias
      return shuffledTools.slice(0, showCount);
    }
  }, [searchTerm, shuffledTools, showCount]);

  const handleLoadMore = () => {
    setShowCount((prev) => prev + 7);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`${isMobile ? 'relative mt-3 w-full' : 'absolute top-full right-0 mt-3 w-[520px] translate-x-[22px]'} bg-black border border-zinc-600 rounded-lg shadow-xl max-h-[480px] overflow-y-auto z-50`}
    >
      {displayedTools.length === 0 ? (
        <div className="p-6 text-center text-zinc-400 text-lg">
          {searchTerm.trim() ? 'No se encontraron resultados' : 'No hay herramientas disponibles'}
        </div>
      ) : (
        <>
          {displayedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className={`flex items-center hover:bg-zinc-900 cursor-pointer transition-colors ${isMobile ? 'px-3 py-2' : 'px-5 py-2.5'}`}
              onClick={() => onToolClick(tool, tool.category, tool.subcategory)}
            >
              <div className={`flex-shrink-0 ${isMobile ? 'w-10 h-10 mr-3' : 'w-14 h-14 mr-5'}`}>
                <Image
                  src={tool.logo || tool.image}
                  alt={tool.name}
                  width={isMobile ? 40 : 56}
                  height={isMobile ? 40 : 56}
                  className={`rounded-lg object-cover ${isMobile ? 'w-10 h-10' : 'w-14 h-14'}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className={`text-white font-semibold truncate mb-1 ${isMobile ? 'text-base' : 'text-lg'}`}
                >
                  {tool.name}
                </div>
                <div className={`text-zinc-400 truncate ${isMobile ? 'text-sm' : 'text-base'}`}>
                  {tool.description}
                </div>
              </div>
            </div>
          ))}

          {/* Botón cargar más - solo si no hay búsqueda y hay más herramientas */}
          {!searchTerm.trim() && showCount < shuffledTools.length && (
            <div className={`${isMobile ? 'p-3' : 'p-5'}`}>
              <button
                onClick={handleLoadMore}
                className={`w-full text-center text-white hover:text-zinc-300 font-semibold transition-colors py-3 ${isMobile ? 'text-base' : 'text-lg'}`}
              >
                Cargar más
              </button>
            </div>
          )}

          {/* Mostrar resultados encontrados cuando hay búsqueda */}
          {searchTerm.trim() && (
            <div className="p-4 border-t border-zinc-700 text-center text-zinc-500 text-base">
              {displayedTools.length} resultado{displayedTools.length !== 1 ? 's' : ''} encontrado
              {displayedTools.length !== 1 ? 's' : ''}
            </div>
          )}
        </>
      )}
    </div>
  );
}
