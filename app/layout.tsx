import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Geist, Geist_Mono, Inter } from "next/font/google";

import ComponentLoader from "./components/ComponentLoader";
import Footer from "./components/nav-ui/Footer";

import "./globals.css";

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
  title: "Professional Digital Marketing & Development Agency | Cordra Studios",
  description: "Cordra Studios is a professional marketing and development agency.",
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
        <ComponentLoader />
        {children}
        <Footer />
        {process.env.NODE_ENV === "production" && (<GoogleAnalytics gaId=""/>)}
      </body>
    </html>
  );
}
