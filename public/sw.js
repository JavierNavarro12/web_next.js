// Service Worker para AIFinder PWA
const CACHE_NAME = 'aifinder-v2';
const ASSET_CACHE_URLS = [
  '/',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/offline.html',
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSET_CACHE_URLS);
    }),
  );
  // Actualiza inmediatamente a la nueva versión
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
  // Tomar control de los clientes inmediatamente
  self.clients.claim();
});

// Permitir precachear URLs bajo demanda (e.g., imágenes de próximas secciones)
self.addEventListener('message', (event) => {
  try {
    const data = event.data;
    if (!data || !data.type) return;
    if (data.type === 'PRECACHE_URLS' && Array.isArray(data.urls)) {
      const urls = data.urls.filter((u) => {
        try {
          const url = new URL(u, self.location.origin);
          // Por seguridad, solo precachear del mismo origen
          return url.origin === self.location.origin;
        } catch {
          return false;
        }
      });
      event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
          return Promise.all(
            urls.map((u) =>
              cache.match(u).then((hit) => (hit ? null : cache.add(u).catch(() => null))),
            ),
          );
        }),
      );
    }
  } catch (_) {}
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Solo manejar GET
  if (request.method !== 'GET') return;

  // Estrategia: cache-first para assets estáticos, network-first para HTML/API
  if (url.origin === self.location.origin) {
    // Assets: imágenes, CSS, JS, iconos
    const isStaticAsset =
      request.destination === 'style' ||
      request.destination === 'script' ||
      request.destination === 'image' ||
      request.destination === 'font' ||
      request.destination === 'manifest';

    if (isStaticAsset) {
      // Imágenes: stale-while-revalidate (rápido desde caché, actualiza en segundo plano)
      if (request.destination === 'image') {
        event.respondWith(
          (async () => {
            const cache = await caches.open(CACHE_NAME);
            const cached = await cache.match(request);
            const networkFetch = fetch(request)
              .then((response) => {
                if (response && response.status === 200) {
                  cache.put(request, response.clone());
                }
                return response;
              })
              .catch(() => undefined);

            return cached || (await networkFetch) || Response.error();
          })(),
        );
        return;
      }

      // Otros assets estáticos: cache-first con actualización
      event.respondWith(
        caches.match(request).then((cached) => {
          if (cached) return cached;
          return fetch(request).then((response) => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          });
        }),
      );
      return;
    }

    // HTML: network-first para evitar servir HTML obsoleto
    if (request.destination === 'document') {
      event.respondWith(
        fetch(request)
          .then((response) => {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            return response;
          })
          .catch(() => caches.match(request)),
      );
      return;
    }
  }

  // Para otras solicitudes (incluye APIs externas), dejar pasar a la red
  // Fallback offline para documentos
  if (request.destination === 'document') {
    event.respondWith(fetch(request).catch(() => caches.match('/offline.html')));
    return;
  }
});
