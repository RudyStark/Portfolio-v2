'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="education" className="min-h-screen py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-dark">
                <div className="absolute inset-0 bg-grid-cyber opacity-5" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-4">
                        EDUCATION
                    </h2>
                    <div className="w-24 h-1 bg-cyber-blue mx-auto" />
                </motion.div>

                <div ref={ref} className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="bg-cyber-gray/30 p-8 border border-cyber-blue/20 relative group hover:bg-cyber-gray/40 transition-all duration-300"
                    >
                        {/* Effets de bordure */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-transparent opacity-50" />
                        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-cyber-blue to-transparent opacity-50" />
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-blue to-transparent opacity-50" />
                        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-t from-cyber-blue to-transparent opacity-50" />

                        <div className="flex items-center gap-4 mb-6">
                            <GraduationCap className="text-cyber-blue w-8 h-8" />
                            <div>
                                <h3 className="text-2xl font-cyber text-cyber-blue">Développeur web fullstack</h3>
                                <p className="text-white font-text">Certification</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-cyber-yellow font-cyber">3W Academy</span>
                                <span className="text-white/80 font-text">Juin, 2021</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Langues */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12"
                    >
                        <h3 className="text-2xl font-cyber text-cyber-pink mb-6">LANGUES</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-cyber-gray/30 border border-cyber-pink/20">
                                <span className="text-white font-text">Français</span>
                                <div className="w-full h-2 bg-cyber-dark mt-2">
                                    <div className="h-full bg-cyber-pink w-full" />
                                </div>
                            </div>
                            <div className="p-4 bg-cyber-gray/30 border border-cyber-pink/20">
                                <span className="text-white font-text">Anglais</span>
                                <div className="w-full h-2 bg-cyber-dark mt-2">
                                    <div className="h-full bg-cyber-pink w-4/5" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Centres d'intérêt */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-12"
                    >
                        <h3 className="text-2xl font-cyber text-cyber-yellow mb-6">CENTRES D'INTÉRÊT</h3>
                        <div className="flex flex-wrap gap-4">
                            {['High Tech', 'Voyage', 'Moto'].map((interest, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 bg-cyber-gray/30 border border-cyber-yellow/20 text-white font-text"
                                >
                                    {interest}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;