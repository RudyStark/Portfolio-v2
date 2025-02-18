'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail } from 'lucide-react';

const references = [
    {
        name: "Souhel Mohammad",
        position: "Product Owner",
        tel: "06.02.24.94.11",
        email: "souhel.mohammad@teksial.com",
        color: "cyber-blue"
    },
    {
        name: "Rayan Venault",
        position: "Manager",
        tel: "06.35.45.75.39",
        email: "rayan.venault@teksial.com",
        color: "cyber-pink"
    },
    {
        name: "Charif Ayouni",
        position: "Lead Dev",
        tel: "N/A",
        email: "charif.ayouni@gmail.com",
        color: "cyber-purple"
    }
];

const References = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="references" className="min-h-screen py-20 relative overflow-hidden">
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
                        RÉFÉRENCES
                    </h2>
                    <div className="w-24 h-1 bg-cyber-blue mx-auto" />
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {references.map((ref, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`p-6 bg-cyber-gray/30 border border-${ref.color}/20 relative group 
                                    hover:bg-cyber-gray/40 transition-all duration-300`}
                        >
                            {/* Effets de bordure */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${ref.color} to-transparent opacity-50`} />
                            <div className={`absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-${ref.color} to-transparent opacity-50`} />
                            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-${ref.color} to-transparent opacity-50`} />
                            <div className={`absolute top-0 right-0 w-1 h-full bg-gradient-to-t from-${ref.color} to-transparent opacity-50`} />

                            <div className="text-center">
                                <h3 className={`text-xl font-cyber text-${ref.color} mb-2`}>{ref.name}</h3>
                                <p className="text-white font-text mb-2">{ref.position}</p>

                                {/* Affichage du numéro de téléphone avec icône */}
                                <div className="flex justify-center items-center gap-2 mb-2">
                                    <Phone className={`text-${ref.color}`} />
                                    <a
                                        href={`tel:${ref.tel.replace(/\./g, '')}`}
                                        className={`text-${ref.color} font-text hover:underline`}
                                    >
                                        {ref.tel}
                                    </a>
                                </div>

                                {/* Affichage de l'email avec icône */}
                                <div className="flex justify-center items-center gap-2">
                                    <Mail className={`text-${ref.color}`} />
                                    <a
                                        href={`mailto:${ref.email}`}
                                        className={`text-${ref.color} font-text hover:underline`}
                                    >
                                        {ref.email}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default References;
