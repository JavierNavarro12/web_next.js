'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { Article } from '../../../types/article';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { articles } from '../../../data/articles';
import MobileHeader from '../../../components/Header/MobileHeader';
import {
  useAppContext,
  useSubcategoryContext,
  SidebarDrawerContext,
  useActiveNavContext,
} from '../../providers';

export default function ArticleDetailPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

  // Contextos necesarios para montar el MobileHeader fijo
  const { activeCategory: _activeCategory, setActiveCategory } = useAppContext();
  const { activeSubcategory, setActiveSubcategory } = useSubcategoryContext();
  const { setActiveNav, activeNav } = useActiveNavContext();
  const { setSidebarOpen } = React.useContext(SidebarDrawerContext);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const isClient = typeof window !== 'undefined';

  const article = articles.find((a) => a.slug === slug);
  const _currentIndex = articles.findIndex((a) => a.slug === slug);
  // Navegación por destacados en portada según featuredOrder
  const featuredOrdered = articles
    .filter((a) => a.featured)
    .slice()
    .sort(
      (a: Article, b: Article) => (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity),
    );
  const idxInFeatured = featuredOrdered.findIndex((a) => a.slug === slug);
  const prevArticle = idxInFeatured > 0 ? featuredOrdered[idxInFeatured - 1] : null;
  const nextArticle =
    idxInFeatured >= 0 && idxInFeatured < featuredOrdered.length - 1
      ? featuredOrdered[idxInFeatured + 1]
      : null;

  // Asegurar estado de navegación en 'articulos' al entrar en detalle
  useEffect(() => {
    setActiveNav('articulos');
    // Limpiar selección de categorías en detalle
    setActiveCategory(null);
    setActiveSubcategory(null);
  }, [setActiveNav, setActiveCategory, setActiveSubcategory]);

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Artículo no encontrado</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header móvil fijo en todas las páginas de artículo */}
      <MobileHeader
        currentCategory={null}
        activeSubcategory={activeSubcategory}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
        setSidebarOpen={setSidebarOpen}
        isClient={isClient}
        tabRefs={tabRefs}
        tabsContainerRef={tabsContainerRef}
        onSubcategoryClick={() => {}}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Empuje del contenido por el header móvil fijo */}
      <div className="max-w-5xl mx-auto px-4 py-3 pt-[82px] md:pt-0">
        {/* Header superior con volver y navegación */}
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={() => router.push('/?active=articulos')}
            className="text-zinc-300 hover:text-white ml-[-8px] md:ml-[-70px] relative top-[2px] md:top-[6px]"
          >
            ← Volver
          </button>
          <div className="flex items-center gap-2 mr-[-8px] md:mr-[-70px] relative top-[2px] md:top-[6px]">
            <button
              disabled={!prevArticle}
              onClick={() => prevArticle && router.push(`/articles/${prevArticle.slug}`)}
              className="rounded-xl bg-zinc-900/90 border border-zinc-700 shadow-inner w-9 h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-zinc-800 disabled:opacity-40"
              aria-label="Artículo anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="text-zinc-300"
                aria-hidden="true"
              >
                <path
                  d="M15 5l-7 7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              disabled={!nextArticle}
              onClick={() => nextArticle && router.push(`/articles/${nextArticle.slug}`)}
              className="rounded-xl bg-zinc-900/90 border border-zinc-700 shadow-inner w-9 h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-zinc-800 disabled:opacity-40"
              aria-label="Artículo siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                className="text-zinc-300"
                aria-hidden="true"
              >
                <path
                  d="M9 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Separador a ancho de viewport, alineado al centro del contenedor */}
        <div className="relative left-1/2 -translate-x-1/2 w-screen border-b border-zinc-800 mb-8" />

        <div className="text-center mb-10">
          {/* Logos sobre el título para el comparativo */}
          {article.slug === 'chatgpt-vs-claude-vs-gemini-best-model-2025' && (
            <div className="flex items-center justify-center gap-2 mb-2">
              <Image src="/logos/claude-movil.png" alt="Claude" width={28} height={28} />
              <Image src="/logos/chatgpt-movil.png" alt="ChatGPT" width={28} height={28} />
              <Image src="/logos/gemini-movil.png" alt="Gemini" width={28} height={28} />
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            {article.title}
          </h1>
          {article.author && (
            <div className="flex items-center justify-center gap-3 text-zinc-400 text-sm">
              {article.authorImage && (
                <Image
                  src={article.authorImage}
                  alt={article.author}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full border border-zinc-700"
                />
              )}
              <span>{article.author}</span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
          )}
        </div>

        {/* Imagen principal a tamaño natural */}
        <div className="mb-8 overflow-auto">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={630}
            priority
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            className="rounded-xl border border-zinc-800"
          />
        </div>

        {/* Soporte para HLS (.m3u8) con hls.js si es necesario */}
        <HlsEnhancer />

        {/* Contenido del artículo */}
        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">{article.description}</p>

          {article.contentSections?.map((section, idx) => (
            <section key={idx} className="mb-8">
              {section.title && (
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{section.title}</h2>
              )}
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-zinc-300 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full text-left border-collapse border border-zinc-800">
                    <thead>
                      <tr className="bg-zinc-900/60">
                        {section.table.headers.map((h, i) => (
                          <th key={i} className="px-4 py-2 border border-zinc-800 text-zinc-200">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, ri) => (
                        <tr key={ri} className={ri % 2 === 0 ? 'bg-black' : 'bg-zinc-900/40'}>
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className="px-4 py-2 border border-zinc-800 text-zinc-300 align-top"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.image && (
                <div className="mt-4 overflow-auto">
                  <Image
                    src={section.image}
                    alt={section.title || 'Imagen del artículo'}
                    width={1200}
                    height={630}
                    loading="lazy"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="rounded-lg border border-zinc-800"
                  />
                </div>
              )}
              {section.video && (
                <div className="w-full mt-4">
                  {section.video.type === 'youtube' ? (
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        src={section.video.src}
                        title="YouTube video player"
                        className="absolute top-0 left-0 w-full h-full rounded-lg border border-zinc-800"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <video
                      controls
                      className="w-full rounded-lg border border-zinc-800 hls-video"
                      preload="metadata"
                      data-src={section.video.src}
                    >
                      Tu navegador no soporta la reproducción de video.
                    </video>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function HlsEnhancer() {
  useEffect(() => {
    const setup = async () => {
      const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video.hls-video'));
      if (videos.length === 0) return;

      // Carga perezosa de hls.js
      let HlsCtor: unknown = null;
      let mod: unknown = null;
      try {
        // Carga dinámica en cliente
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mod = await import('hls.js');
      } catch {}
      // extraer constructor compatible de forma segura
      HlsCtor = (mod as { default?: unknown } | null)?.default ?? mod;

      videos.forEach((video) => {
        const src = video.dataset.src || '';
        if (!src) return;

        const canNative =
          typeof video.canPlayType === 'function' &&
          video.canPlayType('application/vnd.apple.mpegurl') !== '';
        if (canNative) {
          if (!video.src) video.src = src;
          return;
        }

        // Uso tolerante del constructor HLS si está disponible
        const MaybeHls = HlsCtor as { isSupported?: () => boolean } & (new () => {
          loadSource: (s: string) => void;
          attachMedia: (v: HTMLVideoElement) => void;
        });
        if (MaybeHls && typeof MaybeHls.isSupported === 'function' && MaybeHls.isSupported()) {
          const hls = new (MaybeHls as unknown as new () => {
            loadSource: (s: string) => void;
            attachMedia: (v: HTMLVideoElement) => void;
          })();
          hls.loadSource(src);
          hls.attachMedia(video);
        }
      });
    };
    setup();
  }, []);
  return null;
}
