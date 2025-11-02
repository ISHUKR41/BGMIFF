/**
 * Floating Orbs Component
 * Decorative animated gradient orbs that float in the background
 * Inspired by modern websites like Stripe, Cursor, and designspells.com
 * 
 * Features:
 * - Smooth floating animations with different speeds
 * - Gradient colors that match the theme
 * - Blur effect for depth
 * - Responsive sizing
 */

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingOrbsProps {
  /** Number of orbs to display (default: 3) */
  count?: number;
  /** CSS class name for additional styling */
  className?: string;
}

export default function FloatingOrbs({ count = 3, className }: FloatingOrbsProps) {
  // Create array of orbs with different properties
  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    // Position each orb in different areas of the screen
    x: `${(i + 1) * (100 / (count + 1))}%`,
    y: `${20 + i * 30}%`,
    // Vary the size for visual interest
    size: 300 + i * 100,
    // Different animation durations for each orb
    duration: 15 + i * 5,
    // Different delay for staggered start
    delay: i * 2,
    // Different colors for each orb
    color: i === 0 
      ? "from-primary/20 to-primary/5" 
      : i === 1 
      ? "from-purple-500/15 to-purple-500/5"
      : "from-blue-500/15 to-blue-500/5",
  }));

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={cn(
            "absolute rounded-full",
            "bg-gradient-to-br",
            orb.color,
            "blur-3xl"
          )}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            // Float up and down
            y: [0, -50, 0],
            // Drift left and right
            x: [0, 30, 0],
            // Gentle rotation
            rotate: [0, 10, 0],
            // Subtle scale pulse
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
