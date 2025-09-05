"use client";
import { use, useEffect, useState } from "react";

export default function Education() {
   const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const educationData = [
    {
      year: "2021 - 2024",
      degree: "Master en Informatique",
      school: "École Nationale Supérieure d'Informatique",
      location: "Rabat, Maroc",
      description: "Spécialisation en développement web et ingénierie logicielle",
      gpa: "16.5/20",
      icon: "🎓",
      color: "from-blue-600 to-indigo-600"
    },
    {
      year: "2019 - 2021",
      degree: "Licence en Sciences Informatiques",
      school: "Université Hassan II",
      location: "Casablanca, Maroc",
      description: "Formation en algorithmes, structures de données et programmation",
      gpa: "15.8/20",
      icon: "💻",
      color: "from-purple-600 to-violet-600"
    },
    {
      year: "2018 - 2019",
      degree: "Classes Préparatoires",
      school: "Lycée Mohammed V",
      location: "Casablanca, Maroc",
      description: "Mathématiques et Physique - Préparation aux grandes écoles",
      gpa: "Admis",
      icon: "📐",
      color: "from-emerald-600 to-green-600"
    },
    {
      year: "2018",
      degree: "Baccalauréat Sciences Mathématiques",
      school: "Lycée Al Khawarizmi",
      location: "Casablanca, Maroc",
      description: "Option Sciences Mathématiques B",
      gpa: "Mention Bien",
      icon: "🏆",
      color: "from-orange-600 to-amber-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev.length < educationData.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="education" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900/50 to-black/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Éducation</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mon parcours académique qui a forgé mes compétences techniques
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-emerald-500 to-orange-500 opacity-60"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Point central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 z-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-r ${item.color} border-4 border-black shadow-lg`}></div>
                  <div className={`absolute inset-0.5 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}></div>
                </div>

                {/* Contenu alterné */}
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="group">
                      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl">{item.icon}</span>
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${item.color} text-white`}>
                            {item.year}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">{item.school}</h4>
                        <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {item.location}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-3">{item.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">Résultat:</span>
                          <span className="text-sm font-semibold text-green-400">{item.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
