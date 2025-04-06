"use client"

import { Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Name */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#8BA89B] flex items-center justify-center text-white font-bold">
              V
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Verónica <span className="font-bold">Zoto</span>
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Fonoaudióloga</p>
            </div>
          </Link>

          {/* Navigation for desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/servicios" className="text-sm font-medium hover:text-[#8BA89B] transition-colors">
              Servicios
            </Link>
            <Link href="/experiencia" className="text-sm font-medium hover:text-[#8BA89B] transition-colors">
              Experiencia
            </Link>
            <Link href="/especialidades" className="text-sm font-medium hover:text-[#8BA89B] transition-colors">
              Especialidades
            </Link>
            <Link href="/testimonios" className="text-sm font-medium hover:text-[#8BA89B] transition-colors">
              Testimonios
            </Link>
            <Link href="/galeria" className="text-sm font-medium hover:text-[#8BA89B] transition-colors">
              Galería
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-[#8BA89B] transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Call to Action Button */}
          <Button className="hidden md:flex items-center gap-2 bg-[#8BA89B] hover:bg-[#7A9889] text-white rounded-md px-4 py-2">
            <Phone className="h-4 w-4" />
            <span className="font-medium">Agendar Cita</span>
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Link
                href="/servicios"
                className="text-sm font-medium hover:text-[#8BA89B] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/experiencia"
                className="text-sm font-medium hover:text-[#8BA89B] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Experiencia
              </Link>
              <Link
                href="/especialidades"
                className="text-sm font-medium hover:text-[#8BA89B] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Especialidades
              </Link>
              <Link
                href="/testimonios"
                className="text-sm font-medium hover:text-[#8BA89B] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Testimonios
              </Link>
              <Link
                href="/galeria"
                className="text-sm font-medium hover:text-[#8BA89B] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Galería
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium hover:text-[#8BA89B] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
              <Button
                className="flex items-center justify-center gap-2 bg-[#8BA89B] hover:bg-[#7A9889] text-white rounded-md px-4 py-2 w-full"
                onClick={() => setMenuOpen(false)}
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">Agendar Cita</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

