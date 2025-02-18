import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"
import { Orbitron, Rajdhani } from 'next/font/google'

const orbitron = Orbitron({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-orbitron',
});

const rajdhani = Rajdhani({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-rajdhani',
});

export const metadata: Metadata = {
    title: 'Portfolio Rudy Saksik',
    description: 'Développeur fullstack passionné par le web et les nouvelles technologies.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${orbitron.variable} ${rajdhani.variable}`}>
        <body className="bg-cyber-dark text-white">
        {children}
        <Toaster />
        </body>
        </html>
    )
}