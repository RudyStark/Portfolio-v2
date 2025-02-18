'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-cyber-dark relative overflow-hidden py-8">
            {/* Effet de grille en arrière-plan */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-cyber opacity-5" />
            </div>

            {/* Ligne de séparation avec gradient */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-50 mb-8" />

            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center space-y-4"
                >
                    {/* Logo et version */}
                    <div className="text-center mb-4">
                        <a
                            href="https://www.rudysaksik.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyber-blue font-cyber text-xl hover:text-cyber-pink transition-colors duration-300 animate-glow"
                        >
                            www.rudysaksik.fr
                        </a>
                        <div className="text-cyber-pink font-cyber text-sm mt-2">
                            Portfolio v2 cyberpunk
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-white/60 font-text text-sm">
                        <span>© 2021 - {currentYear} </span>
                        <span className="text-cyber-blue">rudysaksik.fr</span>
                        <span> | Tous droits réservés</span>
                    </div>

                    {/* Ligne décorative du bas */}
                    <div className="relative w-32 h-1 mt-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;