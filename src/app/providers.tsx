'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../components/Navigation/Sidebar';
import PWAInstallPrompt from '../components/PWA/PWAInstallPrompt';
import PWARegistration from '../components/PWA/PWARegistration';
import OfflineBanner from '../components/Offline/OfflineBanner';
import { AppProvider, useAppStore, SidebarDrawerContext } from '../store/appStore';

// Lazy load modales pesados (contienen @emailjs/browser ~20KB)
const AddAIToolModal = dynamic(() => import('../components/Pages/AddAIToolModal'), {
  ssr: false,
});
const AddAIToolPage = dynamic(() => import('../components/Pages/AddAIToolPage'), {
  ssr: false,
});

// Re-export hooks para retrocompatibilidad
export {
  useAppContext,
  useSubcategoryContext,
  useFeedbackContext,
  useBugReportContext,
  useAddAIToolContext,
  useHighlightedToolContext,
  useActiveNavContext,
  SidebarDrawerContext,
} from '../store/appStore';

function AppProvidersContent({ children }: { children: React.ReactNode }) {
  const store = useAppStore();
  const {
    ui: { sidebarOpen, showAddAITool },
    setSidebarOpen,
    setActiveCategory,
    setActiveSubcategory,
    setShowAddAITool,
  } = store;

  return (
    <SidebarDrawerContext.Provider value={{ setSidebarOpen }}>
      {/* Sidebar drawer en móvil */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col md:hidden"
          style={{ overflow: 'hidden' }}
        >
          <div className="flex items-center justify-between px-4 py-5 border-b border-zinc-800">
            <span className="font-extrabold text-3xl tracking-tight text-white font-sans">
              AIFinder
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-white focus:outline-none"
                aria-label="Cerrar menú de navegación"
                title="Cerrar menú de navegación"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1" style={{ overflow: 'hidden' }}>
            <Sidebar onNavigate={() => setSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Layout único (responsive) — evita renderizar {children} dos veces (SEO/Ahrefs: H1 duplicados, etc.) */}
      <div className="min-h-screen w-full flex items-start justify-center bg-black m-0 p-0">
        <div className="min-h-screen w-full md:max-w-[1400px] md:mx-auto md:pt-2 md:pr-3 md:pb-3 md:pl-1">
          <div className="flex min-h-screen md:min-h-[calc(100vh-1.25rem)] md:border-l md:border-t md:border-b md:border-zinc-800 bg-black relative overflow-hidden">
            {/* Sidebar (solo desktop) */}
            <div className="hidden md:flex min-w-[270px] max-w-[300px] flex-col border-r border-zinc-800 bg-black fixed left-[calc(4px+1px)] top-[calc(8px+1px)] h-[calc(100vh-1.25rem-2px)] z-40 overflow-hidden">
              <Sidebar />
            </div>
            {/* Contenido principal */}
            <div className="flex-1 flex flex-col bg-black md:border-r md:border-zinc-800 md:ml-[270px] md:h-[calc(100vh-1.25rem)] overflow-hidden">
              <main className="flex-1 bg-black text-white p-0 min-h-[800px] md:min-h-0 md:overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para añadir IA - solo en desktop, lazy loaded cuando se abre */}
      {showAddAITool && (
        <>
          <div className="hidden md:block">
            <AddAIToolModal isOpen={showAddAITool} onClose={() => setShowAddAITool(false)} />
          </div>
          <div className="md:hidden">
            <AddAIToolPage
              isOpen={showAddAITool}
              onClose={() => setShowAddAITool(false)}
              setSidebarOpen={setSidebarOpen}
              setActiveCategory={setActiveCategory}
              setActiveSubcategory={setActiveSubcategory}
            />
          </div>
        </>
      )}

      {/* PWA */}
      <PWAInstallPrompt />
      <PWARegistration />

      {/* Offline Banner */}
      <OfflineBanner />
    </SidebarDrawerContext.Provider>
  );
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <AppProvidersContent>{children}</AppProvidersContent>
    </AppProvider>
  );
}

export default AppProviders;
