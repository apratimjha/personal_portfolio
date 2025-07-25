import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
    const { toast } = useToast();
    const { isDarkMode } = useTheme();

    const handleContactSubmit = e => {
        e.preventDefault();
        toast({
            title: "🚧 Contact form isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        });
    };

    const sectionBg = isDarkMode 
      ? 'bg-gradient-to-br from-gray-900/50 to-black/50' 
      : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50';
    
    const inputBg = isDarkMode ? 'bg-white/5' : 'bg-black/5';
    const inputBorder = isDarkMode ? 'border-white/10' : 'border-black/10';

    return (
        <section id="contact" className={`py-20 ${sectionBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Let's connect and discuss opportunities in AI, full-stack development, or tech collaboration</p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-8">
                        <div className="space-y-6">
                            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-4 glass-card rounded-lg p-4">
                                <Mail className="w-6 h-6 text-blue-400" />
                                <div>
                                    <p className="text-muted-foreground text-sm">Email</p>
                                    <a href="mailto:apratimjha2705@gmail.com" className="text-foreground hover:text-blue-400 transition-colors">apratimjha2705@gmail.com</a>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-4 glass-card rounded-lg p-4">
                                <Phone className="w-6 h-6 text-green-400" />
                                <div>
                                    <p className="text-muted-foreground text-sm">Phone</p>
                                    <a href="tel:+919709220050" className="text-foreground hover:text-green-400 transition-colors">+91 9709220050</a>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-4 glass-card rounded-lg p-4">
                                <MapPin className="w-6 h-6 text-red-400" />
                                <div>
                                    <p className="text-muted-foreground text-sm">Location</p>
                                    <span className="text-foreground">Chennai, India</span>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} className="flex items-center space-x-4 glass-card rounded-lg p-4">
                                <Linkedin className="w-6 h-6 text-blue-500" />
                                <div>
                                    <p className="text-muted-foreground text-sm">LinkedIn</p>
                                    <a href="https://linkedin.com/in/apratim-k-jha-50b1b8284" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-500 transition-colors">linkedin.com/in/apratim-k-jha-50b1b8284</a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass-card rounded-xl p-8">
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm text-muted-foreground">Name</label>
                                <input type="text" className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-foreground placeholder-muted-foreground`} placeholder="Your name" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-muted-foreground">Email</label>
                                <input type="email" className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-foreground placeholder-muted-foreground`} placeholder="your.email@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-muted-foreground">Subject</label>
                                <input type="text" className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-foreground placeholder-muted-foreground`} placeholder="What's this about?" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-muted-foreground">Message</label>
                                <textarea rows={5} className={`w-full px-4 py-3 ${inputBg} border ${inputBorder} rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-none`} placeholder="Tell me about your project or opportunity..." required></textarea>
                            </div>
                            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;