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
    { href: '#services', label: 'Servicios' },
    { href: '#how', label: 'Cómo trabajamos' },
    { href: '#why', label: 'Por qué Korriente' },
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
              href="https://wa.me/56998290823"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWa}
              onClick={handleLinkClick}
            >
              <Icon name="whatsapp" size={16} />
              WhatsApp
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
