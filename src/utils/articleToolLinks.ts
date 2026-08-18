import type { Article } from '../types/article';
import { getAllTools } from './tools';
import { isToolPublished } from './publishing';
import { findToolMention } from './toolMention';

/**
 * Mapa nombre → slug de las herramientas publicadas que se mencionan en el
 * cuerpo del artículo. Se calcula en servidor para que el cliente reciba solo
 * las pocas entradas de ese artículo, no el catálogo entero.
 * Los nombres de menos de 3 caracteres (Pi) se excluyen para evitar falsos
 * positivos con palabras normales.
 */
export function getArticleToolLinks(article: Article): Record<string, string> {
  const texts: string[] = [];
  article.contentSections?.forEach((section) => {
    if (section.paragraphs) texts.push(...section.paragraphs);
    if (section.bullets) texts.push(...section.bullets);
  });
  if (texts.length === 0) return {};

  const corpus = texts.join('\n');
  const links: Record<string, string> = {};
  for (const tool of getAllTools()) {
    if (tool.name.length < 3) continue;
    if (!isToolPublished(tool.name)) continue;
    if (findToolMention(corpus, tool.name) !== -1) {
      links[tool.name] = tool.slug;
    }
  }
  return links;
}
