import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectMockup from '../components/ui/ProjectMockup';

export default function ProjectPage() {
  const { slug } = useParams();
  const p = projects.find(x => x.slug === slug);

  if (!p) {
    return (
      <main className="simple-page">
        <header className="project-page-header">
          <Link to="/" className="back-capsule">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Voltar ao Início</span>
          </Link>
        </header>
        <p className="eyebrow">404</p>
        <h1>Projeto não encontrado.</h1>
        <Link to="/" className="button primary">
          ← Voltar à Página Principal
        </Link>
      </main>
    );
  }

  const currentIndex = projects.findIndex(x => x.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="project-detail-layout">
      {/* Top Floating Navigation */}
      <header className="project-page-header">
        <Link to="/" className="back-capsule" aria-label="Voltar para a página principal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Voltar ao Início</span>
        </Link>

        <div className="project-header-right">
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-live-btn"
          >
            Acessar Projeto ao Vivo ↗
          </a>
          <Link to="/" className="project-header-brand" title="Ir para home">
            <span className="brand-dot" /> VM
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="project-detail-content">
        <div className="project-detail-hero">
          <div className="project-category-badge">{p.category}</div>
          <h1 className="project-detail-title">{p.title}</h1>
          <p className="project-detail-desc">{p.description}</p>

          <div className="tags">
            {p.tech.map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <div className="project-cta-row">
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              Abrir Projeto em Nova Aba ({p.title}) ↗
            </a>
          </div>
        </div>

        {/* Live UI Mockup Preview */}
        <div className="project-detail-preview">
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-frame-link"
            title="Clique para abrir o projeto ao vivo"
          >
            <div className="preview-frame">
              <ProjectMockup slug={p.slug} />
            </div>
            <div className="preview-overlay-tag">
              <span>Clique para abrir o protótipo real ↗</span>
            </div>
          </a>
        </div>

        {/* Bottom Navigation */}
        <div className="project-detail-footer">
          <Link to="/" className="button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Voltar a Todos os Projetos
          </Link>

          {nextProject && (
            <Link to={`/projects/${nextProject.slug}`} className="button primary">
              Próximo Projeto: {nextProject.title} →
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
