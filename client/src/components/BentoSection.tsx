import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeSlideUp } from "@/lib/motion";

/**
 * BentoSection Component
 * Modern bento box layout section with responsive grid
 * Inspired by modern design trends from designspells, awwwards, and minimal.gallery
 * 
 * Features:
 * - Responsive grid that adapts from mobile (1 column) to desktop (asymmetric bento)
 * - Smooth scroll reveal animations
 * - Flexible sizing for different content types
 */

interface BentoSectionProps {
  children: ReactNode;
  className?: string;
  /** Grid template for desktop layout - defaults to auto-fit */
  gridTemplate?: string;
  /** Gap between grid items */
  gap?: "sm" | "md" | "lg";
  /** Enable scroll reveal animation */
  animated?: boolean;
  /** Test ID for accessibility testing */
  "data-testid"?: string;
}

export default function BentoSection({
  children,
  className,
  gridTemplate = "repeat(auto-fit, minmax(280px, 1fr))",
  gap = "md",
  animated = true,
  "data-testid": testId,
}: BentoSectionProps) {
  const gapClasses = {
    sm: "gap-3",
    md: "gap-4 md:gap-6",
    lg: "gap-6 md:gap-8",
  };

  const Container = animated ? motion.div : "div";
  const animationProps = animated
    ? {
        variants: fadeSlideUp,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      }
    : {};

  return (
    <Container
      className={cn("bento-grid w-full", gapClasses[gap], className)}
      style={{
        gridTemplateColumns: gridTemplate,
      }}
      data-testid={testId}
      {...animationProps}
    >
      {children}
    </Container>
  );
}

/**
 * BentoItem Component
 * Individual item within a bento grid
 * Can span multiple columns/rows for asymmetric layouts
 */

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  /** Number of columns to span on desktop */
  colSpan?: 1 | 2 | 3 | 4;
  /** Number of rows to span on desktop */
  rowSpan?: 1 | 2 | 3;
  /** Enable glass effect background */
  glass?: boolean;
  /** Enable hover lift effect */
  hoverable?: boolean;
  /** Test ID for accessibility testing */
  "data-testid"?: string;
}

export function BentoItem({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  glass = false,
  hoverable = false,
  "data-testid": testId,
}: BentoItemProps) {
  return (
    <div
      className={cn(
        "bento-item",
        glass && "glass-card p-6",
        hoverable && "card-hover-lift cursor-pointer",
        className
      )}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
      data-testid={testId}
    >
      {children}
    </div>
  );
}
