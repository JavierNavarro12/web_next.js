'use client';

import { useEffect } from 'react';

export default function PWARegistration() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Registrar el service worker
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registrado: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registro falló: ', registrationError);
        });
    }
  }, []);

  return null;
}
