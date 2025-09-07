"use client";
import { useState } from "react";
import Carousel3D, { Carousel3DItem } from "./ui/lightswind/3d-carousel";

export default function Experience() {
  const experienceItems: Carousel3DItem[] = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      brand: "OCP Maintenance Solutions",
      description: "Working on web application development using modern technologies. Contributing to both frontend and backend development of enterprise solutions for maintenance management systems.",
      tags: ["React", "Next.js", "TypeScript", "Node.js", "SQL"],
      imageUrl: "ocpms.png", // Add an appropriate image
      link: "#ocp-experience"
    },
    {
      id: 2,
      title: "Frontend Developer",
      brand: "Personal Projects",
      description: "Development of responsive web applications and portfolio projects. Creating user interfaces with modern frameworks and focusing on performance optimization and user experience.",
      tags: ["React", "TailwindCSS", "JavaScript", "Git", "Responsive Design"],
      imageUrl: "ola.png",
      link: "#frontend-projects"
    },
    {
      id: 3,
      title: "Student Developer",
      brand: "University Projects",
      description: "Collaborative development of academic projects, focusing on fundamental programming concepts and software development methodologies. Learning through practical application of theoretical knowledge.",
      tags: ["Java", "Python", "Algorithms", "Data Structures", "Teamwork"],
      imageUrl: "sews.png",
      link: "#university-projects"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Professional Experience</h2>
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
        />
      </div>
    </section>
  );
}
