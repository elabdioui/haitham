import { Navbar } from '@/components/Navbar'
import  Hero  from "@/components/Hero";
import About  from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import { Projects } from '@/components/Projects';
import Skills from '@/components/Skills';
import { Contact } from '@/components/Contact';


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black relative">
      {/* Dark White Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
            radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />
      
      {/* Content */}
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