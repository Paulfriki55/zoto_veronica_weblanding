"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

// Hook personalizado para acceder a la instancia de Lenis desde cualquier componente
export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Acceder a la instancia global de Lenis
    const lenisInstance = window.__lenis as Lenis | undefined;
    
    if (lenisInstance) {
      setLenis(lenisInstance);
    }

    return () => {
      setLenis(null);
    };
  }, []);

  return lenis;
}

// Declaración para TypeScript
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}