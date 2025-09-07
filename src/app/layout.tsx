import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import DotGrid from "@/components/ui/DotGrid";

// Load Nunito Sans
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal + Bold
  variable: "--font-nunito-sans",
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
    <html lang="fr" className={`${nunitoSans.variable}`}>
      <body className={`${nunitoSans.className} font-mono bg-black`}>
        {/* DotGrid en arrière-plan */}
        <DotGrid
          dotSize={5}
          gap={30}
          baseColor="#3b82f6"
          activeColor="#8b5cf6"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
        
        {/* Contenu du site */}
        {children}
      </body>
    </html>
  );
}