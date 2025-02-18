import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Vérification de la clé API
const resendKey = process.env.RESEND_API_KEY;
console.log('RESEND_API_KEY présente:', !!resendKey);

const resend = new Resend(resendKey);

export async function POST(req: Request) {
    console.log('API Route appelée');

    try {
        const body = await req.json();
        console.log('Données reçues:', body);

        const { name, email, subject, message } = body;

        // Validation
        if (!name || !email || !subject || !message) {
            console.log('Données manquantes:', { name, email, subject, message });
            return NextResponse.json(
                { error: 'Tous les champs sont requis' },
                { status: 400 }
            );
        }

        console.log('Tentative d\'envoi d\'email avec Resend...');
        const data = await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: ['rudy.saksik@gmail.com'],
            subject: `Nouveau message de ${name}: ${subject}`,
            html: `
                <div>
                    <h2>Nouveau message depuis le portfolio</h2>
                    <p><strong>Nom:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Sujet:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                </div>
            `,
        });

        console.log('Réponse de Resend:', data);

        return NextResponse.json(
            { success: true, data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Erreur dans l\'API route:', error);
        return NextResponse.json(
            { error: 'Erreur lors de l\'envoi de l\'email', details: error },
            { status: 500 }
        );
    }
}