"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function Start() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={containerRef} className="pt-24 pb-0 md:py-20 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute -right-32 top-1/3 w-64 h-64 bg-[#8BA89B] rounded-full opacity-20"
        ></motion.div>
        <div className="absolute -left-32 bottom-0 w-64 h-64 bg-[#8BA89B] rounded-full opacity-20"></div>

        {/* Patrón de puntos */}
        <div className="absolute top-20 left-20 w-40 h-40 dots-pattern opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 dots-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contenido - Lado izquierdo */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
                Verónica{" "}
                <span className="text-[#8BA89B] relative">
                  Zoto
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0,5 Q50,0 100,5 T200,5" stroke="#8BA89B" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-600">Fonoaudióloga | Quito, Pichincha, Ecuador</p>
            </motion.div>

            {/* Imagen para móvil - entre título y texto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:hidden relative h-[300px] overflow-hidden rounded-2xl shadow-lg"
            >
              <div className="absolute inset-0 bg-[#8BA89B]/20 rounded-2xl z-10"></div>
              <Image src="/perfil.png" alt="Verónica Zoto - Fonoaudióloga" fill className="object-cover" priority />

              {/* Elementos decorativos sobre la imagen */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#8BA89B] rounded-full opacity-30"></div>
              <div className="absolute -top-5 -left-5 w-10 h-10 border-2 border-[#8BA89B] rounded-full opacity-70"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 leading-relaxed"
            >
              Con una sólida trayectoria en evaluación, diagnóstico e intervención de trastornos del lenguaje, voz,
              habla y comunicación, brindo atención integral y personalizada a niños y adultos. Mi enfoque se basa en
              técnicas terapéuticas adaptadas a las necesidades específicas de cada paciente, trabajando en equipo para
              ofrecer resultados de calidad.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#6A8579] font-medium text-lg leading-relaxed"
            >
              ¡Descubre un cuidado profesional comprometido con tu bienestar comunicativo!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#8BA89B] hover:bg-[#7A9889] text-white font-medium py-2.5 px-5 rounded-lg transition-colors"
              >
                Conoce más
              </motion.button>
            </motion.div>
          </div>

          {/* Imagen - Lado derecho (solo visible en desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block"
          >
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-[#8BA89B]/20 rounded-2xl z-10"></div>
              <Image src="/perfil.png" alt="Verónica Zoto - Fonoaudióloga" fill className="object-cover" priority />

              {/* Elementos decorativos sobre la imagen */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#8BA89B] rounded-full opacity-30"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 border-4 border-[#8BA89B] rounded-full opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divisor ondulado */}
      <div className="relative h-24 mt-12 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-auto"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z"
            fill="#8BA89B"
            fillOpacity="0.2"
          />
          <path
            d="M0,37 C240,74 480,0 720,37 C960,74 1200,0 1440,37 L1440,74 L0,74 Z"
            fill="#8BA89B"
            fillOpacity="0.1"
            transform="translate(0, 10)"
          />
        </svg>
      </div>
    </section>
  )
}
