'use client';

import React from 'react';
import Sidebar from '../components/Navigation/Sidebar';
import AddAIToolModal from '../components/Pages/AddAIToolModal';
import AddAIToolPage from '../components/Pages/AddAIToolPage';
import PWAInstallPrompt from '../components/PWA/PWAInstallPrompt';
import PWARegistration from '../components/PWA/PWARegistration';
import OfflineBanner from '../components/Offline/OfflineBanner';
import { AppProvider, useAppStore, SidebarDrawerContext } from '../store/appStore';

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

      <div className="min-h-screen w-full flex items-start justify-center bg-black m-0 p-0">
        {/* Contenedor bordeado que envuelve todo en desktop */}
        <div className="hidden md:block min-h-screen w-full max-w-[1400px] mx-auto pt-2 pr-3 pb-3 pl-1">
          <div className="flex min-h-[calc(100vh-1.25rem)] border-l border-t border-b border-zinc-800 bg-black relative overflow-hidden">
            {/* Sidebar */}
            <div className="min-w-[270px] max-w-[300px] flex-col border-r border-zinc-800 bg-black fixed left-[calc(4px+1px)] top-[calc(8px+1px)] h-[calc(100vh-1.25rem-2px)] z-40 overflow-hidden">
              <Sidebar />
            </div>
            {/* Contenido principal */}
            <div className="flex-1 flex flex-col bg-black border-r border-zinc-800 ml-[270px] h-[calc(100vh-1.25rem)] overflow-hidden">
              <main className="flex-1 bg-black text-white overflow-y-auto p-0">{children}</main>
            </div>
          </div>
        </div>
        {/* Layout móvil sin contenedor bordeado */}
        <div className="md:hidden min-h-screen w-full flex flex-col bg-black">
          <main className="flex-1 bg-black text-white min-h-[800px] p-0">{children}</main>
        </div>
      </div>

      {/* Modal para añadir IA - solo en desktop */}
      <div className="hidden md:block">
        <AddAIToolModal isOpen={showAddAITool} onClose={() => setShowAddAITool(false)} />
      </div>

      {/* Página para añadir IA - solo en móvil */}
      <div className="md:hidden">
        <AddAIToolPage
          isOpen={showAddAITool}
          onClose={() => setShowAddAITool(false)}
          setSidebarOpen={setSidebarOpen}
          setActiveCategory={setActiveCategory}
          setActiveSubcategory={setActiveSubcategory}
        />
      </div>

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
