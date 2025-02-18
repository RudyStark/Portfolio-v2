'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ProjectImageCarousel from './ProjectImageCarousel';

const projects = [
    {
        title: "E-commerce Cyberpunk",
        subtitle: "Plateforme e-commerce futuriste",
        description: "Plateforme e-commerce spécialisée dans la vente de jeux vidéo avec un design gaming immersif. L'interface utilisateur, pensée pour refléter l'univers du gaming, intègre des animations sophistiquées, une gestion avancée des clés digitales et un système de paiement sécurisé. Le projet propose une expérience d'achat fluide avec des fonctionnalités comme la livraison instantanée des clés de jeux et un backoffice complet pour la gestion des produits.",
        technologies: ["Symfony 7.1", "Bootstrap 5", "Stimulus", "Stripe", "Docker", "Mailjet", "DomPDF", "EasyAdmin", "CRON", "JWT", "Webpack", "MySQL", "Nginx", "PHPUnit", "SASS"],
        images: [
            "/images/project1/image1.png",
            "/images/project1/image2.png",
            "/images/project1/image3.png",
            "/images/project1/image4.png",
            "/images/project1/image5.png"
        ],
        thumbnail: "/images/project1/thumbnail.png",
        github: "https://github.com/RudyStark/ecommerce-sf7-template",
        demo: "",
        color: "cyber-blue",
        details: [
            "Architecture Symfony 7.1 avec système de commandes CRON pour le nettoyage automatique des réservations de clés",
            "Implémentation de WebHooks Stripe avec système de rollback en cas d'échec de paiement",
            "Génération automatique de factures PDF personnalisées avec DomPDF post-paiement",
            "Système de supervision des clés de jeux avec vérification automatique des stocks et des réservations",
            "Système de mailing Mailjet pour l'envoi automatique des factures et notifications de commande",
            "Interface administrateur EasyAdmin personnalisée avec tableaux de bord et suivi complet des transactions"
        ]
    },
    {
        title: "Projet en cours",
        subtitle: "Projet en cours de développement",
        description: "Ce projet est actuellement en cours de téléchargement. Veuillez revenir plus tard.",
        technologies: [],
        images: [
        ],
        thumbnail: "/images/project2/thumbnail.png",
        github: "",
        demo: "",
        color: "cyber-pink",
        details: [
            "Revenez plus tard pour les mises à jour"
        ]
    },
    {
        title: "Projet en cours",
        subtitle: "Projet en cours de développement",
        description: "Ce projet est actuellement en cours de téléchargement. Veuillez revenir plus tard.",
        technologies: [],
        images: [
        ],
        thumbnail: "/images/project3/thumbnail.png",
        github: "",
        demo: "",
        color: "cyber-purple",
        details: [
            "Revenez plus tard pour les mises à jour"
        ]
    }
];

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            className="group cursor-pointer"
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <div className={`relative overflow-hidden bg-cyber-gray/30 border border-${project.color}/20 
                         hover:border-${project.color}/50 transition-all duration-300`}>
                <div className="aspect-video relative">
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/50 to-transparent`} />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className={`text-2xl font-cyber text-${project.color} mb-2`}>{project.title}</h3>
                        <p className="text-white/80 font-text">{project.subtitle}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectDialog = ({ isOpen, closeModal, project }) => {
    if (!project) return null;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-cyber-dark/80 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden bg-cyber-dark border border-cyber-blue/50 p-6 text-left shadow-xl transition-all w-full max-w-4xl">
                                <button
                                    onClick={closeModal}
                                    className="absolute right-4 top-4 text-white/50 hover:text-white transition-colors z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <Dialog.Title
                                    as="h3"
                                    className={`text-2xl font-cyber text-${project.color} mb-4`}
                                >
                                    {project.title}
                                </Dialog.Title>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <ProjectImageCarousel
                                        images={project.images}
                                        color={project.color}
                                    />

                                    <div className="space-y-6">
                                        <p className="text-white/80 font-text">{project.description}</p>

                                        <div className="space-y-2">
                                            {project.details.map((detail, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start space-x-2"
                                                >
                                                    <span className={`text-${project.color}`}>▸</span>
                                                    <span className="text-white/80 font-text">{detail}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className={`px-3 py-1 text-sm font-text bg-cyber-dark text-${project.color} 
                                                            border border-${project.color}/30 animate-blink`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

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
                                            <p
                                                href={project.demo}
                                                target=""
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 px-4 py-2 bg-transparent 
                                                        border border-${project.color} text-gray-200
                                                        hover:bg-${project.color} hover:text-cyber-dark 
                                                        transition-all duration-300`}
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Demo</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="projects" className="min-h-screen py-20 relative overflow-hidden bg-cyber-dark">
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

                <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            <ProjectDialog
                isOpen={!!selectedProject}
                closeModal={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
};

export default Projects;