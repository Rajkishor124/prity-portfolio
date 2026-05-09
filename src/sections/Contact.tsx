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
          <h2 className="contact-heading">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="contact-subtitle">
            I'm currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi — I'll try my best to get back to you!
          </p>

          {/* CTA Button */}
          <a
            href={`mailto:${PORTFOLIO_CONFIG.contactEmail}`}
            className="btn btn-primary contact-cta-btn"
          >
            <Mail size={20} />
            Say Hello
            <ArrowUpRight size={18} />
          </a>

          {/* Social Links */}
          <div className="contact-socials">
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
                className="contact-social-link"
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="container">
          <p className="contact-footer-text">
            Designed & Built by {PORTFOLIO_CONFIG.name}
          </p>
          <p className="contact-footer-copyright">
            © {new Date().getFullYear()} • All rights reserved
          </p>
        </div>
      </footer>

      <style>{`
        .contact-heading {
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .contact-subtitle {
          color: var(--text-secondary);
          font-size: clamp(0.92rem, 2vw, 1.1rem);
          line-height: 1.8;
          max-width: 550px;
          margin: 0 auto 48px;
          padding: 0 8px;
        }

        .contact-cta-btn {
          font-size: 1.05rem;
          padding: 16px 40px;
          margin-bottom: 56px;
          display: inline-flex;
        }

        .contact-socials {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .contact-social-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 14px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .contact-social-link:hover {
          border-color: rgba(139, 92, 246, 0.3);
          color: var(--accent-primary);
          background: var(--glass-highlight);
        }

        .contact-footer {
          margin-top: 40px;
          padding-top: 32px;
          border-top: 1px solid var(--glass-border);
          text-align: center;
          padding-bottom: 32px;
        }

        .contact-footer-text {
          color: var(--text-muted);
          font-size: 0.85rem;
          font-family: 'JetBrains Mono', monospace;
        }

        .contact-footer-copyright {
          color: var(--text-muted);
          font-size: 0.75rem;
          margin-top: 8px;
          font-family: 'JetBrains Mono', monospace;
        }

        /* ===== RESPONSIVE ===== */

        @media (max-width: 480px) {
          .contact-heading {
            font-size: clamp(1.5rem, 8vw, 2rem);
          }

          .contact-subtitle {
            font-size: 0.88rem;
            margin-bottom: 32px;
          }

          .contact-cta-btn {
            font-size: 0.92rem;
            padding: 14px 28px;
            margin-bottom: 36px;
            width: 100%;
            justify-content: center;
          }

          .contact-socials {
            gap: 10px;
            margin-bottom: 32px;
          }

          .contact-social-link {
            padding: 10px 18px;
            font-size: 0.82rem;
            border-radius: 12px;
            gap: 8px;
            flex: 1 1 calc(50% - 10px);
            min-width: 120px;
            justify-content: center;
          }

          .contact-footer {
            margin-top: 24px;
            padding-top: 24px;
            padding-bottom: 24px;
          }

          .contact-footer-text {
            font-size: 0.75rem;
          }

          .contact-footer-copyright {
            font-size: 0.68rem;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .contact-cta-btn {
            font-size: 0.95rem;
            padding: 14px 32px;
            margin-bottom: 40px;
          }

          .contact-socials {
            gap: 12px;
            margin-bottom: 40px;
          }

          .contact-social-link {
            padding: 10px 20px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
