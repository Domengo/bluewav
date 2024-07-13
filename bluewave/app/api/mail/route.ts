import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get('name')?.toString() || 'Anonymous';
        const email = formData.get('email')?.toString();
        const message = formData.get('message')?.toString() || '';

        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.YOUR_EMAIL,
            subject: `New Message from ${name}`,
            text: message,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error occurred:', error as Error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}