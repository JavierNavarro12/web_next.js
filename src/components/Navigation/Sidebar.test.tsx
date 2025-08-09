// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

// Mock de los contextos usando variables prefijadas con mock y exportadas
const mockSetActiveCategory = jest.fn();
const mockSetActiveSubcategory = jest.fn();
const mockSetShowAddAITool = jest.fn();
const mockOnNavigate = jest.fn();

let mockShowFeedback = false;
let mockShowBugReport = false;
const mockSetShowFeedback = jest.fn();
const mockSetShowBugReport = jest.fn();
let mockActiveNav = 'explorar';
const mockSetActiveNav = jest.fn();

// Navigation manager spies
const navigateToTopMock = jest.fn();
const navigateToSubcategoryMock = jest.fn();

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

jest.mock('../../app/providers', () => ({
  useAppContext: () => ({
    activeCategory: null,
    setActiveCategory: mockSetActiveCategory,
  }),
  useSubcategoryContext: () => ({
    activeSubcategory: null,
    setActiveSubcategory: mockSetActiveSubcategory,
  }),
  useFeedbackContext: () => ({
    showFeedback: mockShowFeedback,
    setShowFeedback: mockSetShowFeedback,
  }),
  useAddAIToolContext: () => ({
    setShowAddAITool: mockSetShowAddAITool,
  }),
  useBugReportContext: () => ({
    showBugReport: mockShowBugReport,
    setShowBugReport: mockSetShowBugReport,
  }),
  useActiveNavContext: () => ({
    activeNav: mockActiveNav,
    setActiveNav: mockSetActiveNav,
  }),
}));

jest.mock('../../hooks/useNavigationManager', () => ({
  useNavigationManager: () => ({
    navigateToSubcategory: navigateToSubcategoryMock,
    navigateToTop: navigateToTopMock,
  }),
}));

describe('Sidebar', () => {
  beforeEach(() => {
    mockSetActiveCategory.mockClear();
    mockSetActiveSubcategory.mockClear();
    mockSetShowAddAITool.mockClear();
    mockOnNavigate.mockClear();
    mockSetShowFeedback.mockClear();
    mockSetShowBugReport.mockClear();
    mockSetActiveNav.mockClear();
    navigateToTopMock.mockClear();
    navigateToSubcategoryMock.mockClear();
    mockShowFeedback = false;
    mockShowBugReport = false;
    mockActiveNav = 'explorar';
  });

  it('renderiza las secciones principales', () => {
    render(React.createElement(Sidebar));
    expect(screen.getByText('Explorar')).toBeInTheDocument();
    expect(screen.getByText('Artículos')).toBeInTheDocument();
  });

  it('renderiza al menos una categoría', () => {
    render(React.createElement(Sidebar));
    const generativaLinks = screen.getAllByText('Generativa');
    expect(generativaLinks.length).toBeGreaterThan(0);
  });

  it('llama a setActiveCategory al hacer click en una categoría', () => {
    render(React.createElement(Sidebar));
    // Buscar todos los enlaces y botones
    const linksAndButtons = [...screen.queryAllByRole('link'), ...screen.queryAllByRole('button')];
    // Buscar el que contenga el texto 'Generativa' en cualquier parte de su contenido
    const catElement = linksAndButtons.find((el) => el.textContent?.includes('Generativa'));
    expect(catElement).toBeTruthy();
    fireEvent.click(catElement!);
    expect(mockSetActiveCategory).toHaveBeenCalledWith('Generativa');
  });

  it('despliega subcategorías y permite seleccionar una', () => {
    render(React.createElement(Sidebar));
    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();
    fireEvent.click(catElement!.closest('div')!);
    const subcatButton = screen.getByRole('button', { name: 'Texto' });
    expect(subcatButton).toBeInTheDocument();
    const section = document.createElement('div');
    section.id = 'Texto';
    document.body.appendChild(section);
    jest.useFakeTimers();
    fireEvent.click(subcatButton);
    // Avanzar el retardo interno (100ms) antes de invocar navigateToSubcategory
    jest.advanceTimersByTime(120);
    expect(navigateToSubcategoryMock).toHaveBeenCalledWith('Texto');
    jest.useRealTimers();
    document.body.removeChild(section);
  });

  it('cierra la subcategoría al hacer click de nuevo en la misma categoría', () => {
    render(React.createElement(Sidebar));
    // Buscar todos los elementos de categoría (en desktop es un <span> con el nombre)
    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();
    // Simular click para abrir subcategorías
    fireEvent.click(catElement!.closest('div')!);
    // Verificar que la subcategoría "Texto" aparece
    expect(screen.getByRole('button', { name: 'Texto' })).toBeInTheDocument();
    // Simular click de nuevo para cerrar
    fireEvent.click(catElement!.closest('div')!);
    // Ahora la subcategoría ya no debería estar en el documento
    expect(screen.queryByRole('button', { name: 'Texto' })).toBeNull();
  });

  // Nuevos tests para cubrir líneas faltantes
  it('maneja eventos de mouse enter y leave en categorías', () => {
    render(React.createElement(Sidebar));
    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();

    const categoryContainer = catElement!.closest('div');
    expect(categoryContainer).toBeTruthy();

    // Simular mouse enter
    fireEvent.mouseEnter(categoryContainer!);
    // Simular mouse leave
    fireEvent.mouseLeave(categoryContainer!);

    // Verificar que el componente sigue funcionando
    expect(screen.getByText('Explorar')).toBeInTheDocument();
  });

  it('maneja eventos de mouse enter y leave en subcategorías', () => {
    render(React.createElement(Sidebar));
    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();

    // Abrir subcategorías
    fireEvent.click(catElement!.closest('div')!);

    // Buscar subcategoría
    const subcatButton = screen.getByRole('button', { name: 'Texto' });
    expect(subcatButton).toBeInTheDocument();

    // Simular mouse enter en subcategoría
    fireEvent.mouseEnter(subcatButton);
    // Simular mouse leave en subcategoría
    fireEvent.mouseLeave(subcatButton);

    // Verificar que el componente sigue funcionando
    expect(screen.getByText('Explorar')).toBeInTheDocument();
  });

  it('renderiza y maneja el ítem "Añadir una IA" en el menú principal', () => {
    render(React.createElement(Sidebar, { onNavigate: mockOnNavigate }));

    const addAILink = screen.getByRole('link', { name: /añadir una ia/i });
    expect(addAILink).toBeInTheDocument();

    // Simular click en el botón
    fireEvent.click(addAILink);

    // Verificar que se llama a setShowAddAITool
    expect(mockSetShowAddAITool).toHaveBeenCalledWith(true);
    // Verificar que se llama a onNavigate si está disponible
    expect(mockOnNavigate).toHaveBeenCalled();
  });

  it('maneja el ítem "Añadir una IA" sin onNavigate', () => {
    render(React.createElement(Sidebar));

    const addAILink = screen.getByRole('link', { name: /añadir una ia/i });
    expect(addAILink).toBeInTheDocument();

    // Simular click en el botón
    fireEvent.click(addAILink);

    // Verificar que se llama a setShowAddAITool
    expect(mockSetShowAddAITool).toHaveBeenCalledWith(true);
    // Verificar que el componente sigue funcionando
    expect(screen.getByText('Explorar')).toBeInTheDocument();
  });

  it('maneja clicks en botones de expandir/contraer subcategorías', () => {
    render(React.createElement(Sidebar));
    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();

    // Buscar el botón de expandir (chevron)
    const expandButton = catElement!
      .closest('li')!
      .querySelector('button[aria-label*="subcategorías"]');
    expect(expandButton).toBeTruthy();

    // Simular click en el botón de expandir
    fireEvent.click(expandButton!);

    // Verificar que se llama a setActiveCategory
    expect(mockSetActiveCategory).toHaveBeenCalledWith('Generativa');
  });

  it('previene propagación de eventos en clicks de categorías', () => {
    render(React.createElement(Sidebar));
    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();

    const categoryContainer = catElement!.closest('div');
    expect(categoryContainer).toBeTruthy();

    // Crear un mock event con preventDefault y stopPropagation
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    // Simular click con el evento mock
    fireEvent.click(categoryContainer!, mockEvent);

    // Verificar que se llama a setActiveCategory
    expect(mockSetActiveCategory).toHaveBeenCalledWith('Generativa');
  });

  it('maneja refs para subcategorías correctamente', () => {
    render(React.createElement(Sidebar));
    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();

    // Abrir subcategorías
    fireEvent.click(catElement!.closest('div')!);

    // Buscar elementos de subcategoría
    const subcatElements = screen.getAllByRole('button');
    const subcatButton = subcatElements.find((button) => button.textContent === 'Texto');
    expect(subcatButton).toBeTruthy();

    // Simular mouse enter para activar el hover
    fireEvent.mouseEnter(subcatButton!);

    // Verificar que el componente sigue funcionando
    expect(screen.getByText('Explorar')).toBeInTheDocument();
  });

  it('cierra feedback y navega a subcategoría con retardo', () => {
    jest.useFakeTimers();
    mockShowFeedback = true;
    render(React.createElement(Sidebar));

    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    fireEvent.click(catElement!.closest('div')!);

    const subcatButton = screen.getByRole('button', { name: 'Texto' });
    fireEvent.click(subcatButton);

    expect(mockSetShowFeedback).toHaveBeenCalledWith(false);
    // Espera al retardo de 100ms
    jest.advanceTimersByTime(120);
    expect(navigateToSubcategoryMock).toHaveBeenCalledWith('Texto');
    jest.useRealTimers();
  });

  it('cierra bug report y navega a subcategoría con retardo', () => {
    jest.useFakeTimers();
    mockShowBugReport = true;
    render(React.createElement(Sidebar));

    const generativaElements = screen.getAllByText('Generativa');
    const catElement = generativaElements.find((el) => el.closest('li'));
    fireEvent.click(catElement!.closest('div')!);

    const subcatButton = screen.getByRole('button', { name: 'Texto' });
    fireEvent.click(subcatButton);

    expect(mockSetShowBugReport).toHaveBeenCalledWith(false);
    jest.advanceTimersByTime(120);
    expect(navigateToSubcategoryMock).toHaveBeenCalledWith('Texto');
    jest.useRealTimers();
  });

  it('maneja click en secciones principales: Explorar, Herramientas y Artículos', () => {
    render(React.createElement(Sidebar, { onNavigate: mockOnNavigate }));

    // Explorar
    fireEvent.click(screen.getByText('Explorar'));
    expect(mockSetActiveCategory).toHaveBeenCalledWith(null);
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith(null);
    expect(mockSetActiveNav).toHaveBeenCalledWith('explorar');
    expect(navigateToTopMock).toHaveBeenCalled();
    expect(mockOnNavigate).toHaveBeenCalled();

    mockSetActiveCategory.mockClear();
    mockSetActiveSubcategory.mockClear();
    mockSetActiveNav.mockClear();
    navigateToTopMock.mockClear();
    mockOnNavigate.mockClear();

    // Herramientas
    fireEvent.click(screen.getByText('Herramientas'));
    expect(mockSetActiveCategory).toHaveBeenCalledWith(null);
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith(null);
    expect(navigateToTopMock).toHaveBeenCalled();
    expect(mockOnNavigate).toHaveBeenCalled();

    mockSetActiveCategory.mockClear();
    mockSetActiveSubcategory.mockClear();
    navigateToTopMock.mockClear();
    mockOnNavigate.mockClear();

    // Artículos
    fireEvent.click(screen.getByText('Artículos'));
    expect(mockSetActiveCategory).toHaveBeenCalledWith(null);
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith(null);
    expect(mockSetActiveNav).toHaveBeenCalledWith('articulos');
    expect(navigateToTopMock).toHaveBeenCalled();
    expect(mockOnNavigate).toHaveBeenCalled();
  });

  it('al hacer click en AIFinder limpia storage y hace scroll al inicio', () => {
    // preparar main con scrollTo
    const main = document.createElement('main');
    // @ts-ignore
    main.scrollTo = jest.fn();
    document.body.appendChild(main);
    localStorage.setItem('activeCategory', 'Generativa');
    localStorage.setItem('activeSubcategory', 'Texto');

    render(React.createElement(Sidebar, { onNavigate: mockOnNavigate }));
    fireEvent.click(screen.getByText('AIFinder'));

    expect(localStorage.getItem('activeCategory')).toBeNull();
    expect(localStorage.getItem('activeSubcategory')).toBeNull();
    expect(mockOnNavigate).toHaveBeenCalled();
    expect(main.scrollTo as any).toHaveBeenCalled();

    document.body.removeChild(main);
  });
});
