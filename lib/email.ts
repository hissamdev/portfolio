import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS
    }
})

export async function sendAuthEmail(to: string, code: string, link: string) {
    
    try {
        await transporter.sendMail({
            from: '"My App" <no-reply@myapp.com>',
            to,
            subject: 'Email subject',
            text: `Email text, code: ${code}, magic link: ${link}.`,
        })
    } catch (err) {
        console.error(err)
    }
    
}
