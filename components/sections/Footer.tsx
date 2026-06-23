import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <span className={styles.k}>K</span>
              <span className={styles.rest}>orriente</span>
            </div>
            <div className={styles.tagline}>consultoría b2b de ia · santiago, chile</div>
          </div>
          <div className={styles.right}>
            <a href="#como" className={styles.link}>Cómo trabajamos</a>
            <a href="#servicios" className={styles.link}>Servicios</a>
            <a href="#sectores" className={styles.link}>Sectores</a>
            <a href="#contacto" className={styles.link}>Contacto</a>
            <a
              href="https://wa.me/56998290823"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.wa}
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>© 2026 Korriente SpA · raulduhaldee@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
