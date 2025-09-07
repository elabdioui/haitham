"use client";
import { useState } from "react";
import Carousel3D, { Carousel3DItem } from "./ui/lightswind/3d-carousel";
import ShinyText from "./ui/ShinyText";

export default function Experience() {
  const experienceItems: Carousel3DItem[] = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      brand: "OCP Maintenance Solutions",
      description: "Working on web application development using modern technologies. Contributing to both frontend and backend development of enterprise solutions for maintenance management systems.",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "SQL"],
      imageUrl: "ocpms.png", // Image du logo OCPMS
      link: "#ocp-experience",
      hideOverlayText: true // Ajout de cette propriété pour masquer le texte sur l'image
    },
    {
      id: 2,
      title: "Frontend Developer",
      brand: "Personal Projects",
      description: "Development of responsive web applications and portfolio projects. Creating user interfaces with modern frameworks and focusing on performance optimization and user experience.",
      tags: ["React", "TailwindCSS", "JavaScript", "Git", "Responsive Design"],
      imageUrl: "ola.png", // Image du logo
      link: "#frontend-projects",
      hideOverlayText: true // Masquer le texte sur l'image
    },
    {
      id: 3,
      title: "Student Developer",
      brand: "University Projects",
      description: "Collaborative development of academic projects, focusing on fundamental programming concepts and software development methodologies. Learning through practical application of theoretical knowledge.",
      tags: ["Java", "Python", "Algorithms", "Data Structures", "Teamwork"],
      imageUrl: "sews.png", // Image du logo
      link: "#university-projects",
      hideOverlayText: true // Masquer le texte sur l'image
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <ShinyText text="Professional Experience" speed={3} disabled={false} />
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey in web development and software engineering
          </p>
        </div>

        {/* 3D Carousel */}
        <Carousel3D 
          items={experienceItems}
          autoRotate={true}
          rotateInterval={5000}
          cardHeight={450}
          title="Professional Experience"
          subtitle="My Path"
          tagline="Explore my journey through different roles and projects in web development."
          imageConfig={{
            showOverlayText: false,
            backgroundSize: "cover", // "contain" pour voir tout le logo
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
    </section>
  );
}
