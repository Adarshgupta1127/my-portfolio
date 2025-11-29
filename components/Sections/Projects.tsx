import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { ExternalLink, Code2 } from 'lucide-react';

const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [10, -10]);
  const rotateY = useTransform(mouseX, [-200, 200], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group relative h-full bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-200"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="p-8 flex flex-col h-full relative z-10">
          <div className="flex justify-between items-start mb-6">
            <span className={`text-xs font-mono py-1 px-3 rounded-full border ${
              project.category === 'AI/ML' ? 'border-accent/30 text-accent bg-accent/5' : 
              project.category === 'DevOps' ? 'border-orange-500/30 text-orange-400 bg-orange-500/5' :
              'border-secondary/30 text-secondary bg-secondary/5'
            }`}>
              {project.category}
            </span>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Code2 size={18} />
              </a>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <div className="space-y-2 mb-6 flex-grow">
            {project.description.map((desc: string, i: number) => (
              <p key={i} className="text-gray-400 text-sm leading-relaxed">• {desc}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
            {project.tech.map((t: string) => (
              <span key={t} className="text-xs text-gray-500 font-mono">
                #{t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative py-32 px-6 z-10" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A selection of projects exploring AI agents, Geo-spatial data, and modern web architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((proj, index) => (
            <ProjectCard key={proj.id} project={proj} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;