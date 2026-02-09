import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),

    plugins: [
        magicLink({
            sendMagicLink: async ({ email, token, url, }, ctx) => {
                console.log('-------------------------------------------------------------------------------------------BAUTH PARAMETERS:', email, token, url)
                const otpCode = String(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000)
                
                 const fetchRow = await prisma.verification.findFirst({
                    where: { identifier: token }
                 })


                 await prisma.verification.update({
                    where: { id: fetchRow!.id },
                    data: { otpCode }
                 })

                 const resend = new Resend(process.env.RESEND_API_KEY)

                 resend.emails.send({
                    from: 'onboarding@resend.dev',
                    to: 'hissamdev@gmail.com',
                    subject: 'Hello World',
                    html: `<p>Verify your email with this code: ${otpCode}, or <a href="${url}">click here to verify email.</a></p>`
                 })
            }
        }),
        
    ]
})