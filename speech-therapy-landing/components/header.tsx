"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#about" },
    { name: "Especialidades", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ]

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-2 group">
            <div className="relative h-20 w-20">
              <Image src="/logo.svg" alt="Logo" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Verónica <span className="font-bold">Zoto</span>
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Fonoaudióloga</p>
            </div>
          </Link>

          {/* Navegación para desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={item.href} className="text-sm font-medium relative group">
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8BA89B] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Botón de llamada a la acción */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="hidden md:flex items-center gap-2 bg-[#8BA89B] hover:bg-[#7A9889] text-white rounded-md px-4 py-2 shadow-md">
              <Phone className="h-4 w-4" />
              <span className="font-medium">Agendar Cita</span>
            </Button>
          </motion.div>

          {/* Botón del menú móvil */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
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
          </motion.button>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t overflow-hidden"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-sm font-medium hover:text-[#8BA89B] transition-colors block py-2"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="flex items-center justify-center gap-2 bg-[#8BA89B] hover:bg-[#7A9889] text-white rounded-md px-4 py-2 w-full shadow-md"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">Agendar Cita</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
