/**
 * SmoothScrollContainer Component
 * Provides smooth scrolling experience similar to Lenis library
 * Inspired by modern websites with buttery smooth scrolling
 * 
 * Features:
 * - Smooth scroll physics
 * - Easing for natural feel
 * - Works with scroll-triggered animations
 * - Customizable smoothness
 * 
 * Note: This is a simplified version. For production, consider using
 * the Lenis library for more advanced smooth scrolling.
 */

import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SmoothScrollContainerProps {
  /** Content to wrap */
  children: ReactNode;
  /** CSS class name for additional styling */
  className?: string;
  /** Smoothness factor (0-1, default: 0.1) - lower is smoother */
  smoothness?: number;
  /** Enable smooth scroll (default: true) */
  enabled?: boolean;
}

export default function SmoothScrollContainer({
  children,
  className,
  smoothness = 0.1,
  enabled = true,
}: SmoothScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const targetScrollRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!enabled) return;

    const updateScroll = () => {
      // Ease towards target scroll position
      const diff = targetScrollRef.current - scrollPositionRef.current;
      const delta = diff * smoothness;
      
      scrollPositionRef.current += delta;
      
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(-${scrollPositionRef.current}px)`;
      }

      // Continue animation if there's still movement
      if (Math.abs(diff) > 0.5) {
        animationFrameRef.current = requestAnimationFrame(updateScroll);
      }
    };

    const handleScroll = () => {
      targetScrollRef.current = window.scrollY;
      
      // Start animation if not already running
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled, smoothness]);

  if (!enabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        ref={containerRef}
        className={cn("will-change-transform", className)}
      >
        {children}
      </div>
    </div>
  );
}
