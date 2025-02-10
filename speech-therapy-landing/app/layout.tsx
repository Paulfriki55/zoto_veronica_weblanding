import type { Metadata } from "next"
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import "./globals.css"
import type React from "react"

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap'
})

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Verónica Zoto - Fonoaudióloga",
  description: "Servicios profesionales de fonoaudiología",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}