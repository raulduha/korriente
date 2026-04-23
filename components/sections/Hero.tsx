'use client';

import styles from './Hero.module.css';
import { Icon } from '@/components/ui/Icon';

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={`${styles.eyebrow} fade-in visible`}>
              automatización · inteligencia · flujo
            </div>
            <h1
              className={`${styles.headline} fade-in visible`}
              style={{ transitionDelay: '0.1s' }}
            >
              Automatización real.<br />
              Resultados <span className={styles.accent}>medibles.</span><br />
              En semanas.
            </h1>
            <p className={`${styles.sub} fade-in visible`} style={{ transitionDelay: '0.2s' }}>
              Somos el equipo técnico que tu empresa necesita pero no puede contratar. Implementamos
              IA con tus datos reales, medimos cada peso ahorrado, y entregamos resultados en
              semanas — no en meses.
            </p>
            <div className={`${styles.actions} fade-in visible`} style={{ transitionDelay: '0.3s' }}>
              <a href="#how" className={styles.btnPrimary}>
                Ver cómo funciona <Icon name="arrowRight" size={16} />
              </a>
              <a
                href="https://wa.me/56998290823"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <Icon name="whatsapp" size={16} /> Escribir por WhatsApp
              </a>
            </div>
          </div>

          <div className={`${styles.visual} fade-in visible`} style={{ transitionDelay: '0.4s' }}>
            <div className={styles.visualInner}>
              <div className={styles.gridBg} />
              <div className={styles.flowLines} />
              <div className={`${styles.orb} ${styles.orb1}`} />
              <div className={`${styles.orb} ${styles.orb2}`} />
              <div className={`${styles.orb} ${styles.orb3}`} />
              <div className={styles.badge}>
                <div className={styles.badgeDot} />
                <div className={styles.badgeText}>
                  <strong>Piloto activo</strong> — Semana 3 de 4
                </div>
              </div>
              <div className={styles.badge2}>
                <div className={styles.badge2Label}>TIEMPO AHORRADO</div>
                <div className={styles.badge2Value}>23h</div>
                <div className={styles.badge2Sub}>esta semana · +18% vs ant.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
