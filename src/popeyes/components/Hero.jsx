import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Asset3DStage from './Asset3DStage';
import { HERO_CONTENT } from '../data/popeyesContent';

/**
 * 01 — INTRO / HERO
 * Entrada extremamente minimalista, cinematográfica, com profundidade em 3 camadas.
 */
export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const watermarkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrada inicial extremamente suave
      gsap.fromTo(
        watermarkRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 0.035, scale: 1, duration: 2.2, ease: 'power2.out', delay: 0.2 }
      );

      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.6, ease: 'power3.out', delay: 0.4 }
      );

      gsap.fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.7 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="hero"
      ref={containerRef} 
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(5rem, 12vh, 8rem) clamp(2rem, 6vw, 6rem) clamp(2rem, 5vh, 4rem)',
        boxSizing: 'border-box',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 70% 60% at 50% 45%, #181512 0%, #0B0A08 100%)',
      }}
    >
      {/* CAMADA 1 — BACKGROUND: Marca d'água editorial gigante */}
      <div 
        ref={watermarkRef}
        className="pop-bg-watermark"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          letterSpacing: '-0.03em',
        }}
      >
        {HERO_CONTENT.title}
      </div>

      {/* Topo do Hero: Identificador Editorial */}
      <div style={{ position: 'relative', zIndex: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div className="pop-editorial-badge">
          <span className="pop-badge-dot" />
          {HERO_CONTENT.kicker}
        </div>

        <div style={{ 
          fontFamily: 'var(--pop-font-mono)', 
          fontSize: '0.68rem', 
          color: 'var(--pop-cream-dim)', 
          letterSpacing: '0.12em',
          textAlign: 'right',
        }}>
          NEW ORLEANS, LA · 1972
        </div>
      </div>

      {/* CAMADA 2 — CENTRO: ÁREA RESERVADA PARA O ATIVO 3D */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(580px, 92vw)',
        height: 'min(580px, 80vh)',
        zIndex: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
          <Asset3DStage 
            stageLabel="SLOT 3D PRODUTO" 
            subLabel="RESERVADO PARA ARQUIVO GLTF/GLB OFICIAL DO POPEYES"
          />
        </div>
      </div>

      {/* CAMADA 3 — FOREGROUND / CONTEÚDO EDITORIAL */}
      <div style={{
        position: 'relative',
        zIndex: 14,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        alignItems: 'flex-end',
      }}>
        {/* Nível 1 & 2: Impacto Tipográfico + Frase Curta */}
        <div ref={headlineRef} style={{ maxWidth: '600px' }}>
          <h1 className="pop-headline-xl" style={{ margin: 0, color: 'var(--pop-cream)' }}>
            {HERO_CONTENT.highlightWord}
          </h1>
          <p style={{
            fontFamily: 'var(--pop-font-sans)',
            fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
            color: 'var(--pop-cream)',
            margin: '0.75rem 0 0 0',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            maxWidth: '38ch',
          }}>
            {HERO_CONTENT.statement}
          </p>
        </div>

        {/* Nível 3: Informação Concisa e Indicador de Rolagem */}
        <div 
          ref={subtextRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            gap: '1.2rem',
          }}
        >
          <p className="pop-body-editorial" style={{ margin: 0, fontSize: '0.92rem' }}>
            {HERO_CONTENT.footnote} Sem fórmulas milagrosas: apenas paciência, marinada cajun e empanamento manual no restaurante.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
            fontFamily: 'var(--pop-font-mono)',
            fontSize: '0.66rem',
            letterSpacing: '0.18em',
            color: 'var(--pop-cream-dim)',
          }}>
            <div style={{
              width: '28px',
              height: '1px',
              background: 'var(--pop-orange)',
            }} />
            <span>{HERO_CONTENT.scrollPrompt}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
