/**
 * Reusable Framer Motion animation variants and utilities
 * These presets provide consistent, smooth animations across the application
 */

import { Variants } from "framer-motion";

/**
 * Fade in animation - element appears smoothly
 * Duration: 0.5 seconds
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * Fade in with upward slide animation - element slides up while appearing
 * Common for page sections and cards
 * Duration: 0.6 seconds, slides up by 30px
 */
export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

/**
 * Fade in with downward slide animation - element slides down while appearing
 * Good for dropdown menus and modals
 * Duration: 0.4 seconds, slides down by 20px
 */
export const fadeSlideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

/**
 * Scale and fade animation - element scales up while appearing
 * Great for cards and buttons
 * Duration: 0.5 seconds, scales from 95% to 100%
 */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * Stagger children animation - animates child elements one after another
 * Perfect for lists and grids
 * Delay: 0.1 seconds between each child
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

/**
 * Child item for stagger container - individual item animation
 * Slides up and fades in
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

/**
 * Pulse animation for hover effects on buttons and cards
 * Subtle scale effect on hover
 */
export const hoverPulse: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

/**
 * Glow effect animation - adds a glowing border on hover
 * Best for interactive cards and buttons
 */
export const hoverGlow: Variants = {
  rest: { 
    boxShadow: "0 0 0 0px rgba(59, 130, 246, 0)" 
  },
  hover: { 
    boxShadow: "0 0 20px 4px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.3 }
  }
};

/**
 * Slide in from left animation - element slides in from the left side
 * Good for side panels and navigation menus
 */
export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

/**
 * Slide in from right animation - element slides in from the right side
 * Good for side panels and navigation menus
 */
export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

/**
 * Page transition animation - smooth fade between pages
 * Applied at the page level
 */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4 }
  }
};

/**
 * Parallax scroll effect configuration
 * Use with Framer Motion's useScroll hook
 */
export const parallaxConfig = {
  // Scroll slower than page scroll (0.5 = half speed)
  slow: { y: [0, -50], transition: { duration: 0.3 } },
  // Scroll faster than page scroll
  fast: { y: [0, 100], transition: { duration: 0.3 } },
};

/**
 * Viewport configuration for scroll-triggered animations
 * Use with Framer Motion's whileInView prop
 */
export const viewportConfig = {
  // Trigger animation once when element comes into view
  once: true,
  // Trigger when 20% of the element is visible
  amount: 0.2,
  // Add margin to trigger earlier/later
  margin: "-100px"
};

/**
 * Spring animation configuration for bouncy effects
 * Use in transition prop
 */
export const springConfig = {
  // Gentle bounce
  soft: { type: "spring" as const, stiffness: 100, damping: 15 },
  // Medium bounce
  medium: { type: "spring" as const, stiffness: 200, damping: 20 },
  // Snappy, quick bounce
  snappy: { type: "spring" as const, stiffness: 400, damping: 30 },
};

/**
 * Number counter animation for statistics
 * Use with CountUp component or Framer Motion
 */
export const counterAnimation = {
  duration: 2,
  ease: "easeOut" as const,
};
