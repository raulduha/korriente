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
              IA que funciona.
              <br />
              <span className={styles.accent}>Sin decks.</span>
              <br />
              Sin esperar meses.
            </h1>
            <p className={`${styles.sub} fade-in visible`} style={{ transitionDelay: '0.2s' }}>
              Implementamos automatización e inteligencia artificial en tu empresa en semanas, no
              meses. Sin consultoras caras, sin PowerPoints, sin transformación digital de fantasía.
            </p>
            <div className={`${styles.actions} fade-in visible`} style={{ transitionDelay: '0.3s' }}>
              <a
                href="https://wa.me/56998290823"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <Icon name="whatsapp" size={18} />
                Hablemos por WhatsApp
              </a>
              <a href="#services" className={styles.btnSecondary}>
                Ver servicios
                <Icon name="arrowRight" size={16} />
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
