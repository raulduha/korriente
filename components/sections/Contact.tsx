'use client';

import { useState } from 'react';
import styles from './Contact.module.css';
import { Icon } from '@/components/ui/Icon';
import { useFadeIn } from '@/lib/useFadeIn';

const sizes = [
  '1–15 personas',
  '15–50 personas',
  '50–200 personas',
  '200+ personas',
];

export function Contact() {
  const leftRef = useFadeIn(0.1);
  const rightRef = useFadeIn(0.1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    tamano: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={`fade-in ${styles.left}`} ref={leftRef}>
            <div className={styles.tag}>Contacto</div>
            <h2 className={styles.headline}>
              Hablemos de
              <br />
              <span className={styles.accent}>tu operación.</span>
            </h2>
            <p className={styles.sub}>
              30 minutos para entender tu proceso. Te decimos si tiene sentido
              hacer un diagnóstico y cuánto podría recuperarte.
            </p>

            <div className={styles.items}>
              <a href="mailto:hola@korriente.cl" className={styles.item}>
                <div className={styles.itemIcon}>
                  <Icon name="mail" size={17} />
                </div>
                <div>
                  <div className={styles.itemLabel}>Email</div>
                  <div className={styles.itemValue}>hola@korriente.cl</div>
                </div>
              </a>
              <a
                href="https://wa.me/56998290823"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
              >
                <div className={styles.itemIcon}>
                  <Icon name="whatsapp" size={17} />
                </div>
                <div>
                  <div className={styles.itemLabel}>WhatsApp</div>
                  <div className={styles.itemValue}>+56 9 9829 0823</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/company/korriente"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
              >
                <div className={styles.itemIcon}>
                  <Icon name="linkedin" size={17} />
                </div>
                <div>
                  <div className={styles.itemLabel}>LinkedIn</div>
                  <div className={styles.itemValue}>linkedin.com/company/korriente</div>
                </div>
              </a>
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Icon name="mapPin" size={17} />
                </div>
                <div>
                  <div className={styles.itemLabel}>Ubicación</div>
                  <div className={styles.itemValue}>Santiago, Chile · Atendemos LATAM</div>
                </div>
              </div>
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
                  <div className={styles.successSub}>
                    Te respondemos en menos de 24 horas hábiles.
                  </div>
                </div>
              ) : (
                <>
                  <h3 className={styles.formTitle}>Cuéntanos tu caso</h3>
                  <p className={styles.formSub}>
                    Sin formularios interminables. Solo lo necesario para entenderte.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.row2}>
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
                    </div>
                    <div className={styles.row2}>
                      <div className={styles.formRow}>
                        <label className={styles.label}>Email</label>
                        <input
                          type="email"
                          className={styles.input}
                          placeholder="tu@empresa.cl"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className={styles.formRow}>
                        <label className={styles.label}>Tamaño empresa</label>
                        <select
                          className={styles.input}
                          value={form.tamano}
                          onChange={(e) => setForm({ ...form, tamano: e.target.value })}
                        >
                          <option value="">Selecciona...</option>
                          {sizes.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <label className={styles.label}>¿Cuál es tu mayor dolor operacional?</label>
                      <textarea
                        className={`${styles.input} ${styles.textarea}`}
                        placeholder="Ej: Procesamos 200 facturas al mes manualmente. Mi equipo pasa 3 horas al día en esto..."
                        value={form.mensaje}
                        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                        required
                      />
                    </div>
                    <button type="submit" className={styles.btnSubmit}>
                      <Icon name="send" size={15} /> Enviar mensaje
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
