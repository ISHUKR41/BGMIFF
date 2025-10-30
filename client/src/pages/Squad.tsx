import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ModernHero from "@/components/ModernHero";
import SectionWrapper from "@/components/SectionWrapper";
import ProfessionalStatCard from "@/components/ProfessionalStatCard";
import MediaLightbox from "@/components/MediaLightbox";
import ModernTestimonials from "@/components/ModernTestimonials";
import CTABand from "@/components/CTABand";
import RulesAccordion from "@/components/RulesAccordion";
import PaymentInstructions from "@/components/PaymentInstructions";
import FormEmbed from "@/components/FormEmbed";
import VideoSection from "@/components/VideoSection";
import { TOURNAMENTS } from "@/../../shared/config";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, Users, Coins, Ticket, Calendar, Clock, Target, Shield, 
  Crosshair, Radio, Heart, Eye, TrendingUp, Award, Star, CheckCircle2,
  UserPlus, FileText, CreditCard, Bell
} from "lucide-react";

import heroImage from "@assets/stock_images/professional_esports_b950c25b.jpg";
import actionImage1 from "@assets/stock_images/mobile_gaming_esport_08f2afcc.jpg";
import actionImage2 from "@assets/stock_images/professional_esports_00682946.jpg";
import actionImage3 from "@assets/stock_images/professional_esports_51ad66a4.jpg";
import tournamentImage1 from "@assets/stock_images/gaming_tournament_tr_93007a14.jpg";
import tournamentImage2 from "@assets/stock_images/gaming_tournament_tr_cb77e853.jpg";
import esportsImage1 from "@assets/stock_images/mobile_gaming_esport_37b20b88.jpg";
import esportsImage2 from "@assets/stock_images/mobile_gaming_esport_a1adcd83.jpg";
import techImage1 from "@assets/stock_images/modern_technology_wo_b01b89b4.jpg";
import techImage2 from "@assets/stock_images/modern_technology_wo_c4ba99d0.jpg";
import techImage3 from "@assets/stock_images/modern_technology_wo_ff5b0a11.jpg";
import businessImage1 from "@assets/stock_images/professional_busines_5fe6ffd5.jpg";

const squadRules = [
  {
    title: "Squad Formation & Registration",
    type: "info" as const,
    content: [
      "Each squad must consist of exactly 4 players - no more, no less",
      "Team name must be unique, appropriate, and between 3-20 characters",
      "All 4 players' BGMI IDs and in-game names must be accurate and verified",
      "Team leader/captain must provide a valid WhatsApp number for all official communications",
      "Squad members cannot be changed after registration deadline",
      "Each player can only be part of one squad per tournament",
      "Payment verification is mandatory before slot confirmation",
    ],
  },
  {
    title: "Payment & Verification Process",
    type: "info" as const,
    content: [
      "Entry fee: ₹80 per squad (covers all 4 players)",
      "Payment must be made via official GameArena QR code only",
      "Upload a clear, unedited screenshot of payment confirmation",
      "Enter the exact Transaction ID/Reference Number from your payment",
      "Payment deadline is 2 hours before tournament start time",
      "Slots will be automatically canceled if payment is not verified in time",
      "No refunds after payment verification",
    ],
  },
  {
    title: "Tournament Conduct & Gameplay Rules",
    type: "success" as const,
    content: [
      "Absolutely no hacks, cheats, emulators, or third-party applications",
      "All squad members must demonstrate good sportsmanship at all times",
      "Follow room ID and password shared by tournament admin exactly",
      "All 4 squad members must be online 15 minutes before tournament start",
      "Use push-to-talk or mute when not communicating with team",
      "Follow admin instructions promptly - non-compliance leads to penalties",
      "Screen recording is recommended for dispute resolution",
      "Team leader is fully responsible for squad coordination and communication",
    ],
  },
  {
    title: "Prize Distribution & Rewards",
    type: "success" as const,
    content: [
      "1st Place Winner Squad: ₹350 (team prize)",
      "2nd Place Runner-Up Squad: ₹250 (team prize)",
      "Per Kill Bonus: ₹9 per kill (accumulated for entire squad)",
      "Prizes distributed within 24-48 hours after tournament completion",
      "Team leader must provide valid UPI ID for prize transfer",
      "Prize transferred to team leader for distribution among members",
      "Winners may be featured on our social media channels",
      "Top performers receive priority access to future tournaments",
    ],
  },
  {
    title: "Disqualification & Penalty Policy",
    type: "warning" as const,
    content: [
      "Providing incorrect, incomplete, or fake squad details",
      "Payment verification failure or fraudulent payment proof",
      "Use of unauthorized applications, hacks, or cheats by any squad member",
      "Toxic behavior, harassment, or abusive language by any team member",
      "Not following admin instructions or tournament rules",
      "Playing with different squad members than those registered",
      "Incomplete squad (less than 4 players) during tournament match",
      "Multiple rule violations may lead to permanent tournament ban",
      "Absolutely no refunds in case of disqualification for rule violations",
    ],
  },
  {
    title: "Communication & Support",
    type: "info" as const,
    content: [
      "All official announcements via WhatsApp to registered team leader",
      "Room credentials shared 30 minutes before match start",
      "Emergency support available via admin WhatsApp during tournament",
      "Report technical issues immediately to tournament admin",
      "Squad substitutions only allowed with 24-hour advance notice and admin approval",
      "Tournament delays communicated promptly to all registered teams",
    ],
  },
];

const enhancedFAQs = [
  {
    title: "How do I form a squad for the tournament?",
    type: "info" as const,
    content: [
      "Gather 3 friends or teammates who play BGMI regularly",
      "Decide on a unique squad name that represents your team",
      "Choose one person as team leader/captain for all communications",
      "Collect all 4 players' BGMI IDs, in-game names, and contact details",
      "Ensure all members are available for the tournament date and time",
      "Have the team leader complete registration with accurate details",
    ],
  },
  {
    title: "What are the responsibilities of a squad captain/leader?",
    type: "info" as const,
    content: [
      "Register the squad with accurate details of all 4 members",
      "Make payment and upload payment proof on behalf of the squad",
      "Receive and share room credentials with all squad members",
      "Ensure all members are online 15 minutes before tournament",
      "Act as primary point of contact with tournament admins",
      "Coordinate team strategy and role assignments",
      "Receive prize money and distribute to squad members",
      "Handle any disputes or issues that arise during the tournament",
    ],
  },
  {
    title: "Can I change squad members after registration?",
    type: "warning" as const,
    content: [
      "Generally, squad members cannot be changed after registration closes",
      "Emergency substitutions may be allowed with 24-hour advance notice",
      "Contact admin immediately if a member cannot participate",
      "Substitutions require admin approval and valid reason",
      "Original registered player details may need verification",
      "Last-minute changes may not be possible due to tournament logistics",
    ],
  },
  {
    title: "What happens if one squad member doesn't show up?",
    type: "warning" as const,
    content: [
      "Your squad will be disqualified if all 4 members are not present",
      "Tournament requires full 4-player squads for fair competition",
      "Incomplete squads cannot participate in the match",
      "No refunds issued for squad member no-shows",
      "Always have backup communication with all team members",
      "Confirm attendance from all members before tournament day",
    ],
  },
  {
    title: "How should we assign roles within our squad?",
    type: "success" as const,
    content: [
      "IGL (In-Game Leader): Makes strategic calls and rotation decisions",
      "Fragger: Aggressive player focused on eliminations and pushing enemies",
      "Support: Provides cover fire, revives teammates, manages supplies",
      "Sniper: Long-range specialist for zone control and information gathering",
      "Roles can be flexible based on situation and team strengths",
      "Practice role coordination before tournament for better synergy",
      "Communication is key - ensure everyone knows their primary role",
    ],
  },
  {
    title: "What is the tournament format and duration?",
    type: "info" as const,
    content: [
      "Classic Battle Royale format with 25 squads (100 players total)",
      "Match duration: 25-35 minutes depending on zone progression",
      "Check-in starts 30 minutes before match time",
      "All squads must join lobby 15 minutes before start",
      "Single match tournament with placement and kill points",
      "Results announced within 30 minutes of match completion",
    ],
  },
  {
    title: "How are prizes distributed among squad members?",
    type: "success" as const,
    content: [
      "Prize money transferred to team leader's UPI account",
      "Team leader responsible for distributing shares to members",
      "Common split: divide equally among all 4 members (25% each)",
      "Some teams give higher share to top fraggers or IGL",
      "Decide distribution method within your squad beforehand",
      "GameArena only transfers to team leader, internal split is squad's decision",
      "Prize transfer happens within 24-48 hours after tournament",
    ],
  },
  {
    title: "What if there's a technical issue during the tournament?",
    type: "info" as const,
    content: [
      "Contact tournament admin immediately via WhatsApp",
      "Screen recording helps in case of dispute resolution",
      "Network issues are player's responsibility - ensure stable connection",
      "Game crashes: admin may allow rejoin if reported immediately",
      "Server-side issues: admin may pause or reschedule if affecting multiple teams",
      "Individual player technical issues generally don't qualify for rematch",
    ],
  },
  {
    title: "Can we practice together before the tournament?",
    type: "success" as const,
    content: [
      "Highly recommended to practice with your squad beforehand",
      "Practice communication, callouts, and role coordination",
      "Try different drop locations and rotation strategies",
      "Ensure all members understand the tournament rules",
      "Test everyone's device performance and network stability",
      "Watch our strategy videos for tips and tactics",
    ],
  },
  {
    title: "What communication tools should we use during the match?",
    type: "info" as const,
    content: [
      "In-game voice chat is allowed and recommended",
      "Discord or TeamSpeak for better voice quality (optional)",
      "WhatsApp call as backup communication method",
      "Ensure all squad members can hear each other clearly",
      "Use push-to-talk to minimize background noise",
      "Test communication setup before tournament starts",
    ],
  },
  {
    title: "Are there any restrictions on squad names?",
    type: "warning" as const,
    content: [
      "Must be appropriate and family-friendly",
      "No offensive, vulgar, or discriminatory names",
      "No impersonation of official organizations or other teams",
      "3-20 characters in length recommended",
      "Special characters allowed but keep it readable",
      "Admin reserves right to reject inappropriate names",
    ],
  },
  {
    title: "What happens if our squad wins?",
    type: "success" as const,
    content: [
      "You'll be announced as winners immediately after results verification",
      "Prize money (₹350 for 1st, ₹250 for 2nd, plus kill bonuses) transferred to team leader",
      "Team may be featured on GameArena social media channels",
      "Winners receive priority access to future premium tournaments",
      "Your squad name added to our Hall of Champions",
      "Possible invitation to special invitational tournaments",
    ],
  },
];

const testimonials = [
  {
    name: "Alpha Squad",
    role: "Tournament Winners - October 2024",
    content: "GameArena's squad tournaments are incredibly well-organized. The payment process was smooth, admin support was excellent, and prize distribution was prompt. Our team had an amazing experience!",
    initials: "AS",
    rating: 5,
  },
  {
    name: "Vikram Patel",
    role: "IGL - Phoenix Gamers",
    content: "As a squad captain, I appreciate how easy GameArena makes registration and communication. The tournament rules are clear, fair play is enforced, and the competitive environment is top-notch.",
    initials: "VP",
    rating: 5,
  },
  {
    name: "Shadow Warriors",
    role: "Runner-Up - September 2024",
    content: "Best BGMI tournament platform we've participated in. Fair gameplay, professional admins, and the per-kill bonus system makes every fight worthwhile. Looking forward to the next tournament!",
    initials: "SW",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Fragger - Elite Squad",
    content: "The squad tournament format is perfect for competitive gameplay. We loved the team coordination aspect and the prize distribution was exactly as promised. Highly recommend GameArena!",
    initials: "RM",
    rating: 5,
  },
  {
    name: "Thunderbolts",
    role: "Top 5 Finishers - November 2024",
    content: "Even though we didn't win, we had an incredible tournament experience. The competition was intense, rules were fair, and we learned a lot. Can't wait for the next squad tournament!",
    initials: "TB",
    rating: 4,
  },
];

const pastWinners = [
  {
    squadName: "Alpha Predators",
    members: ["SK_Sniper", "Alpha_Rush", "Medic_Pro", "Scout_Elite"],
    placement: "1st Place",
    kills: 24,
    prize: "₹350 + ₹216 (kills)",
    date: "November 2024",
  },
  {
    squadName: "Phoenix Squad",
    members: ["Phoenix_IGL", "Flame_Fragger", "Ash_Support", "Blaze_Sniper"],
    placement: "1st Place",
    kills: 19,
    prize: "₹350 + ₹171 (kills)",
    date: "October 2024",
  },
  {
    squadName: "Shadow Warriors",
    members: ["Shadow_King", "Dark_Assassin", "Phantom_Pro", "Ghost_Hunter"],
    placement: "1st Place",
    kills: 21,
    prize: "₹350 + ₹189 (kills)",
    date: "September 2024",
  },
  {
    squadName: "Elite Legends",
    members: ["Legend_IGL", "Elite_Fragger", "Pro_Medic", "Snipe_Master"],
    placement: "1st Place",
    kills: 18,
    prize: "₹350 + ₹162 (kills)",
    date: "August 2024",
  },
];

const leaderboardData = [
  { rank: 1, squadName: "Alpha Predators", kills: 24, placement: "Winner", points: 124, prize: "₹566" },
  { rank: 2, squadName: "Thunder Squad", kills: 18, placement: "Runner-Up", points: 108, prize: "₹412" },
  { rank: 3, squadName: "Phoenix Gamers", kills: 15, placement: "3rd", points: 95, prize: "₹135" },
  { rank: 4, squadName: "Shadow Elite", kills: 12, placement: "4th", points: 82, prize: "₹108" },
  { rank: 5, squadName: "Viper Squad", kills: 11, placement: "5th", points: 76, prize: "₹99" },
  { rank: 6, squadName: "Storm Troopers", kills: 9, placement: "6th", points: 69, prize: "₹81" },
  { rank: 7, squadName: "Elite Warriors", kills: 8, placement: "7th", points: 62, prize: "₹72" },
  { rank: 8, squadName: "Night Hunters", kills: 7, placement: "8th", points: 57, prize: "₹63" },
];

export default function Squad() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Modern Hero Section */}
        <ModernHero
          title="BGMI Squad Tournament"
          description="Assemble your elite 4-player squad and compete for glory. 25 teams, 100 players, one champion squad. Professional tournament with ₹350 winner prize, ₹250 runner-up prize, and ₹9 per kill bonus."
          backgroundImage={heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tournaments", href: "/" },
            { label: "Squad Tournament" },
          ]}
          ctaButtons={[
            { label: "Register Now", onClick: scrollToRegistration, variant: "default", icon: UserPlus },
            { label: "View Rules", href: "#rules", variant: "outline" },
          ]}
          overlayOpacity={0.75}
          minHeight="600px"
          data-testid="squad-hero"
        />

        {/* Stats Section */}
        <SectionWrapper variant="muted" data-testid="stats-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfessionalStatCard
              icon={Ticket}
              value={TOURNAMENTS.squad.entryFee}
              label="Entry Fee per Squad"
              prefix="₹"
              data-testid="stat-entry-fee"
            />
            <ProfessionalStatCard
              icon={Users}
              value={TOURNAMENTS.squad.slots}
              label="Total Squad Slots"
              data-testid="stat-total-slots"
            />
            <ProfessionalStatCard
              icon={Trophy}
              value={TOURNAMENTS.squad.winner}
              label="Winner Prize"
              prefix="₹"
              glassmorphism
              data-testid="stat-winner-prize"
            />
            <ProfessionalStatCard
              icon={Coins}
              value={TOURNAMENTS.squad.perKill}
              label="Per Kill Bonus"
              prefix="₹"
              data-testid="stat-per-kill"
            />
          </div>
        </SectionWrapper>

        {/* Registration Form - Moved Higher for Easy Access */}
        <SectionWrapper id="registration-section" data-testid="registration-form-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <UserPlus className="w-4 h-4 mr-2" />
              Register Now
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Squad Registration Form</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out all squad details accurately. Slots are limited to 25 teams!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FormEmbed
              formUrl={TOURNAMENTS.squad.formUrl}
              embedUrl={TOURNAMENTS.squad.embedUrl}
              title="BGMI Squad Tournament Registration"
              description="Please provide accurate details for all 4 squad members. Your slot will be confirmed after payment verification within 24 hours."
            />
          </div>
        </SectionWrapper>

        {/* Tournament Schedule Section */}
        <SectionWrapper data-testid="schedule-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Tournament Schedule
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Important Dates & Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mark your calendar with these key dates for the Squad Tournament
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-elevate" data-testid="schedule-registration">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <UserPlus className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Registration Opens</CardTitle>
                <CardDescription>November 15, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Squad registration begins. Early registration recommended as slots fill quickly!
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="schedule-deadline">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>Registration Deadline</CardTitle>
                <CardDescription>November 28, 2024 - 6:00 PM IST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Last date to register. Payment must be verified 2 hours before tournament.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="schedule-payment">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle>Payment Verification</CardTitle>
                <CardDescription>November 28, 2024 - 6:00 PM IST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All payments must be verified before this deadline. No late payments accepted.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="schedule-checkin">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-4/10 flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-chart-4" />
                </div>
                <CardTitle>Squad Check-In</CardTitle>
                <CardDescription>November 30, 2024 - 7:30 PM IST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Room credentials shared. All 4 squad members must confirm attendance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="schedule-tournament">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tournament Match</CardTitle>
                <CardDescription>November 30, 2024 - 8:00 PM IST</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Main tournament begins. Expected duration: 25-35 minutes. Be ready!
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="schedule-results">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>Results & Prizes</CardTitle>
                <CardDescription>November 30-December 2, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Results announced immediately. Prize distribution within 24-48 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Prize Breakdown Visualization */}
        <SectionWrapper variant="muted" data-testid="prize-breakdown-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              Prize Pool
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Detailed Prize Breakdown</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to win with placement prizes and per-kill bonuses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="relative overflow-hidden hover-elevate" data-testid="prize-winner">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600" />
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-4 shadow-lg">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Winner Squad</CardTitle>
                  <CardDescription>1st Place Champion</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-5xl font-bold text-primary mb-2">₹350</p>
                    <p className="text-sm text-muted-foreground">Base Prize Money</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-2">Plus Kill Bonuses</p>
                    <p className="text-2xl font-bold text-chart-2">₹9 × Kills</p>
                    <p className="text-xs text-muted-foreground mt-1">Example: 20 kills = ₹180 extra</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-primary">Total Potential: ₹530+</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="relative overflow-hidden hover-elevate" data-testid="prize-runnerup">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500" />
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center mb-4 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Runner-Up Squad</CardTitle>
                  <CardDescription>2nd Place</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-5xl font-bold text-primary mb-2">₹250</p>
                    <p className="text-sm text-muted-foreground">Base Prize Money</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-2">Plus Kill Bonuses</p>
                    <p className="text-2xl font-bold text-chart-2">₹9 × Kills</p>
                    <p className="text-xs text-muted-foreground mt-1">Example: 15 kills = ₹135 extra</p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-primary">Total Potential: ₹385+</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden hover-elevate" data-testid="prize-kills">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-chart-2 via-chart-3 to-chart-4" />
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-chart-2 to-chart-4 flex items-center justify-center mb-4 shadow-lg">
                    <Crosshair className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Per Kill Bonus</CardTitle>
                  <CardDescription>All Squads</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="text-5xl font-bold text-chart-2 mb-2">₹9</p>
                    <p className="text-sm text-muted-foreground">Per Elimination</p>
                  </div>
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">5 kills:</span>
                      <span className="font-semibold">₹45</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">10 kills:</span>
                      <span className="font-semibold">₹90</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">15 kills:</span>
                      <span className="font-semibold">₹135</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">20 kills:</span>
                      <span className="font-semibold">₹180</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">Every elimination counts!</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20" data-testid="prize-example">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Example Prize Calculation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Placement Prize</p>
                  <p className="text-3xl font-bold text-primary">₹350</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Squad Kills: 18</p>
                  <p className="text-3xl font-bold text-chart-2">₹162</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Total Winnings</p>
                  <p className="text-3xl font-bold text-chart-3">₹512</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </SectionWrapper>

        {/* Past Winners Showcase */}
        <SectionWrapper data-testid="past-winners-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Hall of Champions
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Past Squad Champions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating our previous tournament winners and their incredible performances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastWinners.map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate" data-testid={`past-winner-${index}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl flex items-center gap-2">
                          <Trophy className="w-6 h-6 text-primary" />
                          {winner.squadName}
                        </CardTitle>
                        <CardDescription className="mt-2">{winner.date}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {winner.placement}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Squad Members</p>
                      <div className="grid grid-cols-2 gap-2">
                        {winner.members.map((member, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Total Kills</p>
                        <p className="text-2xl font-bold text-chart-2">{winner.kills}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Total Prize</p>
                        <p className="text-2xl font-bold text-primary">{winner.prize}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Squad Roles & Strategy */}
        <SectionWrapper variant="muted" data-testid="squad-roles-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Strategy Guide
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Squad Roles & Tactics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding squad roles is crucial for competitive success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-elevate" data-testid="role-igl">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Radio className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>IGL (In-Game Leader)</CardTitle>
                <CardDescription>Strategic Commander</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Makes rotation and positioning calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Decides when to engage or avoid fights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Manages team resources and inventory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Coordinates zone entries and final circles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="role-fragger">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                  <Crosshair className="w-7 h-7 text-chart-2" />
                </div>
                <CardTitle>Fragger</CardTitle>
                <CardDescription>Aggressive Eliminator</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span>Leads pushes and aggressive plays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span>Focuses on maximum eliminations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span>Expert in close-quarter combat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span>Creates pressure on enemy squads</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="role-support">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-chart-3/10 flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-chart-3" />
                </div>
                <CardTitle>Support</CardTitle>
                <CardDescription>Team Backbone</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Provides covering fire for teammates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Prioritizes revives and healing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Manages utilities (smokes, nades)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Holds defensive positions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="role-sniper">
              <CardHeader>
                <div className="w-14 h-14 rounded-full bg-chart-4/10 flex items-center justify-center mb-4">
                  <Eye className="w-7 h-7 text-chart-4" />
                </div>
                <CardTitle>Sniper</CardTitle>
                <CardDescription>Long-Range Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                    <span>Controls zones with long-range fire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                    <span>Gathers intelligence on enemy positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                    <span>Knocks enemies before squad pushes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                    <span>Provides overwatch during rotations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-primary/5 border-primary/20" data-testid="strategy-tips">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Pro Tips for Squad Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Practice communication and callouts before tournament</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Assign roles based on each player's strengths</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Develop backup plans for different zone scenarios</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Share loot fairly and prioritize squad over individual stats</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </SectionWrapper>

        {/* Live Leaderboard Preview */}
        <SectionWrapper data-testid="leaderboard-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Live Standings
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Tournament Leaderboard Preview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Example leaderboard from our previous squad tournament
            </p>
          </div>

          <Card data-testid="leaderboard-table">
            <CardHeader>
              <CardTitle>Final Standings</CardTitle>
              <CardDescription>Top 8 squads from November 2024 Tournament</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Rank</th>
                      <th className="text-left p-3 font-semibold">Squad Name</th>
                      <th className="text-center p-3 font-semibold">Placement</th>
                      <th className="text-center p-3 font-semibold">Kills</th>
                      <th className="text-center p-3 font-semibold">Points</th>
                      <th className="text-right p-3 font-semibold">Prize</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((squad, index) => (
                      <motion.tr
                        key={squad.rank}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`border-b hover-elevate transition-all ${
                          squad.rank === 1 ? 'bg-primary/5' : 
                          squad.rank === 2 ? 'bg-chart-2/5' : ''
                        }`}
                        data-testid={`leaderboard-row-${squad.rank}`}
                      >
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            {squad.rank === 1 && <Trophy className="w-5 h-5 text-yellow-500" />}
                            {squad.rank === 2 && <Award className="w-5 h-5 text-slate-400" />}
                            {squad.rank === 3 && <Award className="w-5 h-5 text-orange-600" />}
                            <span className="font-bold">#{squad.rank}</span>
                          </div>
                        </td>
                        <td className="p-3 font-medium">{squad.squadName}</td>
                        <td className="p-3 text-center">
                          <Badge variant={squad.rank <= 2 ? "default" : "secondary"}>
                            {squad.placement}
                          </Badge>
                        </td>
                        <td className="p-3 text-center font-semibold text-chart-2">{squad.kills}</td>
                        <td className="p-3 text-center font-semibold">{squad.points}</td>
                        <td className="p-3 text-right font-bold text-primary">{squad.prize}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </SectionWrapper>

        {/* Registration Timeline */}
        <SectionWrapper variant="muted" data-testid="timeline-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Registration Process
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Squad Registration Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to register your 4-player squad
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Assemble Your Squad",
                    description: "Gather your 3 teammates and choose a unique squad name. Collect all players' BGMI IDs and in-game names.",
                    icon: Users,
                  },
                  {
                    step: 2,
                    title: "Choose Squad Captain",
                    description: "Select one team member as captain/leader who will handle registration and be the main point of contact.",
                    icon: Shield,
                  },
                  {
                    step: 3,
                    title: "Complete Registration Form",
                    description: "Squad captain fills out the registration form with accurate details of all 4 players including BGMI IDs and contact info.",
                    icon: FileText,
                  },
                  {
                    step: 4,
                    title: "Make Payment",
                    description: "Pay ₹80 entry fee via official GameArena QR code. Take a clear screenshot of the payment confirmation.",
                    icon: CreditCard,
                  },
                  {
                    step: 5,
                    title: "Upload Payment Proof",
                    description: "Upload payment screenshot and enter transaction ID in the registration form. Wait for admin verification.",
                    icon: CheckCircle2,
                  },
                  {
                    step: 6,
                    title: "Confirmation & Room Details",
                    description: "Receive confirmation message. Room credentials will be shared 30 minutes before tournament. All 4 members must join!",
                    icon: Bell,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                    data-testid={`timeline-step-${item.step}`}
                  >
                    <div className="flex items-start gap-6 md:gap-8">
                      {/* Icon - Left side on mobile, center on desktop */}
                      <div className={`relative flex-shrink-0 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
                          <item.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">{item.step}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ${index % 2 === 0 ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8 md:text-right'}`}>
                        <Card className="hover-elevate">
                          <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Spacer for desktop layout */}
                      <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'md:order-3' : 'md:order-0'}`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Squad Testimonials */}
        <SectionWrapper data-testid="testimonials-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Player Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Squads Are Saying</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our previous tournament participants and champions
            </p>
          </div>

          <ModernTestimonials testimonials={testimonials} autoPlay autoPlayInterval={6000} />
        </SectionWrapper>

        {/* Enhanced FAQ Section */}
        <SectionWrapper variant="muted" data-testid="faq-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Squad Tournament FAQs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about squad formation, registration, and gameplay
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <RulesAccordion rules={enhancedFAQs} />
          </div>
        </SectionWrapper>

        {/* Tournament Rules Deep Dive */}
        <SectionWrapper data-testid="rules-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Official Rules
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Detailed Tournament Rules</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete guidelines for squad registration, gameplay, and prize distribution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <RulesAccordion rules={squadRules} />
          </div>
        </SectionWrapper>

        {/* Payment Instructions */}
        <SectionWrapper variant="muted" data-testid="payment-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <CreditCard className="w-4 h-4 mr-2" />
              Payment Details
            </Badge>
            <h2 className="text-4xl font-bold mb-4">How to Make Payment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure payment process for squad registration
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <PaymentInstructions amount={80} />
          </div>
        </SectionWrapper>

        {/* Video Strategy Guide */}
        <SectionWrapper variant="muted" data-testid="video-strategy-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Squad Strategy Guide
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Master Squad Tactics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn winning strategies from professional BGMI squad gameplay
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoSection
              title="Advanced Squad Coordination Tactics"
              description="Watch this comprehensive guide on squad roles, communication strategies, and winning techniques for Battle Royale tournaments."
              videoId="dQw4w9WgXcQ"
            />
          </div>
        </SectionWrapper>

        {/* Tournament Gallery with MediaLightbox */}
        <SectionWrapper data-testid="gallery-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Tournament Gallery
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Squad Tournament Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the intensity and excitement from our previous tournaments
            </p>
          </div>

          <MediaLightbox
            items={[
              { src: actionImage1, alt: "Intense squad combat in final zone", caption: "Final circle squad battle" },
              { src: actionImage2, alt: "Professional esports squad coordination", caption: "Team coordination in action" },
              { src: actionImage3, alt: "Squad tournament gameplay", caption: "Strategic positioning" },
              { src: tournamentImage1, alt: "Tournament arena atmosphere", caption: "Tournament day excitement" },
              { src: tournamentImage2, alt: "Competitive gaming tournament", caption: "Professional setup" },
              { src: esportsImage1, alt: "Mobile esports competition", caption: "Mobile gaming excellence" },
              { src: esportsImage2, alt: "Esports tournament action", caption: "Competitive gaming" },
              { src: techImage1, alt: "Gaming technology and setup", caption: "Professional gaming gear" },
              { src: techImage2, alt: "Modern gaming workspace", caption: "Optimal gaming environment" },
              { src: techImage3, alt: "Gaming technology innovation", caption: "Latest gaming tech" },
              { src: businessImage1, alt: "Professional tournament organization", caption: "Tournament management" },
              { src: heroImage, alt: "Championship squad celebration", caption: "Victory moment" },
            ]}
            columns={{ sm: 1, md: 2, lg: 3 }}
          />
        </SectionWrapper>

        {/* CTA Band */}
        <SectionWrapper variant="default">
          <CTABand
            title="Ready to Compete?"
            description="Join 25 elite squads in the ultimate BGMI showdown. Register your squad now before slots fill up!"
            variant="gradient"
            icon={Trophy}
            buttons={[
              { label: "Register Your Squad", onClick: scrollToRegistration, variant: "secondary", icon: UserPlus },
              { label: "View Full Rules", href: "#rules", variant: "outline" },
            ]}
            data-testid="cta-band"
          />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
