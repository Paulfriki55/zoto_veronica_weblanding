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
    <section ref={containerRef} className="pt-24 pb-16 md:py-24 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute -right-32 top-1/3 w-64 h-64 bg-[#F5F7F6] rounded-full opacity-50"
        ></motion.div>
        <div className="absolute -left-32 bottom-0 w-64 h-64 bg-[#F5F7F6] rounded-full opacity-30"></div>

        {/* Patrón de puntos */}
        <div className="absolute top-20 left-20 w-40 h-40 dots-pattern opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 dots-pattern opacity-10"></div>

        {/* Patrón de onda */}
        <div className="absolute bottom-0 left-0 w-full h-20 wave-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contenido - Lado izquierdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-[#F5F7F6] rounded-full text-sm text-[#8BA89B] mb-2">
              Fonoaudióloga Profesional
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif">
              Verónica{" "}
              <span className="text-[#8BA89B] relative">
                Zoto
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="#8BA89B" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 leading-relaxed"
            >
              Soy una fonoaudióloga con amplia experiencia en la evaluación,
              diagnóstico e intervención de trastornos del lenguaje, voz, habla y
              comunicación en diversas poblaciones. Mi carrera se ha enfocado
              en proporcionar atención integral y personalizada, tanto en niños
              como en adultos mayores, adaptando mis técnicas terapéuticas a
              las necesidades específicas de cada paciente. Estoy comprometida
              con el trabajo multidisciplinario y la mejora continua de mis
              habilidades para ofrecer una atención de calidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#8BA89B] hover:bg-[#7A9889] text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Conoce más
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Imagen - Lado derecho */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
              {/* Aquí iría la imagen de la profesional */}
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Verónica Zoto - Fonoaudióloga"
                fill
                className="object-cover"
                priority
              />
              
              {/* Elementos decorativos sobre la imagen */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#F5F7F6] rounded-full opacity-50"></div>
              <div className="absolute -top-5 -left-5 w-20 h-20 border-4 border-[#8BA89B] rounded-full opacity-70"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
