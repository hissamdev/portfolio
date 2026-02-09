'use server'

import prisma from "@/lib/prisma";
import { auth } from "@/utils/auth";
import { headers } from "next/headers";


export async function requestAudit(formData: FormData) {
    const email = formData.get("email") as string;

    await auth.api.signInMagicLink({
        body: {
            email: email,
            callbackURL: '/dashboard',
            newUserCallbackURL: '/dashboard',
            errorCallbackURL: '/error-callback-url'
        },

        headers: await headers(),
    })
}