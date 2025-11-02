/**
 * EnhancedMagneticButton Component
 * Advanced magnetic hover effect with spring animations
 * Inspired by awwwards.com and modern interactive websites
 * 
 * Features:
 * - Magnetic pull effect on hover
 * - Spring-based smooth animations
 * - Glow effect option
 * - Customizable magnetic strength
 * - Works with any button variant
 */

import { motion, useSpring } from "framer-motion";
import { ReactNode, useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "@/components/ui/button";

interface EnhancedMagneticButtonProps extends VariantProps<typeof buttonVariants> {
  /** Button content */
  children: ReactNode;
  /** CSS class name for additional styling */
  className?: string;
  /** Magnetic pull strength (0-1, default: 0.3) */
  magneticStrength?: number;
  /** Enable glow effect on hover */
  enableGlow?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Make button full width */
  fullWidth?: boolean;
  /** Test ID for testing */
  "data-testid"?: string;
  /** Render as child element (for links) */
  asChild?: boolean;
}

export default function EnhancedMagneticButton({
  children,
  className,
  magneticStrength = 0.3,
  enableGlow = false,
  onClick,
  fullWidth = false,
  variant = "default",
  size,
  "data-testid": testId,
  asChild,
}: EnhancedMagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Use spring animations for smooth, natural movement
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance from center
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Apply magnetic effect
    x.set(deltaX * magneticStrength);
    y.set(deltaY * magneticStrength);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smoothly return to original position
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      className={cn(fullWidth && "w-full")}
    >
      <Button
        ref={buttonRef}
        variant={variant}
        size={size}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        data-testid={testId}
        asChild={asChild}
        className={cn(
          "relative",
          enableGlow && isHovered && "shadow-lg shadow-primary/50",
          fullWidth && "w-full",
          className
        )}
      >
        {children}
      </Button>
    </motion.div>
  );
}
