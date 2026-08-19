/**
 * Notifica a IndexNow (Bing/Yandex) las URLs del sitemap tras cada deploy a
 * producción. Google no usa IndexNow; esto solo acelera los buscadores
 * alternativos (~3-4% de cuota en España). Reenviar URLs sin cambios no
 * penaliza: el receptor deduplica.
 */
const HOST = 'www.aifinder.es';
const KEY = '01fd4a1129b14b80b3435184d1c6f8df';
const BASE = `https://${HOST}`;

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

const index = await fetchText(`${BASE}/sitemap.xml`);
const childSitemaps = extractLocs(index).filter((u) => u.includes('/sitemaps/'));
const urlSets = await Promise.all(childSitemaps.map(fetchText));
const urlList = urlSets.flatMap(extractLocs);

if (urlList.length === 0) {
  throw new Error('El sitemap no devolvió URLs; no se envía nada a IndexNow.');
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${BASE}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: ${urlList.length} URLs enviadas, respuesta ${res.status}`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
