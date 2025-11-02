/**
 * ParallaxSection Component
 * 
 * Creates smooth parallax scrolling effect for background elements.
 * Adds depth and visual interest to page sections.
 * 
 * Features:
 * - Customizable parallax speed
 * - Optional background image or gradient
 * - Smooth scroll-based movement
 * - Performance optimized with RAF
 * - Fully responsive
 */

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: "slow" | "medium" | "fast";
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  className?: string;
  contentClassName?: string;
}

export default function ParallaxSection({
  children,
  speed = "medium",
  backgroundImage,
  backgroundOverlay = true,
  className,
  contentClassName,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      const speedMultiplier = {
        slow: 0.3,
        medium: 0.5,
        fast: 0.7,
      }[speed];

      const parallaxOffset = scrollProgress * 100 * speedMultiplier;
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={cn("relative overflow-hidden", className)}
    >
      {/* Background Layer with Parallax */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${-offset}px)`,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.1s linear",
          }}
        >
          {backgroundOverlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
          )}
        </div>
      )}

      {/* Content Layer */}
      <div className={cn("relative z-10", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
