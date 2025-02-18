'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
    {
        title: "Développeur Web",
        company: "Teksial Groupe Engie",
        period: "2021 - 2024",
        description: "Développement d'un projet Symfony englobant plusieurs portails spécifiquement conçus pour les secteurs BtoB, BtoC, et BtoBtoC dans le domaine des Certificats d'Économie d'Énergie (CEE).",
        technologies: ["Symfony", "React", "AWS", "Docker", "MySQL"],
        details: [
            "Expertise en développement backend Symfony, incluant déploiement, gestion d'environnements de test, et maintenance de la qualité du code.",
            "Participation à des sprints Scrum, avec un focus sur la résolution rapide de bugs et l'amélioration continue des performances."
        ],
        color: "cyber-blue"
    },
    {
        title: "Développeur Web",
        company: "Dokoyo - freelance",
        period: "2021",
        description: "Conception et développement d'une plateforme e-commerce basée sur Symfony pour la gestion d'une boutique en ligne spécialisée dans la vente de sous-vêtements.",
        technologies: ["Symfony", "React", "MongoDB", "Docker", "Fabric.js"],
        details: [
            "Conception d'architectures backend robustes avec Symfony",
            "Intégration de la bibliothèque fabric.js pour la personnalisation de produits"
        ],
        color: "cyber-pink"
    }
];

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="experience" className="min-h-screen py-20 relative overflow-hidden">
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
                    <h2 className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-4">EXPÉRIENCE</h2>
                    <div className="w-24 h-1 bg-cyber-blue mx-auto" />
                </motion.div>

                <div ref={ref} className="relative">
                    {/* Ligne verticale de la timeline */}
                    <div className="absolute left-4 md:left-1/2 h-full w-px md:-translate-x-1/2 bg-gradient-to-b from-cyber-blue via-cyber-pink to-cyber-purple" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative mb-16"
                        >
                            <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} items-start`}>
                                {/* Point de la timeline */}
                                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2">
                                    <div className={`w-4 h-4 rounded-full bg-${exp.color} animate-pulse z-20 relative`} />
                                    <div className={`absolute -inset-2 rounded-full bg-${exp.color} opacity-30 animate-ping`} />
                                </div>

                                {/* Contenu */}
                                <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className={`p-6 bg-cyber-gray/30 border border-${exp.color}/20 relative group hover:bg-cyber-gray/40 transition-all duration-300`}>
                                        {/* Effets de bordure */}
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${exp.color} to-transparent opacity-50`} />
                                        <div className={`absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-${exp.color} to-transparent opacity-50`} />
                                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${exp.color} to-transparent opacity-50`} />
                                        <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-t from-${exp.color} to-transparent opacity-50`} />

                                        <h3 className={`text-2xl font-cyber text-${exp.color} mb-2`}>{exp.title}</h3>
                                        <h4 className="text-xl font-text text-white mb-2">{exp.company}</h4>
                                        <p className="text-cyber-yellow font-cyber mb-4">{exp.period}</p>
                                        <p className="text-white/80 font-text mb-4">{exp.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className={`px-3 py-1 text-sm font-text bg-cyber-dark text-${exp.color} border border-${exp.color}/30 hover:border-${exp.color} transition-all duration-300`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;