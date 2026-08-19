import { getSiteUrl } from '../../utils/siteUrl';

export const dynamic = 'force-static';

/**
 * Índice de sitemaps segmentado por tipo de contenido: permite filtrar el
 * informe de Indexación de Search Console por sitemap y ver qué tipo
 * concreto (fichas, comparativas, artículos) no está indexando.
 */
export function GET() {
  const base = getSiteUrl();
  const children = ['paginas', 'herramientas', 'comparativas', 'articulos'];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${children.map((name) => `  <sitemap>\n    <loc>${base}/sitemaps/${name}.xml</loc>\n  </sitemap>`).join('\n')}
</sitemapindex>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
