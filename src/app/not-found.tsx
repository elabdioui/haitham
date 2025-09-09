"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "@/components/ui/Particles";

export default function NotFound() {
  const [isClient, setIsClient] = useState(false);
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Create glitch effect interval
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 3000);
    
    // For better SEO, set the document title
    if (typeof document !== 'undefined') {
      document.title = "Page Not Found | Haitham El Abdioui";
    }
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Floating animation for astronaut with proper typing
  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 5,
      repeat: Infinity as const,
      ease: "easeInOut" as const
    }
  };

  // Text reveal animation with proper typing
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  // Button animation with proper typing
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
      transition: { 
        duration: 0.3,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Particles background */}
      <div className="fixed inset-0 w-full h-full z-0" aria-hidden="true">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      {/* Content - Adding proper semantic HTML for better SEO */}
      <main className="relative z-10 max-w-4xl w-full mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* 404 Text with glitch effect */}
          <motion.header variants={textVariants} className="mb-6">
            <h1 
              className={`text-9xl font-bold tracking-tight ${glitch ? 'text-red-500 relative' : 'text-white'}`}
              style={glitch ? {
                textShadow: "0 0 10px rgba(255,0,0,0.7), 0 0 20px rgba(255,0,0,0.4), 0 0 30px rgba(255,0,0,0.1)",
                transform: "skew(0.5deg, 0.5deg)",
                position: "relative" as const
              } : {}}
            >
              404
              {glitch && (
                <>
                  <span className="absolute inset-0 text-cyan-500 opacity-70" style={{ left: "5px", top: "-2px" }} aria-hidden="true">404</span>
                  <span className="absolute inset-0 text-yellow-500 opacity-70" style={{ left: "-5px", top: "2px" }} aria-hidden="true">404</span>
                </>
              )}
            </h1>
            <motion.p 
              variants={textVariants}
              className="text-xl mt-4 text-gray-300"
            >
              Houston, we have a problem.
            </motion.p>
          </motion.header>

          {/* Astronaut SVG Animation */}
          <motion.figure 
            variants={textVariants}
            animate={floatingAnimation}
            className="my-8"
            aria-label="Floating astronaut illustration"
          >
            <div className="w-48 h-48 mx-auto">
              {isClient && (
                <svg role="img" aria-label="Astronaut" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>Astronaut Illustration</title>
                  <g id="astronaut">
                    <path d="M302.9 155.5c-26 0-47.1 21.1-47.1 47.1s21.1 47.1 47.1 47.1 47.1-21.1 47.1-47.1-21.1-47.1-47.1-47.1zm0 78.5c-17.3 0-31.4-14.1-31.4-31.4s14.1-31.4 31.4-31.4 31.4 14.1 31.4 31.4-14.1 31.4-31.4 31.4z" fill="white"/>
                    <path d="M365.8 125.7h-24.4c-4.3 0-7.9 3.5-7.9 7.9s3.5 7.9 7.9 7.9h24.4c4.3 0 7.9-3.5 7.9-7.9s-3.6-7.9-7.9-7.9z" fill="white"/>
                    <path d="M365.8 156.7h-24.4c-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.5 7.9 7.9 7.9h24.4c4.3 0 7.9-3.5 7.9-7.9-.1-4.4-3.6-7.9-7.9-7.9z" fill="white"/>
                    <path d="M365.8 187.7h-24.4c-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.5 7.9 7.9 7.9h24.4c4.3 0 7.9-3.5 7.9-7.9-.1-4.4-3.6-7.9-7.9-7.9z" fill="white"/>
                    <path d="M365.8 218.7h-24.4c-4.3 0-7.9 3.5-7.9 7.9s3.5 7.9 7.9 7.9h24.4c4.3 0 7.9-3.5 7.9-7.9s-3.6-7.9-7.9-7.9z" fill="white"/>
                    <path d="M365.8 249.7h-24.4c-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.5 7.9 7.9 7.9h24.4c4.3 0 7.9-3.5 7.9-7.9-.1-4.4-3.6-7.9-7.9-7.9z" fill="white"/>
                    <path d="M365.8 280.7h-24.4c-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.5 7.9 7.9 7.9h24.4c4.3 0 7.9-3.5 7.9-7.9-.1-4.3-3.6-7.9-7.9-7.9z" fill="white"/>
                    <path d="M397.1 342.6L372.7 318c-2.2-2.2-5.6-2.9-8.5-1.7l-4.3 1.8V134.9c0-31.4-25.5-56.9-56.9-56.9-31.4 0-56.9 25.5-56.9 56.9v183.3l-4.3-1.8c-2.9-1.2-6.3-.5-8.5 1.7l-24.5 24.5c-3.1 3.1-3.1 8.1 0 11.2 1.5 1.5 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3l20.1-20.1 6 2.5v15.3c0 3.2 1.9 6.2 4.9 7.4l49.6 20.4c1 .4 2 .6 3 .6s2-.2 3-.6l49.6-20.4c3-1.2 4.9-4.2 4.9-7.4v-15.3l6-2.5 20.1 20.1c1.5 1.5 3.6 2.3 5.6 2.3s4.1-.8 5.6-2.3c3-3.1 3-8.1-.1-11.2zm-75.6 23.9L302.9 376l-18.6-7.6v-13.3l18.6 7.6 18.6-7.6v13.4zm18.6-27.3l-18.6 7.6-18.6-7.6V134.9c0-10.2 8.3-18.6 18.6-18.6 10.2 0 18.6 8.3 18.6 18.6v204.3z" fill="white"/>
                    <path d="M401.1 357h-31.3c-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.5 7.9 7.9 7.9h31.3c4.3 0 7.9-3.5 7.9-7.9 0-4.4-3.5-7.9-7.9-7.9z" fill="white"/>
                    <path d="M400.7 325.8l-23.5-9.6c-4-1.6-8.6.4-10.2 4.4-1.6 4 .4 8.6 4.4 10.2l23.5 9.6c.9.4 1.9.6 2.9.6 3.1 0 6.1-1.9 7.3-5 1.6-4-.4-8.6-4.4-10.2z" fill="white"/>
                    <path d="M240.1 357h-31.3c-4.3 0-7.9 3.5-7.9 7.9 0 4.3 3.5 7.9 7.9 7.9h31.3c4.3 0 7.9-3.5 7.9-7.9 0-4.4-3.5-7.9-7.9-7.9z" fill="white"/>
                    <path d="M235.5 331.4l23.5-9.6c4-1.6 6-6.2 4.4-10.2-1.6-4-6.2-6-10.2-4.4l-23.5 9.6c-4 1.6-6 6.2-4.4 10.2 1.2 3.1 4.2 5 7.3 5 1 0 2-.2 2.9-.6z" fill="white"/>
                  </g>
                </svg>
              )}
            </div>
          </motion.figure>

          {/* Lost in space message */}
          <motion.section variants={textVariants} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">You seem lost in space</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              The page you are looking for might have been moved to another universe or never existed in this dimension.
            </p>
          </motion.section>

          {/* Return home button */}
          <motion.nav variants={textVariants}>
            <Link href="/" aria-label="Return to home page">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                className="mt-8 px-8 py-3 bg-transparent border-2 border-white rounded-full text-white font-medium transition-all hover:bg-white/10"
              >
                <span className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Return to Home</span>
                </span>
              </motion.button>
            </Link>
          </motion.nav>
        </motion.div>
      </main>
      
      {/* Star field in background with CSS */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>
      
      {/* Add some style for star animations */}
      <style jsx>{`
        .stars, .stars2, .stars3 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .stars {
          background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='3' height='3'%3E%3Ccircle cx='1.5' cy='1.5' r='1' fill='%23fff' opacity='0.3'/%3E%3C/svg%3E") repeat;
          animation: animateStars 150s linear infinite;
        }
        
        .stars2 {
          background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='2'%3E%3Ccircle cx='1' cy='1' r='0.8' fill='%23fff' opacity='0.3'/%3E%3C/svg%3E") repeat;
          animation: animateStars 100s linear infinite;
        }
        
        .stars3 {
          background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Ccircle cx='0.5' cy='0.5' r='0.5' fill='%23fff' opacity='0.3'/%3E%3C/svg%3E") repeat;
          animation: animateStars 50s linear infinite;
        }
        
        @keyframes animateStars {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-2000px);
          }
        }
      `}</style>
    </div>
  );
}
