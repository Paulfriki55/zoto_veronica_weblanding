"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 50,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Determinar las propiedades de animación según la dirección
  const getDirectionAnimation = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
        return {};
      default:
        return { y: distance };
    }
  };

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({
        opacity: 1,
        ...getDirectionAnimation(),
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1], // Curva de easing suave
        },
      });
      if (once) {
        setHasAnimated(true);
      }
    }
    if (!inView && !once && hasAnimated) {
      controls.start({
        opacity: 0,
        ...getDirectionAnimation(),
      });
      setHasAnimated(false);
    }
  }, [inView, controls, once, hasAnimated, delay, duration, direction, distance]);

  const initialAnimation = {
    opacity: 0,
    ...(direction === "up" ? { y: distance } :
       direction === "down" ? { y: -distance } :
       direction === "left" ? { x: distance } :
       direction === "right" ? { x: -distance } : {}),
  };

  return (
    <motion.div
      ref={ref}
      initial={initialAnimation}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}