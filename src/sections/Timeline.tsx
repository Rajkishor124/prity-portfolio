import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../constants/config';

export function Timeline() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// my journey</p>
          <h2 className="section-title">
            Education & <span className="text-gradient">Timeline</span>
          </h2>
          <p className="section-subtitle">
            My academic journey and milestones along the way.
          </p>

          <div className="timeline">
            {PORTFOLIO_CONFIG.education.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
