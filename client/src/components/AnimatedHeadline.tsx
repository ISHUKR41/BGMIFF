import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeSlideUp, textReveal } from "@/lib/motion";

/**
 * AnimatedHeadline Component
 * Modern headline with gradient text and smooth animations
 * Inspired by Stripe, Cursor, and modern hero sections
 * 
 * Features:
 * - Animated gradient text option
 * - Smooth fade and slide animations
 * - Responsive typography
 * - Flexible sizing
 */

interface AnimatedHeadlineProps {
  children: ReactNode;
  /** Heading level for semantic HTML */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Apply animated gradient to text */
  gradient?: boolean;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Size variant */
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  /** Enable animation on scroll into view */
  animated?: boolean;
  /** Test ID for accessibility testing */
  "data-testid"?: string;
}

export default function AnimatedHeadline({
  children,
  level = 2,
  gradient = false,
  align = "left",
  size = "lg",
  className,
  animated = true,
  "data-testid": testId,
}: AnimatedHeadlineProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const sizeClasses = {
    sm: "text-2xl sm:text-3xl md:text-4xl",
    md: "text-3xl sm:text-4xl md:text-5xl",
    lg: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    xl: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const animationProps = animated
    ? {
        variants: fadeSlideUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  if (animated) {
    const MotionTag = motion[Tag as keyof typeof motion] as any;
    return (
      <MotionTag
        className={cn(
          "font-bold tracking-tight",
          sizeClasses[size],
          alignClasses[align],
          gradient && "animated-gradient-text",
          className
        )}
        data-testid={testId}
        {...animationProps}
      >
        {children}
      </MotionTag>
    );
  }

  return (
    <Tag
      className={cn(
        "font-bold tracking-tight",
        sizeClasses[size],
        alignClasses[align],
        gradient && "animated-gradient-text",
        className
      )}
      data-testid={testId}
    >
      {children}
    </Tag>
  );
}

/**
 * AnimatedSubheadline Component
 * Complementary subheadline for sections
 */

interface AnimatedSubheadlineProps {
  children: ReactNode;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Enable animation on scroll into view */
  animated?: boolean;
  /** Test ID for accessibility testing */
  "data-testid"?: string;
}

export function AnimatedSubheadline({
  children,
  align = "left",
  size = "md",
  className,
  animated = true,
  "data-testid": testId,
}: AnimatedSubheadlineProps) {
  const sizeClasses = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl md:text-2xl",
    lg: "text-xl sm:text-2xl md:text-3xl",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const Component = animated ? motion.p : "p";
  const animationProps = animated
    ? {
        variants: fadeSlideUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  return (
    <Component
      className={cn(
        "text-muted-foreground leading-relaxed",
        sizeClasses[size],
        alignClasses[align],
        className
      )}
      data-testid={testId}
      {...animationProps}
    >
      {children}
    </Component>
  );
}
