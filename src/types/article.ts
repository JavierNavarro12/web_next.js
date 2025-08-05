export type Article = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'spotlight' | 'comparisons' | 'news' | 'creator-stories' | 'tips';
  categoryLabel: string;
  date: string;
  readTime?: string;
  author?: string;
  url?: string;
  featured?: boolean;
};

export type ArticleCategory = {
  id: 'all' | 'spotlight' | 'comparisons' | 'news' | 'creator-stories' | 'tips';
  name: string;
  description?: string;
};
