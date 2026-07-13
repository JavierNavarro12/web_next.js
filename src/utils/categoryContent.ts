import { categoryContent, subcategoryContent } from '../data/category-content';
import type { CategoryContent, SubcategoryContent } from '../types/tool';

export function getCategoryContent(categoryName: string): CategoryContent | undefined {
  return categoryContent.find((c) => c.cat === categoryName);
}

export function getSubcategoryContent(
  categoryName: string,
  subcategoryName: string,
): SubcategoryContent | undefined {
  return subcategoryContent.find((s) => s.cat === categoryName && s.sub === subcategoryName);
}
