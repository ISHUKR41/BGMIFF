/**
 * BGMI Duo Tournament Page Component - Modern Redesign
 * 
 * Enhanced with split hero layout, scroll-triggered animations, and full responsiveness
 * Matches the exact design pattern of Free Fire Duo page
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
  Sparkles,
  MessageSquare,
  UserPlus,
  FileText
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

// Import BGMI images showcasing duo team action and coordination
import heroImage from "@assets/generated_images/BGMI_duo_team_action_d91a2cd0.png";
import duoImage1 from "@assets/generated_images/BGMI_hero_battle_scene_ad290420.png";
import duoImage2 from "@assets/generated_images/BGMI_combat_action_scene_fcabb843.png";
import duoImage3 from "@assets/generated_images/BGMI_final_zone_battle_5fb27295.png";
import duoImage4 from "@assets/generated_images/BGMI_solo_winner_scene_a8662376.png";
import duoImage5 from "@assets/generated_images/BGMI_tournament_players_competing_4f0d52bc.png";
import duoImage6 from "@assets/generated_images/BGMI_sniper_gameplay_2d74e59c.png";
import duoImage7 from "@assets/generated_images/BGMI_airdrop_scene_5a4e2e73.png";
import teamImage1 from "@assets/generated_images/BGMI_championship_trophy_883ef9dc.png";
import teamImage2 from "@assets/generated_images/BGMI_duo_team_action_d91a2cd0.png";
import teamImage3 from "@assets/generated_images/BGMI_squad_team_formation_6d0f26cc.png";
import teamImage4 from "@assets/generated_images/BGMI_tournament_players_competing_4f0d52bc.png";
import teamStrategyImage from "@assets/generated_images/BGMI_team_strategy_session_08638493.png";

// Prize breakdown data for visual pie chart
const prizeBreakdownData = [
  { name: "Winner", value: TOURNAMENTS.duo.winner, percentage: 40, fill: "hsl(var(--chart-1))" },
  { name: "Runner-Up", value: TOURNAMENTS.duo.runnerUp, percentage: 30, fill: "hsl(var(--chart-2))" },
  { name: "Per Kill Pool", value: 400, percentage: 30, fill: "hsl(var(--chart-3))" },
];

// Kill rewards breakdown table data
const killRewardsData = [
  { kills: "0-5", reward: `₹0-${TOURNAMENTS.duo.perKill * 5}` },
  { kills: "6-10", reward: `₹${TOURNAMENTS.duo.perKill * 6}-${TOURNAMENTS.duo.perKill * 10}` },
  { kills: "11-15", reward: `₹${TOURNAMENTS.duo.perKill * 11}-${TOURNAMENTS.duo.perKill * 15}` },
  { kills: "16+", reward: `₹${TOURNAMENTS.duo.perKill * 16}+` },
];

// Historical data of past BGMI duo tournament winners
const pastWinners = [
  {
    teamName: "Thunder Strikers",
    player1: "Aarav_OP",
    player2: "Vivaan_Pro",
    kills: 18,
    prize: "₹512",
    date: "January 15, 2025",
    placement: 1,
  },
  {
    teamName: "Shadow Legends",
    player1: "Rohan_GG",
    player2: "Arjun_Ace",
    kills: 15,
    prize: "₹385",
    date: "January 8, 2025",
    placement: 2,
  },
  {
    teamName: "Apex Predators",
    player1: "Ishaan_YT",
    player2: "Kabir_King",
    kills: 21,
    prize: "₹539",
    date: "December 28, 2024",
    placement: 1,
  },
  {
    teamName: "Venom Squad",
    player1: "Aditya_TX",
    player2: "Rishi_FTW",
    kills: 12,
    prize: "₹358",
    date: "December 20, 2024",
    placement: 1,
  },
];

// Current tournament leaderboard for display
const mockLeaderboard = [
  { rank: 1, teamName: "Phoenix Rising", player1: "Dev_OP", player2: "Raj_Pro", kills: 14, points: 145, prize: "₹476" },
  { rank: 2, teamName: "Elite Warriors", player1: "Sam_GG", player2: "Max_Ace", kills: 12, points: 132, prize: "₹358" },
  { rank: 3, teamName: "Night Raiders", player1: "Jay_YT", player2: "Sid_TX", kills: 11, points: 128, prize: "₹99" },
  { rank: 4, teamName: "Storm Chasers", player1: "Nik_Pro", player2: "Ash_OP", kills: 10, points: 115, prize: "₹90" },
  { rank: 5, teamName: "Legends United", player1: "Ron_GG", player2: "Tom_Ace", kills: 9, points: 108, prize: "₹81" },
  { rank: 6, teamName: "Blaze Squad", player1: "Leo_YT", player2: "Dan_TX", kills: 8, points: 95, prize: "₹72" },
  { rank: 7, teamName: "Titan Force", player1: "Ben_Pro", player2: "Ken_OP", kills: 7, points: 87, prize: "₹63" },
  { rank: 8, teamName: "Viper Clan", player1: "Zen_GG", player2: "Ace_FTW", kills: 6, points: 76, prize: "₹54" },
];

// Player testimonials specific to BGMI duo tournament experiences
const testimonials = [
  {
    name: "Aarav & Vivaan",
    role: "Tournament Winners - Season 12",
    content: "GameArena duo tournaments are incredibly well-organized. The coordination with my teammate was smooth, and we won ₹350 plus kill rewards! Prize was transferred within 24 hours. Highly recommend for serious BGMI duos.",
    initials: "AV",
    rating: 5,
  },
  {
    name: "Rohan & Arjun",
    role: "Regular Participants",
    content: "We've participated in 5 duo tournaments here. The competition is intense but fair. Admin support is excellent, and the registration process is straightforward. Best duo tournament platform we've found!",
    initials: "RA",
    rating: 5,
  },
  {
    name: "Ishaan & Kabir",
    role: "Runner-Up - Season 11",
    content: "Came second in our first tournament! The ₹250 runner-up prize plus ₹9 per kill is very rewarding. Great way to test our duo skills against competitive teams. We'll definitely be back for more.",
    initials: "IK",
    rating: 5,
  },
  {
    name: "Aditya & Rishi",
    role: "Duo Champions - Season 10",
    content: "My partner and I have been gaming together for years. This tournament brought out the best teamwork in us. Fair rules, quick prize distribution, and great competition. Can't wait for the next one!",
    initials: "AR",
    rating: 5,
  },
  {
    name: "Karan & Pranav",
    role: "Multiple Top 5 Finishes",
    content: "Even though we haven't won yet, every tournament improves our coordination. The per-kill rewards keep it exciting, and we always make back our entry fee. Best practice for serious duo teams!",
    initials: "KP",
    rating: 4,
  },
];

// Comprehensive FAQ section for BGMI duo tournaments
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
    answer: "Effective communication is key in duo mode. Use in-game voice chat or external apps like Discord. Coordinate your landing spots, share loot information, call out enemy positions, plan rotations together, and always stick together unless executing a specific strategy. Practice together before the tournament to build synergy.",
  },
  {
    question: "Can we use Discord or other voice apps during the tournament?",
    answer: "Yes, you can use any voice communication app (Discord, TeamSpeak, in-game chat, etc.) to coordinate with your teammate. However, you must not use it to communicate with other teams or gain unfair advantages. Stream sniping through voice apps is strictly prohibited.",
  },
  {
    question: "What are the best duo strategies for this tournament?",
    answer: "Successful duo teams maintain close proximity, communicate constantly, share resources fairly, cover different angles during fights, revive quickly when downed, and rotate together. Hot drops can work but require excellent coordination. Watch our strategy guide video on the page for detailed tips from professional duo players.",
  },
  {
    question: "How are kills counted for the per-kill reward of ₹9?",
    answer: "Each elimination (knock + finish) counts as one kill for your team. The kill is credited to the player who gets the finishing blow. Both team members' kills are combined for the total team kill count. Final kill count is verified from match results, and ₹9 per kill is added to your prize.",
  },
  {
    question: "Do we need separate devices, or can we play from the same location?",
    answer: "Each player must have their own mobile device and separate BGMI accounts. You can be in the same physical location or play remotely - whatever works best for your team's coordination. Many successful duo teams practice and compete while sitting together for better communication.",
  },
  {
    question: "What happens if one player gets disconnected during the match?",
    answer: "Technical issues are unfortunate but are the team's responsibility. If a player disconnects, they should rejoin as quickly as possible. The match will not be paused or restarted. Your teammate can try to survive until you reconnect. Ensure stable internet connection before the tournament starts.",
  },
  {
    question: "How is the prize money split between duo teammates?",
    answer: "The entire prize (Winner: ₹350, Runner-up: ₹250, plus per-kill rewards) is transferred to the team leader's UPI ID. The team leader is responsible for splitting the prize with their partner as per their agreement. We recommend discussing prize distribution before the tournament to avoid conflicts.",
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
      "Both players' BGMI IDs and in-game names must be accurate and verified",
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
      "Winner Team (1st Place): ₹350 guaranteed",
      "Runner-Up Team (2nd Place): ₹250 guaranteed",
      "Per Kill Reward: ₹9 per elimination (verified from match stats)",
      "Total Prize Pool: ₹1000+ (varies based on total kills)",
      "Prizes distributed within 24-48 hours after tournament",
      "Valid UPI ID required for prize transfer - must match team leader name",
      "All kills verified from official BGMI match statistics",
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
    description: "Complete form with both players' BGMI IDs, team name, and payment details",
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

export default function Duo() {
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
        tournamentName={TOURNAMENTS.duo.title}
        entryFee={TOURNAMENTS.duo.entryFee}
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
                    <BreadcrumbPage className="text-foreground">BGMI Duo</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            {/* Split Hero Grid - Info Left, Form Right */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(90vh-120px)] lg:min-h-[calc(85vh-120px)]">
              {/* LEFT COLUMN - Tournament Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Tournament Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    <Users className="w-4 h-4 mr-2" />
                    50 Team Duo Tournament
                  </Badge>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  data-testid="hero-title"
                >
                  BGMI Duo
                  <span className="block text-primary mt-2">Tournament</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl text-foreground/90 max-w-xl"
                  data-testid="hero-description"
                >
                  Partner up and dominate the battleground. Compete as a duo team for exciting prizes, recognition, and glory. 50 teams, one ultimate duo champion.
                </motion.p>

                {/* Key Highlights Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 gap-4 max-w-xl"
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">₹{TOURNAMENTS.duo.winner}</p>
                      <p className="text-sm text-muted-foreground">Winner Prize</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Coins className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">₹{TOURNAMENTS.duo.perKill}</p>
                      <p className="text-sm text-muted-foreground">Per Kill</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Ticket className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">₹{TOURNAMENTS.duo.entryFee}</p>
                      <p className="text-sm text-muted-foreground">Entry Fee</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-4 text-center">
                      <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">{TOURNAMENTS.duo.slots}</p>
                      <p className="text-sm text-muted-foreground">Team Slots</p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <EnhancedMagneticButton
                    onClick={scrollToRegistration}
                    size="lg"
                    className="group"
                    data-testid="button-register-hero"
                  >
                    <UserPlus className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Register Your Team Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </EnhancedMagneticButton>

                  <EnhancedMagneticButton
                    onClick={() => document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" })}
                    variant="outline"
                    size="lg"
                    className="bg-background/20 backdrop-blur-sm hover:bg-background/30"
                    data-testid="button-rules-hero"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    View Rules
                  </EnhancedMagneticButton>
                </motion.div>
              </motion.div>

              {/* RIGHT COLUMN - Quick Registration CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block"
              >
                <Card className="bg-card/90 backdrop-blur-md border-primary/30 shadow-2xl hover-elevate transition-all duration-500">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="default" className="gap-2">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                        Slots Filling Fast
                      </Badge>
                      <Badge variant="secondary">{TOURNAMENTS.duo.slots} Teams Total</Badge>
                    </div>
                    <CardTitle className="text-3xl">Join the Competition</CardTitle>
                    <CardDescription className="text-base">
                      Secure your duo team slot now. Limited spots available!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Quick Info List */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="font-medium">Tournament Date</span>
                        </div>
                        <span className="text-muted-foreground">Nov 9, 2025</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary" />
                          <span className="font-medium">Start Time</span>
                        </div>
                        <span className="text-muted-foreground">6:00 PM IST</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-primary" />
                          <span className="font-medium">Total Prize Pool</span>
                        </div>
                        <span className="text-primary font-bold">₹1000+</span>
                      </div>
                    </div>

                    <Separator />

                    {/* Quick Registration Steps */}
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-muted-foreground">Quick Registration:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Pay ₹40 entry fee via QR code</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Fill registration form with team details</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Get confirmation within 2-4 hours</span>
                        </li>
                      </ul>
                    </div>

                    <EnhancedMagneticButton
                      onClick={scrollToRegistration}
                      size="lg"
                      className="w-full group"
                      data-testid="button-register-card"
                    >
                      Register Team Now
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </EnhancedMagneticButton>

                    <p className="text-xs text-center text-muted-foreground">
                      Scroll down for complete details, rules, and registration form
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Tournament Stats Section */}
        <SectionWrapper data-testid="section-stats" className="relative overflow-hidden">
          <FloatingOrbs count={3} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="relative z-10 space-y-12"
          >
            <motion.div 
              variants={staggerItem}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-stats">
                Tournament Overview
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about entry fees, prizes, and participation details
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Ticket}
                  value={TOURNAMENTS.duo.entryFee}
                  label="Entry Fee per Team"
                  prefix="₹"
                  data-testid="stat-entry-fee"
                />
              </motion.div>
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Users}
                  value={TOURNAMENTS.duo.slots}
                  label="Total Team Slots"
                  data-testid="stat-total-teams"
                />
              </motion.div>
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Trophy}
                  value={TOURNAMENTS.duo.winner}
                  label="Winner Prize"
                  prefix="₹"
                  glassmorphism
                  data-testid="stat-winner-prize"
                />
              </motion.div>
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Coins}
                  value={TOURNAMENTS.duo.perKill}
                  label="Per Kill Reward"
                  prefix="₹"
                  data-testid="stat-per-kill"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Prize Distribution Section with Charts */}
        <SectionWrapper variant="muted" data-testid="section-prizes">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-prizes">
                  Prize Distribution
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Guaranteed prizes for top teams plus additional per-kill rewards for all participants
              </p>
            </motion.div>

            {/* Prize Breakdown Charts */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Pie Chart - Prize Distribution */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      Prize Pool Breakdown
                    </CardTitle>
                    <CardDescription>
                      Visual distribution of guaranteed prizes and kill bonus pool
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        winner: { label: "Winner", color: "hsl(var(--chart-1))" },
                        runnerUp: { label: "Runner-Up", color: "hsl(var(--chart-2))" },
                        perKill: { label: "Per Kill Pool", color: "hsl(var(--chart-3))" },
                      }}
                      className="h-[300px]"
                    >
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
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Kill Rewards Table */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Per-Kill Bonus Rewards
                    </CardTitle>
                    <CardDescription>
                      Additional earnings based on your team's total eliminations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Team Kills</TableHead>
                          <TableHead className="text-right">Bonus Reward</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {killRewardsData.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{row.kills} Kills</TableCell>
                            <TableCell className="text-right text-primary font-bold">{row.reward}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                      <p className="text-sm text-center">
                        <strong>Pro Tip:</strong> Aggressive teamwork pays off! Each kill adds ₹{TOURNAMENTS.duo.perKill} to your prize.
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
                    <div className="text-3xl font-bold text-primary">₹{TOURNAMENTS.duo.winner}</div>
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
                    <div className="text-3xl font-bold text-chart-2">₹{TOURNAMENTS.duo.runnerUp}</div>
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
                    <div className="text-3xl font-bold text-chart-3">₹{TOURNAMENTS.duo.perKill}</div>
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
              <PaymentInstructions />
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
                formUrl={TOURNAMENTS.duo.formUrl}
                embedUrl={TOURNAMENTS.duo.embedUrl}
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
                          <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>6GB+ RAM for best performance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Snapdragon 845+ / Dimensity 900+</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Network Requirements Card */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wifi className="w-5 h-5 text-primary" />
                      Network Connection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Internet Requirements</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Stable WiFi or 4G/5G connection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Minimum 5 Mbps speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Ping below 100ms recommended</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Avoid public WiFi networks</span>
                        </li>
                      </ul>
                    </div>
                    <Separator />
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        <strong>Tip:</strong> WiFi is preferred over mobile data for stability
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Game Settings Card */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full md:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Game Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Recommended Setup</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Graphics: Smooth or Balanced</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Frame Rate: High (30+ FPS)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Enable voice chat for teamwork</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Battery: Full charge or charger ready</span>
                        </li>
                      </ul>
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
                <MessageSquare className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-faq">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about duo tournaments, team coordination, and participation
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    data-testid={`faq-${index}`}
                  >
                    <AccordionItem value={`item-${index}`} className="border rounded-lg px-6 hover-elevate transition-all duration-300">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-4">
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
                  What Duo Teams Are Saying
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from successful duo teams who participated in our tournaments
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="heading-gallery">
                Tournament Highlights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Action shots from previous BGMI duo tournaments and intense team battles
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <MediaLightbox
                items={[
                  { src: duoImage1, alt: "BGMI Duo Tournament Hero Battle Scene", caption: "Intense duo team firefight" },
                  { src: duoImage2, alt: "BGMI Combat Action Scene", caption: "Strategic duo positioning" },
                  { src: duoImage3, alt: "BGMI Final Zone Battle", caption: "Final circle duo showdown" },
                  { src: duoImage4, alt: "BGMI Solo Winner Scene", caption: "Victory celebration moment" },
                  { src: duoImage5, alt: "BGMI Tournament Players Competing", caption: "Competitive tournament atmosphere" },
                  { src: duoImage6, alt: "BGMI Sniper Gameplay", caption: "Precision duo teamwork" },
                  { src: duoImage7, alt: "BGMI Airdrop Scene", caption: "Duo team securing loot" },
                  { src: teamImage1, alt: "BGMI Championship Trophy", caption: "Championship glory awaits" },
                ]}
              />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Final CTA Band */}
        <CTABand
          title="Ready to Dominate as a Duo?"
          description="Register your team now and compete for ₹1000+ in prizes. Limited slots available!"
          buttons={[
            {
              label: "Register Team Now",
              onClick: scrollToRegistration,
              variant: "default",
            },
            {
              label: "View Tournament Rules",
              href: "#rules",
              variant: "outline",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
