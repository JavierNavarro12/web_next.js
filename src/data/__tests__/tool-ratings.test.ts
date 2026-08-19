import { toolRatings } from '../tool-ratings';
import { discontinuedTools } from '../discontinued';
import { getAllTools, getToolDetail } from '../../utils/tools';
import { isToolPublished } from '../../utils/publishing';

const ratedNames = Object.keys(toolRatings);

describe('toolRatings', () => {
  it.each(ratedNames)('%s existe en el catálogo y tiene ficha', (name) => {
    expect(getAllTools().some((tool) => tool.name === name)).toBe(true);
    expect(getToolDetail(name)).toBeDefined();
  });

  it.each(ratedNames)('%s tiene nota entre 1 y 10 con un decimal como mucho', (name) => {
    const rating = toolRatings[name];
    expect(rating).toBeGreaterThanOrEqual(1);
    expect(rating).toBeLessThanOrEqual(10);
    expect(Math.round(rating * 10)).toBeCloseTo(rating * 10);
  });

  it('las herramientas retiradas no llevan nota', () => {
    for (const name of Object.keys(discontinuedTools)) {
      expect(toolRatings[name]).toBeUndefined();
    }
  });

  // Al abrir una tanda nueva en publishing.ts hay que puntuar sus herramientas.
  it('toda herramienta publicada con ficha (y no retirada) tiene nota', () => {
    const missing = getAllTools()
      .filter(
        (tool) =>
          isToolPublished(tool.name) &&
          getToolDetail(tool.name) !== undefined &&
          !discontinuedTools[tool.name] &&
          toolRatings[tool.name] === undefined,
      )
      .map((tool) => tool.name);
    expect(missing).toEqual([]);
  });
});
