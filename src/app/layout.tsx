import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Particles from "@/components/ui/Particles";

// Load Geist
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700"], // Normal + Bold
  variable: "--font-geist",
  display: 'swap',
});

// Enhanced metadata
export const metadata: Metadata = {
  title: {
    default: "Haitham El Abdioui | Software Engineer",
    template: "%s | Haitham El Abdioui"
  },
  description: "Software engineering student specializing in web development, cloud technologies, and innovative digital solutions.",
  keywords: ["software engineer", "web development", "programming", "portfolio", "Haitham El Abdioui", "full-stack developer"],
  authors: [{ name: "Haitham El Abdioui" }],
  creator: "Haitham El Abdioui",
  publisher: "Haitham El Abdioui",
  alternates: {
    canonical: "https://yourwebsite.com", // Replace with your actual domain
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://yourwebsite.com", // Replace with your actual domain
    title: "Haitham El Abdioui | Software Engineer",
    description: "Software engineering student specializing in web development, cloud technologies, and innovative digital solutions.",
    siteName: "Haitham El Abdioui Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create and add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Haitham El Abdioui - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haitham El Abdioui | Software Engineer",
    description: "Software engineering student specializing in web development, cloud technologies, and innovative digital solutions.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle if you have one
    images: ["/twitter-image.jpg"], // Create and add this image to your public folder
  },
  verification: {
    // Add these if you have them
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

// Add viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geist.variable} scroll-smooth`}>
      <body className={`${geist.className} font-mono bg-black relative`}>
        {/* Galaxy Background */}
        <div className="fixed inset-0 w-full h-full z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        
        {/* Main content with higher z-index */}
        <div className="relative z-10">
          {children}
        </div>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}