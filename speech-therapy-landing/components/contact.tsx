"use client"

import { Phone, Mail, MapPin, Clock, Timer } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function Contact() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 50])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-[#8BA89B] relative overflow-hidden">
      {/* Patrones decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 border-[20px] border-white rounded-full"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 border-[15px] border-white rounded-full transform translate-x-1/2"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-32 bg-white rounded-t-full"></div>

        {/* Patrón de onda */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,85.3C840,75,960,85,1080,90.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="white"
            fillOpacity="0.2"
          />
        </svg>
      </div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ opacity, y }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            ¿Necesitas una{" "}
            <span className="text-white font-bold relative">
              consulta
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-white/40 rounded-full"></span>
            </span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Estoy comprometida con el trabajo multidisciplinario y la mejora continua de mis habilidades para ofrecer
            una atención de calidad.
          </motion.p>

          <div className="space-y-4 max-w-md mx-auto mb-12">
            {/* Teléfono */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center transform transition-all duration-300"
            >
              <Phone className="h-5 w-5 text-white mr-4" />
              <span className="text-white">+593 99 523 8223</span>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center transform transition-all duration-300"
            >
              <Mail className="h-5 w-5 text-white mr-4" />
              <span className="text-white">lisbetveronik@hotmail.com</span>
            </motion.div>

            {/* Ubicación */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center transform transition-all duration-300"
            >
              <MapPin className="h-5 w-5 text-white mr-4" />
              <span className="text-white">Quito, Ecuador - Consulta privada</span>
            </motion.div>

            {/* Horario */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center transform transition-all duration-300"
            >
              <Clock className="h-5 w-5 text-white mr-4" />
              <span className="text-white">Horario: Lunes a Viernes 9:00 - 18:00</span>
            </motion.div>

            {/* Duración */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-4 flex items-center transform transition-all duration-300"
            >
              <Timer className="h-5 w-5 text-white mr-4" />
              <span className="text-white">Duración de sesiones: 45-60 minutos</span>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/agendar"
                className="bg-white text-[#8BA89B] font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-block w-full sm:w-auto"
              >
                Agendar Cita
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://wa.me/593995238223"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-white text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors inline-block w-full sm:w-auto"
              >
                Contactar por WhatsApp
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

