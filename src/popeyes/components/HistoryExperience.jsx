import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HISTORY_TIMELINE } from '../data/popeyesContent';

gsap.registerPlugin(ScrollTrigger);

/**
 * 03 — HISTÓRIA
 * Seção horizontal pinada controlada pelo scroll vertical regular.
 * Exposição editorial: 1972 New Orleans → Louisiana → Culinária Cajun → 2018 Brasil → ZAMP.
 */
export default function HistoryExperience() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    // Apenas ativa o pin horizontal em telas desktop/tablet largas
    const mm = gsap.matchMedia();

    mm.add('(min-width: 860px)', () => {
      const track = trackRef.current;
      const panels = panelsRef.current;
      if (!track || panels.length === 0) return;

      const totalPanels = panels.length;
      // Animação horizontal suave sincronizada ao scroll vertical
      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="historia"
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#0D0C0A',
        overflow: 'hidden',
      }}
    >
      {/* Header Fixo / Indicador Editorial da Seção */}
      <div style={{
        position: 'absolute',
        top: 'clamp(2rem, 5vh, 4rem)',
        left: 'clamp(2rem, 6vw, 6rem)',
        zIndex: 20,
        pointerEvents: 'none',
      }}>
        <div className="pop-editorial-badge">
          <span className="pop-badge-dot" />
          LINHA DO TEMPO EDITORIAL · 1972 — PRESENTE
        </div>
      </div>

      {/* Trilho Horizontal */}
      <div 
        ref={trackRef}
        style={{
          display: 'flex',
          height: '100vh',
          width: 'fit-content',
          willChange: 'transform',
        }}
      >
        {HISTORY_TIMELINE.map((item, index) => (
          <div
            key={item.year + index}
            ref={(el) => (panelsRef.current[index] = el)}
            style={{
              width: '100vw',
              height: '100vh',
              flexShrink: 0,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              padding: '0 clamp(2rem, 8vw, 8rem)',
              boxSizing: 'border-box',
              backgroundColor: item.bgTone,
              transition: 'background-color 0.6s ease',
            }}
          >
            {/* Número / Data Gigante no Fundo */}
            <div
              className="pop-bg-watermark"
              style={{
                top: '55%',
                left: index % 2 === 0 ? '5%' : 'auto',
                right: index % 2 === 0 ? 'auto' : '5%',
                transform: 'translateY(-50%)',
                color: 'rgba(246, 243, 235, 0.04)',
              }}
            >
              {item.year}
            </div>

            {/* Conteúdo Editorial com Composição Alternada */}
            <div style={{
              position: 'relative',
              zIndex: 10,
              display: 'grid',
              gridTemplateColumns: index % 2 === 0 ? '1.1fr 0.9fr' : '0.9fr 1.1fr',
              gap: 'clamp(3rem, 6vw, 6rem)',
              alignItems: 'center',
              width: '100%',
              maxWidth: '1400px',
              margin: '0 auto',
            }}>
              {/* Bloco de Texto (Invertido na ordem visual em painéis pares/ímpares) */}
              <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                <div style={{
                  fontFamily: 'var(--pop-font-mono)',
                  fontSize: '0.72rem',
                  color: item.accent,
                  letterSpacing: '0.2em',
                  marginBottom: '0.6rem',
                }}>
                  {item.tag} · {item.city}
                </div>

                <div style={{
                  fontFamily: 'var(--pop-font-display)',
                  fontSize: 'clamp(2.8rem, 6.5vw, 6rem)',
                  lineHeight: '0.92',
                  color: 'var(--pop-cream)',
                  textTransform: 'uppercase',
                  margin: '0.2rem 0 1.2rem 0',
                }}>
                  {item.year}
                </div>

                <h3 style={{
                  fontFamily: 'var(--pop-font-sans)',
                  fontSize: 'clamp(1.25rem, 2vw, 1.8rem)',
                  color: 'var(--pop-cream)',
                  fontWeight: 500,
                  margin: '0 0 1rem 0',
                  letterSpacing: '-0.01em',
                }}>
                  {item.title}
                </h3>

                <p className="pop-body-editorial" style={{ margin: 0 }}>
                  {item.desc}
                </p>

                {/* Linha de Progresso do Capítulo */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  marginTop: '2rem',
                  fontFamily: 'var(--pop-font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--pop-cream-dim)',
                }}>
                  <span style={{ color: item.accent }}>0{index + 1}</span>
                  <div style={{
                    width: '60px',
                    height: '1px',
                    background: 'var(--pop-border)',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      height: '100%',
                      width: `${((index + 1) / HISTORY_TIMELINE.length) * 100}%`,
                      background: item.accent,
                    }} />
                  </div>
                  <span>0{HISTORY_TIMELINE.length}</span>
                </div>
              </div>

              {/* Fotografia Editorial com Máscara e Sombra Fina */}
              <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 11',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: 'var(--pop-surface)',
                  boxShadow: '0 24px 70px rgba(0, 0, 0, 0.75)',
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.06) brightness(0.92)',
                    }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(13, 12, 10, 0.7) 0%, transparent 50%)',
                  }} />

                  <div style={{
                    position: 'absolute',
                    bottom: '1.2rem',
                    left: '1.5rem',
                    fontFamily: 'var(--pop-font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.14em',
                    color: 'var(--pop-cream-dim)',
                  }}>
                    LOC: {item.city}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
