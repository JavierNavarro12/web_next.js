import { ImageResponse } from 'next/og';
import { articles } from '../../../data/articles';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  const title = article?.title || 'Artículo | AIFinder';
  const subtitle = article?.description || 'Reseñas y comparativas de herramientas de IA';

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
          background: '#000',
          color: '#fff',
          padding: '72px',
          fontFamily: 'Inter, ui-sans-serif, system-ui',
        }}
      >
        <div style={{ fontSize: 36, color: '#a1a1aa', marginBottom: 16 }}>AIFinder · Artículos</div>
        <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: -0.5, maxWidth: 950 }}>
          {title}
        </div>
        <div
          style={{ fontSize: 28, color: '#d4d4d8', maxWidth: 900, lineHeight: 1.35, marginTop: 16 }}
        >
          {subtitle}
        </div>
        <div style={{ position: 'absolute', right: 48, bottom: 36, color: '#a1a1aa' }}>
          aifinder.es
        </div>
      </div>
    ),
    { ...size },
  );
}
