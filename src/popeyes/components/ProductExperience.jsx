import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PRODUCT_EXPERIENCE_CONTENT } from '../data/popeyesContent';

gsap.registerPlugin(ScrollTrigger);

/**
 * 02 — EXPERIÊNCIA DO PRODUTO
 * Composição assimétrica, enquadramento dinâmico e tipografia expressiva com vasto espaço negativo.
 */
export default function ProductExperience() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const cardGridRef = useRef(null);
  const imageRevealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada suave do título principal
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Efeito de máscara suave na imagem editorial
      if (imageRevealRef.current) {
        gsap.fromTo(
          imageRevealRef.current,
          { clipPath: 'inset(15% 10% 15% 10% round 18px)', scale: 1.08 },
          {
            clipPath: 'inset(0% 0% 0% 0% round 18px)',
            scale: 1,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imageRevealRef.current,
              start: 'top 75%',
              end: 'bottom 40%',
              scrub: 1.2,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '120vh',
        width: '100%',
        backgroundColor: '#0F0E0C',
        padding: 'clamp(6rem, 14vh, 10rem) clamp(2rem, 6vw, 6rem)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Marca d'água de fundo */}
      <div 
        className="pop-bg-watermark" 
        style={{ 
          top: '20%', 
          right: '-5%', 
          color: 'rgba(246, 243, 235, 0.02)',
        }}
      >
        TEMPERO
      </div>

      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Kicker e Título Editorial Descentralizado */}
        <div ref={headlineRef} style={{ maxWidth: '780px', marginBottom: 'clamp(4rem, 8vh, 6rem)' }}>
          <div className="pop-editorial-badge" style={{ marginBottom: '1.2rem' }}>
            <span className="pop-badge-dot" />
            {PRODUCT_EXPERIENCE_CONTENT.lead}
          </div>

          <h2 className="pop-headline-lg" style={{ color: 'var(--pop-cream)', margin: 0 }}>
            {PRODUCT_EXPERIENCE_CONTENT.headline}
          </h2>

          <p className="pop-body-editorial" style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
            Não aceleramos o processo com aditivos ou prensas industriais. O método Popeyes foi desenhado para respeitar o tempo que o tempero leva para chegar ao osso.
          </p>
        </div>

        {/* Grid Assimétrico: Pilares à Esquerda + Imagem Editorial com Máscara à Direita */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(3rem, 6vw, 5rem)',
          alignItems: 'center',
        }}>
          {/* Pilares do Preparo (Texto conciso e editorial) */}
          <div ref={cardGridRef} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {PRODUCT_EXPERIENCE_CONTENT.pillars.map((pillar, idx) => (
              <div 
                key={pillar.num}
                style={{
                  borderLeft: '1px solid var(--pop-border)',
                  paddingLeft: '1.6rem',
                  position: 'relative',
                }}
              >
                <div style={{
                  fontFamily: 'var(--pop-font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--pop-orange)',
                  letterSpacing: '0.15em',
                  marginBottom: '0.4rem',
                }}>
                  {pillar.num} · ETAPA
                </div>

                <h3 style={{
                  fontFamily: 'var(--pop-font-display)',
                  fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)',
                  color: 'var(--pop-cream)',
                  letterSpacing: '0.01em',
                  margin: '0 0 0.6rem 0',
                }}>
                  {pillar.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--pop-font-sans)',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: 'var(--pop-cream-dim)',
                  margin: 0,
                  maxWidth: '38ch',
                }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Imagem Editorial com Recorte & Profundidade */}
          <div style={{ position: 'relative' }}>
            <div 
              ref={imageRevealRef}
              style={{
                width: '100%',
                aspectRatio: '4 / 5',
                borderRadius: '18px',
                overflow: 'hidden',
                background: 'var(--pop-surface)',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.7)',
                position: 'relative',
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1400&q=85" 
                alt="Textura autêntica de crocância artesanal Popeyes"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.92) contrast(1.08)',
                }}
                loading="lazy"
              />

              {/* Overlay sutil para integração cinematográfica */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 14, 12, 0.8) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />

              {/* Rótulo técnico sobreposto */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--pop-font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--pop-orange)',
                    letterSpacing: '0.15em',
                  }}>
                    FOTOGRAFIA EDITORIAL
                  </div>
                  <div style={{
                    fontFamily: 'var(--pop-font-sans)',
                    fontSize: '0.9rem',
                    color: 'var(--pop-cream)',
                    fontWeight: 500,
                  }}>
                    Camadas crocantes formadas manualmente.
                  </div>
                </div>

                <div style={{
                  fontFamily: 'var(--pop-font-mono)',
                  fontSize: '0.65rem',
                  color: 'rgba(246, 243, 235, 0.4)',
                }}>
                  CRISP_INDEX: 9.8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
