import { motion } from 'framer-motion';
import { Code2, User, Mail } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../constants/config';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" id="home">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent-primary font-medium mb-4 tracking-wide"
          >
            Hi there, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight"
          >
            {PORTFOLIO_CONFIG.name}.
            <br />
            <span className="text-text-secondary text-5xl md:text-7xl">
              I build things for the web.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed"
          >
            {PORTFOLIO_CONFIG.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            
            <div className="flex gap-4">
              <a 
                href={PORTFOLIO_CONFIG.socialLinks.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 glass-panel hover:text-accent-primary"
              >
                <Code2 size={20} />
              </a>
              <a 
                href={PORTFOLIO_CONFIG.socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 glass-panel hover:text-accent-tertiary"
              >
                <User size={20} />
              </a>
              <a 
                href={`mailto:${PORTFOLIO_CONFIG.contactEmail}`}
                className="p-3 glass-panel hover:text-accent-secondary"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
