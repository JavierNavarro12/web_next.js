import { comparisons } from '../data/comparisons';
import type { Comparison } from '../types/tool';

export function getAllComparisons(): Comparison[] {
  return comparisons;
}

export function findComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

/**
 * Comparativas en las que aparece una herramienta, para enlazar desde su ficha.
 */
export function getComparisonsForTool(toolName: string, limit = 6): Comparison[] {
  return comparisons.filter((c) => c.a === toolName || c.b === toolName).slice(0, limit);
}
