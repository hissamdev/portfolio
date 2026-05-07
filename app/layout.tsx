import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Geist, Geist_Mono, Inter, Urbanist } from "next/font/google";

import "./globals.css";
import "./tailwind-files/github_clone.css";
import "./tailwind-files/portfolio_home.css";
import PathnameHeader from "./components/nav-ui/Header/PathnameHeader";
import { Suspense } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const interFont = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const urbanistFont = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    verification: {
        google: "XQhhDENjsEeuJXsjo45W3N_pWSFSQfBG_z18lc58Gp4",
    },
    title: "Ahmed Hissam - Full Stack Developer, SEO Specialist & Digital Marketer",
    description:
        "Creating modern web applications and helping them grow while making sure your needs are met. Planned maintenance, focused pricing and more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="relative">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${interFont.variable} ${urbanistFont.variable} relative antialiased`}
            >
                <Suspense fallback={null}>
                    <PathnameHeader />
                </Suspense>
                {children}
            </body>
        </html>
    );
}
