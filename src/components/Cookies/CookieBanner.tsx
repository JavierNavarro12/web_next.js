'use client';

import React, { useEffect, useState } from 'react';
import { useCookieConsent } from '../../store/cookieConsent';

export default function CookieBanner() {
  const {
    status,
    consent,
    isBannerOpen,
    isPreferencesOpen,
    openPreferences,
    closePreferences,
    acceptAll,
    rejectAll,
    savePreferences,
  } = useCookieConsent();

  const [form, setForm] = useState({
    analytics: consent.analytics,
    marketing: consent.marketing,
    preferences: consent.preferences,
  });

  // Mantener el formulario sincronizado con el consentimiento actual cuando se abre preferencias
  useEffect(() => {
    if (isPreferencesOpen) {
      setForm({
        analytics: consent.analytics,
        marketing: consent.marketing,
        preferences: consent.preferences,
      });
    }
  }, [isPreferencesOpen, consent.analytics, consent.marketing, consent.preferences]);

  // Render only when the banner or preferences modal should actually be visible
  if (!isBannerOpen && !isPreferencesOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

      {/* Banner / Modal */}
      <div className="relative w-full md:max-w-2xl m-0 md:m-6 pointer-events-auto">
        <div className="bg-black border border-zinc-800 rounded-xl shadow-2xl p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-white text-lg font-semibold">Tu privacidad en AIFinder</h2>
              <p className="text-zinc-300 text-sm mt-1">
                Usamos cookies para que el sitio funcione y para medir uso. Puedes aceptar todas,
                rechazar todas o configurar tus preferencias.
              </p>
            </div>
          </div>

          {/* Simple buttons row */}
          <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
            <button
              onClick={rejectAll}
              className="px-3 py-2 text-sm rounded-md border border-zinc-700 text-zinc-200 hover:bg-zinc-800"
            >
              Rechazar todas
            </button>
            <button
              onClick={openPreferences}
              className="px-3 py-2 text-sm rounded-md border border-zinc-700 text-zinc-200 hover:bg-zinc-800"
            >
              Configurar
            </button>
            <button
              onClick={acceptAll}
              className="px-3 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white"
            >
              Aceptar todas
            </button>
          </div>

          {/* Preferences modal content */}
          {isPreferencesOpen && (
            <div className="mt-5 border-t border-zinc-800 pt-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-white text-sm font-medium">Necesarias</div>
                    <div className="text-zinc-400 text-xs">
                      Siempre activas para el funcionamiento básico.
                    </div>
                  </div>
                  <div className="text-xs text-zinc-400">Activadas</div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-white text-sm font-medium">Analíticas</div>
                    <div className="text-zinc-400 text-xs">Medición anónima de uso (GA).</div>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={form.analytics}
                      onChange={(e) => setForm((f) => ({ ...f, analytics: e.target.checked }))}
                    />
                    <div className="w-10 h-5 bg-zinc-700 rounded-full peer-checked:bg-blue-600 relative">
                      <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                    </div>
                  </label>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-white text-sm font-medium">Marketing</div>
                    <div className="text-zinc-400 text-xs">
                      Herramientas de marketing/remarketing.
                    </div>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={form.marketing}
                      onChange={(e) => setForm((f) => ({ ...f, marketing: e.target.checked }))}
                    />
                    <div className="w-10 h-5 bg-zinc-700 rounded-full peer-checked:bg-blue-600 relative">
                      <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                    </div>
                  </label>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-white text-sm font-medium">Preferencias</div>
                    <div className="text-zinc-400 text-xs">Recordar idioma/tema/ajustes.</div>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={form.preferences}
                      onChange={(e) => setForm((f) => ({ ...f, preferences: e.target.checked }))}
                    />
                    <div className="w-10 h-5 bg-zinc-700 rounded-full peer-checked:bg-blue-600 relative">
                      <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                    </div>
                  </label>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  onClick={closePreferences}
                  className="px-3 py-2 text-sm rounded-md border border-zinc-700 text-zinc-200 hover:bg-zinc-800"
                >
                  Cancelar
                </button>
                <button
                  onClick={() =>
                    savePreferences({
                      analytics: form.analytics,
                      marketing: form.marketing,
                      preferences: form.preferences,
                    })
                  }
                  className="px-3 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Guardar preferencias
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
