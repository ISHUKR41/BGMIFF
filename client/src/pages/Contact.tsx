import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ModernHero from "@/components/ModernHero";
import SectionWrapper from "@/components/SectionWrapper";
import MediaLightbox from "@/components/MediaLightbox";
import ModernTestimonials from "@/components/ModernTestimonials";
import CTABand from "@/components/CTABand";
import ProfessionalStatCard from "@/components/ProfessionalStatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  Headphones,
  FileText,
  TrendingUp,
  Users,
  Award,
  Download,
  Video,
  AlertCircle,
  CheckCircle2,
  Timer,
  LifeBuoy,
  ShieldCheck,
  Zap,
  Globe,
  MessageCircle,
  Ticket,
  ArrowUpCircle,
  PlayCircle,
  FileCheck,
  CreditCard,
  HelpCircle,
  Info,
  X,
} from "lucide-react";
import { SiDiscord, SiTelegram, SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import supportImage1 from "@assets/stock_images/professional_custome_38a1fc0a.jpg";
import supportImage2 from "@assets/stock_images/professional_custome_554f60f4.jpg";
import supportImage3 from "@assets/stock_images/professional_custome_e957b2ee.jpg";
import { CONTACT_INFO, SOCIAL_LINKS, SUPPORT_CHANNELS } from "@/../../shared/config";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  category: z.enum(["technical", "payment", "tournament", "general", "account"], {
    required_error: "Please select a category",
  }),
  priority: z.enum(["low", "medium", "high"], {
    required_error: "Please select a priority level",
  }),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const faqs = [
  {
    question: "How do I register for a tournament?",
    answer: "Select your desired tournament (Solo, Duo, or Squad), complete the payment using our official QR code, and fill out the registration form with accurate details including your payment screenshot and transaction ID.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept payments via UPI through our official GameArena QR code. After payment, you must upload a clear screenshot and provide the transaction ID for verification.",
  },
  {
    question: "When will I receive my prize money?",
    answer: "Prize money is distributed within 24-48 hours after the tournament concludes. You need to provide a valid UPI ID for the transfer. Winners will be contacted via WhatsApp.",
  },
  {
    question: "Can I change my team members after registration?",
    answer: "No, team members cannot be changed after registration is complete. Please ensure all player details are accurate before submitting the registration form.",
  },
  {
    question: "What happens if my payment is not verified?",
    answer: "If payment verification fails due to incorrect details or missing screenshots, your slot will be automatically canceled. No refund will be provided if you fail to provide proper payment proof.",
  },
  {
    question: "Will the tournament be streamed on YouTube?",
    answer: "We plan to stream tournaments on our official YouTube channel based on majority voting. You can vote for streaming preference in the registration form.",
  },
  {
    question: "What are the grounds for disqualification?",
    answer: "Players can be disqualified for: using hacks/cheats, providing incorrect information, toxic behavior, not following admin instructions, or playing with unregistered team members.",
  },
  {
    question: "How will I receive room credentials?",
    answer: "Room credentials and tournament details will be shared via WhatsApp to the registered number 15 minutes before the tournament starts. Please ensure your WhatsApp number is active.",
  },
  {
    question: "How do I track my support ticket?",
    answer: "Once you submit a support request, you'll receive a unique ticket ID via email and WhatsApp. Use this ticket ID to track your request status through our support portal or by contacting our team.",
  },
  {
    question: "What is your refund policy?",
    answer: "Refunds are only processed in case of tournament cancellation by our team. Registration fees are non-refundable once the tournament slots are confirmed. Refunds take 5-7 business days to process.",
  },
  {
    question: "Can I participate from outside India?",
    answer: "Currently, our tournaments are open to Indian players only due to server locations and payment restrictions. We plan to expand to other regions in the future.",
  },
  {
    question: "How do I report a technical issue during a match?",
    answer: "Immediately contact the tournament admin via WhatsApp with your room ID and player details. Take screenshots of the issue if possible. Admins will investigate and make decisions based on proof provided.",
  },
  {
    question: "Are there age restrictions for tournaments?",
    answer: "Players must be at least 16 years old to participate. For players under 18, parental consent is required. Age verification may be requested for prize claims.",
  },
  {
    question: "How secure is my payment information?",
    answer: "We use secure UPI payment gateways. We never store your payment credentials. All transactions are encrypted and verified through official payment providers.",
  },
  {
    question: "What happens if I disconnect during a tournament?",
    answer: "Players are responsible for maintaining stable internet connections. Brief disconnections (under 2 minutes) may be allowed based on admin discretion. Extended disconnections may result in disqualification.",
  },
  {
    question: "Can I get a receipt for my tournament registration?",
    answer: "Yes, payment confirmation and registration receipts are automatically sent to your registered email address. You can also download them from your account dashboard.",
  },
  {
    question: "How do I update my contact information?",
    answer: "Contact our support team via email or WhatsApp with your registered details and the information you wish to update. Changes are typically processed within 24 hours.",
  },
];

const teamMembers = [
  {
    src: supportImage1,
    alt: "Support Team Lead - Rajesh Kumar",
    caption: "Rajesh Kumar - Senior Support Manager",
    name: "Rajesh Kumar",
    role: "Senior Support Manager",
    specialization: "Tournament Operations & Technical Support",
    initials: "RK",
  },
  {
    src: supportImage2,
    alt: "Payment Specialist - Priya Sharma",
    caption: "Priya Sharma - Payment Operations Lead",
    name: "Priya Sharma",
    role: "Payment Operations Lead",
    specialization: "Payment Verification & Refunds",
    initials: "PS",
  },
  {
    src: supportImage3,
    alt: "Customer Success - Amit Patel",
    caption: "Amit Patel - Customer Success Manager",
    name: "Amit Patel",
    role: "Customer Success Manager",
    specialization: "Player Relations & Escalations",
    initials: "AP",
  },
  {
    src: supportImage1,
    alt: "Technical Lead - Sneha Reddy",
    caption: "Sneha Reddy - Technical Support Lead",
    name: "Sneha Reddy",
    role: "Technical Support Lead",
    specialization: "Platform Issues & Bug Resolution",
    initials: "SR",
  },
  {
    src: supportImage2,
    alt: "Community Manager - Vikram Singh",
    caption: "Vikram Singh - Community Manager",
    name: "Vikram Singh",
    role: "Community Manager",
    specialization: "Discord & Telegram Community Support",
    initials: "VS",
  },
  {
    src: supportImage3,
    alt: "Support Specialist - Meera Joshi",
    caption: "Meera Joshi - Support Specialist",
    name: "Meera Joshi",
    role: "Support Specialist",
    specialization: "General Inquiries & FAQ Management",
    initials: "MJ",
  },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Tournament Winner",
    content: "The support team helped me resolve a payment verification issue within 30 minutes. Their response time is incredible, and they really care about players.",
    initials: "AM",
    rating: 5,
  },
  {
    name: "Kavya Nair",
    role: "Regular Player",
    content: "I had questions about team registration, and the WhatsApp support was instant. They guided me through the entire process with patience and clarity.",
    initials: "KN",
    rating: 5,
  },
  {
    name: "Rohit Desai",
    role: "Squad Leader",
    content: "Best tournament platform I've used! The support documentation is comprehensive, and if you need human help, they're available 24/7. Highly professional.",
    initials: "RD",
    rating: 5,
  },
  {
    name: "Ananya Singh",
    role: "Duo Participant",
    content: "Had a technical issue during registration. The support team not only fixed it quickly but also followed up to ensure everything was working perfectly.",
    initials: "AS",
    rating: 5,
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [charCount, setCharCount] = useState(0);
  const [showLiveChat, setShowLiveChat] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: undefined,
      priority: undefined,
      message: "",
    },
  });

  const watchPriority = form.watch("priority");
  const watchMessage = form.watch("message");

  const getEstimatedResponseTime = (priority: string | undefined) => {
    switch (priority) {
      case "high":
        return "Within 1 hour";
      case "medium":
        return "Within 4 hours";
      case "low":
        return "Within 24 hours";
      default:
        return "Select priority to see estimate";
    }
  };

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", data);
    toast({
      title: "Support Ticket Created! ✅",
      description: `Ticket #${Math.random().toString(36).substr(2, 9).toUpperCase()} has been created. We'll respond ${getEstimatedResponseTime(data.priority).toLowerCase()}.`,
    });
    form.reset();
    setCharCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <ModernHero
          title="Professional Support Hub"
          description="Get expert help 24/7. Our dedicated support team is here to ensure your gaming experience is seamless and enjoyable."
          backgroundImage={supportImage1}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Support & Contact" },
          ]}
          ctaButtons={[
            { label: "Submit Ticket", href: "#contact-form", variant: "default", icon: Ticket },
            { label: "Live Chat", onClick: () => setShowLiveChat(true), variant: "outline", icon: MessageCircle },
          ]}
        />

        {/* Support Statistics */}
        <SectionWrapper variant="muted" data-testid="section-support-stats">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-stats-title">
              Our Support Performance
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We pride ourselves on fast, reliable, and professional support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfessionalStatCard
              icon={Timer}
              value={15}
              label="Average Response Time (minutes)"
              suffix=" min"
              data-testid="stat-response-time"
            />
            <ProfessionalStatCard
              icon={Award}
              value={98.5}
              label="Customer Satisfaction Rate"
              suffix="%"
              decimals={1}
              delay={0.1}
              data-testid="stat-satisfaction"
            />
            <ProfessionalStatCard
              icon={CheckCircle2}
              value={12500}
              label="Tickets Resolved"
              suffix="+"
              delay={0.2}
              data-testid="stat-tickets-resolved"
            />
            <ProfessionalStatCard
              icon={Users}
              value={24}
              label="Support Available"
              suffix="/7"
              delay={0.3}
              data-testid="stat-availability"
            />
          </div>
        </SectionWrapper>

        {/* Live Support Hours */}
        <SectionWrapper data-testid="section-support-hours">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-support-hours-title">
              Live Support Availability
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multiple channels to reach us, operating round the clock
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-elevate" data-testid="card-support-whatsapp">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <SiWhatsapp className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">WhatsApp Support</h3>
                <Badge className="mb-3" data-testid="badge-whatsapp-status">24/7 Available</Badge>
                <p className="text-sm text-muted-foreground mb-2">
                  Instant replies for urgent issues
                </p>
                <p className="text-xs text-muted-foreground">
                  <Globe className="w-3 h-3 inline mr-1" />
                  All Timezones (IST Primary)
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-support-email">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                <Badge variant="secondary" className="mb-3" data-testid="badge-email-status">9 AM - 9 PM IST</Badge>
                <p className="text-sm text-muted-foreground mb-2">
                  Detailed inquiries and documentation
                </p>
                <p className="text-xs text-muted-foreground">
                  Response within 4 hours
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-support-discord">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                  <SiDiscord className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Discord Community</h3>
                <Badge variant="secondary" className="mb-3" data-testid="badge-discord-status">24/7 Community</Badge>
                <p className="text-sm text-muted-foreground mb-2">
                  Community help and announcements
                </p>
                <p className="text-xs text-muted-foreground">
                  Mods online 16 hours daily
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-support-livechat">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                <Badge className="mb-3" data-testid="badge-livechat-status">10 AM - 11 PM IST</Badge>
                <p className="text-sm text-muted-foreground mb-2">
                  Real-time assistance on website
                </p>
                <p className="text-xs text-muted-foreground">
                  Average wait time: 2 minutes
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Service Offerings */}
        <SectionWrapper variant="muted" data-testid="section-service-offerings">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-title">
              Our Support Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized teams for every type of inquiry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover-elevate" data-testid="card-service-technical">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Zap className="w-7 h-7 text-primary" />
                </div>
                <CardTitle>Technical Support</CardTitle>
                <CardDescription>Platform issues, bugs, and technical troubleshooting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Login and account access issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Game room connection problems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Bug reports and error resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Performance optimization guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-service-payment">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-chart-2/10 flex items-center justify-center mb-3">
                  <CreditCard className="w-7 h-7 text-chart-2" />
                </div>
                <CardTitle>Payment Issues</CardTitle>
                <CardDescription>Transaction verification, refunds, and payment support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span>Payment verification and confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span>Refund processing and status tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span>Prize money distribution queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <span>Transaction ID and receipt assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-service-tournament">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-chart-3/10 flex items-center justify-center mb-3">
                  <TrendingUp className="w-7 h-7 text-chart-3" />
                </div>
                <CardTitle>Tournament Queries</CardTitle>
                <CardDescription>Registration, rules, scheduling, and tournament support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Registration assistance and team setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Tournament rules and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Schedule changes and notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-3 mt-0.5 flex-shrink-0" />
                    <span>Room credentials and match details</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-service-general">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-chart-4/10 flex items-center justify-center mb-3">
                  <HelpCircle className="w-7 h-7 text-chart-4" />
                </div>
                <CardTitle>General Inquiries</CardTitle>
                <CardDescription>Account management, policies, and general questions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                    <span>Account settings and profile updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                    <span>Platform policies and guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                    <span>Partnership and sponsorship inquiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-4 mt-0.5 flex-shrink-0" />
                    <span>Feedback and feature suggestions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Team Profiles */}
        <SectionWrapper data-testid="section-team-profiles">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-team-title">
              Meet Our Support Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-elevate" data-testid={`card-team-member-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="w-24 h-24">
                        <AvatarImage src={member.src} alt={member.name} />
                        <AvatarFallback className="text-2xl">{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg" data-testid={`text-team-name-${index}`}>
                          {member.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                        <Badge variant="secondary" className="text-xs">
                          {member.specialization}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Team Gallery</h3>
            <MediaLightbox
              items={teamMembers.map((member) => ({
                src: member.src,
                alt: member.alt,
                caption: member.caption,
              }))}
              columns={{ sm: 2, md: 3, lg: 3 }}
            />
          </div>
        </SectionWrapper>

        {/* Enhanced Contact Form */}
        <SectionWrapper variant="muted" id="contact-form" data-testid="section-contact-form">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-form-title">
                Submit a Support Ticket
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and our team will get back to you shortly
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  All fields are required. Choose the priority level to get an estimated response time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} data-testid="input-form-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                {...field}
                                data-testid="input-form-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>WhatsApp Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+91 98765 43210"
                                {...field}
                                data-testid="input-form-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Issue Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-category">
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="technical">Technical Support</SelectItem>
                                <SelectItem value="payment">Payment Issues</SelectItem>
                                <SelectItem value="tournament">Tournament Queries</SelectItem>
                                <SelectItem value="account">Account Management</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Brief description of your issue"
                              {...field}
                              data-testid="input-form-subject"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="priority"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Priority Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-priority">
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="low">
                                <div className="flex items-center gap-2">
                                  <Info className="w-4 h-4 text-muted-foreground" />
                                  <span>Low - General Question</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="medium">
                                <div className="flex items-center gap-2">
                                  <AlertCircle className="w-4 h-4 text-chart-2" />
                                  <span>Medium - Need Help</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="high">
                                <div className="flex items-center gap-2">
                                  <ArrowUpCircle className="w-4 h-4 text-destructive" />
                                  <span>High - Urgent Issue</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            <Timer className="w-4 h-4 inline mr-1" />
                            Estimated Response: {getEstimatedResponseTime(watchPriority)}
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide detailed information about your issue..."
                              rows={6}
                              {...field}
                              onChange={(e) => {
                                field.onChange(e);
                                setCharCount(e.target.value.length);
                              }}
                              data-testid="textarea-form-message"
                            />
                          </FormControl>
                          <FormDescription className="flex justify-between">
                            <span>Minimum 20 characters required</span>
                            <span
                              className={charCount > 1000 ? "text-destructive" : ""}
                              data-testid="text-char-count"
                            >
                              {charCount} / 1000
                            </span>
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={form.formState.isSubmitting}
                        data-testid="button-submit-form"
                      >
                        {form.formState.isSubmitting ? (
                          <>Processing...</>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Submit Support Ticket
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Support SLA Information */}
        <SectionWrapper data-testid="section-sla-info">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-sla-title">
              Our Service Level Agreement
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Guaranteed response times and resolution commitments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="hover-elevate" data-testid="card-sla-response">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Timer className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Response Time Guarantee</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">High Priority</span>
                    <Badge data-testid="badge-sla-high">1 Hour</Badge>
                  </div>
                  <Progress value={100} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Medium Priority</span>
                    <Badge variant="secondary" data-testid="badge-sla-medium">4 Hours</Badge>
                  </div>
                  <Progress value={75} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Low Priority</span>
                    <Badge variant="secondary" data-testid="badge-sla-low">24 Hours</Badge>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-sla-resolution">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-6 h-6 text-chart-2" />
                </div>
                <CardTitle>Resolution Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Simple Issues</p>
                      <p className="text-muted-foreground">Resolved within 2-4 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Moderate Issues</p>
                      <p className="text-muted-foreground">Resolved within 24-48 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Complex Issues</p>
                      <p className="text-muted-foreground">Resolved within 3-5 business days</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Payment Refunds</p>
                      <p className="text-muted-foreground">Processed within 5-7 business days</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-sla-escalation">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-3">
                  <ArrowUpCircle className="w-6 h-6 text-chart-3" />
                </div>
                <CardTitle>Escalation Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Tier 1 Support</p>
                      <p className="text-muted-foreground">Initial ticket assignment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Tier 2 Specialist</p>
                      <p className="text-muted-foreground">If unresolved within SLA</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Senior Manager</p>
                      <p className="text-muted-foreground">Complex or critical issues</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Executive Review</p>
                      <p className="text-muted-foreground">Final escalation level</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Support Tickets System */}
        <SectionWrapper variant="muted" data-testid="section-ticket-system">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-ticket-title">
                Support Ticket System
              </h2>
              <p className="text-muted-foreground text-lg">
                Track and manage your support requests efficiently
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-elevate" data-testid="card-ticket-how">
                <CardHeader>
                  <Ticket className="w-8 h-8 text-primary mb-3" />
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Submit Your Request</p>
                        <p className="text-muted-foreground">Fill out the support form with details</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Receive Ticket ID</p>
                        <p className="text-muted-foreground">Get a unique tracking number via email/WhatsApp</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Track Progress</p>
                        <p className="text-muted-foreground">Monitor status updates in real-time</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Get Resolution</p>
                        <p className="text-muted-foreground">Receive solution and confirm satisfaction</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-ticket-status">
                <CardHeader>
                  <LifeBuoy className="w-8 h-8 text-chart-2 mb-3" />
                  <CardTitle>Ticket Status Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-blue-500">New</Badge>
                      <span className="text-sm text-muted-foreground">Just submitted, awaiting assignment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-yellow-500">In Progress</Badge>
                      <span className="text-sm text-muted-foreground">Team is actively working on it</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-purple-500">Waiting</Badge>
                      <span className="text-sm text-muted-foreground">Pending your response or information</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-orange-500">Escalated</Badge>
                      <span className="text-sm text-muted-foreground">Moved to senior team member</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-500">Resolved</Badge>
                      <span className="text-sm text-muted-foreground">Issue fixed, awaiting confirmation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Closed</Badge>
                      <span className="text-sm text-muted-foreground">Completed and confirmed by you</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 border-primary/50" data-testid="card-ticket-tracking">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ticket Tracking Portal</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use your ticket ID to check status anytime. No login required - just enter your ticket number and email to view progress, add comments, or upload additional files.
                    </p>
                    <Button variant="outline" data-testid="button-track-ticket">
                      <Ticket className="w-4 h-4 mr-2" />
                      Track My Ticket
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Downloadable Resources */}
        <SectionWrapper data-testid="section-downloads">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-downloads-title">
              Downloadable Resources
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Essential guides and documentation for quick reference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover-elevate active-elevate-2 cursor-pointer" data-testid="card-download-rules">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Tournament Rules PDF</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete rulebook for all tournament formats
                </p>
                <Badge variant="secondary" className="mb-3">PDF • 2.5 MB</Badge>
                <Button variant="outline" size="sm" className="w-full" data-testid="button-download-rules">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2 cursor-pointer" data-testid="card-download-registration">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-chart-2" />
                </div>
                <h3 className="font-semibold mb-2">Registration Guide</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Step-by-step registration instructions
                </p>
                <Badge variant="secondary" className="mb-3">PDF • 1.8 MB</Badge>
                <Button variant="outline" size="sm" className="w-full" data-testid="button-download-registration">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2 cursor-pointer" data-testid="card-download-payment">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="font-semibold mb-2">Payment Instructions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  UPI payment guide with QR codes
                </p>
                <Badge variant="secondary" className="mb-3">PDF • 1.2 MB</Badge>
                <Button variant="outline" size="sm" className="w-full" data-testid="button-download-payment">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate active-elevate-2 cursor-pointer" data-testid="card-download-faq">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-chart-4/10 flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-chart-4" />
                </div>
                <h3 className="font-semibold mb-2">FAQ Document</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Frequently asked questions compilation
                </p>
                <Badge variant="secondary" className="mb-3">PDF • 900 KB</Badge>
                <Button variant="outline" size="sm" className="w-full" data-testid="button-download-faq">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Video Tutorials */}
        <SectionWrapper variant="muted" data-testid="section-video-tutorials">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-videos-title">
              Video Tutorials
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch step-by-step guides to get started quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover-elevate overflow-hidden" data-testid="card-video-registration">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center relative group">
                <PlayCircle className="w-16 h-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <Badge variant="secondary">4:32</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">How to Register</CardTitle>
                <CardDescription>Complete registration process walkthrough</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" data-testid="button-watch-registration">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate overflow-hidden" data-testid="card-video-payment">
              <div className="aspect-video bg-gradient-to-br from-chart-2/20 to-chart-3/20 flex items-center justify-center relative group">
                <PlayCircle className="w-16 h-16 text-chart-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <Badge variant="secondary">3:15</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Making Payments</CardTitle>
                <CardDescription>UPI payment and verification guide</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" data-testid="button-watch-payment">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate overflow-hidden" data-testid="card-video-tournament">
              <div className="aspect-video bg-gradient-to-br from-chart-3/20 to-chart-4/20 flex items-center justify-center relative group">
                <PlayCircle className="w-16 h-16 text-chart-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-4">
                  <Badge variant="secondary">6:48</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Joining Tournaments</CardTitle>
                <CardDescription>Room credentials and match participation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" data-testid="button-watch-tournament">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Watch Tutorial
                </Button>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Community Links */}
        <SectionWrapper data-testid="section-community">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-community-title">
              Join Our Community
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect with thousands of players and get instant updates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-elevate" data-testid="card-community-discord">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                  <SiDiscord className="w-8 h-8 text-indigo-500" />
                </div>
                <CardTitle>Discord Server</CardTitle>
                <CardDescription>Real-time chat and voice channels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Members</span>
                    <Badge>8,500+</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Online Now</span>
                    <Badge variant="secondary">2,340</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get tournament announcements, discuss strategies, and connect with fellow gamers
                  </p>
                  <Button className="w-full" data-testid="button-join-discord">
                    <SiDiscord className="w-4 h-4 mr-2" />
                    Join Discord
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-community-telegram">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <SiTelegram className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle>Telegram Group</CardTitle>
                <CardDescription>Instant notifications and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Members</span>
                    <Badge>12,000+</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Active Today</span>
                    <Badge variant="secondary">4,500</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Receive instant tournament schedules, payment QR codes, and important announcements
                  </p>
                  <Button className="w-full" data-testid="button-join-telegram">
                    <SiTelegram className="w-4 h-4 mr-2" />
                    Join Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-community-whatsapp">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-green-500/10 flex items-center justify-center mb-3">
                  <SiWhatsapp className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle>WhatsApp Community</CardTitle>
                <CardDescription>Direct support and room credentials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Members</span>
                    <Badge>6,200+</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Response Time</span>
                    <Badge variant="secondary">Under 5 min</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Get room credentials, payment verification, and 24/7 support directly on WhatsApp
                  </p>
                  <Button className="w-full" data-testid="button-join-whatsapp">
                    <SiWhatsapp className="w-4 h-4 mr-2" />
                    Join WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* Contact Methods & Social Media */}
        <SectionWrapper variant="muted" data-testid="section-contact-methods">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-methods-title">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Choose your preferred way to reach us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="hover-elevate" data-testid="card-contact-email">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">{CONTACT_INFO.email}</p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-contact-phone">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">{CONTACT_INFO.whatsapp}</p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-contact-location">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-chart-2/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-chart-2" />
                  </div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">{CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}</p>
                </CardContent>
              </Card>

              <Card className="hover-elevate" data-testid="card-contact-hours">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-chart-3/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-chart-3" />
                  </div>
                  <h3 className="font-semibold mb-1">Support Hours</h3>
                  <p className="text-sm text-muted-foreground">24/7 Available</p>
                </CardContent>
              </Card>
            </div>

            <Card data-testid="card-social-media">
              <CardHeader>
                <CardTitle className="text-center">Connect on Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="justify-start gap-2" data-testid="button-social-youtube" asChild>
                    <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">
                      <Youtube className="w-5 h-5 text-red-500" />
                      <span>YouTube</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2" data-testid="button-social-instagram" asChild>
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 text-pink-500" />
                      <span>Instagram</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2" data-testid="button-social-twitter" asChild>
                    <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5 text-blue-400" />
                      <span>Twitter</span>
                    </a>
                  </Button>
                  <Button variant="outline" className="justify-start gap-2" data-testid="button-social-facebook" asChild>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <span>Facebook</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>

        {/* FAQ Section */}
        <SectionWrapper data-testid="section-faq">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-faq-title">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Find quick answers to common questions
              </p>
            </div>
            
            <Accordion type="multiple" className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-border rounded-lg px-6 bg-card hover-elevate"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mt-2">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionWrapper>

        {/* Testimonials */}
        <SectionWrapper variant="muted" data-testid="section-testimonials">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
              What Our Players Say
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real feedback from our community members
            </p>
          </div>

          <ModernTestimonials testimonials={testimonials} />
        </SectionWrapper>

        {/* Google Maps */}
        <SectionWrapper data-testid="section-map">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-map-title">
              Our Location
            </h2>
            <p className="text-muted-foreground text-lg">
              Find us in the heart of Mumbai
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609921103!2d72.74109995709658!3d19.082177513513577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GameArena Location"
                data-testid="iframe-google-map"
              />
            </div>
          </Card>
        </SectionWrapper>

        {/* CTA Band for Urgent Support */}
        <SectionWrapper variant="muted">
          <CTABand
            title="Need Urgent Help?"
            description="Our support team is available 24/7 to assist you with any critical issues or questions."
            icon={Headphones}
            variant="primary"
            buttons={[
              { label: "WhatsApp Support", icon: MessageSquare, href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}` },
              { label: "Submit Ticket", icon: Ticket, href: "#contact-form", variant: "outline" },
            ]}
            data-testid="cta-urgent-support"
          />
        </SectionWrapper>
      </main>

      {/* Live Chat Widget */}
      {showLiveChat && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 right-6 z-50 w-80"
          data-testid="livechat-widget"
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <CardTitle className="text-lg">Live Support</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowLiveChat(false)}
                data-testid="button-close-livechat"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is online and ready to help you!
              </p>
              <div className="space-y-2">
                <Button className="w-full" size="sm" data-testid="button-livechat-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Average wait time: 2 minutes
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Floating Live Chat Button */}
      {!showLiveChat && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            size="lg"
            className="rounded-full w-14 h-14 shadow-lg"
            onClick={() => setShowLiveChat(true)}
            data-testid="button-open-livechat"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
