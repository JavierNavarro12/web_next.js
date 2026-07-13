import { aiCategories, AITool } from '../data/ai-tools';
import { toolDetails } from '../data/tool-details';
import type { ToolDetail } from '../types/tool';
import { slugify } from './slugify';

export type ToolWithContext = AITool & {
  slug: string;
  category: string;
  subcategory: string;
};

export function toolSlug(name: string): string {
  return slugify(name);
}

/**
 * Todas las herramientas del catálogo, deduplicadas por slug.
 * Una herramienta puede aparecer en varias subcategorías; nos quedamos con la primera.
 */
export function getAllTools(): ToolWithContext[] {
  const bySlug = new Map<string, ToolWithContext>();

  for (const category of aiCategories) {
    for (const subcategory of category.subcategories) {
      for (const tool of subcategory.tools) {
        const slug = toolSlug(tool.name);
        if (!bySlug.has(slug)) {
          bySlug.set(slug, {
            ...tool,
            slug,
            category: category.name,
            subcategory: subcategory.name,
          });
        }
      }
    }
  }

  return [...bySlug.values()];
}

export function findToolBySlug(slug: string): ToolWithContext | undefined {
  return getAllTools().find((tool) => tool.slug === slug);
}

export function getToolDetail(name: string): ToolDetail | undefined {
  return toolDetails[name];
}

/**
 * Herramientas de la misma subcategoría, para enlazado interno y alternativas.
 */
export function getRelatedTools(tool: ToolWithContext, limit = 6): ToolWithContext[] {
  return getAllTools()
    .filter(
      (t) =>
        t.slug !== tool.slug && t.category === tool.category && t.subcategory === tool.subcategory,
    )
    .slice(0, limit);
}

/**
 * Herramientas de una subcategoría concreta, con slug para enlazar.
 */
export function getToolsBySubcategory(
  categoryName: string,
  subcategoryName: string,
): ToolWithContext[] {
  return getAllTools().filter(
    (t) => t.category === categoryName && t.subcategory === subcategoryName,
  );
}
