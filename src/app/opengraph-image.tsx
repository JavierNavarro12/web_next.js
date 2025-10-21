import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  const title = 'AIFinder';
  const description =
    'Descubre y compara las mejores herramientas de IA por categorías. Reseñas claras y filtros.';

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
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: '#0ea5e9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            AI
          </div>
          <div style={{ fontSize: 42, fontWeight: 800, letterSpacing: -0.5 }}>{title}</div>
        </div>
        <div style={{ fontSize: 28, color: '#d4d4d8', maxWidth: 900, lineHeight: 1.35 }}>
          {description}
        </div>
        <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
          {['Generativa', 'Chatbots', 'Marketing', 'DevTools'].map((chip) => (
            <div
              key={chip}
              style={{
                padding: '8px 14px',
                borderRadius: 999,
                border: '1px solid #27272a',
                background: '#111',
                color: '#e5e7eb',
                fontSize: 20,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', right: 48, bottom: 36, color: '#a1a1aa' }}>
          aifinder.es
        </div>
      </div>
    ),
    { ...size },
  );
}
