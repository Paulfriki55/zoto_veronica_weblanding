import { ArrowRight, MessageSquare, Ear, Brain } from "lucide-react"
import Link from "next/link"

export function About() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5F7F6] rounded-full opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-[#F5F7F6] rounded-full text-sm text-[#8BA89B] mb-4">Servicios</div>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Servicios <span className="text-[#8BA89B]">profesionales</span> de
            <br />
            fonoaudiología
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Ofrezco atención integral y personalizada, adaptando mis técnicas terapéuticas a<br />
            las necesidades específicas de cada paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {/* Terapia del Lenguaje */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F5F7F6] flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-[#8BA89B]" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-center mb-4">Terapia del Lenguaje</h3>

            <p className="text-gray-600 text-center mb-6">
              Evaluación y tratamiento de trastornos del lenguaje en niños y adultos.
            </p>

            <div className="text-center">
              <Link
                href="/servicios/lenguaje"
                className="inline-flex items-center text-[#8BA89B] hover:text-[#7A9889] font-medium text-sm"
              >
                Más información <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Audiología */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F5F7F6] flex items-center justify-center">
                <Ear className="h-6 w-6 text-[#8BA89B]" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-center mb-4">Audiología</h3>

            <p className="text-gray-600 text-center mb-6">
              Evaluación auditiva y manejo de problemas relacionados con la audición.
            </p>

            <div className="text-center">
              <Link
                href="/servicios/audiologia"
                className="inline-flex items-center text-[#8BA89B] hover:text-[#7A9889] font-medium text-sm"
              >
                Más información <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Neurorehabilitación */}
          <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F5F7F6] flex items-center justify-center">
                <Brain className="h-6 w-6 text-[#8BA89B]" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-center mb-4">Neurorehabilitación</h3>

            <p className="text-gray-600 text-center mb-6">
              Terapia para pacientes con condiciones neurológicas que afectan el habla y la comunicación.
            </p>

            <div className="text-center">
              <Link
                href="/servicios/neurorehabilitacion"
                className="inline-flex items-center text-[#8BA89B] hover:text-[#7A9889] font-medium text-sm"
              >
                Más información <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

