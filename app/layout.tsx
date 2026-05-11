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
  title: 'Korriente — Consultoría de IA para empresas chilenas',
  description:
    'Auditamos tu operación, identificamos dónde la IA recupera tiempo y plata medible, e implementamos solo lo que tiene ROI. Santiago, Chile.',
  keywords: [
    'consultoría IA', 'inteligencia artificial', 'diagnóstico IA', 'automatización',
    'Chile', 'LATAM', 'IA on-premise', 'Mercado Público', 'seguros IA',
  ],
  openGraph: {
    title: 'Korriente — Diagnóstico de IA para tu empresa, no demos de chatbots.',
    description:
      'Auditamos tu operación, identificamos dónde la IA recupera tiempo y plata medible, e implementamos solo lo que tiene ROI.',
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
