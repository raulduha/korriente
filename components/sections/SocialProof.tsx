'use client';

import styles from './SocialProof.module.css';
import { useFadeIn } from '@/lib/useFadeIn';

const items = [
  { num: '8 sem', label: 'tiempo promedio de piloto' },
  { num: '3–10×', label: 'ROI en año 1' },
  { num: '100%', label: 'proyectos con medición' },
  { num: 'CL + LATAM', label: 'cobertura de operación' },
];

export function SocialProof() {
  const ref = useFadeIn(0.2);

  return (
    <div id="social-proof" className={styles.wrapper}>
      <div className="container">
        <div className={`${styles.bar} fade-in`} ref={ref}>
          {items.map((item, i) => (
            <div key={i} className={styles.group}>
              {i > 0 && <div className={styles.sep} />}
              <div className={styles.item}>
                <div className={styles.num}>{item.num}</div>
                <div className={styles.label}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
