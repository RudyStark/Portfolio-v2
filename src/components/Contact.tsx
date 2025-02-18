'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { toast } = useToast();

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Une erreur est survenue');
            }

            setFormState({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            toast({
                variant: "success", // Pour les succès
                title: "Message envoyé !",
                description: "Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.",
                className: "border-l-4 backdrop-blur-md"
            });

        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);

            toast({
                variant: "destructive",
                title: "Erreur",
                description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
                className: "border-l-4 backdrop-blur-md"
            });
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="min-h-screen py-20 relative overflow-hidden bg-cyber-dark">
            {/* Effets d'arrière-plan */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid-cyber opacity-5" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-3xl" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-pink/10 rounded-full filter blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-cyber text-cyber-blue mb-4">
                        CONTACT
                    </h2>
                    <div className="w-24 h-1 bg-cyber-blue mx-auto" />
                </motion.div>

                <div ref={ref} className="max-w-4xl mx-auto">
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 relative"
                    >
                        {/* Effet de bordure animée */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue via-cyber-pink to-cyber-purple opacity-30 blur group-hover:opacity-100 transition duration-300" />

                        <div className="relative bg-cyber-gray/30 p-8 backdrop-blur-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Champ Nom */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-cyber-dark border border-cyber-blue/30 text-white px-4 py-3
                             focus:outline-none focus:border-cyber-blue font-text
                             transition-all duration-300"
                                        placeholder="NOM"
                                    />
                                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyber-blue to-transparent transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
                                </div>

                                {/* Champ Email */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-cyber-dark border border-cyber-pink/30 text-white px-4 py-3
                             focus:outline-none focus:border-cyber-pink font-text
                             transition-all duration-300"
                                        placeholder="EMAIL"
                                    />
                                    <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyber-pink to-transparent transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Champ Sujet */}
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-cyber-dark border border-cyber-purple/30 text-white px-4 py-3
                           focus:outline-none focus:border-cyber-purple font-text
                           transition-all duration-300"
                                    placeholder="SUJET"
                                />
                                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyber-purple to-transparent transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
                            </div>

                            {/* Champ Message */}
                            <div className="relative mb-6">
                <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-cyber-dark border border-cyber-yellow/30 text-white px-4 py-3
                           focus:outline-none focus:border-cyber-yellow font-text
                           transition-all duration-300 resize-none"
                    placeholder="MESSAGE"
                />
                                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyber-yellow to-transparent transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
                            </div>

                            {/* Bouton d'envoi */}
                            <motion.button
                                type="submit"
                                disabled={submitting}
                                className={`w-full bg-transparent border-2 border-cyber-blue text-cyber-blue font-cyber py-3 px-8
                         hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300
                         relative overflow-hidden group ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                <span className="relative z-10">
                  {submitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
                </span>
                                <div className="absolute inset-0 bg-cyber-blue transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                            </motion.button>
                        </div>
                    </motion.form>

                    {/* Information de contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-12 text-center"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4">
                                <h3 className="text-cyber-pink font-cyber mb-2 text-2xl">EMAIL</h3>
                                <a href="mailto:rudy.saksik@gmail.com" className="text-white hover:text-cyber-pink transition-colors duration-300 text-xl">
                                    rudy.saksik@gmail.com
                                </a>
                            </div>
                            <div className="p-4">
                                <h3 className="text-cyber-yellow font-cyber mb-2 text-2xl">TÉLÉPHONE</h3>
                                <a href="tel:+33618746416" className="text-white hover:text-cyber-yellow transition-colors duration-300 text-xl">
                                    +33 6 18 74 64 16
                                </a>
                            </div>
                            <div className="p-4">
                                <h3 className="text-cyber-blue font-cyber mb-2 text-2xl">LOCALISATION</h3>
                                <p className="text-white text-xl">Paris, France</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;