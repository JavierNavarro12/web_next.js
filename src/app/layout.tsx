'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar';
import React, { useState, createContext, useContext } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
    throw new Error('useSubcategoryContext must be used within a SubcategoryProvider');
  }
  return context;
};

// Crea el contexto para el sidebar drawer
export const SidebarDrawerContext = createContext<{ setSidebarOpen: (open: boolean) => void }>({
  setSidebarOpen: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="es">
      <head>
        <title>AIFinder</title>
        <meta name="description" content="Descubre y compara las mejores herramientas de IA" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <SidebarDrawerContext.Provider value={{ setSidebarOpen }}>
          <AppContext.Provider value={{ activeCategory, setActiveCategory }}>
            <SubcategoryContext.Provider value={{ activeSubcategory, setActiveSubcategory }}>
              {/* Sidebar drawer en móvil */}
              {sidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex flex-col md:hidden">
                  <div className="flex items-center justify-between px-4 py-5 border-b border-zinc-800">
                    <span className="font-extrabold text-3xl tracking-tight text-white font-sans">
                      AIFinder
                    </span>
                    <div className="flex items-center gap-3">
                      <button className="text-zinc-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-7 h-7"
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
                      >
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
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
                  <div className="flex-1 overflow-y-auto">
                    <Sidebar onNavigate={() => setSidebarOpen(false)} />
                  </div>
                </div>
              )}
              <div className="min-h-screen w-full flex items-start justify-center bg-black m-0 p-0">
                {/* Contenedor bordeado que envuelve todo en desktop */}
                <div className="hidden md:block min-h-screen w-full max-w-[1400px] mx-auto pt-2 pr-3 pb-3 pl-1">
                  <div className="flex min-h-[calc(100vh-1.25rem)] border-l border-t border-b border-zinc-800 bg-black relative overflow-hidden">
                    {/* Sidebar */}
                    <div className="min-w-[270px] max-w-[300px] flex-col border-r border-zinc-800 bg-black fixed left-[calc(4px+1px)] top-[calc(8px+1px)] h-[calc(100vh-1.25rem-2px)] z-40 overflow-y-auto">
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
                  <main className="flex-1 bg-black text-white min-h-[800px] p-0">{children}</main>
                </div>
              </div>
            </SubcategoryContext.Provider>
          </AppContext.Provider>
        </SidebarDrawerContext.Provider>
      </body>
    </html>
  );
}

<style jsx global>{`
  .scrollbar-none::-webkit-scrollbar {
    display: none;
  }
`}</style>;
