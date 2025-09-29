'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  image: string;
  logo?: string;
  description: string;
  isHighlighted?: boolean;
};

export default function AIToolCard({
  name,
  image,
  logo,
  description,
  isHighlighted = false,
}: Props) {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isHighlighted) {
      setShowAnimation(true);
      // Quitar la animación después de 2 segundos
      const timer = setTimeout(() => {
        setShowAnimation(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isHighlighted]);

  return (
    <div
      className={`bg-zinc-900 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition-all duration-300 ${
        showAnimation ? 'scale-107 shadow-2xl shadow-blue-500/30 bg-zinc-700' : ''
      }`}
    >
      {/* Móvil: logo cuadrado */}
      <Image
        src={logo || image}
        alt={name}
        width={64}
        height={64}
        loading="lazy"
        className="w-16 h-16 object-contain mb-2 rounded md:hidden"
      />
      {/* Desktop: imagen grande */}
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        loading="lazy"
        className="w-16 h-16 object-contain mb-2 rounded hidden md:block"
      />
      <div className="font-bold text-white text-lg">{name}</div>
      <div className="text-zinc-400 text-sm">{description}</div>
    </div>
  );
}
