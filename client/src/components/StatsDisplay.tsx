/**
 * StatsDisplay Component
 * 
 * Static statistics display component (no animations).
 * 
 * Features:
 * - Configurable stats array with icons
 * - Optional highlight border for important stats
 * - Responsive grid layout (2x2 on mobile, 4x1 on desktop)
 * - Center-aligned icon and text
 * - Monospace font for numbers
 * 
 * Used on tournament pages to display tournament-specific
 * statistics like prize pool, participants, slots remaining.
 */

import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Coins, Ticket } from "lucide-react";

/**
 * Stat data structure
 */
interface Stat {
  label: string;               // Stat description
  value: string;               // Stat value (as string for flexibility)
  icon: React.ReactNode;       // Icon component
  highlight?: boolean;         // Whether to highlight with primary border
}

/**
 * Props interface for StatsDisplay component
 */
interface StatsDisplayProps {
  stats: Stat[];               // Array of stats to display
}

/**
 * StatsDisplay Component
 * Displays tournament statistics in a grid layout
 */
export default function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className={stat.highlight ? "border-primary" : ""}>
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center gap-3">
              <div className={stat.highlight ? "text-primary" : "text-muted-foreground"}>
                {stat.icon}
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-4xl font-mono font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export { Trophy, Users, Coins, Ticket };
