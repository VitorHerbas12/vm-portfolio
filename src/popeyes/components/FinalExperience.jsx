import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Asset3DStage from './Asset3DStage';
import { FINAL_CONTENT } from '../data/popeyesContent';

gsap.registerPlugin(ScrollTrigger);

/**
 * 07 — CENA FINAL
 * Recupera o protagonismo do asset 3D, afasta suavemente a câmera e prepara as ações de encerramento.
 */
export default function FinalExperience() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaBlockRef = useRef(null);

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

      gsap.fromTo(
        ctaBlockRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaBlockRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="final"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '105vh',
        width: '100%',
        backgroundColor: '#090807',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'clamp(6rem, 12vh, 8rem) clamp(2rem, 6vw, 6rem) clamp(3rem, 6vh, 5rem)',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Marca d'água grandiosa */}
      <div 
        className="pop-bg-watermark" 
        style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.025 }}
      >
        POPEYES
      </div>

      {/* Topo: Kicker & Título Editorial */}
      <div ref={headlineRef} style={{ textAlign: 'center', maxWidth: '640px', position: 'relative', zIndex: 12 }}>
        <div className="pop-editorial-badge" style={{ marginBottom: '1rem' }}>
          <span className="pop-badge-dot" />
          {FINAL_CONTENT.kicker}
        </div>

        <h2 className="pop-headline-lg" style={{ color: 'var(--pop-cream)', margin: '0 0 1rem 0' }}>
          {FINAL_CONTENT.headline}
        </h2>

        <p className="pop-body-editorial" style={{ margin: '0 auto' }}>
          {FINAL_CONTENT.subtext}
        </p>
      </div>

      {/* Centro: Palco Principal do Asset 3D Oficial */}
      <div style={{
        position: 'relative',
        width: 'min(560px, 92vw)',
        height: '380px',
        zIndex: 10,
        margin: '2rem 0',
      }}>
        <Asset3DStage 
          stageLabel="CENA FINAL · ASSET HERO"
          subLabel="ENQUADRAMENTO PRINCIPAL PARA O ARQUIVO 3D DO CLIENTE"
          interactive={true}
          scale={1.15}
        />
      </div>

      {/* Base: Ações de Conversão Discretas (08 — Encerramento integrado) */}
      <div 
        ref={ctaBlockRef}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.2rem',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 15,
        }}
      >
        <a 
          href="https://delivery.popeyesbrasil.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pop-btn-primary pop-interactive"
        >
          <span>{FINAL_CONTENT.primaryCta}</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        <a 
          href="#lojas" 
          onClick={(e) => { e.preventDefault(); alert('Em breve: localizador de restaurantes Popeyes Brasil.'); }}
          className="pop-btn-ghost pop-interactive"
        >
          <span>{FINAL_CONTENT.secondaryCta}</span>
        </a>

        <a 
          href="#app" 
          onClick={(e) => { e.preventDefault(); alert('Em breve: aplicativo Popeyes Brasil.'); }}
          className="pop-btn-ghost pop-interactive"
        >
          <span>{FINAL_CONTENT.appCta}</span>
        </a>
      </div>
    </section>
  );
}
