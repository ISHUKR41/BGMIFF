/**
 * BGMI Squad Tournament Page Component - Modern Redesign
 * 
 * Enhanced with split hero layout, scroll-triggered animations, and full responsiveness
 * Matches the design pattern of Free Fire Squad page with BGMI-specific content
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
import { TOURNAMENTS } from "@shared/config";
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

// Import BGMI images showcasing squad coordination and team formation
import heroImage from "@assets/generated_images/BGMI_squad_team_formation_6d0f26cc.png";
import actionImage1 from "@assets/generated_images/BGMI_combat_action_scene_fcabb843.png";
import actionImage2 from "@assets/generated_images/BGMI_final_zone_battle_5fb27295.png";
import actionImage3 from "@assets/generated_images/BGMI_hero_battle_scene_ad290420.png";
import tournamentImage1 from "@assets/generated_images/BGMI_tournament_players_competing_4f0d52bc.png";
import tournamentImage2 from "@assets/generated_images/BGMI_championship_trophy_883ef9dc.png";
import esportsImage1 from "@assets/generated_images/BGMI_sniper_gameplay_2d74e59c.png";
import esportsImage2 from "@assets/generated_images/BGMI_airdrop_scene_5a4e2e73.png";

// Prize breakdown data for visual pie chart
const prizeBreakdownData = [
  { name: "Winner", value: TOURNAMENTS.squad.winner, percentage: 40, fill: "hsl(var(--chart-1))" },
  { name: "Runner-Up", value: TOURNAMENTS.squad.runnerUp, percentage: 30, fill: "hsl(var(--chart-2))" },
  { name: "Per Kill Pool", value: 400, percentage: 30, fill: "hsl(var(--chart-3))" },
];

// Kill rewards breakdown table data
const killRewardsData = [
  { kills: "0-5", reward: `₹0-${TOURNAMENTS.squad.perKill * 5}` },
  { kills: "6-10", reward: `₹${TOURNAMENTS.squad.perKill * 6}-${TOURNAMENTS.squad.perKill * 10}` },
  { kills: "11-15", reward: `₹${TOURNAMENTS.squad.perKill * 11}-${TOURNAMENTS.squad.perKill * 15}` },
  { kills: "16+", reward: `₹${TOURNAMENTS.squad.perKill * 16}+` },
];

// Historical squad tournament winners
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

// Current tournament leaderboard
const mockLeaderboard = [
  { rank: 1, squadName: "Alpha Predators", kills: 24, placement: "Winner", points: 124, prize: "₹566" },
  { rank: 2, squadName: "Thunder Squad", kills: 18, placement: "Runner-Up", points: 108, prize: "₹412" },
  { rank: 3, squadName: "Phoenix Gamers", kills: 15, placement: "3rd", points: 95, prize: "₹135" },
  { rank: 4, squadName: "Shadow Elite", kills: 12, placement: "4th", points: 82, prize: "₹108" },
  { rank: 5, squadName: "Viper Squad", kills: 11, placement: "5th", points: 76, prize: "₹99" },
];

// Squad tournament participant testimonials
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

// Comprehensive FAQ covering squad-specific scenarios
const enhancedFAQs = [
  {
    question: "How do I form a squad for the BGMI tournament?",
    answer: "Gather 3 friends or teammates who play BGMI regularly. Decide on a unique squad name that represents your team. Choose one person as team leader/captain for all communications. Collect all 4 players' BGMI IDs, in-game names, and contact details. Ensure all members are available for the tournament date and time. Have the team leader complete registration with accurate details.",
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
    question: "How should we assign roles within our BGMI squad?",
    answer: "IGL (In-Game Leader): Makes strategic calls, rotation decisions, and coordinates the team. Fragger: Aggressive player focused on eliminations and engaging enemies. Support: Provides cover fire, assists teammates, manages supplies. Sniper: Long-range specialist for zone control and enemy tracking. Roles can be flexible based on situation and team strengths. Practice role coordination before tournament for better synergy. Communication is key - ensure everyone knows their primary role.",
  },
  {
    question: "What is the tournament format and duration?",
    answer: "Classic Battle Royale format with 25 squads (100 players total). Match duration: 25-35 minutes depending on zone progression. Check-in starts 30 minutes before match time. All squads must join lobby 15 minutes before start. Single match tournament with placement and kill points. Results announced within 30 minutes of match completion.",
  },
  {
    question: "How are prizes distributed among squad members?",
    answer: "Prize money transferred to team leader's UPI account. Team leader responsible for distributing shares to members. Common split: divide equally among all 4 members (25% each). Some teams give higher share to top fraggers or IGL. Decide distribution method within your squad beforehand. GameArena only transfers to team leader, internal split is squad's decision. Prize transfer happens within 24-48 hours after tournament.",
  },
  {
    question: "What if there's a technical issue during the tournament?",
    answer: "Contact tournament admin immediately via WhatsApp. Screen recording helps in case of dispute resolution. Network issues are player's responsibility - ensure stable connection. Game crashes: admin may allow rejoin if reported immediately. Server-side issues: admin may pause or reschedule if affecting multiple teams. Individual player technical issues generally don't qualify for rematch.",
  },
  {
    question: "Can we practice together before the tournament?",
    answer: "Highly recommended to practice with your squad beforehand. Practice communication, callouts, and role coordination. Try different drop locations and rotation strategies. Ensure all members understand the tournament rules. Test everyone's device performance and network stability. Watch our strategy videos for BGMI squad tips and tactics.",
  },
  {
    question: "What happens if our squad wins?",
    answer: "You'll be announced as winners immediately after results verification. Prize money (₹350 for 1st, ₹250 for 2nd, plus kill bonuses) transferred to team leader. Team may be featured on GameArena social media channels. Winners receive priority access to future premium tournaments. Your squad name added to our Hall of Champions. Possible invitation to special invitational tournaments.",
  },
];

// Comprehensive tournament rules organized by category
const squadRules = [
  {
    question: "Squad Formation & Registration",
    answer: "Each squad must consist of exactly 4 players - no more, no less. Team name must be unique, appropriate, and between 3-20 characters. All 4 players' BGMI IDs and in-game names must be accurate and verified. Team leader/captain must provide a valid WhatsApp number for all official communications. Squad members cannot be changed after registration deadline. Each player can only be part of one squad per tournament. Payment verification is mandatory before slot confirmation.",
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
    answer: "1st Place Winner Squad: ₹350 (team prize). 2nd Place Runner-Up Squad: ₹250 (team prize). Per Kill Bonus: ₹9 per kill (accumulated for entire squad). Prizes distributed within 24-48 hours after tournament completion. Team leader must provide valid UPI ID for prize transfer. Prize transferred to team leader for distribution among members. Winners may be featured on our social media channels. Top performers receive priority access to future tournaments.",
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

// Media gallery images
const galleryImages = [
  { src: actionImage1, alt: "BGMI Squad Combat Action" },
  { src: actionImage2, alt: "BGMI Final Zone Battle" },
  { src: actionImage3, alt: "BGMI Hero Battle Scene" },
  { src: tournamentImage1, alt: "BGMI Tournament Players Competing" },
  { src: tournamentImage2, alt: "BGMI Championship Trophy" },
  { src: esportsImage1, alt: "BGMI Sniper Gameplay" },
  { src: esportsImage2, alt: "BGMI Airdrop Scene" },
];

export default function Squad() {
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
        tournamentName={TOURNAMENTS.squad.title}
        entryFee={TOURNAMENTS.squad.entryFee}
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
                    <BreadcrumbPage className="text-foreground">BGMI Squad</BreadcrumbPage>
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
                  BGMI Squad<br />Tournament
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl lg:text-2xl text-foreground/90 leading-relaxed max-w-xl"
                >
                  Assemble your elite 4-player squad and dominate the battlefield. 25 squads compete for championship glory and guaranteed prizes.
                </motion.p>

                {/* Quick Stats - Glassmorphic Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4"
                >
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{TOURNAMENTS.squad.entryFee}</div>
                    <div className="text-xs text-foreground/70">Entry Fee</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">{TOURNAMENTS.squad.slots}</div>
                    <div className="text-xs text-foreground/70">Squads</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{TOURNAMENTS.squad.winner}</div>
                    <div className="text-xs text-foreground/70">Winner</div>
                  </div>
                  <div className="glass-effect rounded-lg p-4 text-center space-y-1">
                    <div className="text-2xl lg:text-3xl font-bold text-primary">₹{TOURNAMENTS.squad.perKill}</div>
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
                    <UserPlus className="w-5 h-5 mr-2" />
                    Register Squad Now
                  </EnhancedMagneticButton>

                  <EnhancedMagneticButton
                    variant="outline"
                    size="lg"
                    magneticStrength={0.3}
                    className="text-base px-8 py-6 glass-effect border-foreground/20"
                    asChild
                    data-testid="button-view-rules"
                  >
                    <a href="#rules">
                      <Shield className="w-5 h-5 mr-2" />
                      View Rules
                    </a>
                  </EnhancedMagneticButton>
                </motion.div>
              </motion.div>

              {/* RIGHT COLUMN - Registration Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:sticky lg:top-24"
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
                        {TOURNAMENTS.squad.slots} Slots
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
                          <div className="text-xs text-muted-foreground">Gather 4 BGMI players</div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg hover-elevate transition-all">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-primary">2</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm">Make Payment</div>
                          <div className="text-xs text-muted-foreground">Pay ₹{TOURNAMENTS.squad.entryFee} via UPI QR code</div>
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
                          <strong className="text-foreground">Limited Slots:</strong> Only {TOURNAMENTS.squad.slots} squads accepted. First come, first served.
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
                        data-testid="button-view-rules-card"
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
                Everything you need to know about the BGMI squad tournament at a glance
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
                  value={`₹${TOURNAMENTS.squad.entryFee}`}
                  description="Per squad (4 players)"
                  trend="Team Registration"
                  delay={0}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Users}
                  title="Total Slots"
                  value={TOURNAMENTS.squad.slots.toString()}
                  description="Squads per tournament"
                  trend="Limited availability"
                  delay={0.1}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Trophy}
                  title="Winner Prize"
                  value={`₹${TOURNAMENTS.squad.winner}`}
                  description="1st place guaranteed"
                  trend="+Team Bonus"
                  delay={0.2}
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <ProfessionalStatCard
                  icon={Target}
                  title="Per Kill"
                  value={`₹${TOURNAMENTS.squad.perKill}`}
                  description="For each elimination"
                  trend="Squad rewards"
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
                        <strong>Team Strategy:</strong> Coordinate aggressive plays! Each kill adds ₹{TOURNAMENTS.squad.perKill} to your squad prize.
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
                    <div className="text-3xl font-bold text-primary">₹{TOURNAMENTS.squad.winner}</div>
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
                    <div className="text-3xl font-bold text-chart-2">₹{TOURNAMENTS.squad.runnerUp}</div>
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
                    <div className="text-3xl font-bold text-chart-3">₹{TOURNAMENTS.squad.perKill}</div>
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
                Master these essential BGMI squad roles for competitive success
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {/* IGL Role */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
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

              {/* Fragger Role */}
              <motion.div variants={staggerItem}>
                <Card className="hover-elevate transition-all duration-300 h-full">
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
                        <span>Provides covering fire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                        <span>Prioritizes revives</span>
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
                        <span>Controls zones with range</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                        <span>Gathers enemy intel</span>
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

        {/* Past Winners Section */}
        <SectionWrapper variant="muted" data-testid="section-past-winners">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Champion Squads
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Celebrating our previous tournament winners and their achievements
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {pastWinners.map((winner, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  data-testid={`winner-card-${index}`}
                >
                  <Card className="hover-elevate transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl">{winner.squadName}</CardTitle>
                          <CardDescription className="mt-2">{winner.date}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary flex-shrink-0">
                          {winner.placement}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">Squad Members</p>
                        <div className="grid grid-cols-2 gap-2">
                          {winner.members.map((member, idx) => (
                            <div key={idx} className="flex items-center gap-1 text-xs">
                              <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                              <span className="truncate">{member}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <p className="text-xs text-muted-foreground">Total Kills</p>
                          <p className="text-xl font-bold text-chart-2">{winner.kills}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Total Prize</p>
                          <p className="text-xl font-bold text-primary">{winner.prize}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Leaderboard Section */}
        <SectionWrapper data-testid="section-leaderboard">
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Live Standings
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Example leaderboard from our previous BGMI squad tournament
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Final Standings</CardTitle>
                  <CardDescription>Top 5 squads from November 2024 Tournament</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Rank</TableHead>
                          <TableHead>Squad Name</TableHead>
                          <TableHead className="text-center">Placement</TableHead>
                          <TableHead className="text-center">Kills</TableHead>
                          <TableHead className="text-center">Points</TableHead>
                          <TableHead className="text-right">Prize</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mockLeaderboard.map((squad) => (
                          <TableRow
                            key={squad.rank}
                            className={`${
                              squad.rank === 1 ? 'bg-primary/5' : 
                              squad.rank === 2 ? 'bg-chart-2/5' : ''
                            }`}
                          >
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {squad.rank === 1 && <Trophy className="w-5 h-5 text-yellow-500" />}
                                {squad.rank === 2 && <Award className="w-5 h-5 text-slate-400" />}
                                {squad.rank === 3 && <Award className="w-5 h-5 text-orange-600" />}
                                <span className="font-bold">#{squad.rank}</span>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">{squad.squadName}</TableCell>
                            <TableCell className="text-center">
                              <Badge variant={squad.rank <= 2 ? "default" : "secondary"}>
                                {squad.placement}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-center font-semibold text-chart-2">{squad.kills}</TableCell>
                            <TableCell className="text-center font-semibold">{squad.points}</TableCell>
                            <TableCell className="text-right font-bold text-primary">{squad.prize}</TableCell>
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

        {/* Testimonials Section */}
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
                Hear from our previous tournament participants and champions
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <ModernTestimonials testimonials={testimonials} autoPlay autoPlayInterval={6000} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Rules & FAQs Section - Tabbed Interface */}
        <SectionWrapper id="rules" data-testid="section-rules-faqs">
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
                  Rules & FAQs
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about squad formation, registration, and gameplay
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-4xl mx-auto">
              <Tabs defaultValue="faqs" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="faqs">Frequently Asked Questions</TabsTrigger>
                  <TabsTrigger value="rules">Tournament Rules</TabsTrigger>
                </TabsList>
                
                <TabsContent value="faqs" className="mt-6">
                  <RulesAccordion rules={enhancedFAQs} />
                </TabsContent>
                
                <TabsContent value="rules" className="mt-6">
                  <RulesAccordion rules={squadRules} />
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Payment Instructions */}
        <SectionWrapper variant="muted" data-testid="section-payment">
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
                  Payment Process
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Secure payment process for squad registration
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="max-w-2xl mx-auto">
              <PaymentInstructions amount={TOURNAMENTS.squad.entryFee} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Registration Form Section */}
        <SectionWrapper id="registration" data-testid="section-registration">
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
                  Squad Registration
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete the form below to register your 4-player squad for the tournament
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">BGMI Squad Tournament Registration</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Fill in all details accurately. Entry fee: ₹{TOURNAMENTS.squad.entryFee} per squad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    src={TOURNAMENTS.squad.formUrl}
                    width="100%"
                    height="1200"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg"
                  >
                    Loading registration form...
                  </iframe>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Gallery Section */}
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Tournament Gallery
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the intensity and excitement from our BGMI squad tournaments
              </p>
            </motion.div>

            <motion.div variants={staggerItem}>
              <MediaLightbox images={galleryImages} />
            </motion.div>
          </motion.div>
        </SectionWrapper>

        {/* Final CTA Band */}
        <CTABand
          title="Ready to Dominate with Your Squad?"
          description="Register now for the BGMI Squad Tournament and compete for ₹350 winner prize, ₹250 runner-up prize, plus ₹9 per kill bonuses!"
          buttonText="Register Squad Now"
          buttonHref="#registration"
          onClick={scrollToRegistration}
        />
      </main>

      <Footer />
    </div>
  );
}
