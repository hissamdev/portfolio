import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Geist, Geist_Mono, Inter } from "next/font/google";
import ComponentLoader from "./components/ComponentLoader";

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
  subsets: ["latin"]
})

export const metadata: Metadata = {
  verification: {
    google: "XQhhDENjsEeuJXsjo45W3N_pWSFSQfBG_z18lc58Gp4",
  },
  title: "Ahmed Hissam - Full Stack Developer, Digital Marketer & SEO Expert",
  description: "Creating modern web applications and helping them grow while making sure your needs are met. Planned maintenance, focused pricing and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interFont.variable} antialiased`}
      >
        {process.env.NODE_ENV === "production" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/>
        )}
        <Suspense fallback={null}>
          <PathnameHeader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}