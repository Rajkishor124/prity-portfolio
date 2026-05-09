import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../constants/config';
import { MapPin, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// about me</p>
          <h2 className="section-title">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle">
            A passionate developer who loves turning ideas into reality through code.
          </p>

          <div className="about-grid">
            {/* Bio Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="glass-panel-static about-bio-panel">
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  Hello! I'm <strong style={{ color: 'var(--text-primary)' }}>{PORTFOLIO_CONFIG.name}</strong>, 
                  a Computer Science undergraduate passionate about Data Analytics and AI/ML. I have good knowledge 
                  of Python, SQL, and problem-solving.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: '16px', fontSize: '0.95rem' }}>
                  I'm comfortable working with data, databases, and backend development concepts. Currently, I'm 
                  improving my analytical and technical skills through projects and continuous learning.
                </p>
              </div>

              {/* Location Badge */}
              <div className="about-location-badge">
                <MapPin size={18} style={{ color: 'var(--accent-secondary)', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {PORTFOLIO_CONFIG.location}
                </span>
              </div>
            </div>

            {/* Learning & Growth Column */}
            <div className="glass-panel-static about-learning-panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <Sparkles size={20} style={{ color: 'var(--accent-warm)', flexShrink: 0 }} />
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 700 }}>
                  Learning & Growth
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {PORTFOLIO_CONFIG.learning.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="about-learning-item"
                    whileHover={{
                      x: 4,
                      backgroundColor: 'rgba(139, 92, 246, 0.08)',
                    }}
                  >
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: 'var(--accent-primary)', marginTop: '8px', flexShrink: 0,
                    }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
          gap: 40px;
          align-items: start;
        }

        .about-bio-panel {
          padding: 32px;
        }

        .about-location-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: 14px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
        }

        .about-learning-panel {
          padding: 32px;
        }

        .about-learning-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(139, 92, 246, 0.04);
          border: 1px solid rgba(139, 92, 246, 0.08);
          transition: all 0.3s ease;
        }

        @media (max-width: 480px) {
          .about-grid {
            gap: 24px;
          }

          .about-bio-panel,
          .about-learning-panel {
            padding: 20px;
          }

          .about-bio-panel p,
          .about-learning-item span:last-child {
            font-size: 0.88rem !important;
          }

          .about-location-badge {
            padding: 12px 16px;
            border-radius: 12px;
          }

          .about-learning-item {
            padding: 12px 14px;
            gap: 10px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .about-grid {
            gap: 28px;
          }

          .about-bio-panel,
          .about-learning-panel {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
