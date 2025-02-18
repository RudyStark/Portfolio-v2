'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const projects = [
    {
        title: "E-commerce Cyberpunk",
        description: "Plateforme e-commerce futuriste avec interface immersive et animations sophistiquées",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
        image: "/images/project1.jpg",
        link: "https://github.com/your-username/project1",
        live: "https://project1.com",
        color: "cyber-blue"
    },
    {
        title: "Dashboard Analytics",
        description: "Dashboard temps réel avec visualisations de données interactives",
        technologies: ["React", "D3.js", "Node.js", "Socket.io"],
        image: "/images/project2.jpg",
        link: "https://github.com/your-username/project2",
        live: "https://project2.com",
        color: "cyber-pink"
    },
    {
        title: "API Platform",
        description: "API REST complète pour une application de gestion de projet",
        technologies: ["Symfony", "API Platform", "Docker", "PostgreSQL"],
        image: "/images/project3.jpg",
        link: "https://github.com/your-username/project3",
        live: "https://project3.com",
        color: "cyber-purple"
    }
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="min-h-screen py-20 relative overflow-hidden bg-cyber-dark">
            {/* Effet de grille en arrière-plan */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-cyber opacity-5" />
            </div>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-4">
                        PROJETS
                    </h2>
                    <div className="w-24 h-1 bg-cyber-blue mx-auto" />
                </motion.div>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Carte du projet */}
                            <div className="relative overflow-hidden">
                                {/* Image du projet avec effet de glitch */}
                                <div className="aspect-video relative overflow-hidden">
                                    <div
                                        className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-cyber-dark/60 group-hover:bg-cyber-dark/40 transition-all duration-300" />

                                    {/* Effet de bordure animée */}
                                    <div className="absolute inset-0">
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${project.color} to-transparent opacity-50`} />
                                        <div className={`absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-${project.color} to-transparent opacity-50`} />
                                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${project.color} to-transparent opacity-50`} />
                                        <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-t from-${project.color} to-transparent opacity-50`} />
                                    </div>
                                </div>

                                {/* Contenu du projet */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <h3 className={`text-2xl font-cyber text-${project.color} mb-2`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-white/80 font-text mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        {project.description}
                                    </p>

                                    {/* Technologies utilisées */}
                                    <div className="flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className={`px-2 py-1 text-xs font-text bg-cyber-dark text-${project.color} border border-${project.color}/30`}
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>

                                    {/* Liens du projet */}
                                    <div className="flex gap-4 mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-4 py-1 bg-transparent border border-${project.color} text-${project.color}
                                hover:bg-${project.color} hover:text-cyber-dark transition-all duration-300`}
                                        >
                                            GITHUB
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-4 py-1 bg-transparent border border-${project.color} text-${project.color}
                                hover:bg-${project.color} hover:text-cyber-dark transition-all duration-300`}
                                        >
                                            DEMO LIVE
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Effet de survol */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple opacity-0
                            group-hover:opacity-20 transition-opacity duration-300">
                                <div className="absolute inset-0 backdrop-blur-sm"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;