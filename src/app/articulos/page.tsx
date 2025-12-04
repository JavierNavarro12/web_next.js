'use client';

import ArticlesView from '../../components/views/home/ArticlesView';

/**
 * Página dedicada /articulos con contenido propio.
 * Muestra la vista de artículos directamente sin redireccionar.
 * Esto proporciona una URL limpia y SEO-friendly con contenido indexable.
 */
export default function ArticulosPage() {
  return <ArticlesView />;
}
