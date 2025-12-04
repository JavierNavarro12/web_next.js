/**
 * Convierte un nombre a slug URL-friendly
 * Ej: "IA Cognitiva y Razonamiento" -> "ia-cognitiva-y-razonamiento"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
    .replace(/[^a-z0-9\s-]/g, '') // Solo alfanuméricos, espacios y guiones
    .trim()
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-'); // Múltiples guiones a uno
}

/**
 * Encuentra una categoría por su slug
 */
export function findCategoryBySlug(
  categories: { name: string }[],
  slug: string,
): { name: string } | undefined {
  return categories.find((cat) => slugify(cat.name) === slug);
}

/**
 * Genera un mapa de slug -> nombre de categoría
 */
export function generateCategorySlugMap(categories: { name: string }[]): Record<string, string> {
  const map: Record<string, string> = {};
  for (const cat of categories) {
    map[slugify(cat.name)] = cat.name;
  }
  return map;
}
