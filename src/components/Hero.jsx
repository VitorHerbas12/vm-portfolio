import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FlowField from './FlowField';
import SplitText from './ui/SplitText';

const formatBrazilTime = () =>
  new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date());

export default function Hero() {
  const [time, setTime] = useState(formatBrazilTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatBrazilTime()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="hero hero-flow">
      <div className="hero-waves">
        <FlowField />
      </div>

      <div className="hero-copy">
        <div className="hero-status-pill">
          <span className="status-dot-pulse" />
          <span className="status-pill-text">AVAILABLE FOR SELECT PROJECTS · SÃO PAULO, BR {time}</span>
        </div>

        <h1 className="hero-main-title">
          <SplitText
            text="VITOR"
            tag="span"
            className="hero-title-line"
            effect="rise"
            hoverEffect="lift"
            trigger="load"
            delay={40}
            duration={1.1}
          />
          <br />
          <SplitText
            text="HERBAS"
            tag="span"
            className="hero-title-line"
            effect="rise"
            hoverEffect="lift"
            trigger="load"
            delay={50}
            duration={1.2}
          />
        </h1>

        <p className="hero-subtitle">
          Front-End Engineer & Digital Designer crafting high-fidelity web applications, automated dashboards, and interactive interfaces with uncompromising attention to detail.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">Explore Work</a>
          <a className="button" href="#contact">Get in Touch</a>
        </div>
      </div>

      <div className="portfolio-word">PORTFOLIO</div>
    </section>
  );
}
