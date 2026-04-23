import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Korriente';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial Black, Arial, sans-serif',
        }}
      >
        {/* Logo badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            background: '#111111',
            borderRadius: 24,
            border: '2px solid #1e3a6e',
            marginBottom: 36,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: '#2563eb',
              lineHeight: 1,
            }}
          >
            K
          </span>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-3px',
            marginBottom: 20,
          }}
        >
          Korriente
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#06b6d4',
            letterSpacing: 1,
          }}
        >
          automatización · inteligencia · flujo
        </div>
      </div>
    ),
    { ...size }
  );
}
