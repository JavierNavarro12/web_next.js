import { ImageResponse } from 'next/og';
import { aiCategories } from '../../../../data/ai-tools';
import { slugify } from '../../../../utils/slugify';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image({ params }: { params: { slug: string; subcategory: string } }) {
  const category = aiCategories.find((c) => slugify(c.name) === params.slug);
  const subcategory = category?.subcategories.find((s) => slugify(s.name) === params.subcategory);

  const categoryName = category?.name || 'Categoría';
  const subcategoryName = subcategory?.name || 'Subcategoría';
  const toolCount = subcategory?.tools.length || 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'linear-gradient(135deg, #000 0%, #18181b 100%)',
          color: '#fff',
          padding: '72px',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
        }}
      >
        <div style={{ fontSize: 28, color: '#a1a1aa', marginBottom: 12 }}>
          AIFinder · {categoryName}
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1, maxWidth: 950 }}>
          {subcategoryName}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 28,
            fontSize: 26,
            color: '#d4d4d8',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 32, fontWeight: 700, color: '#fff' }}>{toolCount}</span>
          <span>herramientas de IA</span>
        </div>
        <div
          style={{
            position: 'absolute',
            right: 48,
            bottom: 36,
            color: '#a1a1aa',
            fontSize: 24,
          }}
        >
          aifinder.es
        </div>
      </div>
    ),
    { ...size },
  );
}
