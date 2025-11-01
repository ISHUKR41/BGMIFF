/**
 * useMobile Hook
 * 
 * Custom hook for detecting mobile viewport sizes.
 * 
 * Features:
 * - Detects screens smaller than 768px (Tailwind's md breakpoint)
 * - Responsive to window resize events
 * - Uses matchMedia API for efficient listening
 * - Returns boolean for conditional rendering
 * 
 * Used to show/hide components or apply different behaviors
 * based on whether the user is on a mobile device.
 */

import * as React from "react"

/**
 * Mobile breakpoint in pixels (matches Tailwind's md breakpoint)
 */
const MOBILE_BREAKPOINT = 768

/**
 * Hook to detect if the current viewport is mobile-sized
 * 
 * @returns true if viewport width < 768px, false otherwise
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create media query listener for mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    /**
     * Update mobile state when viewport changes
     */
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Listen for viewport changes
    mql.addEventListener("change", onChange)
    
    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Clean up listener on unmount
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
