export function prefetchImages(urls: string[]) {
  if (typeof window === 'undefined') return;
  if (!('serviceWorker' in navigator)) return;
  const filtered = Array.from(new Set(urls)).filter(Boolean);
  if (filtered.length === 0) return;
  // Intento vía SW (más eficiente y cache-first)
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'PRECACHE_URLS', urls: filtered });
  }
  // Fallback: precargar creando Image() para calentar cache HTTP del navegador
  for (const url of filtered) {
    const img = new Image();
    img.src = url;
  }
}

// Utilidad para construir rutas absolutas a partir de base
export function withBase(path: string) {
  if (!path) return path;
  if (path.startsWith('http')) return path;
  return `${location.origin}${path.startsWith('/') ? path : `/${path}`}`;
}
