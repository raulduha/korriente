'use client';

import styles from './Problem.module.css';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const columns = [
  {
    stat: '90%',
    text: 'de los proyectos de IA en pymes no se usan a los 6 meses de implementados.',
    source: 'McKinsey, 2023',
  },
  {
    stat: '→',
    text: 'El error no es la IA. Es venderla antes de entender el problema.',
    highlight: true,
  },
  {
    stat: '01',
    text: 'Korriente empieza por el diagnóstico, no por la herramienta.',
    source: 'Siempre.',
  },
];

export function Problem() {
  const headerRef = useFadeIn();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>El problema</div>
          <h2 className={styles.title}>
            La mayoría de los proyectos de IA fracasan.<br />
            No por la tecnología.
          </h2>
        </div>

        <div className={styles.grid}>
          {columns.map((col, i) => (
            <FadeIn key={i} delay={i * 0.12} threshold={0.1}>
              <div className={`${styles.col} ${col.highlight ? styles.colHighlight : ''}`}>
                <div className={styles.stat}>{col.stat}</div>
                <p className={styles.text}>{col.text}</p>
                {col.source && (
                  <div className={styles.source}>{col.source}</div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
