'use client';

import styles from './About.module.css';
import { useFadeIn } from '@/lib/useFadeIn';

const stack = [
  'Claude API + MCP',
  'Ollama (on-premise)',
  'n8n + webhooks',
  'RAG / vectorDB',
  'Python + TypeScript',
  'Ley 19.628',
];

export function About() {
  const leftRef = useFadeIn(0.1);
  const rightRef = useFadeIn(0.1);

  return (
    <section id="sobre" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`fade-in ${styles.left}`} ref={leftRef}>
            <div className={styles.tag}>Sobre Korriente</div>
            <h2 className={styles.headline}>
              Hacemos lo que prometemos.<br />
              <span className={styles.accent}>Con código real.</span>
            </h2>
            <p className={styles.text}>
              Korriente es una consultora B2B de IA con sede en Santiago de Chile.
              No vendemos demos ni prometemos "transformación digital". Auditamos tu operación,
              construimos lo que tiene ROI y te traspasamos el conocimiento.
            </p>
            <p className={styles.text}>
              Nuestro diferenciador es la{' '}
              <strong>IA Soberana On-Premise</strong>: modelos que procesan tu información
              dentro de tu red, sin enviar datos a OpenAI ni a ningún proveedor externo.
              Cumplimiento real con la Ley 19.628. El único stack así en Chile con
              implementaciones vivas, no demos.
            </p>
            <p className={styles.text}>
              Atendemos Chile y LATAM.
            </p>
          </div>

          <div
            className={`fade-in ${styles.right}`}
            ref={rightRef}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className={styles.card}>
              <div className={styles.profile}>
                <div className={styles.avatar}>R</div>
                <div>
                  <div className={styles.name}>Raul</div>
                  <div className={styles.role}>Fundador · Korriente</div>
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.stackSection}>
                <div className={styles.stackLabel}>Stack técnico</div>
                <div className={styles.stackGrid}>
                  {stack.map((s) => (
                    <span key={s} className={styles.stackItem}>{s}</span>
                  ))}
                </div>
              </div>

              <div className={styles.divider} />

              <div className={styles.contacts}>
                <a href="mailto:hola@korriente.cl" className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>hola@korriente.cl</span>
                </a>
                <a
                  href="https://linkedin.com/company/korriente"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactLabel}>LinkedIn</span>
                  <span className={styles.contactValue}>linkedin.com/company/korriente</span>
                </a>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Ubicación</span>
                  <span className={styles.contactValue}>Santiago, Chile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
