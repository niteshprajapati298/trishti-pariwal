import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, description } = body;

        // Validate Status: 400
        if (!name || !email || !description) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // --- EMAIL CONFIGURATION ---
        // If you have credentials, fill them here.
        // If NOT, we will log to console (Simulation Mode).

        const SMTP_EMAIL = process.env.SMTP_EMAIL || '';
        const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';

        // Create a transporter
        let transporter;

        if (SMTP_EMAIL && SMTP_PASSWORD) {
            // 1. Real Sending Mode (Gmail, etc.)
            transporter = nodemailer.createTransport({
                service: 'gmail', // or your provider
                auth: {
                    user: SMTP_EMAIL,
                    pass: SMTP_PASSWORD,
                },
            });
        } else {
            // 2. Simulation Mode (Console Log)
            console.log("---------------------------------------------------");
            console.log(" [SIMULATION MODE] Email would be sent here:");
            console.log(` To:      (Site Owner)`);
            console.log(` From:    ${email} (${name})`);
            console.log(` Subject: New Contact Form Submission`);
            console.log(` Message: ${description}`);
            console.log("---------------------------------------------------");

            // Return early success for simulation
            return NextResponse.json({ success: true, mode: 'simulation' });
        }

        // If we have a transporter, send the mail asynchronously
        // Non-blocking for the logic flow? async/await in Node IS non-blocking I/O.
        // Use await to ensure delivery before responding to user.

        await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: SMTP_EMAIL, // list of receivers (send to yourself)
            subject: `New Contact from ${name}`, // Subject line
            text: description, // plain text body
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${description}</p>
      `,
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Email API Error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
