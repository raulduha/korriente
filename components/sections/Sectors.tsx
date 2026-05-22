'use client';

import styles from './Sectors.module.css';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const sectors = [
  {
    icon: '◆',
    name: 'Operaciones con alta carga documental',
    subtitle: 'Inspecciones, contratos, reportes regulatorios',
    pain: 'Cada operación genera documentos que alguien tiene que leer, clasificar y traspasar. El error humano es inevitable y el tiempo perdido, medible.',
    tags: ['Compliance', 'Trazabilidad', 'Automatización'],
  },
  {
    icon: '◆',
    name: 'Coordinación entre múltiples equipos o partes',
    subtitle: 'Aprobaciones lentas, información dispersa',
    pain: 'La información vive en silos. Correos, planillas y sistemas que no se hablan entre sí generan reprocesos y decisiones tardías.',
    tags: ['Workflows', 'Integración', 'Visibilidad'],
  },
  {
    icon: '◆',
    name: 'Procesos críticos con baja tolerancia al error',
    subtitle: 'Donde un fallo tiene costo real',
    pain: 'Hay procesos donde equivocarse cuesta caro — en tiempo, en dinero o en reputación. La IA actúa como segunda revisión que no se cansa ni se distrae.',
    tags: ['Calidad', 'Auditoría', 'Gestión de riesgo'],
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
            Dónde generamos más impacto.
          </h2>
          <p className={styles.sub}>
            No trabajamos con cualquier empresa. Buscamos operaciones donde la IA resuelve un problema real,
            medible y que le importa a quien decide.
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
                  <div className={styles.blockLabel}>El problema</div>
                  <p className={styles.blockText}>{s.pain}</p>
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
