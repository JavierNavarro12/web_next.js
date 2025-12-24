'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../types/article';

type Props = {
  article: Article;
  size?: 'small' | 'medium' | 'large';
  showCategory?: boolean;
  className?: string;
  showImage?: boolean;
};

export default function ArticleCard({
  article,
  size = 'medium',
  showCategory: _showCategory = true,
  className = '',
  showImage = true,
}: Props) {
  const logoSize = showImage ? 24 : 36;
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'p-4';
      case 'large':
        return 'p-6 md:p-8';
      default:
        return 'p-4 md:p-6';
    }
  };

  const getImageClasses = () => {
    switch (size) {
      case 'small':
        return 'h-32 md:h-40';
      case 'large':
        return 'h-48 md:h-56 lg:h-64';
      default:
        return 'h-40 md:h-48';
    }
  };

  const getTitleClasses = () => {
    switch (size) {
      case 'small':
        return 'text-base md:text-lg';
      case 'large':
        return 'text-lg md:text-xl lg:text-2xl';
      default:
        return 'text-base md:text-lg';
    }
  };

  const getDescriptionClasses = () => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'large':
        return 'text-base md:text-lg';
      default:
        return 'text-sm md:text-base';
    }
  };

  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`block bg-black rounded-lg overflow-hidden hover:bg-zinc-900 transition-all duration-300 cursor-pointer group border border-zinc-800 hover:border-zinc-700 ${className}`}
    >
      {/* Imagen del artículo (opcional) */}
      {showImage && (
        <div className={`relative w-full ${getImageClasses()} overflow-hidden`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badges ocultados en la vista actual */}
        </div>
      )}

      {/* Contenido del artículo */}
      <div className={getSizeClasses()}>
        {/* Logos destacados (para el primer artículo comparativo) */}
        {article.slug === 'chatgpt-vs-claude-vs-gemini-best-model-2025' && (
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logos/claude-movil.png"
              alt="Claude"
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />
            <Image
              src="/logos/chatgpt-movil.png"
              alt="ChatGPT"
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />
            <Image
              src="/logos/gemini-movil.png"
              alt="Gemini"
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />
          </div>
        )}
        {/* Logo para el artículo 4 (DeepMind/Google) */}
        {article.slug === 'genie-3-google-mundos-3d-interactivos-2025' && (
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logos/imagen-movil.svg"
              alt="DeepMind"
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />
          </div>
        )}
        {/* Logo destacado para el artículo 2 (solo ChatGPT) */}
        {article.slug === 'openai-presenta-gpt-5-afondo-2025' && (
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logos/chatgpt-movil.png"
              alt="ChatGPT"
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />
          </div>
        )}
        {/* Logos para el artículo 3 (DALL-E, Midjourney, Stable Diffusion) */}
        {article.slug === 'dall-e-vs-midjourney-vs-stable-diffusion-2025' && (
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/logos/dall.e-movil.png"
              alt="DALL-E"
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />
            <Image
              src="/logos/midjourney-movil.png"
              alt="Midjourney"
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />
            <Image
              src="/logos/stablediffusion-movil.png"
              alt="Stable Diffusion"
              width={logoSize}
              height={logoSize}
              loading="lazy"
            />
          </div>
        )}
        {/* Título */}
        <h3
          className={`font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors ${getTitleClasses()}`}
          style={{ color: '#ffffff' }}
        >
          {article.title}
        </h3>

        {/* Descripción */}
        <p className={`text-zinc-300 mb-4 line-clamp-3 ${getDescriptionClasses()}`}>
          {article.description}
        </p>

        {/* Meta información */}
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            {article.author && (
              <>
                <span>{article.author}</span>
                <span>•</span>
              </>
            )}
            <span>{article.date}</span>
          </div>
          {article.readTime && (
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {article.readTime}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// Componente para el estilo CSS de line-clamp
const styles = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

// Agregar los estilos al head del documento
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}
