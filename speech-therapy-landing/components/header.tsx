"use client"

import { MessageCircle, Mail, Calendar, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const whatsappNumber = "+593995238223"
  const defaultMessage = "¡Hola! Solicito más información"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
  const emailAddress = "lisbetveronik@hotmail.com"

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

          {/* Navigation for desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-primary transition-all group"
              >
                <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                </div>
                <span className="font-medium">Tienes alguna pregunta? Escribeme</span>
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${emailAddress}`}
                className="flex items-center space-x-2 text-sm hover:text-primary transition-all group"
              >
                <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-medium">Enviar Email</span>
              </a>
            </div>

            {/* Call to Action Button */}
            <Button
              variant="outline"
              className="bg-gradient-to-r from-primary/90 to-primary text-white font-semibold 
                shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 
                border-none px-6 py-2 rounded-full"
              onClick={() => {
                setMenuOpen(false)
                window.location.href = "#contact"
              }}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Cita
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 z-50 relative" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute right-4 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle className="inline-block mr-2 h-4 w-4 text-green-600" />
              WhatsApp
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Mail className="inline-block mr-2 h-4 w-4 text-blue-600" />
              Email
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
              onClick={() => {
                setMenuOpen(false)
                window.location.href = "#contact"
              }}
            >
              <Calendar className="inline-block mr-2 h-4 w-4 text-primary" />
              Agendar Cita
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

