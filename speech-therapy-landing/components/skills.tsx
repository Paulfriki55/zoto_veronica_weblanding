import { Check } from "lucide-react"
import { WaveShape } from "./wave-shapes"

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
      <WaveShape.Top />
      <WaveShape.LeafPattern />
      <WaveShape.Curve />

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

      <WaveShape.Bottom />
    </section>
  )
}

