import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import crypto from 'crypto'
import jwt from 'jsonwebtoken';

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

    const confirmEmail = await prisma.confirmEmail.findFirst({
        where: { token: hashedToken, expiresAt: { gte: new Date() } },
    })

    if (!confirmEmail) {
        return NextResponse.json({ ok: false, message: "The verification link doesn't exist or has expired" })
    }

    const user = await prisma.user.findUnique({
        where: { email: confirmEmail.email },
    })

    if (!user) return NextResponse.json({ ok: false, message: "An error occured, please try again" }, { status: 500 })

    // JWT Implementation
    const jwtToken = jwt.sign(
        { userId: user.userId },
        process.env.JWT_SECRET!,
        { expiresIn: "15m" }
    )

    const response = NextResponse.json({ message: "Email confirmed & logged in" })
    response.cookies.set("authToken", jwtToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 15,
        path: '/',
    })

    return response;

}