import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"

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
        <html lang="fr">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Rajdhani:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body className="bg-cyber-dark text-white">
        {children}
        <Toaster />
        </body>
        </html>
    )
}