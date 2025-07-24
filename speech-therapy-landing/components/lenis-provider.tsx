"use client";

import { ReactNode, useEffect, useState } from "react";
import Lenis from "lenis";

// Declaración para TypeScript
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
        duration: 2.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
        infinite: false,
        lerp: 0.05,
      });

    // Guardar la instancia en window para acceder desde cualquier componente
    window.__lenis = lenisInstance;

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}