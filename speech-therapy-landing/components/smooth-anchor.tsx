"use client";

import { ReactNode } from "react";
import { useLenis } from "@/hooks/use-lenis";

interface SmoothAnchorProps {
  href: string;
  children: ReactNode;
  className?: string;
  duration?: number;
  offset?: number;
  onClick?: () => void;
}

export function SmoothAnchor({
  href,
  children,
  className = "",
  duration = 1.2,
  offset = 0,
  onClick,
}: SmoothAnchorProps) {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Extraer el ID de la sección del href
    const targetId = href.replace(/^#/, "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement && lenis) {
      // Usar Lenis para hacer scroll suave
      lenis.scrollTo(targetElement, {
        offset,
        duration,
        lock: true,
      });
    } else if (targetElement) {
      // Fallback si Lenis no está disponible
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    
    // Ejecutar onClick si existe
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}