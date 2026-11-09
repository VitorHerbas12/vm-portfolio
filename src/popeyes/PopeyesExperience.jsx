import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductExperience from './components/ProductExperience';
import HistoryExperience from './components/HistoryExperience';
import ProductInteraction from './components/ProductInteraction';
import NewsReveal from './components/NewsReveal';
import ZampSection from './components/ZampSection';
import FinalExperience from './components/FinalExperience';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import './styles/popeyes.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * POPEYES® BRASIL — EXPERIÊNCIA CINEMATOGRÁFICA & EDITORIAL
 * 
 * Arquitetura de experiência fluida, sem cortes bruscos entre seções.
 * Movimento controlado por scroll timeline, 80% calma, 20% surpresa.
 */
export default function PopeyesExperience() {
  useEffect(() => {
    // Garante que o topo seja carregado limpo
    window.scrollTo(0, 0);

    // Atualização dos gatilhos do ScrollTrigger após montagem completa
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="popeyes-root">
      {/* 1. Película sutil de ruído cinematográfico (Film Grain) */}
      <div className="pop-film-grain" />

      {/* 2. Cursor Contextual Minimalista */}
      <CustomCursor />

      {/* 3. Navegação Flutuante Minimalista */}
      <Navbar />

      {/* 4. Sequência Cinematográfica Contínua */}
      <main id="main-content">
        {/* 01 — INTRO / HERO */}
        <Hero />

        {/* 02 — EXPERIÊNCIA DO PRODUTO */}
        <ProductExperience />

        {/* 03 — HISTÓRIA (SEQUÊNCIA HORIZONTAL CONTROLADA POR SCROLL) */}
        <HistoryExperience />

        {/* 04 — INTERAÇÃO / MOMENTO DE PRODUTO */}
        <ProductInteraction />

        {/* 05 — NOVIDADES (IMAGEM EXPANDINDO COM O SCROLL) */}
        <NewsReveal />

        {/* 06 — POPEYES + ZAMP (INSTITUCIONAL EDITORIAL) */}
        <ZampSection />

        {/* 07 — CENA FINAL */}
        <FinalExperience />
      </main>

      {/* 08 — ENCERRAMENTO (FOOTER) */}
      <Footer />

      {/* Switcher Discreto para Navegação entre Popeyes Brasil e Portfólio VM */}
      <div className="pop-portfolio-switch-bar">
        <span>POPEYES® PROTOTYPE</span>
        <span style={{ opacity: 0.35 }}>|</span>
        <Link to="/portfolio" className="pop-switch-link pop-interactive">
          Ver Portfólio de Vitor
        </Link>
      </div>
    </div>
  );
}
