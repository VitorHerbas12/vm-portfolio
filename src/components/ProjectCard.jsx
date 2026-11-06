import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectMockup from './ui/ProjectMockup';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-preview-wrap"
        title={`Acessar ${project.title} ao vivo`}
      >
        <ProjectMockup slug={project.slug} />
        <span className="project-index-badge">0{index + 1}</span>
        <div className="project-preview-hover-tag">
          <span>Abrir Projeto ao Vivo ↗</span>
        </div>
      </a>

      <p className="eyebrow">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      <div className="tags">
        {project.tech.map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="project-card-footer-links">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link-primary"
        >
          Acessar Projeto ao Vivo <span className="arrow">↗</span>
        </a>

        <Link to={`/projects/${project.slug}`} className="project-link-subtle">
          Ver Detalhes →
        </Link>
      </div>
    </motion.article>
  );
}
