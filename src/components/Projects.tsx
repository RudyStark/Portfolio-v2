'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';

const projects = [
    {
        title: "E-commerce Cyberpunk",
        subtitle: "Plateforme e-commerce futuriste",
        description: "Plateforme e-commerce avec interface immersive et animations sophistiquées. Intégration complète avec Stripe pour les paiements et gestion avancée du panier.",
        technologies: ["Symfony 7.1", "Bootstrap", "Stimulus", "Stripe"],
        image: "/images/project1.jpg",
        github: "https://github.com/your-username/project1",
        demo: "https://project1.com",
        color: "cyber-blue"
    },
    {
        title: "Dashboard Analytics",
        subtitle: "Interface de visualisation de données",
        description: "Dashboard temps réel avec visualisations de données interactives. Intégration de WebSocket pour les mises à jour en direct.",
        technologies: ["React", "D3.js", "Node.js", "Socket.io"],
        image: "/images/project2.jpg",
        github: "https://github.com/your-username/project2",
        demo: "https://project2.com",
        color: "cyber-pink"
    },
    {
        title: "API Platform",
        subtitle: "API RESTful avancée",
        description: "API REST complète pour une application de gestion de projet. Documentation Swagger et tests automatisés.",
        technologies: ["API Platform", "Docker", "PostgreSQL"],
        image: "/images/project3.jpg",
        github: "https://github.com/your-username/project3",
        demo: "https://project3.com",
        color: "cyber-purple"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
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

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-4">PROJETS</h2>
                    <div className="w-24 h-1 bg-cyber-blue mx-auto" />
                </motion.div>

                <div ref={ref} className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            {/* Carte du projet */}
                            <motion.div
                                className={`bg-cyber-gray/30 border border-${project.color}/20 p-6 cursor-pointer 
                                         hover:bg-cyber-gray/40 transition-all duration-300`}
                                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className={`text-2xl font-cyber text-${project.color} mb-2`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-white/80 font-text">{project.subtitle}</p>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: selectedProject === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className={`w-6 h-6 text-${project.color}`} />
                                    </motion.div>
                                </div>

                                {/* Contenu détaillé */}
                                <AnimatePresence>
                                    {selectedProject === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-6 overflow-hidden"
                                        >
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/* Image du projet */}
                                                <div className="relative aspect-video overflow-hidden">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="object-cover w-full h-full"
                                                    />
                                                    <div className={`absolute inset-0 bg-${project.color}/10`} />
                                                </div>

                                                {/* Description et détails */}
                                                <div className="space-y-4">
                                                    <p className="text-white/80 font-text">
                                                        {project.description}
                                                    </p>

                                                    {/* Technologies */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech, techIndex) => (
                                                            <span
                                                                key={techIndex}
                                                                className={`px-3 py-1 text-sm font-text bg-cyber-dark text-${project.color} 
                                                                          border border-${project.color}/30 animate-blink`}
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Liens */}
                                                    <div className="flex gap-4 pt-4">
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`inline-flex items-center gap-2 px-4 py-2 bg-transparent 
                                                                      border border-${project.color} text-${project.color} 
                                                                      hover:bg-${project.color} hover:text-cyber-dark 
                                                                      transition-all duration-300`}
                                                        >
                                                            <Github className="w-4 h-4" />
                                                            <span>Code</span>
                                                        </a>
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`inline-flex items-center gap-2 px-4 py-2 bg-transparent 
                                                                      border border-${project.color} text-${project.color} 
                                                                      hover:bg-${project.color} hover:text-cyber-dark 
                                                                      transition-all duration-300`}
                                                        >
                                                            <ExternalLink className="w-4 h-4" />
                                                            <span>Demo</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;