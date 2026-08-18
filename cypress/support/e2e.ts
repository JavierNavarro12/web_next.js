// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Globally ignore a noisy React dev-only error that can happen under Cypress time-travel
Cypress.on('uncaught:exception', (err) => {
  if (err && typeof err.message === 'string') {
    if (err.message.includes('Cannot commit the same tree as before')) {
      return false;
    }
    // Errores de hidratación (#418/#423): falso positivo bajo Cypress. Su proxy
    // inyecta un script en el HTML y el App Router hidrata el documento entero,
    // así que React ve un mismatch en <html>. Verificado que la app hidrata
    // limpia en Chrome real (dev y build de producción, escritorio y móvil).
    if (
      err.message.includes('Minified React error #418') ||
      err.message.includes('Minified React error #423') ||
      err.message.includes('Hydration failed')
    ) {
      return false;
    }
  }
  // Let other errors fail the test
  return undefined as unknown as boolean;
});
