import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    "Build a free website with WordPress",
    "Unsupervised Learning, Recommenders, Reinforcement Learning",
    "Machine Learning Specialization",
    "Conservation Economics",
    "Supervised Machine Learning: Regression and Classification"
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Certifications</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Continuous learning and professional development through certified courses.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-xl p-6 flex items-center space-x-4 hover:bg-accent transition-all duration-300">
                            <div className="flex-shrink-0">
                                <Award className="w-8 h-8 text-blue-400" />
                            </div>
                            <span className="text-foreground">{cert}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;