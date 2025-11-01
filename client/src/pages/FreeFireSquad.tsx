/**
 * Free Fire Max Squad Tournament Page Component
 * 
 * Dedicated page for Free Fire Max Squad Tournament (4-player team) registration and information.
 * 
 * Key Sections:
 * 1. Hero Section - Squad tournament banner emphasizing team coordination
 * 2. Tournament Stats - Entry fee (per squad), squad slots, and prize distribution
 * 3. Feature Highlight - Benefits of 4-player squad gameplay and tactics
 * 4. Video Section - Tournament highlights and strategy guides
 * 5. Registration Form - Team registration with all 4 player details
 * 6. Detailed Rules - Squad formation, roles, payment, and gameplay rules
 * 7. Enhanced FAQs - Squad-specific questions about roles, coordination, substitutions
 * 8. Past Winners - Showcase of championship squads with all member names
 * 9. Leaderboard - Current standings showing squad performance
 * 10. Payment Instructions - Squad payment and verification process
 * 11. Player Testimonials - Reviews from squad tournament participants
 * 12. Squad Roles Guide - Leader, Rusher, Support, Sniper role explanations
 * 13. Image Gallery - Squad coordination and teamwork action shots
 * 14. CTA Band - Final registration call-to-action
 * 
 * Emphasizes advanced team tactics, role distribution, and the complexity
 * of 4-player coordination while providing comprehensive tournament information.
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
import VideoSection from "@/components/VideoSection";
import { FREEFIRE_TOURNAMENTS } from "@shared/config";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Trophy, Users, Coins, Ticket, Calendar, Clock, Target, Shield, 
  Crosshair, Radio, Heart, Eye, TrendingUp, Award, Star, CheckCircle2,
  UserPlus, FileText, CreditCard, Bell, ExternalLink, ArrowRight
} from "lucide-react";

// Import Free Fire Max images showcasing squad coordination and team formation
import heroImage from "@assets/generated_images/Free_Fire_squad_team_formation_12003cda.png";
import actionImage1 from "@assets/generated_images/Free_Fire_hero_battle_scene_a40d612c.png";
import actionImage2 from "@assets/generated_images/Free_Fire_combat_firefight_scene_0a317ba9.png";
import actionImage3 from "@assets/generated_images/Free_Fire_victory_celebration_45370171.png";
import tournamentImage1 from "@assets/generated_images/Free_Fire_tournament_competitive_scene_5bc9ee86.png";
import tournamentImage2 from "@assets/generated_images/Free_Fire_championship_trophy_26620803.png";
import esportsImage1 from "@assets/generated_images/Free_Fire_weapon_showcase_60414721.png";
import esportsImage2 from "@assets/generated_images/Free_Fire_character_lineup_2e5c6102.png";
import techImage1 from "@assets/generated_images/Free_Fire_solo_player_action_89936b71.png";
import techImage2 from "@assets/generated_images/Free_Fire_duo_team_coordination_4f78207d.png";
import techImage3 from "@assets/generated_images/Free_Fire_hero_battle_scene_a40d612c.png";
import businessImage1 from "@assets/generated_images/Free_Fire_tournament_competitive_scene_5bc9ee86.png";
// Feature Card Image
import prizeCeremonyImage from "@assets/generated_images/Free_Fire_victory_celebration_45370171.png";

// Squad tournament rules organized by category for Free Fire Max
// Covers 4-player formation requirements, captain responsibilities, and team conduct
const squadRules = [
  {
    title: "Squad Formation & Registration",
    type: "info" as const,
    content: [
      "Each squad must consist of exactly 4 players - no more, no less",
      "Team name must be unique, appropriate, and between 3-20 characters",
      "All 4 players' Free Fire Max IDs and in-game names must be accurate and verified",
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
      "1st Place Winner Squad: ₹200 (team prize)",
      "2nd Place Runner-Up Squad: ₹150 (team prize)",
      "Per Kill Bonus: ₹8 per kill (accumulated for entire squad)",
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

// Comprehensive FAQ covering squad-specific scenarios for Free Fire Max
// Addresses roles, captain duties, substitutions, and team dynamics
const enhancedFAQs = [
  {
    title: "How do I form a squad for the Free Fire Max tournament?",
    type: "info" as const,
    content: [
      "Gather 3 friends or teammates who play Free Fire Max regularly",
      "Decide on a unique squad name that represents your team",
      "Choose one person as team leader/captain for all communications",
      "Collect all 4 players' Free Fire Max IDs, in-game names, and contact details",
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
    title: "How should we assign roles within our Free Fire Max squad?",
    type: "success" as const,
    content: [
      "Leader: Makes strategic calls, rotation decisions, and coordinates the team",
      "Rusher: Aggressive player focused on eliminations and engaging enemies",
      "Support: Provides cover fire, assists teammates, manages supplies",
      "Sniper: Long-range specialist for zone control and enemy tracking",
      "Roles can be flexible based on situation and team strengths",
      "Practice role coordination before tournament for better synergy",
      "Communication is key - ensure everyone knows their primary role",
    ],
  },
  {
    title: "What is the tournament format and duration?",
    type: "info" as const,
    content: [
      "Classic Battle Royale format with 12 squads (48 players total)",
      "Match duration: 15-25 minutes depending on zone progression",
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
      "Some teams give higher share to top fraggers or leader",
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
      "Watch our strategy videos for Free Fire Max squad tips and tactics",
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
      "Prize money (₹200 for 1st, ₹150 for 2nd, plus kill bonuses) transferred to team leader",
      "Team may be featured on GameArena social media channels",
      "Winners receive priority access to future premium tournaments",
      "Your squad name added to our Hall of Champions",
      "Possible invitation to special invitational tournaments",
    ],
  },
];

// Squad tournament participant testimonials for Free Fire Max
// Features team captains and squad members sharing their experiences
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

// Historical squad tournament winners for Free Fire Max
// Displays all 4 squad members' names, kills, and total prize won
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

// Current tournament leaderboard data for Free Fire Max squads
// In production, this would be fetched from backend API
const leaderboardData = [
  { rank: 1, squadName: "Phoenix Legends FF", kills: 18, placement: "Winner", points: 98, prize: "₹344" },
  { rank: 2, squadName: "Thunder Dragons", kills: 14, placement: "Runner-Up", points: 84, prize: "₹262" },
  { rank: 3, squadName: "Elite Warriors FF", kills: 12, placement: "3rd", points: 76, prize: "₹96" },
  { rank: 4, squadName: "Venom Squad FF", kills: 10, placement: "4th", points: 68, prize: "₹80" },
  { rank: 5, squadName: "Shadow Strikers", kills: 9, placement: "5th", points: 61, prize: "₹72" },
  { rank: 6, squadName: "Blaze Knights", kills: 8, placement: "6th", points: 56, prize: "₹64" },
  { rank: 7, squadName: "Storm Chasers", kills: 7, placement: "7th", points: 51, prize: "₹56" },
  { rank: 8, squadName: "Night Raiders", kills: 6, placement: "8th", points: 46, prize: "₹48" },
];

export default function FreeFireSquad() {
  /**
   * Smooth scroll to squad registration section
   * Navigates users to registration form with all 4 player input fields
   */
  const scrollToRegistration = () => {
    const element = document.getElementById('registration-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Modern Hero Section - Free Fire Max Squad Tournament */}
        <ModernHero
          title="Free Fire Max Squad Tournament"
          description="Assemble your elite 4-player squad and compete for glory. 12 teams, 48 players, one champion squad. Professional Free Fire Max tournament with ₹200 winner prize, ₹150 runner-up prize, and ₹8 per kill bonus."
          backgroundImage={heroImage}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Free Fire Tournaments", href: "/" },
            { label: "Squad Tournament" },
          ]}
          ctaButtons={[
            { label: "Register Now", onClick: scrollToRegistration, variant: "default", icon: UserPlus },
            { label: "View Rules", href: "#rules", variant: "outline" },
          ]}
          overlayOpacity={0.75}
          minHeight="600px"
          data-testid="freefire-squad-hero"
        />

        {/* Tournament Stats Section - Free Fire Max specific prizes and slots */}
        <SectionWrapper variant="muted" data-testid="stats-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfessionalStatCard
              icon={Ticket}
              value={FREEFIRE_TOURNAMENTS.squad.entryFee}
              label="Entry Fee per Squad"
              prefix="₹"
              data-testid="stat-entry-fee"
            />
            <ProfessionalStatCard
              icon={Users}
              value={FREEFIRE_TOURNAMENTS.squad.slots}
              label="Total Squad Slots"
              data-testid="stat-total-slots"
            />
            <ProfessionalStatCard
              icon={Trophy}
              value={FREEFIRE_TOURNAMENTS.squad.winner}
              label="Winner Prize"
              prefix="₹"
              glassmorphism
              data-testid="stat-winner-prize"
            />
            <ProfessionalStatCard
              icon={Coins}
              value={FREEFIRE_TOURNAMENTS.squad.perKill}
              label="Per Kill Bonus"
              prefix="₹"
              data-testid="stat-per-kill"
            />
          </div>
        </SectionWrapper>

        {/* Comprehensive Feature Highlight Card - Free Fire Max Squad Tournament Benefits */}
        <SectionWrapper variant="default" data-testid="section-feature-highlight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="hover-elevate transition-all duration-300 overflow-hidden" data-testid="feature-squad-tournament">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section - Free Fire Max victory celebration */}
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={prizeCeremonyImage}
                    alt="Free Fire Max Squad Tournament Victory Celebration"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                
                {/* Content Section - Free Fire Max tournament features */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">Squad Tournament Excellence</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Assemble your 4-player squad for the ultimate Free Fire Max team competition with guaranteed prizes and professional tournament experience
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Squad Prize Distribution</h4>
                        <p className="text-sm text-muted-foreground">Winner: ₹200 | Runner-Up: ₹150 | Per Kill: ₹8 - Team prizes distributed within 24-48 hours to squad leader</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Full Squad Registration</h4>
                        <p className="text-sm text-muted-foreground">Register all 4 squad members with secure verification - Complete confirmation within 24 hours via WhatsApp</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Advanced Squad Tactics</h4>
                        <p className="text-sm text-muted-foreground">Master Free Fire Max squad roles: Leader, Rusher, Support, Sniper - Professional coordination and strategy</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Competitive Squad Format</h4>
                        <p className="text-sm text-muted-foreground">12 elite squads compete in Free Fire Max Battle Royale - Placement points plus per-kill rewards</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button onClick={scrollToRegistration} data-testid="button-register-squad">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Register Squad
                    </Button>
                    <Button variant="outline" asChild data-testid="button-view-rules">
                      <a href="#rules">View Rules</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* Registration Form Section - Google Forms embed for Free Fire Max squad registration */}
        <SectionWrapper variant="muted" id="registration-section" data-testid="registration-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Squad Registration
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Register Your Free Fire Max Squad</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {FREEFIRE_TOURNAMENTS.squad.description}
            </p>
          </div>

          <Card className="max-w-5xl mx-auto" data-testid="registration-form-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6" />
                Free Fire Max Squad Tournament Registration
              </CardTitle>
              <CardDescription>
                Fill in all squad member details accurately. Payment verification required for slot confirmation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-[4/3] w-full">
                <iframe
                  src={FREEFIRE_TOURNAMENTS.squad.embedUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="Free Fire Max Squad Tournament Registration Form"
                  data-testid="registration-iframe"
                >
                  Loading registration form...
                </iframe>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Separator />
              <div className="flex items-start gap-3 w-full">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  After submission, you'll receive a confirmation message within 2-4 hours. Room credentials will be shared 30 minutes before tournament start time.
                </p>
              </div>
              <Button asChild variant="outline" className="w-full" data-testid="button-external-form">
                <a href={FREEFIRE_TOURNAMENTS.squad.formUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open Form in New Tab
                </a>
              </Button>
            </CardFooter>
          </Card>
        </SectionWrapper>

        {/* Past Winners Showcase - Free Fire Max squad champions */}
        <SectionWrapper data-testid="past-winners-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Hall of Champions
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Previous Squad Champions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating our Free Fire Max squad tournament winners and their achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastWinners.map((winner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate transition-all" data-testid={`past-winner-${index}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="default" className="gap-1">
                        <Trophy className="w-3 h-3" />
                        {winner.placement}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{winner.date}</span>
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-primary" />
                      </div>
                      {winner.squadName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold mb-2 text-muted-foreground">Squad Members:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {winner.members.map((member, memberIndex) => (
                          <div key={memberIndex} className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                              <Users className="w-3 h-3 text-chart-2" />
                            </div>
                            <span className="text-sm font-mono">{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Kills</p>
                        <p className="text-2xl font-bold text-chart-2">{winner.kills}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Prize</p>
                        <p className="text-2xl font-bold text-primary">{winner.prize}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Squad Roles & Strategy Guide - Free Fire Max specific roles */}
        <SectionWrapper variant="muted" data-testid="squad-roles-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Target className="w-4 h-4 mr-2" />
              Strategy Guide
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Free Fire Max Squad Roles & Tactics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding squad roles is crucial for competitive Free Fire Max success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Leader Role */}
            <Card className="hover-elevate" data-testid="role-leader">
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

            {/* Rusher Role */}
            <Card className="hover-elevate" data-testid="role-rusher">
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

            {/* Support Role */}
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
                    <span>Manages utilities (smokes, grenades)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Holds defensive positions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Sniper Role */}
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

          {/* Pro Tips Card - Free Fire Max specific tactics */}
          <Card className="mt-8 bg-primary/5 border-primary/20" data-testid="strategy-tips">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Pro Tips for Free Fire Max Squad Success
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
                  <span>Assign roles based on each player's strengths in Free Fire</span>
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

        {/* Live Leaderboard Preview - Free Fire Max tournament standings */}
        <SectionWrapper data-testid="leaderboard-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Live Standings
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Tournament Leaderboard Preview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Example leaderboard from our previous Free Fire Max squad tournament
            </p>
          </div>

          <Card data-testid="leaderboard-table">
            <CardHeader>
              <CardTitle>Final Standings</CardTitle>
              <CardDescription>Top 8 squads from November 2024 Free Fire Max Tournament</CardDescription>
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

        {/* Registration Timeline - Step-by-step guide for Free Fire Max squad registration */}
        <SectionWrapper variant="muted" data-testid="timeline-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Registration Process
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Squad Registration Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these steps to register your Free Fire Max 4-player squad
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: "Assemble Your Squad",
                    description: "Gather your 3 Free Fire Max teammates and choose a unique squad name. Collect all players' Free Fire IDs and in-game names.",
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
                    description: "Squad captain fills out the registration form with accurate details of all 4 players including Free Fire IDs and contact info.",
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

        {/* Squad Testimonials - Free Fire Max player reviews */}
        <SectionWrapper data-testid="testimonials-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Player Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What Squads Are Saying</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our previous Free Fire Max tournament participants and champions
            </p>
          </div>

          <ModernTestimonials testimonials={testimonials} autoPlay autoPlayInterval={6000} />
        </SectionWrapper>

        {/* Enhanced FAQ Section - Free Fire Max squad specific */}
        <SectionWrapper variant="muted" data-testid="faq-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Squad Tournament FAQs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about Free Fire Max squad formation, registration, and gameplay
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <RulesAccordion rules={enhancedFAQs} />
          </div>
        </SectionWrapper>

        {/* Tournament Rules Deep Dive - Free Fire Max regulations */}
        <SectionWrapper data-testid="rules-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Official Rules
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Detailed Tournament Rules</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete guidelines for Free Fire Max squad registration, gameplay, and prize distribution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <RulesAccordion rules={squadRules} />
          </div>
        </SectionWrapper>

        {/* Payment Instructions - Squad entry fee payment process */}
        <SectionWrapper variant="muted" data-testid="payment-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <CreditCard className="w-4 h-4 mr-2" />
              Payment Details
            </Badge>
            <h2 className="text-4xl font-bold mb-4">How to Make Payment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure payment process for Free Fire Max squad registration
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <PaymentInstructions amount={FREEFIRE_TOURNAMENTS.squad.entryFee} />
          </div>
        </SectionWrapper>

        {/* Video Strategy Guide - Free Fire Max squad tactics */}
        <SectionWrapper variant="muted" data-testid="video-strategy-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Squad Strategy Guide
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Master Free Fire Max Squad Tactics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn winning strategies from professional Free Fire Max squad gameplay
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoSection
              title="Advanced Free Fire Max Squad Coordination Tactics"
              description="Watch this comprehensive guide on Free Fire Max squad roles, communication strategies, and winning techniques for Battle Royale tournaments."
              videoId="dQw4w9WgXcQ"
            />
          </div>
        </SectionWrapper>

        {/* Tournament Gallery with MediaLightbox - Free Fire Max action shots */}
        <SectionWrapper data-testid="gallery-section">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Tournament Gallery
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Squad Tournament Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the intensity and excitement from our previous Free Fire Max tournaments
            </p>
          </div>

          <MediaLightbox
            items={[
              { src: actionImage1, alt: "Intense Free Fire Max squad combat", caption: "Final circle squad battle" },
              { src: actionImage2, alt: "Free Fire Max squad coordination", caption: "Team coordination in action" },
              { src: actionImage3, alt: "Free Fire Max victory celebration", caption: "Squad victory moment" },
              { src: tournamentImage1, alt: "Free Fire Max tournament competition", caption: "Tournament day excitement" },
              { src: tournamentImage2, alt: "Free Fire Max championship trophy", caption: "Championship glory" },
              { src: esportsImage1, alt: "Free Fire Max weapon showcase", caption: "Professional loadout" },
              { src: esportsImage2, alt: "Free Fire Max character lineup", caption: "Squad character selection" },
              { src: techImage1, alt: "Free Fire Max solo action", caption: "Individual skill showcase" },
              { src: techImage2, alt: "Free Fire Max duo coordination", caption: "Partner teamwork" },
              { src: techImage3, alt: "Free Fire Max battle scene", caption: "Intense firefight" },
              { src: businessImage1, alt: "Free Fire Max competitive scene", caption: "Tournament atmosphere" },
              { src: heroImage, alt: "Free Fire Max squad formation", caption: "Squad ready for battle" },
            ]}
            columns={{ sm: 1, md: 2, lg: 3 }}
          />
        </SectionWrapper>

        {/* CTA Band - Final call to action for squad registration */}
        <SectionWrapper variant="default">
          <CTABand
            title="Ready to Compete?"
            description="Join 12 elite squads in the ultimate Free Fire Max showdown. Register your squad now before slots fill up!"
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
