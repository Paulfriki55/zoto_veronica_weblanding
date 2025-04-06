import { Check } from 'lucide-react'
import Link from "next/link"

export function Skills() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#F5F7F6] rounded-full opacity-50"></div>
        <div className="absolute -right-32 bottom-0 w-64 h-64 bg-[#F5F7F6] rounded-full opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#F5F7F6] rounded-full text-sm text-[#8BA89B] mb-4">
            Especialidades
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Áreas de <span className="text-[#8BA89B]">especialización</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Me especializo en diversas áreas de la fonoaudiología para ofrecer un servicio
            completo y personalizado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Fonoaudiología Pediátrica */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Fonoaudiología Pediátrica</h3>
            <p className="text-sm text-gray-500 mb-6">Especializada en niños de 2 a 7 años</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Evaluación del desarrollo del lenguaje</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Trastornos del habla infantil</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Dificultades de aprendizaje</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">TDAH y trastornos del aprendizaje</span>
              </li>
            </ul>
            
            <Link 
              href="/consulta"
              className="block text-center py-2 px-4 bg-[#F5F7F6] text-[#8BA89B] font-medium rounded-md hover:bg-[#E5EDE9] transition-colors"
            >
              Consultar
            </Link>
          </div>
          
          {/* Neurorehabilitación */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
            <div className="absolute top-0 right-0 left-0">
              <div className="bg-[#8BA89B] text-white text-sm py-1 px-4 rounded-t-xl w-32">
                Principal
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 mt-6">Neurorehabilitación</h3>
            <p className="text-sm text-gray-500 mb-6">Enfoque en condiciones neurológicas</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Afasia y trastornos del lenguaje</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Disartria y apraxia</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Rehabilitación post-ACV</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Trastornos cognitivo-comunicativos</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Terapia de deglución</span>
              </li>
            </ul>
            
            <Link 
              href="/consulta"
              className="block text-center py-2 px-4 bg-[#8BA89B] text-white font-medium rounded-md hover:bg-[#7A9889] transition-colors"
            >
              Consultar
            </Link>
          </div>
          
          {/* Audiología */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Audiología</h3>
            <p className="text-sm text-gray-500 mb-6">Evaluación y tratamiento auditivo</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Evaluación auditiva completa</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Adaptación de audífonos</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Rehabilitación auditiva</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#8BA89B] mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Terapia para acúfenos (tinnitus)</span>
              </li>
            </ul>
            
            <Link 
              href="/consulta"
              className="block text-center py-2 px-4 bg-[#F5F7F6] text-[#8BA89B] font-medium rounded-md hover:bg-[#E5EDE9] transition-colors"
            >
              Consultar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
