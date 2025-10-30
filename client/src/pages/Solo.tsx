import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsDisplay from "@/components/StatsDisplay";
import RulesAccordion from "@/components/RulesAccordion";
import PaymentInstructions from "@/components/PaymentInstructions";
import FormEmbed from "@/components/FormEmbed";
import { Trophy, Users, Coins, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Entry Fee", value: "₹20", icon: <Ticket className="w-6 h-6" /> },
  { label: "Total Players", value: "100", icon: <Users className="w-6 h-6" /> },
  { label: "Winner Prize", value: "₹350", icon: <Trophy className="w-6 h-6" />, highlight: true },
  { label: "Per Kill", value: "₹9", icon: <Coins className="w-6 h-6" /> },
];

const rules = [
  {
    title: "Registration Requirements",
    type: "info" as const,
    content: [
      "Fill out the registration form with accurate details",
      "Your BGMI ID and In-Game Name must match exactly",
      "WhatsApp number is required for communication",
      "Payment verification is mandatory before slot confirmation",
    ],
  },
  {
    title: "Payment Process",
    type: "info" as const,
    content: [
      "Entry fee: ₹20 per player",
      "Payment must be made via official GameArena QR code",
      "Upload clear screenshot of payment confirmation",
      "Note down and enter the correct Transaction ID",
      "Slots will be canceled if payment is not verified",
    ],
  },
  {
    title: "Tournament Rules",
    type: "success" as const,
    content: [
      "No use of hacks, cheats, or third-party applications",
      "Maintain sportsmanship and respect other players",
      "Follow room credentials shared by admin",
      "Be online 15 minutes before tournament start time",
      "Any toxic behavior will lead to immediate disqualification",
    ],
  },
  {
    title: "Prize Distribution",
    type: "success" as const,
    content: [
      "Winner: ₹350",
      "Runner-Up: ₹250",
      "Per Kill: ₹9",
      "Prizes will be distributed within 24-48 hours after tournament",
      "Valid UPI ID required for prize transfer",
    ],
  },
  {
    title: "Disqualification Policy",
    type: "warning" as const,
    content: [
      "Providing incorrect or incomplete details",
      "Payment verification failure",
      "Use of unauthorized applications or cheats",
      "Toxic behavior or harassment of other players",
      "Not following admin instructions",
      "No refunds in case of disqualification",
    ],
  },
  {
    title: "YouTube Streaming",
    type: "info" as const,
    content: [
      "We plan to stream this tournament on our official YouTube channel",
      "Your vote in the registration form helps us decide",
      "Majority decision will determine if the match is streamed",
      "Streaming brings more visibility to the tournament",
    ],
  },
];

export default function Solo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="bg-gradient-to-b from-background to-card/50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl sm:text-5xl font-bold" data-testid="text-tournament-title">
                  BGMI Solo Tournament
                </h1>
                <Badge variant="secondary" className="text-lg px-4 py-1">Solo</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Compete individually in an intense solo battle royale. 100 players, one winner.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StatsDisplay stats={stats} />
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Tournament Rules & Guidelines</h2>
              <RulesAccordion rules={rules} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Payment Instructions</h2>
              <PaymentInstructions amount={20} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Registration Form</h2>
              <FormEmbed
                formUrl="https://forms.gle/BE1TENZbKCapdEw28"
                title="BGMI Solo Tournament Registration"
                description="Please fill out all fields accurately. Your slot will be confirmed after payment verification."
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
