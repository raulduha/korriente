'use client';

import styles from './Sectors.module.css';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const sectors = [
  {
    icon: '◈',
    name: 'Seguros',
    subtitle: 'Corredoras y liquidadoras',
    pain: 'Tiempo de liquidación de siniestros: 21+ días en promedio. Documentos por email, fotos por WhatsApp, peritos sin sistema unificado.',
    opportunity: 'De 21 a 3 días de ciclo de liquidación es un resultado real, medible y que el cliente paga bien.',
    tags: ['Siniestros', 'Pólizas', 'Liquidadores'],
  },
  {
    icon: '◉',
    name: 'Servicios profesionales',
    subtitle: 'Legal, contable, ingeniería',
    pain: 'Estudios jurídicos buscando jurisprudencia a mano. Contadores conciliando bancos en Excel. Ingenieros revisando bases de licitaciones línea por línea.',
    opportunity: 'Procesos repetibles, propietarios que deciden rápido, alta tolerancia al pago. Ciclo de venta corto.',
    tags: ['Legal', 'Contabilidad', 'Ingeniería'],
  },
  {
    icon: '◎',
    name: 'Sector público',
    subtitle: 'Via Mercado Público',
    pain: 'Municipios y servicios públicos bajo presión política de "usar IA" sin equipo técnico ni presupuesto para las Big 4.',
    opportunity: 'IA Soberana On-Premise: datos que no salen del perímetro. Cumplimiento Ley 19.628. El único argumento que cierra con el sector público.',
    tags: ['Municipios', 'Licitaciones', 'On-Premise'],
  },
];

export function Sectors() {
  const headerRef = useFadeIn();

  return (
    <section id="sectores" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>Sectores</div>
          <h2 className={styles.title}>
            Tres nichos donde operamos.
          </h2>
          <p className={styles.sub}>
            No trabajamos con cualquier empresa. Conocemos el idioma operacional de estos sectores
            y eso se traduce en proyectos que funcionan.
          </p>
        </div>

        <div className={styles.grid}>
          {sectors.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1} threshold={0.05}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap}>{s.icon}</div>
                  <div>
                    <div className={styles.cardName}>{s.name}</div>
                    <div className={styles.cardSub}>{s.subtitle}</div>
                  </div>
                </div>

                <div className={styles.block}>
                  <div className={styles.blockLabel}>El dolor</div>
                  <p className={styles.blockText}>{s.pain}</p>
                </div>

                <div className={`${styles.block} ${styles.blockOpp}`}>
                  <div className={styles.blockLabel}>La oportunidad</div>
                  <p className={styles.blockText}>{s.opportunity}</p>
                </div>

                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag2}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
