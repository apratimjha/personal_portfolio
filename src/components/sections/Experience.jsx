import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'VIT Chennai',
        role: 'Research Intern',
        duration: 'May 2025 - July 2025 (3 months)',
        location: 'Chennai, Tamil Nadu, India',
    },
    {
        company: 'Gaming development club vit chennai',
        role: 'Management Lead',
        duration: 'August 2024 - July 2025 (1 year)',
        location: 'Chennai, Tamil Nadu, India',
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Experience</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Professional roles and leadership positions in academic and technical clubs.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2 hidden md:block"></div>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="mb-12 md:flex justify-between items-center w-full">
                            
                            <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-1' : 'md:order-3 md:text-right'}`}>
                                <div className="glass-card rounded-xl p-6 mb-4 md:mb-0">
                                    <h3 className="text-xl font-bold gradient-text mb-2">{exp.company}</h3>
                                    <p className="text-lg font-semibold text-foreground">{exp.role}</p>
                                    <p className="text-sm text-muted-foreground mb-1">{exp.duration}</p>
                                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                                </div>
                            </div>
                            
                            <div className="z-10 order-2 w-8 h-8 bg-primary rounded-full border-2 border-blue-500 md:flex items-center justify-center hidden">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            </div>

                            <div className="md:w-5/12 order-1 hidden md:block"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;