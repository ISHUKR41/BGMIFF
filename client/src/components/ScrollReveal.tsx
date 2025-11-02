/**
 * ScrollReveal Component
 * 
 * Wrapper component that reveals children with animations when they scroll into view.
 * Uses Intersection Observer API for performance.
 * 
 * Features:
 * - Multiple animation directions (bottom, top, left, right, scale, rotate)
 * - Customizable delay for staggered animations
 * - Respects user's reduced motion preferences
 * - Fully responsive
 */

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "bottom" | "top" | "left" | "right" | "scale" | "rotate";
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "bottom",
  delay = 0,
  className,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, once]);

  const directionClass = {
    bottom: "reveal-bottom",
    top: "reveal-top",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
    rotate: "reveal-rotate",
  }[direction];

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(Math.ceil(delay * 10), 6)}` : "";

  return (
    <div
      ref={ref}
      className={cn(
        directionClass,
        delayClass,
        className
      )}
      style={delay > 0.6 ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
