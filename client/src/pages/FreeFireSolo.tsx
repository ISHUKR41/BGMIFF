/**
 * Free Fire Max Solo Tournament Page Component
 * 
 * Dedicated page for Free Fire Max Solo Tournament registration and information.
 * 
 * Key Sections:
 * 1. Hero Section - Tournament banner with registration CTA
 * 2. Tournament Stats - Entry fee, slots, prizes displayed as animated cards
 * 3. Feature Highlight - Detailed benefits of solo tournament participation
 * 4. Prize Breakdown Charts - Visual representation of prize distribution
 * 5. Registration Timeline - Step-by-step registration process
 * 6. Tournament Schedule - Important dates and times
 * 7. Detailed Rules - Comprehensive rules organized by category with accordions
 * 8. Payment Instructions - QR code and payment verification process
 * 9. Leaderboard - Current/past tournament standings
 * 10. Past Winners - Showcase of previous tournament champions
 * 11. FAQ Section - Common questions specific to solo tournaments
 * 12. Player Testimonials - Reviews from solo tournament participants
 * 13. Strategy Tips - Gameplay advice for Free Fire solo mode
 * 14. Image Gallery - Action shots from past solo tournaments
 * 15. Registration Form - Google Forms embed for tournament signup
 * 
 * This page provides all necessary information for solo players to understand,
 * register for, and participate in Free Fire Max solo tournaments.
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ModernHero from "@/components/ModernHero";
import SectionWrapper from "@/components/SectionWrapper";
import ProfessionalStatCard from "@/components/ProfessionalStatCard";
import RulesAccordion from "@/components/RulesAccordion";
import PaymentInstructions from "@/components/PaymentInstructions";
import MediaLightbox from "@/components/MediaLightbox";
import ModernTestimonials from "@/components/ModernTestimonials";
import CTABand from "@/components/CTABand";
import { FREEFIRE_TOURNAMENTS } from "@shared/config";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  Trophy, 
  Users, 
  Coins, 
  Ticket, 
  Calendar, 
  Clock, 
  Target,
  Award,
  Zap,
  Shield,
  Wifi,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Star,
  TrendingUp,
  Medal,
  Crown,
  Play,
  ExternalLink
} from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from "recharts";

// Import Free Fire Max action images for gallery and hero section
import heroImage from "@assets/generated_images/Free_Fire_solo_player_action_89936b71.png";
import tournamentImage1 from "@assets/generated_images/Free_Fire_hero_battle_scene_a40d612c.png";
import tournamentImage2 from "@assets/generated_images/Free_Fire_combat_firefight_scene_0a317ba9.png";
import tournamentImage3 from "@assets/generated_images/Free_Fire_victory_celebration_45370171.png";
import esportsImage1 from "@assets/generated_images/Free_Fire_tournament_competitive_scene_5bc9ee86.png";
import esportsImage2 from "@assets/generated_images/Free_Fire_weapon_showcase_60414721.png";
import gamingImage1 from "@assets/generated_images/Free_Fire_character_lineup_2e5c6102.png";
import gamingImage2 from "@assets/generated_images/Free_Fire_championship_trophy_26620803.png";

// Prize breakdown data for visual pie chart
// Shows distribution of total prize pool across different categories for Free Fire Max tournament
const prizeBreakdownData = [
  { name: "Winner", value: FREEFIRE_TOURNAMENTS.solo.winner, percentage: 45, fill: "hsl(var(--chart-1))" },
  { name: "Runner-Up", value: FREEFIRE_TOURNAMENTS.solo.runnerUp, percentage: 30, fill: "hsl(var(--chart-2))" },
  { name: "Per Kill Pool", value: 250, percentage: 25, fill: "hsl(var(--chart-3))" },
];

// Kill rewards breakdown table data
// Shows potential earnings based on elimination count in Free Fire Max
const killRewardsData = [
  { kills: "0-5", reward: `₹0-${FREEFIRE_TOURNAMENTS.solo.perKill * 5}` },
  { kills: "6-10", reward: `₹${FREEFIRE_TOURNAMENTS.solo.perKill * 6}-${FREEFIRE_TOURNAMENTS.solo.perKill * 10}` },
  { kills: "11-15", reward: `₹${FREEFIRE_TOURNAMENTS.solo.perKill * 11}-${FREEFIRE_TOURNAMENTS.solo.perKill * 15}` },
  { kills: "16+", reward: `₹${FREEFIRE_TOURNAMENTS.solo.perKill * 16}+` },
];

// Historical data of past Free Fire Max solo tournament winners
// Showcases top performers and their achievements
const pastWinners = [
  {
    name: "PhoenixFlame_YT",
    kills: 15,
    prize: "₹425",
    date: "October 18, 2025",
    avatar: "PF",
    placement: 1,
  },
  {
    name: "BlazeKnight_Pro",
    kills: 13,
    prize: "₹415",
    date: "October 2, 2025",
    avatar: "BK",
    placement: 1,
  },
  {
    name: "VenomStrike_GG",
    kills: 17,
    prize: "₹435",
    date: "September 15, 2025",
    avatar: "VS",
    placement: 1,
  },
  {
    name: "ThunderBolt_YT",
    kills: 14,
    prize: "₹420",
    date: "September 1, 2025",
    avatar: "TB",
    placement: 1,
  },
];

// Current tournament leaderboard for display
// In production, this would be fetched from backend API
const mockLeaderboard = [
  { rank: 1, player: "DragonSlayer_Pro", kills: 10, points: 72, prize: "₹400" },
  { rank: 2, player: "NinjaWarrior_YT", kills: 9, points: 68, prize: "₹195" },
  { rank: 3, player: "EliteShooter_GG", kills: 8, points: 65, prize: "₹40" },
  { rank: 4, player: "ShadowHunter_Pro", kills: 9, points: 63, prize: "₹45" },
  { rank: 5, player: "ViperStrike_YT", kills: 7, points: 60, prize: "₹35" },
  { rank: 6, player: "FireStorm_GG", kills: 6, points: 58, prize: "₹30" },
  { rank: 7, player: "IronFist_Pro", kills: 8, points: 56, prize: "₹40" },
  { rank: 8, player: "BlazeMaster_YT", kills: 5, points: 54, prize: "₹25" },
  { rank: 9, player: "ThunderGod_GG", kills: 7, points: 52, prize: "₹35" },
  { rank: 10, player: "PhantomKing_Pro", kills: 6, points: 50, prize: "₹30" },
];

// Player testimonials specific to Free Fire Max solo tournament experiences
// Real feedback builds trust and credibility
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Solo Tournament Winner - Oct 2025",
    content: "GameArena's Free Fire Max tournaments are exceptionally well-organized. The registration was seamless, payment verification was instant, and I received my prize within 24 hours. Perfect platform for competitive Free Fire players!",
    initials: "RK",
    rating: 5,
  },
  {
    name: "Ananya Singh",
    role: "Regular Participant",
    content: "I've joined 6 Free Fire solo tournaments here. The admin team is super responsive and ensures fair play. The per-kill rewards make every booyah count. Highly recommend for Free Fire enthusiasts!",
    initials: "AS",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    role: "Top 3 Finisher - Sept 2025",
    content: "The tournament structure is perfect for Free Fire solo players. Entry fee is pocket-friendly, prize distribution is transparent, and the competition is intense. My gameplay has improved tremendously!",
    initials: "KM",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "First-time Participant",
    content: "As a beginner in tournaments, I was anxious, but the step-by-step instructions and helpful support made everything smooth. Fair competition and transparent process. Will definitely participate again!",
    initials: "PS",
    rating: 4,
  },
  {
    name: "Arjun Patel",
    role: "Multiple Tournament Winner",
    content: "GameArena hosts the most competitive Free Fire Max tournaments I've experienced. Fair prize system, aggressive gameplay rewards, and amazing community. This is where true Free Fire champions compete!",
    initials: "AP",
    rating: 5,
  },
];

// Comprehensive FAQ section for Free Fire Max solo tournaments
// Covers eligibility, registration, gameplay, prizes, and technical requirements
const faqs = [
  {
    question: "Who is eligible to participate in the Free Fire Max Solo Tournament?",
    answer: "Any Free Fire Max player aged 16 and above can participate. You must have a valid Free Fire Max account, a working WhatsApp number for communication, and a UPI ID for prize distribution. Players must be from India and comply with all Free Fire Max terms of service.",
  },
  {
    question: "How do I register for the tournament?",
    answer: "Registration is a simple 3-step process: (1) Pay the ₹20 entry fee via our official QR code, (2) Fill out the registration form with your Free Fire ID, In-Game Name, WhatsApp number, and transaction details, (3) Wait for admin verification. You'll receive confirmation within 2-4 hours.",
  },
  {
    question: "What happens if I don't receive room credentials?",
    answer: "Room credentials (Room ID and Password) are shared 30 minutes before the tournament start time via WhatsApp group. If you don't receive them, immediately contact admin on WhatsApp. Make sure you're added to the tournament group after registration.",
  },
  {
    question: "Can I get a refund if I can't play?",
    answer: "Refunds are only available if you inform us at least 6 hours before the tournament start time. If slots are canceled due to payment verification failure or rule violations, no refunds will be issued. In case of tournament cancellation from our side, full refunds are processed within 24 hours.",
  },
  {
    question: "How are kills verified for per-kill prizes?",
    answer: "All kills are tracked through in-game statistics. After the match, we verify the final results from Free Fire Max's official match stats. Players must share screenshots of their final stats for verification. Any discrepancy will be resolved by checking the match replay.",
  },
  {
    question: "What are the best strategies for Free Fire Max Solo tournaments?",
    answer: "Master character abilities and use them strategically. Land in high-loot areas but be ready for early combat. Utilize cover effectively and third-party fights when possible. In final zones, positioning is crucial. Practice headshot accuracy, gloo wall placements, and quick weapon switching for optimal performance.",
  },
  {
    question: "What devices and specs are recommended?",
    answer: "Minimum: 3GB RAM, Snapdragon 625 or equivalent processor, stable 4G/WiFi connection with 8+ Mbps speed. Recommended: 4GB+ RAM, Snapdragon 660 or better, 5G/WiFi with 20+ Mbps. Use latest Free Fire Max version and close background apps for best performance.",
  },
  {
    question: "What internet speed do I need?",
    answer: "Minimum 8 Mbps download and 4 Mbps upload speed with stable connection. We recommend 20+ Mbps for best experience. WiFi is preferred over mobile data. Test your connection before the tournament. High ping (>80ms) can affect gameplay negatively.",
  },
  {
    question: "How long does prize distribution take?",
    answer: "Prizes are distributed within 24-48 hours after tournament completion. Winners must provide valid UPI ID. We verify all results, calculate kill rewards, and process payments directly to your UPI. You'll receive payment confirmation on WhatsApp.",
  },
  {
    question: "What happens if there's a technical issue during the match?",
    answer: "If you face app crashes or network issues, rejoin immediately if possible. Game crashes beyond your control will be considered on case-by-case basis. Server-side issues affecting multiple players may lead to match restart. Always record your gameplay as proof if needed.",
  },
  {
    question: "Are there any restrictions on gameplay settings?",
    answer: "You can use any graphics settings, sensitivity, and button layout. However, use of hacks, emulators, or third-party apps is strictly prohibited and will result in permanent ban. Play fair and maintain sportsmanship at all times.",
  },
  {
    question: "Can I participate if I'm a beginner?",
    answer: "Absolutely! While our tournaments attract competitive players, beginners are welcome. It's a great way to test your skills, learn from experienced players, and improve your gameplay. Even if you don't win, the experience is valuable. Start with realistic expectations and focus on improvement.",
  },
];

// Comprehensive tournament rules organized by category
// Each category has a type (info/success/warning) for visual distinction
const detailedRules = [
  {
    title: "Registration Requirements",
    type: "info" as const,
    content: [
      "Must be 16 years or older to participate",
      "Fill registration form with accurate and complete details",
      "Free Fire ID and In-Game Name must match exactly - no variations allowed",
      "Provide working WhatsApp number for all tournament communications",
      "Payment verification is mandatory before slot confirmation",
      "Double-check all entered information before submission",
      "Only one entry per player allowed - duplicate entries will be disqualified",
    ],
  },
  {
    title: "Payment Process & Verification",
    type: "info" as const,
    content: [
      "Entry fee: ₹20 per player (non-refundable except in specific cases)",
      "Payment must be made via official GameArena UPI QR code only",
      "Upload clear, unedited screenshot of payment confirmation",
      "Note down and enter the correct Transaction ID/UPI Reference Number",
      "Payment verification typically takes 2-4 hours during business hours",
      "Slots will be canceled if payment cannot be verified within 24 hours",
      "Do not make payment to any other QR code or UPI ID - check official sources",
      "Keep payment receipt safe until tournament completion",
    ],
  },
  {
    title: "Match Rules & Gameplay",
    type: "success" as const,
    content: [
      "Be online 15 minutes before tournament start time - late entries not allowed",
      "Join the match using Room ID and Password shared via WhatsApp",
      "Map and match settings will be announced 1 hour before start time",
      "No use of hacks, cheats, mods, or third-party applications whatsoever",
      "Emulators are strictly prohibited - only mobile devices allowed",
      "Maintain sportsmanship and respect towards other players",
      "Follow all admin instructions during the tournament",
      "Recording your gameplay is recommended for dispute resolution",
    ],
  },
  {
    title: "Prize Distribution & Rewards",
    type: "success" as const,
    content: [
      "Winner (1st Place): ₹200 guaranteed",
      "Runner-Up (2nd Place): ₹150 guaranteed",
      "Per Kill Reward: ₹8 per elimination (verified from match stats)",
      "Total Prize Pool: ₹550+ (varies based on total kills)",
      "Prizes distributed within 24-48 hours after tournament",
      "Valid UPI ID required for prize transfer - must match registered name",
      "All kills verified from official Free Fire Max match statistics",
      "Winners must provide screenshot of final stats for verification",
      "Tax deductions may apply as per Indian regulations (if applicable)",
    ],
  },
  {
    title: "Fair Play & Anti-Cheat",
    type: "warning" as const,
    content: [
      "Zero tolerance policy for cheating, hacking, or unfair practices",
      "Suspicious activity will be investigated thoroughly",
      "Account sharing or player substitution is strictly prohibited",
      "Use of VPN, game boosters, or unauthorized apps will lead to ban",
      "Admin reserves right to check device and game version",
      "Match replays may be reviewed for suspicious gameplay",
      "Reports of cheating will be investigated with evidence",
      "Fair play ensures quality competition for all participants",
    ],
  },
  {
    title: "Disqualification Policy",
    type: "warning" as const,
    content: [
      "Providing incorrect, incomplete, or fraudulent registration details",
      "Payment verification failure or suspicious payment activity",
      "Use of unauthorized applications, cheats, hacks, or mods",
      "Toxic behavior, harassment, or abuse towards other players/admin",
      "Not following admin instructions or tournament guidelines",
      "Late entry or absence from match without prior notice",
      "Account sharing or playing from someone else's account",
      "No refunds issued in case of disqualification due to rule violations",
    ],
  },
  {
    title: "Communication & Support",
    type: "info" as const,
    content: [
      "All official communication via WhatsApp tournament group only",
      "Join the WhatsApp group link shared after registration confirmation",
      "Room credentials shared 30 minutes before tournament start",
      "Admin available for queries and support during tournament hours",
      "Report technical issues immediately via WhatsApp",
      "Check announcements regularly for updates and important info",
      "Disputes must be raised within 1 hour of match completion",
    ],
  },
];

// Step-by-step registration process visualization
// Helps players understand the complete registration workflow
const registrationSteps = [
  {
    title: "Make Payment",
    description: "Pay ₹20 entry fee via official QR code and save transaction screenshot",
    icon: Coins,
    time: "2 minutes",
  },
  {
    title: "Fill Registration Form",
    description: "Complete the form with Free Fire ID, name, WhatsApp number, and payment details",
    icon: CheckCircle2,
    time: "3 minutes",
  },
  {
    title: "Payment Verification",
    description: "Admin verifies your payment and confirms your tournament slot",
    icon: Shield,
    time: "2-4 hours",
  },
  {
    title: "Receive Credentials",
    description: "Get room ID and password via WhatsApp 30 minutes before match",
    icon: Zap,
    time: "Day of tournament",
  },
  {
    title: "Join Tournament",
    description: "Enter the match room and compete for prizes and glory",
    icon: Trophy,
    time: "Match time",
  },
];

// Tournament schedule timeline with important dates
// Displays registration period, credential distribution, and tournament timing
const scheduleData = [
  {
    stage: "Registration Opens",
    date: "November 1, 2025",
    time: "12:00 PM IST",
    status: "Open",
    description: "Start registering by making payment and filling form",
  },
  {
    stage: "Registration Closes",
    date: "November 8, 2025",
    time: "11:59 PM IST",
    status: "Upcoming",
    description: "Last date to register - slots confirmed on first-come basis",
  },
  {
    stage: "Credentials Distribution",
    date: "November 9, 2025",
    time: "5:30 PM IST",
    status: "Upcoming",
    description: "Room ID and Password shared via WhatsApp group",
  },
  {
    stage: "Tournament Begins",
    date: "November 9, 2025",
    time: "6:00 PM IST",
    status: "Upcoming",
    description: "Match starts - be online 15 minutes early",
  },
  {
    stage: "Results & Distribution",
    date: "November 10, 2025",
    time: "2:00 PM IST",
    status: "Upcoming",
    description: "Winners announced and prizes distributed within 48 hours",
  },
];

export default function FreeFireSolo() {
  /**
   * Smooth scroll to registration section
   * Provides quick navigation from CTA buttons to registration form
   */
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section with ModernHero - Tournament banner with striking visuals */}
        <ModernHero
          title="Free Fire Max Solo Tournament"
          description="Compete individually in India's most exciting Free Fire Max solo battle royale tournament. 50 players enter, only one claims victory. Test your skills, win amazing prizes, and prove you're the ultimate Free Fire warrior."
          backgroundImage={heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tournaments", href: "/#tournaments" },
            { label: "Free Fire Solo" },
          ]}
          ctaButtons={[
            { 
              label: "Register Now", 
              onClick: scrollToRegistration,
              variant: "default",
              icon: Trophy 
            },
            { 
              label: "View Schedule", 
              href: "#schedule",
              variant: "outline",
              icon: Calendar 
            },
          ]}
          overlayOpacity={0.8}
          minHeight="600px"
        />

        {/* Tournament Stats - Display key tournament information with animated cards */}
        <SectionWrapper variant="muted" data-testid="section-stats">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfessionalStatCard
              icon={Ticket}
              value={FREEFIRE_TOURNAMENTS.solo.entryFee}
              label="Entry Fee"
              prefix="₹"
              glassmorphism
              data-testid="stat-entry-fee"
            />
            <ProfessionalStatCard
              icon={Users}
              value={FREEFIRE_TOURNAMENTS.solo.slots}
              label="Total Slots"
              glassmorphism
              delay={0.1}
              data-testid="stat-total-slots"
            />
            <ProfessionalStatCard
              icon={Trophy}
              value={FREEFIRE_TOURNAMENTS.solo.winner}
              label="Winner Prize"
              prefix="₹"
              glassmorphism
              delay={0.2}
              data-testid="stat-winner-prize"
            />
            <ProfessionalStatCard
              icon={Coins}
              value={FREEFIRE_TOURNAMENTS.solo.perKill}
              label="Per Kill Reward"
              prefix="₹"
              glassmorphism
              delay={0.3}
              data-testid="stat-per-kill"
            />
          </div>
        </SectionWrapper>

        {/* Comprehensive Feature Highlight Card - Solo Tournament Benefits */}
        <SectionWrapper variant="default" data-testid="section-feature-highlight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-elevate transition-all duration-300 overflow-hidden" data-testid="feature-solo-tournament">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section - Showcase tournament action */}
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Free Fire Max Solo Tournament Championship"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Content Section - Highlight tournament benefits */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">Solo Tournament Excellence</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Experience competitive Free Fire Max solo gameplay with guaranteed prizes and professional tournament management
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Guaranteed Prize Pool</h4>
                        <p className="text-sm text-muted-foreground">Winner: ₹350 | Runner-Up: ₹150 | Per Kill: ₹5 - Prizes distributed within 24-48 hours via UPI</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Secure Registration Process</h4>
                        <p className="text-sm text-muted-foreground">SSL encrypted payments with screenshot verification - Slot confirmation within 2-4 hours via WhatsApp</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Fair Play Guaranteed</h4>
                        <p className="text-sm text-muted-foreground">Advanced anti-cheat monitoring with zero tolerance for hacks - Your skill determines your success</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Professional Management</h4>
                        <p className="text-sm text-muted-foreground">Experienced organizers, 24/7 WhatsApp support, and transparent operations from start to finish</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button onClick={scrollToRegistration} data-testid="button-register-feature">
                      Register Now - ₹{FREEFIRE_TOURNAMENTS.solo.entryFee}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" data-testid="button-rules-feature">
                      <a href="#rules" className="flex items-center">
                        View Tournament Rules
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Prize Breakdown Section - Visual representation of prize distribution */}
        <SectionWrapper variant="muted" data-testid="section-prize-breakdown">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-prize-breakdown">Prize Distribution</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent and guaranteed prize pool. Win big by securing top positions and eliminating opponents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Prize Pool Breakdown Pie Chart */}
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle>Prize Pool Distribution</CardTitle>
                  <CardDescription>Total prize money allocation across categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={prizeBreakdownData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percentage }) => `${name}: ${percentage}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {prizeBreakdownData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip content={<ChartTooltipContent />} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Kill Rewards Table */}
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle>Per Kill Rewards</CardTitle>
                  <CardDescription>Earn ₹{FREEFIRE_TOURNAMENTS.solo.perKill} for every elimination</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Kill Count</TableHead>
                        <TableHead className="text-right">Reward</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {killRewardsData.map((row, index) => (
                        <TableRow key={index} data-testid={`kill-reward-row-${index}`}>
                          <TableCell className="font-medium">{row.kills} kills</TableCell>
                          <TableCell className="text-right font-bold text-primary">{row.reward}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <div className="mt-4 p-4 bg-primary/5 rounded-md">
                    <p className="text-sm text-center">
                      <Star className="w-4 h-4 inline mr-1 text-primary" />
                      Aggressive gameplay pays off! Maximize your earnings with high kills.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Tournament Schedule - Important dates and timeline */}
        <SectionWrapper id="schedule" data-testid="section-schedule">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-schedule">Tournament Schedule</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mark your calendar with these important dates. Stay on track from registration to prize distribution.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {scheduleData.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`schedule-item-${index}`}
                >
                  <Card className="hover-elevate transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                            <h3 className="font-bold text-lg">{schedule.stage}</h3>
                            <Badge 
                              variant={schedule.status === "Open" ? "default" : "secondary"}
                              data-testid={`schedule-status-${index}`}
                            >
                              {schedule.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {schedule.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {schedule.time}
                            </span>
                          </div>
                          <p className="text-muted-foreground">{schedule.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Payment Instructions - QR code and payment verification details */}
        <SectionWrapper variant="muted" data-testid="section-payment">
          <PaymentInstructions 
            amount={FREEFIRE_TOURNAMENTS.solo.entryFee}
          />
        </SectionWrapper>

        {/* Past Winners Showcase - Historical tournament champions */}
        <SectionWrapper data-testid="section-past-winners">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Crown className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-past-winners">Hall of Champions</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Celebrating our past tournament winners. Will you be the next champion?
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {pastWinners.map((winner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`past-winner-${index}`}
                >
                  <Card className="hover-elevate transition-all duration-300 text-center">
                    <CardContent className="p-6 space-y-4">
                      <div className="relative inline-block">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl font-bold text-primary">{winner.avatar}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                          <Crown className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{winner.name}</h3>
                        <p className="text-sm text-muted-foreground">{winner.date}</p>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Kills</span>
                          <Badge variant="secondary">{winner.kills}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Prize Won</span>
                          <Badge variant="default">{winner.prize}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Live Leaderboard Preview - Current tournament standings */}
        <SectionWrapper variant="muted" data-testid="section-leaderboard">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-leaderboard">Live Leaderboard Preview</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how the competition looks during tournaments. Rankings update in real-time based on points and eliminations.
              </p>
            </div>

            <Card className="max-w-5xl mx-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Current Standings</CardTitle>
                    <CardDescription>Top 10 players - Sample data from previous tournament</CardDescription>
                  </div>
                  <Badge variant="outline" className="gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">Rank</TableHead>
                        <TableHead>Player</TableHead>
                        <TableHead className="text-center">Kills</TableHead>
                        <TableHead className="text-center">Points</TableHead>
                        <TableHead className="text-right">Current Prize</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockLeaderboard.map((player, index) => (
                        <TableRow 
                          key={index} 
                          className={index < 2 ? "bg-primary/5" : ""}
                          data-testid={`leaderboard-row-${index}`}
                        >
                          <TableCell className="font-bold">
                            <div className="flex items-center gap-2">
                              {index === 0 && <Crown className="w-4 h-4 text-primary" />}
                              {index === 1 && <Medal className="w-4 h-4 text-chart-2" />}
                              #{player.rank}
                            </div>
                          </TableCell>
                          <TableCell className="font-semibold">{player.player}</TableCell>
                          <TableCell className="text-center">
                            <Badge variant="secondary">{player.kills}</Badge>
                          </TableCell>
                          <TableCell className="text-center font-semibold">{player.points}</TableCell>
                          <TableCell className="text-right font-bold text-primary">{player.prize}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Registration Timeline - Step-by-step registration process */}
        <SectionWrapper data-testid="section-timeline">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-timeline">Registration Process</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple 5-step process to secure your spot. From payment to tournament entry - we guide you every step of the way.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line - Vertical line connecting all steps */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

                {registrationSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative mb-12 last:mb-0"
                      data-testid={`timeline-step-${index}`}
                    >
                      <div className={`md:flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Content Card */}
                        <div className="md:w-5/12">
                          <Card className="hover-elevate transition-all duration-300">
                            <CardContent className="p-6 space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-lg">{step.title}</h3>
                                  <p className="text-sm text-muted-foreground">
                                    <Clock className="w-3 h-3 inline mr-1" />
                                    {step.time}
                                  </p>
                                </div>
                              </div>
                              <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Timeline Node - Animated dot indicator */}
                        <div className="hidden md:flex md:w-2/12 justify-center">
                          <div className="relative w-6 h-6">
                            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                            <div className="relative w-6 h-6 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                            </div>
                          </div>
                        </div>

                        {/* Spacing for alternating layout */}
                        <div className="hidden md:block md:w-5/12" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Tournament Rules Deep Dive - Comprehensive rules with tabs and accordions */}
        <SectionWrapper variant="muted" id="rules" data-testid="section-rules">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-rules">Complete Tournament Rules</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Read all rules carefully before registering. Fair play and sportsmanship ensure the best experience for everyone.
              </p>
            </div>

            <Tabs defaultValue="all" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
                <TabsTrigger value="all" data-testid="tab-all-rules">All Rules</TabsTrigger>
                <TabsTrigger value="registration" data-testid="tab-registration">Registration</TabsTrigger>
                <TabsTrigger value="payment" data-testid="tab-payment">Payment</TabsTrigger>
                <TabsTrigger value="gameplay" data-testid="tab-gameplay">Gameplay</TabsTrigger>
                <TabsTrigger value="prizes" data-testid="tab-prizes">Prizes</TabsTrigger>
                <TabsTrigger value="fairplay" data-testid="tab-fairplay">Fair Play</TabsTrigger>
                <TabsTrigger value="support" data-testid="tab-support">Support</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <RulesAccordion rules={detailedRules} />
              </TabsContent>

              <TabsContent value="registration" className="mt-6">
                <RulesAccordion rules={[detailedRules[0]]} />
              </TabsContent>

              <TabsContent value="payment" className="mt-6">
                <RulesAccordion rules={[detailedRules[1]]} />
              </TabsContent>

              <TabsContent value="gameplay" className="mt-6">
                <RulesAccordion rules={[detailedRules[2]]} />
              </TabsContent>

              <TabsContent value="prizes" className="mt-6">
                <RulesAccordion rules={[detailedRules[3]]} />
              </TabsContent>

              <TabsContent value="fairplay" className="mt-6">
                <RulesAccordion rules={[detailedRules[4], detailedRules[5]]} />
              </TabsContent>

              <TabsContent value="support" className="mt-6">
                <RulesAccordion rules={[detailedRules[6]]} />
              </TabsContent>
            </Tabs>
          </motion.div>
        </SectionWrapper>

        {/* Technical Requirements - Device, internet, and software specifications */}
        <SectionWrapper data-testid="section-technical">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Smartphone className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-technical">Technical Requirements</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ensure your device and connection meet these requirements for smooth, lag-free tournament experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Device Requirements Card */}
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    Device Specs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Minimum Requirements</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>3GB RAM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Snapdragon 625 / Helio G70</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Android 5.0 or higher</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>2GB free storage</span>
                      </li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Recommended</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>4GB+ RAM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Snapdragon 660 or better</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>90Hz display (advantage)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Internet Requirements Card */}
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-primary" />
                    Internet Speed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Minimum Requirements</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>8 Mbps download</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>4 Mbps upload</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Ping under 80ms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Stable connection</span>
                      </li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Recommended</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>20+ Mbps speed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Ping under 40ms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>WiFi preferred over mobile data</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Software Requirements Card */}
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" />
                    Software
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Required</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Latest Free Fire Max version</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>WhatsApp installed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>UPI app for prizes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>No VPN or proxy</span>
                      </li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Tips</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Close background apps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Charge device fully</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Clear game cache before match</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-6">
                <p className="text-center text-sm">
                  <strong>Pro Tip:</strong> Test your connection speed at{" "}
                  <a 
                    href="https://fast.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    fast.com
                  </a>
                  {" "}and ensure all requirements are met before tournament day to avoid any issues.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Enhanced FAQ Section - Frequently asked questions */}
        <SectionWrapper variant="muted" data-testid="section-faq">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold" data-testid="heading-faq">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about registration, gameplay, prizes, and more.
              </p>
            </div>

            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} data-testid={`faq-item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </SectionWrapper>

        {/* Player Testimonials - Reviews from tournament participants */}
        <SectionWrapper data-testid="section-testimonials">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold" data-testid="heading-testimonials">What Players Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our community of competitive Free Fire Max players who have experienced GameArena tournaments.
              </p>
            </div>

            <ModernTestimonials testimonials={testimonials} autoPlay autoPlayInterval={6000} />
          </motion.div>
        </SectionWrapper>

        {/* Video Strategy Guide - Gameplay tips and strategies */}
        <SectionWrapper variant="muted" data-testid="section-video-guide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Play className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-video-guide">Free Fire Max Solo Strategy Guide</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master Free Fire Max solo gameplay with our comprehensive strategy guide. Learn character selection, positioning, combat tactics, and survival skills.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Free Fire Max Solo Tournament Strategy Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                  data-testid="video-strategy-guide"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Pro Tips for Free Fire Max Solo Success</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Character Selection:</strong> Choose characters with survival skills like DJ Alok, Chrono, or Skyler for solo matches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Landing Strategy:</strong> Drop in medium-loot areas to avoid early conflicts while getting decent gear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Combat Tips:</strong> Master headshot accuracy, use gloo walls strategically, and always carry grenades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Zone Management:</strong> Play zone edges, use vehicles wisely, and position yourself with cover advantage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Final Circle:</strong> Prioritize high ground, use pets effectively, and save healing items for endgame</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Weapon Loadout:</strong> Prefer AR + Sniper or AR + SMG combo for versatility in different situations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Image Gallery - Tournament action shots and highlights */}
        <SectionWrapper data-testid="section-gallery">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold" data-testid="heading-gallery">Tournament Gallery</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Relive the intense moments from our past Free Fire Max solo tournaments. Action, strategy, and victory!
              </p>
            </div>

            <MediaLightbox
              items={[
                { src: tournamentImage1, alt: "Free Fire Max hero battle scene", caption: "Intense combat action" },
                { src: tournamentImage2, alt: "Free Fire Max combat firefight", caption: "Strategic positioning" },
                { src: tournamentImage3, alt: "Free Fire Max victory celebration", caption: "Victory royale moment" },
                { src: esportsImage1, alt: "Free Fire Max tournament competitive scene", caption: "Tournament highlights" },
                { src: esportsImage2, alt: "Free Fire Max weapon showcase", caption: "Arsenal mastery" },
                { src: gamingImage1, alt: "Free Fire Max character lineup", caption: "Character selection" },
                { src: gamingImage2, alt: "Free Fire Max championship trophy", caption: "Hall of champions" },
              ]}
            />
          </motion.div>
        </SectionWrapper>

        {/* Registration Form - Google Forms embed for tournament signup */}
        <SectionWrapper variant="muted" id="registration" data-testid="section-registration">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-registration">Register Now</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete the registration form below to secure your spot in the tournament. Make sure all details are accurate.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">Free Fire Max Solo Tournament Registration</CardTitle>
                      <CardDescription className="mt-2">
                        {FREEFIRE_TOURNAMENTS.solo.description}
                      </CardDescription>
                    </div>
                    <Badge variant="default" className="flex-shrink-0">
                      <Trophy className="w-3 h-3 mr-1" />
                      Solo
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-md">
                        <Ticket className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Entry Fee</p>
                          <p className="font-bold">₹{FREEFIRE_TOURNAMENTS.solo.entryFee}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-md">
                        <Users className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Total Slots</p>
                          <p className="font-bold">{FREEFIRE_TOURNAMENTS.solo.slots} Players</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-md">
                        <Trophy className="w-5 h-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Winner Prize</p>
                          <p className="font-bold">₹{FREEFIRE_TOURNAMENTS.solo.winner}</p>
                        </div>
                      </div>
                    </div>

                    {FREEFIRE_TOURNAMENTS.solo.note && (
                      <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-md">
                        <p className="text-sm">{FREEFIRE_TOURNAMENTS.solo.note}</p>
                      </div>
                    )}
                  </div>

                  <iframe
                    src={FREEFIRE_TOURNAMENTS.solo.embedUrl}
                    width="100%"
                    height="1200"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Free Fire Max Solo Tournament Registration Form"
                    data-testid="registration-form"
                  >
                    Loading form...
                  </iframe>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Your information is secure and will only be used for tournament administration. We never share your data with third parties.
                    </p>
                  </div>
                  <Button variant="outline" asChild data-testid="button-open-form-new-tab">
                    <a href={FREEFIRE_TOURNAMENTS.solo.formUrl} target="_blank" rel="noopener noreferrer">
                      Open Form in New Tab
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.div>
        </SectionWrapper>

        {/* CTA Band - Final call to action before footer */}
        <CTABand
          title="Ready to Become a Free Fire Max Champion?"
          description="Join thousands of competitive players in our professionally managed tournaments. Register now and prove your skills!"
          buttons={[
            {
              label: "Register for Solo Tournament",
              onClick: scrollToRegistration,
              variant: "default",
            },
            {
              label: "View All Tournaments",
              href: "/#tournaments",
              variant: "outline",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
