"use client"

import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Start } from "@/components/start"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Lenis from "lenis"

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)

  // Inicializar Lenis para scroll suave
  useEffect(() => {
    // Inicializar la instancia de Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    // Función para actualizar Lenis en cada frame
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      // Limpiar la instancia de Lenis al desmontar
      lenisRef.current?.destroy()
    }
  }, [])

  // Inicializar el efecto de parallax al scrollear
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallaxElements = document.querySelectorAll(".parallax")

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5"
        const yPos = scrollY * Number.parseFloat(speed)
        element.setAttribute("style", `transform: translateY(${yPos}px)`)
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      <section id="hero">
        <HeroCarousel />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="start">
        <Start />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </motion.main>
  )
}

