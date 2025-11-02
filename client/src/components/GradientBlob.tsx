/**
 * GradientBlob Component
 * 
 * Animated gradient blob background element for modern hero sections.
 * Creates organic, flowing shapes that add visual interest.
 * 
 * Features:
 * - Smooth morphing animation
 * - Customizable colors
 * - Multiple animation speeds
 * - Blur effect
 * - Fully responsive
 */

import { cn } from "@/lib/utils";

interface GradientBlobProps {
  color?: "primary" | "secondary" | "accent" | "multi";
  size?: "sm" | "md" | "lg" | "xl";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  opacity?: number;
  speed?: "slow" | "medium" | "fast";
  className?: string;
}

export default function GradientBlob({
  color = "primary",
  size = "lg",
  position = "top-right",
  opacity = 0.15,
  speed = "medium",
  className,
}: GradientBlobProps) {
  const colorClasses = {
    primary: "from-primary/40 via-chart-1/30 to-chart-2/20",
    secondary: "from-chart-2/40 via-chart-3/30 to-chart-4/20",
    accent: "from-chart-3/40 via-accent/30 to-primary/20",
    multi: "from-primary/30 via-chart-2/25 via-chart-3/20 to-chart-1/15",
  }[color];

  const sizeClasses = {
    sm: "w-[300px] h-[300px]",
    md: "w-[500px] h-[500px]",
    lg: "w-[700px] h-[700px]",
    xl: "w-[900px] h-[900px]",
  }[size];

  const positionClasses = {
    "top-left": "-top-32 -left-32",
    "top-right": "-top-32 -right-32",
    "bottom-left": "-bottom-32 -left-32",
    "bottom-right": "-bottom-32 -right-32",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }[position];

  const speedAnimation = {
    slow: "float-animation-delayed",
    medium: "float-animation",
    fast: "float-animation",
  }[speed];

  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-0 pointer-events-none",
        sizeClasses,
        positionClasses,
        speedAnimation,
        className
      )}
      style={{
        background: `radial-gradient(circle, var(--tw-gradient-stops))`,
        opacity,
        animationDuration: speed === "fast" ? "4s" : speed === "slow" ? "10s" : "6s",
      }}
    >
      <div className={cn("w-full h-full bg-gradient-to-br rounded-full", colorClasses)} />
    </div>
  );
}
