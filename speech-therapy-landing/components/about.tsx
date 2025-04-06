"use client"

import { ArrowRight, MessageSquare, Ear, Brain } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function About() {
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
    <section ref={containerRef} className="py-16 md:py-24 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5F7F6] rounded-full opacity-50"
        ></motion.div>

        {/* Patrón de puntos */}
        <div className="absolute top-20 right-20 w-40 h-40 dots-pattern opacity-10"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 dots-pattern opacity-10"></div>

        {/* Patrón de onda */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,85.3C840,75,960,85,1080,90.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="#F5F7F6"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block px-3 py-1 bg-[#F5F7F6] rounded-full text-sm text-[#8BA89B] mb-4">Servicios</div>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Servicios{" "}
            <span className="text-[#8BA89B] relative">
              profesionales
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="#8BA89B" strokeWidth="2" fill="none" />
              </svg>
            </span>{" "}
            de
            <br />
            fonoaudiología
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            Ofrezco atención integral y personalizada, adaptando mis técnicas terapéuticas a<br />
            las necesidades específicas de cada paciente.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {/* Terapia del Lenguaje */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-16 h-16 rounded-full bg-[#F5F7F6] flex items-center justify-center"
              >
                <MessageSquare className="h-6 w-6 text-[#8BA89B]" />
              </motion.div>
            </div>

            <h3 className="text-xl font-bold text-center mb-4">Terapia del Lenguaje</h3>

            <p className="text-gray-600 text-center mb-6">
              Evaluación y tratamiento de trastornos del lenguaje en niños y adultos.
            </p>

            <div className="text-center">
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="/servicios/lenguaje"
                  className="inline-flex items-center text-[#8BA89B] hover:text-[#7A9889] font-medium text-sm group"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Audiología */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-16 h-16 rounded-full bg-[#F5F7F6] flex items-center justify-center"
              >
                <Ear className="h-6 w-6 text-[#8BA89B]" />
              </motion.div>
            </div>

            <h3 className="text-xl font-bold text-center mb-4">Audiología</h3>

            <p className="text-gray-600 text-center mb-6">
              Evaluación auditiva y manejo de problemas relacionados con la audición.
            </p>

            <div className="text-center">
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="/servicios/audiologia"
                  className="inline-flex items-center text-[#8BA89B] hover:text-[#7A9889] font-medium text-sm group"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Neurorehabilitación */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
            className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-16 h-16 rounded-full bg-[#F5F7F6] flex items-center justify-center"
              >
                <Brain className="h-6 w-6 text-[#8BA89B]" />
              </motion.div>
            </div>

            <h3 className="text-xl font-bold text-center mb-4">Neurorehabilitación</h3>

            <p className="text-gray-600 text-center mb-6">
              Terapia para pacientes con condiciones neurológicas que afectan el habla y la comunicación.
            </p>

            <div className="text-center">
              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Link
                  href="/servicios/neurorehabilitacion"
                  className="inline-flex items-center text-[#8BA89B] hover:text-[#7A9889] font-medium text-sm group"
                >
                  Más información
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

