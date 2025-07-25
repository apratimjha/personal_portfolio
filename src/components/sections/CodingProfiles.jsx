import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Database, Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const profiles = [
    { name: 'GitHub', link: 'https://github.com/apratimjha', icon: <Github className="w-8 h-8 mx-auto mb-2 text-muted-foreground" /> },
    { name: 'CodeChef', link: 'https://www.codechef.com/users/apra_23bce1008', icon: <Code className="w-8 h-8 mx-auto mb-2 text-muted-foreground" /> },
    { name: 'LeetCode', link: 'https://leetcode.com/u/fascino_xd/', icon: <Database className="w-8 h-8 mx-auto mb-2 text-muted-foreground" /> },
    { name: 'GeeksforGeeks', link: '#', icon: <Globe className="w-8 h-8 mx-auto mb-2 text-muted-foreground" /> }
];

const CodingProfiles = () => {
    const { isDarkMode } = useTheme();
    const sectionBg = isDarkMode 
      ? 'bg-gradient-to-br from-gray-900/50 to-black/50' 
      : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50';

    return (
        <section id="profiles" className={`py-20 ${sectionBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Coding Profiles</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Check out my profiles on various competitive programming platforms.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {profiles.map((profile, index) => (
                        <motion.a 
                            key={index}
                            href={profile.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            whileHover={{ scale: 1.05, y: -5 }} 
                            className="glass-card rounded-lg p-4 hover:bg-accent transition-all text-foreground text-center">
                            {profile.icon}
                            <span className="text-sm">{profile.name}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CodingProfiles;