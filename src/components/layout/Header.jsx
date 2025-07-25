import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const navItems = ['About', 'Projects', 'Experience', 'Achievements', 'Certifications', 'Profiles', 'Contact'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-40 nav-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="text-xl font-bold gradient-text">
            Apratim K Jha
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-foreground/80 hover:text-foreground transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden bg-background/90 backdrop-blur-lg">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-foreground/80 hover:text-foreground transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
            <div className="border-t border-border pt-4">
                <Button variant="ghost" onClick={toggleTheme} className="w-full flex justify-center items-center gap-2">
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span>Toggle Theme</span>
                </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;