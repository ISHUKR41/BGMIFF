/**
 * BGMI Solo Tournament Page Component - Modern Redesign
 * 
 * Enhanced with split hero layout, scroll-triggered animations, and full responsiveness
 * 
 * Key Improvements:
 * - Split hero section with tournament info and registration form side-by-side
 * - Scroll-triggered fade-in animations on all sections
 * - Framer-motion stagger effects for cards and grids
 * - Magnetic button effects for CTAs
 * - Parallax effects on hero background
 * - Glassmorphism effects for modern aesthetic
 * - Fully responsive: mobile (stack), tablet (2-col), desktop (3-4 col)
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import SectionWrapper from "@/components/SectionWrapper";
import ProfessionalStatCard from "@/components/ProfessionalStatCard";
import RulesAccordion from "@/components/RulesAccordion";
import PaymentInstructions from "@/components/PaymentInstructions";
import MediaLightbox from "@/components/MediaLightbox";
import ModernTestimonials from "@/components/ModernTestimonials";
import CTABand from "@/components/CTABand";
import FormEmbed from "@/components/FormEmbed";
import FloatingOrbs from "@/components/FloatingOrbs";
import BlurFade from "@/components/BlurFade";
import EnhancedMagneticButton from "@/components/EnhancedMagneticButton";
import { TOURNAMENTS } from "@shared/config";
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
  ExternalLink,
  AlertCircle,
  Sparkles
} from "lucide-react";
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from "recharts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
const prizeBreakdownData = [
  { name: "Winner", value: TOURNAMENTS.solo.winner, percentage: 35, fill: "hsl(var(--chart-1))" },
  { name: "Runner-Up", value: TOURNAMENTS.solo.runnerUp, percentage: 25, fill: "hsl(var(--chart-2))" },
  { name: "Per Kill Pool", value: 400, percentage: 40, fill: "hsl(var(--chart-3))" },
];

// Kill rewards breakdown table data
const killRewardsData = [
  { kills: "0-5", reward: `₹0-${TOURNAMENTS.solo.perKill * 5}` },
  { kills: "6-10", reward: `₹${TOURNAMENTS.solo.perKill * 6}-${TOURNAMENTS.solo.perKill * 10}` },
  { kills: "11-15", reward: `₹${TOURNAMENTS.solo.perKill * 11}-${TOURNAMENTS.solo.perKill * 15}` },
  { kills: "16+", reward: `₹${TOURNAMENTS.solo.perKill * 16}+` },
];

// Historical data of past solo tournament winners
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
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effect for hero background
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.95]);
  
  /**
   * Smooth scroll to registration section
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
        {/* SPLIT HERO SECTION - Modern two-column layout */}
        <div 
          ref={heroRef}
          className="relative min-h-[90vh] lg:min-h-[85vh] overflow-hidden"
          data-testid="hero-section"
        >
          {/* Floating Orbs Background Effect */}
          <FloatingOrbs count={4} />
          
          {/* Parallax Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${heroImage})`,
              y: backgroundY 
            }}
          />
          
          {/* Enhanced Gradient Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              background: "var(--gradient-dark)",
              opacity: overlayOpacity
            }}
          />
          
          {/* Gradient Glow Effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "var(--gradient-glow)" }}
          />

          {/* Hero Content Container - Responsive Split Layout */}
          <div className="relative z-10 container mx-auto px-4 py-8 lg:py-12 h-full min-h-[90vh] lg:min-h-[85vh]">
            {/* Breadcrumbs */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 lg:mb-8"
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-foreground/80 hover:text-foreground">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/#tournaments" className="text-foreground/80 hover:text-foreground">
                      Tournaments
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-foreground">BGMI Solo</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            {/* Split Layout Grid - Stacks on mobile, side-by-side on desktop */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* LEFT COLUMN - Tournament Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 lg:space-y-8"
              >
                {/* Tournament Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Badge variant="outline" className="text-base px-4 py-2 bg-primary/10 border-primary/30 backdrop-blur-sm">
                    <Trophy className="w-4 h-4 mr-2" />
                    Solo Tournament
                  </Badge>
                </motion.div>

                {/* Main Heading with Gradient */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight gradient-text leading-tight"
                >
                  BGMI Solo<br />Tournament
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-xl"
                >
                  Compete individually in India's most competitive BGMI solo battle royale tournament. 100 players enter, only one claims victory.
                </motion.p>

                {/* Quick Stats - Glassmorphic Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4"
                >
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{TOURNAMENTS.solo.entryFee}</div>
                    <div className="text-xs text-foreground/70">Entry Fee</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{TOURNAMENTS.solo.slots}</div>
                    <div className="text-xs text-foreground/70">Players</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{TOURNAMENTS.solo.winner}</div>
                    <div className="text-xs text-foreground/70">Winner</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{TOURNAMENTS.solo.perKill}</div>
                    <div className="text-xs text-foreground/70">Per Kill</div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <EnhancedMagneticButton
                    variant="default"
                    size="lg"
                    magneticStrength={0.4}
                    enableGlow={true}
                    onClick={scrollToRegistration}
                    className="text-base px-8 py-6 shadow-lg"
                    data-testid="button-register-now"
                  >
                    <Trophy className="w-5 h-5 mr-2" />
                    Register Now
                  </EnhancedMagneticButton>
                  
                  <EnhancedMagneticButton
                    variant="outline"
                    size="lg"
                    magneticStrength={0.3}
                    asChild
                    className="text-base px-8 py-6 backdrop-blur-sm bg-background/20"
                    data-testid="button-view-schedule"
                  >
                    <a href="#schedule">
                      <Calendar className="w-5 h-5 mr-2" />
                      View Schedule
                    </a>
                  </EnhancedMagneticButton>
                </motion.div>
              </motion.div>

              {/* RIGHT COLUMN - Quick Registration Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:mt-0"
              >
                <Card className="glass-effect border-primary/20 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-2 to-primary" />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl lg:text-3xl flex items-center gap-2">
                          <Sparkles className="w-6 h-6 text-primary" />
                          Quick Registration
                        </CardTitle>
                        <CardDescription className="text-base">
                          Secure your spot in minutes
                        </CardDescription>
                      </div>
                      <Badge variant="default" className="flex-shrink-0 px-3 py-1">
                        <Users className="w-3 h-3 mr-1" />
                        {TOURNAMENTS.solo.slots} Slots
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 pb-6">
                    {/* Registration Steps Preview */}
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover-elevate transition-all">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">1</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm">Make Payment</div>
                          <div className="text-xs text-muted-foreground">Pay ₹{TOURNAMENTS.solo.entryFee} via UPI QR code</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover-elevate transition-all">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm">Fill Form Details</div>
                          <div className="text-xs text-muted-foreground">BGMI ID, name & payment proof</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover-elevate transition-all">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">3</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm">Get Confirmed</div>
                          <div className="text-xs text-muted-foreground">Receive slot confirmation in 2-4 hours</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                    </div>

                    {/* Important Info */}
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">
                          <strong className="text-foreground">Limited Slots:</strong> Only {TOURNAMENTS.solo.slots} players accepted. First come, first served.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">
                          <strong className="text-foreground">Fast Process:</strong> Complete registration takes under 10 minutes
                        </p>
                      </div>
                    </div>

                    {/* Primary CTA */}
                    <EnhancedMagneticButton
                      variant="default"
                      size="lg"
                      className="w-full text-lg py-6"
                      magneticStrength={0.3}
                      enableGlow={true}
                      onClick={scrollToRegistration}
                      data-testid="button-start-registration"
                    >
                      <Trophy className="w-5 h-5 mr-2" />
                      Start Registration
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </EnhancedMagneticButton>

                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-xs"
                        data-testid="button-view-rules"
                      >
                        <a href="#rules">
                          <Shield className="w-3 h-3 mr-1" />
                          View Rules
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="text-xs"
                        data-testid="button-view-prizes"
                      >
                        <a href="#prizes">
                          <Award className="w-3 h-3 mr-1" />
                          Prize Pool
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tournament Stats Section - Animated stat cards */}
        <SectionWrapper variant="muted" data-testid="section-stats">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-stats">
                Tournament Overview
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about the tournament at a glance
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Ticket}
                  title="Entry Fee"
                  value={`₹${TOURNAMENTS.solo.entryFee}`}
                  description="Per player registration fee"
                  trend="Pocket-friendly"
                  delay={0}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Users}
                  title="Total Slots"
                  value={TOURNAMENTS.solo.slots.toString()}
                  description="Players per tournament"
                  trend="Limited availability"
                  delay={0.1}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Trophy}
                  title="Winner Prize"
                  value={`₹${TOURNAMENTS.solo.winner}`}
                  description="1st place guaranteed"
                  trend="+Kill Bonus"
                  delay={0.2}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Target}
                  title="Per Kill"
                  value={`₹${TOURNAMENTS.solo.perKill}`}
                  description="For each elimination"
                  trend="Skill-based rewards"
                  delay={0.3}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Tournament Schedule - Timeline with dates */}
        <SectionWrapper id="schedule" data-testid="section-schedule">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Calendar className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-schedule">
                  Tournament Schedule
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mark these important dates and times in your calendar
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="max-w-4xl mx-auto space-y-4"
            >
              {scheduleData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  data-testid={`schedule-item-${index}`}
                >
                  <Card className="hover-elevate transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="font-bold text-lg">{item.stage}</h3>
                            <Badge 
                              variant={item.status === "Open" ? "default" : "outline"}
                              className="flex-shrink-0"
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="text-left md:text-right space-y-1 flex-shrink-0">
                          <div className="font-semibold">{item.date}</div>
                          <div className="text-sm text-muted-foreground flex items-center md:justify-end gap-1">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Prize Breakdown Section - Charts and tables */}
        <SectionWrapper variant="muted" id="prizes" data-testid="section-prizes">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-prizes">
                  Prize Distribution
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transparent prize pool breakdown with position-based and performance-based rewards
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Prize Breakdown Chart */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle>Prize Pool Distribution</CardTitle>
                    <CardDescription>How the total prize money is allocated</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={prizeBreakdownData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percentage }) => `${name} ${percentage}%`}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {prizeBreakdownData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Kill Rewards Table */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle>Per Kill Rewards</CardTitle>
                    <CardDescription>Earn more with every elimination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Total Kills</TableHead>
                          <TableHead className="text-right">Kill Bonus</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {killRewardsData.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-semibold">{row.kills}</TableCell>
                            <TableCell className="text-right font-bold text-primary">{row.reward}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-center">
                        <strong>Pro Tip:</strong> Aggressive gameplay pays off! Each kill adds ₹{TOURNAMENTS.solo.perKill} to your prize.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Guaranteed Prizes Highlight */}
            <motion.div 
              variants={staggerItem}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <Card className="text-center hover-elevate transition-all duration-300 border-primary/30">
                <CardContent className="p-6 space-y-3">
                  <Crown className="w-12 h-12 mx-auto text-primary" />
                  <div>
                    <div className="text-3xl font-bold text-primary">₹{TOURNAMENTS.solo.winner}</div>
                    <div className="text-sm text-muted-foreground mt-1">1st Place Winner</div>
                  </div>
                  <Badge variant="default" className="w-full justify-center">
                    + Kill Bonus
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate transition-all duration-300 border-chart-2/30">
                <CardContent className="p-6 space-y-3">
                  <Medal className="w-12 h-12 mx-auto text-chart-2" />
                  <div>
                    <div className="text-3xl font-bold text-chart-2">₹{TOURNAMENTS.solo.runnerUp}</div>
                    <div className="text-sm text-muted-foreground mt-1">2nd Place Runner-Up</div>
                  </div>
                  <Badge variant="outline" className="w-full justify-center border-chart-2/50">
                    + Kill Bonus
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover-elevate transition-all duration-300 border-chart-3/30 sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6 space-y-3">
                  <Target className="w-12 h-12 mx-auto text-chart-3" />
                  <div>
                    <div className="text-3xl font-bold text-chart-3">₹{TOURNAMENTS.solo.perKill}</div>
                    <div className="text-sm text-muted-foreground mt-1">Per Kill Reward</div>
                  </div>
                  <Badge variant="outline" className="w-full justify-center border-chart-3/50">
                    All Players
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Payment Instructions Section */}
        <SectionWrapper data-testid="section-payment">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-payment">
                Payment Instructions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to complete your payment and registration
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <PaymentInstructions />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Registration Form Section - MOVED HIGHER */}
        <SectionWrapper variant="muted" id="registration" data-testid="section-registration">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-registration">
                  Complete Your Registration
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below after making your payment. All details must be accurate for slot confirmation.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <FormEmbed
                formUrl={TOURNAMENTS.solo.formUrl}
                embedUrl={TOURNAMENTS.solo.embedUrl}
                title="Tournament Registration Form"
                description="Complete all required fields. Your slot will be confirmed after payment verification."
              />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Past Winners Showcase */}
        <SectionWrapper data-testid="section-past-winners">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Crown className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-past-winners">
                  Hall of Champions
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Celebrate our past tournament winners and their incredible performances
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {pastWinners.map((winner, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  data-testid={`past-winner-${index}`}
                >
                  <Card className="hover-elevate transition-all duration-300 text-center group">
                    <CardContent className="p-6 space-y-4">
                      <div className="relative inline-block">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                          <span className="text-2xl font-bold text-primary">{winner.avatar}</span>
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
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
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Live Leaderboard Preview */}
        <SectionWrapper variant="muted" data-testid="section-leaderboard">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-leaderboard">
                  Live Leaderboard Preview
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how the competition looks during tournaments. Rankings update in real-time.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="max-w-5xl mx-auto hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle>Current Standings</CardTitle>
                      <CardDescription>Top 10 players - Sample data from previous tournament</CardDescription>
                    </div>
                    <Badge variant="outline" className="gap-2 self-start sm:self-auto">
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
          </motion.div>
        </SectionWrapper>

        {/* Registration Timeline */}
        <SectionWrapper data-testid="section-timeline">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-timeline">
                  Registration Process
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple 5-step process to secure your spot. We guide you every step of the way.
              </p>
            </motion.div>

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
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative mb-12 last:mb-0"
                      data-testid={`timeline-step-${index}`}
                    >
                      <div className={`md:flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Content Card */}
                        <div className="md:w-5/12">
                          <Card className="hover-elevate transition-all duration-300 group">
                            <CardContent className="p-6 space-y-3">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                  <Icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-lg">{step.title}</h3>
                                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
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
                            <div className="relative w-6 h-6 bg-primary rounded-full border-4 border-background flex items-center justify-center shadow-lg">
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

        {/* Tournament Rules Deep Dive */}
        <SectionWrapper variant="muted" id="rules" data-testid="section-rules">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-rules">
                  Complete Tournament Rules
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Read all rules carefully before registering. Fair play ensures the best experience for everyone.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Tabs defaultValue="all" className="max-w-4xl mx-auto">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1">
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
          </motion.div>
        </SectionWrapper>

        {/* Technical Requirements */}
        <SectionWrapper data-testid="section-technical">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Smartphone className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-technical">
                  Technical Requirements
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ensure your device and connection meet these requirements for smooth gameplay
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {/* Device Requirements Card */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
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
              </motion.div>

              {/* Internet Requirements Card */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
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
              </motion.div>

              {/* Software Requirements Card */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
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
              </motion.div>
            </motion.div>

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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-faq">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about registration, gameplay, prizes, and more.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
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
          </motion.div>
        </SectionWrapper>

        {/* Player Testimonials */}
        <SectionWrapper data-testid="section-testimonials">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-testimonials">
                What Players Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our community of competitive players who have experienced GameArena tournaments.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <ModernTestimonials testimonials={testimonials} autoPlay autoPlayInterval={6000} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Video Strategy Guide */}
        <SectionWrapper variant="muted" data-testid="section-video-guide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-2">
                <Play className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-video-guide">
                  Solo Strategy Guide
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master solo gameplay with our comprehensive strategy guide. Learn positioning, looting, rotations, and endgame tactics.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="max-w-4xl mx-auto overflow-hidden hover-elevate transition-all duration-300">
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
          </motion.div>
        </SectionWrapper>

        {/* Tournament Gallery with MediaLightbox */}
        <SectionWrapper data-testid="section-gallery">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-gallery">
                Tournament Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Relive the action from past BGMI solo tournaments
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <MediaLightbox
                images={[
                  { url: tournamentImage1, caption: "Intense solo combat action" },
                  { url: tournamentImage2, caption: "Champion moment - Chicken Dinner!" },
                  { url: tournamentImage3, caption: "Final zone battle royale" },
                  { url: esportsImage1, caption: "Tournament players competing" },
                  { url: esportsImage2, caption: "Precision sniper gameplay" },
                  { url: gamingImage1, caption: "Airdrop action scene" },
                  { url: gamingImage2, caption: "Championship trophy celebration" },
                ]}
              />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Final CTA Band */}
        <SectionWrapper variant="default" data-testid="section-cta">
          <CTABand
            title="Ready to Compete?"
            description="Join India's most competitive BGMI solo tournaments. Register now and prove you're the ultimate solo warrior."
            primaryButtonText="Register for Tournament"
            primaryButtonHref="#registration"
            secondaryButtonText="View All Tournaments"
            secondaryButtonHref="/#tournaments"
          />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
