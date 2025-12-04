import { ImageResponse } from 'next/og';
import { aiCategories } from '../../../data/ai-tools';
import { slugify } from '../../../utils/slugify';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image({ params }: { params: { slug: string } }) {
  const category = aiCategories.find((c) => slugify(c.name) === params.slug);
  const title = category?.name || 'Categoría';
  const toolCount = category?.subcategories.reduce((acc, sub) => acc + sub.tools.length, 0) || 0;
  const subcategoryCount = category?.subcategories.length || 0;

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
        <div style={{ fontSize: 32, color: '#a1a1aa', marginBottom: 16 }}>AIFinder · Categoría</div>
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1, maxWidth: 950 }}>
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 32,
            fontSize: 28,
            color: '#d4d4d8',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#fff' }}>{toolCount}</span>
            <span>herramientas</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#fff' }}>{subcategoryCount}</span>
            <span>subcategorías</span>
          </div>
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
