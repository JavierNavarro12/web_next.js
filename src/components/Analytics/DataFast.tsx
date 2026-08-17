'use client';

import Script from 'next/script';
import { useCookieConsent } from '../../store/cookieConsent';

/**
 * DataFast analytics. Antes iba como script inline en el <head> sin pasar por
 * el consentimiento de cookies; ahora respeta el mismo gate que GA y Clarity.
 */
export default function DataFast() {
  const { consent, status } = useCookieConsent();

  if (status === 'unknown') return null;
  if (!consent.analytics) return null;
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host !== 'www.aifinder.es' && host !== 'aifinder.es') return null;
  }

  return (
    <Script
      src="https://datafa.st/js/script.js"
      strategy="afterInteractive"
      data-website-id="dfid_vDROHeJI9P2sNpr1i9WUW"
      data-domain="www.aifinder.es"
    />
  );
}
