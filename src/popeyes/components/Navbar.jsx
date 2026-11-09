import { useState, useEffect } from 'react';

/**
 * Navbar — Popeyes Brasil
 * Minimalista, sem excessos, com adaptação suave no scroll.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`pop-nav ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo Popeyes */}
      <a href="#hero" onClick={scrollTo('hero')} className="pop-brand-logo pop-interactive">
        <svg 
          className="pop-logo-glyph" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flor-de-lis estilizada de Louisiana / P estilizado */}
          <path 
            d="M16 2C16 2 12 7 12 12C12 16 16 20 16 20C16 20 20 16 20 12C20 7 16 2 16 2Z" 
            fill="#F15A24"
          />
          <path 
            d="M7 14C7 14 11 15 13 18C15 21 13 25 10 26C7 27 5 24 5 21C5 17 7 14 7 14Z" 
            fill="#F15A24" 
            fillOpacity="0.85"
          />
          <path 
            d="M25 14C25 14 21 15 19 18C17 21 19 25 22 26C25 27 27 24 27 21C27 17 25 14 25 14Z" 
            fill="#F15A24" 
            fillOpacity="0.85"
          />
          <rect x="14.5" y="22" width="3" height="8" rx="1.5" fill="#F15A24" />
        </svg>

        <div>
          <div className="pop-logo-text">POPEYES<span style={{ color: '#F15A24' }}>®</span></div>
          <div className="pop-logo-badge">BRASIL · 1972</div>
        </div>
      </a>

      {/* Links Mínimos */}
      <nav className="pop-nav-links">
        <a href="#historia" onClick={scrollTo('historia')} className="pop-nav-link pop-interactive">
          História
        </a>
        <a href="#novidade" onClick={scrollTo('novidade')} className="pop-nav-link pop-interactive">
          Novidade
        </a>
        <a href="#zamp" onClick={scrollTo('zamp')} className="pop-nav-link pop-interactive">
          Popeyes + ZAMP
        </a>
      </nav>

      {/* CTA Discreto */}
      <a 
        href="#final" 
        onClick={scrollTo('final')} 
        className="pop-nav-cta pop-interactive"
      >
        <span className="pop-badge-dot" style={{ width: 5, height: 5 }} />
        <span>Peça Agora</span>
      </a>
    </header>
  );
}
