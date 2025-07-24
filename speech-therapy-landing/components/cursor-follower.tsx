"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Crear springs para movimiento suave
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Ocultar el cursor al inicio en dispositivos móviles
    const isMobile = window.innerWidth <= 768;
    setIsVisible(!isMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Centrar el cursor
      cursorY.set(e.clientY - 16); // Centrar el cursor
    };

    const handleMouseEnter = () => {
      if (!isMobile) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#8BA89B]/30 mix-blend-difference pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.6 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    />
  );
}