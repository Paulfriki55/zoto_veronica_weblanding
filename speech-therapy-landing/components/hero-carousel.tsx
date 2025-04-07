"use client"

import { useCallback, useEffect, useState, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { motion } from "framer-motion"

const slides = [
  {
    title: "Terapia del Lenguaje Profesional",
    description: "Servicios especializados para mejorar la comunicación y calidad de vida",
    image: "/imagen1.jpg",
    pattern: "dots-pattern",
  },
  {
    title: "Evaluación y Tratamiento Personalizado",
    description: "Enfoque individualizado para cada paciente",
    image: "/imagen2.jpg",
    pattern: "wave-pattern",
  },
  {
    title: "Experiencia en Todas las Edades",
    description: "Atención a niños, adolescentes, adultos y adultos mayores",
    image: "/imagen3.jpg",
    pattern: "circle-pattern",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentSlide, setCurrentSlide] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentSlide(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on("select", onSelect)
    onSelect()

    // Set up auto-play
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext()
    }, 6000)

    // Handle parallax effect on scroll
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup interval on component unmount
    return () => {
      clearInterval(autoplayInterval)
      window.removeEventListener("scroll", handleScroll)
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative overflow-hidden bg-[#8BA89B]/10">
      {/* Divisor ondulado superior */}
      <div className="absolute top-0 left-0 right-0 h-20 z-10 overflow-hidden">
        <svg
          className="absolute top-0 w-full h-auto"
          viewBox="0 0 1440 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,37 C1200,0 960,74 720,37 C480,0 240,74 0,37 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="absolute inset-0 leaf-pattern opacity-10" />

      <div className="relative pt-20" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                  <div ref={parallaxRef} className={`absolute inset-0 ${slide.pattern} opacity-5 z-10`} />
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-20 transition-transform duration-1000 ease-out"
                    priority={index === 0}
                  />
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center p-6 max-w-4xl mx-auto">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 30 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-wide"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 30 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      className="text-lg md:text-xl text-gray-700 tracking-wider"
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 z-20"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-[#8BA89B]" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 1)" }}
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 z-20"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-[#8BA89B]" />
      </motion.button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentSlide === index ? "bg-[#8BA89B] w-6" : "bg-[#8BA89B]/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
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
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
