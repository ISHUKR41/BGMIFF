import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TournamentCard from "@/components/TournamentCard";
import ModernHero from "@/components/ModernHero";
import SectionWrapper from "@/components/SectionWrapper";
import ProfessionalStatCard from "@/components/ProfessionalStatCard";
import ModernTestimonials from "@/components/ModernTestimonials";
import CTABand from "@/components/CTABand";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import InteractiveCard from "@/components/InteractiveCard";
import GradientBlob from "@/components/GradientBlob";
import MagneticButton from "@/components/MagneticButton";
import FloatingOrbs from "@/components/FloatingOrbs";
import BlurFade from "@/components/BlurFade";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import ParallaxStack from "@/components/ParallaxStack";
import EnhancedMagneticButton from "@/components/EnhancedMagneticButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Trophy,
  Users,
  DollarSign,
  Star,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  ArrowRight,
  PlayCircle,
  Shield,
  Zap,
  Smartphone,
  Gift,
  Clock,
  PhoneCall,
  Mail,
  FileText,
  Award,
  Gamepad2,
  Target,
} from "lucide-react";
import { Link } from "wouter";
import { TOURNAMENTS, FREEFIRE_TOURNAMENTS } from "@shared/config";
import { fadeSlideUp, staggerContainer, staggerItem } from "@/lib/motion";

import heroImage from "@assets/generated_images/BGMI_hero_battle_scene_ad290420.png";

const tournaments = [
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

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Solo Winner",
    content: "Mujhe jeetne ke baad 24 ghante mein prize mil gaya! Bahut achha platform hai.",
    initials: "RS",
    rating: 5,
  },
  {
    name: "Team Phoenix",
    role: "Squad Champions",
    content: "Registration se lekar prize tak sab kuch bilkul clear tha. Koi problem nahi aaya.",
    initials: "TP",
    rating: 5,
  },
  {
    name: "Aryan Patel",
    role: "Regular Player",
    content: "WhatsApp pe support team bahut helpful hai. Har sawaal ka jawab milta hai.",
    initials: "AP",
    rating: 5,
  },
  {
    name: "Priya Desai",
    role: "Duo Player",
    content: "Ladki hoke bhi yahan khelna safe lagta hai. Sabke saath fair treatment milta hai.",
    initials: "PD",
    rating: 5,
  },
];

const faqs = [
  {
    question: "GameArena kya hai?",
    answer: "GameArena ek online platform hai jahan aap BGMI aur Free Fire Max tournaments mein participate kar sakte ho aur prizes jeet sakte ho. Aap ghar baithe apne phone se register kar sakte ho.",
  },
  {
    question: "Mujhe kya karna hoga participate karne ke liye?",
    answer: "Bas 4 simple steps hain: (1) Apna tournament choose karo (Solo/Duo/Squad), (2) Online payment karo (Google Pay, PhonePe, Paytm se), (3) Form fill karo aur payment screenshot upload karo, (4) WhatsApp pe confirmation ka wait karo. Itna hi!",
  },
  {
    question: "Prize money kaise milega?",
    answer: "Agar aap jeetoge toh 24-48 ghante mein aapke UPI number pe prize direct transfer ho jayega. Koi tension nahi, 100% guaranteed payment hai.",
  },
  {
    question: "Agar mujhe koi problem aaye toh?",
    answer: "Aap hamein WhatsApp pe message kar sakte ho - 24/7 available hain hum. Tournament ke time pe 5 minute mein reply mil jata hai.",
  },
  {
    question: "Entry fee kitna hai?",
    answer: "Solo tournaments ke liye ₹20, Duo ke liye ₹40, aur Squad ke liye ₹80. Har tournament mein winner ko ₹350 tak prize milta hai plus har kill pe extra paise!",
  },
  {
    question: "Kya yeh safe hai?",
    answer: "Bilkul safe hai! Hum 10,000+ players ko serve kar rahe hain aur sab payments verified hain. Koi fraud nahi hai, sab legitimate hai.",
  },
  {
    question: "Mere paas team nahi hai, kya main khel sakta hu?",
    answer: "Haan! Aap Solo tournament mein akele khel sakte ho. Ya phir Duo/Squad ke liye aap apne doston ke saath team bana sakte ho.",
  },
  {
    question: "Refund milega agar main nahi khel paunga?",
    answer: "Agar aap tournament se 2 ghante pehle inform karo toh next tournament mein transfer kar denge. Last minute cancellation pe refund nahi milta.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section with Parallax, FloatingOrbs, and Enhanced Animations */}
        <ParallaxStack
          height="700px"
          background={
            <>
              {/* Floating Orbs for depth and visual interest */}
              <FloatingOrbs count={4} />
              {/* Background image with dark overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
            </>
          }
          foreground={
            <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto text-center">
                <BlurFade blur={8} direction="up" delay={0.1}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-gradient">
                      Ghar Baithe BGMI Tournaments Khelo Aur Prizes Jeeto!
                    </span>
                  </h1>
                </BlurFade>
                <BlurFade blur={8} direction="up" delay={0.3}>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed">
                    India ka sabse trusted gaming platform. Mobile se registration karo, game khelo, aur asli paise jeeto. 10,000+ players already playing!
                  </p>
                </BlurFade>
                <BlurFade blur={8} direction="up" delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <EnhancedMagneticButton
                      magneticStrength={0.3}
                      enableGlow={true}
                      size="lg"
                      className="text-base md:text-lg px-6 md:px-10 py-5 md:py-6 w-full sm:w-auto"
                      asChild
                    >
                      <a href="#tournaments" data-testid="hero-cta-tournaments">
                        <Trophy className="w-5 h-5 mr-2" />
                        Tournaments Dekho
                      </a>
                    </EnhancedMagneticButton>
                    <EnhancedMagneticButton
                      magneticStrength={0.3}
                      enableGlow={true}
                      variant="outline"
                      size="lg"
                      className="text-base md:text-lg px-6 md:px-10 py-5 md:py-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 w-full sm:w-auto"
                      asChild
                    >
                      <a href="#how-to-join" data-testid="hero-cta-how-to-join">
                        <PlayCircle className="w-5 h-5 mr-2" />
                        Kaise Join Karein?
                      </a>
                    </EnhancedMagneticButton>
                  </div>
                </BlurFade>
              </div>
            </div>
          }
          backgroundSpeed={0.2}
          foregroundSpeed={0.8}
        />

        {/* What is GameArena - Modern Explainer with BlurFade */}
        <SectionWrapper variant="muted" data-testid="section-what-is-gamearena">
          <BlurFade blur={8} direction="up">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 magnetic scale-hover transition-transform duration-300 hover:scale-110">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">GameArena Kya Hai?</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ek simple platform jahan aap <strong>BGMI aur Free Fire Max tournaments</strong> mein participate karke <strong>asli paise</strong> jeet sakte ho. 
                Bas apne phone se register karo, game khelo, aur prizes ghar baithe receive karo!
              </p>
            </div>
          </BlurFade>

          {/* Modern Interactive Step Cards with BlurFade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <BlurFade blur={8} direction="up" delay={0.1}>
              <InteractiveCard enableTilt tiltIntensity={5} data-testid="explainer-step-1" className="h-full transition-all duration-300 hover:scale-105">
                <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                    <Smartphone className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-4">1. Mobile Se Register Karo</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Apne phone se tournament choose karo aur ₹20 se start karo. Google Pay, PhonePe, Paytm - sab chalega!
                  </p>
                </CardContent>
              </InteractiveCard>
            </BlurFade>

            <BlurFade blur={8} direction="up" delay={0.2}>
              <InteractiveCard enableTilt tiltIntensity={5} data-testid="explainer-step-2" className="h-full transition-all duration-300 hover:scale-105">
                <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                    <Target className="w-10 h-10 text-purple-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-4">2. Game Khelo</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Tournament time pe room ID milega WhatsApp pe. Join karo aur apna best game khelo!
                  </p>
                </CardContent>
              </InteractiveCard>
            </BlurFade>

            <BlurFade blur={8} direction="up" delay={0.3}>
              <InteractiveCard enableTilt tiltIntensity={5} data-testid="explainer-step-3" className="h-full transition-all duration-300 hover:scale-105">
                <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                    <Gift className="w-10 h-10 text-amber-500" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-4">3. Prize Jeeto!</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    Winner, runner-up, ya har kill pe paisa! 24-48 ghante mein prize aapke account mein.
                  </p>
                </CardContent>
              </InteractiveCard>
            </BlurFade>
          </div>
        </SectionWrapper>

        {/* Tournaments Section with Stagger Animation */}
        <SectionWrapper variant="default" id="tournaments" data-testid="section-tournaments">
          <BlurFade blur={8} direction="up">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 transition-transform duration-300 hover:scale-110">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Available Tournaments</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Apna favorite game aur mode choose karo. Solo, Duo, ya Squad - sabke liye tournaments hain!
              </p>
            </div>
          </BlurFade>

          {/* Tournament Cards Grid with Stagger Effect */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          >
            {tournaments.map((tournament) => (
              <motion.div
                key={tournament.mode + tournament.title}
                variants={staggerItem}
              >
                <TournamentCard {...tournament} />
              </motion.div>
            ))}
          </motion.div>

          {/* Prize Comparison Table with Smooth Reveal */}
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16"
          >
            <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid="prize-comparison">
              <CardHeader className="bg-muted/50 text-center pb-8">
                <CardTitle className="text-2xl sm:text-3xl mb-2">Prize Money Kitni Milegi?</CardTitle>
                <CardDescription className="text-base">Har tournament mein winners ko guaranteed prizes</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="px-6 py-5 text-left font-semibold">Mode</th>
                        <th className="px-6 py-5 text-center font-semibold">Entry Fee</th>
                        <th className="px-6 py-5 text-center font-semibold">Winner Prize</th>
                        <th className="px-6 py-5 text-center font-semibold">Runner-Up</th>
                        <th className="px-6 py-5 text-center font-semibold">Per Kill</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover-elevate">
                        <td className="px-6 py-5">
                          <div className="font-semibold">BGMI Solo</div>
                          <div className="text-sm text-muted-foreground">100 Players</div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <Badge variant="secondary">₹20</Badge>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-bold text-primary text-lg">₹350</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-semibold">₹250</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="text-muted-foreground">₹9</span>
                        </td>
                      </tr>
                      <tr className="hover-elevate">
                        <td className="px-6 py-5">
                          <div className="font-semibold">BGMI Duo</div>
                          <div className="text-sm text-muted-foreground">50 Teams</div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <Badge variant="secondary">₹40</Badge>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-bold text-primary text-lg">₹350</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-semibold">₹250</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="text-muted-foreground">₹9</span>
                        </td>
                      </tr>
                      <tr className="hover-elevate">
                        <td className="px-6 py-5">
                          <div className="font-semibold">BGMI Squad</div>
                          <div className="text-sm text-muted-foreground">25 Squads</div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <Badge variant="secondary">₹80</Badge>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-bold text-primary text-lg">₹350</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-semibold">₹250</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="text-muted-foreground">₹9</span>
                        </td>
                      </tr>
                      <tr className="hover-elevate">
                        <td className="px-6 py-5">
                          <div className="font-semibold">Free Fire Solo</div>
                          <div className="text-sm text-muted-foreground">50 Players</div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <Badge variant="secondary">₹20</Badge>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-bold text-primary text-lg">₹200</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-semibold">₹150</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="text-muted-foreground">₹8</span>
                        </td>
                      </tr>
                      <tr className="hover-elevate">
                        <td className="px-6 py-5">
                          <div className="font-semibold">Free Fire Duo</div>
                          <div className="text-sm text-muted-foreground">24 Teams</div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <Badge variant="secondary">₹40</Badge>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-bold text-primary text-lg">₹200</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-semibold">₹150</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="text-muted-foreground">₹8</span>
                        </td>
                      </tr>
                      <tr className="hover-elevate">
                        <td className="px-6 py-5">
                          <div className="font-semibold">Free Fire Squad</div>
                          <div className="text-sm text-muted-foreground">12 Squads</div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <Badge variant="secondary">₹80</Badge>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-bold text-primary text-lg">₹200</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="font-semibold">₹150</span>
                        </td>
                        <td className="px-6 py-5 text-center">
                          <span className="text-muted-foreground">₹8</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </SectionWrapper>

        {/* How to Join - 4 Easy Steps with BentoGrid */}
        <SectionWrapper variant="muted" id="how-to-join" data-testid="section-how-to-join">
          <BlurFade blur={8} direction="up">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 transition-transform duration-300 hover:scale-110">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Kaise Join Karein? (4 Simple Steps)</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Bilkul aasan hai! Ye steps follow karo aur tournament mein participate karo
              </p>
            </div>
          </BlurFade>

          {/* Steps BentoGrid with 2 columns */}
          <BentoGrid columns={2} className="max-w-6xl mx-auto gap-4 md:gap-6 lg:gap-8">
            {[
              {
                step: 1,
                icon: Trophy,
                title: "Tournament Choose Karo",
                description: "Solo, Duo, ya Squad - jo pasand ho wo select karo. BGMI ya Free Fire Max dono available hain.",
                gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
                iconColor: "text-blue-500",
              },
              {
                step: 2,
                icon: CreditCard,
                title: "Payment Karo",
                description: "Google Pay, PhonePe, ya Paytm se entry fee pay karo. Screenshot save kar lena!",
                gradient: "from-green-500/20 via-green-500/10 to-transparent",
                iconColor: "text-green-500",
              },
              {
                step: 3,
                icon: FileText,
                title: "Form Fill Karo",
                description: "Apna name, game ID, aur payment screenshot upload karo. WhatsApp number dena mat bhulna!",
                gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
                iconColor: "text-purple-500",
              },
              {
                step: 4,
                icon: MessageCircle,
                title: "Confirmation Wait Karo",
                description: "2-4 ghante mein WhatsApp pe confirmation aayega. Game time se pehle room ID milega!",
                gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
                iconColor: "text-amber-500",
              },
            ].map((item, index) => (
              <BentoCard key={item.step} delay={index * 0.1} interactive data-testid={`how-to-step-${item.step}`}>
                <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className={`w-20 md:w-24 h-20 md:h-24 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                      <item.icon className={`w-10 md:w-12 h-10 md:h-12 ${item.iconColor}`} />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </BentoCard>
            ))}
          </BentoGrid>

          <BlurFade blur={8} direction="up" delay={0.5}>
            <div className="mt-8 md:mt-12 text-center">
              <EnhancedMagneticButton
                magneticStrength={0.3}
                enableGlow={true}
                size="lg"
                className="text-base md:text-lg px-8 md:px-10 py-5 md:py-6"
                asChild
              >
                <a href="#tournaments" data-testid="button-start-registration">
                  Ab Registration Shuru Karo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </EnhancedMagneticButton>
            </div>
          </BlurFade>
        </SectionWrapper>

        {/* Trust Indicators - Modern Animated Stats */}
        <SectionWrapper variant="default" data-testid="section-trust-stats">
          <BlurFade blur={8} direction="up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Kyun Trust Karein GameArena Ko?</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Numbers jhooth nahi bolte - dekho kitne log hamare saath khel rahe hain!
              </p>
            </div>
          </BlurFade>

          {/* Stats Grid with Modern Animated Counters and BlurFade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <BlurFade blur={8} direction="up" delay={0.1}>
              <InteractiveCard enableGlow data-testid="stat-players" className="h-full transition-all duration-300 hover:scale-105">
                <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text-animated">
                    <AnimatedCounter end={10000} suffix="+" duration={2500} />
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">Active Players</div>
                </CardContent>
              </InteractiveCard>
            </BlurFade>

            <BlurFade blur={8} direction="up" delay={0.2}>
              <InteractiveCard enableGlow data-testid="stat-tournaments" className="h-full transition-all duration-300 hover:scale-105">
                <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                    <Trophy className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text-animated">
                    <AnimatedCounter end={150} suffix="+" duration={2500} />
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">Tournaments Complete</div>
                </CardContent>
              </InteractiveCard>
            </BlurFade>

            <BlurFade blur={8} direction="up" delay={0.3}>
              <InteractiveCard enableGlow data-testid="stat-prizes" className="h-full transition-all duration-300 hover:scale-105">
                <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                    <DollarSign className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text-animated">
                    <AnimatedCounter end={500000} prefix="₹" duration={2500} separator="," />
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">Total Prizes Distributed</div>
                </CardContent>
              </InteractiveCard>
            </BlurFade>

            <BlurFade blur={8} direction="up" delay={0.4}>
              <InteractiveCard enableGlow data-testid="stat-rating" className="h-full transition-all duration-300 hover:scale-105">
                <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                    <Star className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text-animated">
                    <AnimatedCounter end={4.9} suffix="/5" decimals={1} duration={2500} />
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">Player Rating</div>
                </CardContent>
              </InteractiveCard>
            </BlurFade>
          </div>
        </SectionWrapper>

        {/* Why Choose Us - Enhanced Feature Cards with BlurFade */}
        <SectionWrapper variant="muted" data-testid="section-benefits">
          <div className="relative">
            <FloatingOrbs count={2} />
            
            <BlurFade blur={8} direction="up">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">GameArena Kyun Choose Karein?</h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Hamari khas baatein jo hame sabse alag banati hain
                </p>
              </div>
            </BlurFade>

            {/* Benefits Grid with BlurFade and Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Safe & Secure",
                  description: "Har payment verified hoti hai. Koi fraud nahi, sab legitimate. 10,000+ players hampe trust karte hain.",
                  gradient: "from-green-500/20 via-green-500/10 to-transparent",
                  iconColor: "text-green-500",
                  delay: 0.1,
                },
                {
                  icon: Zap,
                  title: "Fast Prize Payment",
                  description: "Jeetne ke baad 24-48 ghante mein prize direct aapke UPI pe. No delays, no excuses - guaranteed!",
                  gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
                  iconColor: "text-blue-500",
                  delay: 0.2,
                },
                {
                  icon: MessageCircle,
                  title: "24/7 WhatsApp Support",
                  description: "Koi bhi problem ho, WhatsApp pe message karo. 5 minute mein reply milega. Hindi mein baat kar sakte ho!",
                  gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
                  iconColor: "text-purple-500",
                  delay: 0.3,
                },
                {
                  icon: Trophy,
                  title: "Fair Gameplay",
                  description: "Cheating allowed nahi hai. Har tournament fair hota hai. Aapki skill se jeetoge, kisi trick se nahi!",
                  gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
                  iconColor: "text-amber-500",
                  delay: 0.4,
                },
              ].map((benefit, index) => (
                <BlurFade key={benefit.title} blur={8} direction="up" delay={benefit.delay}>
                  <InteractiveCard enableTilt tiltIntensity={5} data-testid={`benefit-${index}`} className="h-full transition-all duration-300 hover:scale-105">
                    <CardHeader className="pb-4 md:pb-6">
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className={`w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 magnetic transition-transform duration-300 hover:scale-110`}>
                          <benefit.icon className={`w-7 md:w-8 h-7 md:h-8 ${benefit.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">{benefit.title}</CardTitle>
                          <CardDescription className="text-sm md:text-base leading-relaxed">
                            {benefit.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </InteractiveCard>
                </BlurFade>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Testimonials - Enhanced with Smooth Entrance */}
        <SectionWrapper variant="default" data-testid="section-testimonials">
          <BlurFade blur={8} direction="up">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 transition-transform duration-300 hover:scale-110">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Players Kya Kehte Hain?</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Hamare real players ki honest reviews padho
              </p>
            </div>
          </BlurFade>

          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ModernTestimonials testimonials={testimonials} />
          </motion.div>
        </SectionWrapper>

        {/* FAQ Section with Enhanced Animations */}
        <SectionWrapper variant="muted" data-testid="section-faq">
          <BlurFade blur={8} direction="up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Common Questions (FAQ)</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Aapke sawal, hamare jawab - sab kuch clear aur simple
              </p>
            </div>
          </BlurFade>

          <div className="max-w-3xl mx-auto">
            {/* Staggered FAQ Items */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="border rounded-xl px-6 bg-card hover-elevate transition-all duration-300"
                      data-testid={`faq-item-${index}`}
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Contact Quick Links with EnhancedMagneticButton */}
        <SectionWrapper variant="default" data-testid="section-quick-contact">
          <div className="relative">
            <FloatingOrbs count={2} />
            
            <BlurFade blur={8} direction="up">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Abhi Bhi Koi Doubt Hai?</h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  Hum yahan hain help karne ke liye - contact karo kisi bhi tarah se!
                </p>
              </div>
            </BlurFade>

            {/* Contact Cards with BlurFade and Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <BlurFade blur={8} direction="up" delay={0.1}>
                <InteractiveCard enableTilt tiltIntensity={8} data-testid="contact-whatsapp" className="h-full transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                      <MessageCircle className="w-8 md:w-10 h-8 md:h-10 text-green-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">WhatsApp Chat</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-6">24/7 Available</p>
                    <EnhancedMagneticButton
                      magneticStrength={0.3}
                      enableGlow={true}
                      variant="outline"
                      className="w-full"
                      asChild
                      data-testid="button-whatsapp"
                    >
                      <a 
                        href="https://wa.me/917541024846" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Message Karo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </EnhancedMagneticButton>
                  </CardContent>
                </InteractiveCard>
              </BlurFade>

              <BlurFade blur={8} direction="up" delay={0.2}>
                <InteractiveCard enableTilt tiltIntensity={8} data-testid="contact-phone" className="h-full transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                      <PhoneCall className="w-8 md:w-10 h-8 md:h-10 text-blue-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Phone Call</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-6">10 AM - 8 PM</p>
                    <EnhancedMagneticButton
                      magneticStrength={0.3}
                      enableGlow={true}
                      variant="outline"
                      className="w-full"
                      asChild
                      data-testid="button-phone"
                    >
                      <a href="tel:+917541024846">
                        Call Karo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </EnhancedMagneticButton>
                  </CardContent>
                </InteractiveCard>
              </BlurFade>

              <BlurFade blur={8} direction="up" delay={0.3}>
                <InteractiveCard enableTilt tiltIntensity={8} data-testid="contact-email" className="h-full transition-all duration-300 hover:scale-105">
                  <CardContent className="pt-8 md:pt-10 pb-8 md:pb-10 px-4 md:px-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent mb-6 magnetic transition-transform duration-300 hover:scale-110">
                      <Mail className="w-8 md:w-10 h-8 md:h-10 text-purple-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-6">24 hour reply</p>
                    <EnhancedMagneticButton
                      magneticStrength={0.3}
                      enableGlow={true}
                      variant="outline"
                      className="w-full"
                      asChild
                      data-testid="button-contact-page"
                    >
                      <Link href="/contact">
                        Email Bhejo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </EnhancedMagneticButton>
                  </CardContent>
                </InteractiveCard>
              </BlurFade>
            </div>
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <CTABand
          title="Ready to Join 10,000+ Players?"
          description="Ghar baithe tournament khelo aur prizes jeeto. Registration abhi start karo!"
          buttons={[
            {
              label: "Tournaments Dekho",
              href: "#tournaments",
            },
            {
              label: "Help Chahiye?",
              href: "/contact",
              variant: "outline",
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}
