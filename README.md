# AIFinder

Descubre y compara las mejores herramientas de IA

## Características

- Más de 200 herramientas de IA categorizadas
- Búsqueda avanzada por categorías
- Newsletter semanal con las últimas novedades
- Interfaz moderna y responsiva
- PWA para instalación en dispositivos
- Service Worker con precache bajo demanda y estrategia de imágenes "stale-while-revalidate"
- Observabilidad con Sentry (activable por variable de entorno)

## Tecnologías

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Firebase (Firestore)
- EmailJS
- Resend
- Firebase Admin SDK (suscripción/baja segura)
- Sentry (errores en producción)

## Desarrollo

```bash
npm install
npm run dev
```

## Testing

```bash
npm run test
npm run cypress:run
```

## Entorno

Configura un archivo `.env.local` con las claves necesarias:

```
# Firebase (cliente)
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# EmailJS (cliente)
NEXT_PUBLIC_EMAILJS_USER_ID=...
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID=...

# Newsletter (server)
FIREBASE_CLIENT_EMAIL=...              # del Service Account JSON
FIREBASE_PRIVATE_KEY=...               # del Service Account JSON (ver formato abajo)
UNSUBSCRIBE_SECRET=...                 # secreto para firmar token de baja
RATE_LIMIT_SECRET=...                  # secreto para rate limit en /api/send-welcome-email

# Resend (server)
RESEND_API_KEY=...

# Sentry (observabilidad)
SENTRY_DSN=...                         # DSN del proyecto en Sentry

# Sitio
NEXT_PUBLIC_SITE_URL=https://aifinder.es
```

### Formato de `FIREBASE_PRIVATE_KEY`

Coloca el valor exacto del campo `private_key` del Service Account. Si lo pegas en Vercel:

- Acepta tanto saltos de línea reales como `\n`. El código normaliza automáticamente:
  - Reemplaza `\\n` por `\n`
  - Convierte `\r\n` a `\n`
  - Quita comillas sobrantes

Ejemplos válidos:

```
-----BEGIN PRIVATE KEY-----\nMIIEv...\n-----END PRIVATE KEY-----\n
```

o con saltos de línea reales tal cual aparece en el JSON.

## API relevantes

- `POST /api/subscribe` → Suscribe email de forma segura (server-side con Firebase Admin).
- `POST /api/unsubscribe` → Baja segura usando token firmado (enlace en email de bienvenida).

## PWA

- Manifest e iconos en `public/manifest.json` y `public/icons/*`.
- Service Worker `public/sw.js` con:
  - precache de recursos base
  - soporte de precache bajo demanda (`PRECACHE_URLS`)
  - imágenes con estrategia "stale-while-revalidate" para carga instantánea y actualización en background

Tras un despliegue, recarga una vez para activar la versión nueva del SW.

## Observabilidad (Sentry)

1. Crea proyecto en Sentry y copia el DSN
2. Define `SENTRY_DSN` en Vercel (Production/Preview)
3. Despliega. Para probar en producción, en la consola del navegador:

```js
setTimeout(() => {
  throw new Error('Sentry test');
}, 0);
```

## Seguridad

- Headers en `next.config.ts`: CSP, HSTS, Referrer-Policy, Permissions-Policy.
- Rate limit por cookie HMAC en `/api/send-welcome-email` y token firmado para baja.

## Build

```bash
npm run build && npm start
```

<!-- Última actualización: README mantenido automáticamente con los cambios de infra/observabilidad. -->
