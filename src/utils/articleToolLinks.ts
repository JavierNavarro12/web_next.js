import type { Article } from '../types/article';
import { articles } from '../data/articles';
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
  const corpus = getArticleCorpus(article);
  if (!corpus) return {};

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

function getArticleCorpus(article: Article): string {
  const texts: string[] = [];
  article.contentSections?.forEach((section) => {
    if (section.paragraphs) texts.push(...section.paragraphs);
    if (section.bullets) texts.push(...section.bullets);
  });
  return texts.join('\n');
}

function countToolMentions(text: string, name: string): number {
  let count = 0;
  let index = findToolMention(text, name);
  while (index !== -1) {
    count++;
    text = text.slice(index + name.length);
    index = findToolMention(text, name);
  }
  return count;
}

/**
 * Artículos que enlazan a la ficha de la herramienta (el enlace inverso de
 * getArticleToolLinks): primero los que la llevan en el título y después los
 * que más la mencionan.
 */
export function getToolArticles(toolName: string, limit = 3): Article[] {
  const score = (article: Article) =>
    (findToolMention(article.title, toolName) !== -1 ? 1000 : 0) +
    countToolMentions(getArticleCorpus(article), toolName);
  return articles
    .filter((article) => toolName in getArticleToolLinks(article))
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
}
