// @ts-nocheck
/// <reference types="jest" />
import { renderHook, act } from '@testing-library/react';
import { useNavigationManager } from '../useNavigationManager';

// Mock DOM methods
const mockGetElementById = jest.fn();
const mockQuerySelector = jest.fn();
const mockQuerySelectorAll = jest.fn();
const mockScrollTo = jest.fn();
const mockGetBoundingClientRect = jest.fn();

Object.defineProperty(document, 'getElementById', {
  value: mockGetElementById,
  writable: true,
});

Object.defineProperty(document, 'querySelector', {
  value: mockQuerySelector,
  writable: true,
});

Object.defineProperty(document, 'querySelectorAll', {
  value: mockQuerySelectorAll,
  writable: true,
});

Object.defineProperty(window, 'innerWidth', {
  value: 1024,
  writable: true,
});

Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
});

describe('useNavigationManager', () => {
  const setActiveSubcategory = jest.fn();
  const isProgrammaticScroll = { current: false };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    isProgrammaticScroll.current = false;
    window.innerWidth = 1024; // Desktop por defecto
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should initialize without errors', () => {
    expect(() => {
      renderHook(() => useNavigationManager(setActiveSubcategory, isProgrammaticScroll));
    }).not.toThrow();
  });

  it('should navigate to subcategory successfully', () => {
    const mockElement = {
      offsetTop: 500,
      getBoundingClientRect: mockGetBoundingClientRect,
    };
    const mockMainElement = {
      scrollTo: mockScrollTo,
    };
    const mockHeaderRow1 = {
      getBoundingClientRect: jest.fn(() => ({ height: 60 })),
    };
    const mockHeaderRow2 = {
      getBoundingClientRect: jest.fn(() => ({ height: 40 })),
    };

    mockGetElementById.mockReturnValue(mockElement);
    mockQuerySelector.mockImplementation((selector) => {
      if (selector === '[data-header-row="1"]') return mockHeaderRow1;
      if (selector === '[data-header-row="2"]') return mockHeaderRow2;
      return mockMainElement;
    });
    mockGetBoundingClientRect.mockReturnValue({ height: 80 });

    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    act(() => {
      result.current.navigateToSubcategory('Test Subcategory');
    });

    expect(setActiveSubcategory).toHaveBeenCalledWith('Test Subcategory');
    expect(mockGetElementById).toHaveBeenCalledWith('Test-Subcategory');
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
    expect(isProgrammaticScroll.current).toBe(true);
  });

  it('should handle mobile navigation correctly', () => {
    window.innerWidth = 375; // Mobile
    const mockElement = {
      offsetTop: 500,
      getBoundingClientRect: mockGetBoundingClientRect,
    };
    const mockMobileHeader = {
      getBoundingClientRect: jest.fn(() => ({ height: 120 })),
    };

    mockGetElementById.mockReturnValue(mockElement);
    mockQuerySelector.mockImplementation((selector) => {
      if (selector === '.md\\:hidden.fixed') return mockMobileHeader;
      return { scrollTo: mockScrollTo };
    });

    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    act(() => {
      result.current.navigateToSubcategory('Test Subcategory');
    });

    expect(setActiveSubcategory).toHaveBeenCalledWith('Test Subcategory');
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
  });

  it('should handle desktop navigation with header calculation', () => {
    window.innerWidth = 1024; // Desktop
    const mockElement = {
      offsetTop: 500,
      getBoundingClientRect: mockGetBoundingClientRect,
    };
    const mockHeaderRow1 = {
      getBoundingClientRect: jest.fn(() => ({ height: 60 })),
    };
    const mockHeaderRow2 = {
      getBoundingClientRect: jest.fn(() => ({ height: 40 })),
    };

    mockGetElementById.mockReturnValue(mockElement);
    mockQuerySelector.mockImplementation((selector) => {
      if (selector === '[data-header-row="1"]') return mockHeaderRow1;
      if (selector === '[data-header-row="2"]') return mockHeaderRow2;
      return { scrollTo: mockScrollTo };
    });

    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    act(() => {
      result.current.navigateToSubcategory('Test Subcategory');
    });

    expect(setActiveSubcategory).toHaveBeenCalledWith('Test Subcategory');
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
  });

  it('should prevent multiple simultaneous navigations', () => {
    const mockElement = {
      offsetTop: 500,
      getBoundingClientRect: mockGetBoundingClientRect,
    };
    const mockMainElement = {
      scrollTo: mockScrollTo,
    };
    const mockHeaderRow1 = {
      getBoundingClientRect: jest.fn(() => ({ height: 60 })),
    };
    const mockHeaderRow2 = {
      getBoundingClientRect: jest.fn(() => ({ height: 40 })),
    };

    mockGetElementById.mockReturnValue(mockElement);
    mockQuerySelector.mockImplementation((selector) => {
      if (selector === '[data-header-row="1"]') return mockHeaderRow1;
      if (selector === '[data-header-row="2"]') return mockHeaderRow2;
      return mockMainElement;
    });

    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    act(() => {
      result.current.navigateToSubcategory('Test Subcategory');
      result.current.navigateToSubcategory('Another Subcategory');
    });

    // Solo debería llamar a setActiveSubcategory una vez
    expect(setActiveSubcategory).toHaveBeenCalledTimes(1);
    expect(setActiveSubcategory).toHaveBeenCalledWith('Test Subcategory');
  });

  it('should handle element not found gracefully', () => {
    mockGetElementById.mockReturnValue(null);

    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    expect(() => {
      act(() => {
        result.current.navigateToSubcategory('NonExistent Subcategory');
      });
    }).not.toThrow();

    // No debería hacer scroll si no encuentra el elemento
    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it('should navigate to top correctly', () => {
    const mockMainElement = {
      scrollTo: mockScrollTo,
    };

    mockQuerySelector.mockReturnValue(mockMainElement);

    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    act(() => {
      result.current.navigateToTop();
    });

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
    expect(isProgrammaticScroll.current).toBe(true);

    // Avanza el timeout para resetear isProgrammaticScroll
    act(() => {
      jest.advanceTimersByTime(600);
    });
    expect(isProgrammaticScroll.current).toBe(false);
  });

  it('should handle window scroll when main element not found', () => {
    mockQuerySelector.mockReturnValue(null);

    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    act(() => {
      result.current.navigateToTop();
    });

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should reset navigation flags after timeout', () => {
    const mockElement = {
      offsetTop: 500,
      getBoundingClientRect: mockGetBoundingClientRect,
    };
    const mockMainElement = {
      scrollTo: mockScrollTo,
    };
    const mockHeaderRow1 = {
      getBoundingClientRect: jest.fn(() => ({ height: 60 })),
    };
    const mockHeaderRow2 = {
      getBoundingClientRect: jest.fn(() => ({ height: 40 })),
    };

    mockGetElementById.mockReturnValue(mockElement);
    mockQuerySelector.mockImplementation((selector) => {
      if (selector === '[data-header-row="1"]') return mockHeaderRow1;
      if (selector === '[data-header-row="2"]') return mockHeaderRow2;
      return mockMainElement;
    });

    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    act(() => {
      result.current.navigateToSubcategory('Test Subcategory');
    });

    expect(isProgrammaticScroll.current).toBe(true);

    // Avanza el timeout para resetear flags
    act(() => {
      jest.advanceTimersByTime(800);
    });

    expect(isProgrammaticScroll.current).toBe(false);
  });

  it('should cleanup timeouts on unmount', () => {
    const { unmount } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    expect(() => {
      unmount();
    }).not.toThrow();
  });

  it('should return correct navigation state', () => {
    const { result } = renderHook(() =>
      useNavigationManager(setActiveSubcategory, isProgrammaticScroll),
    );

    expect(result.current.navigateToSubcategory).toBeDefined();
    expect(typeof result.current.navigateToSubcategory).toBe('function');
    expect(result.current.navigateToTop).toBeDefined();
    expect(typeof result.current.navigateToTop).toBe('function');
    expect(typeof result.current.isNavigating).toBe('boolean');
  });
}); 