"use client"
import { AuroraText } from "@/components/ui/magicui/aurora-text";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FlipText } from "@/components/ui/magicui/flip-text";
import { RainbowButton } from "./ui/magicui/rainbow-button";
import Link from 'next/link';

const words = "Passionate about web and mobile development, I create modern and efficient applications using the latest technologies.";

export default function Hero() {
  return (
    <section id="hero" className="relative isolate px-6 pt-10 lg:px-8">
      {/* Background gradient blur effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        
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
            <Link href="#projects">
              <RainbowButton>See My Projects</RainbowButton>
            </Link>
            <Link href="#contact">
              <RainbowButton>Contact Me</RainbowButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}