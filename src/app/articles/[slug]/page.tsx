import { notFound } from 'next/navigation';
import { articles } from '../../../data/articles';
import ArticleView from './ArticleView';

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Server component: resuelve el artículo aquí y pasa solo ese artículo al
 * cliente. Antes la página era 'use client' y embarcaba articles.ts entero
 * (el blog completo) en cada visita; además, un slug inexistente devolvía
 * un 200 con mensaje en vez de un 404 real.
 */
export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Navegación por destacados en portada según featuredOrder
  const featuredOrdered = articles
    .filter((a) => a.featured)
    .slice()
    .sort((a, b) => (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity));
  const idxInFeatured = featuredOrdered.findIndex((a) => a.slug === slug);
  const prevSlug = idxInFeatured > 0 ? featuredOrdered[idxInFeatured - 1].slug : null;
  const nextSlug =
    idxInFeatured >= 0 && idxInFeatured < featuredOrdered.length - 1
      ? featuredOrdered[idxInFeatured + 1].slug
      : null;

  return <ArticleView article={article} prevSlug={prevSlug} nextSlug={nextSlug} />;
}
