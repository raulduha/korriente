'use client';

import styles from './HowWeWork.module.css';
import { Icon } from '@/components/ui/Icon';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const steps = [
  {
    icon: 'search' as const,
    num: '01',
    name: 'Diagnóstico',
    badge: '1–2 días',
    desc: 'Mapeamos tus procesos en una sesión de trabajo, identificamos el mayor dolor operacional y definimos el alcance exacto del piloto.',
    detail: [
      'Entrevistamos a los equipos que viven el problema a diario',
      'Cuantificamos el tiempo y costo actual del proceso',
      'Priorizamos la solución con mayor retorno esperado',
    ],
  },
  {
    icon: 'zap' as const,
    num: '02',
    name: 'Piloto',
    badge: '2–4 semanas',
    desc: 'Construimos la solución funcional sobre tus datos reales. No hacemos demos genéricos ni sandboxes: el piloto opera en tu entorno desde el día uno.',
    detail: [
      'Conexión directa con tus sistemas (CRM, ERP, Drive, etc.)',
      'Iteraciones semanales con tu equipo para ajustar el comportamiento',
      'Entrega de código limpio y documentado — tuyo, sin dependencias',
    ],
  },
  {
    icon: 'gauge' as const,
    num: '03',
    name: 'Medición',
    badge: 'Semana 4–5',
    desc: 'Definimos los indicadores de éxito antes de empezar. Al terminar el piloto tienes un informe con horas ahorradas, errores eliminados y ahorro en pesos.',
    detail: [
      'Dashboard con métricas en tiempo real durante el piloto',
      'Comparación directa con el estado anterior (línea base)',
      'Informe ejecutivo con retorno calculado sobre la inversión',
    ],
  },
  {
    icon: 'trendingUp' as const,
    num: '04',
    name: 'Escala',
    badge: 'Mes 2+',
    desc: 'Si los números justifican expandir, lo hacemos. Si hay algo que ajustar, te decimos exactamente qué y cómo. Sin contratos de largo plazo ni lock-in.',
    detail: [
      'Expansión a nuevas áreas o volúmenes mayores',
      'Traspaso de conocimiento a tu equipo técnico interno',
      'Soporte continuo o transferencia total según tu preferencia',
    ],
  },
];

export function HowWeWork() {
  const headerRef = useFadeIn();

  return (
    <section id="how" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>Proceso</div>
          <h2 className={styles.title}>
            Del problema al resultado
            <br />
            <span className={styles.accent}>en 8 semanas.</span>
          </h2>
          <p className={styles.sub}>
            Cuatro etapas claras. Cada una con entregables concretos y fechas definidas desde el inicio.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.08} threshold={0.06}>
              <div className={styles.card}>
                <div className={styles.watermark}>{step.num}</div>
                <div className={styles.icon}>
                  <Icon name={step.icon} size={22} />
                </div>
                <div className={styles.badge}>{step.badge}</div>
                <div className={styles.stepName}>{step.name}</div>
                <p className={styles.desc}>{step.desc}</p>
                <div className={styles.detail}>
                  {step.detail.map((d, j) => (
                    <div key={j} className={styles.detailItem}>
                      <div className={styles.detailDot} />
                      <div className={styles.detailText}>{d}</div>
                    </div>
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
