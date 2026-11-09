import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NEWS_LAUNCH } from '../data/popeyesContent';

gsap.registerPlugin(ScrollTrigger);

/**
 * 05 — NOVIDADES (IMAGE EXPANSION WITH SCROLL)
 * Apenas UM lançamento exclusivo.
 * A imagem expande progressivamente via máscara, clip-path, transformação e escala,
 * de pequena para quase fullscreen, revelando os detalhes do produto.
 */
export default function NewsReveal() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const mediaFrameRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const mediaFrame = mediaFrameRef.current;
    const image = imageRef.current;
    const details = detailsRef.current;
    const title = titleRef.current;

    if (!container || !mediaFrame || !image) return;

    const ctx = gsap.context(() => {
      // Linha do tempo mestre sincronizada com a rolagem
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 1. Expansão progressiva e cinematográfica da moldura
      tl.fromTo(
        mediaFrame,
        {
          width: '320px',
          height: '220px',
          clipPath: 'inset(12% 12% 12% 12% round 24px)',
          borderRadius: '24px',
          filter: 'brightness(0.85)',
        },
        {
          width: '92vw',
          height: '84vh',
          clipPath: 'inset(0% 0% 0% 0% round 14px)',
          borderRadius: '14px',
          filter: 'brightness(1)',
          ease: 'power2.inOut',
        },
        0
      );

      // 2. Parallax e contra-escala sutil da imagem interna
      tl.fromTo(
        image,
        { scale: 1.35, yPercent: -8 },
        { scale: 1.05, yPercent: 0, ease: 'none' },
        0
      );

      // 3. O título principal cruza a composição e se ajusta
      tl.to(
        title,
        {
          y: -40,
          opacity: 0.9,
          ease: 'power1.out',
        },
        0.3
      );

      // 4. Detalhes finais revelados somente quando a imagem atinge quase fullscreen
      if (details) {
        tl.fromTo(
          details,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, ease: 'power2.out' },
          0.65
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="novidade"
      ref={containerRef}
      className="pop-news-container"
      style={{
        position: 'relative',
        minHeight: '260vh',
        backgroundColor: '#0A0908',
      }}
    >
      {/* Container Fixo / Sticky que hospeda a cena durante a rolagem */}
      <div
        ref={stickyRef}
        className="pop-news-pinned"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '2rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Marca d'água contextual */}
        <div 
          className="pop-bg-watermark" 
          style={{ top: '15%', left: '50%', transform: 'translateX(-50%)', opacity: 0.025 }}
        >
          SANDWICH
        </div>

        {/* Cabeçalho Inicial: Poucos elementos, vasto espaço negativo */}
        <div 
          ref={titleRef}
          style={{
            position: 'absolute',
            top: 'clamp(3rem, 7vh, 5rem)',
            textAlign: 'center',
            zIndex: 25,
            pointerEvents: 'none',
            maxWidth: '800px',
          }}
        >
          <div className="pop-editorial-badge" style={{ marginBottom: '0.8rem', pointerEvents: 'auto' }}>
            <span className="pop-badge-dot" />
            {NEWS_LAUNCH.tag}
          </div>

          <h2 className="pop-headline-lg" style={{ color: 'var(--pop-cream)', margin: 0 }}>
            {NEWS_LAUNCH.title}
          </h2>

          <p style={{
            fontFamily: 'var(--pop-font-sans)',
            fontSize: '1rem',
            color: 'var(--pop-cream-dim)',
            margin: '0.5rem 0 0 0',
          }}>
            {NEWS_LAUNCH.subtitle}
          </p>
        </div>

        {/* Moldura da Imagem que se expande com o scroll */}
        <div
          ref={mediaFrameRef}
          className="pop-news-media-frame"
          style={{
            position: 'relative',
            zIndex: 15,
            background: 'var(--pop-surface)',
          }}
        >
          <img
            ref={imageRef}
            src={NEWS_LAUNCH.image}
            alt={NEWS_LAUNCH.title}
            className="pop-news-image"
          />

          {/* Vinheta cinematográfica sutil */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 9, 8, 0.75) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Detalhes do Produto revelados quando a imagem estiver expandida */}
          <div
            ref={detailsRef}
            style={{
              position: 'absolute',
              bottom: 'clamp(1.5rem, 4vh, 3.5rem)',
              left: 'clamp(1.5rem, 5vw, 4rem)',
              right: 'clamp(1.5rem, 5vw, 4rem)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '2rem',
              zIndex: 30,
            }}
          >
            {/* Bloco de Especificações Reais */}
            <div style={{ maxWidth: '480px' }}>
              <p style={{
                fontFamily: 'var(--pop-font-sans)',
                fontSize: 'clamp(0.95rem, 1.2vw, 1.15rem)',
                color: '#ffffff',
                lineHeight: '1.6',
                margin: '0 0 1.2rem 0',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              }}>
                {NEWS_LAUNCH.description}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.8rem 1.5rem',
              }}>
                {NEWS_LAUNCH.specs.map((item) => (
                  <div key={item.label}>
                    <div style={{
                      fontFamily: 'var(--pop-font-mono)',
                      fontSize: '0.62rem',
                      color: 'var(--pop-orange)',
                      letterSpacing: '0.12em',
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--pop-font-sans)',
                      fontSize: '0.85rem',
                      color: '#ffffff',
                      fontWeight: 500,
                    }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ação de Conversão Discreta */}
            <a
              href="#final"
              className="pop-btn-primary pop-interactive"
              style={{ padding: '0.9rem 2rem' }}
            >
              <span>{NEWS_LAUNCH.cta}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
