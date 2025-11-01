/**
 * Free Fire Max Duo Tournament Page Component
 * 
 * Dedicated page for Free Fire Max Duo Tournament (2-player team) registration and information.
 * 
 * Key Sections:
 * 1. Hero Section - Duo tournament banner with partner-focused messaging
 * 2. Tournament Stats - Entry fee (per team), team slots, and prize breakdown
 * 3. Feature Highlight - Benefits of duo teamwork and coordination
 * 4. Registration Form - Embedded Google Form for team registration
 * 5. Detailed Rules - Team requirements, payment, gameplay, and conduct
 * 6. FAQ Section - Duo-specific questions (teammate changes, coordination, prizes)
 * 7. Past Winners - Showcasing successful duo teams and their achievements
 * 8. Leaderboard - Current standings with team names and both players
 * 9. Payment Instructions - Team payment process and verification
 * 10. Player Testimonials - Reviews from duo tournament participants
 * 11. Strategy Tips - Duo coordination tactics and communication advice
 * 12. Team Gallery - Action shots of duo teams in competition
 * 13. CTA Band - Final registration encouragement
 * 
 * Emphasizes the importance of teamwork, communication, and partner coordination
 * while providing all necessary information for duo team registration.
 */

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
import { FREEFIRE_TOURNAMENTS } from "@shared/config";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Users,
  Coins,
  Ticket,
  Calendar,
  Clock,
  Target,
  Award,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Zap,
  MessageSquare,
  Shield,
  Star,
  Medal,
  Crown,
  Timer,
  UserPlus,
  FileText,
  CreditCard,
  PlayCircle,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

// Import Free Fire Max images showcasing duo team action and coordination
import heroImage from "@assets/generated_images/Free_Fire_duo_team_coordination_4f78207d.png";
import duoImage1 from "@assets/generated_images/Free_Fire_hero_battle_scene_a40d612c.png";
import duoImage2 from "@assets/generated_images/Free_Fire_combat_firefight_scene_0a317ba9.png";
import duoImage3 from "@assets/generated_images/Free_Fire_victory_celebration_45370171.png";
import duoImage4 from "@assets/generated_images/Free_Fire_tournament_competitive_scene_5bc9ee86.png";
import duoImage5 from "@assets/generated_images/Free_Fire_weapon_showcase_60414721.png";
import duoImage6 from "@assets/generated_images/Free_Fire_championship_trophy_26620803.png";
import duoImage7 from "@assets/generated_images/Free_Fire_character_lineup_2e5c6102.png";
// Feature Card Image for team strategy
import teamStrategyImage from "@assets/generated_images/Free_Fire_duo_team_coordination_4f78207d.png";

// Duo tournament rules organized by category for Free Fire Max
// Covers team formation, payment, gameplay, and disqualification policies
const rules = [
  {
    title: "Team Registration Requirements",
    type: "info" as const,
    content: [
      "Register with your 2-player team - both players must be confirmed before registration",
      "Team name must be unique, appropriate, and follow community guidelines",
      "Both players' Free Fire Max IDs and in-game names must be accurate and verified",
      "Team leader's WhatsApp number is required for all official communications",
      "Payment verification is mandatory before slot confirmation - no exceptions",
      "Once registered, team composition cannot be changed without prior approval",
    ],
  },
  {
    title: "Payment Process",
    type: "info" as const,
    content: [
      "Entry fee: ₹40 per team (covers both players)",
      "Payment must be made via official GameArena QR code only",
      "Upload a clear, unedited screenshot of payment confirmation",
      "Enter the correct Transaction ID exactly as shown in your payment receipt",
      "Slots will be automatically canceled if payment is not verified within 24 hours",
      "No refunds after slot confirmation - ensure team commitment before payment",
    ],
  },
  {
    title: "Tournament Rules & Fair Play",
    type: "success" as const,
    content: [
      "Absolutely no use of hacks, cheats, emulators, or third-party applications",
      "Both team members must maintain professional sportsmanship at all times",
      "Follow room credentials and join instructions shared by tournament admin",
      "Both players must be online 15 minutes before tournament start time",
      "Team members cannot be substituted after registration deadline",
      "Any toxic behavior, harassment, or unsportsmanlike conduct leads to immediate disqualification",
      "Stream sniping or ghosting will result in permanent ban from future tournaments",
    ],
  },
  {
    title: "Prize Distribution",
    type: "success" as const,
    content: [
      "Winner Team: ₹350 (First place)",
      "Runner-Up Team: ₹250 (Second place)",
      "Per Kill Reward: ₹9 (for each elimination)",
      "Prizes will be distributed within 24-48 hours after tournament completion",
      "Team leader's valid UPI ID required for prize transfer",
      "Prize will be transferred to team leader who distributes to partner",
      "Winners must provide valid ID proof for prizes above ₹10,000 (tax compliance)",
    ],
  },
  {
    title: "Communication & Coordination",
    type: "info" as const,
    content: [
      "Team must use in-game voice chat or approved external voice apps",
      "WhatsApp group will be created for all participating teams",
      "Admin announcements and updates will be shared in the official group",
      "Check WhatsApp regularly for room details and match schedules",
      "Any queries must be directed to official support, not spam in group",
    ],
  },
  {
    title: "Disqualification Policy",
    type: "warning" as const,
    content: [
      "Providing incorrect, incomplete, or fraudulent team details",
      "Payment verification failure or fake payment screenshots",
      "Use of unauthorized applications, hacks, or cheats by any team member",
      "Toxic behavior, harassment, or unsportsmanlike conduct by any player",
      "Not following admin instructions or room joining protocols",
      "Playing with different team member than registered",
      "Late arrival (not present 15 minutes before tournament)",
      "No refunds in case of disqualification under any circumstances",
    ],
  },
  {
    title: "YouTube Streaming & Content",
    type: "info" as const,
    content: [
      "This tournament may be streamed live on our official YouTube channel",
      "Your vote in the registration form helps us decide streaming schedule",
      "Majority decision will determine if matches are live-streamed",
      "Streaming brings more visibility, recognition, and excitement to the tournament",
      "By participating, you consent to being featured in our tournament content",
    ],
  },
];

// Duo-specific frequently asked questions for Free Fire Max
// Addresses team coordination, communication, and partnership concerns
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
    question: "How are kills counted for the per-kill reward of ₹9?",
    answer: "Each elimination counts as one kill for your team. The kill is credited to the player who gets the finishing blow. Both team members' kills are combined for the total team kill count. Final kill count is verified from match results, and ₹9 per kill is added to your prize.",
  },
  {
    question: "What if both teammates have the same number of kills?",
    answer: "The per-kill reward (₹9 per kill) is calculated for the team's total kills combined. It doesn't matter who gets more kills - the total prize goes to the team leader's UPI, who can then split with their partner as agreed. Individual kill counts only matter for personal bragging rights!",
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
    question: "Is there a minimum rank or level requirement for duo tournaments?",
    answer: "No, Free Fire duo tournaments are open to all skill levels. Whether you're Bronze or Heroic, you and your teammate can participate. However, higher-skilled teams naturally have better chances of winning. Focus on teamwork and communication - these often matter more than individual skill.",
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
    question: "Are there any specific device or graphics requirements?",
    answer: "No specific requirements, but we recommend: Smooth graphics settings, stable 30+ FPS, good network connection (WiFi preferred over mobile data), and sufficient battery or charger ready. Performance issues are your responsibility and won't be grounds for match restart.",
  },
];

// Testimonials from Free Fire duo tournament participants
// Highlights successful partnerships and team experiences
const testimonials = [
  {
    name: "Aryan & Rohan",
    role: "Tournament Winners - October 2025",
    content: "GameArena's Free Fire Max duo tournaments are incredibly well-organized. The coordination with my teammate was smooth, and we won ₹350 plus kill rewards! Prize was transferred within 24 hours. Highly recommend for serious Free Fire duos.",
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
    role: "Runner-Up - September 2025",
    content: "Came second in our first Free Fire tournament! The ₹250 runner-up prize plus ₹9 per kill is very rewarding. Great way to test our duo skills against competitive teams. We'll definitely be back for more.",
    initials: "KV",
    rating: 5,
  },
  {
    name: "Aarav & Ishaan",
    role: "Duo Champions - August 2025",
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

// Historical Free Fire duo tournament winners with team details
// Shows both players' names and combined achievements
const pastWinners = [
  {
    teamName: "Fire Phoenix",
    player1: "Aryan_FF",
    player2: "Rohan_Pro",
    kills: 17,
    prize: "₹503",
    date: "October 20, 2025",
    placement: 1,
  },
  {
    teamName: "Blaze Legends",
    player1: "Priya_YT",
    player2: "Neha_GG",
    kills: 14,
    prize: "₹376",
    date: "October 5, 2025",
    placement: 2,
  },
  {
    teamName: "Thunder Strike",
    player1: "Karan_OP",
    player2: "Vivaan_Ace",
    kills: 19,
    prize: "₹521",
    date: "September 22, 2025",
    placement: 1,
  },
  {
    teamName: "Victory Squad",
    player1: "Aarav_TX",
    player2: "Ishaan_King",
    kills: 13,
    prize: "₹367",
    date: "September 8, 2025",
    placement: 1,
  },
];

// Current tournament leaderboard showing Free Fire duo teams
// Displays both players, kills, and points for transparency
const leaderboardData = [
  { rank: 1, teamName: "Dragon Slayers", player1: "Dev_FF", player2: "Raj_Max", kills: 15, points: 148 },
  { rank: 2, teamName: "Elite Fighters", player1: "Sam_Pro", player2: "Max_GG", kills: 13, points: 135 },
  { rank: 3, teamName: "Night Hawks", player1: "Jay_YT", player2: "Sid_OP", kills: 12, points: 130 },
  { rank: 4, teamName: "Storm Warriors", player1: "Nik_Ace", player2: "Ash_TX", kills: 11, points: 118 },
  { rank: 5, teamName: "Fire Legends", player1: "Ron_GG", player2: "Tom_Pro", kills: 10, points: 110 },
  { rank: 6, teamName: "Blaze Force", player1: "Leo_YT", player2: "Dan_OP", kills: 9, points: 98 },
  { rank: 7, teamName: "Titan Duo", player1: "Ben_Max", player2: "Ken_FF", kills: 8, points: 90 },
  { rank: 8, teamName: "Viper Team", player1: "Zen_Pro", player2: "Ace_GG", kills: 7, points: 79 },
];

export default function FreeFireDuo() {
  /**
   * Smooth scroll to team registration section
   * Helps users quickly access the registration form from any CTA
   */
  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section - Free Fire Max Duo Tournament banner with dynamic background */}
        <ModernHero
          title="Free Fire Max Duo Tournament"
          description="Partner up and dominate Free Fire Max battleground. Compete as a duo team for exciting prizes, recognition, and glory. 50 teams, one ultimate duo champion."
          backgroundImage={heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Tournaments", href: "/#tournaments" },
            { label: "Free Fire Duo Tournament" },
          ]}
          ctaButtons={[
            { label: "Register Now", onClick: scrollToRegistration, icon: UserPlus },
            { label: "View Rules", href: "#rules", variant: "outline", icon: FileText },
          ]}
          overlayOpacity={0.75}
          minHeight="600px"
        />

        {/* Stats Section - Key tournament metrics displayed as animated cards */}
        <SectionWrapper variant="muted" data-testid="section-stats">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfessionalStatCard
              icon={Ticket}
              value={FREEFIRE_TOURNAMENTS.duo.entryFee}
              label="Entry Fee per Team"
              prefix="₹"
              data-testid="stat-entry-fee"
            />
            <ProfessionalStatCard
              icon={Users}
              value={FREEFIRE_TOURNAMENTS.duo.slots}
              label="Total Team Slots"
              data-testid="stat-total-teams"
            />
            <ProfessionalStatCard
              icon={Trophy}
              value={FREEFIRE_TOURNAMENTS.duo.winner}
              label="Winner Prize"
              prefix="₹"
              glassmorphism
              data-testid="stat-winner-prize"
            />
            <ProfessionalStatCard
              icon={Coins}
              value={FREEFIRE_TOURNAMENTS.duo.perKill}
              label="Per Kill Reward"
              prefix="₹"
              data-testid="stat-per-kill"
            />
          </div>
        </SectionWrapper>

        {/* Comprehensive Feature Highlight Card - Free Fire Duo Tournament Benefits */}
        <SectionWrapper variant="default" data-testid="section-feature-highlight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-elevate transition-all duration-300 overflow-hidden" data-testid="feature-duo-tournament">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section with hover effect */}
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={teamStrategyImage}
                    alt="Free Fire Max Duo Tournament Team Strategy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Content Section with feature details */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">Duo Tournament Excellence</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Team up with your partner for competitive duo Free Fire Max gameplay with guaranteed prizes and professional management
                    </p>
                  </div>

                  {/* Feature highlights with icons */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Team Prize Pool</h4>
                        <p className="text-sm text-muted-foreground">Winner: ₹350 | Runner-Up: ₹250 | Per Kill: ₹9 - Split between team members, distributed within 24-48 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Team Registration Process</h4>
                        <p className="text-sm text-muted-foreground">Simple team registration with secure payment verification - Both members confirmed in 2-6 hours via WhatsApp</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Teamwork & Coordination</h4>
                        <p className="text-sm text-muted-foreground">Strategize with your duo partner, coordinate attacks, and dominate the Free Fire battlefield together</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Star className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Professional Support</h4>
                        <p className="text-sm text-muted-foreground">24/7 tournament support, fair play monitoring, and transparent prize distribution for all teams</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA buttons for action */}
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={scrollToRegistration} data-testid="button-register-duo-feature">
                      Register Your Team - ₹{FREEFIRE_TOURNAMENTS.duo.entryFee}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" data-testid="button-rules-duo-feature">
                      <a href="#rules" className="flex items-center">
                        View Duo Rules
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
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <UserPlus className="w-4 h-4 mr-2" />
                Join Tournament
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Register Your Duo Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete the registration form with accurate details for both team members
              </p>
            </div>

            {/* Registration card with tournament details and process */}
            <div className="max-w-4xl mx-auto">
              <Card className="hover-elevate transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl">Free Fire Max Duo Tournament Registration</CardTitle>
                      <CardDescription className="mt-2">
                        Please fill out all team details accurately. Your slot will be confirmed after payment verification within 2-6 hours.
                      </CardDescription>
                    </div>
                    <Badge variant="default" className="shrink-0">Duo</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Tournament summary stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Ticket className="w-4 h-4" />
                        <span>Entry Fee</span>
                      </div>
                      <p className="text-3xl font-mono font-bold">₹{FREEFIRE_TOURNAMENTS.duo.entryFee}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Total Teams</span>
                      </div>
                      <p className="text-3xl font-mono font-bold">{FREEFIRE_TOURNAMENTS.duo.slots}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span>Winner Prize</span>
                      </div>
                      <p className="text-3xl font-mono font-bold">₹{FREEFIRE_TOURNAMENTS.duo.winner}</p>
                    </div>
                  </div>

                  <Separator />

                  {/* Step-by-step registration process */}
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      Registration Process
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">1.</span>
                        <span>Form your duo team with a partner you trust</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">2.</span>
                        <span>Make payment of ₹{FREEFIRE_TOURNAMENTS.duo.entryFee} via official UPI QR code</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">3.</span>
                        <span>Fill the form with both players' Free Fire IDs, names, and payment details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">4.</span>
                        <span>Wait for admin verification (2-6 hours)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-mono text-primary">5.</span>
                        <span>Receive room credentials 30 minutes before match</span>
                      </li>
                    </ul>
                  </div>

                  {/* Security badge */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="space-y-1 text-sm">
                        <p className="font-semibold">Secure & Verified Registration</p>
                        <p className="text-muted-foreground">All registrations are verified by our admin team. Both team members must be confirmed before registration is complete.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.location.href = FREEFIRE_TOURNAMENTS.duo.formUrl}
                    data-testid="button-register-duo"
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

        {/* Tournament Schedule Section - Important dates and timelines */}
        <SectionWrapper data-testid="section-schedule">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Tournament Schedule
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Upcoming Duo Tournament Schedule
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Plan ahead with our detailed tournament schedule. Registration opens early - secure your duo team slot before it fills up!
              </p>
            </div>

            {/* Schedule cards showing registration and tournament phases */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="hover-elevate transition-all duration-300" data-testid="schedule-registration">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <UserPlus className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Registration Phase</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Opens: Every Monday</p>
                      <p className="text-sm text-muted-foreground">Registration starts at 10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Closes: Friday 8:00 PM</p>
                      <p className="text-sm text-muted-foreground">No late registrations accepted</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Payment Deadline</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours of registration</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300" data-testid="schedule-tournament">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Tournament Day</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Every Saturday</p>
                      <p className="text-sm text-muted-foreground">Weekly duo tournaments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Timer className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Check-in: 5:45 PM</p>
                      <p className="text-sm text-muted-foreground">Both players must be online</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PlayCircle className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-semibold">Match Start: 6:00 PM</p>
                      <p className="text-sm text-muted-foreground">Room details shared at 5:50 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Important schedule notes */}
            <Card className="mt-6 bg-primary/5 border-primary/20" data-testid="schedule-note">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2">Important Schedule Notes:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Slots are allocated on first-come, first-served basis after payment verification</li>
                      <li>• Both team members must be online 15 minutes before match start</li>
                      <li>• Late arrivals will result in team disqualification with no refund</li>
                      <li>• Tournament duration: Approximately 20-30 minutes per match</li>
                      <li>• Prize distribution within 24-48 hours after tournament completion</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Prize Breakdown Visualization - Detailed prize structure */}
        <SectionWrapper variant="muted" data-testid="section-prize-breakdown">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Award className="w-4 h-4 mr-2" />
                Prize Structure
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Detailed Prize Breakdown
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Transparent and rewarding prize distribution. Win big for placements and earn per-kill rewards!
              </p>
            </div>

            {/* Prize cards for Winner, Runner-up, and Per Kill */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              <Card className="hover-elevate transition-all duration-300 border-2 border-primary/50" data-testid="prize-winner">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-4">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Winner Team</CardTitle>
                  <Badge className="mx-auto mt-2 bg-gradient-to-r from-yellow-400 to-yellow-600">
                    #1 Place
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-5xl font-bold text-primary">₹350</div>
                  <p className="text-muted-foreground">
                    Champion duo team receives the grand prize
                  </p>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Winner Title & Recognition
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Featured on Winners Showcase
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Plus Per-Kill Rewards
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300 border-2 border-chart-2/50" data-testid="prize-runnerup">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center mb-4">
                    <Medal className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Runner-Up Team</CardTitle>
                  <Badge className="mx-auto mt-2 bg-gradient-to-r from-gray-300 to-gray-500">
                    #2 Place
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-5xl font-bold text-chart-2">₹250</div>
                  <p className="text-muted-foreground">
                    Second-place duo team prize
                  </p>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Runner-Up Recognition
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Featured on Leaderboard
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Plus Per-Kill Rewards
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all duration-300 border-2 border-chart-3/50" data-testid="prize-perkill">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-chart-3 to-chart-4 flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Per Kill Reward</CardTitle>
                  <Badge className="mx-auto mt-2 bg-gradient-to-r from-chart-3 to-chart-4">
                    All Teams
                  </Badge>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-5xl font-bold text-chart-3">₹9</div>
                  <p className="text-muted-foreground">
                    For every elimination your duo achieves
                  </p>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Applies to All Teams
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Counted from Match Results
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Added to Final Prize
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Prize calculation example */}
            <Card className="max-w-4xl mx-auto" data-testid="prize-calculation">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Prize Calculation Example
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="font-semibold mb-3">Scenario: Your duo wins with 15 kills</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Winner Prize:</span>
                      <span className="font-mono font-semibold">₹350</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Kill Rewards (15 × ₹9):</span>
                      <span className="font-mono font-semibold">₹135</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center text-lg font-bold text-primary">
                      <span>Total Prize:</span>
                      <span className="font-mono">₹485</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Prize is transferred to team leader's UPI. Leader distributes to partner as per team agreement.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Registration Timeline - Visual step-by-step process */}
        <SectionWrapper data-testid="section-timeline">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Registration Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How to Register Your Duo Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Follow these simple steps to secure your duo team slot in the tournament
              </p>
            </div>

            {/* Timeline cards showing each registration step */}
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  step: 1,
                  icon: FileText,
                  title: "Fill Registration Form",
                  description: "Complete the registration form with accurate details for both team members. Include team name, Free Fire IDs, in-game names, and contact information.",
                  time: "2-3 minutes",
                },
                {
                  step: 2,
                  icon: CreditCard,
                  title: "Make Payment",
                  description: "Pay ₹40 entry fee using the official GameArena QR code. Take a clear screenshot of the payment confirmation showing transaction ID.",
                  time: "1-2 minutes",
                },
                {
                  step: 3,
                  icon: CheckCircle2,
                  title: "Submit Payment Proof",
                  description: "Upload payment screenshot in the registration form. Enter the exact transaction ID. Our team verifies payments within 2-6 hours.",
                  time: "1 minute",
                },
                {
                  step: 4,
                  icon: MessageSquare,
                  title: "Join WhatsApp Group",
                  description: "After verification, you'll be added to the official tournament WhatsApp group. You'll receive room details and updates here.",
                  time: "Instant",
                },
                {
                  step: 5,
                  icon: Trophy,
                  title: "Tournament Day",
                  description: "Be online 15 minutes early. Check WhatsApp for room credentials. Join the room with your duo partner and compete for glory!",
                  time: "20-30 min match",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-elevate transition-all duration-300" data-testid={`timeline-step-${item.step}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline">Step {item.step}</Badge>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-3">{item.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Past Winners Section - Hall of Fame */}
        <SectionWrapper variant="muted" data-testid="section-past-winners">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Star className="w-4 h-4 mr-2" />
                Hall of Fame
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Past Duo Champions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Celebrating our legendary duo teams who conquered the Free Fire battleground
              </p>
            </div>

            {/* Winner cards grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {pastWinners.map((winner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover-elevate transition-all duration-300" data-testid={`past-winner-${index}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            {winner.placement === 1 ? (
                              <Crown className="w-6 h-6 text-yellow-500" />
                            ) : (
                              <Medal className="w-6 h-6 text-gray-400" />
                            )}
                            <CardTitle className="text-xl">{winner.teamName}</CardTitle>
                          </div>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              {winner.player1} & {winner.player2}
                            </p>
                            <p className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {winner.date}
                            </p>
                          </div>
                        </div>
                        <Badge className={winner.placement === 1 ? "bg-gradient-to-r from-yellow-400 to-yellow-600" : "bg-gradient-to-r from-gray-300 to-gray-500"}>
                          {winner.placement === 1 ? "Winner" : "Runner-Up"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                          <Target className="w-6 h-6 mx-auto mb-2 text-primary" />
                          <p className="text-2xl font-bold">{winner.kills}</p>
                          <p className="text-sm text-muted-foreground">Total Kills</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/50">
                          <Trophy className="w-6 h-6 mx-auto mb-2 text-primary" />
                          <p className="text-2xl font-bold">{winner.prize}</p>
                          <p className="text-sm text-muted-foreground">Prize Won</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Team Coordination Tips - Free Fire specific strategies */}
        <SectionWrapper data-testid="section-coordination-tips">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Pro Tips
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Free Fire Duo Coordination & Strategy Tips
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Master these coordination strategies to improve your Free Fire duo teamwork and win more matches
              </p>
            </div>

            {/* Tabbed strategy guide */}
            <Tabs defaultValue="communication" className="max-w-5xl mx-auto" data-testid="coordination-tabs">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="communication" data-testid="tab-communication">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Communication
                </TabsTrigger>
                <TabsTrigger value="positioning" data-testid="tab-positioning">
                  <Target className="w-4 h-4 mr-2" />
                  Positioning
                </TabsTrigger>
                <TabsTrigger value="combat" data-testid="tab-combat">
                  <Zap className="w-4 h-4 mr-2" />
                  Combat
                </TabsTrigger>
                <TabsTrigger value="endgame" data-testid="tab-endgame">
                  <Trophy className="w-4 h-4 mr-2" />
                  Endgame
                </TabsTrigger>
              </TabsList>

              {/* Communication tab */}
              <TabsContent value="communication" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Effective Communication</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Clear Callouts",
                        description: "Use specific directions (North, South, Clock positions) and landmarks in Free Fire. Say 'Enemy at warehouse, 12 o'clock' instead of 'over there'.",
                      },
                      {
                        title: "Constant Updates",
                        description: "Share everything: armor level, ammo count, healing items, enemy movements, and your position. Over-communication is better than silence in Free Fire duo mode.",
                      },
                      {
                        title: "Voice Chat Discipline",
                        description: "Stay calm during intense moments. One person calls shots in combat. Avoid talking over each other. Use short, clear phrases for quick reactions.",
                      },
                      {
                        title: "Plan Before Action",
                        description: "Discuss strategy before rotating or engaging. Agree on landing spots, character selection, rotation paths, and engagement rules before the match starts.",
                      },
                    ].map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">{tip.title}</p>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Positioning tab */}
              <TabsContent value="positioning" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Strategic Positioning</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Stay Together",
                        description: "Never be more than 30-50m apart in Free Fire. Close proximity allows quick support if one player is engaged. Distance = death in duo mode.",
                      },
                      {
                        title: "Cover Different Angles",
                        description: "While staying close, cover complementary directions. If your partner watches North, you watch South. Use gloo walls to create cover and angles.",
                      },
                      {
                        title: "High Ground Advantage",
                        description: "Always prioritize buildings and elevation. One player holds high ground while the other scouts or flanks from lower positions when needed.",
                      },
                      {
                        title: "Zone Rotation",
                        description: "Rotate early to the next zone in Free Fire. Move together along the edge, not through the center. Use vehicles when safe, but exit together.",
                      },
                    ].map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">{tip.title}</p>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Combat tab */}
              <TabsContent value="combat" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Combat Coordination</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Focus Fire & Character Abilities",
                        description: "Both players shoot the same enemy when possible. Coordinate character abilities - if one uses Chrono, other pushes aggressively. Two guns on one target = faster knock.",
                      },
                      {
                        title: "Instant Revive",
                        description: "If partner is knocked, eliminate threats first, then revive immediately. Use gloo walls to create cover for safer revives. Drop med kits for downed partner.",
                      },
                      {
                        title: "Gloo Wall Teamwork",
                        description: "One player creates gloo wall cover while the other pushes or heals. Practice synchronized gloo wall placements to create defensive positions quickly.",
                      },
                      {
                        title: "Retreat Together",
                        description: "If overwhelmed, both players retreat together using gloo walls and smoke grenades. Covering fire while partner heals. Never leave your teammate behind.",
                      },
                    ].map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">{tip.title}</p>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Endgame tab */}
              <TabsContent value="endgame" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Final Circle Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Zone Control",
                        description: "In final circles, secure center position early. Use grenades and gloo walls to deny other teams from entering your area. Build defensive structures.",
                      },
                      {
                        title: "Smart Movement",
                        description: "Use prone and crawl in final zones. Move during firefights between other teams. Both players move together, never split up. Time movements with zone shrinks.",
                      },
                      {
                        title: "Resource Management",
                        description: "Conserve throwables, gloo walls, and healing for final fights. Share resources - if one player has extra grenades or medkits, distribute evenly.",
                      },
                      {
                        title: "Third-Party Timing",
                        description: "Let other duo teams fight first in Free Fire. Third-party when both teams are weak. Rush together as soon as you hear knocks from their battle.",
                      },
                    ].map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold mb-1">{tip.title}</p>
                          <p className="text-sm text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </SectionWrapper>

        {/* Live Leaderboard Preview */}
        <SectionWrapper variant="muted" data-testid="section-leaderboard">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <TrendingUp className="w-4 h-4 mr-2" />
                Live Rankings
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tournament Leaderboard Preview
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Track top-performing duo teams in real-time during tournaments
              </p>
            </div>

            {/* Leaderboard table */}
            <Card className="max-w-5xl mx-auto" data-testid="leaderboard-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Current Tournament Rankings</CardTitle>
                  <Badge variant="outline">Live</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Rank</th>
                        <th className="text-left p-3 font-semibold">Team</th>
                        <th className="text-left p-3 font-semibold hidden md:table-cell">Players</th>
                        <th className="text-center p-3 font-semibold">Kills</th>
                        <th className="text-center p-3 font-semibold">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.map((team, index) => (
                        <motion.tr
                          key={team.rank}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="border-b hover-elevate transition-all"
                          data-testid={`leaderboard-row-${team.rank}`}
                        >
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              {team.rank === 1 && <Crown className="w-5 h-5 text-yellow-500" />}
                              {team.rank === 2 && <Medal className="w-5 h-5 text-gray-400" />}
                              {team.rank === 3 && <Medal className="w-5 h-5 text-orange-600" />}
                              <span className="font-semibold">#{team.rank}</span>
                            </div>
                          </td>
                          <td className="p-3">
                            <p className="font-semibold">{team.teamName}</p>
                          </td>
                          <td className="p-3 text-sm text-muted-foreground hidden md:table-cell">
                            {team.player1} & {team.player2}
                          </td>
                          <td className="p-3 text-center">
                            <Badge variant="outline">{team.kills}</Badge>
                          </td>
                          <td className="p-3 text-center">
                            <span className="font-bold text-primary">{team.points}</span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 rounded-lg bg-muted/30 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    This is a sample leaderboard showing how rankings will be displayed during live tournaments. Actual leaderboard updates in real-time during matches.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Enhanced FAQ Section */}
        <SectionWrapper data-testid="section-faq">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Duo Tournament FAQs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about Free Fire duo tournaments, team coordination, and participation
              </p>
            </div>

            {/* FAQ cards */}
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="hover-elevate transition-all duration-300" data-testid={`faq-${index}`}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">Q</span>
                        </div>
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-chart-2/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-chart-2">A</span>
                        </div>
                        <p className="text-muted-foreground flex-1">{faq.answer}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Team Testimonials */}
        <SectionWrapper variant="muted" data-testid="section-testimonials">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Star className="w-4 h-4 mr-2" />
                Community Voices
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Duo Teams Are Saying
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Hear from successful Free Fire duo teams about their tournament experiences
              </p>
            </div>

            <ModernTestimonials testimonials={testimonials} autoPlay={true} autoPlayInterval={6000} />
          </motion.div>
        </SectionWrapper>

        {/* Tournament Rules Deep Dive */}
        <SectionWrapper data-testid="section-rules">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Official Guidelines
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" id="rules">
                Tournament Rules & Guidelines
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive rules and guidelines for fair and competitive Free Fire duo tournament play
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <RulesAccordion rules={rules} />
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Payment Instructions */}
        <SectionWrapper variant="muted" data-testid="section-payment">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <CreditCard className="w-4 h-4 mr-2" />
                Secure Payment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Payment Instructions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete your duo team registration with secure payment via UPI
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <PaymentInstructions amount={FREEFIRE_TOURNAMENTS.duo.entryFee} />
            </div>
          </motion.div>
        </SectionWrapper>

        {/* Team Gallery - Action shots from tournaments */}
        <SectionWrapper data-testid="section-gallery">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Target className="w-4 h-4 mr-2" />
                Tournament Gallery
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Free Fire Duo Action Shots
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Experience the intensity and excitement of our duo tournaments through these action-packed moments
              </p>
            </div>

            <MediaLightbox
              items={[
                { src: duoImage1, alt: "Free Fire Max Duo Battle Scene", caption: "Intense duo battle action" },
                { src: duoImage2, alt: "Free Fire Max Combat Firefight", caption: "Coordinated duo combat" },
                { src: duoImage3, alt: "Free Fire Max Victory Celebration", caption: "Duo champions celebrating" },
                { src: duoImage4, alt: "Free Fire Max Tournament Scene", caption: "Competitive tournament action" },
                { src: duoImage5, alt: "Free Fire Max Weapon Showcase", caption: "Strategic weapon loadouts" },
                { src: duoImage6, alt: "Free Fire Max Championship Trophy", caption: "Winner duo team trophy" },
                { src: duoImage7, alt: "Free Fire Max Character Lineup", caption: "Tournament character selection" },
                { src: heroImage, alt: "Free Fire Max Duo Coordination", caption: "Perfect duo teamwork" },
              ]}
              columns={{ sm: 1, md: 2, lg: 3 }}
            />
          </motion.div>
        </SectionWrapper>

        {/* Final CTA Band - Encourage registration */}
        <SectionWrapper variant="default" data-testid="section-final-cta">
          <CTABand
            title="Ready to Dominate as a Duo?"
            description="Join hundreds of Free Fire Max players competing for glory and prizes. Register your duo team now and showcase your coordination skills!"
            buttons={[
              { 
                label: "Register Your Duo Team", 
                onClick: scrollToRegistration, 
                icon: Trophy 
              },
              { 
                label: "View Tournament Rules", 
                href: "#rules", 
                variant: "outline", 
                icon: Shield 
              },
            ]}
            variant="gradient"
            icon={Users}
            data-testid="cta-final-registration"
          />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
