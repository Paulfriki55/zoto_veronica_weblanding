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
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern opacity-5" />

      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-8 md:mb-12 gradient-text">
          Habilidades y Especialidades
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 md:p-6 bg-white rounded-xl shadow-lg hover-lift group"
            >
              <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Check className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>
              <span className="text-sm md:text-base text-gray-700 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

