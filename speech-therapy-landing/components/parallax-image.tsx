"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  parallaxFactor?: number;
  priority?: boolean;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  width = 500,
  height = 500,
  parallaxFactor = 0.2,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calcular el desplazamiento de la imagen basado en el factor de parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, height * parallaxFactor]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}