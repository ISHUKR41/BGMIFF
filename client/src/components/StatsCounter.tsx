import { Card, CardContent } from "@/components/ui/card";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Trophy, Users, DollarSign, Target } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
