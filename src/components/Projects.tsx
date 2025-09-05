'use client'

import { useState, useEffect } from 'react';
import { Card3D, FloatingParticles, ProjectData, FilterData } from './ui/card3D';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce complète avec panier, paiement et gestion d'inventaire",
      image: "/project1.jpg", // Remplacez par vos vraies images
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      category: "fullstack",
      githubUrl: "https://github.com/votre-username/ecommerce",
      liveUrl: "https://votre-ecommerce.vercel.app",
      featured: true,
      gradient: "from-blue-600 via-purple-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Application de gestion de tâches collaborative avec temps réel",
      image: "/project2.jpg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "fullstack",
      githubUrl: "https://github.com/votre-username/task-manager",
      liveUrl: "https://votre-task-app.netlify.app",
      featured: false,
      gradient: "from-emerald-600 via-teal-600 to-cyan-600"
    },
    {
      id: 3,
      title: "Portfolio Designer",
      description: "Outil de création de portfolios avec templates personnalisables",
      image: "/project3.jpg",
      technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Supabase"],
      category: "frontend",
      githubUrl: "https://github.com/votre-username/portfolio-builder",
      liveUrl: "https://portfolio-builder.vercel.app",
      featured: true,
      gradient: "from-pink-600 via-rose-600 to-red-600"
    },
    {
      id: 4,
      title: "Weather Analytics API",
      description: "API REST pour données météorologiques avec analytics avancés",
      image: "/project4.jpg",
      technologies: ["Express.js", "Python", "Redis", "Docker"],
      category: "backend",
      githubUrl: "https://github.com/votre-username/weather-api",
      liveUrl: "https://weather-api-docs.vercel.app",
      featured: false,
      gradient: "from-orange-600 via-amber-600 to-yellow-600"
    },
    {
      id: 5,
      title: "Crypto Dashboard",
      description: "Dashboard temps réel pour suivre les cryptomonnaies avec graphiques",
      image: "/project5.jpg",
      technologies: ["React", "Chart.js", "WebSocket", "CoinGecko API"],
      category: "frontend",
      githubUrl: "https://github.com/votre-username/crypto-dashboard",
      liveUrl: "https://crypto-tracker-live.vercel.app",
      featured: true,
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600"
    },
    {
      id: 6,
      title: "Social Media Backend",
      description: "Backend complet pour application de réseau social avec microservices",
      image: "/project6.jpg",
      technologies: ["NestJS", "GraphQL", "PostgreSQL", "Kubernetes"],
      category: "backend",
      githubUrl: "https://github.com/votre-username/social-backend",
      liveUrl: "https://social-api-docs.herokuapp.com",
      featured: false,
      gradient: "from-slate-600 via-gray-600 to-zinc-600"
    }
  ];

  const filters: FilterData[] = [
    { key: 'all', label: 'Tous les projets', icon: '🚀' },
    { key: 'featured', label: 'Projets phares', icon: '⭐' },
    { key: 'fullstack', label: 'Full Stack', icon: '🔄' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  useEffect(() => {
    setVisibleProjects([]);
    const timer = setInterval(() => {
      setVisibleProjects(prev => {
        if (prev.length < filteredProjects.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [activeFilter, filteredProjects.length]);

  return (
    <section id="projects" className="min-h-screen px-6 lg:px-8 py-20 relative overflow-hidden">
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header avec animation */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl mb-6 animate-bounce">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Mes <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes réalisations techniques, des applications web modernes aux API backend robustes
          </p>
        </div>

        {/* Filtres avec effet glassmorphism */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-2">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{filter.icon}</span>
                  <span className="hidden sm:inline">{filter.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grille de projets avec animation 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card3D
              key={project.id}
              className={`group transition-all duration-700 ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden hover:border-white/40 transition-all duration-300">
                {/* Badge featured */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <span>⭐</span>
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Image avec overlay gradient */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                  <div className="absolute inset-0 bg-black/20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback si l'image n'existe pas
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  
                  {/* Overlay avec icône */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-300 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                      <span>Code</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </a>
                    
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>Demo</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Intéressé par mon travail ?</h3>
            <p className="text-gray-400 mb-6">
              Je suis toujours ouvert à de nouveaux projets et collaborations passionnantes
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 mx-auto"
            >
              <span>Discutons de votre projet</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}