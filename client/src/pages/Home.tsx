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
        {/* Hero Section with Modern Gradient Blobs and Enhanced Animations */}
        <div className="relative overflow-hidden">
          {/* Animated Gradient Blobs for Visual Impact */}
          <GradientBlob color="primary" size="xl" position="top-left" opacity={0.2} speed="slow" />
          <GradientBlob color="secondary" size="lg" position="top-right" opacity={0.15} speed="medium" />
          <GradientBlob color="accent" size="md" position="bottom-right" opacity={0.1} speed="fast" />
          
          <ModernHero
            title="Ghar Baithe BGMI Tournaments Khelo Aur Prizes Jeeto!"
            description="India ka sabse trusted gaming platform. Mobile se registration karo, game khelo, aur asli paise jeeto. 10,000+ players already playing!"
            backgroundImage={heroImage}
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Tournaments" },
            ]}
            ctaButtons={[
              {
                label: "Tournaments Dekho",
                href: "#tournaments",
                icon: Trophy,
              },
              {
                label: "Kaise Join Karein?",
                href: "#how-to-join",
                variant: "outline",
                icon: PlayCircle,
              },
            ]}
            overlayOpacity={0.75}
            minHeight="600px"
          />
        </div>

        {/* What is GameArena - Modern Explainer with Scroll Reveals */}
        <SectionWrapper variant="muted" data-testid="section-what-is-gamearena">
          <ScrollReveal direction="bottom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6 magnetic scale-hover">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">GameArena Kya Hai?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ek simple platform jahan aap <strong>BGMI aur Free Fire Max tournaments</strong> mein participate karke <strong>asli paise</strong> jeet sakte ho. 
                Bas apne phone se register karo, game khelo, aur prizes ghar baithe receive karo!
              </p>
            </div>
          </ScrollReveal>

          {/* Modern Interactive Step Cards with Scroll Reveals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollReveal direction="left" delay={0.1}>
              <InteractiveCard enableTilt tiltIntensity={5} data-testid="explainer-step-1">
                <CardContent className="pt-10 pb-10 px-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent mb-6 magnetic">
                    <Smartphone className="w-10 h-10 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">1. Mobile Se Register Karo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Apne phone se tournament choose karo aur ₹20 se start karo. Google Pay, PhonePe, Paytm - sab chalega!
                  </p>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>

            <ScrollReveal direction="bottom" delay={0.2}>
              <InteractiveCard enableTilt tiltIntensity={5} data-testid="explainer-step-2">
                <CardContent className="pt-10 pb-10 px-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent mb-6 magnetic">
                    <Target className="w-10 h-10 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">2. Game Khelo</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tournament time pe room ID milega WhatsApp pe. Join karo aur apna best game khelo!
                  </p>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <InteractiveCard enableTilt tiltIntensity={5} data-testid="explainer-step-3">
                <CardContent className="pt-10 pb-10 px-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent mb-6 magnetic">
                    <Gift className="w-10 h-10 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">3. Prize Jeeto!</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Winner, runner-up, ya har kill pe paisa! 24-48 ghante mein prize aapke account mein.
                  </p>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        {/* Tournaments Section with Stagger Animation */}
        <SectionWrapper variant="default" id="tournaments" data-testid="section-tournaments">
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Available Tournaments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apna favorite game aur mode choose karo. Solo, Duo, ya Squad - sabke liye tournaments hain!
            </p>
          </motion.div>

          {/* Tournament Cards Grid with Stagger Effect */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

        {/* How to Join - 4 Easy Steps with Enhanced Animations */}
        <SectionWrapper variant="muted" id="how-to-join" data-testid="section-how-to-join">
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Kaise Join Karein? (4 Simple Steps)</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bilkul aasan hai! Ye steps follow karo aur tournament mein participate karo
            </p>
          </motion.div>

          {/* Steps Grid with Stagger Animation */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
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
            ].map((item) => (
              <motion.div key={item.step} variants={staggerItem}>
                <Card className="text-center h-full hover-elevate transition-all duration-300 group" data-testid={`how-to-step-${item.step}`}>
                  <CardContent className="pt-10 pb-10 px-6">
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-12 h-12 ${item.iconColor}`} />
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12 text-center"
          >
            <Link href="#tournaments">
              <Button size="lg" className="text-lg px-10 py-6" data-testid="button-start-registration">
                Ab Registration Shuru Karo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </SectionWrapper>

        {/* Trust Indicators - Modern Animated Stats */}
        <SectionWrapper variant="default" data-testid="section-trust-stats">
          <ScrollReveal direction="bottom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Kyun Trust Karein GameArena Ko?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Numbers jhooth nahi bolte - dekho kitne log hamare saath khel rahe hain!
              </p>
            </div>
          </ScrollReveal>

          {/* Stats Grid with Modern Animated Counters and Scroll Reveals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="scale" delay={0.1}>
              <InteractiveCard enableGlow data-testid="stat-players">
                <CardContent className="pt-10 pb-10 px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent mb-6 magnetic">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text-animated">
                    <AnimatedCounter end={10000} suffix="+" duration={2500} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Active Players</div>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>

            <ScrollReveal direction="scale" delay={0.2}>
              <InteractiveCard enableGlow data-testid="stat-tournaments">
                <CardContent className="pt-10 pb-10 px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent mb-6 magnetic">
                    <Trophy className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text-animated">
                    <AnimatedCounter end={150} suffix="+" duration={2500} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Tournaments Complete</div>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>

            <ScrollReveal direction="scale" delay={0.3}>
              <InteractiveCard enableGlow data-testid="stat-prizes">
                <CardContent className="pt-10 pb-10 px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent mb-6 magnetic">
                    <DollarSign className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text-animated">
                    <AnimatedCounter end={500000} prefix="₹" duration={2500} separator="," />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Total Prizes Distributed</div>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>

            <ScrollReveal direction="scale" delay={0.4}>
              <InteractiveCard enableGlow data-testid="stat-rating">
                <CardContent className="pt-10 pb-10 px-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent mb-6 magnetic">
                    <Star className="w-8 h-8 text-amber-500" />
                  </div>
                  <div className="text-4xl font-bold mb-2 gradient-text-animated">
                    <AnimatedCounter end={4.9} suffix="/5" decimals={1} duration={2500} />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Player Rating</div>
                </CardContent>
              </InteractiveCard>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        {/* Why Choose Us - Enhanced Feature Cards with Gradient Icons */}
        <SectionWrapper variant="muted" data-testid="section-benefits">
          <div className="relative">
            <GradientBlob color="secondary" size="lg" position="top-left" opacity={0.08} speed="slow" />
            
            <ScrollReveal direction="bottom">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">GameArena Kyun Choose Karein?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Hamari khas baatein jo hame sabse alag banati hain
                </p>
              </div>
            </ScrollReveal>

            {/* Benefits Grid with ScrollReveal and Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Safe & Secure",
                  description: "Har payment verified hoti hai. Koi fraud nahi, sab legitimate. 10,000+ players hampe trust karte hain.",
                  gradient: "from-green-500/20 via-green-500/10 to-transparent",
                  iconColor: "text-green-500",
                  direction: "left" as const,
                  delay: 0.1,
                },
                {
                  icon: Zap,
                  title: "Fast Prize Payment",
                  description: "Jeetne ke baad 24-48 ghante mein prize direct aapke UPI pe. No delays, no excuses - guaranteed!",
                  gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
                  iconColor: "text-blue-500",
                  direction: "right" as const,
                  delay: 0.2,
                },
                {
                  icon: MessageCircle,
                  title: "24/7 WhatsApp Support",
                  description: "Koi bhi problem ho, WhatsApp pe message karo. 5 minute mein reply milega. Hindi mein baat kar sakte ho!",
                  gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
                  iconColor: "text-purple-500",
                  direction: "left" as const,
                  delay: 0.3,
                },
                {
                  icon: Trophy,
                  title: "Fair Gameplay",
                  description: "Cheating allowed nahi hai. Har tournament fair hota hai. Aapki skill se jeetoge, kisi trick se nahi!",
                  gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
                  iconColor: "text-amber-500",
                  direction: "right" as const,
                  delay: 0.4,
                },
              ].map((benefit, index) => (
                <ScrollReveal key={benefit.title} direction={benefit.direction} delay={benefit.delay}>
                  <InteractiveCard enableTilt tiltIntensity={5} data-testid={`benefit-${index}`}>
                    <CardHeader className="pb-6">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 magnetic`}>
                          <benefit.icon className={`w-8 h-8 ${benefit.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-3">{benefit.title}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {benefit.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </InteractiveCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Testimonials - Enhanced with Smooth Entrance */}
        <SectionWrapper variant="default" data-testid="section-testimonials">
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Players Kya Kehte Hain?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hamare real players ki honest reviews padho
            </p>
          </motion.div>

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
          <motion.div
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Common Questions (FAQ)</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aapke sawal, hamare jawab - sab kuch clear aur simple
            </p>
          </motion.div>

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

        {/* Contact Quick Links with Enhanced Icons */}
        <SectionWrapper variant="default" data-testid="section-quick-contact">
          <div className="relative">
            <GradientBlob color="accent" size="md" position="bottom-right" opacity={0.1} speed="medium" />
            
            <ScrollReveal direction="bottom">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Abhi Bhi Koi Doubt Hai?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Hum yahan hain help karne ke liye - contact karo kisi bhi tarah se!
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Cards with ScrollReveal and Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ScrollReveal direction="left" delay={0.1}>
                <InteractiveCard enableTilt tiltIntensity={8} data-testid="contact-whatsapp">
                  <CardContent className="pt-10 pb-10 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent mb-6 magnetic">
                      <MessageCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">WhatsApp Chat</h3>
                    <p className="text-muted-foreground mb-6">24/7 Available</p>
                    <Button variant="outline" className="w-full" asChild data-testid="button-whatsapp">
                      <a 
                        href="https://wa.me/917541024846" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Message Karo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </InteractiveCard>
              </ScrollReveal>

              <ScrollReveal direction="bottom" delay={0.2}>
                <InteractiveCard enableTilt tiltIntensity={8} data-testid="contact-phone">
                  <CardContent className="pt-10 pb-10 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-transparent mb-6 magnetic">
                      <PhoneCall className="w-10 h-10 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Phone Call</h3>
                    <p className="text-muted-foreground mb-6">10 AM - 8 PM</p>
                    <Button variant="outline" className="w-full" asChild data-testid="button-phone">
                      <a href="tel:+917541024846">
                        Call Karo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </InteractiveCard>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <InteractiveCard enableTilt tiltIntensity={8} data-testid="contact-email">
                  <CardContent className="pt-10 pb-10 px-6 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent mb-6 magnetic">
                      <Mail className="w-10 h-10 text-purple-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-6">24 hour reply</p>
                    <Link href="/contact">
                      <Button variant="outline" className="w-full" data-testid="button-contact-page">
                        Email Bhejo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </InteractiveCard>
              </ScrollReveal>
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
