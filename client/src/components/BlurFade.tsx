/**
 * BlurFade Component
 * Animated reveal effect that combines blur and fade
 * Inspired by modern websites with premium animations
 * 
 * Features:
 * - Blur effect that clears as element appears
 * - Smooth fade in animation
 * - Scroll-triggered reveal
 * - Customizable delay and duration
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlurFadeProps {
  /** Content to animate */
  children: ReactNode;
  /** CSS class name for additional styling */
  className?: string;
  /** Animation delay in seconds (default: 0) */
  delay?: number;
  /** Animation duration in seconds (default: 0.8) */
  duration?: number;
  /** Initial blur amount in pixels (default: 10) */
  blur?: number;
  /** Slide direction (default: "up") */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance to slide in pixels (default: 20) */
  slideDistance?: number;
}

export default function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.8,
  blur = 10,
  direction = "up",
  slideDistance = 20,
}: BlurFadeProps) {
  // Calculate slide offset based on direction
  const getSlideOffset = () => {
    switch (direction) {
      case "up":
        return { y: slideDistance };
      case "down":
        return { y: -slideDistance };
      case "left":
        return { x: slideDistance };
      case "right":
        return { x: -slideDistance };
      default:
        return {};
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        ...getSlideOffset(),
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom smooth easing
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
