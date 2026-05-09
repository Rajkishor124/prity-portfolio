import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../constants/config';
import { GraduationCap } from 'lucide-react';

export function Timeline() {
  return (
    <section id="experience" className="section relative bg-bg-secondary/30">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">04.</span> Experience & Education
          </h2>

          <div className="relative border-l border-glass-border ml-4 md:ml-0 md:pl-0">
            {PORTFOLIO_CONFIG.education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-10 ml-8 relative"
              >
                <span className="absolute -left-12 flex items-center justify-center w-8 h-8 rounded-full bg-bg-secondary border border-accent-primary text-accent-primary z-10">
                  <GraduationCap size={16} />
                </span>
                
                <div className="glass-panel p-6">
                  <span className="text-sm font-medium text-accent-secondary mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-text-primary">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
