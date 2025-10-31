/**
 * SectionWrapper Component
 * 
 * Provides consistent spacing and styling for page sections.
 * 
 * Features:
 * - Three background variants (default, muted, accent) for visual hierarchy
 * - Three width options (default: 7xl, wide: 1400px, full: no limit)
 * - Consistent vertical padding across all screen sizes
 * - Container centering with horizontal padding
 * - Supports custom IDs for anchor linking
 * 
 * Used throughout tournament pages to create visual separation
 * between content sections while maintaining design consistency.
 */

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;                          // Content to be wrapped in the section
  variant?: "default" | "muted" | "accent";           // Background color variant
  width?: "default" | "wide" | "full";                // Maximum container width
  className?: string;                                  // Additional Tailwind classes
  id?: string;                                         // Section ID for anchor linking
  "data-testid"?: string;                              // Testing identifier
}

export default function SectionWrapper({
  children,
  variant = "default",
  width = "default",
  className = "",
  id,
  "data-testid": dataTestId,
}: SectionWrapperProps) {
  const bgVariants = {
    default: "",
    muted: "bg-muted/30",
    accent: "bg-accent/30",
  };

  const widthVariants = {
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
    full: "max-w-none",
  };

  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 lg:py-32", bgVariants[variant], className)}
      data-testid={dataTestId}
    >
      <div className={cn("container mx-auto px-4", widthVariants[width])}>
        {children}
      </div>
    </section>
  );
}
