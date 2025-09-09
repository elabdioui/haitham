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
  "url": "https://yourwebsite.com", // Replace with your actual domain
  "image": "https://yourwebsite.com/profile-photo.jpg", // Replace with your profile photo URL
  "sameAs": [
    "https://linkedin.com/in/yourusername", // Replace with your actual profiles
    "https://github.com/yourusername",
    "https://twitter.com/yourusername"
  ],
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Your Company or University" // Replace with your current company or university
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