'use client';

import React from 'react';
import { getToolsCount } from '../../utils/toolUtils';

interface FloatingCardsProps {
  isMobile?: boolean;
}

export default function FloatingCards({ isMobile = false }: FloatingCardsProps) {
  const cardData = [
    {
      name: 'Generativa',
      gradient: 'linear-gradient(180deg, #60a5fa, #3b82f6)',
      innerGradient: 'linear-gradient(180deg, #3b82f6, #1d4ed8)',
      shadowColor: 'rgba(30, 64, 175, 0.57)',
      boxShadowMain: '-4px 4px 0px #1e40af',
      textShadow: '-1px 1px 3px rgba(30, 64, 175, 0.73)',
      transform: 'perspective(850px) rotateX(14deg) rotateY(8deg) rotateZ(-11deg)',
      position: isMobile ? 'top-4 left-4' : 'top-8 left-8',
      size: isMobile ? 'w-28 h-10' : 'w-36 h-12',
    },
    {
      name: 'Chatbots',
      gradient: 'linear-gradient(180deg, #c084fc, #9333ea)',
      innerGradient: 'linear-gradient(180deg, #9333ea, #6b21a8)',
      shadowColor: 'rgba(124, 58, 237, 0.57)',
      boxShadowMain: '-4px 4px 0px #7c3aed',
      textShadow: '-1px 1px 3px rgba(124, 58, 237, 0.73)',
      transform: 'perspective(850px) rotateX(12deg) rotateY(-6deg) rotateZ(8deg)',
      position: isMobile ? 'top-8 left-1/2 transform -translate-x-1/2' : 'top-12 left-44',
      size: isMobile ? 'w-28 h-10' : 'w-28 h-10',
    },
    {
      name: 'Negocios',
      gradient: 'linear-gradient(180deg, #4ade80, #16a34a)',
      innerGradient: 'linear-gradient(180deg, #16a34a, #14532d)',
      shadowColor: 'rgba(21, 128, 61, 0.57)',
      boxShadowMain: '4px 4px 0px #15803d',
      textShadow: '-1px 1px 3px rgba(21, 128, 61, 0.73)',
      transform: 'perspective(850px) rotateX(14deg) rotateY(-8deg) rotateZ(11deg)',
      position: isMobile ? 'top-4 right-4' : 'top-8 right-8',
      size: isMobile ? 'w-28 h-10' : 'w-36 h-12',
    },
    {
      name: 'Creatividad',
      gradient: 'linear-gradient(180deg, #f472b6, #ec4899)',
      innerGradient: 'linear-gradient(180deg, #ec4899, #be185d)',
      shadowColor: 'rgba(219, 39, 119, 0.57)',
      boxShadowMain: '-4px 4px 0px #db2777',
      textShadow: '-1px 1px 3px rgba(219, 39, 119, 0.73)',
      transform: 'perspective(850px) rotateX(18deg) rotateY(6deg) rotateZ(10deg)',
      position: isMobile ? 'top-20 left-4' : 'bottom-20 left-8',
      size: isMobile ? 'w-24 h-10' : 'w-32 h-12',
    },
    {
      name: 'Salud',
      gradient: 'linear-gradient(180deg, #22d3ee, #0891b2)',
      innerGradient: 'linear-gradient(180deg, #0891b2, #164e63)',
      shadowColor: 'rgba(14, 116, 144, 0.57)',
      boxShadowMain: '4px 4px 0px #0e7490',
      textShadow: '-1px 1px 3px rgba(14, 116, 144, 0.73)',
      transform: isMobile
        ? 'perspective(850px) rotateX(18deg) rotateY(-6deg) rotateZ(-10deg)'
        : 'perspective(850px) rotateX(12deg) rotateY(6deg) rotateZ(-8deg)',
      position: isMobile ? 'top-20 right-4' : 'top-12 right-44',
      size: 'w-28 h-10',
    },
    {
      name: 'DevTools',
      gradient: 'linear-gradient(180deg, #fb923c, #ea580c)',
      innerGradient: 'linear-gradient(180deg, #ea580c, #9a3412)',
      shadowColor: 'rgba(194, 65, 12, 0.57)',
      boxShadowMain: '4px 4px 0px #c2410c',
      textShadow: '-1px 1px 3px rgba(194, 65, 12, 0.73)',
      transform: 'perspective(850px) rotateX(18deg) rotateY(-6deg) rotateZ(-10deg)',
      position: isMobile ? 'top-32 left-1/2 transform -translate-x-1/2' : 'bottom-20 right-8',
      size: isMobile ? 'w-24 h-10' : 'w-32 h-12',
    },
  ];

  return (
    <div
      className={`${isMobile ? 'md:hidden' : 'hidden md:block'} absolute inset-0 pointer-events-none`}
    >
      {cardData.map((card) => (
        <div
          key={card.name}
          className={`absolute ${card.position} ${card.size} flex items-center justify-center text-white font-semibold text-xs transition-all duration-400`}
          style={{
            padding: '3px',
            background: card.gradient,
            borderRadius: '16px',
            transform: card.transform,
            boxShadow: `
              0 0 40px 12px ${card.shadowColor.replace('0.57', '0.85')},
              0 8px 32px 0 ${card.shadowColor},
              0 2px 8px 0 ${card.shadowColor},
              0 4px 24px 0 rgba(0,0,0,0.45),
              ${card.boxShadowMain}
            `,
            transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          <div
            className="w-full h-full flex items-center justify-center rounded-lg font-semibold"
            style={{
              background: card.innerGradient,
              boxShadow: `inset 0 -8px 24px 0 ${card.shadowColor.replace('0.57', '0.35')}`,
              textShadow: card.textShadow,
              fontSize: '10px',
            }}
          >
            {card.name}
          </div>
          <span
            className="absolute -top-1 -right-1 bg-zinc-800 text-white rounded-full border border-zinc-600 flex items-center justify-center"
            style={{
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              width: '18px',
              height: '18px',
              fontSize: '9px',
            }}
          >
            {getToolsCount(card.name)}
          </span>
        </div>
      ))}
    </div>
  );
}
