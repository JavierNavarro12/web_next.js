import type { MetadataRoute } from 'next';
import { articles } from '../data/articles';
import { aiCategories } from '../data/ai-tools';
import { bestOfGuides } from '../data/best-of';
import { slugify } from './slugify';
import { getSiteUrl } from './siteUrl';
import { getAllTools } from './tools';
import { getAllComparisons } from './comparisons';
import { isComparisonPublished, isToolPublished } from './publishing';
import { parseArticleDate } from './dates';

/**
 * Fecha de la última revisión del catálogo. Se actualiza a mano cuando
 * cambia el contenido: poner `new Date()` haría que todas las URLs
 * dijeran haberse modificado en cada build y Google acabaría ignorando
 * la señal.
 */
const CATALOG_LAST_MODIFIED = new Date('2026-08-19');

export type SitemapEntries = MetadataRoute.Sitemap;

/** Portada, listados, categorías e institucionales. */
export function pageEntries(): SitemapEntries {
  const base = getSiteUrl();
  const lastModified = CATALOG_LAST_MODIFIED;
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/herramientas`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/articulos`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/comparativas`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    ...aiCategories.map((category) => ({
      url: `${base}/categoria/${slugify(category.name)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    // Las subcategorías se quedan fuera: van con noindex porque su texto
    // propio es demasiado corto para sostener una página por sí solo.
    ...bestOfGuides.map((guide) => ({
      url: `${base}/mejores/${guide.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    { url: `${base}/sobre`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/directrices`, lastModified, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/privacidad`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/terminos`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ];
}

/** Fichas de herramienta: solo las tandas ya publicadas (el resto va con noindex). */
export function toolEntries(): SitemapEntries {
  const base = getSiteUrl();
  return getAllTools()
    .filter((tool) => isToolPublished(tool.name))
    .map((tool) => ({
      url: `${base}/herramienta/${tool.slug}`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.75,
    }));
}

export function comparisonEntries(): SitemapEntries {
  const base = getSiteUrl();
  if (!isComparisonPublished()) return [];
  return getAllComparisons().map((comparison) => ({
    url: `${base}/comparativa/${comparison.slug}`,
    lastModified: CATALOG_LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
}

export function articleEntries(): SitemapEntries {
  const base = getSiteUrl();
  return articles.map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: parseArticleDate(article.date) ?? CATALOG_LAST_MODIFIED,
    changeFrequency: 'yearly',
    priority: 0.8,
  }));
}

/** Serializa entradas al XML de sitemap estándar. */
export function entriesToXml(entries: SitemapEntries): string {
  const urls = entries
    .map((entry) => {
      const lastmod =
        entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified;
      return [
        '  <url>',
        `    <loc>${entry.url}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
        entry.changeFrequency ? `    <changefreq>${entry.changeFrequency}</changefreq>` : '',
        entry.priority !== undefined ? `    <priority>${entry.priority}</priority>` : '',
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
