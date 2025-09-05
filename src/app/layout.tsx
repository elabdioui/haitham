import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

// Load Roboto Mono
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal + Bold
  variable: "--font-roboto-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mon Portfolio | Développeur Full Stack",
  description: "Portfolio de développeur Full Stack spécialisé en React, Next.js et technologies modernes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${robotoMono.variable}`}>
      <body className={`${robotoMono.className} font-mono`}>
        {children}
      </body>
    </html>
  );
}