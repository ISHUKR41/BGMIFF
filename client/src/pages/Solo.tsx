/**
 * Solo Tournament Page Component
 * 
 * Dedicated page for BGMI Solo Tournament registration and information.
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
 * 13. Strategy Tips - Gameplay advice for solo mode
 * 14. Image Gallery - Action shots from past solo tournaments
 * 15. Registration Form - Google Forms embed for tournament signup
 * 
 * This page provides all necessary information for solo players to understand,
 * register for, and participate in BGMI solo tournaments.
 */

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ModernHero from "@/components/ModernHero";
import StickyCTA from "@/components/StickyCTA";
import SectionWrapper from "@/components/SectionWrapper";
import ProfessionalStatCard from "@/components/ProfessionalStatCard";
import RulesAccordion from "@/components/RulesAccordion";
import PaymentInstructions from "@/components/PaymentInstructions";
import MediaLightbox from "@/components/MediaLightbox";
import ModernTestimonials from "@/components/ModernTestimonials";
import CTABand from "@/components/CTABand";
import FormEmbed from "@/components/FormEmbed";
import { TOURNAMENTS } from "@/../../shared/config";
import { fadeSlideUp, staggerContainer, staggerItem, scaleUp } from "@/lib/motion";
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

// Import BGMI action images for gallery and hero section
import heroImage from "@assets/generated_images/BGMI_solo_winner_scene_a8662376.png";
import tournamentImage1 from "@assets/generated_images/BGMI_hero_battle_scene_ad290420.png";
import tournamentImage2 from "@assets/generated_images/BGMI_combat_action_scene_fcabb843.png";
import tournamentImage3 from "@assets/generated_images/BGMI_final_zone_battle_5fb27295.png";
import esportsImage1 from "@assets/generated_images/BGMI_tournament_players_competing_4f0d52bc.png";
import esportsImage2 from "@assets/generated_images/BGMI_sniper_gameplay_2d74e59c.png";
import gamingImage1 from "@assets/generated_images/BGMI_airdrop_scene_5a4e2e73.png";
import gamingImage2 from "@assets/generated_images/BGMI_championship_trophy_883ef9dc.png";

// Prize breakdown data for visual pie chart
// Shows distribution of total prize pool across different categories
const prizeBreakdownData = [
  { name: "Winner", value: TOURNAMENTS.solo.winner, percentage: 35, fill: "hsl(var(--chart-1))" },
  { name: "Runner-Up", value: TOURNAMENTS.solo.runnerUp, percentage: 25, fill: "hsl(var(--chart-2))" },
  { name: "Per Kill Pool", value: 400, percentage: 40, fill: "hsl(var(--chart-3))" },
];

// Kill rewards breakdown table data
// Shows potential earnings based on elimination count
const killRewardsData = [
  { kills: "0-5", reward: `₹0-${TOURNAMENTS.solo.perKill * 5}` },
  { kills: "6-10", reward: `₹${TOURNAMENTS.solo.perKill * 6}-${TOURNAMENTS.solo.perKill * 10}` },
  { kills: "11-15", reward: `₹${TOURNAMENTS.solo.perKill * 11}-${TOURNAMENTS.solo.perKill * 15}` },
  { kills: "16+", reward: `₹${TOURNAMENTS.solo.perKill * 16}+` },
];

// Historical data of past solo tournament winners
// Showcases top performers and their achievements
const pastWinners = [
  {
    name: "ShadowKnight_YT",
    kills: 18,
    prize: "₹512",
    date: "October 15, 2025",
    avatar: "SK",
    placement: 1,
  },
  {
    name: "ProGamer_Rishi",
    kills: 16,
    prize: "₹494",
    date: "September 28, 2025",
    avatar: "PR",
    placement: 1,
  },
  {
    name: "BEAST_Arjun",
    kills: 21,
    prize: "₹539",
    date: "September 10, 2025",
    avatar: "BA",
    placement: 1,
  },
  {
    name: "ViperStrike_GG",
    kills: 15,
    prize: "₹485",
    date: "August 25, 2025",
    avatar: "VS",
    placement: 1,
  },
];

// Current tournament leaderboard for display
// In production, this would be fetched from backend API
const mockLeaderboard = [
  { rank: 1, player: "LEGEND_Rahul", kills: 12, points: 85, prize: "₹458" },
  { rank: 2, player: "WarriorX_Pro", kills: 10, points: 78, prize: "₹340" },
  { rank: 3, player: "GhostSniper_YT", kills: 9, points: 72, prize: "₹81" },
  { rank: 4, player: "ThunderBolt_GG", kills: 11, points: 71, prize: "₹99" },
  { rank: 5, player: "NinjaAssassin", kills: 8, points: 68, prize: "₹72" },
  { rank: 6, player: "PhoenixRise_YT", kills: 7, points: 65, prize: "₹63" },
  { rank: 7, player: "DragonSlayer99", kills: 9, points: 63, prize: "₹81" },
  { rank: 8, player: "EliteShooter_Pro", kills: 6, points: 60, prize: "₹54" },
  { rank: 9, player: "VenomStrike_GG", kills: 8, points: 58, prize: "₹72" },
  { rank: 10, player: "KnightRider_YT", kills: 5, points: 55, prize: "₹45" },
];

// Player testimonials specific to solo tournament experiences
// Real feedback builds trust and credibility
const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Solo Tournament Winner - Oct 2025",
    content: "GameArena tournaments are incredibly well-organized. The registration process was smooth, payment verification was quick, and the prize distribution was done within 24 hours. Highly recommend for serious BGMI players!",
    initials: "RS",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Regular Participant",
    content: "I've participated in 5 solo tournaments so far. The admin team is very professional and responsive. They ensure fair play and the per-kill rewards make every elimination count. Great experience overall!",
    initials: "PP",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    role: "Top 3 Finisher - Sept 2025",
    content: "The tournament format is perfect for solo players. Entry fee is affordable, prize pool is attractive, and the competition level is excellent. I've improved my gameplay significantly through these tournaments.",
    initials: "AR",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    role: "First-time Participant",
    content: "As a first-timer, I was nervous, but the clear instructions and helpful admin support made everything easy. The tournament was fair, well-timed, and the whole process was transparent. Will definitely join again!",
    initials: "SG",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "Multiple Tournament Winner",
    content: "GameArena has the most competitive solo tournaments I've seen. The prize distribution is fair, the per-kill system rewards aggressive gameplay, and the community is amazing. This is where real competitors play!",
    initials: "VS",
    rating: 5,
  },
];

// Comprehensive FAQ section for solo tournaments
// Covers eligibility, registration, gameplay, prizes, and technical requirements
const faqs = [
  {
    question: "Who is eligible to participate in the Solo Tournament?",
    answer: "Any BGMI player aged 16 and above can participate. You must have a valid BGMI account, a working WhatsApp number for communication, and a UPI ID for prize distribution. Players must be from India and comply with all BGMI terms of service.",
  },
  {
    question: "How do I register for the tournament?",
    answer: "Registration is a simple 3-step process: (1) Pay the ₹20 entry fee via our official QR code, (2) Fill out the registration form with your BGMI ID, In-Game Name, WhatsApp number, and transaction details, (3) Wait for admin verification. You'll receive confirmation within 2-4 hours.",
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
    answer: "All kills are tracked through in-game statistics. After the match, we verify the final results from BGMI's official match stats. Players must share screenshots of their final stats for verification. Any discrepancy will be resolved by checking the match replay.",
  },
  {
    question: "What are the best strategies for Solo tournaments?",
    answer: "Focus on survival first, kills second. Land in medium-traffic areas to get decent loot without early fights. Play zone edges, use vehicles wisely, and engage in fights only when you have positional advantage. In final circles, positioning matters more than kills. Practice recoil control and quick decision-making.",
  },
  {
    question: "What devices and specs are recommended?",
    answer: "Minimum: 4GB RAM, Snapdragon 665 or equivalent processor, stable 4G/WiFi connection with 10+ Mbps speed. Recommended: 6GB+ RAM, Snapdragon 720G or better, 5G/WiFi with 25+ Mbps. Use latest BGMI version and close background apps for best performance.",
  },
  {
    question: "What internet speed do I need?",
    answer: "Minimum 10 Mbps download and 5 Mbps upload speed with stable connection. We recommend 25+ Mbps for best experience. WiFi is preferred over mobile data. Test your connection before the tournament. High ping (>100ms) can affect gameplay negatively.",
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
      "BGMI ID and In-Game Name must match exactly - no variations allowed",
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
      "Winner (1st Place): ₹350 guaranteed",
      "Runner-Up (2nd Place): ₹250 guaranteed",
      "Per Kill Reward: ₹9 per elimination (verified from match stats)",
      "Total Prize Pool: ₹1000+ (varies based on total kills)",
      "Prizes distributed within 24-48 hours after tournament",
      "Valid UPI ID required for prize transfer - must match registered name",
      "All kills verified from official BGMI match statistics",
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
    description: "Complete the form with BGMI ID, name, WhatsApp number, and payment details",
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

export default function Solo() {
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
      
      {/* Sticky CTA bar - appears when scrolling past hero */}
      <StickyCTA 
        tournamentName={TOURNAMENTS.solo.title}
        entryFee={TOURNAMENTS.solo.entryFee}
        onRegisterClick={scrollToRegistration}
      />
      
      <main className="flex-1 pt-16">
        {/* Hero Section with ModernHero */}
        <ModernHero
          title="BGMI Solo Tournament"
          description="Compete individually in India's most competitive solo battle royale tournament. 100 players enter, only one emerges victorious. Test your skills, win big prizes, and prove you're the ultimate solo warrior."
          backgroundImage={heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tournaments", href: "/#tournaments" },
            { label: "Solo Tournament" },
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

        {/* Tournament Stats */}
        <SectionWrapper variant="muted" data-testid="section-stats">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfessionalStatCard
              icon={Ticket}
              value={TOURNAMENTS.solo.entryFee}
              label="Entry Fee"
              prefix="₹"
              glassmorphism
              data-testid="stat-entry-fee"
            />
            <ProfessionalStatCard
              icon={Users}
              value={TOURNAMENTS.solo.slots}
              label="Total Slots"
              glassmorphism
              delay={0.1}
              data-testid="stat-total-slots"
            />
            <ProfessionalStatCard
              icon={Trophy}
              value={TOURNAMENTS.solo.winner}
              label="Winner Prize"
              prefix="₹"
              glassmorphism
              delay={0.2}
              data-testid="stat-winner-prize"
            />
            <ProfessionalStatCard
              icon={Coins}
              value={TOURNAMENTS.solo.perKill}
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
                {/* Image Section */}
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={heroImage}
                    alt="BGMI Solo Tournament Championship"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">Solo Tournament Excellence</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Experience competitive solo BGMI gameplay with guaranteed prizes and professional tournament management
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Guaranteed Prize Pool</h4>
                        <p className="text-sm text-muted-foreground">Winner: ₹350 | Runner-Up: ₹250 | Per Kill: ₹9 - Prizes distributed within 24-48 hours via UPI</p>
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
                      Register Now - ₹{TOURNAMENTS.solo.entryFee}
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

        {/* Registration Form - Moved Higher for Easy Access */}
        <SectionWrapper id="registration" variant="muted" data-testid="section-registration">
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
                      <CardTitle className="text-2xl">BGMI Solo Tournament Registration</CardTitle>
                      <CardDescription className="mt-2">
                        Fill out all fields accurately. Your slot will be confirmed after payment verification within 2-4 hours.
                      </CardDescription>
                    </div>
                    <Badge variant="default" className="shrink-0">Solo</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Ticket className="w-4 h-4" />
                        <span>Entry Fee</span>
                      </div>
                      <p className="text-3xl font-mono font-bold">₹{TOURNAMENTS.solo.entryFee}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Total Slots</span>
                      </div>
                      <p className="text-3xl font-mono font-bold">{TOURNAMENTS.solo.slots}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span>Winner Prize</span>
                      </div>
                      <p className="text-3xl font-mono font-bold">₹{TOURNAMENTS.solo.winner}</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Registration Process
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">1.</span>
                        <span>Make payment of ₹{TOURNAMENTS.solo.entryFee} via official UPI QR code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">2.</span>
                        <span>Fill the registration form with your BGMI ID, name, and payment details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">3.</span>
                        <span>Wait for admin verification (2-4 hours)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">4.</span>
                        <span>Receive room credentials 30 minutes before match</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="space-y-1 text-sm">
                        <p className="font-semibold">Secure & Verified Registration</p>
                        <p className="text-muted-foreground">All registrations are verified by our admin team. Your payment is secure and slot confirmation is guaranteed after verification.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.location.href = TOURNAMENTS.solo.formUrl}
                    data-testid="button-register-solo"
                  >
                    <Trophy className="w-5 h-5 mr-2" />
                    Register Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By registering, you agree to our tournament rules and policies
                  </p>
                </CardFooter>
              </Card>
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Tournament Schedule */}
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
                Mark your calendar and stay updated with all important dates and timings. All times are in Indian Standard Time (IST).
              </p>
            </div>

            <div className="grid gap-4 max-w-4xl mx-auto">
              {scheduleData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-elevate transition-all duration-300" data-testid={`schedule-item-${index}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-3">
                            <Badge 
                              variant={item.status === "Open" ? "default" : "secondary"}
                              className="text-sm"
                            >
                              {item.status}
                            </Badge>
                            <h3 className="text-xl font-bold">{item.stage}</h3>
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-6 text-right">
                          <div>
                            <p className="text-sm text-muted-foreground">Date</p>
                            <p className="font-semibold">{item.date}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Time</p>
                            <p className="font-semibold flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {item.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Timezone:</strong> All times are in Indian Standard Time (IST/UTC+5:30). 
                  Convert to your local timezone if you're outside India.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Prize Breakdown Visualization */}
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
                <h2 className="text-4xl font-bold" data-testid="heading-prize-breakdown">Prize Pool Distribution</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Total prize pool of ₹1000+ distributed among winners and per-kill rewards. Every elimination counts!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Prize Distribution Overview</CardTitle>
                  <CardDescription>Percentage breakdown of total prize pool</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={prizeBreakdownData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percentage }) => `${name}: ${percentage}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {prizeBreakdownData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Prize Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Prize Structure</CardTitle>
                  <CardDescription>Complete breakdown of all rewards</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-chart-1/10 rounded-lg border border-chart-1/20">
                      <div className="flex items-center gap-3">
                        <Crown className="w-6 h-6 text-chart-1" />
                        <div>
                          <p className="font-semibold">Winner (1st Place)</p>
                          <p className="text-sm text-muted-foreground">Top performer</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-chart-1">₹350</p>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-chart-2/10 rounded-lg border border-chart-2/20">
                      <div className="flex items-center gap-3">
                        <Medal className="w-6 h-6 text-chart-2" />
                        <div>
                          <p className="font-semibold">Runner-Up (2nd Place)</p>
                          <p className="text-sm text-muted-foreground">Second best</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-chart-2">₹250</p>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-chart-3/10 rounded-lg border border-chart-3/20">
                      <div className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-chart-3" />
                        <div>
                          <p className="font-semibold">Per Kill Reward</p>
                          <p className="text-sm text-muted-foreground">For each elimination</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-chart-3">₹9</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-3">Kill Reward Examples</h4>
                    <div className="space-y-2 text-sm">
                      {killRewardsData.map((item, index) => (
                        <div key={index} className="flex justify-between p-2 rounded hover-elevate">
                          <span className="text-muted-foreground">{item.kills} Kills</span>
                          <span className="font-semibold">{item.reward}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-3/10 border-primary/20">
              <CardContent className="p-6 text-center space-y-2">
                <p className="text-lg font-semibold">
                  <TrendingUp className="w-5 h-5 inline mr-2" />
                  Maximum Possible Earnings
                </p>
                <p className="text-3xl font-bold text-primary">₹350 + (Your Kills × ₹9)</p>
                <p className="text-sm text-muted-foreground">
                  Win the tournament with 20 kills = ₹350 + ₹180 = <strong>₹530 Total!</strong>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Past Winners Showcase */}
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
                <Star className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold" data-testid="heading-past-winners">Hall of Champions</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Celebrating our past solo tournament champions who dominated the battlefield and emerged victorious.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pastWinners.map((winner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-elevate transition-all duration-300 text-center" data-testid={`winner-${index}`}>
                    <CardContent className="p-6 space-y-4">
                      <div className="relative inline-block">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-chart-2 flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto">
                          {winner.avatar}
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Crown className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{winner.name}</h3>
                        <p className="text-sm text-muted-foreground">{winner.date}</p>
                      </div>
                      <div className="flex items-center justify-center gap-4 text-sm">
                        <div className="text-center">
                          <p className="text-muted-foreground">Kills</p>
                          <p className="font-bold text-lg">{winner.kills}</p>
                        </div>
                        <Separator orientation="vertical" className="h-10" />
                        <div className="text-center">
                          <p className="text-muted-foreground">Prize</p>
                          <p className="font-bold text-lg text-primary">{winner.prize}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-full">
                        <Trophy className="w-3 h-3 mr-1" />
                        Champion
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Live Leaderboard Preview */}
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

        {/* Registration Timeline */}
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
                {/* Timeline line */}
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

                        {/* Timeline Node */}
                        <div className="hidden md:flex md:w-2/12 justify-center">
                          <div className="relative w-6 h-6">
                            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                            <div className="relative w-6 h-6 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                            </div>
                          </div>
                        </div>

                        {/* Spacing */}
                        <div className="hidden md:block md:w-5/12" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Tournament Rules Deep Dive */}
        <SectionWrapper variant="muted" data-testid="section-rules">
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
                <TabsTrigger value="all">All Rules</TabsTrigger>
                <TabsTrigger value="registration">Registration</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="gameplay">Gameplay</TabsTrigger>
                <TabsTrigger value="prizes">Prizes</TabsTrigger>
                <TabsTrigger value="fairplay">Fair Play</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
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

        {/* Technical Requirements */}
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
              {/* Device Requirements */}
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
                        <span>4GB RAM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Snapdragon 665 / Helio G85</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Android 8.0 or higher</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>4GB free storage</span>
                      </li>
                    </ul>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Recommended</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>6GB+ RAM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Snapdragon 720G or better</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>120Hz display (advantage)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Internet Requirements */}
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
                        <span>10 Mbps download</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>5 Mbps upload</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Ping under 100ms</span>
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
                        <span>25+ Mbps speed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Ping under 50ms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>WiFi preferred over mobile data</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Software Requirements */}
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
                        <span>Latest BGMI version</span>
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

        {/* Enhanced FAQ Section */}
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

        {/* Player Testimonials */}
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
                Hear from our community of competitive players who have experienced GameArena tournaments.
              </p>
            </div>

            <ModernTestimonials testimonials={testimonials} autoPlay autoPlayInterval={6000} />
          </motion.div>
        </SectionWrapper>

        {/* Video Strategy Guide */}
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
                <h2 className="text-4xl font-bold" data-testid="heading-video-guide">Solo Strategy Guide</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master solo gameplay with our comprehensive strategy guide. Learn positioning, looting, rotations, and endgame tactics.
              </p>
            </div>

            <Card className="max-w-4xl mx-auto overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Solo Tournament Strategy Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-0"
                  data-testid="video-strategy-guide"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Pro Tips for Solo Success</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Land in medium-traffic areas for balanced risk-reward</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prioritize positioning over kills in late game</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Master third-party engagement timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Practice zone rotations and vehicle usage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Tournament Gallery with MediaLightbox */}
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
                Experience the intensity and excitement of our competitive solo tournaments.
              </p>
            </div>

            <MediaLightbox
              items={[
                { src: tournamentImage1, alt: "BGMI Solo Tournament Intense Action", caption: "Solo player in intense combat" },
                { src: tournamentImage2, alt: "Professional Gaming Setup", caption: "Professional tournament setup" },
                { src: tournamentImage3, alt: "Mobile Esports Competition", caption: "Competitive mobile gaming" },
                { src: esportsImage1, alt: "Esports Tournament Atmosphere", caption: "Tournament atmosphere" },
                { src: esportsImage2, alt: "Professional BGMI Player", caption: "Professional player focus" },
                { src: gamingImage1, alt: "Gaming Tournament Arena", caption: "Tournament arena" },
                { src: gamingImage2, alt: "BGMI Championship Finals", caption: "Championship finals" },
                { src: heroImage, alt: "Professional Esports Event", caption: "Professional esports event" },
              ]}
              columns={{ sm: 1, md: 2, lg: 4 }}
            />
          </motion.div>
        </SectionWrapper>

        {/* Payment Instructions */}
        <SectionWrapper variant="muted" data-testid="section-payment">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold" data-testid="heading-payment">Payment Instructions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to complete your payment and secure your tournament slot.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <PaymentInstructions amount={20} />
            </div>
          </motion.div>
        </SectionWrapper>

        {/* CTA Band */}
        <SectionWrapper variant="default" data-testid="section-cta">
          <CTABand
            title="Ready to Compete?"
            description="Join hundreds of competitive players in India's most exciting BGMI solo tournaments. Register now and prove your skills!"
            variant="gradient"
            icon={Trophy}
            buttons={[
              {
                label: "Register for Tournament",
                onClick: scrollToRegistration,
                variant: "default",
                icon: Trophy,
              },
              {
                label: "View All Tournaments",
                href: "/#tournaments",
                variant: "outline",
                icon: Calendar,
              },
            ]}
            data-testid="cta-band-footer"
          />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
