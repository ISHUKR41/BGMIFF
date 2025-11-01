/**
 * ParticlesBackground Component
 * 
 * Animated particles background effect using tsparticles.
 * 
 * Features:
 * - Animated floating particles with connecting lines
 * - Subtle blue color scheme matching site theme
 * - Optimized performance with slim loader
 * - Positioned behind content (z-index: -10)
 * - Bounce effect at boundaries
 * - Auto-detects retina displays
 * 
 * Used on hero sections and landing pages to add visual
 * interest and create a modern, tech-focused aesthetic.
 */

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

/**
 * ParticlesBackground Component
 * Renders an animated particle network in the background
 */
export default function ParticlesBackground() {
  /**
   * Initialize particles engine with slim loader for performance
   */
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#3b82f6",
          },
          links: {
            color: "#3b82f6",
            distance: 150,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
