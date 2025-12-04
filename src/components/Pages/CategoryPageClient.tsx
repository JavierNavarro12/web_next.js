'use client';

import HomeContainer from '../views/HomeContainer';

type CategoryPageClientProps = {
  categoryName: string;
  subcategoryName?: string;
};

export default function CategoryPageClient({
  categoryName,
  subcategoryName,
}: CategoryPageClientProps) {
  return <HomeContainer initialCategory={categoryName} initialSubcategory={subcategoryName} />;
}
