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
      {/* Animated Glow Orbs */}
      <div className="glow-orb" style={{
        top: '15%', left: '10%', width: '400px', height: '400px',
        background: 'rgba(139, 92, 246, 0.12)',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div className="glow-orb" style={{
        bottom: '10%', right: '5%', width: '350px', height: '350px',
        background: 'rgba(236, 72, 153, 0.10)',
        animation: 'float-delayed 10s ease-in-out infinite',
      }} />
      <div className="glow-orb" style={{
        top: '50%', right: '30%', width: '250px', height: '250px',
        background: 'rgba(6, 182, 212, 0.08)',
        animation: 'float 12s ease-in-out infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '100px',
              background: 'rgba(139, 92, 246, 0.08)',
              border: '1px solid rgba(139, 92, 246, 0.15)',
              marginBottom: '32px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.85rem',
              color: 'var(--accent-primary)',
            }}
          >
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 12px rgba(34, 197, 94, 0.5)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: '24px',
              letterSpacing: '-0.03em',
            }}
          >
            Hi, I'm{' '}
            <span className="text-gradient">{PORTFOLIO_CONFIG.name.split(' ')[0]}</span>
            <br />
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.65em', fontWeight: 600 }}>
              {PORTFOLIO_CONFIG.role}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}
          >
            {PORTFOLIO_CONFIG.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}
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
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '60px',
              paddingTop: '32px',
              borderTop: '1px solid var(--glass-border)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: <Code2 size={18} />, label: 'Projects Built', value: '3+' },
              { icon: <BookOpen size={18} />, label: 'Technologies', value: '10+' },
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '12px',
                  background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)',
                }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '1.3rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
        }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--accent-primary), transparent)',
        }} />
      </motion.div>
    </section>
  );
}
