"use client"

import { useState } from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { Send } from "lucide-react"
import type React from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  const mapCenter = {
    lat: -0.3017873,
    lng: -78.4634643,
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#E5EDE9] relative overflow-hidden">
      {/* Patrón superior */}
      <svg
        className="absolute top-0 left-0 w-full transform rotate-180"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />
      </svg>

      {/* Patrón de hojas y curvas */}
      <div className="absolute inset-0">
        <svg
          className="absolute h-32 w-32 text-white/10 transform rotate-45 left-1/4 top-1/4 floating"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        <svg
          className="absolute h-24 w-24 text-white/10 transform -rotate-12 right-1/3 bottom-1/3 floating"
          style={{ animationDelay: "-2s" }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </div>

      {/* Patrón de curvas decorativas */}
      <svg
        className="absolute right-0 top-1/4 h-64 w-64 text-white/10 transform rotate-90"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M25,50 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0"
          className="floating"
          style={{ animationDelay: "-3s" }}
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-8 md:mb-12 text-[#8BA89B]">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover-lift">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-[#8BA89B] focus:ring-[#8BA89B] transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-[#8BA89B] focus:ring-[#8BA89B] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-[#8BA89B] focus:ring-[#8BA89B] transition-colors"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-[#8BA89B] focus:ring-[#8BA89B] transition-colors"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8BA89B] text-white py-2 px-4 rounded-lg hover:bg-[#8BA89B]/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center space-x-2 text-sm md:text-base"
              >
                <span>Enviar Mensaje</span>
                <Send className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </form>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg hover-lift overflow-hidden h-[300px] md:h-auto">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "1rem" }}
                center={mapCenter}
                zoom={15}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>

      {/* Patrón inferior */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0L60 10C120 20 240 40 360 50C480 60 600 60 720 55C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
          fill="#FFFFFF"
          fillOpacity="0.3"
        />
      </svg>
    </section>
  )
}

