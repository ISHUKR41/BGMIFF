/**
 * AnimatedCounter Component
 * 
 * Smoothly animates numbers from 0 to target value when scrolled into view.
 * Perfect for stats, metrics, and achievements.
 * 
 * Features:
 * - Smooth counting animation
 * - Customizable duration and format
 * - Triggers on scroll into view
 * - Supports prefixes and suffixes (₹, +, etc.)
 * - Fully responsive
 */

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
}

export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = start;
    const endValue = end;
    const diff = endValue - startValue;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + diff * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, start, end, duration]);

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals);
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join(".");
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
