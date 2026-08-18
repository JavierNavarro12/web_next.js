import { findToolMention } from '../toolMention';
import { getArticleToolLinks } from '../articleToolLinks';
import type { Article } from '../../types/article';

describe('findToolMention', () => {
  it('encuentra el nombre con límites de palabra', () => {
    expect(findToolMention('Prueba ChatGPT hoy', 'ChatGPT')).toBe(7);
  });

  it('no casa dentro de otra palabra', () => {
    expect(findToolMention('ChatGPTs no cuenta', 'ChatGPT')).toBe(-1);
  });

  it('es sensible a mayúsculas (veo ≠ Veo)', () => {
    expect(findToolMention('ya veo la diferencia', 'Veo')).toBe(-1);
  });

  it('acepta nombres con puntos', () => {
    expect(findToolMention('Usa Copy.ai para textos', 'Copy.ai')).toBe(4);
  });

  it('acepta el nombre seguido de puntuación', () => {
    expect(findToolMention('Con Claude, todo mejora', 'Claude')).toBe(4);
  });
});

describe('getArticleToolLinks', () => {
  const baseArticle: Article = {
    id: 'test',
    slug: 'test',
    title: 'Test',
    description: 'desc',
    image: '/test.webp',
    category: 'tips',
    categoryLabel: 'Consejos',
    date: '19 Ago 2026',
    readTime: '1 min',
    contentSections: [
      {
        paragraphs: ['ChatGPT y Claude dominan el mercado.'],
        bullets: ['Midjourney genera imágenes.'],
      },
    ],
  } as Article;

  it('mapea solo herramientas publicadas mencionadas en el cuerpo', () => {
    const links = getArticleToolLinks(baseArticle);
    expect(links['ChatGPT']).toBe('chatgpt');
    expect(links['Claude']).toBe('claude');
    expect(links['Midjourney']).toBe('midjourney');
    expect(links['Gemini']).toBeUndefined();
  });

  it('devuelve vacío sin secciones', () => {
    expect(getArticleToolLinks({ ...baseArticle, contentSections: undefined })).toEqual({});
  });
});
