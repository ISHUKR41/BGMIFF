/**
 * Tournament Card Component
 * 
 * Reusable card component that displays tournament information in a visually appealing format.
 * Shows entry fee, available slots, prize distribution (winner, runner-up, per-kill rewards).
 * Clicking the card navigates users to the tournament registration form.
 * 
 * Used on the home page to showcase all available tournament types (Solo, Duo, Squad).
 */

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Trophy, Coins, Ticket, Sparkles, Zap } from "lucide-react";

/**
 * Props interface for TournamentCard component
 * All monetary values are in INR (Indian Rupees)
 */
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

  const isBGMI = title.includes("BGMI");
  const isFreeFire = title.includes("Free Fire");

  return (
    <div className="group relative" data-testid={`card-tournament-${mode.toLowerCase()}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-purple-500/50 to-pink-500/50 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
      
      <Card 
        className="relative hover-elevate transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden border-2 border-transparent group-hover:border-primary/20 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:scale-[1.02]" 
        onClick={handleCardClick}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50" />
        
        <CardHeader className="relative">
          <div className="flex items-start justify-between gap-4 mb-3">
            <CardTitle className="text-xl md:text-2xl leading-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
            <Badge 
              variant="secondary" 
              className="shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
            >
              {mode}
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            {isBGMI && (
              <Badge variant="outline" className="text-xs border-blue-500/50 text-blue-500">
                <Zap className="w-3 h-3 mr-1" />
                BGMI
              </Badge>
            )}
            {isFreeFire && (
              <Badge variant="outline" className="text-xs border-orange-500/50 text-orange-500">
                <Sparkles className="w-3 h-3 mr-1" />
                Free Fire Max
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="flex-1 space-y-5 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 p-3 rounded-lg bg-muted/50 group-hover:bg-primary/5 transition-colors duration-300">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Ticket className="w-3.5 h-3.5" />
                <span>Entry Fee</span>
              </div>
              <p className="text-2xl font-mono font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                ₹{entryFee}
              </p>
            </div>
            
            <div className="space-y-2 p-3 rounded-lg bg-muted/50 group-hover:bg-primary/5 transition-colors duration-300">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className="w-3.5 h-3.5" />
                <span>Slots</span>
              </div>
              <p className="text-2xl font-mono font-bold">{slots}</p>
            </div>
          </div>

          <div className="space-y-3 p-4 rounded-lg bg-gradient-to-br from-muted/30 to-muted/10 border border-border/50">
            <div className="flex items-center justify-between group/item hover:translate-x-1 transition-transform duration-200">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Trophy className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-medium">Winner</span>
              </div>
              <span className="font-mono font-bold text-lg bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                ₹{winner}
              </span>
            </div>
            
            <div className="flex items-center justify-between group/item hover:translate-x-1 transition-transform duration-200">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center">
                  <Trophy className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-medium">Runner-up</span>
              </div>
              <span className="font-mono font-bold text-base">₹{runnerUp}</span>
            </div>
            
            <div className="flex items-center justify-between group/item hover:translate-x-1 transition-transform duration-200">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Coins className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-medium">Per Kill</span>
              </div>
              <span className="font-mono font-bold text-base">₹{perKill}</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="relative">
          <Button 
            className="w-full group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300" 
            size="lg" 
            data-testid={`button-register-${mode.toLowerCase()}`}
          >
            <span className="mr-2">Register Now</span>
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </CardFooter>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Card>
    </div>
  );
}
