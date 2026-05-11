'use client';

import styles from './Navbar.module.css';
import { Icon } from '@/components/ui/Icon';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#como',      label: 'Cómo trabajamos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#sectores',  label: 'Sectores' },
    { href: '#contacto',  label: 'Contacto' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#hero" className={styles.logo}>
            <span className={styles.k}>K</span>
            <span className={styles.rest}>orriente</span>
          </a>

          <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={handleLinkClick}>
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              className={styles.btnCta}
              onClick={handleLinkClick}
            >
              Agendar diagnóstico
            </a>
          </div>

          <button
            className={styles.toggle}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
}
