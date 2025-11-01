/**
 * Home Page Component
 * 
 * Main landing page for the BGMI tournament platform.
 * 
 * Key Sections:
 * 1. Hero Section - Eye-catching banner with CTA buttons
 * 2. Video Introduction - Platform overview and highlights
 * 3. Platform Stats - Animated counters showing achievements (players, tournaments, prizes)
 * 4. Feature Cards - Detailed showcase of platform benefits
 * 5. Live Tournament Tracker - Real-time tournament countdown and slot availability
 * 6. Tournament Cards - Quick overview of Solo, Duo, and Squad tournaments
 * 7. How It Works - Step-by-step registration guide
 * 8. Why Choose GameArena - Key platform differentiators
 * 9. Image Gallery - Tournament action shots with lightbox
 * 10. News & Updates - Latest tournament results and announcements
 * 11. FAQ Section - Common questions with accordion interface
 * 12. Testimonials - Player reviews and ratings
 * 13. CTA Band - Final call-to-action before footer
 * 
 * This page is designed to convert visitors into registered tournament participants
 * by building trust, showcasing value, and making registration easy.
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TournamentCard from "@/components/TournamentCard";
import FeatureCard from "@/components/FeatureCard";
import ModernHero from "@/components/ModernHero";
import SectionWrapper from "@/components/SectionWrapper";
import MediaLightbox from "@/components/MediaLightbox";
import ProfessionalStatCard from "@/components/ProfessionalStatCard";
import ModernTestimonials from "@/components/ModernTestimonials";
import CTABand from "@/components/CTABand";
import VideoSection from "@/components/VideoSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Trophy,
  Zap,
  Users,
  DollarSign,
  Clock,
  CheckCircle2,
  Award,
  Lock,
  CreditCard,
  Youtube,
  Star,
  TrendingUp,
  Calendar,
  Timer,
  Target,
  Rocket,
  ArrowRight,
  PlayCircle,
  Image as ImageIcon,
  ShieldCheck,
  Verified,
  BadgeCheck,
  Wallet,
  Globe,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Link } from "wouter";
import { TOURNAMENTS, FREEFIRE_TOURNAMENTS } from "@shared/config";

// BGMI Images
import heroImage from "@assets/generated_images/BGMI_hero_battle_scene_ad290420.png";
import tournamentImage1 from "@assets/generated_images/BGMI_solo_winner_scene_a8662376.png";
import tournamentImage2 from "@assets/generated_images/BGMI_duo_team_action_d91a2cd0.png";
import tournamentImage3 from "@assets/generated_images/BGMI_squad_team_formation_6d0f26cc.png";
import winnerImage1 from "@assets/generated_images/BGMI_championship_trophy_883ef9dc.png";
import winnerImage2 from "@assets/generated_images/BGMI_tournament_players_competing_4f0d52bc.png";
import esportsImage1 from "@assets/generated_images/BGMI_combat_action_scene_fcabb843.png";
import esportsImage2 from "@assets/generated_images/BGMI_final_zone_battle_5fb27295.png";
import techImage1 from "@assets/generated_images/BGMI_sniper_gameplay_2d74e59c.png";
import techImage2 from "@assets/generated_images/BGMI_airdrop_scene_5a4e2e73.png";
import techImage3 from "@assets/generated_images/BGMI_combat_action_scene_fcabb843.png";
import businessImage1 from "@assets/generated_images/BGMI_tournament_players_competing_4f0d52bc.png";
import businessImage2 from "@assets/generated_images/BGMI_championship_trophy_883ef9dc.png";
import supportImage1 from "@assets/generated_images/BGMI_hero_battle_scene_ad290420.png";
import supportImage2 from "@assets/generated_images/BGMI_final_zone_battle_5fb27295.png";
import officeImage from "@assets/generated_images/BGMI_squad_team_formation_6d0f26cc.png";
// Feature Cards Images - Newly added for detailed feature showcases
import tournamentPrizeCeremonyImage from "@assets/generated_images/BGMI_tournament_prize_ceremony_aefa5585.png";
import mobileGamingSetupImage from "@assets/generated_images/BGMI_mobile_gaming_setup_dea0193c.png";
import teamStrategySessionImage from "@assets/generated_images/BGMI_team_strategy_session_08638493.png";

// Tournament data array - sourced from centralized config
// Includes both BGMI and Free Fire Max tournaments
// Used to render tournament cards on the home page
const tournaments = [
  // BGMI Tournaments
  {
    title: TOURNAMENTS.solo.title,
    mode: TOURNAMENTS.solo.mode,
    entryFee: TOURNAMENTS.solo.entryFee,
    slots: TOURNAMENTS.solo.slots,
    winner: TOURNAMENTS.solo.winner,
    runnerUp: TOURNAMENTS.solo.runnerUp,
    perKill: TOURNAMENTS.solo.perKill,
    formUrl: TOURNAMENTS.solo.formUrl,
  },
  {
    title: TOURNAMENTS.duo.title,
    mode: TOURNAMENTS.duo.mode,
    entryFee: TOURNAMENTS.duo.entryFee,
    slots: TOURNAMENTS.duo.slots,
    winner: TOURNAMENTS.duo.winner,
    runnerUp: TOURNAMENTS.duo.runnerUp,
    perKill: TOURNAMENTS.duo.perKill,
    formUrl: TOURNAMENTS.duo.formUrl,
  },
  {
    title: TOURNAMENTS.squad.title,
    mode: TOURNAMENTS.squad.mode,
    entryFee: TOURNAMENTS.squad.entryFee,
    slots: TOURNAMENTS.squad.slots,
    winner: TOURNAMENTS.squad.winner,
    runnerUp: TOURNAMENTS.squad.runnerUp,
    perKill: TOURNAMENTS.squad.perKill,
    formUrl: TOURNAMENTS.squad.formUrl,
  },
  // Free Fire Max Tournaments
  {
    title: FREEFIRE_TOURNAMENTS.solo.title,
    mode: FREEFIRE_TOURNAMENTS.solo.mode,
    entryFee: FREEFIRE_TOURNAMENTS.solo.entryFee,
    slots: FREEFIRE_TOURNAMENTS.solo.slots,
    winner: FREEFIRE_TOURNAMENTS.solo.winner,
    runnerUp: FREEFIRE_TOURNAMENTS.solo.runnerUp,
    perKill: FREEFIRE_TOURNAMENTS.solo.perKill,
    formUrl: FREEFIRE_TOURNAMENTS.solo.formUrl,
  },
  {
    title: FREEFIRE_TOURNAMENTS.duo.title,
    mode: FREEFIRE_TOURNAMENTS.duo.mode,
    entryFee: FREEFIRE_TOURNAMENTS.duo.entryFee,
    slots: FREEFIRE_TOURNAMENTS.duo.slots,
    winner: FREEFIRE_TOURNAMENTS.duo.winner,
    runnerUp: FREEFIRE_TOURNAMENTS.duo.runnerUp,
    perKill: FREEFIRE_TOURNAMENTS.duo.perKill,
    formUrl: FREEFIRE_TOURNAMENTS.duo.formUrl,
  },
  {
    title: FREEFIRE_TOURNAMENTS.squad.title,
    mode: FREEFIRE_TOURNAMENTS.squad.mode,
    entryFee: FREEFIRE_TOURNAMENTS.squad.entryFee,
    slots: FREEFIRE_TOURNAMENTS.squad.slots,
    winner: FREEFIRE_TOURNAMENTS.squad.winner,
    runnerUp: FREEFIRE_TOURNAMENTS.squad.runnerUp,
    perKill: FREEFIRE_TOURNAMENTS.squad.perKill,
    formUrl: FREEFIRE_TOURNAMENTS.squad.formUrl,
  },
];

// Player testimonials showcasing real experiences and ratings
// Builds social proof and credibility for new visitors
const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Solo Champion - Season 12",
    content: "GameArena is the most professional tournament platform I've played on. Payment verification was instant, and I received my prize money within 24 hours. The transparency in operations is unmatched!",
    initials: "RS",
    rating: 5,
  },
  {
    name: "Team Phoenix",
    role: "Squad Winners - Season 11",
    content: "The transparency in GameArena's operations is unmatched. From registration to prize distribution, everything was smooth and professional. Looking forward to more tournaments!",
    initials: "TP",
    rating: 5,
  },
  {
    name: "Aryan Patel",
    role: "Duo Tournament Participant",
    content: "Best BGMI tournament platform! Clear rules, quick support responses, and guaranteed prize pool. The live streaming option made it even more exciting.",
    initials: "AP",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Regular Participant - 15+ Tournaments",
    content: "I've participated in 15+ GameArena tournaments. Never faced any payment issues or unfair decisions. The admin team is very supportive and responsive on WhatsApp.",
    initials: "VS",
    rating: 5,
  },
  {
    name: "Team Thunderbolts",
    role: "Duo Champions - Season 10",
    content: "Professional management, fair gameplay, and timely prize distribution. GameArena sets the standard for esports tournaments in India.",
    initials: "TT",
    rating: 5,
  },
  {
    name: "Priya Desai",
    role: "Female Gaming Champion",
    content: "GameArena creates an inclusive environment for all players. The professionalism and fair play policies make it my go-to platform for competitive gaming.",
    initials: "PD",
    rating: 5,
  },
];

const galleryImages = [
  { src: tournamentImage1, alt: "Professional BGMI Tournament Action", caption: "Intense Battle Royale Competition" },
  { src: tournamentImage2, alt: "Esports Team Strategy Session", caption: "Squad Coordination" },
  { src: tournamentImage3, alt: "Mobile Gaming Championship", caption: "Championship Finals" },
  { src: winnerImage1, alt: "Tournament Winners Celebration", caption: "Season 12 Champions" },
  { src: winnerImage2, alt: "Prize Distribution Ceremony", caption: "Prize Distribution" },
  { src: esportsImage1, alt: "Professional Esports Setup", caption: "Professional Gaming Setup" },
  { src: esportsImage2, alt: "Tournament Venue", caption: "Tournament Arena" },
  { src: techImage1, alt: "Gaming Technology", caption: "Advanced Gaming Tech" },
  { src: businessImage1, alt: "Professional Management", caption: "Tournament Management" },
  { src: supportImage1, alt: "Player Support", caption: "24/7 Player Support" },
];

const newsUpdates = [
  {
    title: "Season 12 Grand Finals - Record Breaking Prize Pool",
    date: "October 28, 2025",
    type: "Tournament Result",
    description: "Congratulations to team 'Silent Assassins' for winning the Season 12 Grand Finals with a record-breaking 45 kills. Total prize pool of ₹50,000 distributed to top performers.",
    image: winnerImage1,
  },
  {
    title: "New Duo Tournament Format Announced",
    date: "October 25, 2025",
    type: "Announcement",
    description: "Introducing enhanced duo tournaments with increased prize pools and special per-kill bonuses. Registration opens November 1st, 2025. Limited slots available!",
    image: tournamentImage2,
  },
  {
    title: "GameArena Crosses 10,000 Active Players Milestone",
    date: "October 20, 2025",
    type: "Milestone",
    description: "We're thrilled to announce that GameArena has reached 10,000+ active registered players! Thank you for your trust and support in making us India's fastest-growing tournament platform.",
    image: esportsImage1,
  },
  {
    title: "Upcoming Diwali Special Tournament - 2x Prize Pool",
    date: "November 5, 2025",
    type: "Upcoming Event",
    description: "Celebrate Diwali with GameArena! Special tournament with double prize pools across all modes. Solo: ₹700 winner, Duo: ₹700 winner, Squad: ₹700 winner. Register early!",
    image: tournamentImage3,
  },
];

const partners = [
  { name: "UPI Payment Gateway", logo: Wallet, description: "Secure Payment Processing" },
  { name: "Google Pay", logo: CreditCard, description: "Instant Transactions" },
  { name: "PhonePe", logo: Phone, description: "Fast & Reliable" },
  { name: "Paytm", logo: DollarSign, description: "Trusted Partner" },
  { name: "BGMI Official", logo: Trophy, description: "Game Partner" },
  { name: "WhatsApp Business", logo: MessageCircle, description: "Communication Platform" },
];

const faqs = [
  {
    question: "How do I register for a tournament?",
    answer: "Registration is simple: (1) Choose your tournament mode (Solo/Duo/Squad), (2) Make payment via UPI to our official QR code, (3) Fill the registration form with your payment screenshot and transaction ID, (4) Wait for admin verification (usually within 10-15 minutes), (5) Receive room ID and password via WhatsApp before tournament start time.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all UPI payment methods including Google Pay, PhonePe, Paytm, and direct bank UPI transfers. After payment, you must submit a clear screenshot and transaction ID for verification. Cash on delivery or other payment methods are not accepted to ensure transparency and security.",
  },
  {
    question: "How are prizes distributed?",
    answer: "Prizes are distributed within 24-48 hours after tournament completion. Winners receive prizes via UPI transfer to their registered number. We maintain complete transparency - all prize distributions are documented and can be verified. Top 3 positions and per-kill rewards are calculated automatically based on final results.",
  },
  {
    question: "What happens if I can't join the tournament after registration?",
    answer: "If you register but cannot participate, please inform us at least 2 hours before tournament start time via WhatsApp. We offer one-time registration transfer to the next tournament. No refunds are provided for last-minute cancellations or no-shows to maintain fairness for other players.",
  },
  {
    question: "How do you ensure fair gameplay?",
    answer: "We have strict anti-cheat policies: (1) All players must use original game accounts, (2) Spectator mode monitoring during matches, (3) Screenshot verification of final results, (4) Immediate disqualification for any cheating attempts, (5) Permanent ban for repeat offenders. Fair play is our top priority.",
  },
  {
    question: "Can I participate in multiple tournaments simultaneously?",
    answer: "Yes, you can register for multiple tournament modes (Solo, Duo, Squad) as long as their timings don't clash. Each mode has different requirements - Solo needs 1 player, Duo needs 2 players, Squad needs 4 players. Make sure you have the right team size ready before registration.",
  },
  {
    question: "What is the refund policy?",
    answer: "Refunds are provided only if: (1) Tournament is cancelled by GameArena, (2) Technical issues prevent tournament from starting, (3) Payment verification fails due to our error. Refunds are processed within 3-5 business days. Player-side cancellations after slot confirmation are not eligible for refunds.",
  },
  {
    question: "How can I contact support during a tournament?",
    answer: "We provide 24/7 WhatsApp support during active tournaments. Our admin team is available for: (1) Room ID and password issues, (2) Payment verification queries, (3) Technical support, (4) Rule clarifications, (5) Prize distribution questions. Response time is typically under 5 minutes during tournament hours.",
  },
];

/**
 * Live Tournament Card Component
 * 
 * Displays real-time tournament information with countdown timer and slot availability.
 * Features:
 * - Live countdown to tournament start
 * - Visual progress bar showing registration fill rate
 * - Dynamic badge colors (red when slots < 10, default otherwise)
 * - Auto-updates every second via setInterval
 * 
 * @param mode - Tournament mode (Solo/Duo/Squad)
 * @param startTime - Tournament start date/time
 * @param slotsLeft - Number of remaining slots
 * @param totalSlots - Total available slots
 */
const LiveTournamentCard = ({ mode, startTime, slotsLeft, totalSlots }: any) => {
  const [timeLeft, setTimeLeft] = useState("");

  /**
   * Calculate and update remaining time until tournament start
   * Updates every second to provide real-time countdown
   */
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(startTime) - +new Date();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("Live Now!");
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, [startTime]);

  // Calculate registration fill percentage for progress bar
  const slotsPercentage = ((totalSlots - slotsLeft) / totalSlots) * 100;

  return (
    <Card className="hover-elevate transition-all duration-300" data-testid={`live-tournament-${mode.toLowerCase()}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{mode}</CardTitle>
          <Badge variant={slotsLeft < 10 ? "destructive" : "default"}>
            {slotsLeft} Slots Left
          </Badge>
        </div>
        <CardDescription>
          {slotsLeft < 10 ? "Filling Fast!" : "Open for Registration"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Timer className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Starting In</p>
            <p className="text-lg font-bold font-mono" data-testid={`tournament-countdown-${mode.toLowerCase()}`}>
              {timeLeft}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Registration Progress</span>
            <span className="font-medium">{Math.round(slotsPercentage)}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${slotsPercentage}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {totalSlots - slotsLeft} / {totalSlots} players registered
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/${mode.toLowerCase()}`} className="w-full">
          <Button className="w-full" data-testid={`button-register-${mode.toLowerCase()}`}>
            Register Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Modern Hero Section */}
        <ModernHero
          title="India's Most Trusted BGMI Tournament Platform"
          description="Join thousands of players competing for guaranteed prize pools in professionally managed tournaments. Transparent payments, instant verification, and fair gameplay guaranteed."
          backgroundImage={heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tournaments" },
          ]}
          ctaButtons={[
            {
              label: "View Active Tournaments",
              href: "#tournaments",
              icon: Trophy,
            },
            {
              label: "Watch Highlights",
              href: "#video-intro",
              variant: "outline",
              icon: PlayCircle,
            },
          ]}
          overlayOpacity={0.75}
          minHeight="600px"
        />

        {/* Video Introduction Section */}
        <SectionWrapper variant="muted" id="video-intro" data-testid="section-video-intro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VideoSection
              title="Welcome to GameArena - Where Champions Are Made"
              description="Watch how we're revolutionizing BGMI tournaments with professional management, transparent operations, and guaranteed prize pools. Join our growing community of skilled players."
              videoId="dQw4w9WgXcQ"
            />
          </motion.div>
        </SectionWrapper>

        {/* Professional Stats Section */}
        <SectionWrapper variant="default" data-testid="section-stats">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Platform Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building India's largest and most trusted BGMI tournament community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfessionalStatCard
              icon={Users}
              value={10000}
              label="Active Players"
              suffix="+"
              delay={0}
              data-testid="stat-players"
            />
            <ProfessionalStatCard
              icon={Trophy}
              value={150}
              label="Tournaments Hosted"
              suffix="+"
              delay={0.1}
              data-testid="stat-tournaments"
            />
            <ProfessionalStatCard
              icon={DollarSign}
              value={500000}
              label="Total Prizes Distributed"
              prefix="₹"
              delay={0.2}
              data-testid="stat-prizes"
            />
            <ProfessionalStatCard
              icon={Star}
              value={4.9}
              label="Player Satisfaction"
              suffix="/5"
              decimals={1}
              delay={0.3}
              data-testid="stat-rating"
            />
          </div>
        </SectionWrapper>

        {/* Detailed Feature Cards Section - Showcasing key platform benefits */}
        <SectionWrapper variant="muted" data-testid="section-detailed-features">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why GameArena Stands Out</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our professional tournament management, active community, and secure payment systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Tournament Excellence Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="hover-elevate transition-all duration-300 h-full flex flex-col" data-testid="feature-tournament-excellence">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={tournamentPrizeCeremonyImage}
                    alt="Tournament Prize Ceremony"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Tournament Excellence</CardTitle>
                  </div>
                  <CardDescription>Professional organization with guaranteed prizes</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Verified Prize Distribution</p>
                        <p className="text-muted-foreground">100% guaranteed prizes transferred within 24-48 hours via UPI</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Transparent Operations</p>
                        <p className="text-muted-foreground">Complete transparency from registration to final results</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Professional Management</p>
                        <p className="text-muted-foreground">Experienced organizers ensuring smooth tournament execution</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#tournaments" className="w-full">
                    <Button className="w-full" data-testid="button-view-tournaments-excellence">
                      View Tournaments
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Player Community Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="hover-elevate transition-all duration-300 h-full flex flex-col" data-testid="feature-player-community">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={mobileGamingSetupImage}
                    alt="Active BGMI Gaming Community"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Thriving Player Community</CardTitle>
                  </div>
                  <CardDescription>Join 10,000+ active BGMI players nationwide</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">10,000+ Active Players</p>
                        <p className="text-muted-foreground">Growing community of competitive BGMI enthusiasts</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">150+ Tournaments Hosted</p>
                        <p className="text-muted-foreground">Regular competitions for Solo, Duo, and Squad modes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">4.9/5 Player Rating</p>
                        <p className="text-muted-foreground">Highly rated by participants for fairness and professionalism</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button variant="outline" className="w-full" data-testid="button-join-community">
                      Join Community
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Secure Registration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="hover-elevate transition-all duration-300 h-full flex flex-col" data-testid="feature-secure-registration">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={teamStrategySessionImage}
                    alt="Secure Tournament Registration"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Secure Registration</CardTitle>
                  </div>
                  <CardDescription>Fast verification with guaranteed slot confirmation</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Payment Security</p>
                        <p className="text-muted-foreground">SSL encrypted payments with screenshot & transaction ID verification</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Quick Verification</p>
                        <p className="text-muted-foreground">Registration confirmed within 2-4 hours via WhatsApp</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Guaranteed Slots</p>
                        <p className="text-muted-foreground">First-come basis with instant slot reservation after verification</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#tournaments" className="w-full">
                    <Button variant="secondary" className="w-full" data-testid="button-register-now-secure">
                      Register Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Trust & Security Section */}
        <SectionWrapper variant="default" data-testid="section-trust-security">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Trust & Security</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your security and trust are our top priorities. We ensure every transaction is verified and every tournament is fair.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover-elevate transition-all duration-300" data-testid="trust-payment-verification">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Verified className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Payment Verification</CardTitle>
                <CardDescription>100% Secure Transaction Processing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>All payments verified with screenshot and transaction ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Instant confirmation via WhatsApp after verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure UPI payment gateway integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Complete payment transparency and audit trail</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="trust-data-protection">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Data Protection</CardTitle>
                <CardDescription>SSL Encrypted & GDPR Compliant</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>256-bit SSL encryption for all data transfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Personal information never shared with third parties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Secure cloud storage with automatic backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Regular security audits and compliance checks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="trust-fair-play">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BadgeCheck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Fair Play Guarantee</CardTitle>
                <CardDescription>Zero Tolerance for Cheating</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Real-time spectator monitoring during matches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced anti-cheat detection systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Immediate disqualification for rule violations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Transparent dispute resolution process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-6 bg-card rounded-lg border" data-testid="badge-ssl">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-sm">SSL Secured</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border" data-testid="badge-verified">
              <Verified className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-sm">Verified Platform</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border" data-testid="badge-trusted">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-sm">10K+ Trust Us</p>
            </div>
            <div className="text-center p-6 bg-card rounded-lg border" data-testid="badge-support">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-sm">24/7 Support</p>
            </div>
          </div>
        </SectionWrapper>

        {/* Live Tournament Status */}
        <SectionWrapper variant="default" data-testid="section-live-tournaments">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="relative">
                <Clock className="w-10 h-10 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Live Tournament Status</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Register now for upcoming tournaments! Limited slots filling fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LiveTournamentCard
              mode="Solo"
              startTime={new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString()}
              slotsLeft={8}
              totalSlots={100}
            />
            <LiveTournamentCard
              mode="Duo"
              startTime={new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString()}
              slotsLeft={15}
              totalSlots={50}
            />
            <LiveTournamentCard
              mode="Squad"
              startTime={new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString()}
              slotsLeft={12}
              totalSlots={25}
            />
          </div>
        </SectionWrapper>

        {/* Active Tournaments Section */}
        <SectionWrapper variant="muted" id="tournaments" data-testid="section-active-tournaments">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your Battle Mode</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from Solo, Duo, or Squad tournaments. All modes feature guaranteed prize pools, per-kill rewards, and instant payment verification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tournaments.map((tournament, index) => (
              <motion.div
                key={tournament.mode}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TournamentCard {...tournament} />
              </motion.div>
            ))}
          </div>

          <div className="bg-card rounded-lg p-8 border" data-testid="tournament-details">
            <h3 className="text-2xl font-bold mb-6 text-center">Tournament Prize Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-primary">Solo Mode</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entry Fee:</span>
                    <span className="font-semibold">₹20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Slots:</span>
                    <span className="font-semibold">100 Players</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Winner Prize:</span>
                    <span className="font-semibold text-primary">₹350</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Runner-Up:</span>
                    <span className="font-semibold text-primary">₹250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per Kill:</span>
                    <span className="font-semibold text-primary">₹9</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-primary">Duo Mode</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entry Fee:</span>
                    <span className="font-semibold">₹40</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Slots:</span>
                    <span className="font-semibold">50 Teams</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Winner Prize:</span>
                    <span className="font-semibold text-primary">₹350</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Runner-Up:</span>
                    <span className="font-semibold text-primary">₹250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per Kill:</span>
                    <span className="font-semibold text-primary">₹9</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-primary">Squad Mode</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Entry Fee:</span>
                    <span className="font-semibold">₹80</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Slots:</span>
                    <span className="font-semibold">25 Teams</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Winner Prize:</span>
                    <span className="font-semibold text-primary">₹350</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Runner-Up:</span>
                    <span className="font-semibold text-primary">₹250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per Kill:</span>
                    <span className="font-semibold text-primary">₹9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Achievement Showcase */}
        <SectionWrapper variant="default" data-testid="section-achievements">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-10 h-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Platform Milestones</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating our journey of creating India's most trusted esports tournament platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-elevate transition-all duration-300" data-testid="achievement-tournaments">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Trophy className="w-12 h-12 text-primary" />
                  <Badge variant="secondary">2025</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">150+</CardTitle>
                <CardDescription>Tournaments Successfully Hosted</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  From our first tournament with 25 players to hosting 100+ player events, we've come a long way in delivering professional gaming experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="achievement-community">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Users className="w-12 h-12 text-primary" />
                  <Badge variant="secondary">Growing</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">10,000+</CardTitle>
                <CardDescription>Active Gaming Community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our community has grown from a small group of enthusiasts to one of India's largest BGMI tournament communities with players from across the country.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="achievement-prizes">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <DollarSign className="w-12 h-12 text-primary" />
                  <Badge variant="secondary">Milestone</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">₹5L+</CardTitle>
                <CardDescription>Total Prize Money Distributed</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We've distributed over ₹5,00,000 in prize money to deserving winners, maintaining 100% transparency and timely payments throughout our journey.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="achievement-satisfaction">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Star className="w-12 h-12 text-primary" />
                  <Badge variant="secondary">Rating</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">4.9/5</CardTitle>
                <CardDescription>Average Player Rating</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Based on 2,500+ player reviews, we maintain an industry-leading satisfaction score through professional management and fair gameplay.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="achievement-response">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Clock className="w-12 h-12 text-primary" />
                  <Badge variant="secondary">Speed</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">&lt;5 min</CardTitle>
                <CardDescription>Average Support Response Time</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our dedicated support team ensures quick resolution of queries with an average response time of under 5 minutes during tournament hours.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all duration-300" data-testid="achievement-uptime">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <TrendingUp className="w-12 h-12 text-primary" />
                  <Badge variant="secondary">Reliability</Badge>
                </div>
                <CardTitle className="text-3xl font-bold">99.9%</CardTitle>
                <CardDescription>Platform Uptime</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our robust infrastructure ensures minimal downtime, providing players with a reliable and seamless tournament experience every time.
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Detailed Process Timeline */}
        <SectionWrapper variant="muted" data-testid="section-process-timeline">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tournament Registration Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to register and compete in professional BGMI tournaments
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Select Tournament Mode",
                  description: "Choose between Solo (100 players), Duo (50 teams), or Squad (25 teams) based on your preference and team availability.",
                  details: [
                    "Review prize pool and entry fees",
                    "Check tournament timing and rules",
                    "Verify slot availability",
                    "Confirm team size requirements for Duo/Squad",
                  ],
                  icon: Target,
                },
                {
                  step: 2,
                  title: "Complete UPI Payment",
                  description: "Make payment using any UPI app (Google Pay, PhonePe, Paytm) by scanning our official QR code available on the tournament page.",
                  details: [
                    "Scan official GameArena UPI QR code",
                    "Enter exact entry fee amount",
                    "Take clear screenshot of payment confirmation",
                    "Save transaction ID for verification",
                  ],
                  icon: CreditCard,
                },
                {
                  step: 3,
                  title: "Submit Registration Form",
                  description: "Fill out the registration form with accurate player details, team information, and upload payment proof for instant verification.",
                  details: [
                    "Provide accurate in-game name(s) and UID(s)",
                    "Upload clear payment screenshot",
                    "Enter transaction ID correctly",
                    "Provide active WhatsApp number for communication",
                  ],
                  icon: CheckCircle2,
                },
                {
                  step: 4,
                  title: "Payment Verification",
                  description: "Our admin team verifies your payment within 10-15 minutes and sends slot confirmation via WhatsApp.",
                  details: [
                    "Admin verifies payment screenshot and transaction ID",
                    "Confirmation message sent via WhatsApp",
                    "Slot number assigned to your registration",
                    "Registration status updated in real-time",
                  ],
                  icon: Verified,
                },
                {
                  step: 5,
                  title: "Receive Room Credentials",
                  description: "Get room ID and password 30 minutes before tournament start time via WhatsApp. Join the room 10 minutes before start.",
                  details: [
                    "Room ID and password sent 30 mins before start",
                    "Important instructions and rules shared",
                    "Map and game mode details provided",
                    "Admin contact for support during tournament",
                  ],
                  icon: Mail,
                },
                {
                  step: 6,
                  title: "Compete & Win Prizes",
                  description: "Play fair, follow rules, and compete for winner, runner-up, and per-kill prizes. Results verified and prizes distributed within 24-48 hours.",
                  details: [
                    "Follow fair play guidelines strictly",
                    "Screenshot final results for verification",
                    "Report any issues immediately to admin",
                    "Receive prize money via UPI within 24-48 hours",
                  ],
                  icon: Trophy,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`timeline-step-${item.step}`}
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                        {item.step}
                      </div>
                      {index < 5 && (
                        <div className="w-0.5 h-full bg-border mt-2 flex-grow" />
                      )}
                    </div>
                    <Card className="flex-1 hover-elevate transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="flex items-center gap-3 text-xl mb-2">
                              <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                              {item.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {item.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Why Choose GameArena - Enhanced Features */}
        <SectionWrapper variant="default" data-testid="section-features">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose GameArena</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional tournament management with player-first approach and industry-leading features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FeatureCard
                icon={Shield}
                title="Secure Payment Verification"
                description="Every payment is verified through screenshots and transaction IDs with complete transparency. Instant WhatsApp confirmation after successful verification ensures you never miss a tournament slot."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FeatureCard
                icon={Youtube}
                title="YouTube Live Streaming"
                description="Vote for live streaming on our official YouTube channel. Watch your favorite players compete in real-time with professional commentary and analysis. Build your gaming community with us."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FeatureCard
                icon={Trophy}
                title="Guaranteed Prize Pool"
                description="Winner, runner-up, and per-kill rewards are 100% guaranteed for all registered tournaments. We maintain complete prize pool transparency with timely UPI transfers within 24-48 hours of tournament completion."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FeatureCard
                icon={Zap}
                title="Instant Slot Confirmation"
                description="Get instant confirmation after payment verification with no delays or hassle. Real-time slot updates and automated WhatsApp notifications keep you informed at every step of the registration process."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FeatureCard
                icon={MessageCircle}
                title="24/7 WhatsApp Support"
                description="Dedicated admin support available round-the-clock via WhatsApp. Get instant help with registration, payments, technical issues, or any tournament-related queries with average response time under 5 minutes."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FeatureCard
                icon={Target}
                title="Fair Play Monitoring"
                description="Advanced anti-cheat systems and real-time spectator monitoring ensure completely fair gameplay. Zero tolerance policy for cheaters with permanent bans for violations. Your skill determines your success, not exploits."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <FeatureCard
                icon={Rocket}
                title="Professional Management"
                description="Experienced tournament organizers handle every aspect from registration to prize distribution. Detailed rules, clear communication, and professional execution ensure smooth tournament experience for all participants."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <FeatureCard
                icon={Globe}
                title="Pan-India Community"
                description="Join players from across India in our growing esports community. Regional language support, diverse tournament timings, and inclusive policies welcome gamers from all backgrounds to compete at the highest level."
              />
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Partners & Sponsors */}
        <SectionWrapper variant="muted" data-testid="section-partners">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted Partners & Sponsors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver seamless gaming experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate transition-all duration-300 text-center h-full" data-testid={`partner-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <partner.logo className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{partner.name}</h3>
                    <p className="text-xs text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* News & Updates */}
        <SectionWrapper variant="default" data-testid="section-news">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-10 h-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Latest News & Updates</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with tournament results, announcements, and upcoming events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsUpdates.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-elevate transition-all duration-300 h-full" data-testid={`news-${index}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{news.type}</Badge>
                      <span className="text-xs text-muted-foreground">{news.date}</span>
                    </div>
                    <CardTitle className="text-xl">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{news.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Video Highlights Section */}
        <SectionWrapper variant="muted" data-testid="section-video-highlights">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <VideoSection
              title="Tournament Highlights & Epic Moments"
              description="Watch the most intense battles, clutch plays, and championship moments from our previous tournaments. Subscribe to our YouTube channel for live streams and exclusive content."
              videoId="dQw4w9WgXcQ"
            />
          </motion.div>
        </SectionWrapper>

        {/* Tournament Gallery with MediaLightbox */}
        <SectionWrapper variant="default" data-testid="section-gallery">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ImageIcon className="w-10 h-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold">Tournament Gallery</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Glimpses from our professional tournaments, championship moments, and community events
            </p>
          </motion.div>

          <MediaLightbox
            items={galleryImages}
            columns={{ sm: 1, md: 2, lg: 3 }}
          />
        </SectionWrapper>

        {/* Testimonials with ModernTestimonials */}
        <SectionWrapper variant="muted" data-testid="section-testimonials">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Champions Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our tournament winners, participants, and community members about their GameArena experience
            </p>
          </motion.div>

          <ModernTestimonials
            testimonials={testimonials}
            autoPlay={true}
            autoPlayInterval={5000}
          />
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper variant="default" data-testid="section-faq">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about registration, payments, tournaments, and prizes
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} data-testid={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Link href="/contact">
                <Button size="lg" data-testid="button-contact-support">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </SectionWrapper>

        {/* CTA Band */}
        <SectionWrapper variant="default" data-testid="section-cta">
          <CTABand
            title="Ready to Compete?"
            description="Join thousands of players in India's most trusted BGMI tournament platform. Register now for upcoming tournaments and win guaranteed prizes!"
            variant="gradient"
            icon={Rocket}
            buttons={[
              {
                label: "Browse Tournaments",
                href: "#tournaments",
                icon: Trophy,
              },
              {
                label: "Join WhatsApp Community",
                href: "/contact",
                variant: "secondary",
                icon: MessageCircle,
              },
            ]}
            data-testid="cta-register-now"
          />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
