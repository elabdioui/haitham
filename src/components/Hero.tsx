"use client"
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FlipText } from "@/components/magicui/flip-text";
// Un texte plus court pour tester
//traduire en anglais
const words = "Passionate about web and mobile development, I create modern and efficient applications using the latest technologies.";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate px-6 pt-10 lg:px-8">
      {/* Background gradient blur effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          {/* Conteneur flex pour garantir des éléments empilés verticalement */}
          <div className="flex flex-col items-center justify-center gap-2">
            {/* Première ligne - Nom et prénom */}
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              <AuroraText>Haitham El Abdioui</AuroraText>
            </h1>
            
            {/* Deuxième ligne - Titre */}
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Software Engineering student
            </h2>
          </div>

          {/* Ajout d'une classe pour s'assurer que le texte est visible */}
          <div className="text-white text-lg mt-6">
            <TextGenerateEffect words={words} className="text-white" />
          </div>

          <div className="mt-8 flex items-center justify-center gap-x-6">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all duration-200"
            >
              Voir mes projets
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-sm font-semibold text-white hover:text-gray-300 transition-colors duration-200"
            >
              Me contacter <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}