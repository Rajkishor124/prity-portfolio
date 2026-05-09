import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../constants/config';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="navbar-header"
        style={{
          padding: isScrolled ? '12px 0' : '20px 0',
          background: isScrolled ? 'rgba(6, 6, 11, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(1.5)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        }}
      >
        <div className="container navbar-container">
          <a href="#" className="navbar-logo">
            <div className="navbar-logo-icon">
              PK
            </div>
            <span className="navbar-logo-text">
              {PORTFOLIO_CONFIG.name}
              <span style={{ color: 'var(--accent-primary)' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href={`mailto:${PORTFOLIO_CONFIG.contactEmail}`}
              className="btn btn-primary nav-hire-btn"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="mobile-toggle"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-nav-overlay"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-nav-close"
              aria-label="Close navigation menu"
            >
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="mobile-nav-link"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={`mailto:${PORTFOLIO_CONFIG.contactEmail}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * navLinks.length }}
              className="btn btn-primary mobile-nav-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 1;
          min-width: 0;
          overflow: hidden;
        }

        .navbar-logo-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          flex-shrink: 0;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          color: white;
          flex-shrink: 0;
        }

        .navbar-logo-text {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          letter-spacing: -0.02em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .desktop-nav {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .nav-link {
          padding: 8px 16px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: transparent;
          transition: all 0.3s ease;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: var(--glass-highlight);
        }

        .nav-link-active {
          color: var(--accent-primary);
          background: rgba(139, 92, 246, 0.08);
        }

        .nav-hire-btn {
          padding: 8px 20px;
          font-size: 0.85rem;
          margin-left: 8px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
          -webkit-tap-highlight-color: transparent;
          flex-shrink: 0;
          z-index: 10;
        }

        .mobile-nav-overlay {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(6, 6, 11, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 24px;
        }

        .mobile-nav-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 8px;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-nav-link {
          font-size: 1.8rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          padding: 12px 24px;
          color: var(--text-primary);
          transition: color 0.3s ease;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          color: var(--accent-primary);
        }

        .mobile-nav-cta {
          margin-top: 24px;
          padding: 14px 40px;
          font-size: 1rem;
        }

        /* ===== RESPONSIVE ===== */

        /* Hide desktop nav, show mobile toggle at ≤ 768px */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; align-items: center; justify-content: center; }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .navbar-logo-icon {
            width: 34px;
            height: 34px;
            border-radius: 8px;
            font-size: 0.8rem;
          }

          .navbar-logo-text {
            font-size: 0.95rem;
          }

          .navbar-logo {
            gap: 8px;
          }

          .mobile-toggle {
            padding: 10px;
          }

          .mobile-nav-link {
            font-size: 1.4rem;
            padding: 10px 20px;
          }

          .mobile-nav-cta {
            padding: 12px 32px;
            font-size: 0.9rem;
          }

          .mobile-nav-close {
            top: 16px;
            right: 16px;
          }
        }

        /* Tablet landscape — show desktop nav with tighter spacing */
        @media (min-width: 769px) and (max-width: 1024px) {
          .nav-link {
            padding: 8px 10px;
            font-size: 0.8rem;
          }

          .nav-hire-btn {
            padding: 7px 16px;
            font-size: 0.8rem;
            margin-left: 4px;
          }
        }
      `}</style>
    </>
  );
}
