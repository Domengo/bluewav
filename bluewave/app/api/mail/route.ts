import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
            // debug: true,
            // logger: true
        });

        const mailOptions = {
            from: email,
            to: process.env.YOUR_EMAIL,
            subject: `New Message from ${name || 'Anonymous'}`,
            text: message || '',
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
        console.error('Error occurred:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ success: false }, { status: 500 });
        }
    }
}

