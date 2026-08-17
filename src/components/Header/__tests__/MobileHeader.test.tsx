// @ts-nocheck
/// <reference types="jest" />
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileHeader from '../MobileHeader';
import { AICategory } from '../../../data/ai-tools';

// Mock del contexto
const mockSetHighlightedTool = jest.fn();
jest.mock('../../../app/layout', () => ({
  useHighlightedToolContext: () => ({
    setHighlightedTool: mockSetHighlightedTool,
  }),
}));

// Mock del componente SearchDropdown
jest.mock('../SearchDropdown', () => {
  return function MockSearchDropdown({
    searchTerm,
    isVisible,
    onToolClick,
    isMobile,
  }: {
    searchTerm?: string;
    isVisible?: boolean;
    onToolClick?: (tool: { name: string }, category: string, subcategory: string) => void;
    isMobile?: boolean;
  }) {
    if (!isVisible) return null;
    return (
      <div data-testid="search-dropdown">
        <div data-testid="search-term">{searchTerm}</div>
        <div data-testid="is-mobile">{isMobile ? 'true' : 'false'}</div>
        <button
          data-testid="mock-tool-click"
          onClick={() => onToolClick({ name: 'Test Tool' }, 'Test Category', 'Test Subcategory')}
        >
          Click Tool
        </button>
      </div>
    );
  };
});

// Mock localStorage
const mockLocalStorage = {
  removeItem: jest.fn(),
  getItem: jest.fn(),
  setItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
  writable: true,
});

// Mock DOM methods
const mockQuerySelector = jest.fn();
const mockScrollTo = jest.fn();

Object.defineProperty(document, 'querySelector', {
  value: mockQuerySelector,
  writable: true,
});

Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
});

describe('MobileHeader', () => {
  const defaultProps = {
    currentCategory: null,
    activeSubcategory: null,
    setActiveCategory: jest.fn(),
    setActiveSubcategory: jest.fn(),
    setSidebarOpen: jest.fn(),
    isClient: true,
    tabRefs: { current: {} },
    tabsContainerRef: { current: null },
    onSubcategoryClick: jest.fn(),
  };

  const mockCategory: AICategory = {
    name: 'Test Category',
    description: 'Test Description',
    subcategories: [
      { name: 'Subcategory 1', tools: [] },
      { name: 'Subcategory 2', tools: [] },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockQuerySelector.mockReturnValue({ scrollTo: mockScrollTo });
  });

  it('should render without current category', () => {
    render(<MobileHeader {...defaultProps} />);

    expect(screen.getByText('AIFinder')).toBeInTheDocument();
    expect(screen.getByLabelText('Buscar herramientas de IA')).toBeInTheDocument();
    expect(screen.getByLabelText('Abrir menú de navegación')).toBeInTheDocument();
  });

  it('should render with current category and subcategories', () => {
    render(<MobileHeader {...defaultProps} currentCategory={mockCategory} />);

    expect(screen.getByText('AIFinder')).toBeInTheDocument();
    expect(screen.getByText('Subcategory 1')).toBeInTheDocument();
    expect(screen.getByText('Subcategory 2')).toBeInTheDocument();
  });

  it('should handle logo click to go to top', () => {
    const setActiveCategory = jest.fn();
    const setActiveSubcategory = jest.fn();

    render(
      <MobileHeader
        {...defaultProps}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
      />,
    );

    fireEvent.click(screen.getByText('AIFinder'));

    expect(setActiveCategory).toHaveBeenCalledWith(null);
    expect(setActiveSubcategory).toHaveBeenCalledWith(null);
    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('activeCategory');
    expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('activeSubcategory');
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should handle sidebar toggle', () => {
    const setSidebarOpen = jest.fn();
    render(<MobileHeader {...defaultProps} setSidebarOpen={setSidebarOpen} />);

    const sidebarButton = screen.getByLabelText('Abrir menú de navegación');
    fireEvent.click(sidebarButton);

    expect(setSidebarOpen).toHaveBeenCalledWith(true);
  });

  it('should handle search toggle', () => {
    render(<MobileHeader {...defaultProps} />);

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');

    // Abrir búsqueda
    fireEvent.click(searchButton);
    expect(screen.getByPlaceholderText('Buscar IAs')).toBeInTheDocument();
    expect(screen.getByLabelText('Cerrar búsqueda')).toBeInTheDocument();

    // Cerrar búsqueda
    fireEvent.click(screen.getByLabelText('Cerrar búsqueda'));
    expect(screen.queryByPlaceholderText('Buscar IAs')).not.toBeInTheDocument();
  });

  it('should handle search input changes', () => {
    render(<MobileHeader {...defaultProps} />);

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');
    fireEvent.click(searchButton);

    const searchInput = screen.getByPlaceholderText('Buscar IAs');
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    expect(searchInput).toHaveValue('test search');
  });

  it('should show search dropdown when search is open', () => {
    render(<MobileHeader {...defaultProps} />);

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');
    fireEvent.click(searchButton);

    expect(screen.getByTestId('search-dropdown')).toBeInTheDocument();
    expect(screen.getByTestId('is-mobile')).toHaveTextContent('true');
  });

  it('should handle tool click from search dropdown', async () => {
    const setActiveCategory = jest.fn();
    const onSubcategoryClick = jest.fn();

    render(
      <MobileHeader
        {...defaultProps}
        setActiveCategory={setActiveCategory}
        onSubcategoryClick={onSubcategoryClick}
      />,
    );

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');
    fireEvent.click(searchButton);

    const toolButton = screen.getByTestId('mock-tool-click');
    fireEvent.click(toolButton);

    await waitFor(() => {
      expect(setActiveCategory).toHaveBeenCalledWith('Test Category');
    });

    await waitFor(() => {
      expect(onSubcategoryClick).toHaveBeenCalledWith('Test Subcategory');
    });
  });

  it('should handle subcategory clicks', () => {
    const onSubcategoryClick = jest.fn();
    render(
      <MobileHeader
        {...defaultProps}
        currentCategory={mockCategory}
        onSubcategoryClick={onSubcategoryClick}
      />,
    );

    fireEvent.click(screen.getByText('Subcategory 1'));
    expect(onSubcategoryClick).toHaveBeenCalledWith('Subcategory 1');
  });

  it('should apply correct styles for active subcategory', () => {
    render(
      <MobileHeader
        {...defaultProps}
        currentCategory={mockCategory}
        activeSubcategory="Subcategory 1"
      />,
    );

    const activeButton = screen.getByText('Subcategory 1');
    expect(activeButton).toHaveClass('bg-blue-600', 'text-white');
  });

  it('should handle click outside to close search', () => {
    render(<MobileHeader {...defaultProps} />);

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');
    fireEvent.click(searchButton);

    expect(screen.getByTestId('search-dropdown')).toBeInTheDocument();

    // Simular click fuera del componente
    fireEvent.mouseDown(document.body);

    // El dropdown debería desaparecer
    expect(screen.queryByTestId('search-dropdown')).not.toBeInTheDocument();
  });

  it('should not close search when clicking search button', () => {
    render(<MobileHeader {...defaultProps} />);

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');
    fireEvent.click(searchButton);

    expect(screen.getByTestId('search-dropdown')).toBeInTheDocument();

    // Click en el botón de búsqueda no debería cerrar la búsqueda
    fireEvent.mouseDown(searchButton);

    expect(screen.getByTestId('search-dropdown')).toBeInTheDocument();
  });

  it('should handle window scroll when main element not found', () => {
    mockQuerySelector.mockReturnValue(null);
    const setActiveCategory = jest.fn();
    const setActiveSubcategory = jest.fn();

    render(
      <MobileHeader
        {...defaultProps}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
      />,
    );

    fireEvent.click(screen.getByText('AIFinder'));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should not remove localStorage when isClient is false', () => {
    const setActiveCategory = jest.fn();
    const setActiveSubcategory = jest.fn();

    render(
      <MobileHeader
        {...defaultProps}
        isClient={false}
        setActiveCategory={setActiveCategory}
        setActiveSubcategory={setActiveSubcategory}
      />,
    );

    fireEvent.click(screen.getByText('AIFinder'));

    expect(mockLocalStorage.removeItem).not.toHaveBeenCalled();
  });

  it('should handle search term display in dropdown', () => {
    render(<MobileHeader {...defaultProps} />);

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');
    fireEvent.click(searchButton);

    const searchInput = screen.getByPlaceholderText('Buscar IAs');
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    expect(screen.getByTestId('search-term')).toHaveTextContent('test search');
  });

  it('should clear search term when closing search', () => {
    render(<MobileHeader {...defaultProps} />);

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');
    fireEvent.click(searchButton);

    const searchInput = screen.getByPlaceholderText('Buscar IAs');
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    expect(searchInput).toHaveValue('test search');

    // Cerrar búsqueda
    fireEvent.click(screen.getByLabelText('Cerrar búsqueda'));

    // Abrir búsqueda nuevamente
    fireEvent.click(searchButton);
    const newSearchInput = screen.getByPlaceholderText('Buscar IAs');
    expect(newSearchInput).toHaveValue('');
  });

  it('should handle search button icon changes', () => {
    render(<MobileHeader {...defaultProps} />);

    const searchButton = screen.getByLabelText('Buscar herramientas de IA');

    // Botón debería mostrar lupa inicialmente
    expect(searchButton).toBeInTheDocument();

    // Abrir búsqueda
    fireEvent.click(searchButton);
    expect(screen.getByLabelText('Cerrar búsqueda')).toBeInTheDocument();

    // Cerrar búsqueda
    fireEvent.click(screen.getByLabelText('Cerrar búsqueda'));
    expect(screen.getByLabelText('Buscar herramientas de IA')).toBeInTheDocument();
  });
});
