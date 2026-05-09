import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, ExternalLink, Star, Code2 } from 'lucide-react';
import type { GitHubRepo } from '../services/github';
import { fetchGithubRepos } from '../services/github';
import { PORTFOLIO_CONFIG } from '../constants/config';

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      const data = await fetchGithubRepos(PORTFOLIO_CONFIG.githubUsername);
      setRepos(data);
      setLoading(false);
    };

    getRepos();
  }, []);

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
    <section id="projects" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <h2 className="section-title !mb-0">
              <span className="text-gradient">03.</span> Featured Projects
            </h2>
            <a 
              href={PORTFOLIO_CONFIG.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-accent-primary hover:text-accent-secondary transition-colors flex items-center gap-2 mt-4 md:mt-0"
            >
              View all on GitHub <ExternalLink size={16} />
            </a>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-4 border-glass-border border-t-accent-primary rounded-full animate-spin" />
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {repos.length > 0 ? (
                repos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    variants={itemVariants}
                    className="glass-panel p-6 flex flex-col h-full group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 glass-panel text-accent-primary group-hover:text-white group-hover:bg-accent-primary transition-colors">
                        <Code2 size={24} />
                      </div>
                      <div className="flex gap-4 items-center">
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1 text-text-secondary text-sm">
                            <Star size={14} /> {repo.stargazers_count}
                          </span>
                        )}
                        <a 
                          href={repo.html_url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-text-secondary hover:text-accent-primary transition-colors"
                        >
                          <Globe size={20} />
                        </a>
                        {repo.homepage && (
                          <a 
                            href={repo.homepage} 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-text-secondary hover:text-accent-secondary transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                      {repo.description || 'No description provided.'}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-glass-border">
                      {repo.topics && repo.topics.length > 0 ? (
                        repo.topics.slice(0, 3).map((topic) => (
                          <span key={topic} className="text-xs font-medium text-accent-secondary px-2 py-1 glass-panel rounded-full">
                            {topic}
                          </span>
                        ))
                      ) : repo.language ? (
                        <span className="text-xs font-medium text-accent-tertiary px-2 py-1 glass-panel rounded-full">
                          {repo.language}
                        </span>
                      ) : null}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-20 text-text-secondary glass-panel">
                  <p>No repositories found. Please check the GitHub username in config.</p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
