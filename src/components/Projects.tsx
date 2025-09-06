'use client'

import { useState, useEffect } from 'react';
import { FloatingParticles, ProjectData, FilterData } from './ui/card3D';
import { ThreeDMarquee } from './ui/lightswind/3d-marquee';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Complete e-commerce platform with cart, payment, and inventory management",
      image: "/project1.jpg",
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
      description: "Collaborative task management application with real-time features",
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
      description: "Portfolio creation tool with customizable templates",
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
      description: "REST API for weather data with advanced analytics",
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
      description: "Real-time dashboard to track cryptocurrencies with charts",
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
      description: "Backend for social media application with microservices",
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
    { key: 'all', label: 'All Projects', icon: '🚀' },
    { key: 'featured', label: 'Featured Projects', icon: '⭐' },
    { key: 'fullstack', label: 'Full Stack', icon: '🔄' },
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const marqueeImages = filteredProjects.map(project => ({
    src: project.image,
    alt: project.title,
    href: project.liveUrl,
    target: "_blank",
    data: {
      title: project.title,
      description: project.description,
      technologies: project.technologies,
      githubUrl: project.githubUrl
    }
  }));

  const handleImageClick = (image, index) => {
    console.log(`Clicked on ${image.alt}`, image.data);
    window.open(image.href, "_blank");
  };

  return (
    <section id="projects" className="relative min-h-screen">
      {/* ✅ SUPPRESSION du background pour laisser passer le DotGrid */}
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-8 py-20">
        {/* Header amélioré avec animations */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl">
              <svg className="w-10 h-10 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Projects
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover my technical achievements, from modern web applications to robust backend APIs
          </p>
          
          {/* Stats animées */}
          <div className="flex justify-center gap-8 mt-12">
            {[
              { number: "20+", label: "Projects Built" },
              { number: "8+", label: "Technologies" },
              { number: "3", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres avec design amélioré */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-500 flex items-center gap-3 group relative overflow-hidden ${
                      activeFilter === filter.key
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-2xl scale-105 shadow-blue-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                    }`}
                  >
                    <span className="text-lg">{filter.icon}</span>
                    <span className="hidden sm:inline">{filter.label}</span>
                    
                    {activeFilter === filter.key && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3D Marquee avec wrapper amélioré */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>
          <div className="relative bg-black/10 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
            <ThreeDMarquee 
              images={marqueeImages}
              cols={3}
              className="bg-transparent dark:bg-transparent"
              onImageClick={handleImageClick}
            />
          </div>
        </div>

        {/* Project Details avec design amélioré */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.slice(0, 3).map((project, index) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background gradient animé */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl blur-xl`}></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Badge featured */}
                {project.featured && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <span>⭐</span>
                    <span>Featured</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-300 hover:bg-white/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg text-xs text-blue-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span>Code</span>
                  </a>
                  
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span>Demo</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section améliorée */}
        <div className="text-center">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in my work?
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                I am always open to new projects and exciting collaborations. 
                Let's create something amazing together!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <span>Let's discuss your project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <a
                  href="/cv-votre-nom.pdf"
                  download
                  className="group relative overflow-hidden bg-white/10 hover:bg-white/20 border border-white/20 text-white py-4 px-8 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}