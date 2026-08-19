import { bestOfGuides } from '../best-of';
import { findToolBySlug, toolSlug } from '../../utils/tools';
import { isToolPublished } from '../../utils/publishing';
import { getAllComparisons } from '../../utils/comparisons';

describe('bestOfGuides', () => {
  it('no repite slugs', () => {
    const slugs = bestOfGuides.map((guide) => guide.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(bestOfGuides.flatMap((guide) => guide.items.map((item) => [guide.slug, item.tool])))(
    '%s: la herramienta %s tiene ficha y está publicada',
    (_guideSlug, toolName) => {
      expect(findToolBySlug(toolSlug(toolName))).toBeDefined();
      expect(isToolPublished(toolName)).toBe(true);
    },
  );

  it.each(bestOfGuides.flatMap((guide) => guide.related.map((rel) => [guide.slug, rel.slug])))(
    '%s: la comparativa relacionada %s existe',
    (_guideSlug, comparisonSlug) => {
      expect(getAllComparisons().some((c) => c.slug === comparisonSlug)).toBe(true);
    },
  );
});
