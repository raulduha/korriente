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
        <span
          style={{
            fontSize: 320,
            fontWeight: 900,
            color: '#2563eb',
            lineHeight: 1,
          }}
        >
          K
        </span>
      </div>
    ),
    { ...size }
  );
}
