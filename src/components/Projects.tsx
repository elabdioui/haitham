'use client'

import { useState, useEffect } from 'react';
import { FloatingParticles } from './ui/card3D';
import Image from 'next/image';
import { motion } from 'framer-motion';


interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  gradient: string;
}

interface FilterData {
  key: string;
  label: string;
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: "Banking Transaction System",
      description: "High-performance banking transaction system built with native C++ for real-time processing, secure transfers, and transaction management with multi-threading support",
      image: "/banking.jpeg", // Added leading slash
      technologies: ["C++", "STL", "Multi-threading", "SQLite", "Encryption", "Socket Programming"],
      category: "backend",
      githubUrl: "https://github.com/elabdioui/Gestion-des-comptes-bancaires",
      liveUrl: "/404",
      featured: true,
      gradient: "from-blue-600 via-cyan-600 to-teal-600"
    },
    {
      id: 2,
      title: "BMEKOG E-Commerce Platform",
      description: "Modern e-commerce platform built with ASP.NET Core 9, featuring secure authentication, payment processing, inventory management, and responsive React frontend",
      image: "/ecommerce.jpg", // Added leading slash
      technologies: ["C#", "ASP.NET Core 9", "React", "Entity Framework", "Microsoft Identity", "SQL Server", "Redux"],
      category: "fullstack",
      githubUrl: "https://github.com/elabdioui/EcommerceProjectNew",
      liveUrl: "/404",
      featured: true,
      gradient: "from-purple-600 via-violet-600 to-indigo-600"
    },
    {
      id: 3,
      title: "Enterprise Ticketing System",
      description: "Complete issue tracking and ticketing management system using full Microsoft stack with DevOps integration, automated workflows, and real-time notifications",
      image: "/ticketing.jpg", // Added leading slash
      technologies: ["C#", "ASP.NET", "Razor Pages", "Entity Framework", "Azure DevOps", "Azure App Services", "SignalR"],
      category: "Cloud Devops",
      githubUrl: "https://github.com/elabdioui/Ticketing-System",
      liveUrl: "/404",
      featured: true,
      gradient: "from-emerald-600 via-green-600 to-teal-600"
    },
    {
      id: 4,
      title: "Insurance Claims Microservices",
      description: "Enterprise insurance and claims management platform with microservices architecture, featuring comprehensive monitoring, CI/CD pipeline, and containerized deployment",
      image: "/sinistre.jpg", // Added leading slash
      technologies: ["Spring Boot", "Angular", "Docker", "Jenkins", "Prometheus", "Grafana", "SonarQube", "Zipkin", "API Gateway"],
      category: "Cloud Devops",
      githubUrl: "https://github.com/elabdioui/Sinistre",
      liveUrl: "/404",
      featured: true,
      gradient: "from-orange-600 via-amber-600 to-yellow-600"
    },
    {
      id: 5,
      title: "WildRydes Serverless Platform",
      description: "Fully serverless application deployed on AWS, leveraging cloud-native services for scalable, secure, and cost-effective solution with serverless architecture",
      image: "/aws.jpg",
      technologies: ["AWS Lambda", "AWS Cognito", "API Gateway", "DynamoDB", "S3", "CloudFront", "IAM", "Node.js"],
      category: "Cloud Devops",
      githubUrl: "https://github.com/elabdioui/wildRydes-site",
      liveUrl: "/404",
      featured: true,
      gradient: "from-pink-600 via-rose-600 to-red-600"
    },
    {
      id: 6,
      title: "GC Systems Security",
      description: "Professional landing page for security and fire protection company, featuring modern design, animations, and optimized performance with SEO implementation",
      image: "/gcsystems.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO", "Vercel"],
      category: "frontend",
      githubUrl: "https://github.com/elabdioui/gcsystems",
      liveUrl: "https://www.gcsystems.ma",
      featured: true,
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600"
    },
    //add a new project using django sqlite for a location of car rental system
    {
      id: 7,
      title: "Car Rental System",
      description: "A web application for managing car rentals, built with Django and SQLite",
      image: "/car.jpeg",
      technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
      category: "fullstack",
      githubUrl: "https://github.com/elabdioui/Django-PFA",
      liveUrl: "/404",
      featured: false,
      gradient: "from-slate-600 via-gray-600 to-zinc-600"
    }

  ];

  const filters: FilterData[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'Cloud Devops', label: 'Cloud & DevOps' },
    { key: 'backend', label: 'Backend' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="projects" className="relative min-h-screen">
      <FloatingParticles />
      
      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            My Projects
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Explore my portfolio of innovative applications showcasing modern technologies
            and creative problem-solving
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-3 shadow-2xl">
              <div className="flex flex-wrap gap-3 justify-center">
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
                    <span>{filter.label}</span>
                    
                    {activeFilter === filter.key && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid - Beautiful Cards with Images */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="group relative overflow-hidden rounded-2xl"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Glow effect behind card */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-70 rounded-2xl blur-lg transition-all duration-500`}></div>
                
                {/* Card content */}
                <div className="relative bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl h-full flex flex-col transition-all duration-500 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-52 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent z-10"></div>
                    <Image
                      src={project.image.startsWith('/') ? project.image : `/${project.image}`}
                      alt={project.title}
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                   
                    
                    {/* Category Tag */}
                    <div className="absolute bottom-3 left-3 z-20 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-white/10 border border-white/10 rounded-md text-xs text-blue-300 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-md text-xs text-purple-300 font-semibold">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span className="font-medium">Code</span>
                      </a>
                      
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn relative overflow-hidden flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-16 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">No projects match the selected filter. Please try another category.</p>
          </motion.div>
        )}

        {/* Contact CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in working together?
              </h3>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 px-10 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center gap-3"
                >
                  <span className="text-lg">Let&apos;s Connect</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}