import { Phone, Mail, MapPin, Clock, Timer } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section className="py-16 md:py-24 bg-[#8BA89B] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            ¿Necesitas una <span className="text-white font-bold">consulta</span>?
          </h2>

          <p className="text-white/90 mb-12 max-w-2xl mx-auto">
            Estoy comprometida con el trabajo multidisciplinario y la mejora continua de mis habilidades para ofrecer
            una atención de calidad.
          </p>

          <div className="space-y-4 max-w-md mx-auto mb-12">
            {/* Teléfono */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Phone className="h-5 w-5 text-white mr-4" />
              <span className="text-white">+593 98 765 4321</span>
            </div>

            {/* Email */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Mail className="h-5 w-5 text-white mr-4" />
              <span className="text-white">lisbetveronik@hotmail.com</span>
            </div>

            {/* Ubicación */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <MapPin className="h-5 w-5 text-white mr-4" />
              <span className="text-white">Quito, Ecuador - Consulta privada</span>
            </div>

            {/* Horario */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Clock className="h-5 w-5 text-white mr-4" />
              <span className="text-white">Horario: Lunes a Viernes 9:00 - 18:00</span>
            </div>

            {/* Duración */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center">
              <Timer className="h-5 w-5 text-white mr-4" />
              <span className="text-white">Duración de sesiones: 45-60 minutos</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/agendar"
              className="bg-white text-[#8BA89B] font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Agendar Cita
            </Link>

            <Link
              href="https://wa.me/593987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contactar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

