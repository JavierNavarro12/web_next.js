'use client';

import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface Props {
  children: React.ReactNode;
  sectionName?: string;
}

/**
 * Error Boundary para secciones individuales
 * Permite que el resto de la app siga funcionando si una sección falla
 */
export function SectionErrorBoundary({ children, sectionName = 'esta sección' }: Props) {
  return (
    <ErrorBoundary
      fallback={
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 text-center my-4">
          <p className="text-zinc-400 text-sm">
            No se pudo cargar {sectionName}. Por favor, intenta recargar la página.
          </p>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}

export default SectionErrorBoundary;
