/**
 * ParallaxStack Component
 * Multi-layer parallax effect for depth and visual interest
 * Inspired by Stripe, Cursor, and modern landing pages
 * 
 * Features:
 * - Multiple layers with different scroll speeds
 * - Smooth scroll-based animations
 * - Customizable speed multipliers
 * - Works with any content
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxStackProps {
  /** Content for the foreground layer (fastest moving) */
  foreground?: ReactNode;
  /** Content for the middle layer */
  middle?: ReactNode;
  /** Content for the background layer (slowest moving) */
  background?: ReactNode;
  /** CSS class name for additional styling */
  className?: string;
  /** Height of the parallax container */
  height?: string;
  /** Speed multiplier for foreground (default: 1) */
  foregroundSpeed?: number;
  /** Speed multiplier for middle (default: 0.5) */
  middleSpeed?: number;
  /** Speed multiplier for background (default: 0.2) */
  backgroundSpeed?: number;
}

export default function ParallaxStack({
  foreground,
  middle,
  background,
  className,
  height = "600px",
  foregroundSpeed = 1,
  middleSpeed = 0.5,
  backgroundSpeed = 0.2,
}: ParallaxStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through this element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to parallax movement
  // Negative values move elements up as you scroll down
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100 * foregroundSpeed]);
  const middleY = useTransform(scrollYProgress, [0, 1], [0, -100 * middleSpeed]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100 * backgroundSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={{ height }}
    >
      {/* Background Layer - slowest moving */}
      {background && (
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          {background}
        </motion.div>
      )}

      {/* Middle Layer - medium speed */}
      {middle && (
        <motion.div
          style={{ y: middleY }}
          className="absolute inset-0 z-10"
        >
          {middle}
        </motion.div>
      )}

      {/* Foreground Layer - fastest moving */}
      {foreground && (
        <motion.div
          style={{ y: foregroundY }}
          className="absolute inset-0 z-20"
        >
          {foreground}
        </motion.div>
      )}
    </div>
  );
}
