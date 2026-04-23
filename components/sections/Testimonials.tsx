'use client';

import styles from './Testimonials.module.css';
import { FadeIn } from '@/components/ui/FadeIn';
import { useFadeIn } from '@/lib/useFadeIn';

const items = [
  {
    text: 'En tres semanas teníamos un sistema procesando facturas automáticamente. El equipo pasó de 4 horas diarias de digitación a 20 minutos de revisión.',
    result: '−87% tiempo en facturación',
    name: 'Gerente de Finanzas',
    role: 'Distribuidora retail · Santiago',
    initial: 'F',
  },
  {
    text: 'El bot de WhatsApp atiende el 85% de las consultas de clientes sin intervención humana. El equipo de ventas ahora solo cierra, no atiende.',
    result: '85% consultas sin humano',
    name: 'Director Comercial',
    role: 'Empresa de servicios · Región Metropolitana',
    initial: 'C',
  },
  {
    text: 'Lo que más valoro es que el código es nuestro. Cuando terminó el piloto, el equipo pudo seguir manteniéndolo sin depender de Korriente.',
    result: 'Transferencia total al equipo',
    name: 'CTO',
    role: 'Empresa tecnológica · Chile',
    initial: 'T',
  },
];

export function Testimonials() {
  const headerRef = useFadeIn();

  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={`${styles.header} fade-in`} ref={headerRef}>
          <div className={styles.tag}>Clientes</div>
          <h2 className={styles.title}>Resultados en operaciones reales.</h2>
          <p className={styles.sub}>
            Empresas chilenas que implementaron automatización con Korriente y midieron el impacto.
          </p>
        </div>
        <div className={styles.grid}>
          {items.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1} threshold={0.08} className={styles.card}>
              <div className={styles.quoteMark}>&ldquo;</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.result}>{t.result}</div>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initial}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
