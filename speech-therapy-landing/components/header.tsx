"use client"

import { Phone, Mail, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-playfair font-bold gradient-text hover:opacity-80 transition-opacity">
            Verónica Zoto
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav
            className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <div className="flex items-center space-x-2 text-sm hover-lift">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:0995238223" className="hover:text-primary transition-colors">
                  099 523 8223
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm hover-lift">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:lisbetveronik@hotmail.com" className="hover:text-primary transition-colors">
                  lisbetveronik@hotmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm hover-lift">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Wilson Cueva y Héctor Pilco, Edén del Valle</span>
              </div>
            </div>

            <Button
              variant="default"
              className="mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => {
                setMenuOpen(false)
                window.location.href = "#contact"
              }}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Cita
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

