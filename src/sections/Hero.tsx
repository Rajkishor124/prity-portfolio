import { motion } from 'framer-motion';
import { ArrowDown, Code2, BookOpen, Mail } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../constants/config';

export function Hero() {
  return (
    <section
      id="home"
      className="mesh-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated Glow Orbs — clamped sizes for mobile */}
      <div className="glow-orb" style={{
        top: '15%', left: '10%',
        width: 'min(400px, 60vw)', height: 'min(400px, 60vw)',
        background: 'rgba(139, 92, 246, 0.12)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div className="glow-orb" style={{
        bottom: '10%', right: '5%',
        width: 'min(350px, 50vw)', height: 'min(350px, 50vw)',
        background: 'rgba(236, 72, 153, 0.10)',
        animation: 'float-delayed 10s ease-in-out infinite',
      }} />
      <div className="glow-orb" style={{
        top: '50%', right: '30%',
        width: 'min(250px, 40vw)', height: 'min(250px, 40vw)',
        background: 'rgba(6, 182, 212, 0.08)',
        animation: 'float 12s ease-in-out infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-layout">
          {/* Text Column */}
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-status-badge"
            >
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)',
                animation: 'pulse-glow 2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-heading"
            >
              Hi, I'm{' '}
              <span className="text-gradient">{PORTFOLIO_CONFIG.name}</span>
              <br />
              <span className="hero-role">
                {PORTFOLIO_CONFIG.role}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-bio"
            >
              {PORTFOLIO_CONFIG.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-cta"
            >
              <a href="#projects" className="btn btn-primary">
                View My Projects
                <ArrowDown size={18} />
              </a>
              <a href="#contact" className="btn btn-outline">
                <Mail size={18} />
                Get In Touch
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hero-stats"
            >
              {[
                { icon: <Code2 size={18} />, label: 'Projects Built', value: '3+' },
                { icon: <BookOpen size={18} />, label: 'Technologies', value: '10+' },
              ].map((stat, i) => (
                <div key={i} className="hero-stat-item">
                  <div className="hero-stat-icon">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="hero-stat-value">
                      {stat.value}
                    </div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="hero-image-col"
          >
            <div className="hero-image-wrapper">
              {/* Decorative background glow */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'var(--gradient-primary)',
                filter: 'blur(30px)',
                opacity: 0.5,
                borderRadius: '50%',
                animation: 'pulse-glow 4s ease-in-out infinite alternate',
              }} />
              
              {/* Image Container */}
              <div className="hero-image-container"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
                  e.currentTarget.style.border = '2px solid rgba(139, 92, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotate(2deg) scale(1)';
                  e.currentTarget.style.border = '2px solid rgba(255, 255, 255, 0.1)';
                }}
              >
                <img 
                  src="/profile.png" 
                  alt="Prity Kumari" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                  }} 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden on small screens via CSS */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hero-scroll-indicator"
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
        }} />
      </motion.div>

      <style>{`
        .hero-layout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap-reverse;
        }

        .hero-text {
          flex: 1 1 440px;
          max-width: 800px;
          min-width: 0;
        }

        .hero-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border-radius: 100px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.15);
          margin-bottom: 32px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--accent-primary);
        }

        .hero-heading {
          font-size: clamp(2rem, 7vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
        }

        .hero-role {
          color: var(--text-secondary);
          font-size: 0.65em;
          font-weight: 600;
        }

        .hero-bio {
          font-size: clamp(0.92rem, 2vw, 1.2rem);
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
        }

        .hero-stats {
          display: flex;
          gap: 32px;
          margin-top: 60px;
          padding-top: 32px;
          border-top: 1px solid var(--glass-border);
          flex-wrap: wrap;
        }

        .hero-stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero-stat-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }

        .hero-stat-value {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.3rem;
        }

        .hero-stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .hero-image-col {
          flex: 1 1 260px;
          display: flex;
          justify-content: center;
          max-width: 100%;
        }

        .hero-image-wrapper {
          width: clamp(220px, 35vw, 400px);
          aspect-ratio: 1 / 1;
          position: relative;
        }

        .hero-image-container {
          width: 100%;
          height: 100%;
          border-radius: 30px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.1);
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          transform: rotate(2deg);
          transition: transform 0.4s ease, border 0.4s ease;
        }

        .hero-scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: var(--text-muted);
          font-size: 0.75rem;
          letter-spacing: 0.1em;
        }

        /* ===== RESPONSIVE ===== */

        /* Phones: ≤480px */
        @media (max-width: 480px) {
          .hero-layout {
            gap: 24px;
            justify-content: center;
          }

          .hero-text {
            flex-basis: 100%;
            text-align: center;
          }

          .hero-status-badge {
            font-size: 0.72rem;
            padding: 6px 14px;
            margin-bottom: 20px;
          }

          .hero-heading {
            font-size: clamp(1.8rem, 9vw, 2.8rem);
            margin-bottom: 16px;
          }

          .hero-role {
            font-size: 0.6em;
          }

          .hero-bio {
            font-size: 0.88rem;
            margin-bottom: 28px;
            line-height: 1.7;
          }

          .hero-cta {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }

          .hero-cta .btn {
            width: 100%;
            justify-content: center;
          }

          .hero-stats {
            margin-top: 36px;
            padding-top: 24px;
            gap: 20px;
            justify-content: center;
          }

          .hero-stat-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }

          .hero-stat-value {
            font-size: 1.1rem;
          }

          .hero-stat-label {
            font-size: 0.72rem;
          }

          .hero-image-col {
            flex-basis: 100%;
          }

          .hero-image-wrapper {
            width: min(180px, 50vw);
          }

          .hero-image-container {
            border-radius: 20px;
            transform: rotate(0deg);
          }

          .hero-scroll-indicator {
            display: none !important;
          }
        }

        /* Small tablets: 481px – 768px */
        @media (min-width: 481px) and (max-width: 768px) {
          .hero-layout {
            gap: 32px;
            justify-content: center;
          }

          .hero-text {
            flex-basis: 100%;
            text-align: center;
          }

          .hero-heading {
            font-size: clamp(2rem, 7vw, 3.2rem);
          }

          .hero-bio {
            margin-left: auto;
            margin-right: auto;
            font-size: 0.95rem;
          }

          .hero-cta {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
            margin-top: 40px;
          }

          .hero-image-col {
            flex-basis: 100%;
          }

          .hero-image-wrapper {
            width: min(300px, 50vw);
          }

          .hero-scroll-indicator {
            bottom: 24px;
          }
        }

        /* Tablets: 769px – 1024px */
        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-text {
            flex: 1 1 360px;
          }

          .hero-heading {
            font-size: clamp(2.2rem, 5vw, 3.5rem);
          }

          .hero-image-wrapper {
            width: clamp(250px, 30vw, 340px);
          }
        }
      `}</style>
    </section>
  );
}
