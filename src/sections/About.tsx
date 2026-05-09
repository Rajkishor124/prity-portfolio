import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../constants/config';

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">01.</span> About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Hello! My name is {PORTFOLIO_CONFIG.name} and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
              </p>
              <p>
                {PORTFOLIO_CONFIG.bio}
              </p>
              <p>
                Whether I'm working on frontend interfaces or backend systems, I strive to deliver high-quality code and exceptional user experiences.
              </p>
            </div>

            <div className="relative group mx-auto md:mx-0 max-w-sm w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative glass-panel p-8 aspect-square flex flex-col items-center justify-center rounded-2xl overflow-hidden">
                {/* Fallback avatar if no image */}
                <img src="/logo.png" alt="Profile" className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent-primary/30 rounded-2xl transition-colors duration-500" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
