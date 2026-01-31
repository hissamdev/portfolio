import { NextResponse } from "next/server";
import crypto from 'crypto';
import prisma from '@/lib/prisma';

import { sendAuthEmail } from "@/lib/email";


export async function POST(req: Request) {
    const { email } = await req.json();
    
    if (!email || typeof email !== 'string') {
        return NextResponse.json({ ok: true })
    }

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000)
    const normalizedEmail = email.toLowerCase().trim()

    const rawCode = String(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)
    const codeHashed = crypto.createHash('sha256').update(rawCode).digest('hex')

    const rawToken = crypto.randomUUID()
    const tokenHashed = crypto.createHash('sha256').update(rawToken).digest('hex')

    const magicLink = `${process.env.APP_URL}/auth/confirm?token=${rawToken}`

    try {
        console.log('Creating db record...')

        await prisma.auth.create({
        data: {
            expiresAt,
            email: normalizedEmail,
            code: codeHashed,
            token: tokenHashed,
        }
    })

    console.log('DB record created!')
    } catch (error) {
        console.error(error);
    }

    try {
        await sendAuthEmail(email, rawCode, magicLink)
    } catch (err) {
        console.error(err)
    }
    

    return NextResponse.json({ ok: true });
}