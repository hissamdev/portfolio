import { NextResponse } from "next/server";
import crypto from 'crypto';
import prisma from '@/lib/prisma';

import { sendAuthEmail } from "@/lib/email";


export async function POST(req: Request) {
    const { email, url, message } = await req.json();
    
    if (!email || typeof email !== 'string' || !url || typeof url !== 'string' || typeof message !== 'string') {
        return NextResponse.json({ ok: true })
    }
    const normalizedEmail = email.toLowerCase().trim()
    const normalizedUrl = url.toLowerCase().trim()

    const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

    const rawCode = String(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000)
    const codeHashed = crypto.createHash('sha256').update(rawCode).digest('hex')

    const rawToken = crypto.randomUUID()
    const tokenHashed = crypto.createHash('sha256').update(rawToken).digest('hex')

    const magicLink = `${process.env.APP_URL}/auth/confirm?token=${rawToken}`

    // Create email confirmation request with an expiry time
    try {
        await prisma.confirmEmail.create({
        data: {
            email: normalizedEmail,
            code: codeHashed,
            token: tokenHashed,
            expiresAt,
        }
    })

    } catch (error) {
        console.error(error);
    }

    try {
        await sendAuthEmail(email, rawCode, magicLink)
    } catch (err) {
        console.error(err)
    }


    // Is the email tied to a user, if not create one. Either way, we use the userId to look up the audit request.
    const user = await prisma.user.upsert({
        where: { email: normalizedEmail },
        update: {},
        create: { email: normalizedEmail },
    })

    const auditExists = !!(await prisma.auditRequest.findFirst({
        where: { userId: user.userId }
    }))

    if (auditExists) return NextResponse.json({ ok: true }); // If an audit request from the email exists, don't create another one.

    try {
        await prisma.auditRequest.create({
            data: {
                userId: user.userId,
                url: normalizedUrl,
                message: message,
            }
        })
    } catch (err) {
        console.error(err)
    }

    return NextResponse.json({ ok: true });
}