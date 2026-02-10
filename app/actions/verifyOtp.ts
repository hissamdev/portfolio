"use server"

import prisma from "@/lib/prisma";
import { auth } from "@/utils/auth";

export async function verifyOtp(joinedCode: string, email: string) {
    console.log('Server action hit:', joinedCode, email)
    // Validate
    // If it doesn't exist on the users table, create a user
    
    const verification = await prisma.verification.findFirst({
        where: {
            value: {
                path: ['email'],
                equals: email
            },
            otpCode: joinedCode,
            //Expiry time should be higher than current time
        }
    })

    if (!verification) return { ok: false, message: "Code is invalid or has expired", status: 401 }

    return { ok: true, message: "Successfully verified email through OTP" }
} 