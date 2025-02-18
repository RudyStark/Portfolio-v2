'use client';

import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import References from '@/components/References';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main className="relative bg-cyber-dark">
            <Navigation />
            <Header />
            <About />
            <Skills />
            <Experience />
            <Education />
            <References />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}