import { WaveShape } from "./wave-shapes"

export function About() {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden"> {/* Fondo en secondary */}
      <WaveShape.Top />
      <WaveShape.LeafPattern />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">Sobre Mí</h2> {/* Título en primary */}
          <p className="text-base md:text-lg mb-8 text-gray-600 leading-relaxed font-montserrat">
            Fonoaudióloga con experiencia en el área de Lenguaje, Audición, Deglución, Terapia Miofuncional,
            Psicomotricidad e Integración sensorial, Estimulación oportuna con pacientes pediátricos, adolescentes,
            adultos y adultos mayores.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-md hover-lift hover:shadow-lg"> {/* Sombra más sutil y hover más pronunciado */}
              <h3 className="text-xl md:text-2xl font-playfair font-bold mb-6 text-primary">Formación</h3> {/* Título en primary */}
              <ul className="space-y-6">
                <li className="border-l-4 border-primary pl-4 transition-all hover:border-l-8 hover:border-accent"> {/* Bordes y hovers ajustados */}
                  <p className="font-semibold text-lg">Licenciatura en Fonoaudiología</p>
                  <p className="text-gray-600">Universidad Central del Ecuador, Quito</p>
                  <p className="text-sm text-gray-500">2018-2024</p>
                </li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-md hover-lift hover:shadow-lg"> {/* Sombra más sutil y hover más pronunciado */}
              <h3 className="text-xl md:text-2xl font-playfair font-bold mb-6 text-primary">Experiencia</h3> {/* Título en primary */}
              <ul className="space-y-6">
                <li className="border-l-4 border-primary pl-4 transition-all hover:border-l-8 hover:border-accent"> {/* Bordes y hovers ajustados */}
                  <p className="font-semibold text-lg">Fonoaudióloga</p>
                  <p className="text-gray-600">Ismart</p>
                  <p className="text-sm text-gray-500">Mayo 2024 - Actualidad</p>
                </li>
                <li className="border-l-4 border-primary pl-4 transition-all hover:border-l-8 hover:border-accent"> {/* Bordes y hovers ajustados */}
                  <p className="font-semibold text-lg">Fonoaudióloga</p>
                  <p className="text-gray-600">CERVEAU-Trastornos del Neurodesarrollo</p>
                  <p className="text-sm text-gray-500">Enero 2024 - Mayo 2024</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <WaveShape.Bottom />
    </section>
  );
}
