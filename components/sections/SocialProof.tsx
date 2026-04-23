'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './SocialProof.module.css';

function CountUp({ target, duration = 1400 }: { target: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const begin = Date.now();
          const tick = () => {
            const elapsed = Date.now() - begin;
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={spanRef}>{val}</span>;
}

const items = [
  {
    numNode: <><CountUp target={8} /><span className={styles.unit}> sem</span></>,
    title: 'Piloto en producción',
    desc: 'Tiempo promedio desde el diagnóstico hasta una solución funcionando con tus datos reales.',
    accent: false,
  },
  {
    numNode: <><span>3–10</span><span className={styles.unit}>×</span></>,
    title: 'Retorno en el primer año',
    desc: 'Relación entre la inversión en automatización y el ahorro medido en tiempo y costos.',
    accent: true,
  },
  {
    numNode: <><CountUp target={100} /><span className={styles.unit}>%</span></>,
    title: 'Proyectos con métricas',
    desc: 'Definimos indicadores antes de empezar. Siempre sabes exactamente cuánto se ahorra.',
    accent: false,
  },
  {
    numNode: <><span>LATAM</span></>,
    title: 'Operación regional',
    desc: 'Clientes en Chile, Argentina y Colombia. Experiencia con entornos regulatorios locales.',
    accent: false,
  },
];

export function SocialProof() {
  return (
    <div id="social-proof" className={styles.section}>
      <div className={styles.topLine} />
      <div className="container">
        <div className={styles.label}>Lo que distingue a Korriente</div>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={`${styles.item} ${item.accent ? styles.accent : ''}`}>
              <div className={styles.num}>{item.numNode}</div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomLine} />
    </div>
  );
}
