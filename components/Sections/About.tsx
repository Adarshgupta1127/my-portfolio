import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES, EDUCATION } from '../../constants';
import { GraduationCap, Briefcase } from 'lucide-react';
import Card from '../UI/Card';

const TimelineItem: React.FC<{ data: any, type: 'work' | 'edu', index: number }> = ({ data, type, index }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div className={`flex items-center justify-between md:flex-row flex-col mb-16 relative w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Spacer for desktop layout */}
      <div className="hidden md:block w-5/12" />
      
      {/* Center Line Node */}
      <div className="absolute left-1/2 -translate-x-1/2 md:flex hidden flex-col items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
           {type === 'work' ? <Briefcase size={14} className="text-secondary" /> : <GraduationCap size={14} className="text-accent" />}
        </div>
        <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent absolute top-8" />
      </div>

      <motion.div 
        className="w-full md:w-5/12 z-10"
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="p-6 h-full hover:-translate-y-2">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{data.role || data.degree}</h3>
              <p className="text-secondary font-mono text-sm">{data.company || data.institution}</p>
            </div>
            <span className="text-xs font-mono py-1 px-2 rounded bg-white/5 border border-white/10 text-gray-400">
              {data.period || data.year}
            </span>
          </div>
          
          {data.score && (
            <p className="text-accent text-sm mb-3 font-semibold">{data.score}</p>
          )}

          {data.description && (
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
              {data.description.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </Card>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative py-32 px-6 z-10" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            Journey So Far
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line Background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-4">
             <div className="text-center md:mb-12 mb-8">
               <span className="bg-slate-800/80 border border-secondary/30 text-secondary px-4 py-1 rounded-full text-sm font-mono backdrop-blur-sm">EXPERIENCE</span>
             </div>
             {EXPERIENCES.map((exp, index) => (
               <TimelineItem key={exp.id} data={exp} type="work" index={index} />
             ))}
          </div>

          <div className="mt-24 space-y-4">
            <div className="text-center md:mb-12 mb-8">
               <span className="bg-slate-800/80 border border-accent/30 text-accent px-4 py-1 rounded-full text-sm font-mono backdrop-blur-sm">EDUCATION</span>
             </div>
            {EDUCATION.map((edu, index) => (
              <TimelineItem key={edu.id} data={edu} type="edu" index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;