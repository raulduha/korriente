'use client';

import styles from './HowWeWork.module.css';
import { Icon } from '@/components/ui/Icon';
import { useFadeIn } from '@/lib/useFadeIn';

const steps = [
  {
    icon: 'search' as const,
    num: '01',
    name: 'Diagnóstico',
    desc: 'Una sesión de trabajo para mapear procesos, identificar el mayor dolor y definir el alcance exacto del piloto.',
    badge: '1–2 días',
  },
  {
    icon: 'zap' as const,
    num: '02',
    name: 'Piloto',
    desc: 'Construimos la solución funcional sobre tus datos reales. Nada de demos, nada de sandbox.',
    badge: '2–4 semanas',
  },
  {
    icon: 'gauge' as const,
    num: '03',
    name: 'Medición',
    desc: 'Definimos métricas antes de empezar. Al final del piloto sabes exactamente cuánto tiempo y dinero se ahorra.',
    badge: 'Semana 4–5',
  },
  {
    icon: 'trendingUp' as const,
    num: '04',
    name: 'Escala',
    desc: 'Si los números cierran, expandimos. Si no, te decimos por qué y qué ajustar. Sin contratos de meses.',
    badge: 'Mes 2+',
  },
];

export function HowWeWork() {
  const headerRef = useFadeIn();
  const timelineRef = useFadeIn(0.1);

  return (
    <section id="how" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>Proceso</div>
          <h2 className={styles.title}>
            De diagnóstico a resultado
            <br />
            en menos de 8 semanas.
          </h2>
          <p className={styles.sub}>Piloto funcionando o te devolvemos el dinero. Así de simple.</p>
        </div>
        <div className={`${styles.timeline} fade-in`} ref={timelineRef}>
          {steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.dot}>
                <Icon name={step.icon} size={20} />
              </div>
              <div className={styles.stepNum}>PASO {step.num}</div>
              <div className={styles.stepName}>{step.name}</div>
              <div className={styles.stepDesc}>{step.desc}</div>
              <span className={styles.badge}>{step.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
