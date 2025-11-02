/**
 * SmoothScroll Component
 * 
 * Wrapper that enables smooth scrolling behavior for the entire page.
 * Provides buttery-smooth scroll experience similar to modern premium websites.
 * 
 * Features:
 * - Eased scroll animations
 * - Customizable scroll speed
 * - Mobile-optimized (disabled on touch devices for better performance)
 * - Respects reduced motion preferences
 */

import { useEffect, useRef, ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
  speed?: number;
  enabled?: boolean;
}

export default function SmoothScroll({
  children,
  speed = 0.08,
  enabled = true,
}: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    // Disable smooth scroll on mobile devices for better performance
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;

    // Set up the scroll container
    document.body.style.height = `${container.scrollHeight}px`;

    const smoothScroll = () => {
      targetRef.current = window.scrollY;
      scrollRef.current += (targetRef.current - scrollRef.current) * speed;

      container.style.transform = `translateY(-${scrollRef.current}px)`;

      rafRef.current = requestAnimationFrame(smoothScroll);
    };

    rafRef.current = requestAnimationFrame(smoothScroll);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.body.style.height = "";
    };
  }, [enabled, speed]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        overflow: "hidden",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
