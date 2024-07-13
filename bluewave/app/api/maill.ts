// import { Mail } from 'lucide-react';
// import nodemailer from 'nodemailer';

// export default async function POST(request: Request, response: Response) {
    
//         const formData = await request.formData() as FormData;
//         const name = formData.get('name');
//         const email = formData.get('email');
//         const message = formData.get('message');

//         const transporter = nodemailer.createTransport({
//             host: "smtp-relay.brevo.com",
//             port: 587,
//             secure: true,
//             auth: {
//                 user: process.env.MAIL_USERNAME,
//                 pass: process.env.MAIL_PASSWORD,
//             },
//         });

//         const mailOptions = {
//             from: email ? email.toString() : process.env.MAIL_USERNAME, // Use email if available, otherwise use MAIL_USERNAME
//             to: process.env.YOUR_EMAIL,
//             subject: `New Message from ${name}`,
//             text: message ? message.toString() : ''
//         };

//         console.log(process.env.MAIL_PASSWORD, process.env.YOUR_EMAIL, process.env.MAIL_USERNAME)

//         console.log(email, name, message)

//         // const callback = (err: { message: string; }, info: { messageId: any; }) => {
//         //     if (err) {
//         //         console.log('Error occurred. ' + err.message);
//         //         return Response.status(500).json({ error: err.message });
//         //     }
//         //     console.log('Message sent: %s', info.messageId);
//         //     response.status(200).json({ success: true });
//         // }
//         transporter.sendMail(mailOptions);
    
// }

import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const name = formData.get('name')?.toString() || 'Anonymous';
        const email = formData.get('email')?.toString() || process.env.MAIL_USERNAME;
        const message = formData.get('message')?.toString() || '';

        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: true,
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
