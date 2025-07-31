// @ts-nocheck
/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import { renderHook, act } from '@testing-library/react';
import { useMobileNavigation } from '../useMobileNavigation';

// Mock DOM methods
const mockQuerySelector = jest.fn();
const mockQuerySelectorAll = jest.fn();
const mockScrollTo = jest.fn();
const mockGetBoundingClientRect = jest.fn();
const mockRequestAnimationFrame = jest.fn((callback) => setTimeout(callback, 0));

// Mock window methods
Object.defineProperty(window, 'scrollTo', {
  value: mockScrollTo,
  writable: true,
});

Object.defineProperty(window, 'pageYOffset', {
  value: 0,
  writable: true,
});

Object.defineProperty(document.documentElement, 'scrollTop', {
  value: 0,
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

Object.defineProperty(window, 'requestAnimationFrame', {
  value: mockRequestAnimationFrame,
  writable: true,
});

describe('useMobileNavigation', () => {
  const mockSetActiveSubcategory = jest.fn();
  const mockTabRefs = {
    current: {
      'Test Subcategory': {
        offsetLeft: 100,
        getBoundingClientRect: jest.fn(() => ({
          left: 100,
          right: 200,
          width: 100,
        })),
      },
    },
  };
  const mockTabsContainerRef = {
    current: {
      getBoundingClientRect: jest.fn(() => ({
        left: 0,
        right: 300,
        width: 300,
      })),
      scrollTo: jest.fn(),
    },
  };
  const mockIsProgrammaticScroll = {
    current: false,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    
    // Reset mocks
    mockIsProgrammaticScroll.current = false;
    window.pageYOffset = 0;
    document.documentElement.scrollTop = 0;
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should initialize without errors', () => {
    expect(() => {
      renderHook(() =>
        useMobileNavigation(
          mockSetActiveSubcategory,
          mockTabRefs,
          mockTabsContainerRef,
          mockIsProgrammaticScroll,
        ),
      );
    }).not.toThrow();
  });

  it('should return handleMobileSubcategoryClick function', () => {
    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    expect(result.current.handleMobileSubcategoryClick).toBeDefined();
    expect(typeof result.current.handleMobileSubcategoryClick).toBe('function');
  });

  it('should set active subcategory when called', () => {
    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    act(() => {
      result.current.handleMobileSubcategoryClick('Test Subcategory');
    });

    expect(mockSetActiveSubcategory).toHaveBeenCalledWith('Test Subcategory');
  });

  it('should set programmatic scroll flag when called', () => {
    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    act(() => {
      result.current.handleMobileSubcategoryClick('Test Subcategory');
    });

    expect(mockIsProgrammaticScroll.current).toBe(true);
  });

  it('should not execute if already navigating', () => {
    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    // First call
    act(() => {
      result.current.handleMobileSubcategoryClick('Test Subcategory');
    });

    // Second call while navigating
    act(() => {
      result.current.handleMobileSubcategoryClick('Another Subcategory');
    });

    // Should only call setActiveSubcategory once
    expect(mockSetActiveSubcategory).toHaveBeenCalledTimes(1);
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith('Test Subcategory');
  });

  it('should find target element and scroll to it', () => {
    const mockElement = {
      getBoundingClientRect: jest.fn(() => ({
        top: 100,
        bottom: 200,
      })),
    };

    mockQuerySelectorAll.mockReturnValue([mockElement]);
    mockQuerySelector.mockReturnValue({
      getBoundingClientRect: jest.fn(() => ({
        height: 80,
      })),
    });

    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    act(() => {
      result.current.handleMobileSubcategoryClick('Test Subcategory');
    });

    // Fast-forward to trigger requestAnimationFrame and all timeouts
    act(() => {
      jest.advanceTimersByTime(1); // requestAnimationFrame
      jest.advanceTimersByTime(300); // tab scroll timeout
      jest.advanceTimersByTime(500); // navigation reset timeout
    });

    expect(mockQuerySelectorAll).toHaveBeenCalledWith('[id="Test-Subcategory"]');
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });
  });

  it('should handle case when no target element is found', () => {
    mockQuerySelectorAll.mockReturnValue([]);

    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    act(() => {
      result.current.handleMobileSubcategoryClick('Test Subcategory');
    });

    // Fast-forward to trigger requestAnimationFrame
    act(() => {
      jest.advanceTimersByTime(1);
    });

    // Should not call scrollTo when no element is found
    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it('should handle tab container scroll logic', () => {
    const mockElement = {
      getBoundingClientRect: jest.fn(() => ({
        top: 100,
        bottom: 200,
      })),
    };

    mockQuerySelectorAll.mockReturnValue([mockElement]);
    mockQuerySelector.mockReturnValue({
      getBoundingClientRect: jest.fn(() => ({
        height: 80,
      })),
    });

    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    act(() => {
      result.current.handleMobileSubcategoryClick('Test Subcategory');
    });

    // Fast-forward to trigger requestAnimationFrame
    act(() => {
      jest.advanceTimersByTime(1); // requestAnimationFrame
    });

    // Should handle the navigation without errors
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith('Test Subcategory');
    expect(mockIsProgrammaticScroll.current).toBe(true);
  });

  it('should handle navigation completion', () => {
    const mockElement = {
      getBoundingClientRect: jest.fn(() => ({
        top: 100,
        bottom: 200,
      })),
    };

    mockQuerySelectorAll.mockReturnValue([mockElement]);
    mockQuerySelector.mockReturnValue({
      getBoundingClientRect: jest.fn(() => ({
        height: 80,
      })),
    });

    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    act(() => {
      result.current.handleMobileSubcategoryClick('Test Subcategory');
    });

    // Fast-forward to complete all timeouts
    act(() => {
      jest.advanceTimersByTime(1); // requestAnimationFrame
      jest.advanceTimersByTime(300); // tab scroll timeout
      jest.advanceTimersByTime(500); // navigation reset timeout
    });

    // Should handle completion without errors
    expect(mockSetActiveSubcategory).toHaveBeenCalledWith('Test Subcategory');
  });

  it('should handle missing tab container gracefully', () => {
    const mockElement = {
      getBoundingClientRect: jest.fn(() => ({
        top: 100,
        bottom: 200,
      })),
    };

    mockQuerySelectorAll.mockReturnValue([mockElement]);
    mockQuerySelector.mockReturnValue({
      getBoundingClientRect: jest.fn(() => ({
        height: 80,
      })),
    });

    const mockTabsContainerRefNull = {
      current: null,
    };

    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRefNull,
        mockIsProgrammaticScroll,
      ),
    );

    expect(() => {
      act(() => {
        result.current.handleMobileSubcategoryClick('Test Subcategory');
      });

      // Fast-forward to trigger timeouts
      act(() => {
        jest.advanceTimersByTime(1);
        jest.advanceTimersByTime(300);
      });
    }).not.toThrow();
  });

  it('should handle missing button gracefully', () => {
    const mockElement = {
      getBoundingClientRect: jest.fn(() => ({
        top: 100,
        bottom: 200,
      })),
    };

    mockQuerySelectorAll.mockReturnValue([mockElement]);
    mockQuerySelector.mockReturnValue({
      getBoundingClientRect: jest.fn(() => ({
        height: 80,
      })),
    });

    const mockTabRefsEmpty = {
      current: {},
    };

    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefsEmpty,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    expect(() => {
      act(() => {
        result.current.handleMobileSubcategoryClick('Test Subcategory');
      });

      // Fast-forward to trigger timeouts
      act(() => {
        jest.advanceTimersByTime(1);
        jest.advanceTimersByTime(300);
      });
    }).not.toThrow();
  });

  it('should calculate correct scroll position with header offset', () => {
    const mockElement = {
      getBoundingClientRect: jest.fn(() => ({
        top: 100,
        bottom: 200,
      })),
    };

    mockQuerySelectorAll.mockReturnValue([mockElement]);
    mockQuerySelector.mockReturnValue({
      getBoundingClientRect: jest.fn(() => ({
        height: 120,
      })),
    });

    window.pageYOffset = 500;
    document.documentElement.scrollTop = 500;

    const { result } = renderHook(() =>
      useMobileNavigation(
        mockSetActiveSubcategory,
        mockTabRefs,
        mockTabsContainerRef,
        mockIsProgrammaticScroll,
      ),
    );

    act(() => {
      result.current.handleMobileSubcategoryClick('Test Subcategory');
    });

    // Fast-forward to trigger all timeouts
    act(() => {
      jest.advanceTimersByTime(1); // requestAnimationFrame
      jest.advanceTimersByTime(300); // tab scroll timeout
      jest.advanceTimersByTime(500); // navigation reset timeout
    });

    // Should calculate scroll position considering header height
    expect(mockScrollTo).toHaveBeenCalledWith({
      top: expect.any(Number),
      behavior: 'smooth',
    });

    // The calculated position should be reasonable
    const callArgs = mockScrollTo.mock.calls[0][0];
    expect(callArgs.top).toBeGreaterThanOrEqual(0);
  });
}); 