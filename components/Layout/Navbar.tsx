import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-1 md:gap-2 px-3 py-3 rounded-full border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-lg shadow-black/20">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
          >
            {item}
            <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;