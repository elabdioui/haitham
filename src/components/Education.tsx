"use client";
import ShinyText from "./ui/ShinyText";
import { Timeline } from "./ui/timeline";
import { useState } from "react";


export default function Education() {
  const educationData = [
    {
      title: "2020 - 2021",
      content: (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              Completed
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">Baccalaureate in Physics</h3>
          <h4 className="text-lg font-semibold text-blue-400 mb-2">Al Yassamine School</h4>
          <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Berrechid, Morocco
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Completed secondary education with a focus on physics and mathematics. 
            Developed analytical thinking and scientific reasoning skills. Participated in 
            science competitions and extracurricular activities.
          </p>
          
        </div>
      ),
    },
    {
      title: "2021 - 2023",
      content: (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white">
              Completed
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">University Degree in Science and Technology</h3>
          <h4 className="text-lg font-semibold text-blue-400 mb-2">Université Hassan I</h4>
          <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Settat, Morocco
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Studied fundamental sciences and technology, building a strong foundation in 
            mathematics, physics, and computer science. Developed critical thinking and 
            problem-solving skills through rigorous coursework.
          </p>
          
        </div>
      ),
    },
    {
      title: "2023 - 2026",
      content: (
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white">
              In Progress
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">State Engineer Degree in Computer Science</h3>
          <h4 className="text-lg font-semibold text-blue-400 mb-2">Moroccan School of Engineering Sciences, EMSI</h4>
          <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Casablanca, Morocco
          </p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            Pursuing advanced studies in software engineering, focusing on full-stack development, 
            cloud computing, and AI technologies. Working on projects involving modern frameworks 
            and industry best practices.
          </p>
        
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="relative min-h-screen">
      {/* ✅ SUPPRESSION du bg-slate-900 pour laisser passer le DotGrid */}
      <div className="container mx-auto pt-10 relative z-10">
        {/* Custom header before the Timeline component */}
        <div className="text-center mb-8 px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              <ShinyText text="Education" speed={3} disabled={false} />
            </h2>
          </div>
        </div>
        
        {/* Timeline component */}
        <Timeline data={educationData} />
      </div>
    </section>
  );
}