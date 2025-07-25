import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Cpu } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const achievements = [
    { title: 'CodeChef Starters 154', description: 'Rating 1203, Rank 1249', icon: <Code className="w-6 h-6" /> },
    { title: 'LeetCode Progress', description: 'Solved 50+ problems', icon: <Database className="w-6 h-6" /> },
    { title: 'GeeksforGeeks', description: 'Solved 80+ problems', icon: <Globe className="w-6 h-6" /> },
    { title: 'CNN Model Achievement', description: '85%+ accuracy in real-world waste classification', icon: <Cpu className="w-6 h-6" /> }
];

const Achievements = () => {
    const { isDarkMode } = useTheme();
    const sectionBg = isDarkMode 
      ? 'bg-gradient-to-br from-gray-900/50 to-black/50' 
      : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50';

    return (
        <section id="achievements" className={`py-20 ${sectionBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Achievements</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Recognition and milestones in competitive programming and AI development</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div key={achievement.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }} className="glass-card rounded-xl p-6 text-center hover:bg-accent transition-all duration-300 group">
                            <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-12 h-12 mx-auto mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all text-foreground">
                                {achievement.icon}
                            </motion.div>
                            <h3 className="text-lg font-semibold gradient-text mb-2">{achievement.title}</h3>
                            <p className="text-muted-foreground text-sm">{achievement.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;