import React, { useEffect, useState } from 'react';
import Scene from './components/3d/Scene';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Navbar from './components/Layout/Navbar';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
  >
    <motion.div 
      animate={{ 
        rotate: 360,
        scale: [1, 1.2, 1]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="w-16 h-16 border-4 border-t-primary border-r-secondary border-b-accent border-l-transparent rounded-full"
    />
    <motion.p 
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="mt-4 text-gray-400 font-mono tracking-widest text-sm"
    >
      INITIALIZING SYSTEMS...
    </motion.p>
  </motion.div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <main className="bg-slate-900 min-h-screen text-white selection:bg-primary/30 selection:text-white">
        {/* Background 3D Scene */}
        {!loading && <Scene />}
        
        {/* Foreground Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <div className="relative">
             {/* Add a subtle gradient mesh between sections */}
             <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900 to-transparent z-20 pointer-events-none" />
             <About />
             <Skills />
             <Projects />
             <Contact />
          </div>
        </div>
        
        {/* Cursor Glow Effect */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -inset-[10px] opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[100px] animate-pulse delay-1000" />
            </div>
        </div>
      </main>
    </>
  );
};

export default App;