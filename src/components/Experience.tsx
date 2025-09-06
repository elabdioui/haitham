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
      imageUrl: "/images/experience/ocp.jpg", // Add an appropriate image
      link: "#ocp-experience"
    },
    {
      id: 2,
      title: "Frontend Developer",
      brand: "Personal Projects",
      description: "Development of responsive web applications and portfolio projects. Creating user interfaces with modern frameworks and focusing on performance optimization and user experience.",
      tags: ["React", "TailwindCSS", "JavaScript", "Git", "Responsive Design"],
      imageUrl: "/images/experience/frontend.jpg",
      link: "#frontend-projects"
    },
    {
      id: 3,
      title: "Student Developer",
      brand: "University Projects",
      description: "Collaborative development of academic projects, focusing on fundamental programming concepts and software development methodologies. Learning through practical application of theoretical knowledge.",
      tags: ["Java", "Python", "Algorithms", "Data Structures", "Teamwork"],
      imageUrl: "/images/experience/university.jpg",
      link: "#university-projects"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
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
