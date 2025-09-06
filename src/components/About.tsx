import { h1 } from "framer-motion/client";
import { FlipText } from "@/components/ui/magicui/flip-text";
import { ShinyText } from "@/components/ui/lightswind/shiny-text";
// Translate the entire section into English    
export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-extrabold text-white mb-16 text-center">
          <ShinyText
            className="inline-block"
            baseColor="#ffffff"
            shineColor="#7dd3fc"
          >
            About Me
          </ShinyText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Photo et info principale */}
          <div className="lg:col-span-1 text-center">
            <div className="relative inline-block">
              <img
                src="/votre-photo.jpg"
                alt="Votre nom"
                className="w-48 h-48 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-black"></div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Haitham El Abdioui</h3>
            <div className="flex items-center justify-center text-gray-400 mb-4 text-lg font-medium">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Casablanca, Morocco
            </div>
          </div>

          {/* Cards d'information */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-blue-400 mb-3">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Education</h4>
              <p className="text-gray-400 text-lg font-medium">Graduation in 2026 Insha'Allah</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-purple-400 mb-3">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">Currently</h4>
              <p className="text-gray-400 text-lg font-medium">Intern as Full Stack Developer at [OCP Maintenance Solutions]</p>
            </div>

            <div className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-2xl font-bold text-white mb-4">About</h4>
              <p className="text-gray-400 leading-relaxed text-lg font-medium">
                Passionate about web development and cloud computing, I specialize in creating modern and efficient applications. I enjoy solving complex problems and learning new technologies to create exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
    
}