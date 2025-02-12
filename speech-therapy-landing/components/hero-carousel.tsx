"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    title: "Terapia del Lenguaje Profesional",
    description: "Servicios especializados para mejorar la comunicación y calidad de vida",
    image: "/imagen1.jpg",
  },
  {
    title: "Evaluación y Tratamiento Personalizado",
    description: "Enfoque individualizado para cada paciente",
    image: "/imagen2.jpg",
  },
  {
    title: "Experiencia en Todas las Edades",
    description: "Atención a niños, adolescentes, adultos y adultos mayores",
    image: "/imagen3.jpg",
  },
]

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", () => setCurrentSlide(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 leaf-pattern opacity-10" />

      <div className="relative" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <div className="absolute inset-0">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-cover opacity-20"
                    priority={index === 0}
                  />
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center p-6 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-cormorant font-bold mb-6 tracking-wide">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 font-montserrat tracking-wider">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-primary" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 md:p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-primary" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-primary w-6" : "bg-primary/50"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

