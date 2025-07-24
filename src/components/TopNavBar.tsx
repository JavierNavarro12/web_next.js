'use client';

import React, { useRef, useEffect } from 'react';

type Props = {
  categories: string[];
  active: string;
  onSelect: (cat: string) => void;
};

export default function TopNavBar({ categories, active, onSelect }: Props) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Función para desplazar al elemento activo cuando cambie
  useEffect(() => {
    if (scrollContainerRef.current && active) {
      const container = scrollContainerRef.current;
      const activeButton = container.querySelector(`[data-category="${active}"]`) as HTMLElement;

      if (activeButton) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();

        // Calcular si el botón está fuera de la vista
        const isOutOfView =
          buttonRect.left < containerRect.left || buttonRect.right > containerRect.right;

        if (isOutOfView) {
          // Calcular la posición de scroll para centrar el botón activo
          const buttonCenter = activeButton.offsetLeft + activeButton.offsetWidth / 2;
          const containerCenter = container.offsetWidth / 2;
          const scrollPosition = buttonCenter - containerCenter;

          container.scrollTo({
            left: Math.max(0, scrollPosition),
            behavior: 'smooth',
          });
        }
      }
    }
  }, [active]);

  return (
    <nav className="bg-black border-b border-zinc-800">
      <div
        ref={scrollContainerRef}
        className="flex gap-2 px-6 py-3 overflow-x-auto scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            data-category={cat}
            className={`px-4 py-2 rounded text-sm font-bold transition-colors whitespace-nowrap flex-shrink-0 ${
              active === cat ? 'bg-white text-black' : 'text-white/80 hover:bg-zinc-800'
            }`}
            onClick={() => onSelect(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
}
