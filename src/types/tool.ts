export type ToolFaq = {
  question: string;
  answer: string;
};

export type ToolDetail = {
  name: string;
  tagline: string;
  intro: string;
  useCases: string[];
  features: string[];
  pros: string[];
  cons: string[];
  pricingNote: string;
  faqs: ToolFaq[];
};

export type CategoryContent = {
  cat: string;
  title: string;
  intro: string;
  body: string;
  faqs: ToolFaq[];
};

export type SubcategoryContent = {
  cat: string;
  sub: string;
  title: string;
  intro: string;
  body: string;
};

export type Comparison = {
  slug: string;
  a: string;
  b: string;
  title: string;
  intro: string;
  verdict: string;
  table: { headers: string[]; rows: string[][] };
  whenA: string[];
  whenB: string[];
  faqs: ToolFaq[];
};
