import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ZAMP_CONTENT } from '../data/popeyesContent';

gsap.registerPlugin(ScrollTrigger);

/**
 * 06 — POPEYES + ZAMP
 * Institucional editorial, curto e objetivo. Sem gráficos corporativos ou cards de dashboards.
 * Tipografia cruzando a fotografia de restaurante real.
 */
export default function ZampSection() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="zamp"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0E0D0B',
        padding: 'clamp(6rem, 14vh, 10rem) clamp(2rem, 6vw, 6rem)',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Marca d'água ZAMP */}
      <div 
        className="pop-bg-watermark" 
        style={{ top: '35%', left: '2%', opacity: 0.025 }}
      >
        ZAMP
      </div>

      <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>
          {/* Coluna 1: Composição Tipográfica Editorial */}
          <div ref={headlineRef} style={{ position: 'relative', zIndex: 10 }}>
            <div className="pop-editorial-badge" style={{ marginBottom: '1.2rem' }}>
              <span className="pop-badge-dot" />
              {ZAMP_CONTENT.kicker}
            </div>

            <h2 className="pop-headline-lg" style={{ color: 'var(--pop-cream)', margin: '0 0 1.5rem 0' }}>
              POPEYES<br />
              <span style={{ color: 'var(--pop-orange)', fontSize: '0.7em' }}>×</span> ZAMP
            </h2>

            <p style={{
              fontFamily: 'var(--pop-font-sans)',
              fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)',
              color: 'var(--pop-cream)',
              lineHeight: '1.5',
              fontWeight: 450,
              margin: '0 0 1.2rem 0',
              maxWidth: '36ch',
            }}>
              {ZAMP_CONTENT.subheadline}
            </p>

            <p className="pop-body-editorial" style={{ margin: '0 0 2rem 0' }}>
              {ZAMP_CONTENT.body}
            </p>

            <div style={{
              fontFamily: 'var(--pop-font-serif)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'var(--pop-orange)',
              borderLeft: '2px solid var(--pop-orange)',
              paddingLeft: '1.2rem',
              margin: '1.5rem 0',
            }}>
              {ZAMP_CONTENT.corporateQuote}
            </div>

            <div style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '2.5rem',
              borderTop: '1px solid var(--pop-border)',
              paddingTop: '1.5rem',
            }}>
              {ZAMP_CONTENT.stats.map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: 'var(--pop-font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--pop-cream-dim)',
                    letterSpacing: '0.12em',
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--pop-font-sans)',
                    fontSize: '1.1rem',
                    color: 'var(--pop-cream)',
                    fontWeight: 600,
                    marginTop: '0.2rem',
                  }}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna 2: Espaço Arquitetural para Fotografia de Restaurante Real */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 12',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'var(--pop-surface)',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.8)',
            }}>
              <img
                src={ZAMP_CONTENT.image}
                alt="Arquitetura de Restaurante Popeyes sob gestão ZAMP"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.08) brightness(0.9)',
                }}
                loading="lazy"
              />

              {/* Rótulo de placeholder oficial */}
              <div style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                fontFamily: 'var(--pop-font-mono)',
                fontSize: '0.62rem',
                color: 'var(--pop-cream-dim)',
                background: 'rgba(14, 13, 11, 0.75)',
                padding: '0.3rem 0.7rem',
                borderRadius: '6px',
                border: '1px solid var(--pop-border)',
              }}>
                SLOT: FOTOGRAFIA DE RESTAURANTE REAL
              </div>

              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                fontFamily: 'var(--pop-font-mono)',
                fontSize: '0.65rem',
                color: '#ffffff',
                letterSpacing: '0.14em',
              }}>
                POPEYES BRASIL · PADRÃO OPERACIONAL ZAMP S.A.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
