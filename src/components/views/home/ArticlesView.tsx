import React from 'react';
import dynamic from 'next/dynamic';

const ArticlesSection = dynamic(() => import('../../Sections/ArticlesSection'));

export default function ArticlesView() {
  return <ArticlesSection />;
}
