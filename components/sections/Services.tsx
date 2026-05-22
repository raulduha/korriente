'use client';

import styles from './Services.module.css';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const products = [
  {
    num: '01',
    name: 'Diagnóstico Express',
    forWho: 'Para empresas que saben que tienen que usar IA pero no saben por dónde.',
    duration: '3–5 días hábiles',
    deliverables: [
      '3 oportunidades de IA priorizadas por ROI',
      'Roadmap de implementación a 90 días',
      'Estimación de inversión y retorno',
      'Sesión de presentación de hallazgos (1.5h)',
    ],
    cta: 'Conversemos',
  },
  {
    num: '02',
    name: 'Implementación',
    forWho: 'Para quienes ya tienen el diagnóstico y quieren ejecutar.',
    duration: '4–12 semanas',
    deliverables: [
      'Sistema funcionando con tus datos reales',
      'Integraciones con tus herramientas actuales',
      'Capacitación al equipo operativo',
      '30 días de soporte post go-live',
    ],
    cta: 'Conversemos',
    featured: true,
  },
  {
    num: '03',
    name: 'Retainer mensual',
    forWho: 'Para clientes con implementación viva que necesitan evolución continua.',
    duration: 'Contrato mensual, renovación trimestral',
    deliverables: [
      'Mejora continua del sistema implementado',
      'Mantención y monitoreo proactivo',
      'Nuevas iteraciones según aprendizajes',
      'Acceso prioritario al equipo Korriente',
    ],
    cta: 'Conversemos',
  },
];

export function Services() {
  const headerRef = useFadeIn();

  return (
    <section id="servicios" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>Servicios</div>
          <h2 className={styles.title}>
            Tres productos. Sin letra chica.
          </h2>
          <p className={styles.sub}>
            Cada uno alimenta al siguiente. El diagnóstico es el comienzo, no un lead magnet.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1} threshold={0.05}>
              <div className={`${styles.card} ${p.featured ? styles.cardFeatured : ''}`}>
                {p.featured && (
                  <div className={styles.featuredBadge}>Más solicitado</div>
                )}
                <div className={styles.cardTop}>
                  <span className={styles.cardNum}>{p.num}</span>
                  <h3 className={styles.cardName}>{p.name}</h3>
                  <p className={styles.cardForWho}>{p.forWho}</p>
                </div>

                <div className={styles.cardMid}>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Duración</span>
                      <span className={styles.metaValue}>{p.duration}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardBottom}>
                  <div className={styles.deliverablesLabel}>Qué incluye</div>
                  <ul className={styles.deliverables}>
                    {p.deliverables.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                  <a href="#contacto" className={`${styles.cta} ${p.featured ? styles.ctaFeatured : ''}`}>
                    {p.cta}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
