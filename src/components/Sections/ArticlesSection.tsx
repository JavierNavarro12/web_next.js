'use client';

import React, { useState, useMemo } from 'react';
import { newsletterService } from '../../services/newsletterService';
import { articles, articleCategories } from '../../data/articles';
import { ArticleCategory } from '../../types/article';
import ArticleCard from '../Cards/ArticleCard';

type Props = {
  className?: string;
};

export default function ArticlesSection({ className = '' }: Props) {
  const [activeCategory, setActiveCategory] = useState<ArticleCategory['id']>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  // Filtrar artículos basado en categoría y búsqueda
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filtrar por categoría
    if (activeCategory !== 'all') {
      filtered = filtered.filter((article) => article.category === activeCategory);
    }

    // Filtrar por término de búsqueda
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchLower) ||
          article.description.toLowerCase().includes(searchLower) ||
          article.categoryLabel.toLowerCase().includes(searchLower),
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  // Artículos destacados (featured) para mostrar primero
  const featuredArticles = filteredArticles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter((article) => !article.featured);

  // Separar artículos para la vista inicial (sin filtros)
  const initialFeaturedArticles = articles.filter((article) => article.featured).slice(0, 5);
  const largeArticles = initialFeaturedArticles.slice(0, 2);
  const smallArticles = initialFeaturedArticles.slice(2, 5);

  return (
    <div className={`min-h-screen bg-black ${className}`}>
      {/* Header en tarjeta: título a la izquierda, formulario a la derecha */}
      <div className="flex justify-center px-4 py-6 bg-black">
        <div className="w-full max-w-7xl">
          <div className="bg-black rounded-2xl md:rounded-3xl pt-8 pb-6 px-6 md:p-8 border border-zinc-800 mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Columna izquierda: título y descripción */}
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl md:text-3xl font-bold text-white mb-5 md:mb-3 mt-1 text-center md:text-left">
                  Una newsletter sobre herramientas de IA
                </h1>
                <p className="text-zinc-300 text-lg md:text-base text-center md:text-left">
                  Todo sobre herramientas, recursos y productos digitales de IA.
                </p>
              </div>
              {/* Columna derecha: newsletter */}
              <div className="w-full md:w-auto mt-4 md:mt-0">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!email.trim()) {
                      setError('Por favor ingresa tu email');
                      return;
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                      setError('Por favor ingresa un email válido');
                      return;
                    }
                    setIsSubmitting(true);
                    setError('');
                    try {
                      await newsletterService.subscribeToNewsletter(email, 'articles');
                      setShowSuccess(true);
                      setEmail('');
                      setTimeout(() => setShowSuccess(false), 5000);
                    } catch (err) {
                      setError(
                        (err as Error).message || 'Error al suscribirse. Inténtalo de nuevo.',
                      );
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="flex flex-col md:flex-row items-stretch md:items-center justify-start md:justify-end gap-3 md:gap-2 w-full md:max-w-none"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full md:flex-none md:w-52 px-4 py-2.5 md:py-3 bg-zinc-800 text-white placeholder-zinc-300 focus:outline-none focus:ring-0 rounded-full text-base md:text-sm"
                    disabled={isSubmitting}
                    aria-label="Email para suscripción a artículos"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-5 py-2.5 md:py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-full text-base md:text-sm whitespace-nowrap"
                  >
                    {isSubmitting ? 'Enviando...' : 'Suscribirse'}
                  </button>
                </form>
                {showSuccess && (
                  <div className="mt-3 text-green-400 text-sm text-left md:text-right">
                    ¡Suscripción exitosa! Revisa tu email.
                  </div>
                )}
                {error && (
                  <div className="mt-3 text-red-400 text-sm text-left md:text-right">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artículos destacados iniciales - centrado */}
      <div className="flex justify-center px-4 bg-black">
        <div className="w-full max-w-7xl">
          {/* Título de destacados */}
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">
            Artículos destacados
          </h2>

          {/* 2 artículos grandes */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {largeArticles.map((article) => (
              <ArticleCard key={article.id} article={article} size="large" />
            ))}
          </div>

          {/* 3 artículos más pequeños */}
          {smallArticles.length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {smallArticles.map((article) => (
                <ArticleCard key={article.id} article={article} size="medium" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filtros y búsqueda - centrado */}
      <div className="border-b border-zinc-800 bg-black sticky top-0 z-40">
        <div className="flex justify-center px-4 py-4">
          <div className="w-full max-w-7xl">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Categorías */}
              <div className="flex gap-2 overflow-x-auto scrollbar-none w-full md:w-auto">
                {articleCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Buscador */}
              <div className="relative w-full md:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 w-full md:w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido de artículos filtrados - centrado */}
      <div className="flex justify-center px-4 py-8 bg-black">
        <div className="w-full max-w-7xl">
          {filteredArticles.length === 0 ? (
            /* Estado vacío */
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-zinc-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No se encontraron artículos</h3>
              <p className="text-zinc-400">
                Intenta con una búsqueda diferente o cambia la categoría.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Artículos destacados filtrados */}
              {featuredArticles.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Artículos destacados</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredArticles.map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        size="large"
                        className="md:col-span-1 lg:col-span-1"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Artículos regulares filtrados */}
              {regularArticles.length > 0 && (
                <div>
                  {featuredArticles.length > 0 && (
                    <h2 className="text-2xl font-bold text-white mb-6">Más artículos</h2>
                  )}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} size="medium" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Botón cargar más (placeholder) */}
          {filteredArticles.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors border border-zinc-700">
                Cargar más artículos
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
