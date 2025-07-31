# Configuración PWA para AIFinder

## ¿Qué es PWA?

PWA (Progressive Web App) permite que tu aplicación web se comporte como una aplicación nativa en dispositivos móviles y de escritorio. Los usuarios pueden:

- **Instalar la app** en su dispositivo
- **Acceder offline** a funcionalidades básicas
- **Recibir notificaciones push** (si se implementan)
- **Tener una experiencia similar a una app nativa**

## Características implementadas

### ✅ Configuración básica PWA

- **Manifest.json**: Define la apariencia y comportamiento de la app
- **Service Worker**: Maneja el cache y funcionalidad offline
- **Iconos**: Múltiples tamaños para diferentes dispositivos
- **Meta tags**: Configuración para iOS, Android y navegadores

### ✅ Componentes PWA

- **PWAInstallPrompt**: Muestra un banner para instalar la app
- **PWARegistration**: Registra automáticamente el service worker

### ✅ Iconos generados

- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512
- Formato PNG optimizado
- Compatible con Android, iOS y navegadores

## Cómo probar el PWA

### 1. En desarrollo

```bash
npm run dev
```

Abre http://localhost:3000 en Chrome

### 2. En producción

```bash
npm run build
npm start
```

### 3. Verificar instalación

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña "Application"
3. En "Manifest" verifica que se cargue correctamente
4. En "Service Workers" verifica que esté registrado

### 4. Instalar la app

- En **Chrome**: Aparecerá un banner "Instalar AIFinder"
- En **Android**: Aparecerá "Añadir a pantalla de inicio"
- En **iOS**: Usa "Compartir" → "Añadir a pantalla de inicio"

## Estructura de archivos PWA

```
public/
├── manifest.json          # Configuración PWA
├── sw.js                 # Service Worker
└── icons/
    ├── icon.svg          # Icono base
    ├── icon-72x72.png   # Iconos en diferentes tamaños
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png

src/
├── components/
│   ├── PWAInstallPrompt.tsx    # Banner de instalación
│   └── PWARegistration.tsx     # Registro del SW
└── app/
    └── layout.tsx              # Meta tags PWA
```

## Configuración del manifest.json

```json
{
  "name": "AIFinder - Descubre las mejores herramientas de IA",
  "short_name": "AIFinder",
  "description": "Descubre y compara las mejores herramientas de inteligencia artificial",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#000000",
  "theme_color": "#000000",
  "orientation": "portrait-primary",
  "scope": "/",
  "lang": "es"
}
```

## Funcionalidades del Service Worker

- **Cache de recursos**: Guarda archivos estáticos para acceso offline
- **Actualización automática**: Detecta nuevas versiones y actualiza el cache
- **Estrategia Cache First**: Prioriza el cache para mejor rendimiento

## Próximas mejoras posibles

- [ ] **Notificaciones push** para nuevas herramientas de IA
- [ ] **Sincronización en segundo plano** para datos offline
- [ ] **Analytics offline** para métricas sin conexión
- [ ] **Actualización automática** con notificación al usuario
- [ ] **Modo offline mejorado** con más funcionalidades

## Troubleshooting

### El PWA no se instala

1. Verifica que estés en HTTPS (requerido para PWA)
2. Comprueba que el manifest.json sea válido
3. Revisa la consola del navegador para errores

### El Service Worker no se registra

1. Verifica que el archivo `/sw.js` exista
2. Comprueba que no haya errores en la consola
3. Asegúrate de que estés en HTTPS

### Los iconos no se muestran

1. Verifica que todos los iconos estén en `/public/icons/`
2. Comprueba que las rutas en manifest.json sean correctas
3. Limpia el cache del navegador

## Recursos útiles

- [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev PWA](https://web.dev/progressive-web-apps/)
- [Lighthouse PWA Audit](https://developers.google.com/web/tools/lighthouse)
- [PWA Builder](https://www.pwabuilder.com/)
