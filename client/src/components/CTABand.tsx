/**
 * CTABand Component
 * 
 * Call-to-Action band component for prominent action prompts.
 * 
 * Features:
 * - Three visual variants (primary, secondary, gradient)
 * - Support for multiple action buttons
 * - Optional icon display with styled container
 * - Animated entrance with Framer Motion
 * - Fully responsive layout (stacks on mobile, row on desktop)
 * - Customizable button variants and click handlers
 * 
 * Used throughout the application for registration prompts,
 * tournament sign-ups, and other important calls-to-action.
 */

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Button configuration for CTA actions
 */
interface CTAButton {
  label: string;                                                 // Button text
  href?: string;                                                 // Navigation link (optional)
  onClick?: () => void;                                          // Click handler (optional)
  variant?: "default" | "outline" | "secondary" | "ghost";      // Button style variant
  icon?: LucideIcon;                                             // Icon component (optional)
}

/**
 * Props interface for CTABand component
 */
interface CTABandProps {
  title: string;                                                 // Main heading text
  description?: string;                                          // Optional description/subtitle
  buttons: CTAButton[];                                          // Array of action buttons
  variant?: "primary" | "secondary" | "gradient";               // Band color scheme
  icon?: LucideIcon;                                             // Optional icon next to title
  className?: string;                                            // Additional Tailwind classes
  "data-testid"?: string;                                        // Testing identifier
}

/**
 * CTABand Component
 * Displays a prominent call-to-action section with title, description, and action buttons
 */
export default function CTABand({
  title,
  description,
  buttons,
  variant = "primary",
  icon: Icon,
  className = "",
  "data-testid": dataTestId,
}: CTABandProps) {
  // Define background and text colors for each variant
  const variantClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-muted",
    gradient: "bg-gradient-to-r from-primary via-chart-2 to-chart-3 text-primary-foreground",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "rounded-lg py-12 md:py-16 px-6 md:px-12",
        variantClasses[variant],
        className
      )}
      data-testid={dataTestId}
    >
      <div className="max-w-4xl mx-auto">
        {/* Flex container: stacks on mobile, row layout on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              {Icon && (
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    variant === "secondary" ? "bg-primary/10" : "bg-white/10"
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
              )}
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight"
                data-testid={dataTestId ? `${dataTestId}-title` : undefined}
              >
                {title}
              </h2>
            </div>
            {description && (
              <p
                className={cn(
                  "text-lg max-w-2xl",
                  variant === "secondary" ? "text-muted-foreground" : "opacity-90"
                )}
                data-testid={dataTestId ? `${dataTestId}-description` : undefined}
              >
                {description}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {buttons.map((button, index) => {
              const ButtonIcon = button.icon;
              const ButtonContent = (
                <>
                  {ButtonIcon && <ButtonIcon className="w-4 h-4" />}
                  <span>{button.label}</span>
                </>
              );

              // Adjust button variants based on CTA band variant for better contrast
              // Primary/gradient bands get secondary buttons for visibility
              let buttonVariant = button.variant || "default";
              if (variant === "primary" || variant === "gradient") {
                if (buttonVariant === "default") {
                  buttonVariant = "secondary";
                }
              }

              if (button.href) {
                return (
                  <Button
                    key={index}
                    variant={buttonVariant as any}
                    size="lg"
                    asChild
                    data-testid={dataTestId ? `${dataTestId}-button-${index}` : `cta-button-${index}`}
                  >
                    <a href={button.href}>{ButtonContent}</a>
                  </Button>
                );
              }

              return (
                <Button
                  key={index}
                  variant={buttonVariant as any}
                  size="lg"
                  onClick={button.onClick}
                  data-testid={dataTestId ? `${dataTestId}-button-${index}` : `cta-button-${index}`}
                >
                  {ButtonContent}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
