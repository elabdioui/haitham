import { Navbar } from '@/components/Navbar'
import Hero from "@/components/Hero";
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import { Projects } from '@/components/Projects';
import Skills from '@/components/Skills';
import { Contact } from '@/components/Contact';


export default function Home() {
  return (
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
  );
}