"use client";

import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Skills</h2>
        {/* Augmenté la hauteur de 500px à 600px et ajouté w-full pour occuper toute la largeur */}
        <div className="relative flex w-full h-[900px] items-center justify-center overflow-hidden">
          {/* Vous pouvez également modifier les propriétés du IconCloud si le composant les accepte */}
          <IconCloud
            images={images}
            size={80}
            scale={1.2}
          />
        </div>
      </div>
    </section>
  );
}
