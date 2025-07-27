'use client';

import React from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  image: string;
  logo?: string;
  description: string;
};

export default function AIToolCard({ name, image, logo, description }: Props) {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
      {/* Móvil: logo cuadrado */}
      <Image
        src={logo || image}
        alt={name}
        width={64}
        height={64}
        className="w-16 h-16 object-contain mb-2 rounded md:hidden"
      />
      {/* Desktop: imagen grande */}
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        className="w-16 h-16 object-contain mb-2 rounded hidden md:block"
      />
      <div className="font-bold text-white text-lg">{name}</div>
      <div className="text-zinc-400 text-sm">{description}</div>
    </div>
  );
}
