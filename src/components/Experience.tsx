"use client";
import { useState } from "react";
import Carousel3D from "./ui/lightswind/3d-carousel";


interface CarouselItem {
  id: number;
  title: string;
  brand: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export default function Experience() {
  const experienceItems: CarouselItem[] = [
    {
      id: 1,
      title: "FullStack Developer - ERP JorfLasfarHubSecurity",
      brand: "OCP Maintenance Solutions",
      description: "Development of an ERP system dedicated to HSE operations with real-time dashboards for Jorf Lasfar and Safi sites. Implemented comprehensive safety management solutions with advanced monitoring capabilities.",
      tags: ["MySQL", "Laravel", "Vue.js", "GitLab CI/CD", "Docker", "ERP", "HSE"],
      imageUrl: "/ocpms.png", 
      link: "https://ocp-ms.com/"
    },
    {
      id: 2,
      title: "Software Engineer & Data Analyst - LPG IN THE BOX",
      brand: "OLA-Energy",
      description: "Design and development of a stock and inventory management application with CMMS tool enhancement. Created efficient data analysis workflows and automated reporting systems for inventory optimization.",
      tags: ["VBA", "Power Apps", "Power BI", "Data Analysis", "CMMS", "Inventory Management"],
      imageUrl: "/ola.png", 
      link: "https://olaenergy.com/"
    },
    {
      id: 3,
      title: "IT Service - Python Developer",
      brand: "SEWS-CABIND",
      description: "Development of a billing management website with automated Excel data import. Streamlined billing processes through automation and created efficient data processing pipelines for financial management.",
      tags: ["Django", "Python", "Pandas", "Excel", "Automation", "Billing Management"],
      imageUrl: "/sews.png", // You'll need to add this image
      link: "https://www.sews-cabind.com/scm/"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey in software development, from ERP systems to data analysis and web applications
          </p>
        </div>

       

        {/* 3D Carousel */}
        <Carousel3D 
          items={experienceItems}
          autoSlide={true}
          autoSlideDelay={6000}
          cardHeight={480}
          imageConfig={{
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />

        

      
      </div>
    </section>
  );
}