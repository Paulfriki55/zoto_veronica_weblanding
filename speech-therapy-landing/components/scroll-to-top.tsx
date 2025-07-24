"use client";

import { useEffect, useState } from "react";
import { useLenis } from "@/hooks/use-lenis";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el scroll baja más de 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      // Usar Lenis para hacer scroll suave hacia arriba
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      // Fallback si Lenis no está disponible
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}