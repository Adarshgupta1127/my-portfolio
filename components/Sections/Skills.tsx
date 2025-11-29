import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';
import Card from '../UI/Card';

const SkillPill: React.FC<{ skill: string; index: number }> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index 
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: [-1, 1, -1],
        boxShadow: "0px 0px 8px rgb(6, 182, 212)" 
      }}
      className="inline-block px-4 py-2 m-1 rounded-lg bg-slate-800/50 border border-white/5 text-sm font-medium text-gray-300 hover:text-white hover:border-secondary/50 hover:bg-secondary/10 cursor-default transition-colors"
    >
      {skill}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative py-32 px-6 z-10" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Technical Arsenal
          </h2>
          <p className="text-gray-400">Technologies I use to build the future</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, catIndex) => (
            <Card 
              key={category.category} 
              delay={catIndex * 0.1}
              className="p-6 h-full flex flex-col items-start bg-gradient-to-b from-white/5 to-transparent"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-gradient-to-b from-secondary to-transparent rounded-full" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillPill key={skill} skill={skill} index={skillIndex} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;