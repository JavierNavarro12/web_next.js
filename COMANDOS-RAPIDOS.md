# ⚡ Comandos Rápidos - AIFinder

Comandos esenciales para uso diario.

## 🚀 Desarrollo diario
```bash
# Iniciar desarrollo
npm run dev

# Instalar dependencias
npm install
```

## 🧪 Testing
```bash
# Tests unitarios
npm test
npm test -- --watch
npm test -- --coverage

# Tests E2E
npm run cypress:open
npm run cypress:run

# Todos los tests
npm run test:all
```

## 🎨 Code Quality
```bash
# Linting y formato
npm run lint
npm run format

# Fix automático
npm run lint -- --fix
```

## 📦 Build
```bash
# Build producción
npm run build

# Servidor producción
npm start
```

## 🔧 Git básico
```bash
git status
git add .
git commit -m "mensaje"
git push
git pull
```

## 🔥 Comandos de emergencia
```bash
# Reset completo
rm -rf node_modules package-lock.json && npm install

# Limpiar cache
npm cache clean --force

# Matar proceso puerto 3000
lsof -ti:3000 | xargs kill -9
```

---
*Para comandos completos ver [COMANDOS.md](./COMANDOS.md)* 