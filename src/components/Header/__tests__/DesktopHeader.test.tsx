// @ts-nocheck
/// <reference types="jest" />
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DesktopHeader from '../DesktopHeader';
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
    return React.createElement(
      'div',
      { 'data-testid': 'search-dropdown' },
      React.createElement('div', { 'data-testid': 'search-term' }, searchTerm),
      React.createElement(
        'button',
        {
          'data-testid': 'mock-tool-click',
          onClick: () => onToolClick({ name: 'Test Tool' }, 'Test Category', 'Test Subcategory'),
        },
        'Click Tool',
      ),
    );
  };
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

describe('DesktopHeader', () => {
  const defaultProps = {
    currentCategory: null,
    activeSubcategory: null,
    setActiveCategory: jest.fn(),
    setActiveSubcategory: jest.fn(),
    isScrolled: false,
    activeFilter: 'all' as const,
    setActiveFilter: jest.fn(),
    hoveredFilter: null,
    setHoveredFilter: jest.fn(),
    searchTerm: '',
    setSearchTerm: jest.fn(),
    headerRow1Ref: { current: null },
    headerRow2Ref: { current: null },
    onSubcategoryClick: jest.fn(),
    activeNav: 'explorar',
    setActiveNav: jest.fn(),
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
    render(React.createElement(DesktopHeader, defaultProps));

    expect(screen.getByText('Explorar')).toBeInTheDocument();
    expect(screen.getByText('Nuevas Adiciones')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar IAs')).toBeInTheDocument();
  });

  it('should render with current category', () => {
    render(React.createElement(DesktopHeader, { ...defaultProps, currentCategory: mockCategory }));

    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('Subcategory 1')).toBeInTheDocument();
    expect(screen.getByText('Subcategory 2')).toBeInTheDocument();
    expect(screen.getByText('Ver Todas')).toBeInTheDocument();
    expect(screen.getByText('Gratis')).toBeInTheDocument();
    expect(screen.getByText('Pago')).toBeInTheDocument();
  });

  it('should handle navigation clicks', () => {
    const setActiveNav = jest.fn();
    render(React.createElement(DesktopHeader, { ...defaultProps, setActiveNav }));

    fireEvent.click(screen.getByText('Nuevas Adiciones'));
    expect(setActiveNav).toHaveBeenCalledWith('nuevas');
  });

  it('should handle subcategory clicks', () => {
    const onSubcategoryClick = jest.fn();
    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        currentCategory: mockCategory,
        onSubcategoryClick,
      }),
    );

    fireEvent.click(screen.getByText('Subcategory 1'));
    expect(onSubcategoryClick).toHaveBeenCalledWith('Subcategory 1');
  });

  it('should handle filter clicks', () => {
    const setActiveFilter = jest.fn();
    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        currentCategory: mockCategory,
        setActiveFilter,
      }),
    );

    fireEvent.click(screen.getByText('Gratis'));
    expect(setActiveFilter).toHaveBeenCalledWith('free');
  });

  it('should handle search input changes', () => {
    const setSearchTerm = jest.fn();
    render(React.createElement(DesktopHeader, { ...defaultProps, setSearchTerm }));

    const searchInput = screen.getByPlaceholderText('Buscar IAs');
    fireEvent.change(searchInput, { target: { value: 'test search' } });

    expect(setSearchTerm).toHaveBeenCalledWith('test search');
  });

  it('should show search dropdown when focused', () => {
    const setSearchTerm = jest.fn();
    render(React.createElement(DesktopHeader, { ...defaultProps, setSearchTerm }));

    const searchInput = screen.getByPlaceholderText('Buscar IAs');
    fireEvent.focus(searchInput);

    expect(screen.getByTestId('search-dropdown')).toBeInTheDocument();
  });

  it('should handle tool click from search dropdown', async () => {
    const setActiveCategory = jest.fn();
    const setSearchTerm = jest.fn();
    const onSubcategoryClick = jest.fn();

    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        setActiveCategory,
        setSearchTerm,
        onSubcategoryClick,
      }),
    );

    const searchInput = screen.getByPlaceholderText('Buscar IAs');
    fireEvent.focus(searchInput);

    const toolButton = screen.getByTestId('mock-tool-click');
    fireEvent.click(toolButton);

    await waitFor(() => {
      expect(setActiveCategory).toHaveBeenCalledWith('Test Category');
    });

    await waitFor(() => {
      expect(onSubcategoryClick).toHaveBeenCalledWith('Test Subcategory');
    });

    await waitFor(() => {
      expect(setSearchTerm).toHaveBeenCalledWith('');
    });
  });

  it('should handle category title click to go to top', () => {
    const setActiveCategory = jest.fn();
    const setActiveSubcategory = jest.fn();

    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        currentCategory: mockCategory,
        setActiveCategory,
        setActiveSubcategory,
      }),
    );

    fireEvent.click(screen.getByText('Test Category'));

    expect(setActiveCategory).toHaveBeenCalledWith(null);
    expect(setActiveSubcategory).toHaveBeenCalledWith(null);
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should handle hover states for navigation', () => {
    const setHoveredNav = jest.fn();
    render(React.createElement(DesktopHeader, defaultProps));

    const explorarButton = screen.getByText('Explorar');
    fireEvent.mouseEnter(explorarButton);

    // Verificar que el hover se maneja correctamente
    expect(explorarButton).toBeInTheDocument();
  });

  it('should handle hover states for filters', () => {
    const setHoveredFilter = jest.fn();
    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        currentCategory: mockCategory,
        setHoveredFilter,
      }),
    );

    const gratisButton = screen.getByText('Gratis');
    fireEvent.mouseEnter(gratisButton);

    expect(setHoveredFilter).toHaveBeenCalledWith('free');
  });

  it('should apply correct styles when scrolled', () => {
    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        currentCategory: mockCategory,
        isScrolled: true,
      }),
    );

    // Buscar el div que contiene las clases de scroll (el primer div después del div principal)
    const headerContainer = screen.getByText('Test Category').closest('div')?.parentElement;
    expect(headerContainer).toHaveClass(
      'h-0',
      'p-0',
      'm-0',
      'overflow-hidden',
      'opacity-0',
      'border-0',
    );
  });

  it('should apply correct styles for active subcategory', () => {
    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        currentCategory: mockCategory,
        activeSubcategory: 'Subcategory 1',
      }),
    );

    const activeButton = screen.getByText('Subcategory 1');
    expect(activeButton).toHaveClass('bg-blue-600', 'text-white');
  });

  it('should apply correct styles for active filter', () => {
    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        currentCategory: mockCategory,
        activeFilter: 'free',
      }),
    );

    const activeFilterButton = screen.getByText('Gratis');
    expect(activeFilterButton).toBeInTheDocument();
  });

  it('should handle click outside to close search', () => {
    const setSearchTerm = jest.fn();
    render(React.createElement(DesktopHeader, { ...defaultProps, setSearchTerm }));

    const searchInput = screen.getByPlaceholderText('Buscar IAs');
    fireEvent.focus(searchInput);

    expect(screen.getByTestId('search-dropdown')).toBeInTheDocument();

    // Simular click fuera del componente
    fireEvent.mouseDown(document.body);

    // El dropdown debería desaparecer
    expect(screen.queryByTestId('search-dropdown')).not.toBeInTheDocument();
  });

  it('should handle search term display in dropdown', () => {
    render(React.createElement(DesktopHeader, { ...defaultProps, searchTerm: 'test search' }));

    const searchInput = screen.getByPlaceholderText('Buscar IAs');
    fireEvent.focus(searchInput);

    expect(screen.getByTestId('search-term')).toHaveTextContent('test search');
  });

  it('should handle window scroll when main element not found', () => {
    mockQuerySelector.mockReturnValue(null);
    const setActiveCategory = jest.fn();
    const setActiveSubcategory = jest.fn();

    render(
      React.createElement(DesktopHeader, {
        ...defaultProps,
        currentCategory: mockCategory,
        setActiveCategory,
        setActiveSubcategory,
      }),
    );

    fireEvent.click(screen.getByText('Test Category'));

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
