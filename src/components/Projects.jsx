import ProjectCard from './ProjectCard';
import {projects} from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow">SELECTED WORKS & CASE STUDIES</p>
      <div className="projects-grid">
        {projects.map((p,i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

