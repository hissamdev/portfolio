import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import crypto from 'crypto'

export async function POST(req: Request) {
    const { email, code } = await req.json()

    if (!email || typeof email !== 'string' || !code || typeof code !== 'string') {
        return NextResponse.json({ ok: false, error: 'Incorrect code or the code has expired' })
    }
    const normalizedEmail = email.toLowerCase().trim()
    const hashedCode = crypto.createHash('sha256').update(code).digest('hex') // Hash the inputted code to match with the db

    // Check if the email is awaiting confirmation
    const verification = await prisma.confirmEmail.findFirst({
        where: { email: normalizedEmail, expiresAt: { gte: new Date() } },
        orderBy: { creationDate: 'desc' },
    })

    // Wrong responses
    if (!verification) {
        return NextResponse.json({ ok: false, error: 'Incorrect code or the code has expired' })
    }

    if (hashedCode !== verification.code) {
        return NextResponse.json({ ok: false, error: 'Incorrect code or the code has expired' })
    }

    // The user should already exist from the request route, access the row
    await prisma.user.update({
        where: { email: normalizedEmail },
        data: { verifiedEmail: true }
    })

}

export async function GET(req: Request) {
    const url = new URL(req.url)
    const token = url.searchParams.get('token') // grab ?token=xyz

    if (!token) {
        return NextResponse.json({ ok: false })
    }
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex')

    const verification = await prisma.confirmEmail.findFirst({
        where: { token: hashedToken, expiresAt: { gte: new Date() } },
    })

    if (verification) {
        try {
            await prisma.user.update({
                where: { email: verification.email },
                data: { verifiedEmail: true }
            })
        } catch (err) {
            console.error(err)
        }
    }

    return NextResponse.json({ ok: true, message: "Email verified successfully!" })

}