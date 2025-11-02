/**
 * BentoGrid Component
 * Modern grid layout inspired by Apple and Bento design patterns
 * Used on modern websites for feature showcases
 * 
 * Features:
 * - Flexible grid with customizable columns
 * - Responsive layout that adapts to screen size
 * - Animated reveal on scroll
 * - Support for different card sizes
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface BentoGridProps {
  /** Grid items */
  children: ReactNode;
  /** CSS class name for additional styling */
  className?: string;
  /** Number of columns on desktop (default: 3) */
  columns?: 2 | 3 | 4;
}

interface BentoCardProps {
  /** Card content */
  children: ReactNode;
  /** CSS class name for additional styling */
  className?: string;
  /** Span multiple columns (default: 1) */
  colSpan?: 1 | 2 | 3;
  /** Span multiple rows (default: 1) */
  rowSpan?: 1 | 2;
  /** Enable hover effects */
  interactive?: boolean;
  /** Animation delay */
  delay?: number;
}

/**
 * Main Bento Grid container
 */
export function BentoGrid({ children, className, columns = 3 }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4 md:gap-6",
        columns === 2 && "grid-cols-1 md:grid-cols-2",
        columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Individual Bento Card
 */
export function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  interactive = true,
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "md:col-span-3",
        rowSpan === 2 && "md:row-span-2",
      )}
    >
      <Card
        className={cn(
          "h-full",
          interactive && "hover-elevate transition-all duration-300 cursor-pointer",
          className
        )}
      >
        {children}
      </Card>
    </motion.div>
  );
}
