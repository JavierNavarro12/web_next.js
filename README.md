# AIFinder

Descubre y compara las mejores herramientas de IA

## Características

- Más de 200 herramientas de IA categorizadas
- Búsqueda avanzada por categorías
- Newsletter semanal con las últimas novedades
- Interfaz moderna y responsiva
- PWA para instalación en dispositivos

## Tecnologías

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Firebase (Firestore)
- EmailJS
- Resend

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
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

NEXT_PUBLIC_EMAILJS_USER_ID=...
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_FEEDBACK_TEMPLATE_ID=...

RESEND_API_KEY=...
```

<!-- Última actualización: $(date) -->
