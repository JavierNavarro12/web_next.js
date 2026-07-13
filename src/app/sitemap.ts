import type { MetadataRoute } from 'next';
import { articles } from '../data/articles';
import { aiCategories } from '../data/ai-tools';
import { slugify } from '../utils/slugify';
import { getSiteUrl } from '../utils/siteUrl';
import { getAllTools } from '../utils/tools';
import { getAllComparisons } from '../utils/comparisons';
import { isComparisonPublished, isToolPublished } from '../utils/publishing';
import { parseArticleDate } from '../utils/dates';

/**
 * Fecha de la última revisión del catálogo. Se actualiza a mano cuando
 * cambia el contenido: poner `new Date()` haría que todas las URLs
 * dijeran haberse modificado en cada build y Google acabaría ignorando
 * la señal.
 */
const CATALOG_LAST_MODIFIED = new Date('2026-07-13');

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = CATALOG_LAST_MODIFIED;

  // Página principal
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/herramientas`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/articulos`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/comparativas`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Páginas de categorías (SEO optimizado)
  const categoryPages: MetadataRoute.Sitemap = aiCategories.map((category) => ({
    url: `${base}/categoria/${slugify(category.name)}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  // Páginas de subcategorías (SEO optimizado)
  const subcategoryPages: MetadataRoute.Sitemap = aiCategories.flatMap((category) =>
    category.subcategories.map((subcategory) => ({
      url: `${base}/categoria/${slugify(category.name)}/${slugify(subcategory.name)}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  );

  // Fichas de herramienta: solo las tandas ya publicadas (el resto va con noindex)
  const toolPages: MetadataRoute.Sitemap = getAllTools()
    .filter((tool) => isToolPublished(tool.name))
    .map((tool) => ({
      url: `${base}/herramienta/${tool.slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    }));

  // Comparativas
  const comparisonPages: MetadataRoute.Sitemap = isComparisonPublished()
    ? getAllComparisons().map((comparison) => ({
        url: `${base}/comparativa/${comparison.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
      }))
    : [];

  // Artículos
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: parseArticleDate(article.date) ?? lastModified,
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  // Páginas institucionales
  const institutionalPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/directrices`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${base}/privacidad`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/terminos`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  return [
    ...mainPages,
    ...categoryPages,
    ...subcategoryPages,
    ...toolPages,
    ...comparisonPages,
    ...articlePages,
    ...institutionalPages,
  ];
}
