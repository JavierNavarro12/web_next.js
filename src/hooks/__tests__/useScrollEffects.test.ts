// @ts-nocheck
/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import { renderHook, act } from '@testing-library/react';
import { useScrollEffects } from '../useScrollEffects';
import { AICategory } from '../../data/ai-tools';

// Mock scrollUtils
jest.mock('../../utils/scrollUtils', () => ({
  detectActiveSection: jest.fn(),
  autoScrollTab: jest.fn(),
}));

// Mock DOM elements
const mockMainElement = {
  scrollTop: 0,
  clientHeight: 800,
  scrollHeight: 2000,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
};

const mockTabRefs = {
  current: {
    'Test Subcategory': document.createElement('button'),
  },
};

const mockTabsContainerRef = {
  current: document.createElement('div'),
};

const mockIsProgrammaticScroll = {
  current: false,
};

// Mock document methods
Object.defineProperty(document, 'querySelector', {
  value: jest.fn((selector) => {
    if (selector === 'main') return mockMainElement;
    if (selector === '.md\\:hidden.fixed') return null;
    return null;
  }),
  writable: true,
});

Object.defineProperty(document, 'getElementById', {
  value: jest.fn((id) => {
    const element = document.createElement('div');
    element.id = id;
    element.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      bottom: 200,
      height: 100,
    }));
    return element;
  }),
  writable: true,
});

// Mock window methods
Object.defineProperty(window, 'innerWidth', {
  value: 1024,
  writable: true,
});

Object.defineProperty(window, 'scrollY', {
  value: 0,
  writable: true,
});

Object.defineProperty(window, 'innerHeight', {
  value: 800,
  writable: true,
});

Object.defineProperty(document.documentElement, 'scrollHeight', {
  value: 2000,
  writable: true,
});

describe('useScrollEffects', () => {
  const mockSetActiveSubcategory = jest.fn();
  const mockSetIsScrolled = jest.fn();

  const mockCategory: AICategory = {
    name: 'Test Category',
    subcategories: [
      {
        name: 'Test Subcategory',
        tools: [
          {
            name: 'Test Tool',
            image: '/test.png',
            description: 'Test description',
            pricing: 'free' as const,
            url: 'https://test.com',
          },
        ],
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();

    // Reset DOM mocks
    mockMainElement.scrollTop = 0;
    mockIsProgrammaticScroll.current = false;
    window.innerWidth = 1024;
    window.scrollY = 0;
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should initialize without errors', () => {
    expect(() => {
      renderHook(() =>
        useScrollEffects(
          mockCategory,
          null,
          mockSetActiveSubcategory,
          mockSetIsScrolled,
          mockIsProgrammaticScroll,
          mockTabRefs,
          mockTabsContainerRef,
        ),
      );
    }).not.toThrow();
  });

  it('should add scroll event listener to main element', () => {
    renderHook(() =>
      useScrollEffects(
        mockCategory,
        null,
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    expect(mockMainElement.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), {
      passive: true,
    });
  });

  it('should add scroll event listener to window when main element is not found', () => {
    // Mock document.querySelector to return null for main
    const originalQuerySelector = document.querySelector;
    document.querySelector = jest.fn(() => null);

    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

    renderHook(() =>
      useScrollEffects(
        mockCategory,
        null,
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function), {
      passive: true,
    });

    // Restore original
    document.querySelector = originalQuerySelector;
    addEventListenerSpy.mockRestore();
  });

  it('should detect scroll and update isScrolled state on desktop', () => {
    window.innerWidth = 1024; // Desktop
    mockMainElement.scrollTop = 50; // Scrolled down

    renderHook(() =>
      useScrollEffects(
        mockCategory,
        null,
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    // Simulate scroll event by calling the event listener directly
    const scrollHandler = mockMainElement.addEventListener.mock.calls[0][1];
    scrollHandler();

    // Fast-forward timers
    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(mockSetIsScrolled).toHaveBeenCalledWith(true);
  });

  it('should not update isScrolled state on mobile', () => {
    window.innerWidth = 375; // Mobile
    mockMainElement.scrollTop = 50;

    renderHook(() =>
      useScrollEffects(
        mockCategory,
        null,
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    // Simulate scroll event by calling the event listener directly
    const scrollHandler = mockMainElement.addEventListener.mock.calls[0][1];
    scrollHandler();

    // Fast-forward timers
    act(() => {
      jest.advanceTimersByTime(100);
    });

    // Should not call setIsScrolled on mobile
    expect(mockSetIsScrolled).not.toHaveBeenCalled();
  });

  it('should not process scroll events when isProgrammaticScroll is true', () => {
    mockIsProgrammaticScroll.current = true;

    renderHook(() =>
      useScrollEffects(
        mockCategory,
        null,
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    // Simulate scroll event by calling the event listener directly
    const scrollHandler = mockMainElement.addEventListener.mock.calls[0][1];
    scrollHandler();

    // Fast-forward timers
    act(() => {
      jest.advanceTimersByTime(100);
    });

    // Should not call any setters when programmatic scroll
    expect(mockSetActiveSubcategory).not.toHaveBeenCalled();
    expect(mockSetIsScrolled).not.toHaveBeenCalled();
  });

  it('should call detectActiveSection when category changes', async () => {
    const { detectActiveSection } = await import('../../utils/scrollUtils');

    renderHook(() =>
      useScrollEffects(
        mockCategory,
        null,
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    expect(detectActiveSection).toHaveBeenCalledWith(mockCategory, mockSetActiveSubcategory);
  });

  it('should call autoScrollTab when activeSubcategory changes', async () => {
    const { autoScrollTab } = await import('../../utils/scrollUtils');

    renderHook(() =>
      useScrollEffects(
        mockCategory,
        'Test Subcategory',
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    expect(autoScrollTab).toHaveBeenCalledWith(
      'Test Subcategory',
      mockTabRefs,
      mockTabsContainerRef,
    );
  });

  it('should not call autoScrollTab when isProgrammaticScroll is true', async () => {
    const { autoScrollTab } = await import('../../utils/scrollUtils');
    mockIsProgrammaticScroll.current = true;

    renderHook(() =>
      useScrollEffects(
        mockCategory,
        'Test Subcategory',
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    expect(autoScrollTab).not.toHaveBeenCalled();
  });

  it('should handle null category gracefully', () => {
    expect(() => {
      renderHook(() =>
        useScrollEffects(
          null,
          null,
          mockSetActiveSubcategory,
          mockSetIsScrolled,
          mockIsProgrammaticScroll,
          mockTabRefs,
          mockTabsContainerRef,
        ),
      );
    }).not.toThrow();
  });

  it('should clean up event listeners on unmount', () => {
    const { unmount } = renderHook(() =>
      useScrollEffects(
        mockCategory,
        null,
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    unmount();

    expect(mockMainElement.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
  });

  it('should handle throttling correctly', () => {
    renderHook(() =>
      useScrollEffects(
        mockCategory,
        null,
        mockSetActiveSubcategory,
        mockSetIsScrolled,
        mockIsProgrammaticScroll,
        mockTabRefs,
        mockTabsContainerRef,
      ),
    );

    // Simulate rapid scroll events by calling the handler multiple times
    const scrollHandler = mockMainElement.addEventListener.mock.calls[0][1];
    scrollHandler();
    scrollHandler();
    scrollHandler();

    // Fast-forward timers
    act(() => {
      jest.advanceTimersByTime(100);
    });

    // Should handle throttling without errors
    expect(mockMainElement.addEventListener).toHaveBeenCalledTimes(1);
  });
});
