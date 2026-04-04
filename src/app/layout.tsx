import type { Metadata } from "next";
import { Inter, Syncopate, Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sync" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Creative Portfolio | Scrollytelling Experience",
  description: "A high-end scrollytelling portfolio built with Next.js, Framer Motion, and Canvas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syncopate.variable} ${syne.variable} ${mono.variable} font-sans antialiased selection:bg-white selection:text-black bg-black`}>
        {children}
      </body>
    </html>
  );
}
