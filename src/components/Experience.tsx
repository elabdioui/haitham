"use client";
import { useState } from "react";

export default function Experience() {
    
       const [activeCard, setActiveCard] = useState(0);

  const experienceData = [
    {
      period: "2023 - Présent",
      title: "Développeur Full Stack Senior",
      company: "TechCorp Solutions",
      location: "Casablanca, Maroc",
      type: "CDI",
      description: "Développement d'applications web complexes avec React, Next.js et Node.js. Encadrement d'une équipe de 3 développeurs juniors.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      achievements: [
        "Amélioration des performances de 40%",
        "Migration vers architecture microservices",
        "Formation de l'équipe aux nouvelles technologies"
      ],
      logo: "💼"
    },
    {
      period: "2022 - 2023",
      title: "Développeur Frontend",
      company: "Digital Agency Pro",
      location: "Rabat, Maroc",
      type: "Stage",
      description: "Création d'interfaces utilisateur modernes et responsives. Collaboration étroite avec les équipes UX/UI.",
      technologies: ["React", "Vue.js", "Sass", "Figma", "Git"],
      achievements: [
        "Développement de 5 sites e-commerce",
        "Optimisation SEO et accessibilité",
        "Mise en place des tests automatisés"
      ],
      logo: "🎨"
    },
    {
      period: "2021 - 2022",
      title: "Développeur Web Junior",
      company: "StartUp Innovante",
      location: "Casablanca, Maroc",
      type: "Freelance",
      description: "Développement d'une plateforme SaaS pour la gestion de projets. Première expérience en développement full stack.",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap", "jQuery"],
      achievements: [
        "Création de l'architecture de base",
        "Implémentation du système d'authentification",
        "Déploiement et maintenance serveur"
      ],
      logo: "🚀"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Expérience Professionnelle</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mon évolution professionnelle dans le développement web
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
            {experienceData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCard === index
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {experienceData[index].period}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative h-96 overflow-hidden">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                activeCard === index
                  ? 'opacity-100 translate-x-0'
                  : activeCard > index
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                  {/* Info principale */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{exp.logo}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            exp.type === 'CDI' ? 'bg-green-500/20 text-green-400' :
                            exp.type === 'Stage' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-emerald-400 mb-2">{exp.company}</h4>
                        <p className="text-gray-400 flex items-center gap-1 mb-4">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {exp.location}
                        </p>
                        <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="text-sm font-semibold text-white mb-3">Technologies utilisées</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Réalisations */}
                  <div className="space-y-6">
                    <h5 className="text-lg font-semibold text-white">Réalisations clés</h5>
                    <div className="space-y-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Période en grand */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl">
                      <p className="text-sm text-emerald-400 mb-1">Période</p>
                      <p className="text-2xl font-bold text-white">{exp.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicateurs */}
        <div className="flex justify-center mt-8 gap-3">
          {experienceData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCard === index
                  ? 'bg-emerald-500 scale-125'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );

}
