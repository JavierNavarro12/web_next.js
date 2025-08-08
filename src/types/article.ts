export type Article = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: 'spotlight' | 'comparisons' | 'news' | 'creator-stories' | 'tips';
  categoryLabel: string;
  date: string;
  readTime?: string;
  author?: string;
  authorImage?: string;
  url?: string;
  featured?: boolean;
  contentSections?: Array<{
    title?: string;
    paragraphs?: string[];
    bullets?: string[];
    image?: string;
    video?: { src: string; type?: string };
  }>;
};

export type ArticleCategory = {
  id: 'all' | 'spotlight' | 'comparisons' | 'news' | 'creator-stories' | 'tips';
  name: string;
  description?: string;
};
