'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="about" className="min-h-screen py-20 relative overflow-hidden">
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-cyber-blue/5 rounded-full filter blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyber-pink/5 rounded-full filter blur-3xl" />
            </div>

            {/* Lignes de grille */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-px w-full bg-cyber-blue/10"
                        style={{ top: `${i * 5}%` }}
                    />
                ))}
            </div>

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="container mx-auto px-6 relative z-10"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-12 text-center"
                >
                    À PROPOS
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <p className="text-lg font-text leading-relaxed text-white/90">
                            Ma passion pour le développement backend se traduit par une approche méticuleuse
                            de l'architecture logicielle. Je m'efforce de créer des solutions robustes
                            qui allient performance et maintenabilité, en gardant toujours à l'esprit
                            les besoins évolutifs des projets.
                        </p>
                        <p className="text-lg font-text leading-relaxed text-white/90">
                            Au-delà du code, je suis convaincu que la qualité d'une application repose sur
                            de solides pratiques de développement. L'intégration continue, les tests
                            automatisés et la documentation sont au cœur de ma méthodologie, permettant
                            de livrer des solutions fiables et pérennes.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="aspect-square relative">
                            <div className="absolute inset-0 border-2 border-cyber-blue transform rotate-3" />
                            <div className="absolute inset-0 border-2 border-cyber-pink transform -rotate-3" />
                            <div className="absolute inset-0 bg-cyber-dark/80" />
                            <div className="relative z-10 p-6">
                                <h3 className="text-2xl font-cyber text-cyber-yellow mb-4">SPÉCIALITÉS</h3>
                                <ul className="space-y-4 font-text">
                                    <li className="flex items-center space-x-3">
                                        <span className="text-cyber-blue text-xl">▸</span>
                                        <span className="text-xl">Expertise Backend Symfony</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-cyber-pink text-xl">▸</span>
                                        <span className="text-xl">Architecture API RESTful</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-cyber-yellow text-xl">▸</span>
                                        <span className="text-xl">Intégration Cloud AWS</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-cyber-purple text-xl">▸</span>
                                        <span className="text-xl">Méthodologie Agile/Scrum</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <span className="text-cyber-blue text-xl">▸</span>
                                        <span className="text-xl">Tests & Qualité du Code</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;