'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Phone, FileDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Header = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="relative h-screen overflow-hidden">
            {/* Overlay de base avec effet de grain */}
            <div className="absolute inset-0 bg-cyber-dark opacity-60 z-10" />

            {/* Image de fond avec effet parallaxe */}
            <div
                className="absolute inset-0"
                style={{
                    position: 'absolute',
                    top: `-${mousePosition.y}px`,
                    left: `-${mousePosition.x}px`,
                    right: `-${mousePosition.x}px`,
                    bottom: `-${mousePosition.y}px`,
                    backgroundImage: `url('/images/profile.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `scale(1.1)`,
                    transition: 'transform 0.2s ease-out',
                }}
            />

            {/* Effet de lignes cyberpunk */}
            <div className="absolute inset-0 z-20">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="h-px bg-cyber-blue/20"
                        style={{
                            top: `${i * 5}%`,
                            left: 0,
                            right: 0,
                            position: 'absolute',
                            boxShadow: '0 0 20px rgba(0, 255, 249, 0.5)',
                        }}
                    />
                ))}
            </div>

            {/* Contenu principal */}
            <div className="relative z-30 h-full flex items-center justify-center">
                <div className="text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-cyber text-white mb-4 relative"
                    >
                        <span className="inline-block animate-glitch">RUDY SAKSIK</span>
                        <span className="block text-cyber-blue text-2xl md:text-3xl mt-2 font-text">
                            Développeur Backend
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-white/80 max-w-3xl mx-auto mb-8 font-text"
                    >
                        Développeur PHP/Symfony avec plus de 3 ans d'expérience dans le développement d'applications web robustes et évolutives.
                        Spécialisé dans les architectures backend, la gestion d'API RESTful et les solutions cloud.
                    </motion.p>

                    <div className="flex flex-col items-center gap-6 mt-8">
                        {/* Boutons réseaux sociaux */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-center gap-4"
                        >
                            <a
                                href="https://github.com/votre-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-transparent border-2 border-cyber-blue text-cyber-blue font-cyber
                     hover:bg-cyber-blue hover:text-cyber-dark transition-colors duration-300
                     relative group overflow-hidden animate-blink flex items-center gap-2"
                            >
                                <Github className="w-4 h-4" />
                                <span>GITHUB</span>
                                <div className="absolute inset-0 bg-cyber-blue transform -translate-x-full
                          group-hover:translate-x-0 transition-transform duration-300 -z-10"/>
                            </a>

                            <a
                                href="https://linkedin.com/in/rudysaksik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-transparent border-2 border-cyber-pink text-cyber-pink font-cyber
                     hover:bg-cyber-pink hover:text-cyber-dark transition-colors duration-300
                     relative group overflow-hidden animate-blink flex items-center gap-2"
                            >
                                <Linkedin className="w-4 h-4" />
                                <span>LINKEDIN</span>
                                <div className="absolute inset-0 bg-cyber-pink transform -translate-x-full
                          group-hover:translate-x-0 transition-transform duration-300 -z-10"/>
                            </a>
                        </motion.div>

                        {/* Bouton de téléchargement du CV */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <a
                                href="/cv.pdf"
                                download
                                className="px-6 py-2 bg-transparent border-2 border-cyber-yellow text-cyber-yellow font-cyber
                     hover:bg-cyber-yellow hover:text-cyber-dark transition-colors duration-300
                     relative group overflow-hidden animate-blink flex items-center gap-2"
                            >
                                <FileDown className="w-4 h-4" />
                                <span>TÉLÉCHARGER MON CV</span>
                                <div className="absolute inset-0 bg-cyber-yellow transform -translate-x-full
                          group-hover:translate-x-0 transition-transform duration-300 -z-10"/>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Effet de scanline */}
            <div className="absolute inset-0 z-40 pointer-events-none bg-gradient-to-b from-transparent to-cyber-dark/50" />
            <div className="absolute inset-0 z-40 pointer-events-none animate-scanline" />
        </section>
    );
};

export default Header;