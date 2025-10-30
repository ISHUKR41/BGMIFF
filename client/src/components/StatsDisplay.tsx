import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Coins, Ticket } from "lucide-react";

interface Stat {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

interface StatsDisplayProps {
  stats: Stat[];
}

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
