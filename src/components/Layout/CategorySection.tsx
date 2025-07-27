'use client';

import React from 'react';

type Props = {
  title: string;
  children: React.ReactNode;
  id?: string;
};

export default function CategorySection({ title, children, id }: Props) {
  return (
    <section className="mb-8" id={id}>
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
    </section>
  );
}
