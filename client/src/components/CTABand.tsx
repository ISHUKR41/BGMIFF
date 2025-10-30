import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost";
  icon?: LucideIcon;
}

interface CTABandProps {
  title: string;
  description?: string;
  buttons: CTAButton[];
  variant?: "primary" | "secondary" | "gradient";
  icon?: LucideIcon;
  className?: string;
  "data-testid"?: string;
}

export default function CTABand({
  title,
  description,
  buttons,
  variant = "primary",
  icon: Icon,
  className = "",
  "data-testid": dataTestId,
}: CTABandProps) {
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

              // Adjust button variants based on CTA band variant
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
