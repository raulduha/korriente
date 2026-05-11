'use client';

import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={`${styles.eyebrow} fade-in visible`}>
              consultora b2b de ia · santiago, chile
            </div>
            <h1
              className={`${styles.headline} fade-in visible`}
              style={{ transitionDelay: '0.1s' }}
            >
              Diagnóstico de IA para tu empresa,{' '}
              <span className={styles.accent}>no demos de chatbots.</span>
            </h1>
            <p className={`${styles.sub} fade-in visible`} style={{ transitionDelay: '0.2s' }}>
              Auditamos tu operación, identificamos dónde la IA recupera tiempo y
              plata medible, e implementamos solo lo que tiene ROI.
            </p>
            <div className={`${styles.actions} fade-in visible`} style={{ transitionDelay: '0.3s' }}>
              <a href="#contacto" className={styles.btnPrimary}>
                Agendar diagnóstico
              </a>
              <a href="#como" className={styles.btnSecondary}>
                Cómo trabajamos
              </a>
            </div>
          </div>

          <div className={`${styles.visual} fade-in visible`} style={{ transitionDelay: '0.35s' }}>
            <div className={styles.diagram}>
              <svg
                viewBox="0 0 340 290"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.svg}
                aria-label="Diagrama de las 3 capas: Sistemas, Equipo e IA"
              >
                {/* IA Layer — top, narrowest */}
                <rect
                  x="80" y="12" width="180" height="68" rx="12"
                  fill="rgba(31,78,121,0.08)" stroke="#1F4E79" strokeWidth="1.5"
                  className={styles.layer3}
                />
                <text x="170" y="38" textAnchor="middle" fill="#1F4E79" fontSize="10"
                  fontWeight="600" letterSpacing="1.5" fontFamily="monospace">
                  CAPA 3
                </text>
                <text x="170" y="60" textAnchor="middle" fill="#0F172A" fontSize="17"
                  fontWeight="700">
                  IA
                </text>
                <circle cx="234" cy="36" r="5" fill="rgba(194,65,12,0.15)" stroke="#C2410C"
                  strokeWidth="1.2" className={styles.dot3} />

                {/* Arrow up from Equipo to IA */}
                <line x1="170" y1="84" x2="170" y2="108"
                  stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 3"/>
                <polygon points="165,108 170,116 175,108" fill="#CBD5E1"/>

                {/* Equipo Layer — middle */}
                <rect
                  x="30" y="120" width="280" height="68" rx="12"
                  fill="rgba(31,78,121,0.05)" stroke="#1F4E79" strokeWidth="1.5"
                  className={styles.layer2}
                />
                <text x="170" y="146" textAnchor="middle" fill="#1F4E79" fontSize="10"
                  fontWeight="600" letterSpacing="1.5" fontFamily="monospace">
                  CAPA 2
                </text>
                <text x="170" y="168" textAnchor="middle" fill="#0F172A" fontSize="17"
                  fontWeight="700">
                  Equipo
                </text>

                {/* Arrow up from Sistemas to Equipo */}
                <line x1="170" y1="192" x2="170" y2="216"
                  stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 3"/>
                <polygon points="165,216 170,224 175,216" fill="#CBD5E1"/>

                {/* Sistemas Layer — bottom, widest */}
                <rect
                  x="2" y="228" width="336" height="56" rx="12"
                  fill="rgba(31,78,121,0.03)" stroke="#1F4E79" strokeWidth="1.5"
                  className={styles.layer1}
                />
                <text x="170" y="252" textAnchor="middle" fill="#1F4E79" fontSize="10"
                  fontWeight="600" letterSpacing="1.5" fontFamily="monospace">
                  CAPA 1
                </text>
                <text x="170" y="273" textAnchor="middle" fill="#0F172A" fontSize="17"
                  fontWeight="700">
                  Sistemas
                </text>
              </svg>

              <div className={styles.captions}>
                <div className={styles.caption}>
                  <span className={styles.captionNum}>01</span>
                  <div>
                    <strong>Sistemas</strong>
                    <span>Dónde vive tu información</span>
                  </div>
                </div>
                <div className={styles.caption}>
                  <span className={styles.captionNum}>02</span>
                  <div>
                    <strong>Equipo</strong>
                    <span>Cómo trabaja tu gente</span>
                  </div>
                </div>
                <div className={styles.caption}>
                  <span className={styles.captionNum}>03</span>
                  <div>
                    <strong>IA</strong>
                    <span>Solo cuando la base está lista</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
