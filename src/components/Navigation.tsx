'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = ['home', 'about', 'skills', 'experience', 'education', 'references', 'projects', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${
                    isScrolled ? 'bg-cyber-dark/90 backdrop-blur-md' : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-cyber-blue font-cyber text-xl"
                        >
                            <span className="animate-glow">CYBER.DEV</span>
                        </motion.div>

                        <div className="hidden md:flex space-x-8">
                            {menuItems.map((section) => (
                                <motion.button
                                    key={section}
                                    whileHover={{ scale: 1.1 }}
                                    className={`font-text uppercase tracking-wider transition-colors duration-300 ${
                                        activeSection === section
                                            ? 'text-cyber-blue'
                                            : 'text-white hover:text-cyber-blue'
                                    }`}
                                    onClick={() => scrollTo(section)}
                                >
                                    {section}
                                </motion.button>
                            ))}
                        </div>

                        <motion.button
                            className="md:hidden text-cyber-blue z-50"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isMobileMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Menu mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-cyber-dark/95 backdrop-blur-lg z-40 md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
                            {menuItems.map((section) => (
                                <motion.button
                                    key={section}
                                    whileHover={{ scale: 1.1 }}
                                    className={`font-cyber text-2xl uppercase tracking-wider transition-colors duration-300 ${
                                        activeSection === section
                                            ? 'text-cyber-blue'
                                            : 'text-white hover:text-cyber-blue'
                                    }`}
                                    onClick={() => scrollTo(section)}
                                >
                                    {section}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;