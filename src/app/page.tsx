import React from 'react';
import HomeContainer from '../components/views/HomeContainer';

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string }>;
}) {
  const sp = (await searchParams) ?? {};
  const q = sp.q ?? '';
  return <HomeContainer initialSearchTerm={q} initialCategory={sp.category || ''} />;
}
