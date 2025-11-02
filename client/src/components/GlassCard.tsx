import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { fadeSlideUp, magneticHover } from "@/lib/motion";

/**
 * GlassCard Component
 * Modern glassmorphism card with blur effect
 * Inspired by Stripe, Cursor, and modern design trends
 * 
 * Features:
 * - Frosted glass background with blur effect
 * - Optional magnetic hover interaction
 * - Smooth animations
 * - Fully responsive
 */

interface GlassCardProps {
  children?: ReactNode;
  className?: string;
  /** Card title displayed in header */
  title?: string;
  /** Card description displayed in header */
  description?: string;
  /** Footer content */
  footer?: ReactNode;
  /** Enable magnetic hover effect */
  magnetic?: boolean;
  /** Enable floating animation */
  floating?: boolean;
  /** Custom blur amount (in pixels) */
  blurAmount?: number;
  /** Enable scroll reveal animation */
  animated?: boolean;
  /** Test ID for accessibility testing */
  "data-testid"?: string;
}

export default function GlassCard({
  children,
  className,
  title,
  description,
  footer,
  magnetic = false,
  floating = false,
  blurAmount = 20,
  animated = true,
  "data-testid": testId,
}: GlassCardProps) {
  const CardWrapper = magnetic ? motion(Card) : animated ? motion(Card) : Card;
  
  const animationProps = magnetic
    ? {
        variants: magneticHover,
        initial: "rest",
        whileHover: "hover",
      }
    : animated
    ? {
        variants: fadeSlideUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      }
    : {};

  return (
    <CardWrapper
      className={cn(
        "glass-card",
        floating && "float-animation",
        className
      )}
      style={{
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
      }}
      data-testid={testId}
      {...animationProps}
    >
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      
      {children && <CardContent>{children}</CardContent>}
      
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardWrapper>
  );
}

/**
 * GlassCardSimple Component
 * Simplified glass card without CardHeader/CardContent structure
 * Use when you need full control over the layout
 */

interface GlassCardSimpleProps {
  children: ReactNode;
  className?: string;
  /** Enable magnetic hover effect */
  magnetic?: boolean;
  /** Enable floating animation */
  floating?: boolean;
  /** Custom blur amount (in pixels) */
  blurAmount?: number;
  /** Test ID for accessibility testing */
  "data-testid"?: string;
}

export function GlassCardSimple({
  children,
  className,
  magnetic = false,
  floating = false,
  blurAmount = 20,
  "data-testid": testId,
}: GlassCardSimpleProps) {
  const Component = magnetic ? motion.div : "div";
  const hoverProps = magnetic
    ? {
        variants: magneticHover,
        initial: "rest",
        whileHover: "hover",
      }
    : {};

  return (
    <Component
      className={cn(
        "glass-card p-6 rounded-lg",
        floating && "float-animation",
        className
      )}
      style={{
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
      }}
      data-testid={testId}
      {...hoverProps}
    >
      {children}
    </Component>
  );
}
