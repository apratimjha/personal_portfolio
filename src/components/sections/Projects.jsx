import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const projects = [
    {
        title: 'Load Balancer',
        description: 'Designed and implemented a load balancer to optimize latency and throughput. Compared Round Robin, Least Connections, and Load-Aware Balancer based on server health checks.',
        tech: ['Python', 'Networking Concepts'],
        date: 'April 2024',
        link: 'https://github.com/apratimjha/load-balancer',
        highlights: [
            'Evaluated balancing algorithms using simulated client-server requests',
            'Demonstrated improved response time with Load-Aware Balancer',
        ],
    },
    {
        title: 'Federated Learning for UPI Fraud Detection',
        description: 'A privacy-preserving federated learning approach for fraud detection in UPI/online payments, enabling multiple banks to collaboratively train fraud detection models without sharing sensitive transaction data.',
        tech: ['Python', 'Machine Learning', 'Federated Learning'],
        date: '2024',
        link: 'https://github.com/apratimjha/upi-fraud-detection-fl',
        highlights: ['Privacy-preserving approach', 'Collaborative model training', 'Real-world application'],
    },
    {
        title: 'Face Recognition Attendance System',
        description: 'Developed a facial recognition-based attendance system with Flask backend. Integrated TensorFlow for face recognition and multi-threaded model training.',
        tech: ['Python', 'Flask', 'React', 'TensorFlow', 'OpenCV'],
        date: 'Jan 2025',
        link: 'https://github.com/apratimjha/smart-attendance-system',
        highlights: ['Real-time face recognition', 'Multi-threaded processing', 'React interface for real-time feedback'],
    },
    {
        title: 'File Manager (OS Project)',
        description: 'Developed a command-line file manager with basic operations (create, delete, move). Implemented directory navigation and multi-threaded performance enhancements.',
        tech: ['C', 'C++'],
        date: 'Nov 2024',
        link: 'https://github.com/apratimjha/FileSystemManager-C',
        highlights: ['Multi-threaded performance', 'File permissions and metadata', 'Enhanced security features'],
    },
    {
        title: 'Employee Database Management System',
        description: 'A parallel employee database management system implemented in C using MPI (Message Passing Interface) for distributed processing and querying of employee records.',
        tech: ['C', 'MPI', 'Parallel Processing'],
        date: '2024',
        link: 'https://github.com/apratimjha/employee-database-mpi',
        highlights: ['Distributed processing', 'MPI implementation', 'Parallel querying system'],
    },
];

const Projects = () => {
    const { isDarkMode } = useTheme();
    const sectionBg = isDarkMode 
      ? 'bg-gradient-to-br from-gray-900/50 to-black/50' 
      : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50';

    return (
        <section id="projects" className={`py-20 ${sectionBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">A showcase of my technical projects spanning AI, networking, and full-stack development</p>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={project.title} 
                            initial={{ opacity: 0, y: 50 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 0.8, delay: index * 0.1 }} 
                            viewport={{ once: true }} 
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
                            className="glass-card rounded-xl p-6 group cursor-pointer"
                            onClick={() => window.open(project.link, '_blank')}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-semibold gradient-text group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 glass-card rounded-lg hover:bg-accent transition-all text-foreground">
                                    <ExternalLink className="w-4 h-4" />
                                </motion.div>
                            </div>
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                            <div className="space-y-3 mb-4">
                                {project.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start space-x-2">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-muted-foreground text-sm">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map(tech => (
                                    <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="text-xs text-muted-foreground/70">{project.date}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;