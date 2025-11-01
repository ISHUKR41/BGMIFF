/**
 * StatsCounter Component
 * 
 * Animated statistics display with counting animation.
 * 
 * Features:
 * - Four key statistics (tournaments, players, prize money, success rate)
 * - Animated number counting using react-countup
 * - Triggers animation when scrolled into view
 * - Responsive grid layout (2x2 on mobile, 4x1 on desktop)
 * - Icon indicators for each stat
 * - Support for prefixes and suffixes (₹, +, %)
 * - Hover elevation for visual feedback
 * 
 * Used on the home page to showcase platform credibility
 * and attract new players with impressive metrics.
 */

import { Card, CardContent } from "@/components/ui/card";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Trophy, Users, DollarSign, Target } from "lucide-react";

/**
 * Stat item data structure
 */
interface StatItem {
  icon: React.ReactNode;       // Icon component to display
  value: number;               // Numeric value to count up to
  label: string;               // Label describing the stat
  suffix?: string;             // Optional suffix (e.g., "+", "%")
  prefix?: string;             // Optional prefix (e.g., "₹")
}

/**
 * StatsCounter Component
 * Displays animated platform statistics
 */
export default function StatsCounter() {
  // Trigger animation when component is in view
  const { ref, inView } = useInView({
    triggerOnce: true,          // Only animate once
    threshold: 0.1,             // Trigger when 10% visible
  });

  const stats: StatItem[] = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      value: 150,
      label: "Tournaments Organized",
      suffix: "+",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      value: 5000,
      label: "Active Players",
      suffix: "+",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      value: 250000,
      label: "Prize Money Distributed",
      prefix: "₹",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      value: 98,
      label: "Success Rate",
      suffix: "%",
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover-elevate transition-all duration-300">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex justify-center">{stat.icon}</div>
            <div className="space-y-1">
              <p className="text-3xl md:text-4xl font-mono font-bold">
                {stat.prefix}
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
                {!inView && "0"}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
