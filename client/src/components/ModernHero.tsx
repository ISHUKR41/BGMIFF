/**
 * ModernHero Component
 * 
 * Reusable hero section component for tournament pages.
 * 
 * Features:
 * - Background image or video support with gradient overlay
 * - Breadcrumb navigation for page hierarchy
 * - Animated title and description with Framer Motion
 * - Multiple CTA buttons with icons and variants
 * - Customizable height and overlay opacity
 * - Responsive design for all screen sizes
 * 
 * Used on Solo, Duo, and Squad tournament pages to create
 * consistent, professional hero sections with page-specific content.
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import EnhancedMagneticButton from "@/components/EnhancedMagneticButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { LucideIcon } from "lucide-react";
import { fadeSlideUp, scaleUp } from "@/lib/motion";

// CTA Button configuration for hero actions
interface CTAButton {
  label: string;                                                // Button text displayed to user
  href?: string;                                                 // Navigation link (optional)
  onClick?: () => void;                                          // Click handler function (optional)
  variant?: "default" | "outline" | "secondary" | "ghost";      // Button style variant
  icon?: LucideIcon;                                             // Icon component from lucide-react
}

// Breadcrumb navigation item structure
interface BreadcrumbItem {
  label: string;                                                 // Text shown in breadcrumb
  href?: string;                                                 // Link for non-final breadcrumbs
}

// Main component props interface
interface ModernHeroProps {
  title: string;                                                 // Main hero heading
  description?: string;                                          // Optional subtitle/description
  backgroundImage?: string;                                      // Background image URL
  backgroundVideo?: string;                                      // Background video URL (takes priority over image)
  ctaButtons?: CTAButton[];                                      // Array of action buttons
  breadcrumbs?: BreadcrumbItem[];                                // Navigation breadcrumb trail
  overlayOpacity?: number;                                       // Overlay darkness (0-1, default: 0.7)
  minHeight?: string;                                            // Minimum height in CSS units (default: "500px")
  className?: string;                                            // Additional Tailwind classes
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
  // Reference for parallax scroll effects
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform scroll progress to parallax movement (slower than scroll)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity2 = useTransform(scrollYProgress, [0, 1], [overlayOpacity, overlayOpacity + 0.2]);
  
  return (
    <div
      ref={heroRef}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
      data-testid="hero-section"
    >
      {/* Background Media with Parallax Effect */}
      {backgroundVideo && (
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ y: backgroundY }}
          data-testid="hero-background-video"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </motion.video>
      )}
      
      {backgroundImage && !backgroundVideo && (
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            y: backgroundY 
          }}
          data-testid="hero-background-image"
        />
      )}

      {/* Enhanced Gradient Overlay using CSS Variables */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          background: "var(--gradient-dark)",
          opacity: overlayOpacity2
        }}
        data-testid="hero-overlay"
      />
      
      {/* Gradient Glow Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
        data-testid="hero-glow"
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

        {/* Main Content with Enhanced Typography */}
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Hero Title with Gradient Text Effect */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeSlideUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight gradient-text"
            data-testid="hero-title"
          >
            {title}
          </motion.h1>

          {/* Hero Description with Enhanced Readability */}
          {description && (
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeSlideUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed"
              data-testid="hero-description"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons with Enhanced Magnetic Effects */}
          {ctaButtons.length > 0 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
              data-testid="hero-cta-buttons"
            >
              {ctaButtons.map((button, index) => {
                const Icon = button.icon;
                const ButtonContent = (
                  <>
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{button.label}</span>
                  </>
                );

                if (button.href) {
                  return (
                    <EnhancedMagneticButton
                      key={index}
                      variant={button.variant || "default"}
                      size="lg"
                      magneticStrength={0.4}
                      enableGlow={true}
                      className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                      asChild
                      data-testid={`hero-cta-${index}`}
                    >
                      <a href={button.href}>{ButtonContent}</a>
                    </EnhancedMagneticButton>
                  );
                }

                return (
                  <EnhancedMagneticButton
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    magneticStrength={0.4}
                    enableGlow={true}
                    className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-shadow"
                    onClick={button.onClick}
                    data-testid={`hero-cta-${index}`}
                  >
                    {ButtonContent}
                  </EnhancedMagneticButton>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
