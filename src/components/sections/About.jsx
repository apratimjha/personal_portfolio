import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    languages: ['Java', 'Python', 'C/C++', 'SQL (Postgres)', 'JavaScript', 'HTML/CSS'],
    frameworks: ['React', 'Node.js', 'WordPress', 'Material-UI'],
    tools: ['Git', 'Docker', 'Google Cloud Platform', 'VS Code', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Eclipse'],
    libraries: ['pandas', 'NumPy', 'Matplotlib'],
    subjects: ['Data Structures and Algorithms', 'Computer Networks', 'Operating Systems', 'Database Systems', 'Structured and Object-Oriented Programming']
};

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="absolute inset-0">
              <img  class="w-full h-full object-cover opacity-5 dark:opacity-10" alt="Technology background with code and circuits" src="https://images.unsplash.com/photo-1700941019917-731dc64ce685" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
                    <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        Computer Science student and developer passionate about AI-powered systems, scalable backend design, and frontend experiences. Currently exploring deep learning, load balancing algorithms, and building full-stack applications. I actively participate in coding communities, and tech discussions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, skillList], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-xl p-6 hover:bg-accent transition-all duration-300">
                            <h3 className="text-xl font-semibold mb-4 capitalize gradient-text">
                                {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillList.map(skill => (
                                    <span key={skill} className="skill-tag text-foreground px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;