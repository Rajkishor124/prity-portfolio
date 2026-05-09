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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isScrolled ? '12px 0' : '20px 0',
          background: isScrolled ? 'rgba(6, 6, 11, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(1.5)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: '1.1rem',
              color: 'white',
            }}>
              P
            </div>
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '-0.02em',
            }}>
              {PORTFOLIO_CONFIG.name.split(' ')[0]}
              <span style={{ color: 'var(--accent-primary)' }}>.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-nav">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: activeSection === link.href.replace('#', '') ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  background: activeSection === link.href.replace('#', '') ? 'rgba(139, 92, 246, 0.08)' : 'transparent',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.color = 'var(--text-primary)';
                  (e.target as HTMLElement).style.background = 'var(--glass-highlight)';
                }}
                onMouseLeave={e => {
                  const isActive = activeSection === link.href.replace('#', '');
                  (e.target as HTMLElement).style.color = isActive ? 'var(--accent-primary)' : 'var(--text-secondary)';
                  (e.target as HTMLElement).style.background = isActive ? 'rgba(139, 92, 246, 0.08)' : 'transparent';
                }}
              >
                {link.name}
              </motion.a>
            ))}
            <a
              href={`mailto:${PORTFOLIO_CONFIG.contactEmail}`}
              className="btn btn-primary"
              style={{ padding: '8px 20px', fontSize: '0.85rem', marginLeft: '8px' }}
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '8px',
            }}
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
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(6, 6, 11, 0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
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
                style={{
                  fontSize: '1.8rem',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  padding: '12px 24px',
                  color: 'var(--text-primary)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = 'var(--accent-primary)'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
