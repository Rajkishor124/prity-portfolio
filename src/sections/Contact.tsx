import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../constants/config';
import { ArrowUpRight, Mail, Code2, BookOpen } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label">// let's connect</p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            marginBottom: '20px',
            letterSpacing: '-0.03em',
          }}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            maxWidth: '550px',
            margin: '0 auto 48px',
          }}>
            I'm currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi — I'll try my best to get back to you!
          </p>

          {/* CTA Button */}
          <a
            href={`mailto:${PORTFOLIO_CONFIG.contactEmail}`}
            className="btn btn-primary"
            style={{ fontSize: '1.05rem', padding: '16px 40px', marginBottom: '56px', display: 'inline-flex' }}
          >
            <Mail size={20} />
            Say Hello
            <ArrowUpRight size={18} />
          </a>

          {/* Social Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}>
            {[
              { label: 'GitHub', href: PORTFOLIO_CONFIG.socialLinks.github, icon: <Code2 size={18} /> },
              { label: 'LinkedIn', href: PORTFOLIO_CONFIG.socialLinks.linkedin, icon: <BookOpen size={18} /> },
              { label: 'LeetCode', href: PORTFOLIO_CONFIG.socialLinks.leetcode, icon: <BookOpen size={18} /> },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  borderRadius: '14px',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139, 92, 246, 0.3)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '40px',
        paddingTop: '32px',
        borderTop: '1px solid var(--glass-border)',
        textAlign: 'center',
        paddingBottom: '32px',
      }}>
        <div className="container">
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            Designed & Built by {PORTFOLIO_CONFIG.name}
          </p>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            marginTop: '8px',
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
}
