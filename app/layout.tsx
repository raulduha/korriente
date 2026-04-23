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
    'Implementamos automatización e inteligencia artificial en tu empresa en semanas, no meses. Sin consultoras caras, sin PowerPoints, sin transformación digital de fantasía.',
  keywords: ['automatización', 'inteligencia artificial', 'IA', 'Chile', 'LATAM', 'n8n', 'LangChain'],
  openGraph: {
    title: 'Korriente — IA que funciona. Sin decks. Sin esperar meses.',
    description:
      'Automatización e IA para empresas en semanas, no meses. Sin consultoras, sin PowerPoints.',
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
