import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TournamentCard from "@/components/TournamentCard";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Shield, Youtube, Trophy, Zap } from "lucide-react";
import { Link } from "wouter";

const tournaments = [
  {
    title: "BGMI Solo",
    mode: "Solo",
    entryFee: 20,
    slots: 100,
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/solo",
  },
  {
    title: "BGMI Duo",
    mode: "Duo",
    entryFee: 40,
    slots: 50,
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/duo",
  },
  {
    title: "BGMI Squad",
    mode: "Squad",
    entryFee: 80,
    slots: 25,
    winner: 350,
    runnerUp: 250,
    perKill: 9,
    path: "/squad",
  },
];

const features = [
  {
    icon: Shield,
    title: "Secure Payment Verification",
    description: "All payments are verified through screenshots and transaction IDs to ensure complete transparency.",
  },
  {
    icon: Youtube,
    title: "YouTube Live Streaming",
    description: "Vote for live streaming on our official YouTube channel and watch your favorite players compete.",
  },
  {
    icon: Trophy,
    title: "Guaranteed Prize Pool",
    description: "Winner, runner-up, and per-kill rewards are guaranteed for all registered tournaments.",
  },
  {
    icon: Zap,
    title: "Instant Slot Confirmation",
    description: "Get instant confirmation after payment verification. No delays, no hassle.",
  },
];

const steps = [
  {
    number: "1",
    title: "Choose Tournament",
    description: "Select from Solo, Duo, or Squad tournaments based on your preference",
  },
  {
    number: "2",
    title: "Complete Payment",
    description: "Make payment using our official QR code and save the transaction details",
  },
  {
    number: "3",
    title: "Fill Registration Form",
    description: "Complete the registration form with accurate details and upload payment proof",
  },
  {
    number: "4",
    title: "Join & Compete",
    description: "Receive room credentials from admin and compete for exciting prizes",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-background to-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                Professional BGMI Tournaments
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Join GameArena's verified tournaments with transparent payments, guaranteed prizes, and professional management
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="#tournaments">
                  <Button size="lg" data-testid="button-view-tournaments">
                    <Trophy className="w-5 h-5 mr-2" />
                    View Tournaments
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="tournaments" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Active Tournaments</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose your preferred tournament mode and register now to secure your slot
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose GameArena</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional tournament management with player-first approach
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple 4-step process to join the tournament
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
