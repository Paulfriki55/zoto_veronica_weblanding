"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-white border-t border-gray-100 py-8 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-32 top-0 w-64 h-64 bg-[#F5F7F6] rounded-full opacity-30"></div>
        <div className="absolute -right-32 bottom-0 w-64 h-64 bg-[#F5F7F6] rounded-full opacity-30"></div>

        {/* Patrón de puntos */}
        <div className="absolute top-10 right-10 w-20 h-20 dots-pattern opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-20 h-20 dots-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo y copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">
              Verónica <span className="font-bold">Zoto</span>
            </h3>
            <p className="text-sm text-gray-500">Fonoaudióloga Profesional</p>
          </div>

          {/* Redes sociales */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#F5F7F6] flex items-center justify-center text-[#8BA89B] hover:bg-[#8BA89B] hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; 2025 Developed by Paulfriki55 Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

