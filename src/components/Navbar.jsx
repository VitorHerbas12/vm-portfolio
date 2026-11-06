import { useState, useEffect } from 'react';
import { site } from '../data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${open ? 'navbar-open' : ''}`}>
      <a href="#home" className="brand" onClick={closeMenu}>
        <span className="brand-dot" /> VM
      </a>
      <nav>
        {site.nav.map(i => (
          <a key={i.href} href={i.href} className="nav-link" onClick={closeMenu}>
            {i.label}
          </a>
        ))}
      </nav>
      <div className="nav-right">
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Let's Talk
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
