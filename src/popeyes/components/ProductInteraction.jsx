import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Asset3DStage from './Asset3DStage';
import { PRODUCT_INTERACTION_CONTENT } from '../data/popeyesContent';

gsap.registerPlugin(ScrollTrigger);

/**
 * 04 — INTERAÇÃO / MOMENTO DE PRODUTO
 * Momento curto, memorável e arquitetural reservado para interação do modelo 3D.
 */
export default function ProductInteraction() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Efeito sutil de saída limpa conforme o scroll avança
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom top',
        onUpdate: (self) => {
          const step = Math.min(2, Math.floor(self.progress * 3));
          setActiveStep(step);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0A0908',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(5rem, 10vh, 8rem) clamp(2rem, 6vw, 6rem)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Luz ambiente pontual */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(241, 90, 36, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Cabeçalho Conciso da Cena */}
      <div style={{ textAlign: 'center', maxWidth: '640px', marginBottom: '2.5rem', position: 'relative', zIndex: 10 }}>
        <div className="pop-editorial-badge" style={{ marginBottom: '1rem' }}>
          <span className="pop-badge-dot" />
          {PRODUCT_INTERACTION_CONTENT.kicker}
        </div>

        <h2 className="pop-headline-md" style={{ color: 'var(--pop-cream)', margin: '0 0 0.8rem 0' }}>
          {PRODUCT_INTERACTION_CONTENT.title}
        </h2>

        <p className="pop-body-editorial" style={{ margin: '0 auto', fontSize: '0.95rem' }}>
          {PRODUCT_INTERACTION_CONTENT.subtitle}
        </p>
      </div>

      {/* Palco Central do Asset 3D com Controles de Inspeção */}
      <div style={{
        position: 'relative',
        width: 'min(520px, 92vw)',
        height: '380px',
        zIndex: 15,
      }}>
        <Asset3DStage 
          stageLabel="MOMENTO DE INTERAÇÃO"
          subLabel="PONTO DE ANIMAÇÃO DO ATIVO 3D BASEADA EM SCROLL"
          interactive={true}
          scale={1.1}
        />
      </div>

      {/* Seletor Interativo das 3 Fases do Processo */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.2rem',
        marginTop: '2.5rem',
        maxWidth: '820px',
        width: '100%',
      }}>
        {PRODUCT_INTERACTION_CONTENT.steps.map((item, idx) => (
          <button
            key={item.label}
            onClick={() => setActiveStep(idx)}
            className="pop-interactive"
            style={{
              background: activeStep === idx ? 'rgba(241, 90, 36, 0.12)' : 'rgba(22, 20, 18, 0.6)',
              border: `1px solid ${activeStep === idx ? 'var(--pop-orange)' : 'var(--pop-border)'}`,
              padding: '1rem 1.4rem',
              borderRadius: '14px',
              textAlign: 'left',
              cursor: 'pointer',
              color: 'var(--pop-cream)',
              flex: '1 1 220px',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{
              fontFamily: 'var(--pop-font-mono)',
              fontSize: '0.68rem',
              color: activeStep === idx ? 'var(--pop-orange)' : 'var(--pop-cream-dim)',
              letterSpacing: '0.12em',
              marginBottom: '0.4rem',
            }}>
              {item.label}
            </div>

            <div style={{
              fontFamily: 'var(--pop-font-sans)',
              fontSize: '0.85rem',
              color: activeStep === idx ? 'var(--pop-cream)' : 'var(--pop-cream-dim)',
              lineHeight: '1.4',
            }}>
              {item.desc}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
