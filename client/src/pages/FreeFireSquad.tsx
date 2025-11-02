/**
 * Free Fire Max Squad Tournament Page Component - Modern Redesign
 * 
 * Enhanced with split hero layout, scroll-triggered animations, and full responsiveness
 * Matches the design pattern of the Solo page with Squad-specific content
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
import { Separator } from "@/components/ui/separator";
import { 
  Trophy, Users, Coins, Ticket, Calendar, Clock, Target, Shield, 
  Crosshair, Radio, Heart, Eye, TrendingUp, Award, Star, CheckCircle2,
  UserPlus, FileText, CreditCard, Bell, ExternalLink, ArrowRight, 
  AlertCircle, Zap, Sparkles, Crown, Medal, Play
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Import Free Fire Max squad images
import heroImage from "@assets/generated_images/Free_Fire_squad_team_formation_12003cda.png";
import actionImage1 from "@assets/generated_images/Free_Fire_hero_battle_scene_a40d612c.png";
import actionImage2 from "@assets/generated_images/Free_Fire_combat_firefight_scene_0a317ba9.png";
import actionImage3 from "@assets/generated_images/Free_Fire_victory_celebration_45370171.png";
import tournamentImage1 from "@assets/generated_images/Free_Fire_tournament_competitive_scene_5bc9ee86.png";
import tournamentImage2 from "@assets/generated_images/Free_Fire_championship_trophy_26620803.png";
import esportsImage1 from "@assets/generated_images/Free_Fire_weapon_showcase_60414721.png";
import esportsImage2 from "@assets/generated_images/Free_Fire_character_lineup_2e5c6102.png";

// Prize breakdown data for visual pie chart
const prizeBreakdownData = [
  { name: "Winner", value: FREEFIRE_TOURNAMENTS.squad.winner, percentage: 40, fill: "hsl(var(--chart-1))" },
  { name: "Runner-Up", value: FREEFIRE_TOURNAMENTS.squad.runnerUp, percentage: 30, fill: "hsl(var(--chart-2))" },
  { name: "Per Kill Pool", value: 350, percentage: 30, fill: "hsl(var(--chart-3))" },
];

// Kill rewards breakdown table data
const killRewardsData = [
  { kills: "0-5", reward: `₹0-${FREEFIRE_TOURNAMENTS.squad.perKill * 5}` },
  { kills: "6-10", reward: `₹${FREEFIRE_TOURNAMENTS.squad.perKill * 6}-${FREEFIRE_TOURNAMENTS.squad.perKill * 10}` },
  { kills: "11-15", reward: `₹${FREEFIRE_TOURNAMENTS.squad.perKill * 11}-${FREEFIRE_TOURNAMENTS.squad.perKill * 15}` },
  { kills: "16+", reward: `₹${FREEFIRE_TOURNAMENTS.squad.perKill * 16}+` },
];

// Historical squad tournament winners
const pastWinners = [
  {
    squadName: "Phoenix Legends FF",
    members: ["Phoenix_Ace", "Blaze_Rush", "Fire_Support", "Flame_Sniper"],
    placement: "1st Place",
    kills: 18,
    prize: "₹200 + ₹144 (kills)",
    date: "November 2024",
  },
  {
    squadName: "Elite Warriors FF",
    members: ["Elite_Leader", "Warrior_Rush", "Guard_Support", "Eagle_Sniper"],
    placement: "1st Place",
    kills: 16,
    prize: "₹200 + ₹128 (kills)",
    date: "October 2024",
  },
  {
    squadName: "Venom Squad FF",
    members: ["Venom_King", "Strike_Rush", "Shadow_Support", "Ghost_Sniper"],
    placement: "1st Place",
    kills: 15,
    prize: "₹200 + ₹120 (kills)",
    date: "September 2024",
  },
  {
    squadName: "Thunder Strikers",
    members: ["Thunder_Chief", "Lightning_Rush", "Storm_Support", "Bolt_Sniper"],
    placement: "1st Place",
    kills: 17,
    prize: "₹200 + ₹136 (kills)",
    date: "August 2024",
  },
];

// Current tournament leaderboard
const mockLeaderboard = [
  { rank: 1, squadName: "Phoenix Legends FF", kills: 18, placement: "Winner", points: 98, prize: "₹344" },
  { rank: 2, squadName: "Thunder Dragons", kills: 14, placement: "Runner-Up", points: 84, prize: "₹262" },
  { rank: 3, squadName: "Elite Warriors FF", kills: 12, placement: "3rd", points: 76, prize: "₹96" },
  { rank: 4, squadName: "Venom Squad FF", kills: 10, placement: "4th", points: 68, prize: "₹80" },
  { rank: 5, squadName: "Shadow Strikers", kills: 9, placement: "5th", points: 61, prize: "₹72" },
];

// Squad tournament participant testimonials
const testimonials = [
  {
    name: "Phoenix Squad FF",
    role: "Tournament Winners - October 2024",
    content: "GameArena's Free Fire Max squad tournaments are incredibly well-organized. The payment process was smooth, admin support was excellent, and prize distribution was prompt. Our team had an amazing experience competing!",
    initials: "PS",
    rating: 5,
  },
  {
    name: "Arjun Sharma",
    role: "Leader - Blaze Warriors",
    content: "As a Free Fire Max squad captain, I appreciate how easy GameArena makes registration and communication. The tournament rules are clear, fair play is enforced, and the competitive environment is top-notch for Free Fire players.",
    initials: "AS",
    rating: 5,
  },
  {
    name: "Elite Strikers FF",
    role: "Runner-Up - September 2024",
    content: "Best Free Fire Max tournament platform we've participated in. Fair gameplay, professional admins, and the per-kill bonus system makes every elimination count. Looking forward to the next tournament!",
    initials: "ES",
    rating: 5,
  },
  {
    name: "Priya Malhotra",
    role: "Rusher - Venom Squad",
    content: "The Free Fire Max squad tournament format is perfect for competitive gameplay. We loved the team coordination aspect and the prize distribution was exactly as promised. Highly recommend GameArena!",
    initials: "PM",
    rating: 5,
  },
  {
    name: "Thunder Dragons",
    role: "Top 5 Finishers - November 2024",
    content: "Even though we didn't win, we had an incredible Free Fire Max tournament experience. The competition was intense, rules were fair, and we learned a lot about squad coordination. Can't wait for the next squad tournament!",
    initials: "TD",
    rating: 4,
  },
];

// Comprehensive FAQ covering squad-specific scenarios
const enhancedFAQs = [
  {
    question: "How do I form a squad for the Free Fire Max tournament?",
    answer: "Gather 3 friends or teammates who play Free Fire Max regularly. Decide on a unique squad name that represents your team. Choose one person as team leader/captain for all communications. Collect all 4 players' Free Fire Max IDs, in-game names, and contact details. Ensure all members are available for the tournament date and time. Have the team leader complete registration with accurate details.",
  },
  {
    question: "What are the responsibilities of a squad captain/leader?",
    answer: "Register the squad with accurate details of all 4 members. Make payment and upload payment proof on behalf of the squad. Receive and share room credentials with all squad members. Ensure all members are online 15 minutes before tournament. Act as primary point of contact with tournament admins. Coordinate team strategy and role assignments. Receive prize money and distribute to squad members. Handle any disputes or issues that arise during the tournament.",
  },
  {
    question: "Can I change squad members after registration?",
    answer: "Generally, squad members cannot be changed after registration closes. Emergency substitutions may be allowed with 24-hour advance notice. Contact admin immediately if a member cannot participate. Substitutions require admin approval and valid reason. Original registered player details may need verification. Last-minute changes may not be possible due to tournament logistics.",
  },
  {
    question: "What happens if one squad member doesn't show up?",
    answer: "Your squad will be disqualified if all 4 members are not present. Tournament requires full 4-player squads for fair competition. Incomplete squads cannot participate in the match. No refunds issued for squad member no-shows. Always have backup communication with all team members. Confirm attendance from all members before tournament day.",
  },
  {
    question: "How should we assign roles within our Free Fire Max squad?",
    answer: "Leader: Makes strategic calls, rotation decisions, and coordinates the team. Rusher: Aggressive player focused on eliminations and engaging enemies. Support: Provides cover fire, assists teammates, manages supplies. Sniper: Long-range specialist for zone control and enemy tracking. Roles can be flexible based on situation and team strengths. Practice role coordination before tournament for better synergy. Communication is key - ensure everyone knows their primary role.",
  },
  {
    question: "What is the tournament format and duration?",
    answer: "Classic Battle Royale format with 12 squads (48 players total). Match duration: 15-25 minutes depending on zone progression. Check-in starts 30 minutes before match time. All squads must join lobby 15 minutes before start. Single match tournament with placement and kill points. Results announced within 30 minutes of match completion.",
  },
  {
    question: "How are prizes distributed among squad members?",
    answer: "Prize money transferred to team leader's UPI account. Team leader responsible for distributing shares to members. Common split: divide equally among all 4 members (25% each). Some teams give higher share to top fraggers or leader. Decide distribution method within your squad beforehand. GameArena only transfers to team leader, internal split is squad's decision. Prize transfer happens within 24-48 hours after tournament.",
  },
  {
    question: "What if there's a technical issue during the tournament?",
    answer: "Contact tournament admin immediately via WhatsApp. Screen recording helps in case of dispute resolution. Network issues are player's responsibility - ensure stable connection. Game crashes: admin may allow rejoin if reported immediately. Server-side issues: admin may pause or reschedule if affecting multiple teams. Individual player technical issues generally don't qualify for rematch.",
  },
  {
    question: "Can we practice together before the tournament?",
    answer: "Highly recommended to practice with your squad beforehand. Practice communication, callouts, and role coordination. Try different drop locations and rotation strategies. Ensure all members understand the tournament rules. Test everyone's device performance and network stability. Watch our strategy videos for Free Fire Max squad tips and tactics.",
  },
  {
    question: "What happens if our squad wins?",
    answer: "You'll be announced as winners immediately after results verification. Prize money (₹200 for 1st, ₹150 for 2nd, plus kill bonuses) transferred to team leader. Team may be featured on GameArena social media channels. Winners receive priority access to future premium tournaments. Your squad name added to our Hall of Champions. Possible invitation to special invitational tournaments.",
  },
];

// Comprehensive tournament rules organized by category
const squadRules = [
  {
    question: "Squad Formation & Registration",
    answer: "Each squad must consist of exactly 4 players - no more, no less. Team name must be unique, appropriate, and between 3-20 characters. All 4 players' Free Fire Max IDs and in-game names must be accurate and verified. Team leader/captain must provide a valid WhatsApp number for all official communications. Squad members cannot be changed after registration deadline. Each player can only be part of one squad per tournament. Payment verification is mandatory before slot confirmation.",
  },
  {
    question: "Payment & Verification Process",
    answer: "Entry fee: ₹80 per squad (covers all 4 players). Payment must be made via official GameArena QR code only. Upload a clear, unedited screenshot of payment confirmation. Enter the exact Transaction ID/Reference Number from your payment. Payment deadline is 2 hours before tournament start time. Slots will be automatically canceled if payment is not verified in time. No refunds after payment verification.",
  },
  {
    question: "Tournament Conduct & Gameplay Rules",
    answer: "Absolutely no hacks, cheats, emulators, or third-party applications. All squad members must demonstrate good sportsmanship at all times. Follow room ID and password shared by tournament admin exactly. All 4 squad members must be online 15 minutes before tournament start. Use push-to-talk or mute when not communicating with team. Follow admin instructions promptly - non-compliance leads to penalties. Screen recording is recommended for dispute resolution. Team leader is fully responsible for squad coordination and communication.",
  },
  {
    question: "Prize Distribution & Rewards",
    answer: "1st Place Winner Squad: ₹200 (team prize). 2nd Place Runner-Up Squad: ₹150 (team prize). Per Kill Bonus: ₹8 per kill (accumulated for entire squad). Prizes distributed within 24-48 hours after tournament completion. Team leader must provide valid UPI ID for prize transfer. Prize transferred to team leader for distribution among members. Winners may be featured on our social media channels. Top performers receive priority access to future tournaments.",
  },
  {
    question: "Disqualification & Penalty Policy",
    answer: "Providing incorrect, incomplete, or fake squad details. Payment verification failure or fraudulent payment proof. Use of unauthorized applications, hacks, or cheats by any squad member. Toxic behavior, harassment, or abusive language by any team member. Not following admin instructions or tournament rules. Playing with different squad members than those registered. Incomplete squad (less than 4 players) during tournament match. Multiple rule violations may lead to permanent tournament ban. Absolutely no refunds in case of disqualification for rule violations.",
  },
];

// Tournament schedule timeline
const scheduleData = [
  {
    stage: "Registration Opens",
    date: "November 1, 2025",
    time: "12:00 PM IST",
    status: "Open",
    description: "Start registering your squad by making payment and filling form",
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
    description: "Match starts - all 4 squad members be online 15 minutes early",
  },
  {
    stage: "Results & Distribution",
    date: "November 10, 2025",
    time: "2:00 PM IST",
    status: "Upcoming",
    description: "Winners announced and prizes distributed within 48 hours",
  },
];

export default function FreeFireSquad() {
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
        tournamentName={FREEFIRE_TOURNAMENTS.squad.title}
        entryFee={FREEFIRE_TOURNAMENTS.squad.entryFee}
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
                    <BreadcrumbPage className="text-foreground">Free Fire Squad</BreadcrumbPage>
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
                    Squad Tournament
                  </Badge>
                </motion.div>

                {/* Main Heading with Gradient */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight gradient-text leading-tight"
                >
                  Free Fire Max<br />Squad Tournament
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-xl"
                >
                  Assemble your elite 4-player squad and dominate the battlefield. 12 squads compete for championship glory and guaranteed prizes.
                </motion.p>

                {/* Quick Stats - Glassmorphic Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4"
                >
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.squad.entryFee}</div>
                    <div className="text-xs text-foreground/70">Entry Fee</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{FREEFIRE_TOURNAMENTS.squad.slots}</div>
                    <div className="text-xs text-foreground/70">Squads</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.squad.winner}</div>
                    <div className="text-xs text-foreground/70">Winner</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.squad.perKill}</div>
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
                    <Users className="w-5 h-5 mr-2" />
                    Register Squad
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
                          Squad Registration
                        </CardTitle>
                        <CardDescription className="text-base">
                          Register your 4-player team now
                        </CardDescription>
                      </div>
                      <Badge variant="default" className="flex-shrink-0 px-3 py-1">
                        <Users className="w-3 h-3 mr-1" />
                        {FREEFIRE_TOURNAMENTS.squad.slots} Slots
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
                          <div className="font-semibold text-sm">Assemble Squad</div>
                          <div className="text-xs text-muted-foreground">Gather 4 Free Fire Max players</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover-elevate transition-all">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm">Make Payment</div>
                          <div className="text-xs text-muted-foreground">Pay ₹{FREEFIRE_TOURNAMENTS.squad.entryFee} via UPI QR code</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover-elevate transition-all">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">3</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm">Fill Squad Details</div>
                          <div className="text-xs text-muted-foreground">All 4 player IDs & payment proof</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                    </div>

                    {/* Important Info */}
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">
                          <strong className="text-foreground">Limited Slots:</strong> Only {FREEFIRE_TOURNAMENTS.squad.slots} squads accepted. First come, first served.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">
                          <strong className="text-foreground">Squad Required:</strong> All 4 members must be present for match
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
                Everything you need to know about the squad tournament at a glance
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
                  value={FREEFIRE_TOURNAMENTS.squad.entryFee}
                  prefix="₹"
                  delay={0}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Users}
                  label="Total Slots"
                  value={FREEFIRE_TOURNAMENTS.squad.slots}
                  delay={0.1}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Trophy}
                  label="Winner Prize"
                  value={FREEFIRE_TOURNAMENTS.squad.winner}
                  prefix="₹"
                  delay={0.2}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Target}
                  label="Per Kill"
                  value={FREEFIRE_TOURNAMENTS.squad.perKill}
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
                Transparent squad prize pool breakdown with placement and performance rewards
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
                    <CardDescription>Earn more with squad eliminations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Squad Kills</TableHead>
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
                        <strong>Team Strategy:</strong> Coordinate aggressive plays! Each kill adds ₹{FREEFIRE_TOURNAMENTS.squad.perKill} to your squad prize.
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
                    <div className="text-3xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.squad.winner}</div>
                    <div className="text-sm text-muted-foreground mt-1">1st Place Winner Squad</div>
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
                    <div className="text-3xl font-bold text-chart-2">₹{FREEFIRE_TOURNAMENTS.squad.runnerUp}</div>
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
                    <div className="text-3xl font-bold text-chart-3">₹{FREEFIRE_TOURNAMENTS.squad.perKill}</div>
                    <div className="text-sm text-muted-foreground mt-1">Per Kill Reward</div>
                  </div>
                  <Badge variant="outline" className="w-full justify-center border-chart-3/50">
                    All Squads
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Squad Roles Guide Section */}
        <SectionWrapper data-testid="section-roles">
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
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Squad Roles & Strategy
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master these essential Free Fire Max squad roles for competitive success
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* Leader Role */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Radio className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle>Leader</CardTitle>
                    <CardDescription>Strategic Commander</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Makes rotation calls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Decides fight engagements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Manages team resources</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Coordinates zone entries</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Rusher Role */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-chart-2/10 flex items-center justify-center mb-4">
                      <Crosshair className="w-7 h-7 text-chart-2" />
                    </div>
                    <CardTitle>Rusher</CardTitle>
                    <CardDescription>Aggressive Eliminator</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Leads aggressive pushes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Maximizes eliminations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Close-quarter expert</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                        <span>Creates enemy pressure</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Support Role */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
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
                        <span>Provides cover fire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                        <span>Handles revives</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                        <span>Manages utilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                        <span>Holds defensive positions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sniper Role */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
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
                        <span>Controls zones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                        <span>Gathers intel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                        <span>Knocks before pushes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                        <span>Provides overwatch</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
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
                <UserPlus className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Register Your Squad
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete the form to secure your squad's spot in the tournament
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-2xl mx-auto">
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Registration Form</CardTitle>
                  <CardDescription>
                    Fill in all 4 squad members' details and payment information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Tournament Info */}
                  <div className="grid sm:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.squad.entryFee}</div>
                      <div className="text-xs text-muted-foreground">Entry Fee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{FREEFIRE_TOURNAMENTS.squad.slots}</div>
                      <div className="text-xs text-muted-foreground">Squad Slots</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">₹{FREEFIRE_TOURNAMENTS.squad.winner}</div>
                      <div className="text-xs text-muted-foreground">Winner Prize</div>
                    </div>
                  </div>

                  {/* Registration Button */}
                  <EnhancedMagneticButton
                    variant="default"
                    size="lg"
                    className="w-full text-lg py-6"
                    magneticStrength={0.3}
                    enableGlow={true}
                    onClick={scrollToRegistration}
                    data-testid="button-open-form"
                  >
                    <Trophy className="w-5 h-5 mr-2" />
                    Register Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </EnhancedMagneticButton>

                  <p className="text-center text-sm text-muted-foreground">
                    Complete all fields accurately to avoid disqualification
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Past Winners Section */}
        <SectionWrapper data-testid="section-winners">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Hall of Champions
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Celebrating our victorious squads and their achievements
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
            >
              {pastWinners.map((winner, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <Card className="hover-elevate transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="default" className="gap-1">
                          <Trophy className="w-3 h-3" />
                          {winner.placement}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{winner.date}</span>
                      </div>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-primary" />
                        {winner.squadName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold mb-2 text-muted-foreground">Squad Members:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {winner.members.map((member, memberIndex) => (
                            <div key={memberIndex} className="flex items-center gap-2">
                              <Users className="w-3 h-3 text-chart-2" />
                              <span className="text-sm font-mono">{member}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Total Kills</p>
                          <p className="text-2xl font-bold text-chart-2">{winner.kills}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Prize Won</p>
                          <p className="text-2xl font-bold text-primary">{winner.prize}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Tournament Rules */}
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Tournament Rules
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete guidelines for squad registration, gameplay, and prizes
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-4xl mx-auto">
              <RulesAccordion rules={squadRules} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper data-testid="section-faq">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about squad formation and tournament participation
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-4xl mx-auto">
              <RulesAccordion rules={enhancedFAQs} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Testimonials */}
        <SectionWrapper variant="muted" data-testid="section-testimonials">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  What Squads Are Saying
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from previous tournament participants and champions
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <ModernTestimonials testimonials={testimonials} autoPlay autoPlayInterval={6000} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Payment Instructions */}
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
              <div className="flex items-center justify-center gap-2">
                <CreditCard className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Payment Instructions
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Secure payment process for squad registration
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-2xl mx-auto">
              <PaymentInstructions amount={FREEFIRE_TOURNAMENTS.squad.entryFee} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Image Gallery */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Tournament Highlights
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Action-packed moments from our Free Fire Max squad tournaments
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <MediaLightbox
                images={[
                  { src: actionImage1, alt: "Free Fire Max Squad Action 1" },
                  { src: actionImage2, alt: "Free Fire Max Squad Action 2" },
                  { src: actionImage3, alt: "Free Fire Max Victory" },
                  { src: tournamentImage1, alt: "Tournament Scene" },
                  { src: tournamentImage2, alt: "Championship Trophy" },
                  { src: esportsImage1, alt: "Weapon Showcase" },
                ]}
              />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Final CTA Band */}
        <CTABand
          title="Ready to Dominate with Your Squad?"
          description="Join the most competitive Free Fire Max squad tournament. Register now and compete for guaranteed prizes!"
          primaryButtonText="Register Squad Now"
          primaryButtonHref="#registration"
          secondaryButtonText="View Tournament Rules"
          secondaryButtonHref="#rules"
        />
      </main>

      <Footer />
    </div>
  );
}
