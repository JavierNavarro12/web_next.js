/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

// Asegurar que los tipos de Jest están disponibles globalmente en archivos de test
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveBeenCalled(): R;
      toHaveBeenCalledWith(...args: any[]): R;
      toHaveBeenCalledTimes(expected: number): R;
      toBe(expected: any): R;
      toEqual(expected: any): R;
      toHaveLength(expected: number): R;
      toContain(expected: any): R;
      toThrow(expected?: any): R;
      toBeGreaterThan(expected: number): R;
      not: Matchers<R>;
    }
  }
}

// Re-exportar tipos necesarios
export {}; 