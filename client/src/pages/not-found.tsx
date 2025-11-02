/**
 * NotFound (404) Page Component
 * 
 * Enhanced error page with immersive design and smooth animations.
 * 
 * Features:
 * - Immersive dark empty state with background glow
 * - Playful but professional error messaging
 * - Gradient text effect on heading
 * - Smooth entrance animations using fadeSlideUp
 * - Animated "Back to Home" button with hover effects
 * - Floating animation on 404 number
 * - Mobile-responsive design
 * - Uses semantic color tokens for dark/light mode support
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, SearchX, ArrowLeft } from "lucide-react";
import { fadeSlideUp, staggerContainer, staggerItem } from "@/lib/motion";

/**
 * NotFound Component
 * Displays an immersive 404 error page with animations
 */
export default function NotFound() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-4 sm:p-6">
      {/* Subtle Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30"
        aria-hidden="true"
      />

      {/* Main Content with Stagger Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 max-w-2xl mx-auto text-center space-y-8"
      >
        {/* Animated 404 Number with Floating Effect */}
        <motion.div
          variants={staggerItem}
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <h1 
            className="text-8xl sm:text-9xl md:text-[12rem] font-bold gradient-text leading-none mb-4"
            data-testid="heading-404"
          >
            404
          </h1>
        </motion.div>

        {/* Error Icon with Fade-in */}
        <motion.div
          variants={staggerItem}
          className="flex justify-center"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full flex items-center justify-center">
            <SearchX className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
          </div>
        </motion.div>

        {/* Error Message with Slide-up Animation */}
        <motion.div variants={staggerItem} className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" data-testid="text-error-title">
            Oops! Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed" data-testid="text-error-message">
            The page you're looking for seems to have wandered off. Maybe it joined a tournament without telling us!
          </p>
        </motion.div>

        {/* Action Buttons with Hover Animations */}
        <motion.div 
          variants={staggerItem}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg"
              className="min-w-[200px] group"
              data-testid="button-go-home"
            >
              <a href="/" className="gap-2">
                <Home className="w-5 h-5 group-hover:animate-pulse" />
                Go to Homepage
              </a>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="min-w-[200px] group"
              data-testid="button-go-back"
            >
              <a href="javascript:history.back()" className="gap-2">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Helpful Links */}
        <motion.div variants={staggerItem} className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Quick Links:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="/solo" 
              className="text-sm text-primary hover:underline hover-elevate px-3 py-2 rounded-md transition-all"
            >
              BGMI Solo
            </a>
            <a 
              href="/duo" 
              className="text-sm text-primary hover:underline hover-elevate px-3 py-2 rounded-md transition-all"
            >
              BGMI Duo
            </a>
            <a 
              href="/squad" 
              className="text-sm text-primary hover:underline hover-elevate px-3 py-2 rounded-md transition-all"
            >
              BGMI Squad
            </a>
            <a 
              href="/contact" 
              className="text-sm text-primary hover:underline hover-elevate px-3 py-2 rounded-md transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
