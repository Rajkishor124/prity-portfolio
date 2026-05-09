import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../constants/config';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="section relative bg-bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">02.</span> Technical Skills
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {PORTFOLIO_CONFIG.skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel p-6 flex flex-col items-center justify-center gap-4 group cursor-default"
              >
                <div className="text-4xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-text-primary">{skill.name}</h3>
                  <p className="text-sm text-text-secondary mt-1">{skill.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
