const MONTHS: Record<string, number> = {
  ene: 0,
  feb: 1,
  mar: 2,
  abr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  ago: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dic: 11,
};

/**
 * Convierte las fechas de los artículos ("04 Jun 2025") en Date.
 * Devuelve null si el formato no encaja.
 */
export function parseArticleDate(date: string): Date | null {
  const match = /^(\d{1,2})\s+([A-Za-zÁ-úñ]+)\s+(\d{4})$/.exec(date.trim());
  if (!match) return null;

  const [, day, monthName, year] = match;
  const month = MONTHS[monthName.slice(0, 3).toLowerCase()];
  if (month === undefined) return null;

  return new Date(Number(year), month, Number(day));
}
