export function About() {
  return (
    <section className="py-16 md:py-24 bg-[#E5EDE9] relative overflow-hidden">
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

      {/* Patrón de hojas */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute h-24 w-24 transform rotate-45 left-1/4 top-1/4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
        <svg
          className="absolute h-16 w-16 transform -rotate-12 right-1/3 bottom-1/3"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#8BA89B]">Sobre Mí</h2>
          <p className="text-base md:text-lg mb-8 text-gray-600 leading-relaxed font-montserrat">
            Fonoaudióloga con experiencia en el área de Lenguaje, Audición, Deglución, Terapia Miofuncional,
            Psicomotricidad e Integración sensorial, Estimulación oportuna con pacientes pediátricos, adolescentes,
            adultos y adultos mayores.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover-lift">
              <h3 className="text-xl md:text-2xl font-playfair font-bold mb-6 text-[#8BA89B]">Formación</h3>
              <ul className="space-y-6">
                <li className="border-l-4 border-[#8BA89B] pl-4 transition-all hover:border-l-8">
                  <p className="font-semibold text-lg">Licenciatura en Fonoaudiología</p>
                  <p className="text-gray-600">Universidad Central del Ecuador, Quito</p>
                  <p className="text-sm text-gray-500">2018-2024</p>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg hover-lift">
              <h3 className="text-xl md:text-2xl font-playfair font-bold mb-6 text-[#8BA89B]">Experiencia</h3>
              <ul className="space-y-6">
                <li className="border-l-4 border-[#8BA89B] pl-4 transition-all hover:border-l-8">
                  <p className="font-semibold text-lg">Fonoaudióloga</p>
                  <p className="text-gray-600">Ismart</p>
                  <p className="text-sm text-gray-500">Mayo 2024 - Actualidad</p>
                </li>
                <li className="border-l-4 border-[#8BA89B] pl-4 transition-all hover:border-l-8">
                  <p className="font-semibold text-lg">Fonoaudióloga</p>
                  <p className="text-gray-600">CERVEAU-Trastornos del Neurodesarrollo</p>
                  <p className="text-sm text-gray-500">Enero 2024 - Mayo 2024</p>
                </li>
              </ul>
            </div>
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

