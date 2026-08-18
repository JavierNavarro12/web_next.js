import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Cancelar suscripción',
  description: 'Cancela tu suscripción a la newsletter de AIFinder.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
