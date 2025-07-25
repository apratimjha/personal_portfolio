import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-muted-foreground text-sm">
            © 2025 Apratim K Jha. Building the future with code.
          </span>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a href="https://github.com/apratimjha" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a href="https://linkedin.com/in/apratim-k-jha-50b1b8284" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1 }} className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a href="mailto:apratimjha2705@gmail.com" whileHover={{ scale: 1.1 }} className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;