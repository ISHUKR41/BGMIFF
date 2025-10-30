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
import squadImage from "@assets/stock_images/professional_esports_b950c25b.jpg";
import actionImage1 from "@assets/stock_images/mobile_gaming_esport_08f2afcc.jpg";
import actionImage2 from "@assets/stock_images/professional_esports_00682946.jpg";

const stats = [
  { label: "Entry Fee", value: "₹80", icon: <Ticket className="w-6 h-6" /> },
  { label: "Total Teams", value: "25", icon: <Users className="w-6 h-6" /> },
  { label: "Winner Prize", value: "₹350", icon: <Trophy className="w-6 h-6" />, highlight: true },
  { label: "Per Kill", value: "₹9", icon: <Coins className="w-6 h-6" /> },
];

const rules = [
  {
    title: "Squad Registration Requirements",
    type: "info" as const,
    content: [
      "Register with your complete 4-player squad",
      "Team name must be unique and appropriate",
      "All 4 players' BGMI IDs and names must be accurate",
      "Team leader's WhatsApp number is required for communication",
      "Payment verification is mandatory before slot confirmation",
    ],
  },
  {
    title: "Payment Process",
    type: "info" as const,
    content: [
      "Entry fee: ₹80 per squad (all 4 players combined)",
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
      "All squad members must maintain sportsmanship",
      "Follow room credentials shared by admin",
      "All 4 players must be online 15 minutes before tournament",
      "Squad members cannot be changed after registration",
      "Any toxic behavior will lead to squad disqualification",
      "Team leader is responsible for team coordination",
    ],
  },
  {
    title: "Prize Distribution",
    type: "success" as const,
    content: [
      "Winner Squad: ₹350",
      "Runner-Up Squad: ₹250",
      "Per Kill: ₹9",
      "Prizes will be distributed within 24-48 hours after tournament",
      "Team leader's valid UPI ID required for prize transfer",
      "Prize will be transferred to team leader who can distribute to squad members",
    ],
  },
  {
    title: "Disqualification Policy",
    type: "warning" as const,
    content: [
      "Providing incorrect or incomplete squad details",
      "Payment verification failure",
      "Use of unauthorized applications or cheats by any squad member",
      "Toxic behavior or harassment by any squad member",
      "Not following admin instructions",
      "Playing with different squad members than registered",
      "Incomplete squad (less than 4 players) during tournament",
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

export default function Squad() {
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
                  BGMI Squad Tournament
                </h1>
                <Badge variant="secondary" className="text-lg px-4 py-1">Squad</Badge>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Assemble your squad of 4 players and compete for victory. 25 elite squads battle it out.
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
              <PaymentInstructions amount={80} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Registration Form</h2>
              <FormEmbed
                formUrl="https://forms.gle/Hq3yPHZyESBv47P29"
                title="BGMI Squad Tournament Registration"
                description="Please fill out all squad details accurately. Your slot will be confirmed after payment verification."
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
                    src={squadImage}
                    alt="BGMI Squad Tournament"
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
                title="Squad Tournament Highlights"
                description="Watch professional squad coordination from previous tournaments"
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
                Experience the power of full squad gameplay
              </p>
            </motion.div>
            <ImageGallery
              images={[
                { src: actionImage1, alt: "Squad Tournament Action 1" },
                { src: actionImage2, alt: "Squad Tournament Action 2" },
                { src: squadImage, alt: "Squad Tournament Action 3" },
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
