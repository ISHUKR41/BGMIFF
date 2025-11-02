/**
 * StickyCTA Component
 * 
 * Sticky call-to-action bar that appears when user scrolls past the hero section.
 * 
 * Features:
 * - Slides in from top with smooth animation when scrolling down
 * - Displays tournament name, entry fee, and register button
 * - Sticky positioning at top of viewport (below navigation)
 * - Mobile-responsive design with compact layout on small screens
 * - Smooth entrance and exit animations
 * - Glass morphism effect for modern appearance
 * 
 * Used on all tournament pages to provide persistent registration access
 * without interfering with content consumption.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Trophy, Coins } from "lucide-react";

interface StickyCTAProps {
  tournamentName: string;      // Full tournament name (e.g., "BGMI Solo Tournament")
  entryFee: number;             // Entry fee amount in INR
  onRegisterClick: () => void;  // Callback when Register button is clicked
}

export default function StickyCTA({ tournamentName, entryFee, onRegisterClick }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide sticky bar based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 600px (typical hero height)
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          data-testid="sticky-cta-bar"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-4 py-3 md:py-4">
              {/* Tournament Info - Hidden on mobile, shown on md+ */}
              <div className="hidden md:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm lg:text-base">{tournamentName}</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Coins className="w-3 h-3" />
                    Entry Fee: ₹{entryFee}
                  </p>
                </div>
              </div>

              {/* Mobile: Compact layout */}
              <div className="flex md:hidden items-center gap-2 flex-1">
                <Trophy className="w-5 h-5 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm truncate">{tournamentName}</h3>
                  <p className="text-xs text-muted-foreground">₹{entryFee} Entry</p>
                </div>
              </div>

              {/* Register Button */}
              <Button 
                onClick={onRegisterClick}
                className="shrink-0 glow-on-hover"
                size="default"
                data-testid="button-sticky-register"
              >
                <span className="hidden sm:inline">Register Now</span>
                <span className="inline sm:hidden">Register</span>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
