import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsDisplay from "@/components/StatsDisplay";
import RulesAccordion from "@/components/RulesAccordion";
import PaymentInstructions from "@/components/PaymentInstructions";
import FormEmbed from "@/components/FormEmbed";
import VideoSection from "@/components/VideoSection";
import ImageGallery from "@/components/ImageGallery";
import { Trophy, Users, Coins, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import duoImage from "@assets/stock_images/professional_esports_51ad66a4.jpg";
import teamImage1 from "@assets/stock_images/mobile_gaming_esport_37b20b88.jpg";
import teamImage2 from "@assets/stock_images/gaming_tournament_tr_cb77e853.jpg";

const stats = [
  { label: "Entry Fee", value: "₹40", icon: <Ticket className="w-6 h-6" /> },
  { label: "Total Teams", value: "50", icon: <Users className="w-6 h-6" /> },
  { label: "Winner Prize", value: "₹350", icon: <Trophy className="w-6 h-6" />, highlight: true },
  { label: "Per Kill", value: "₹9", icon: <Coins className="w-6 h-6" /> },
];

const rules = [
  {
    title: "Team Registration Requirements",
    type: "info" as const,
    content: [
      "Register with your 2-player team",
      "Team name must be unique and appropriate",
      "Both players' BGMI IDs and names must be accurate",
      "Team leader's WhatsApp number is required for communication",
      "Payment verification is mandatory before slot confirmation",
    ],
  },
  {
    title: "Payment Process",
    type: "info" as const,
    content: [
      "Entry fee: ₹40 per team (both players combined)",
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
      "Both team members must maintain sportsmanship",
      "Follow room credentials shared by admin",
      "Both players must be online 15 minutes before tournament",
      "Team members cannot be changed after registration",
      "Any toxic behavior will lead to team disqualification",
    ],
  },
  {
    title: "Prize Distribution",
    type: "success" as const,
    content: [
      "Winner Team: ₹350",
      "Runner-Up Team: ₹250",
      "Per Kill: ₹9",
      "Prizes will be distributed within 24-48 hours after tournament",
      "Team leader's valid UPI ID required for prize transfer",
      "Prize will be transferred to team leader who can distribute to partner",
    ],
  },
  {
    title: "Disqualification Policy",
    type: "warning" as const,
    content: [
      "Providing incorrect or incomplete team details",
      "Payment verification failure",
      "Use of unauthorized applications or cheats by any team member",
      "Toxic behavior or harassment by any team member",
      "Not following admin instructions",
      "Playing with different team member than registered",
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

export default function Duo() {
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
                  BGMI Duo Tournament
                </h1>
                <Badge variant="secondary" className="text-lg px-4 py-1">Duo</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Team up with a partner and dominate the battlefield. 50 teams competing for glory.
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
              <PaymentInstructions amount={40} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Registration Form</h2>
              <FormEmbed
                formUrl="https://forms.gle/dRg6VVQfg7EerJRq6"
                title="BGMI Duo Tournament Registration"
                description="Please fill out all team details accurately. Your slot will be confirmed after payment verification."
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="overflow-hidden">
                <div className="aspect-video">
                  <img
                    src={duoImage}
                    alt="BGMI Duo Tournament"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <VideoSection
                title="Duo Tournament Highlights"
                description="Watch epic duo teamwork from previous tournaments"
                videoId="dQw4w9WgXcQ"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">Tournament Action</h2>
              <p className="text-muted-foreground">
                Experience the synergy of duo partnerships
              </p>
            </motion.div>
            <ImageGallery
              images={[
                { src: teamImage1, alt: "Duo Tournament Action 1" },
                { src: teamImage2, alt: "Duo Tournament Action 2" },
                { src: duoImage, alt: "Duo Tournament Action 3" },
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
