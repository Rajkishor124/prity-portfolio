import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../constants/config';

export function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// my work</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of projects showcasing my skills in Python, AI/ML, and Data Analytics.
          </p>

          <div className="projects-grid">
            {PORTFOLIO_CONFIG.projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                {/* Top Gradient Strip */}
                <div style={{
                  height: '4px',
                  background: i === 0 ? 'var(--gradient-primary)' : i === 1 ? 'var(--gradient-warm)' : 'var(--gradient-secondary)',
                }} />

                <div className="project-card-body">
                  <span className="project-category" style={{
                    background: i === 0 ? 'rgba(139, 92, 246, 0.1)' : i === 1 ? 'rgba(245, 158, 11, 0.1)' : 'rgba(6, 182, 212, 0.1)',
                    color: i === 0 ? 'var(--accent-primary)' : i === 1 ? 'var(--accent-warm)' : 'var(--accent-tertiary)',
                  }}>
                    {project.category}
                  </span>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <a
                      href={project.link}
                      className="project-link"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
          gap: 24px;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-primary);
          transition: all 0.3s ease;
        }

        .project-link:hover {
          gap: 12px;
          color: var(--accent-secondary);
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
