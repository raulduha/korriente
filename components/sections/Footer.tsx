import styles from './Footer.module.css';
import { Icon } from '@/components/ui/Icon';

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
            <div className={styles.tagline}>automatización · inteligencia · flujo</div>
          </div>
          <div className={styles.right}>
            <a href="#services" className={styles.link}>
              Servicios
            </a>
            <a href="#how" className={styles.link}>
              Proceso
            </a>
            <a
              href="https://wa.me/56998290823"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.wa}
            >
              <Icon name="whatsapp" size={16} />
              +56 9 9829 0823
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
