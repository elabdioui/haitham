import { Navbar } from '@/components/Navbar'
import Hero from "@/components/Hero";
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import { Projects } from '@/components/Projects';
import Skills from '@/components/Skills';
import { Contact } from '@/components/Contact';
import Script from 'next/script';

// Define JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Haitham El Abdioui",
  "url": "https://elabdioui.dev", // Replace with your actual domain
  "image": "https://elabdioui.dev/profile-photo.jpg", // Replace with your profile photo URL
  "sameAs": [
    "https://linkedin.com/in/haithamelabdioui",
    "https://github.com/elabdioui",
  ],
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Moroccan School of Engineering" // Replace with your current company or university
  },
  "description": "Software engineering student specializing in web development, cloud technologies, and innovative digital solutions.",
  "knowsAbout": ["Web Development", "JavaScript", "React", "Next.js", "Cloud Computing"] // Add your skills
};

export default function Home() {
  return (
    <>
      {/* Add JSON-LD structured data */}
      <Script
        id="schema-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen w-full relative">
        {/* Le DotGrid est maintenant dans le layout, donc nous supprimons l'arrière-plan ici */}
        
        {/* Content avec z-index pour le placer au-dessus du DotGrid */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </>
  );
}