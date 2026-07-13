import { COMPARISONS_BATCH, PUBLISHED_BATCHES, toolBatches } from '../data/publishing';

/**
 * Tanda a la que pertenece una herramienta (1-indexada).
 * Devuelve null si no está en ninguna: no se publica.
 */
function getToolBatch(toolName: string): number | null {
  const index = toolBatches.findIndex((batch) => batch.includes(toolName));
  return index === -1 ? null : index + 1;
}

export function isToolPublished(toolName: string): boolean {
  const batch = getToolBatch(toolName);
  return batch !== null && batch <= PUBLISHED_BATCHES;
}

export function isComparisonPublished(): boolean {
  return COMPARISONS_BATCH <= PUBLISHED_BATCHES;
}

/**
 * Metadata de robots para una página aún no publicada: se puede rastrear y
 * seguir sus enlaces, pero no entra en el índice.
 */
export const NOINDEX_ROBOTS = {
  index: false,
  follow: true,
} as const;
