"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Divisor ondulado superior */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg
          className="absolute top-0 w-full h-auto"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,0 L1440,0 L1440,37 C1200,0 960,74 720,37 C480,0 240,74 0,37 Z" fill="#8BA89B" fillOpacity="0.1" />
        </svg>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#8BA89B] rounded-full opacity-20"
        ></motion.div>
        <div className="absolute -right-32 bottom-0 w-64 h-64 bg-[#8BA89B] rounded-full opacity-20"></div>

        {/* Patrón de puntos */}
        <div className="absolute top-20 right-20 w-40 h-40 dots-pattern opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 dots-pattern opacity-10"></div>

        {/* Patrón de círculos */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-[#8BA89B] rounded-full opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-4 border-[#8BA89B] rounded-full opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#8BA89B]/20 rounded-full text-sm text-[#8BA89B] mb-4">
            Especialidades
          </div>

          <h2 className="text-4xl md:text-5xl font-serif mb-4">
            Áreas de{" "}
            <span className="text-[#8BA89B] relative">
              especialización
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="#8BA89B" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Me especializo en diversas áreas de la fonoaudiología para ofrecer un servicio completo y personalizado.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Fonoaudiología Pediátrica */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2">Fonoaudiología Pediátrica</h3>
            <p className="text-sm text-gray-500 mb-6">Especializada en niños de 2 a 7 años</p>

            <ul className="space-y-4 mb-8">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Evaluación del desarrollo del lenguaje</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Trastornos del habla infantil</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Dificultades de aprendizaje</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">TDAH y trastornos del aprendizaje</span>
              </motion.li>
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/consulta"
                className="block text-center py-2 px-4 bg-[#8BA89B]/20 text-[#8BA89B] font-medium rounded-md hover:bg-[#8BA89B]/30 transition-colors"
              >
                Consultar
              </Link>
            </motion.div>
          </motion.div>

          {/* Neurorehabilitación */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative transition-all duration-300"
          >
            <div className="absolute top-0 right-0 left-0">
              <div className="bg-[#8BA89B] text-white text-sm py-1 px-4 rounded-t-xl w-32">Principal</div>
            </div>

            <h3 className="text-xl font-bold mb-2 mt-6">Neurorehabilitación</h3>
            <p className="text-sm text-gray-500 mb-6">Enfoque en condiciones neurológicas</p>

            <ul className="space-y-4 mb-8">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Afasia y trastornos del lenguaje</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Disartria y apraxia</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Rehabilitación post-ACV</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Trastornos cognitivo-comunicativos</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Terapia de deglución</span>
              </motion.li>
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/consulta"
                className="block text-center py-2 px-4 bg-[#8BA89B] text-white font-medium rounded-md hover:bg-[#7A9889] transition-colors"
              >
                Consultar
              </Link>
            </motion.div>
          </motion.div>

          {/* Audiología */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-2">Audiología</h3>
            <p className="text-sm text-gray-500 mb-6">Evaluación y tratamiento auditivo</p>

            <ul className="space-y-4 mb-8">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Evaluación auditiva completa</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Adaptación de audífonos</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Rehabilitación auditiva</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-start"
              >
                <div className="bg-[#8BA89B]/20 p-1 rounded-full mr-2 mt-0.5">
                  <Check className="h-4 w-4 text-[#8BA89B]" />
                </div>
                <span className="text-gray-700">Terapia para acúfenos (tinnitus)</span>
              </motion.li>
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/consulta"
                className="block text-center py-2 px-4 bg-[#8BA89B]/20 text-[#8BA89B] font-medium rounded-md hover:bg-[#8BA89B]/30 transition-colors"
              >
                Consultar
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Divisor ondulado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
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
        </svg>
      </div>
    </section>
  )
}

