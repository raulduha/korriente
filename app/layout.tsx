import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import '@/styles/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Korriente — automatización · inteligencia · flujo',
  description:
    'Automatizamos los procesos operacionales que más tiempo y plata te cuestan. Piloto en producción en 8 semanas, con métricas reales desde el día uno.',
  keywords: ['automatización', 'inteligencia artificial', 'IA', 'Chile', 'LATAM', 'n8n', 'LangChain'],
  openGraph: {
    title: 'Korriente — IA que funciona. Resultados medibles desde el día uno.',
    description:
      'Automatizamos los procesos que más te cuestan. Piloto funcionando en 8 semanas, con retorno medido en pesos reales.',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
