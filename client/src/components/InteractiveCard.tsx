/**
 * InteractiveCard Component
 * 
 * Enhanced card with sophisticated hover effects and 3D tilt.
 * Inspired by modern premium websites.
 * 
 * Features:
 * - 3D tilt effect following mouse movement
 * - Gradient overlay on hover
 * - Optional glow effect
 * - Smooth animations
 * - Fully responsive
 */

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  enableTilt?: boolean;
  enableGlow?: boolean;
  onClick?: () => void;
}

export default function InteractiveCard({
  children,
  className,
  tiltIntensity = 10,
  enableTilt = true,
  enableGlow = false,
  onClick,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * tiltIntensity;
    const rotateY = ((centerX - x) / centerX) * tiltIntensity;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Card
      ref={cardRef}
      className={cn(
        "interactive-card cursor-pointer",
        enableGlow && "magnetic-glow",
        className
      )}
      style={{
        transform: enableTilt && isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(10px)`
          : "none",
        transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}
