"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
  root?: Element | null;
}

/**
 * Hook personalizado para detectar cuando un elemento es visible durante el scroll
 * y aplicar clases de animación.
 */
export function useScrollObserver<T extends HTMLElement>(
  options: ScrollObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", once = true, root = null } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * Función auxiliar para aplicar clases de animación basadas en la visibilidad
 */
export function getScrollAnimationClass(baseClass: string, isVisible: boolean): string {
  return `${baseClass}${isVisible ? " visible" : ""}`;
}