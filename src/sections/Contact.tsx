import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../constants/config';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section relative">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-accent-primary font-medium mb-4">
            05. What's Next?
          </h2>
          
          <h3 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Get In Touch
          </h3>
          
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href={`mailto:${PORTFOLIO_CONFIG.contactEmail}`}
            className="btn btn-primary text-lg px-8 py-4 inline-flex group"
          >
            Say Hello
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </motion.div>
      </div>

      <footer className="mt-32 pb-8 text-center text-text-secondary text-sm">
        <div className="container">
          <p>Designed & Built by {PORTFOLIO_CONFIG.name}</p>
        </div>
      </footer>
    </section>
  );
}
