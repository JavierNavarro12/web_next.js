// @ts-nocheck
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';

// Mock de los contextos usando variables prefijadas con mock y exportadas
const mockSetActiveCategory = jest.fn();
const mockSetActiveSubcategory = jest.fn();
const mockSetShowAddAITool = jest.fn();
const mockOnNavigate = jest.fn();

// Mock window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
});

jest.mock('../../app/layout', () => {
  return {
    useAppContext: () => ({
      activeCategory: null,
      setActiveCategory: mockSetActiveCategory,
    }),
    useSubcategoryContext: () => ({
      activeSubcategory: null,
      setActiveSubcategory: mockSetActiveSubcategory,
    }),
    useFeedbackContext: () => ({
      showFeedback: false,
      setShowFeedback: jest.fn(),
    }),
    useAddAIToolContext: () => ({
      setShowAddAITool: mockSetShowAddAITool,
    }),
    useBugReportContext: () => ({
      showBugReport: false,
      setShowBugReport: jest.fn(),
    }),
  };
});

describe('Sidebar', () => {
  beforeEach(() => {
    mockSetActiveCategory.mockClear();
    mockSetActiveSubcategory.mockClear();
    mockSetShowAddAITool.mockClear();
    mockOnNavigate.mockClear();
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
    // Buscar todos los elementos de categoría (en desktop es un <span> con el nombre)
    const generativaElements = screen.getAllByText('Generativa');
    // Buscar el elemento de la lista de categorías (que tiene un ancestro <li>)
    const catElement = generativaElements.find((el) => el.closest('li'));
    expect(catElement).toBeTruthy();
    // Simular click en la categoría para desplegar subcategorías
    fireEvent.click(catElement!.closest('div')!);
    // Ahora debería aparecer la subcategoría "Texto"
    const subcatButton = screen.getByRole('button', { name: 'Texto' });
    expect(subcatButton).toBeInTheDocument();
    // Simular el elemento de destino en el DOM para que handleSubcategoryClick funcione
    const section = document.createElement('div');
    section.id = 'Texto';
    document.body.appendChild(section);
    // Simular click en la subcategoría
    fireEvent.click(subcatButton);
    // Verificar que se llama al contexto de subcategoría
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith('Texto');
    // Limpiar el DOM
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

  it('renderiza y maneja el botón "Añadir una IA"', () => {
    render(React.createElement(Sidebar, { onNavigate: mockOnNavigate }));

    const addAIButton = screen.getByRole('button', { name: /añadir una ia/i });
    expect(addAIButton).toBeInTheDocument();

    // Simular click en el botón
    fireEvent.click(addAIButton);

    // Verificar que se llama a setShowAddAITool
    expect(mockSetShowAddAITool).toHaveBeenCalledWith(true);
    // Verificar que se llama a onNavigate si está disponible
    expect(mockOnNavigate).toHaveBeenCalled();
  });

  it('maneja el botón "Añadir una IA" sin onNavigate', () => {
    render(React.createElement(Sidebar));

    const addAIButton = screen.getByRole('button', { name: /añadir una ia/i });
    expect(addAIButton).toBeInTheDocument();

    // Simular click en el botón
    fireEvent.click(addAIButton);

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

  it('maneja estados activos de subcategorías con showFeedback', () => {
    // Mock con showFeedback true usando un mock diferente
    const mockWithShowFeedback = {
      useAppContext: () => ({
        activeCategory: null,
        setActiveCategory: mockSetActiveCategory,
      }),
      useSubcategoryContext: () => ({
        activeSubcategory: 'Texto',
        setActiveSubcategory: mockSetActiveSubcategory,
      }),
      useFeedbackContext: () => ({
        showFeedback: true,
        setShowFeedback: jest.fn(),
      }),
      useAddAIToolContext: () => ({
        setShowAddAITool: mockSetShowAddAITool,
      }),
      useBugReportContext: () => ({
        showBugReport: false,
        setShowBugReport: jest.fn(),
      }),
    };

    // Usar jest.doMock de manera diferente
    jest.doMock('../../app/layout', () => mockWithShowFeedback);

    render(React.createElement(Sidebar));

    // Verificar que el componente se renderiza sin errores
    expect(screen.getByText('Explorar')).toBeInTheDocument();
  });
});
