/**
 * ProfessionalStatCard Component
 * 
 * Displays animated statistical information in an attractive card format.
 * 
 * Features:
 * - Animated number counter that triggers when card enters viewport
 * - Lucide icon with hover scale animation
 * - Support for number prefixes (₹), suffixes (+), and decimals
 * - Optional glassmorphism effect for elevated appearance
 * - Smooth fade-in animation with customizable delay
 * - Responsive text sizing for mobile, tablet, desktop
 * 
 * Used on tournament pages to showcase entry fees, prizes, slots,
 * and other key tournament statistics in an engaging way.
 */

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProfessionalStatCardProps {
  icon: LucideIcon;                 // Icon component to display above the stat
  value: number;                    // Numeric value to animate and display
  label: string;                    // Descriptive label below the number
  suffix?: string;                  // Text to append after number (e.g., "+", "%")
  prefix?: string;                  // Text to prepend before number (e.g., "₹", "$")
  decimals?: number;                // Number of decimal places (default: 0)
  glassmorphism?: boolean;          // Enable glass effect styling (default: false)
  delay?: number;                   // Animation delay in seconds (default: 0)
  className?: string;               // Additional Tailwind classes
  "data-testid"?: string;           // Testing identifier
}

export default function ProfessionalStatCard({
  icon: Icon,
  value,
  label,
  suffix = "",
  prefix = "",
  decimals = 0,
  glassmorphism = false,
  delay = 0,
  className = "",
  "data-testid": dataTestId,
}: ProfessionalStatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <Card
        className={cn(
          "hover-elevate transition-all duration-300 group",
          glassmorphism && "bg-card/60 backdrop-blur-md border-border/50",
          className
        )}
        data-testid={dataTestId}
      >
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>

            {/* Value with CountUp */}
            <div className="space-y-2">
              <p
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono tracking-tight"
                data-testid={dataTestId ? `${dataTestId}-value` : undefined}
              >
                {prefix}
                {inView ? (
                  <CountUp
                    end={value}
                    duration={2.5}
                    decimals={decimals}
                    separator=","
                    suffix={suffix}
                  />
                ) : (
                  "0"
                )}
              </p>
              <p
                className="text-sm md:text-base text-muted-foreground font-medium"
                data-testid={dataTestId ? `${dataTestId}-label` : undefined}
              >
                {label}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
