'use client';

import styles from './CTA.module.css';
import { Icon } from '@/components/ui/Icon';
import { useFadeIn } from '@/lib/useFadeIn';

export function CTA() {
  const ref = useFadeIn(0.2);

  return (
    <section id="cta" className={styles.section}>
      <div className="container">
        <div className={`${styles.inner} fade-in`} ref={ref}>
          <h2 className={styles.headline}>
            ¿Cuánto te cuesta
            <br />
            no automatizar esto?
          </h2>
          <p className={styles.sub}>
            Una conversación de 30 minutos para entender tu problema.
            <br />
            Sin compromiso, sin pitch, sin deck.
          </p>
          <a
            href="https://wa.me/56998290823"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            <Icon name="whatsapp" size={22} />
            Hablar con un humano ahora
          </a>
          <span className={styles.number}>
            o escríbenos directo:&nbsp;
            <a href="https://wa.me/56998290823" target="_blank" rel="noopener noreferrer">
              +56 9 9829 0823
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
