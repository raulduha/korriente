'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import { Icon } from '@/components/ui/Icon';
import { useFadeIn } from '@/lib/useFadeIn';

const contactItems = [
  {
    icon: 'whatsapp' as const,
    color: '#25D366',
    bg: 'rgba(37,211,102,0.12)',
    label: 'WhatsApp',
    value: '+56 9 9829 0823',
    href: 'https://wa.me/56998290823',
  },
  {
    icon: 'mail' as const,
    color: 'var(--blue)',
    bg: 'rgba(37,99,235,0.12)',
    label: 'Email',
    value: 'hola@korriente.cl',
    href: 'mailto:hola@korriente.cl',
  },
  {
    icon: 'linkedin' as const,
    color: 'var(--cyan)',
    bg: 'rgba(6,182,212,0.12)',
    label: 'LinkedIn',
    value: 'linkedin.com/company/korriente',
    href: 'https://linkedin.com/company/korriente',
  },
  {
    icon: 'mapPin' as const,
    color: 'var(--muted2)',
    bg: 'rgba(255,255,255,0.05)',
    label: 'Ubicación',
    value: 'Santiago, Chile',
    href: null,
  },
];

export function Contact() {
  const leftRef = useFadeIn(0.1);
  const rightRef = useFadeIn(0.1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nombre: '', empresa: '', mensaje: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`fade-in ${styles.left}`} ref={leftRef}>
            <div className={styles.tag}>Contacto</div>
            <h2 className={styles.headline}>
              Hablemos
              <br />
              de tu operación.
            </h2>
            <p className={styles.sub}>
              Una llamada de 30 minutos para entender tu proceso. Te decimos si tiene sentido
              implementar IA y cuánto podría ahorrarte.
            </p>
            <div className={styles.items}>
              {contactItems.map((c, i) =>
                c.href ? (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.item}
                  >
                    <div className={styles.itemIcon} style={{ background: c.bg }}>
                      <Icon name={c.icon} size={18} style={{ color: c.color }} />
                    </div>
                    <div>
                      <div className={styles.itemLabel}>{c.label}</div>
                      <div className={styles.itemValue}>{c.value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={i} className={styles.item}>
                    <div className={styles.itemIcon} style={{ background: c.bg }}>
                      <Icon name={c.icon} size={18} style={{ color: c.color }} />
                    </div>
                    <div>
                      <div className={styles.itemLabel}>{c.label}</div>
                      <div className={styles.itemValue}>{c.value}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div
            className={`fade-in ${styles.right}`}
            ref={rightRef}
            style={{ transitionDelay: '0.15s' }}
          >
            <div className={styles.form}>
              {sent ? (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <div className={styles.successTitle}>Mensaje recibido</div>
                  <div className={styles.successSub}>Te respondemos en menos de 24 horas.</div>
                </div>
              ) : (
                <>
                  <h3 className={styles.formTitle}>Escríbenos directamente</h3>
                  <p className={styles.formSub}>
                    Sin formularios interminables. Solo cuéntanos qué proceso te gustaría automatizar.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <label className={styles.label}>Nombre</label>
                      <input
                        className={styles.input}
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        required
                      />
                    </div>
                    <div className={styles.formRow}>
                      <label className={styles.label}>Empresa</label>
                      <input
                        className={styles.input}
                        placeholder="Nombre de tu empresa"
                        value={form.empresa}
                        onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      />
                    </div>
                    <div className={styles.formRow}>
                      <label className={styles.label}>¿Qué proceso quieres automatizar?</label>
                      <textarea
                        className={`${styles.input} ${styles.textarea}`}
                        placeholder="Ej: Procesamos 200 facturas al mes manualmente..."
                        value={form.mensaje}
                        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                        required
                      />
                    </div>
                    <button type="submit" className={styles.btnSubmit}>
                      <Icon name="send" size={16} /> Enviar mensaje
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
