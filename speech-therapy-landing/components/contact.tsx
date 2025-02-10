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
    // Add form submission logic here
    console.log(formData)
  }

  const mapCenter = {
    lat: -0.3017873, // Replace with actual coordinates
    lng: -78.4634643, // Replace with actual coordinates
  }

  return (
    <>
      <div className="wave-divider bg-white" />
      <section id="contact" className="py-12 md:py-20 bg-[rgb(200,235,220)] relative overflow-hidden">
        <div className="absolute inset-0 leaf-pattern opacity-10" />

        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-8 md:mb-12 gradient-text">
            Contacto
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover-lift">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-colors"
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
                    className="w-full px-3 py-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-colors"
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
                    className="w-full px-3 py-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-colors"
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
                    className="w-full px-3 py-2 text-sm rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring-primary transition-colors"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center space-x-2 text-sm md:text-base"
                >
                  <span>Enviar Mensaje</span>
                  <Send className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </form>
            </div>

            <div className="bg-white p-2 rounded-2xl shadow-lg hover-lift overflow-hidden h-[300px] md:h-auto">
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
      </section>
    </>
  )
}

