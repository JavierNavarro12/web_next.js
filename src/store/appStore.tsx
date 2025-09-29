'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

/**
 * Store combinado de la aplicación
 * Reemplaza los 8 context providers anteriores con uno solo
 */

// ==================== TYPES ====================

export type AppState = {
  // Navigation state
  navigation: {
    activeCategory: string | null;
    activeSubcategory: string | null;
    activeNav: string;
  };
  // UI state (modals, sidebar, etc)
  ui: {
    sidebarOpen: boolean;
    showFeedback: boolean;
    showBugReport: boolean;
    showAddAITool: boolean;
    highlightedTool: string | null;
  };
};

export type AppActions = {
  // Navigation actions
  setActiveCategory: (category: string | null) => void;
  setActiveSubcategory: (subcategory: string | null) => void;
  setActiveNav: (nav: string) => void;

  // UI actions
  setSidebarOpen: (open: boolean) => void;
  setShowFeedback: (show: boolean) => void;
  setShowBugReport: (show: boolean) => void;
  setShowAddAITool: (show: boolean) => void;
  setHighlightedTool: (tool: string | null) => void;

  // Combined actions
  closeAllModals: () => void;
  resetNavigation: () => void;
};

type AppContextValue = AppState & AppActions;

// ==================== CONTEXT ====================

const AppContext = createContext<AppContextValue | undefined>(undefined);

// ==================== PROVIDER ====================

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  // Navigation state
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState('explorar');

  // UI state
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showBugReport, setShowBugReport] = useState(false);
  const [showAddAITool, setShowAddAITool] = useState(false);
  const [highlightedTool, setHighlightedTool] = useState<string | null>(null);

  // Bloquear scroll cuando sidebar está abierto
  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (sidebarOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [sidebarOpen]);

  // Cargar estado desde localStorage tras hidratación
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedCategory = localStorage.getItem('activeCategory');
    const savedSubcategory = localStorage.getItem('activeSubcategory');

    if (savedCategory) setActiveCategory(savedCategory);
    if (savedSubcategory) setActiveSubcategory(savedSubcategory);
  }, []);

  // Persistir estado en localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (activeCategory) {
      localStorage.setItem('activeCategory', activeCategory);
    } else {
      localStorage.removeItem('activeCategory');
    }
  }, [activeCategory]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (activeSubcategory) {
      localStorage.setItem('activeSubcategory', activeSubcategory);
    } else {
      localStorage.removeItem('activeSubcategory');
    }
  }, [activeSubcategory]);

  // Combined actions
  const closeAllModals = () => {
    setShowFeedback(false);
    setShowBugReport(false);
    setShowAddAITool(false);
  };

  const resetNavigation = () => {
    setActiveCategory(null);
    setActiveSubcategory(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('activeCategory');
      localStorage.removeItem('activeSubcategory');
    }
  };

  const value: AppContextValue = {
    // State
    navigation: {
      activeCategory,
      activeSubcategory,
      activeNav,
    },
    ui: {
      sidebarOpen,
      showFeedback,
      showBugReport,
      showAddAITool,
      highlightedTool,
    },

    // Actions
    setActiveCategory,
    setActiveSubcategory,
    setActiveNav,
    setSidebarOpen,
    setShowFeedback,
    setShowBugReport,
    setShowAddAITool,
    setHighlightedTool,
    closeAllModals,
    resetNavigation,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// ==================== HOOKS ====================

export function useAppStore() {
  const context = useContext(AppContext);

  if (context === undefined) {
    if (process.env.NODE_ENV === 'test') {
      // Valores por defecto para tests
      return {
        navigation: {
          activeCategory: null,
          activeSubcategory: null,
          activeNav: 'explorar',
        },
        ui: {
          sidebarOpen: false,
          showFeedback: false,
          showBugReport: false,
          showAddAITool: false,
          highlightedTool: null,
        },
        setActiveCategory: () => {},
        setActiveSubcategory: () => {},
        setActiveNav: () => {},
        setSidebarOpen: () => {},
        setShowFeedback: () => {},
        setShowBugReport: () => {},
        setShowAddAITool: () => {},
        setHighlightedTool: () => {},
        closeAllModals: () => {},
        resetNavigation: () => {},
      } as AppContextValue;
    }

    throw new Error('useAppStore must be used within AppProvider');
  }

  return context;
}

// Hooks específicos para retrocompatibilidad (se pueden eliminar gradualmente)
export function useAppContext() {
  const store = useAppStore();
  return {
    activeCategory: store.navigation.activeCategory,
    setActiveCategory: store.setActiveCategory,
  };
}

export function useSubcategoryContext() {
  const store = useAppStore();
  return {
    activeSubcategory: store.navigation.activeSubcategory,
    setActiveSubcategory: store.setActiveSubcategory,
  };
}

export function useFeedbackContext() {
  const store = useAppStore();
  return {
    showFeedback: store.ui.showFeedback,
    setShowFeedback: store.setShowFeedback,
  };
}

export function useBugReportContext() {
  const store = useAppStore();
  return {
    showBugReport: store.ui.showBugReport,
    setShowBugReport: store.setShowBugReport,
  };
}

export function useAddAIToolContext() {
  const store = useAppStore();
  return {
    showAddAITool: store.ui.showAddAITool,
    setShowAddAITool: store.setShowAddAITool,
  };
}

export function useHighlightedToolContext() {
  const store = useAppStore();
  return {
    highlightedTool: store.ui.highlightedTool,
    setHighlightedTool: store.setHighlightedTool,
  };
}

export function useActiveNavContext() {
  const store = useAppStore();
  return {
    activeNav: store.navigation.activeNav,
    setActiveNav: store.setActiveNav,
  };
}

// Context para sidebar drawer (retrocompatibilidad)
export const SidebarDrawerContext = createContext<{ setSidebarOpen: (open: boolean) => void }>({
  setSidebarOpen: () => {},
});
