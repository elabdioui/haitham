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
    canonical: "https://elabdioui.dev", 
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
    url: "https://elabdioui.dev",
    title: "Haitham El Abdioui | Software Engineer",
    description: "Software engineering student specializing in web development, cloud technologies, and innovative digital solutions.",
    siteName: "Haitham El Abdioui Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haitham El Abdioui - Software Engineer",
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "google-site-verification-code",
    yandex: process.env.YANDEX_VERIFICATION || "yandex-verification-code",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Haitham El Abdioui",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

// Improved viewport settings for mobile
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      </head>
      <body className={`${geist.className} font-mono bg-black relative w-full overflow-x-hidden`}>
        {/* Galaxy Background with reduced settings for better mobile performance */}
        <div className="fixed inset-0 w-full h-full z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={100} // Reduced count for better mobile performance
            particleSpread={7}
            speed={0.1}
            particleBaseSize={60} // Smaller particles for mobile
            moveParticlesOnHover={false} // Disable hover effect for better mobile performance
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        
        {/* Main content with fixed width and overflow control */}
        <div className="relative z-10 w-full max-w-[100vw] mx-auto">
          {children}
        </div>
        
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}