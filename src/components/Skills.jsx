import { motion } from 'framer-motion';
import { techStack } from '../data/content';
import {
  HtmlLogo,
  CssLogo,
  JsLogo,
  ReactLogo,
  ViteLogo,
  GithubLogo,
  VercelLogo,
  FigmaLogo,
  BlenderLogo,
  ThreeLogo,
  ArrowUpRight
} from './ui/Icons';

const iconMap = {
  html: <HtmlLogo />,
  css: <CssLogo />,
  javascript: <JsLogo />,
  react: <ReactLogo />,
  vite: <ViteLogo />,
  github: <GithubLogo />,
  vercel: <VercelLogo />,
  figma: <FigmaLogo />,
  blender: <BlenderLogo />,
  three: <ThreeLogo />
};

export default function Skills() {
  return (
    <section id="skills" className="tech-stack-section">
      {/* Ambient background glow & waves */}
      <div className="tech-ambient-glow" aria-hidden="true" />

      <div className="tech-container">
        {/* Header matching the reference image */}
        <div className="tech-header">
          <div className="tech-header-left">
            <div className="tech-badge">
              <span className="tech-badge-slash">/</span>
              <span className="tech-badge-text">TECH STACK</span>
              <span className="tech-badge-line" />
            </div>
            <h2 className="tech-title">
              Tecnologias <span className="tech-title-accent">& Ferramentas</span>
            </h2>
            <p className="tech-subtitle">
              Stack que utilizo para desenvolver interfaces modernas, experiências interativas e soluções digitais completas.
            </p>
          </div>

          <div className="tech-header-right">
            <span className="tech-portfolio-tag">/ PORTFOLIO</span>
            <span className="tech-author-tag">VITOR HERBAS</span>
          </div>
        </div>

        {/* 10 Cards Grid */}
        <div className="tech-grid">
          {techStack.map((item, index) => (
            <motion.div
              key={item.name}
              className="tech-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="tech-card-arrow" aria-hidden="true">
                <ArrowUpRight />
              </div>

              <div className="tech-card-icon">
                {iconMap[item.icon]}
              </div>

              <h3 className="tech-card-name notranslate" translate="no">{item.name}</h3>
              <p className="tech-card-desc">{item.desc}</p>
              
              <div className="tech-card-indicator" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
