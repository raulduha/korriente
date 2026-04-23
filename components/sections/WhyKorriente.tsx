'use client';

import styles from './WhyKorriente.module.css';
import { Icon } from '@/components/ui/Icon';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const them = [
  {
    title: 'Meses de descubrimiento',
    desc: 'Workshops de 3 meses antes de tocar una sola línea de código.',
  },
  {
    title: 'Precio de consultoría grande',
    desc: 'Equipos de 8 personas con seniority de papel y costos de boutique.',
  },
  {
    title: 'Stack legacy o propio',
    desc: 'Te amarran a su plataforma. Si te vas, pierdes todo.',
  },
  {
    title: 'Decks, decks y más decks',
    desc: 'Entregables en PowerPoint que nadie lee y no mueven nada.',
  },
];

const us = [
  {
    title: 'Piloto en 2–4 semanas',
    desc: 'Diagnóstico rápido, priorización honesta, build desde el día 1.',
  },
  {
    title: 'Precio de equipo interno',
    desc: 'Un equipo pequeño y senior que factura por resultado, no por hora.',
  },
  {
    title: 'Stack moderno y abierto',
    desc: 'n8n, LangChain, modelos open-source. Tu stack, tu control.',
  },
  {
    title: 'Cero PowerPoints',
    desc: 'Solo código funcionando, métricas y conversaciones en WhatsApp.',
  },
];

export function WhyKorriente() {
  const headerRef = useFadeIn();

  return (
    <section id="why" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>Por qué Korriente</div>
          <h2 className={styles.title}>
            Un equipo técnico, no una consultora.
          </h2>
          <p className={styles.sub}>
            La diferencia está en cómo trabajamos, qué entregamos, y a quién le pertenece el resultado.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.col}>
            <FadeIn threshold={0.1}>
              <div className={`${styles.colHeader} ${styles.colHeaderLeft}`}>Consultoras tradicionales</div>
            </FadeIn>
            {them.map((row, i) => (
              <FadeIn key={i} delay={i * 0.05} threshold={0.05}>
                <div className={styles.row}>
                  <div className={`${styles.rowIcon} ${styles.iconBad}`}>
                    <Icon name="close" size={16} />
                  </div>
                  <div className={styles.rowText}>
                    <strong>{row.title}</strong>
                    <span>{row.desc}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className={styles.col}>
            <FadeIn threshold={0.1}>
              <div className={`${styles.colHeader} ${styles.colHeaderRight}`}>Korriente</div>
            </FadeIn>
            {us.map((row, i) => (
              <FadeIn key={i} delay={i * 0.05} threshold={0.05}>
                <div className={styles.row}>
                  <div className={`${styles.rowIcon} ${styles.iconGood}`}>
                    <Icon name="check" size={16} />
                  </div>
                  <div className={styles.rowText}>
                    <strong>{row.title}</strong>
                    <span>{row.desc}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
