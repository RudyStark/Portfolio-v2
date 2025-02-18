'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
    {
        category: "Langages & Frameworks",
        items: [
            { name: "PHP", level: 95 },
            { name: "Symfony", level: 90 },
            { name: "JavaScript", level: 90 },
            { name: "React", level: 85 },
            { name: "TypeScript", level: 85 }
        ]
    },
    {
        category: "Outils & Technologies",
        items: [
            { name: "Docker", level: 85 },
            { name: "Git", level: 90 },
            { name: "Kubernetes", level: 75 },
            { name: "AWS Cloud", level: 80 },
            { name: "Elasticsearch", level: 70 }
        ]
    },
    {
        category: "Base de données & API",
        items: [
            { name: "MySQL", level: 90 },
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "API Platform", level: 85 },
            { name: "RESTful", level: 90 }
        ]
    }
];

const additionalSkills = {
    "AWS Cloud": ["S3", "ElasticBeanStalk", "IAM"],
    "Méthodologie": ["Scrum", "Kanban", "CI/CD", "TDD"],
    "Tests & Qualités": ["PHPUnit", "SonarQube", "Cypress"],
}

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className="min-h-screen py-20 bg-cyber-dark relative">
            {/* Effet de grille en arrière-plan */}
            <div className="absolute inset-0 bg-grid-cyber opacity-10" />

            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-4">
                        COMPÉTENCES
                    </h2>
                    <div className="w-24 h-1 bg-cyber-blue mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, groupIndex) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                            className="bg-cyber-gray/30 p-6 border border-cyber-blue/20 relative overflow-hidden group"
                        >
                            {/* Effet de survol */}
                            <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <h3 className="text-2xl font-cyber text-cyber-yellow mb-6">
                                {skillGroup.category}
                            </h3>

                            <div className="space-y-6">
                                {skillGroup.items.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                        transition={{ duration: 0.6, delay: (groupIndex * 0.2) + (index * 0.1) }}
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="font-text text-white">{skill.name}</span>
                                            <span className="font-cyber text-cyber-blue">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-cyber-dark/50 relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ duration: 1, delay: (groupIndex * 0.2) + (index * 0.1) }}
                                                className="absolute h-full bg-gradient-to-r from-cyber-blue to-cyber-purple"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Effets de bordure animés */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue to-transparent opacity-50" />
                            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-cyber-blue to-transparent opacity-50" />
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-blue to-transparent opacity-50" />
                            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-t from-cyber-blue to-transparent opacity-50" />
                        </motion.div>
                    ))}
                </div>

                {/* Section des compétences additionnelles */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 space-y-8"
                >
                    {Object.entries(additionalSkills).map(([category, skills], groupIndex) => (
                        <div key={category} className="text-center">
                            <h3 className="text-2xl font-cyber text-cyber-pink mb-6">
                                {category}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
                                        className="px-4 py-2 bg-cyber-dark border border-cyber-pink/30 text-cyber-pink
                                    hover:border-cyber-pink hover:text-white transition-all duration-300
                                    font-text animate-blink"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;