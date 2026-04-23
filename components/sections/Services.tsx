'use client';

import styles from './Services.module.css';
import { Icon } from '@/components/ui/Icon';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const services = [
  {
    icon: 'messageCircle' as const,
    title: 'Bots y agentes conversacionales',
    pain: 'Tu equipo responde lo mismo 50 veces al día.',
    desc: 'Agentes para WhatsApp, email y voz que resuelven consultas, califican leads y escalan solo cuando es necesario.',
  },
  {
    icon: 'fileText' as const,
    title: 'Procesamiento de documentos',
    pain: 'Tu contadora pasa 3 horas al día transcribiendo facturas.',
    desc: 'Extracción y registro automático de facturas, contratos e informes. Directo a tu ERP o sistema contable.',
  },
  {
    icon: 'trendingUp' as const,
    title: 'Inteligencia predictiva',
    pain: 'No sabes qué va a pasar con la demanda el próximo mes.',
    desc: 'Forecasting de demanda, scoring de leads, detección de anomalías y fraude con modelos entrenados en tus datos.',
  },
  {
    icon: 'brain' as const,
    title: 'Copilotos internos RAG',
    pain: 'El conocimiento de tu empresa está disperso y nadie lo usa.',
    desc: 'Convertimos tu Drive, Notion y Slack en un asistente que responde al instante con información precisa y actualizada.',
  },
  {
    icon: 'git' as const,
    title: 'Automatización clásica sin IA',
    pain: 'Tus sistemas no se hablan entre sí.',
    desc: 'Integraciones entre CRM, ERP, SII y ecommerce usando n8n y webhooks. Sin código, sin consultoras, sin esperas.',
  },
  {
    icon: 'eye' as const,
    title: 'IA con visión',
    pain: 'Revisar imágenes de producto toma horas cada semana.',
    desc: 'Análisis automático de imágenes de producto, inventario y generación de contenido visual a escala.',
  },
  {
    icon: 'shield' as const,
    title: 'IA soberana on-premise',
    pain: 'Tus datos no pueden salir del perímetro.',
    desc: 'Modelos instalados en tu infraestructura con cumplimiento de la Ley 21.719. Sin dependencia de APIs externas.',
  },
];

export function Services() {
  const headerRef = useFadeIn();

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>Servicios</div>
          <h2 className={styles.title}>
            Problemas concretos.
            <br />
            Soluciones que se miden.
          </h2>
          <p className={styles.sub}>Siete áreas de implementación. Ningún PowerPoint incluido.</p>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <FadeIn key={i} delay={Math.min((i % 3) * 0.1, 0.3)} threshold={0.05}>
              <div className={styles.card}>
                <div className={styles.icon}>
                  <Icon name={s.icon} size={18} />
                </div>
                <div className={styles.cardTitle}>{s.title}</div>
                <div className={styles.pain}>{s.pain}</div>
                <div className={styles.desc}>{s.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
