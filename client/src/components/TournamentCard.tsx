import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Coins, Ticket } from "lucide-react";

interface TournamentCardProps {
  title: string;
  mode: string;
  entryFee: number;
  slots: number;
  winner: number;
  runnerUp: number;
  perKill: number;
  formUrl: string;
}

export default function TournamentCard({
  title,
  mode,
  entryFee,
  slots,
  winner,
  runnerUp,
  perKill,
  formUrl,
}: TournamentCardProps) {
  const handleCardClick = () => {
    window.location.href = formUrl;
  };

  return (
    <Card 
      className="hover-elevate transition-all duration-300 h-full flex flex-col cursor-pointer" 
      onClick={handleCardClick}
      data-testid={`card-tournament-${mode.toLowerCase()}`}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {mode}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Professional tournament with verified payments
        </p>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Ticket className="w-4 h-4" />
              <span>Entry Fee</span>
            </div>
            <p className="text-2xl font-mono font-semibold">₹{entryFee}</p>
          </div>
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Slots</span>
            </div>
            <p className="text-2xl font-mono font-semibold">{slots}</p>
          </div>
        </div>

        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span>Winner</span>
            </div>
            <span className="font-mono font-semibold">₹{winner}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Trophy className="w-4 h-4 text-gray-400" />
              <span>Runner-up</span>
            </div>
            <span className="font-mono font-semibold">₹{runnerUp}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Coins className="w-4 h-4" />
              <span>Per Kill</span>
            </div>
            <span className="font-mono font-semibold">₹{perKill}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" size="lg" data-testid={`button-register-${mode.toLowerCase()}`}>
          Register Now
        </Button>
      </CardFooter>
    </Card>
  );
}
