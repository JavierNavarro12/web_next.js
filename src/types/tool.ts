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

export type ComparisonSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
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
  sections?: ComparisonSection[];
  faqs: ToolFaq[];
};

export type PricingPlan = {
  name: string;
  price: string;
  notes?: string;
};

/**
 * Precios verificados en la web oficial de la herramienta.
 * Solo existen para las herramientas que hemos podido comprobar:
 * el resto se queda con el pricingNote cualitativo de su ficha.
 */
export type ToolPricing = {
  name: string;
  model: 'free' | 'freemium' | 'paid' | 'open-source';
  freeTier: string | null;
  plans: PricingPlan[];
  notes: string;
  sourceUrl: string;
};
