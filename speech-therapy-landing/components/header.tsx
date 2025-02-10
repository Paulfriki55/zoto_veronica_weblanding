"use client"

import { Phone, Mail, MapPin, Calendar, Menu, X } from "lucide-react"
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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold gradient-text hover:opacity-80 transition-opacity">
            Verónica Zoto
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>

          {/* Navigation */}
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
              {/* Contact Info */}
              <div className="flex items-center space-x-2 text-sm hover-lift group">
                <div className="p-2 bg-secondary rounded-full group-hover:bg-primary/10 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <a href="tel:0995238223" className="hover:text-primary transition-colors font-montserrat">
                  099 523 8223
                </a>
              </div>

              <div className="flex items-center space-x-2 text-sm hover-lift group">
                <div className="p-2 bg-secondary rounded-full group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <a
                  href="mailto:lisbetveronik@hotmail.com"
                  className="hover:text-primary transition-colors font-montserrat"
                >
                  lisbetveronik@hotmail.com
                </a>
              </div>

              <div className="flex items-center space-x-2 text-sm hover-lift group">
                <div className="p-2 bg-secondary rounded-full group-hover:bg-primary/10 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-montserrat">Wilson Cueva y Héctor Pilco, Edén del Valle</span>
              </div>
            </div>

            {/* Call to Action Button */}
            <Button
              variant="outline"
              className="mt-4 md:mt-0 md:ml-4 bg-secondary hover:bg-secondary/90 text-primary font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20"
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

