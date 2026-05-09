import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../constants/config';

export function Skills() {
  // Group skills by category
  const categories = [...new Set(PORTFOLIO_CONFIG.skills.map(s => s.category))];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// what I know</p>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I've been working with recently.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              >
                <h3 style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'var(--accent-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--glass-border)',
                }}>
                  {category}
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '12px',
                }}>
                  {PORTFOLIO_CONFIG.skills
                    .filter(s => s.category === category)
                    .map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        className="skill-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <span className="skill-icon">{skill.icon}</span>
                        <div className="skill-info">
                          <div className="skill-name">{skill.name}</div>
                          <div className="skill-category">{skill.category}</div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
