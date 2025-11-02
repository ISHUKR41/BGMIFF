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

/**
 * Floating animation - creates gentle floating effect
 * Inspired by modern landing pages like Cursor and awwwards sites
 * Perfect for decorative elements and hero illustrations
 */
export const floatingAnimation: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" as const
    }
  }
};

/**
 * Floating delayed - floating animation with delay
 * Use for multiple floating elements with different timing
 */
export const floatingDelayed: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" as const,
      delay: 1
    }
  }
};

/**
 * Magnetic hover effect - element follows cursor slightly
 * Inspired by awwwards and modern interactive websites
 * Great for buttons and interactive cards
 */
export const magneticHover: Variants = {
  rest: { 
    scale: 1,
    rotateZ: 0
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

/**
 * 3D Perspective card effect - card tilts on hover
 * Modern interactive card design pattern
 */
export const perspective3D: Variants = {
  rest: {
    rotateY: 0,
    rotateX: 0,
    scale: 1
  },
  hover: {
    rotateY: 5,
    rotateX: -5,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

/**
 * Blur reveal animation - element blurs in
 * Modern reveal effect for images and content
 */
export const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

/**
 * Rotate reveal - element rotates while revealing
 * Eye-catching entrance animation
 */
export const rotateReveal: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -90,
    transformPerspective: 1000
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

/**
 * Expand animation - element expands from center
 * Perfect for modal overlays and popups
 */
export const expandCenter: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] // Custom cubic bezier for smooth expansion
    }
  }
};

/**
 * Slide reveal with blur - combines slide and blur
 * Modern premium reveal animation
 */
export const slideBlurReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

/**
 * Advanced stagger with different speeds
 * Creates sophisticated cascading animations
 */
export const advancedStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

/**
 * Stagger item with spring physics
 * Bouncy reveal for staggered items
 */
export const staggerItemSpring: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

/**
 * Gradient animation for backgrounds
 * Creates animated gradient effect
 */
export const gradientAnimation = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

/**
 * Shimmer effect for loading states
 * Modern skeleton loading animation
 */
export const shimmerEffect: Variants = {
  animate: {
    backgroundPosition: ["-1000px 0", "1000px 0"],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity
    }
  }
};

/**
 * Bounce in animation - playful entrance
 * Good for notifications and alerts
 */
export const bounceIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 12,
      duration: 0.6
    }
  }
};

/**
 * Slide from bottom with fade
 * Modern bottom sheet animation
 */
export const slideFromBottom: Variants = {
  hidden: {
    y: "100%",
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.4
    }
  }
};

/**
 * Flip card animation - card flips to reveal back
 * Interactive card design pattern
 */
export const flipCard: Variants = {
  front: {
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  },
  back: {
    rotateY: 180,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};

/**
 * Text reveal animation - text appears character by character effect
 * Modern typography animation
 */
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

/**
 * Scroll progress animation config
 * For progress bars that follow scroll position
 */
export const scrollProgress = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
  transition: { duration: 0.3, ease: "easeOut" }
};

/**
 * Glow pulse effect - pulsing glow for CTAs
 * Inspired by Razorpay and modern payment forms
 */
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.6)",
      "0 0 20px rgba(59, 130, 246, 0.3)"
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
};

/**
 * Card stack animation - cards stack and reveal
 * Modern onboarding pattern
 */
export const cardStack: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 50 * index,
    scale: 1 - (index * 0.05)
  }),
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

/**
 * Enhanced viewport config for better scroll triggers
 * More aggressive triggering for modern scroll animations
 */
export const enhancedViewport = {
  once: true,
  amount: 0.15,
  margin: "-80px"
};

/**
 * Ultra smooth easing curves
 * Custom easing for premium animations
 */
export const easings = {
  // Smooth acceleration and deceleration
  smooth: [0.16, 1, 0.3, 1],
  // Snappy but smooth
  snappy: [0.34, 1.56, 0.64, 1],
  // Gentle and slow
  gentle: [0.25, 0.46, 0.45, 0.94],
  // Quick and responsive
  quick: [0.4, 0, 0.2, 1],
};
