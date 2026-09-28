import { toolBatches } from '../publishing';
import { getAllTools, getToolDetail } from '../../utils/tools';

const batchNames = toolBatches.flat();
const catalogNames = new Set(getAllTools().map((tool) => tool.name));

describe('tandas de publicación', () => {
  it('cada herramienta de una tanda existe en el catálogo', () => {
    expect(batchNames.filter((name) => !catalogNames.has(name))).toEqual([]);
  });

  it('cada herramienta de una tanda tiene ficha', () => {
    expect(batchNames.filter((name) => getToolDetail(name) === undefined)).toEqual([]);
  });

  it('ninguna herramienta está en dos tandas', () => {
    expect(batchNames.filter((name, index) => batchNames.indexOf(name) !== index)).toEqual([]);
  });

  it('toda herramienta del catálogo pertenece a una tanda', () => {
    expect([...catalogNames].filter((name) => !batchNames.includes(name))).toEqual([]);
  });
});
