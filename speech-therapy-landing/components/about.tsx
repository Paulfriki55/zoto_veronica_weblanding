import { WaveShape } from "./wave-shapes"
import { Award, BookOpen, Briefcase } from 'lucide-react'

export function About() {
  return (
    <section className="py-16 md:py-24 bg-[#E5EDE9] relative overflow-hidden">
      <WaveShape.Top />
      <WaveShape.LeafPattern />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#8BA89B] text-center">Sobre Mí</h2>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover-lift mb-12">
            <p className="text-base md:text-lg mb-8 text-gray-600 leading-relaxed font-montserrat">
              Fonoaudióloga con experiencia en el área de Lenguaje, Audición, Deglución, Terapia Miofuncional,
              Psicomotricidad e Integración sensorial, Estimulación oportuna con pacientes pediátricos, adolescentes,
              adultos y adultos mayores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover-lift">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-[#8BA89B] mr-3" />
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-[#8BA89B]">Formación</h3>
              </div>
              <ul className="space-y-4">
                <li className="border-l-4 border-[#8BA89B] pl-4 transition-all hover:border-l-8">
                  <p className="font-semibold text-lg">Licenciatura en Fonoaudiología</p>
                  <p className="text-gray-600">Universidad Central del Ecuador, Quito</p>
                  <p className="text-sm text-gray-500">2018-2024</p>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover-lift">
              <div className="flex items-center mb-4">
                <Briefcase className="w-8 h-8 text-[#8BA89B] mr-3" />
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-[#8BA89B]">Experiencia</h3>
              </div>
              <ul className="space-y-4">
                <li className="border-l-4 border-[#8BA89B] pl-4 transition-all hover:border-l-8">
                  <p className="font-semibold text-lg">Fonoaudióloga</p>
                  <p className="text-gray-600">Ismart</p>
                  <p className="text-sm text-gray-500">Mayo 2024 - Actualidad</p>
                </li>
                <li className="border-l-4 border-[#8BA89B] pl-4 transition-all hover:border-l-8">
                  <p className="font-semibold text-lg">Fonoaudióloga</p>
                  <p className="text-gray-600">CERVEAU-Trastornos del Neurodesarrollo</p>
                  <p className="text-sm text-gray-500">Enero 2024 - Mayo 2024</p>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover-lift">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-[#8BA89B] mr-3" />
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-[#8BA89B]">Certificaciones</h3>
              </div>
              <ul className="space-y-4">
                <li className="border-l-4 border-[#8BA89B] pl-4 transition-all hover:border-l-8">
                  <p className="font-semibold text-lg">Terapia Miofuncional Avanzada</p>
                  <p className="text-gray-600">Instituto de Fonoaudiología Aplicada</p>
                  <p className="text-sm text-gray-500">2023</p>
                </li>
                <li className="border-l-4 border-[#8BA89B] pl-4 transition-all hover:border-l-8">
                  <p className="font-semibold text-lg">Integración Sensorial en Niños</p>
                  <p className="text-gray-600">Centro de Estudios del Neurodesarrollo</p>
                  <p className="text-sm text-gray-500">2022</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <WaveShape.Bottom />
    </section>
  )
}
