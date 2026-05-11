'use client';

import { useState } from 'react';
import styles from './HowWeWork.module.css';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const layers = [
  {
    num: '01',
    name: 'Sistemas',
    tagline: '¿Dónde vive tu información?',
    desc: 'Antes de tocar IA, mapeamos tus sistemas: qué software usas, cómo fluye la data, cuántas versiones de la verdad existen. El 70% de las empresas tienen el problema acá.',
    bullets: [
      '¿Hay una fuente única de verdad o cinco versiones que no calzan?',
      '¿Cuántos sistemas no se hablan? (Defontana, Bsale, Buk, Excel, WhatsApp de ops)',
      '¿Existen datos suficientes para contextualizar una IA? Si no, primero los limpiamos.',
    ],
  },
  {
    num: '02',
    name: 'Equipo',
    tagline: '¿Cómo trabaja tu gente realmente?',
    desc: 'Entrevistamos a los operativos, no a los gerentes. El workaround que nadie documenta pero todo el mundo hace revela más que cualquier PowerPoint de procesos.',
    bullets: [
      '¿Qué hábitos paralelos tienen para sobrevivir? (planillas, grupos no oficiales, archivos personales)',
      '¿Quién es el cuello de botella humano que todos consultan?',
      '¿Qué hacen 10 veces al día y odian? Ahí está el primer piloto.',
    ],
  },
  {
    num: '03',
    name: 'IA',
    tagline: 'Solo cuando las bases están.',
    desc: '"La IA es gasolina. Échala en un buen fuego y obtienes eficiencia enorme. Échala en un mal fuego y solo quemas plata más rápido." Solo llegamos acá cuando las capas 1 y 2 están ordenadas.',
    bullets: [
      'En 70% de los casos el primer valor viene de ordenar datos (capa 1), no de construir un agente.',
      'En 20% el problema es capacitar al equipo (capa 2), no automatizar.',
      'Solo en 10% el problema real es construir el agente. Y aún así, lo cobras como si lo fuera.',
    ],
    warning: true,
  },
];

export function HowWeWork() {
  const headerRef = useFadeIn();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="como" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>Marco de trabajo</div>
          <h2 className={styles.title}>
            Las 3 capas de toda empresa.
            <br />
            <span className={styles.accent}>Nunca empieces por la 3.</span>
          </h2>
          <p className={styles.sub}>
            Todo proyecto de IA que fracasa lo hace porque saltó directamente a construir
            sin entender las capas anteriores.
          </p>
        </div>

        <div className={styles.layers}>
          {layers.map((layer, i) => (
            <FadeIn key={i} delay={i * 0.1} threshold={0.05}>
              <div
                className={`${styles.layer} ${open === i ? styles.layerOpen : ''} ${layer.warning ? styles.layerWarning : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className={styles.layerHeader}>
                  <div className={styles.layerLeft}>
                    <span className={styles.layerNum}>{layer.num}</span>
                    <div>
                      <div className={styles.layerName}>{layer.name}</div>
                      <div className={styles.layerTagline}>{layer.tagline}</div>
                    </div>
                  </div>
                  <div className={`${styles.chevron} ${open === i ? styles.chevronOpen : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {open === i && (
                  <div className={styles.layerBody}>
                    <p className={styles.layerDesc}>{layer.desc}</p>
                    <ul className={styles.layerBullets}>
                      {layer.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
