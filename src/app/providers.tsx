'use client';

import React, { useState, createContext, useContext, useEffect } from 'react';
import Sidebar from '../components/Navigation/Sidebar';
import AddAIToolModal from '../components/Pages/AddAIToolModal';
import AddAIToolPage from '../components/Pages/AddAIToolPage';
import PWAInstallPrompt from '../components/PWA/PWAInstallPrompt';
import PWARegistration from '../components/PWA/PWARegistration';

// Crear contexto para el estado global
type AppContextType = {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    if (process.env.NODE_ENV === 'test') {
      return {
        activeCategory: null,
        setActiveCategory: () => {},
      } as AppContextType;
    }
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// Contexto para la subcategoría activa
type SubcategoryContextType = {
  activeSubcategory: string | null;
  setActiveSubcategory: (subcategory: string | null) => void;
};

const SubcategoryContext = createContext<SubcategoryContextType | undefined>(undefined);

export const useSubcategoryContext = () => {
  const context = useContext(SubcategoryContext);
  if (context === undefined) {
    if (process.env.NODE_ENV === 'test') {
      return {
        activeSubcategory: null,
        setActiveSubcategory: () => {},
      } as SubcategoryContextType;
    }
    throw new Error('useSubcategoryContext must be used within a SubcategoryProvider');
  }
  return context;
};

// Crea el contexto para el sidebar drawer
export const SidebarDrawerContext = createContext<{ setSidebarOpen: (open: boolean) => void }>({
  setSidebarOpen: () => {},
});

// Contexto para el estado de feedback
type FeedbackContextType = {
  showFeedback: boolean;
  setShowFeedback: (show: boolean) => void;
};

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const useFeedbackContext = () => {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    if (process.env.NODE_ENV === 'test') {
      return {
        showFeedback: false,
        setShowFeedback: () => {},
      } as FeedbackContextType;
    }
    throw new Error('useFeedbackContext must be used within a FeedbackProvider');
  }
  return context;
};

// Contexto para el estado de reportar bug
type BugReportContextType = {
  showBugReport: boolean;
  setShowBugReport: (show: boolean) => void;
};

const BugReportContext = createContext<BugReportContextType | undefined>(undefined);

export const useBugReportContext = () => {
  const context = useContext(BugReportContext);
  if (context === undefined) {
    if (process.env.NODE_ENV === 'test') {
      return {
        showBugReport: false,
        setShowBugReport: () => {},
      } as BugReportContextType;
    }
    throw new Error('useBugReportContext must be used within a BugReportProvider');
  }
  return context;
};

// Contexto para el modal de añadir IA
type AddAIToolContextType = {
  showAddAITool: boolean;
  setShowAddAITool: (show: boolean) => void;
};

const AddAIToolContext = createContext<AddAIToolContextType | undefined>(undefined);

export const useAddAIToolContext = () => {
  const context = useContext(AddAIToolContext);
  if (context === undefined) {
    if (process.env.NODE_ENV === 'test') {
      return {
        showAddAITool: false,
        setShowAddAITool: () => {},
      } as AddAIToolContextType;
    }
    throw new Error('useAddAIToolContext must be used within an AddAIToolProvider');
  }
  return context;
};

// Contexto para IA resaltada
type HighlightedToolContextType = {
  highlightedTool: string | null;
  setHighlightedTool: (toolName: string | null) => void;
};

const HighlightedToolContext = createContext<HighlightedToolContextType | undefined>(undefined);

export const useHighlightedToolContext = () => {
  const context = useContext(HighlightedToolContext);
  if (context === undefined) {
    if (process.env.NODE_ENV === 'test') {
      return {
        highlightedTool: null,
        setHighlightedTool: () => {},
      } as HighlightedToolContextType;
    }
    throw new Error('useHighlightedToolContext must be used within a HighlightedToolProvider');
  }
  return context;
};

// Contexto para navegación activa
type ActiveNavContextType = {
  activeNav: string;
  setActiveNav: (nav: string) => void;
};

const ActiveNavContext = createContext<ActiveNavContextType | undefined>(undefined);

export const useActiveNavContext = () => {
  const context = useContext(ActiveNavContext);
  if (context === undefined) {
    if (process.env.NODE_ENV === 'test') {
      return {
        activeNav: 'explorar',
        setActiveNav: () => {},
      } as ActiveNavContextType;
    }
    throw new Error('useActiveNavContext must be used within an ActiveNavProvider');
  }
  return context;
};

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showBugReport, setShowBugReport] = useState(false);
  const [showAddAITool, setShowAddAITool] = useState(false);
  const [highlightedTool, setHighlightedTool] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState('explorar');

  // Bloquear scroll de fondo cuando el drawer está abierto
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (sidebarOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [sidebarOpen]);

  // Cargar desde localStorage tras hidratación
  useEffect(() => {
    const savedCategory =
      typeof window !== 'undefined' ? localStorage.getItem('activeCategory') : null;
    const savedSubcategory =
      typeof window !== 'undefined' ? localStorage.getItem('activeSubcategory') : null;
    if (savedCategory) setActiveCategory(savedCategory);
    if (savedSubcategory) setActiveSubcategory(savedSubcategory);
  }, []);

  return (
    <SidebarDrawerContext.Provider value={{ setSidebarOpen }}>
      <FeedbackContext.Provider value={{ showFeedback, setShowFeedback }}>
        <BugReportContext.Provider value={{ showBugReport, setShowBugReport }}>
          <AddAIToolContext.Provider value={{ showAddAITool, setShowAddAITool }}>
            <HighlightedToolContext.Provider value={{ highlightedTool, setHighlightedTool }}>
              <ActiveNavContext.Provider value={{ activeNav, setActiveNav }}>
                <AppContext.Provider value={{ activeCategory, setActiveCategory }}>
                  <SubcategoryContext.Provider value={{ activeSubcategory, setActiveSubcategory }}>
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
                              className="text-zinc-400"
                              aria-label="Buscar herramientas de IA"
                              title="Buscar herramientas de IA"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-7 h-7"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={() => setSidebarOpen(false)}
                              className="text-white focus:outline-none"
                              aria-label="Cerrar menú de navegación"
                              title="Cerrar menú de navegación"
                            >
                              <svg
                                width="28"
                                height="28"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
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
                            <main className="flex-1 bg-black text-white overflow-y-auto p-0">
                              {children}
                            </main>
                          </div>
                        </div>
                      </div>
                      {/* Layout móvil sin contenedor bordeado */}
                      <div className="md:hidden min-h-screen w-full flex flex-col bg-black">
                        <main className="flex-1 bg-black text-white min-h-[800px] p-0">
                          {children}
                        </main>
                      </div>
                    </div>

                    {/* Modal para añadir IA - solo en desktop */}
                    <div className="hidden md:block">
                      <AddAIToolModal
                        isOpen={showAddAITool}
                        onClose={() => setShowAddAITool(false)}
                      />
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
                  </SubcategoryContext.Provider>
                </AppContext.Provider>
              </ActiveNavContext.Provider>
            </HighlightedToolContext.Provider>
          </AddAIToolContext.Provider>
        </BugReportContext.Provider>
      </FeedbackContext.Provider>
    </SidebarDrawerContext.Provider>
  );
}

export default AppProviders;
