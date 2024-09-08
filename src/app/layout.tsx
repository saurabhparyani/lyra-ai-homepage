import type { Metadata } from "next";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LyraAI",
  description: "AI SEO Tool for your need!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, `bg-black text-white antialiased`)}
      >
        {children}
      </body>
    </html>
  );
}
