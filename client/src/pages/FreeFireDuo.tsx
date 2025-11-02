/**
 * Free Fire Max Duo Tournament Page Component - Modern Redesign
 * 
 * Enhanced with split hero layout, scroll-triggered animations, and full responsiveness
 * Matches the exact design pattern of Free Fire Solo page
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
import { FREEFIRE_TOURNAMENTS } from "@shared/config";
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
  Sparkles,
  MessageSquare,
  UserPlus
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

// Import Free Fire Max duo team images for gallery and hero section
import heroImage from "@assets/generated_images/Free_Fire_duo_team_coordination_4f78207d.png";
import tournamentImage1 from "@assets/generated_images/Free_Fire_hero_battle_scene_a40d612c.png";
import tournamentImage2 from "@assets/generated_images/Free_Fire_combat_firefight_scene_0a317ba9.png";
import tournamentImage3 from "@assets/generated_images/Free_Fire_victory_celebration_45370171.png";
import esportsImage1 from "@assets/generated_images/Free_Fire_tournament_competitive_scene_5bc9ee86.png";
import esportsImage2 from "@assets/generated_images/Free_Fire_weapon_showcase_60414721.png";
import gamingImage1 from "@assets/generated_images/Free_Fire_character_lineup_2e5c6102.png";
import gamingImage2 from "@assets/generated_images/Free_Fire_championship_trophy_26620803.png";

// Prize breakdown data for visual pie chart
const prizeBreakdownData = [
  { name: "Winner", value: FREEFIRE_TOURNAMENTS.duo.winner, percentage: 40, fill: "hsl(var(--chart-1))" },
  { name: "Runner-Up", value: FREEFIRE_TOURNAMENTS.duo.runnerUp, percentage: 30, fill: "hsl(var(--chart-2))" },
  { name: "Per Kill Pool", value: 300, percentage: 30, fill: "hsl(var(--chart-3))" },
];

// Kill rewards breakdown table data
const killRewardsData = [
  { kills: "0-5", reward: `₹0-${FREEFIRE_TOURNAMENTS.duo.perKill * 5}` },
  { kills: "6-10", reward: `₹${FREEFIRE_TOURNAMENTS.duo.perKill * 6}-${FREEFIRE_TOURNAMENTS.duo.perKill * 10}` },
  { kills: "11-15", reward: `₹${FREEFIRE_TOURNAMENTS.duo.perKill * 11}-${FREEFIRE_TOURNAMENTS.duo.perKill * 15}` },
  { kills: "16+", reward: `₹${FREEFIRE_TOURNAMENTS.duo.perKill * 16}+` },
];

// Historical data of past Free Fire Max duo tournament winners
const pastWinners = [
  {
    teamName: "Fire Phoenix",
    player1: "Aryan_FF",
    player2: "Rohan_Pro",
    kills: 17,
    prize: "₹336",
    date: "October 20, 2025",
    placement: 1,
  },
  {
    teamName: "Blaze Legends",
    player1: "Priya_YT",
    player2: "Neha_GG",
    kills: 14,
    prize: "₹262",
    date: "October 5, 2025",
    placement: 2,
  },
  {
    teamName: "Thunder Strike",
    player1: "Karan_OP",
    player2: "Vivaan_Ace",
    kills: 19,
    prize: "₹352",
    date: "September 22, 2025",
    placement: 1,
  },
  {
    teamName: "Victory Squad",
    player1: "Aarav_TX",
    player2: "Ishaan_King",
    kills: 13,
    prize: "₹304",
    date: "September 8, 2025",
    placement: 1,
  },
];

// Current tournament leaderboard for display
const mockLeaderboard = [
  { rank: 1, teamName: "Dragon Slayers", player1: "Dev_FF", player2: "Raj_Max", kills: 15, points: 148, prize: "₹320" },
  { rank: 2, teamName: "Elite Fighters", player1: "Sam_Pro", player2: "Max_GG", kills: 13, points: 135, prize: "₹254" },
  { rank: 3, teamName: "Night Hawks", player1: "Jay_YT", player2: "Sid_OP", kills: 12, points: 130, prize: "₹96" },
  { rank: 4, teamName: "Storm Warriors", player1: "Nik_Ace", player2: "Ash_TX", kills: 11, points: 118, prize: "₹88" },
  { rank: 5, teamName: "Fire Legends", player1: "Ron_GG", player2: "Tom_Pro", kills: 10, points: 110, prize: "₹80" },
  { rank: 6, teamName: "Blaze Force", player1: "Leo_YT", player2: "Dan_OP", kills: 9, points: 98, prize: "₹72" },
  { rank: 7, teamName: "Titan Duo", player1: "Ben_Max", player2: "Ken_FF", kills: 8, points: 90, prize: "₹64" },
  { rank: 8, teamName: "Viper Team", player1: "Zen_Pro", player2: "Ace_GG", kills: 7, points: 79, prize: "₹56" },
];

// Player testimonials specific to Free Fire Max duo tournament experiences
const testimonials = [
  {
    name: "Aryan & Rohan",
    role: "Duo Tournament Winners - Oct 2025",
    content: "GameArena's Free Fire Max duo tournaments are incredibly well-organized. The coordination with my teammate was smooth, and we won ₹200 plus kill rewards! Prize was transferred within 24 hours. Highly recommend for serious Free Fire duos.",
    initials: "AR",
    rating: 5,
  },
  {
    name: "Priya & Neha",
    role: "Regular Participants",
    content: "We've participated in 5 Free Fire duo tournaments here. The competition is intense but fair. Admin support is excellent, and the registration process is straightforward. Best duo tournament platform for Free Fire Max!",
    initials: "PN",
    rating: 5,
  },
  {
    name: "Karan & Vivaan",
    role: "Runner-Up - Sept 2025",
    content: "Came second in our first Free Fire tournament! The ₹150 runner-up prize plus ₹8 per kill is very rewarding. Great way to test our duo skills against competitive teams. We'll definitely be back for more.",
    initials: "KV",
    rating: 5,
  },
  {
    name: "Aarav & Ishaan",
    role: "Duo Champions - Aug 2025",
    content: "My partner and I have been gaming together for years. This Free Fire tournament brought out the best teamwork in us. Fair rules, quick prize distribution, and great competition. Can't wait for the next one!",
    initials: "AI",
    rating: 5,
  },
  {
    name: "Raj & Aditya",
    role: "Multiple Top 5 Finishes",
    content: "Even though we haven't won yet, every Free Fire tournament improves our coordination. The per-kill rewards keep it exciting, and we always make back our entry fee. Best practice for serious duo teams!",
    initials: "RA",
    rating: 4,
  },
];

// Comprehensive FAQ section for Free Fire Max duo tournaments
const faqs = [
  {
    question: "Can I change my teammate after registration?",
    answer: "No, once your team is registered and payment is confirmed, you cannot change your teammate. Both players must be committed before registration. In exceptional circumstances (medical emergency, etc.), contact admin at least 24 hours before the tournament.",
  },
  {
    question: "What if my teammate cannot join due to an emergency?",
    answer: "Unfortunately, duo tournaments require both team members to participate. If one player cannot join, the team will be disqualified. We recommend having a backup plan and ensuring both players are available before registering. Emergency substitutions are only allowed in extreme cases with admin approval 24 hours prior.",
  },
  {
    question: "How should my teammate and I coordinate during the match?",
    answer: "Effective communication is key in Free Fire duo mode. Use in-game voice chat or external apps like Discord. Coordinate your landing spots, share loot information, call out enemy positions, plan rotations together, and always stick together unless executing a specific strategy. Practice together before the tournament to build synergy.",
  },
  {
    question: "Can we use Discord or other voice apps during the tournament?",
    answer: "Yes, you can use any voice communication app (Discord, TeamSpeak, in-game chat, etc.) to coordinate with your teammate. However, you must not use it to communicate with other teams or gain unfair advantages. Stream sniping through voice apps is strictly prohibited.",
  },
  {
    question: "What are the best duo strategies for Free Fire Max tournament?",
    answer: "Successful Free Fire duo teams maintain close proximity, communicate constantly, share resources fairly, use character abilities in sync, cover different angles during fights, revive quickly when downed, and rotate together. Master gloo wall placements and coordinate ability usage. Practice together before the tournament to build chemistry.",
  },
  {
    question: "How are kills counted for the per-kill reward of ₹8?",
    answer: "Each elimination counts as one kill for your team. The kill is credited to the player who gets the finishing blow. Both team members' kills are combined for the total team kill count. Final kill count is verified from match results, and ₹8 per kill is added to your prize.",
  },
  {
    question: "Do we need separate devices, or can we play from the same location?",
    answer: "Each player must have their own mobile device and separate Free Fire Max accounts. You can be in the same physical location or play remotely - whatever works best for your team's coordination. Many successful duo teams practice and compete while sitting together for better communication.",
  },
  {
    question: "What happens if one player gets disconnected during the match?",
    answer: "Technical issues are unfortunate but are the team's responsibility. If a player disconnects, they should rejoin as quickly as possible. The match will not be paused or restarted. Your teammate can try to survive until you reconnect. Ensure stable internet connection before the tournament starts.",
  },
  {
    question: "How is the prize money split between duo teammates?",
    answer: "The entire prize (Winner: ₹200, Runner-up: ₹150, plus per-kill rewards) is transferred to the team leader's UPI ID. The team leader is responsible for splitting the prize with their partner as per their agreement. We recommend discussing prize distribution before the tournament to avoid conflicts.",
  },
  {
    question: "Can the same person participate in multiple duo teams?",
    answer: "No, each player can only be part of ONE duo team per tournament. Attempting to register in multiple teams will result in disqualification of all teams involved. Choose your teammate wisely and commit to one team only.",
  },
  {
    question: "What if my teammate and I speak different languages?",
    answer: "Communication is crucial in duo mode, so it's best to team up with someone who speaks the same language. However, if you have a communication system that works (basic callouts, pings, etc.), you can make it work. Many successful teams use simple English callouts regardless of their native language.",
  },
  {
    question: "Can I participate if I'm a beginner?",
    answer: "Absolutely! While our tournaments attract competitive teams, beginners are welcome. It's a great way to test your skills with your partner, learn from experienced teams, and improve your gameplay. Even if you don't win, the experience is valuable. Start with realistic expectations and focus on improvement.",
  },
];

// Comprehensive tournament rules organized by category
const detailedRules = [
  {
    title: "Team Registration Requirements",
    type: "info" as const,
    content: [
      "Register with your 2-player team - both players must be confirmed before registration",
      "Team name must be unique, appropriate, and follow community guidelines",
      "Both players' Free Fire Max IDs and in-game names must be accurate and verified",
      "Team leader's WhatsApp number is required for all official communications",
      "Payment verification is mandatory before slot confirmation",
      "Double-check all entered information before submission",
      "Once registered, team composition cannot be changed without prior approval",
    ],
  },
  {
    title: "Payment Process & Verification",
    type: "info" as const,
    content: [
      "Entry fee: ₹40 per team (covers both players - non-refundable except in specific cases)",
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
      "Both team members must be online 15 minutes before tournament start time",
      "Join the match using Room ID and Password shared via WhatsApp",
      "Map and match settings will be announced 1 hour before start time",
      "No use of hacks, cheats, mods, or third-party applications whatsoever",
      "Emulators are strictly prohibited - only mobile devices allowed",
      "Both team members must maintain sportsmanship and respect towards other players",
      "Follow all admin instructions during the tournament",
      "Recording your gameplay is recommended for dispute resolution",
    ],
  },
  {
    title: "Prize Distribution & Rewards",
    type: "success" as const,
    content: [
      "Winner Team (1st Place): ₹200 guaranteed",
      "Runner-Up Team (2nd Place): ₹150 guaranteed",
      "Per Kill Reward: ₹8 per elimination (verified from match stats)",
      "Total Prize Pool: ₹650+ (varies based on total kills)",
      "Prizes distributed within 24-48 hours after tournament",
      "Valid UPI ID required for prize transfer - must match team leader name",
      "All kills verified from official Free Fire Max match statistics",
      "Team must provide screenshot of final stats for verification",
      "Tax deductions may apply as per Indian regulations (if applicable)",
    ],
  },
  {
    title: "Team Communication & Coordination",
    type: "info" as const,
    content: [
      "Team must use in-game voice chat or approved external voice apps (Discord, etc.)",
      "Communicate constantly - call out enemies, share loot, coordinate rotations",
      "Practice together before tournament to build synergy and chemistry",
      "Both players should agree on landing spot and strategy beforehand",
      "Maintain close proximity during match - stick together for team advantage",
      "Have backup communication method ready in case of technical issues",
    ],
  },
  {
    title: "Fair Play & Anti-Cheat",
    type: "warning" as const,
    content: [
      "Zero tolerance policy for cheating, hacking, or unfair practices by any team member",
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
      "Providing incorrect, incomplete, or fraudulent team registration details",
      "Payment verification failure or suspicious payment activity",
      "Use of unauthorized applications, cheats, hacks, or mods by any player",
      "Toxic behavior, harassment, or abuse towards other players/admin",
      "Not following admin instructions or tournament guidelines",
      "Late entry or absence from match without prior notice",
      "Playing with different team member than registered",
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
    title: "Make Team Payment",
    description: "Pay ₹40 entry fee via official QR code and save transaction screenshot",
    icon: Coins,
    time: "2 minutes",
  },
  {
    title: "Fill Team Registration Form",
    description: "Complete form with both players' Free Fire IDs, team name, and payment details",
    icon: CheckCircle2,
    time: "5 minutes",
  },
  {
    title: "Payment Verification",
    description: "Admin verifies your payment and confirms your duo team slot",
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
    title: "Join Tournament Together",
    description: "Both team members enter the match room and compete for prizes",
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
    description: "Teams start registering by making payment and filling form",
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
    description: "Match starts - both team members online 15 minutes early",
  },
  {
    stage: "Results & Distribution",
    date: "November 10, 2025",
    time: "2:00 PM IST",
    status: "Upcoming",
    description: "Winners announced and prizes distributed within 48 hours",
  },
];

export default function FreeFireDuo() {
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
        tournamentName={FREEFIRE_TOURNAMENTS.duo.title}
        entryFee={FREEFIRE_TOURNAMENTS.duo.entryFee}
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
                    <BreadcrumbPage className="text-foreground">Free Fire Duo</BreadcrumbPage>
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
                    <Users className="w-4 h-4 mr-2" />
                    Duo Tournament
                  </Badge>
                </motion.div>

                {/* Main Heading with Gradient */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight gradient-text leading-tight"
                >
                  Free Fire Max<br />Duo Tournament
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-xl"
                >
                  Partner up and dominate Free Fire Max battleground. Compete as a duo team for exciting prizes, recognition, and glory. 25 teams, one ultimate duo champion.
                </motion.p>

                {/* Quick Stats - Glassmorphic Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4"
                >
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.duo.entryFee}</div>
                    <div className="text-xs text-foreground/70">Entry Fee</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{FREEFIRE_TOURNAMENTS.duo.slots}</div>
                    <div className="text-xs text-foreground/70">Teams</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.duo.winner}</div>
                    <div className="text-xs text-foreground/70">Winner</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.duo.perKill}</div>
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
                    Register Your Team
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
                          Quick Team Registration
                        </CardTitle>
                        <CardDescription className="text-base">
                          Secure your duo team spot in minutes
                        </CardDescription>
                      </div>
                      <Badge variant="default" className="flex-shrink-0 px-3 py-1">
                        <Users className="w-3 h-3 mr-1" />
                        {FREEFIRE_TOURNAMENTS.duo.slots} Slots
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
                          <div className="font-semibold text-sm">Make Team Payment</div>
                          <div className="text-xs text-muted-foreground">Pay ₹{FREEFIRE_TOURNAMENTS.duo.entryFee} via UPI QR code</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover-elevate transition-all">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm">Fill Team Details</div>
                          <div className="text-xs text-muted-foreground">Both players' IDs, team name & payment proof</div>
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
                          <strong className="text-foreground">Limited Slots:</strong> Only {FREEFIRE_TOURNAMENTS.duo.slots} teams accepted. First come, first served.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">
                          <strong className="text-foreground">Fast Process:</strong> Complete team registration takes under 10 minutes
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
                      Start Team Registration
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
                Everything you need to know about the duo tournament at a glance
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Ticket}
                  label="Entry Fee"
                  value={FREEFIRE_TOURNAMENTS.duo.entryFee}
                  prefix="₹"
                  delay={0}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Users}
                  label="Total Slots"
                  value={FREEFIRE_TOURNAMENTS.duo.slots}
                  suffix=" Teams"
                  delay={0.1}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Trophy}
                  label="Winner Prize"
                  value={FREEFIRE_TOURNAMENTS.duo.winner}
                  prefix="₹"
                  delay={0.2}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Target}
                  label="Per Kill"
                  value={FREEFIRE_TOURNAMENTS.duo.perKill}
                  prefix="₹"
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
                Transparent prize pool breakdown with team-based and performance-based rewards
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
                    <CardDescription>Earn more with every team elimination</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Team Kills</TableHead>
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
                        <strong>Pro Tip:</strong> Aggressive teamwork pays off! Each kill adds ₹{FREEFIRE_TOURNAMENTS.duo.perKill} to your prize.
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
                    <div className="text-3xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.duo.winner}</div>
                    <div className="text-sm text-muted-foreground mt-1">1st Place Winners</div>
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
                    <div className="text-3xl font-bold text-chart-2">₹{FREEFIRE_TOURNAMENTS.duo.runnerUp}</div>
                    <div className="text-sm text-muted-foreground mt-1">2nd Place Runners-Up</div>
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
                    <div className="text-3xl font-bold text-chart-3">₹{FREEFIRE_TOURNAMENTS.duo.perKill}</div>
                    <div className="text-sm text-muted-foreground mt-1">Per Kill Reward</div>
                  </div>
                  <Badge variant="outline" className="w-full justify-center border-chart-3/50">
                    All Teams
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
                Follow these simple steps to complete your team payment and registration
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <PaymentInstructions amount={FREEFIRE_TOURNAMENTS.duo.entryFee} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Registration Form Section */}
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
                  Complete Your Team Registration
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below after making your payment. All team details must be accurate for slot confirmation.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <FormEmbed
                formUrl={FREEFIRE_TOURNAMENTS.duo.formUrl}
                embedUrl={FREEFIRE_TOURNAMENTS.duo.embedUrl}
                title="Duo Tournament Registration Form"
                description="Complete all required fields for both team members. Your slot will be confirmed after payment verification."
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
                Celebrate our past duo tournament winners and their incredible team performances
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
                          <Users className="w-10 h-10 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
                          <Crown className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{winner.teamName}</h3>
                        <p className="text-sm text-muted-foreground">{winner.player1}</p>
                        <p className="text-sm text-muted-foreground">{winner.player2}</p>
                        <p className="text-xs text-muted-foreground mt-1">{winner.date}</p>
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
                See how duo teams compete during tournaments. Rankings update in real-time.
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="max-w-6xl mx-auto hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle>Current Team Standings</CardTitle>
                      <CardDescription>Top 8 duo teams - Sample data from previous tournament</CardDescription>
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
                          <TableHead>Team Name</TableHead>
                          <TableHead className="hidden sm:table-cell">Players</TableHead>
                          <TableHead className="text-center">Kills</TableHead>
                          <TableHead className="text-center">Points</TableHead>
                          <TableHead className="text-right">Current Prize</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockLeaderboard.map((team, index) => (
                          <TableRow 
                            key={index} 
                            className={index < 2 ? "bg-primary/5" : ""}
                            data-testid={`leaderboard-row-${index}`}
                          >
                            <TableCell className="font-bold">
                              <div className="flex items-center gap-2">
                                {index === 0 && <Crown className="w-4 h-4 text-primary" />}
                                {index === 1 && <Medal className="w-4 h-4 text-chart-2" />}
                                #{team.rank}
                              </div>
                            </TableCell>
                            <TableCell className="font-semibold">{team.teamName}</TableCell>
                            <TableCell className="hidden sm:table-cell text-sm text-muted-foreground">
                              {team.player1} & {team.player2}
                            </TableCell>
                            <TableCell className="text-center">
                              <Badge variant="secondary">{team.kills}</Badge>
                            </TableCell>
                            <TableCell className="text-center font-semibold">{team.points}</TableCell>
                            <TableCell className="text-right font-bold text-primary">{team.prize}</TableCell>
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
                Simple 5-step process to secure your duo team spot. We guide you every step of the way.
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
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1">
                  <TabsTrigger value="all" data-testid="tab-all-rules">All Rules</TabsTrigger>
                  <TabsTrigger value="registration" data-testid="tab-registration">Registration</TabsTrigger>
                  <TabsTrigger value="payment" data-testid="tab-payment">Payment</TabsTrigger>
                  <TabsTrigger value="gameplay" data-testid="tab-gameplay">Gameplay</TabsTrigger>
                  <TabsTrigger value="prizes" data-testid="tab-prizes">Prizes</TabsTrigger>
                  <TabsTrigger value="communication" data-testid="tab-communication">Communication</TabsTrigger>
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

                <TabsContent value="communication" className="mt-6">
                  <RulesAccordion rules={[detailedRules[4]]} />
                </TabsContent>

                <TabsContent value="fairplay" className="mt-6">
                  <RulesAccordion rules={[detailedRules[5], detailedRules[6]]} />
                </TabsContent>

                <TabsContent value="support" className="mt-6">
                  <RulesAccordion rules={[detailedRules[7]]} />
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
                Ensure both team members' devices and connections meet these requirements for smooth gameplay
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
              </motion.div>

              {/* Internet Requirements Card */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wifi className="w-5 h-5 text-primary" />
                      Internet Connection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Minimum Speed</p>
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
                          <span>20+ Mbps download</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                          <span>WiFi connection preferred</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                          <span>Ping under 50ms</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Team Communication Card */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full md:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Team Communication
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Essential Tools</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>In-game voice chat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Discord (recommended)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>WhatsApp for admin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Working microphone</span>
                        </li>
                      </ul>
                    </div>
                    <Separator />
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        <strong className="text-foreground">Pro Tip:</strong> Practice with your teammate before the tournament to ensure communication is smooth and strategies are coordinated.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* FAQ Section */}
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
              <div className="flex items-center justify-center gap-2">
                <AlertCircle className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-faq">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about duo tournaments, team coordination, and prizes
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <AccordionItem 
                      value={`faq-${index}`} 
                      className="border border-border rounded-lg px-6 hover-elevate transition-all"
                      data-testid={`faq-item-${index}`}
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Testimonials Section */}
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
              <div className="flex items-center justify-center gap-2">
                <Star className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-testimonials">
                  What Duo Teams Say
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from successful duo teams who competed in our Free Fire Max tournaments
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <ModernTestimonials testimonials={testimonials} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Media Gallery */}
        <SectionWrapper variant="muted" data-testid="section-gallery">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-gallery">
                  Tournament Gallery
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Action-packed moments from Free Fire Max duo tournaments
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <MediaLightbox
                items={[
                  { src: tournamentImage1, alt: "Free Fire Duo Combat Action", caption: "Intense duo firefight" },
                  { src: tournamentImage2, alt: "Free Fire Team Coordination", caption: "Perfect team coordination" },
                  { src: tournamentImage3, alt: "Free Fire Victory Celebration", caption: "Duo victory celebration" },
                  { src: esportsImage1, alt: "Free Fire Tournament Scene", caption: "Competitive tournament atmosphere" },
                  { src: esportsImage2, alt: "Free Fire Weapon Showcase", caption: "Duo weapon mastery" },
                  { src: gamingImage1, alt: "Free Fire Character Lineup", caption: "Character selection strategy" },
                  { src: gamingImage2, alt: "Free Fire Championship Trophy", caption: "Championship glory awaits" },
                  { src: heroImage, alt: "Free Fire Duo Team Coordination", caption: "Ultimate duo teamwork" },
                ]}
              />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Final CTA Band */}
        <CTABand
          title="Ready to Dominate as a Duo?"
          description="Join the most competitive Free Fire Max duo tournament. Register your team now and compete for exciting prizes!"
          variant="gradient"
          icon={Trophy}
          buttons={[
            { label: "Register Your Team Now", onClick: scrollToRegistration, variant: "secondary", icon: UserPlus },
            { label: "View Complete Rules", href: "#rules", variant: "outline" },
          ]}
          data-testid="cta-band"
        />
      </main>

      <Footer />
    </div>
  );
}
