'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export type ConsentState = {
  necessary: true; // always true
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

type ConsentStatus = 'unknown' | 'accepted_all' | 'rejected_all' | 'customized';

type CookieConsentContextValue = {
  status: ConsentStatus;
  consent: ConsentState;
  isBannerOpen: boolean;
  isPreferencesOpen: boolean;
  openBanner: () => void;
  closeBanner: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (next: Omit<ConsentState, 'necessary'>) => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

const STORAGE_KEY = 'cookieConsent.v1';

function loadStored(): { status: ConsentStatus; consent: ConsentState } | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed) return null;
    const consent: ConsentState = {
      necessary: true,
      analytics: !!parsed.consent?.analytics,
      marketing: !!parsed.consent?.marketing,
      preferences: !!parsed.consent?.preferences,
    };
    const status: ConsentStatus = parsed.status || 'customized';
    return { status, consent };
  } catch {
    return null;
  }
}

function persist(status: ConsentStatus, consent: ConsentState) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ status, consent: { ...consent, necessary: true } }),
    );
  } catch {}
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<ConsentStatus>('unknown');
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = loadStored();
    if (stored) {
      setStatus(stored.status);
      setConsent(stored.consent);
      setIsBannerOpen(false);
    } else {
      // Solo mostrar el banner después del primer paint para evitar parpadeo si SSR hidrata
      // pero queremos minimizar el flash: programamos al microtask siguiente
      Promise.resolve().then(() => setIsBannerOpen(true));
    }
  }, []);

  const acceptAll = useCallback(() => {
    const nextConsent: ConsentState = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsent(nextConsent);
    setStatus('accepted_all');
    persist('accepted_all', nextConsent);
    setIsBannerOpen(false);
    setIsPreferencesOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    const nextConsent: ConsentState = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setConsent(nextConsent);
    setStatus('rejected_all');
    persist('rejected_all', nextConsent);
    setIsBannerOpen(false);
    setIsPreferencesOpen(false);
  }, []);

  const savePreferences = useCallback((next: Omit<ConsentState, 'necessary'>) => {
    const nextConsent: ConsentState = { necessary: true, ...next };
    setConsent(nextConsent);
    setStatus('customized');
    persist('customized', nextConsent);
    setIsBannerOpen(false);
    setIsPreferencesOpen(false);
  }, []);

  const openBanner = useCallback(() => setIsBannerOpen(true), []);
  const closeBanner = useCallback(() => setIsBannerOpen(false), []);
  const openPreferences = useCallback(() => setIsPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setIsPreferencesOpen(false), []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      status,
      consent,
      isBannerOpen,
      isPreferencesOpen,
      openBanner,
      closeBanner,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectAll,
      savePreferences,
    }),
    [
      status,
      consent,
      isBannerOpen,
      isPreferencesOpen,
      openBanner,
      closeBanner,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectAll,
      savePreferences,
    ],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider');
  return ctx;
}
