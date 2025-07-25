import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import Particles from '@/components/shared/Particles';
import CursorTrail from '@/components/shared/CursorTrail';
import ScrollProgress from '@/components/shared/ScrollProgress';
import CodingProfiles from '@/components/sections/CodingProfiles';

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} bg-background text-foreground transition-colors duration-500`}>
      <Helmet>
        <title>Apratim K Jha - AI & Full Stack Developer | B.Tech CSE @VIT Chennai</title>
        <meta name="description" content="Computer Science student and developer passionate about AI-powered systems, scalable backend design, and frontend experiences. Building intelligent systems that solve real-world problems." />
        <body className={isDarkMode ? 'dark-mode' : 'light-mode'} />
      </Helmet>

      <Particles />
      <ScrollProgress />
      <CursorTrail />
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;