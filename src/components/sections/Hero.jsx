import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const {
    isDarkMode
  } = useTheme();
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-black via-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200'}`}></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('https://storage.googleapis.com/hostinger-horizons-assets-prod/5c116665-fcbc-4eb1-b08d-5c19adddb59f/c49335844c79f8bd355538e353102c20.png')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
          <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }} className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 dark:border-white/20 light:border-black/10 shadow-2xl">
            <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/5c116665-fcbc-4eb1-b08d-5c19adddb59f/210e870962ef28dc1a28ee4ceccf607a.jpg" alt="Apratim K Jha - AI & Full Stack Developer" className="w-full h-full object-cover" />
          </motion.div>

          <div className="space-y-4">
            <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="text-5xl md:text-7xl font-bold gradient-text">
              Apratim K Jha
            </motion.h1>

            <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="text-xl md:text-2xl text-muted-foreground typewriter">B.Tech CSE @VIT Chennai | AI & Full Stack Developer | DSA Enthusiast</motion.h2>

            <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8
            }} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              "Building intelligent systems that solve real-world problems. Passionate about AI, networks, and helping others break into tech."
            </motion.p>
          </div>

          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1
          }} className="flex justify-center space-x-6">
            <motion.a href="https://linkedin.com/in/apratim-k-jha-50b1b8284" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} className="p-3 glass-card rounded-full hover:bg-accent transition-all duration-300 text-foreground">
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a href="https://github.com/apratimjha" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} className="p-3 glass-card rounded-full hover:bg-accent transition-all duration-300 text-foreground">
              <Github className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.2
          }} className="pt-8">
            <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;