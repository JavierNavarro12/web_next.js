const isWordChar = (c: string) => /[\p{L}\p{N}]/u.test(c);

/**
 * Devuelve el índice de la primera mención exacta del nombre (sensible a
 * mayúsculas y con límites de palabra), o -1. El límite manual en vez de \b
 * cubre nombres con puntos o símbolos (Copy.ai, DALL·E, Play.ht).
 */
export function findToolMention(text: string, name: string): number {
  let from = 0;
  while (from <= text.length - name.length) {
    const idx = text.indexOf(name, from);
    if (idx === -1) return -1;
    const prev = idx > 0 ? text[idx - 1] : '';
    const next = text[idx + name.length] ?? '';
    if ((!prev || !isWordChar(prev)) && (!next || !isWordChar(next))) {
      return idx;
    }
    from = idx + 1;
  }
  return -1;
}
