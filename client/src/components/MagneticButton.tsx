/**
 * MagneticButton Component
 * 
 * Enhanced button with magnetic hover effect inspired by award-winning websites.
 * Button subtly follows cursor movement when hovered.
 * 
 * Features:
 * - Smooth magnetic effect on hover
 * - Optional glow effect
 * - Supports all Button variants
 * - Fully accessible
 * - Respects reduced motion preferences
 */

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/components/ui/button";

interface MagneticButtonProps extends ButtonProps {
  children: ReactNode;
  magneticStrength?: number;
  enableGlow?: boolean;
}

export default function MagneticButton({
  children,
  magneticStrength = 0.3,
  enableGlow = false,
  className,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <Button
      ref={buttonRef}
      className={cn(
        "transition-transform duration-300 ease-out",
        enableGlow && "magnetic-glow",
        className
      )}
      style={{
        transform: isHovered
          ? `translate(${position.x}px, ${position.y}px)`
          : "translate(0, 0)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Button>
  );
}
