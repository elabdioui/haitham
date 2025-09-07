"use client";

import { IconCloud } from "@/components/ui/magicui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "ios",
  "azure",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "aspnet",
  "nodejs",
  "vuejs",
  "angular",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "springboot",
  "tailwindcss",
  "django",
  "nextdotjs",
  "nestjs",
  "mongoDB",
  "redis",
  "graphql",
  "kubernetes",
  "linux",
  "jenkins",
  "vscode",
  "gcloud",
  "laravel",
  "php",
  "csharp",
  "python",
  "cplusplus",
  "html5",
  "css3",
  "sass",
  "bootstrap",
  "webpack",
  "sqlite",
  "sqlserver",
  "mysql",
  "jee",
  "bitbucket",
  "latex",
  "overleaf",
  "visualbasic",
  "jetbrains",
  "intellijidea",
  "eclipseide",
  "helm",
  "rabbitmq",
  "prometheus",
  "grafana",
  "elasticsearch",
  "grafana",
  "restfulapi",
  "oauth",
  "jwt",
  "powerbi",
];

export default function Skills() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
     <div className="text-center mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"></div>
          </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Skills
        </h2>

        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <IconCloud
            images={images}
            canvasSize={800}    // Custom canvas size
            iconSize={70}       // Custom icon size
            sphereRadius={250}  // Custom sphere radius
          />
        </div>
      </div>
    </section>
  );
}