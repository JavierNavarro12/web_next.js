import '@testing-library/jest-dom';

// Configuración global para Jest
// Esto asegura que Jest use sus propios matchers y no los de Cypress

// Mock global para console.warn/error si es necesario
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('ReactDOM.render is no longer supported')) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

// Mock global de next/navigation para tests (useRouter y otros hooks)
jest.mock('next/navigation', () => {
  const actual = jest.requireActual('next/navigation');
  return {
    ...actual,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }),
    usePathname: () => '/',
    useSearchParams: () => ({ get: () => null, toString: () => '' }),
  };
});
