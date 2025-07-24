"use client";

import { ReactNode } from "react";
import { useScrollObserver, getScrollAnimationClass } from "@/hooks/use-scroll-observer";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function ScrollAnimationWrapper({
  children,
  className = "",
  animationClass = "fade-in-scroll",
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    once,
  });

  return (
    <div
      ref={ref}
      className={`${className} ${getScrollAnimationClass(animationClass, isVisible)}`}
    >
      {children}
    </div>
  );
}