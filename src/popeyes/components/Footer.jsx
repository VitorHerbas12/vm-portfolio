import { FOOTER_CONTENT } from '../data/popeyesContent';

/**
 * 08 — ENCERRAMENTO (Footer Institucional Secundário)
 * Extrema limpeza, tipografia discreta e transparência legal.
 */
export default function Footer() {
  const scrollTo = (href) => (e) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      position: 'relative',
      backgroundColor: '#070605',
      borderTop: '1px solid var(--pop-border-subtle)',
      padding: 'clamp(3rem, 6vh, 4.5rem) clamp(2rem, 6vw, 6rem) clamp(2rem, 4vh, 3rem)',
      color: 'var(--pop-cream-dim)',
      boxSizing: 'border-box',
    }}>
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem',
      }}>
        {/* Topo do Footer: Nome e Links Secundários */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--pop-font-display)',
              fontSize: '1.8rem',
              color: 'var(--pop-cream)',
              letterSpacing: '0.02em',
            }}>
              POPEYES<span style={{ color: 'var(--pop-orange)' }}>®</span>
            </div>
            <div style={{
              fontFamily: 'var(--pop-font-mono)',
              fontSize: '0.62rem',
              color: 'var(--pop-cream-dim)',
              letterSpacing: '0.15em',
              marginTop: '0.2rem',
            }}>
              LOUISIANA KITCHEN · BRASIL
            </div>
          </div>

          <nav style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
          }}>
            {FOOTER_CONTENT.nav.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={scrollTo(link.href)}
                className="pop-interactive"
                style={{
                  fontFamily: 'var(--pop-font-sans)',
                  fontSize: '0.82rem',
                  color: 'var(--pop-cream-dim)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--pop-cream)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--pop-cream-dim)')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Linha Divisória Sutil */}
        <div style={{ width: '100%', height: '1px', background: 'var(--pop-border-subtle)' }} />

        {/* Base: Disclaimer Editorial e Direitos Oficiais */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.2rem',
          fontFamily: 'var(--pop-font-mono)',
          fontSize: '0.65rem',
          color: 'rgba(246, 243, 235, 0.4)',
          lineHeight: '1.6',
        }}>
          <div>{FOOTER_CONTENT.legal}</div>
          <div style={{ color: 'var(--pop-orange)' }}>{FOOTER_CONTENT.disclaimer}</div>
        </div>
      </div>
    </footer>
  );
}
