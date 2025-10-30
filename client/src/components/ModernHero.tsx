import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LucideIcon } from "lucide-react";

interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost";
  icon?: LucideIcon;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ModernHeroProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  ctaButtons?: CTAButton[];
  breadcrumbs?: BreadcrumbItem[];
  overlayOpacity?: number;
  minHeight?: string;
  className?: string;
}

export default function ModernHero({
  title,
  description,
  backgroundImage,
  backgroundVideo,
  ctaButtons = [],
  breadcrumbs = [],
  overlayOpacity = 0.7,
  minHeight = "500px",
  className = "",
}: ModernHeroProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
      data-testid="hero-section"
    >
      {/* Background Media */}
      {backgroundVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          data-testid="hero-background-video"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          data-testid="hero-background-image"
        />
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95"
        style={{ opacity: overlayOpacity }}
        data-testid="hero-overlay"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
            data-testid="hero-breadcrumbs"
          >
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                  <span key={index} className="flex items-center gap-2">
                    <BreadcrumbItem>
                      {index === breadcrumbs.length - 1 ? (
                        <BreadcrumbPage className="text-foreground">
                          {crumb.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          href={crumb.href}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {crumb.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </span>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>
        )}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            data-testid="hero-title"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              data-testid="hero-description"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {ctaButtons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
              data-testid="hero-cta-buttons"
            >
              {ctaButtons.map((button, index) => {
                const Icon = button.icon;
                const ButtonContent = (
                  <>
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{button.label}</span>
                  </>
                );

                if (button.href) {
                  return (
                    <Button
                      key={index}
                      variant={button.variant || "default"}
                      size="lg"
                      asChild
                      data-testid={`hero-cta-${index}`}
                    >
                      <a href={button.href}>{ButtonContent}</a>
                    </Button>
                  );
                }

                return (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    onClick={button.onClick}
                    data-testid={`hero-cta-${index}`}
                  >
                    {ButtonContent}
                  </Button>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
