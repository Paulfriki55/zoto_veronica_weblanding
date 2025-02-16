import { Check } from "lucide-react"

export function Skills() {
  const skills = [
    "Evaluación del lenguaje y comunicación",
    "Terapia Miofuncional",
    "Psicomotricidad",
    "Integración sensorial",
    "Estimulación oportuna",
    "Terapia del habla",
    "Resolución de problemas",
    "Trabajo en equipo",
    "Proactividad",
    "Creatividad",
  ]

  return (
    <section className="py-16 md:py-24 bg-[#C8EBDC] relative overflow-hidden">
      {/* Patrón superior */}
      <svg
        className="absolute top-0 left-0 w-full transform rotate-180"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />
      </svg>

      {/* Patrón de hojas flotantes */}
      <div className="absolute inset-0">
        <svg
          className="absolute h-40 w-40 text-white/10 transform rotate-45 left-10 top-1/4 floating"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 1 8 18.5h8a4.5 4.5 0 0 1 1.29 1.2l1 2.3 1.89-.66C18.1 16.17 16 10 7 8zm-5 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 15zm0-6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9z"/>
        </svg>
        <svg
          className="absolute h-32 w-32 text-white/10 transform -rotate-12 right-10 bottom-1/4 floating"
          style={{ animationDelay: "-3s" }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 1 8 18.5h8a4.5 4.5 0 0 1 1.29 1.2l1 2.3 1.89-.66C18.1 16.17 16 10 7 8zm-5 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 15zm0-6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9z"/>
        </svg>
      </div>

      {/* Patrón de curvas decorativas */}
      <svg
        className="absolute left-0 top-1/3 h-64 w-64 text-white/10"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path
          d="M20,50 Q50,20 80,50 T140,50"
          className="floating"
          style={{ animationDelay: "-2s" }}
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-8 md:mb-12 text-[#8BA89B]">
          Habilidades y Especialidades
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover-lift group"
            >
              <div className="p-2 bg-[#E5EDE9] rounded-full group-hover:bg-[#8BA89B]/20 transition-colors">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-[#8BA89B]" />
              </div>
              <span className="text-sm md:text-base text-gray-700 font-montserrat">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Patrón inferior */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />
      </svg>
    </section>
  )
}

