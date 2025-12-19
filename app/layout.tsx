import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Geist, Geist_Mono, Inter } from "next/font/google";

import ComponentLoader from "./components/ComponentLoader";
import Footer from "./components/nav-ui/Footer";
import ConsentLogger from "./consent-logger";

import "./globals.css";
import "./tailwind-files/github_clone.css";
import "./tailwind-files/portfolio_home.css";


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
  title: "Ahmed Hissam - Full Stack Developer, Digital Marketer & SEO Expert",
  description: "Creating modern web applications and helping them grow while making sure your needs are met. Planned maintenance, focused pricing and more.",
  robots: {
    index: false,
    follow: false,
  }
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
        <div id="cookiechimp-container" />
        <ConsentLogger />
        <ComponentLoader />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />)}
      </body>
    </html>
  );
}
