/**
 * Contact Page Component
 * 
 * Comprehensive contact page for the BGMI tournament platform.
 * 
 * Key Features:
 * 1. Multiple Contact Methods:
 *    - WhatsApp (24/7 instant support)
 *    - Phone (direct calling)
 *    - Email (detailed inquiries)
 * 
 * 2. Google Maps Integration:
 *    - Embedded map showing IIT Patna location
 *    - Interactive map for directions
 * 
 * 3. Contact Form:
 *    - Comprehensive form with validation
 *    - Categories: technical, payment, tournament, general, account
 *    - Real-time validation using Zod schema
 *    - Success/error toast notifications
 * 
 * 4. FAQ Section:
 *    - Accordion-style expandable questions
 *    - Covers registration, payments, prizes, rules
 * 
 * 5. Social Media Links:
 *    - Instagram, Facebook, Twitter, LinkedIn
 *    - External links with proper security attributes
 * 
 * 6. Support Hours Display:
 *    - Clear indication of availability for each contact method
 */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingOrbs from "@/components/FloatingOrbs";
import BlurFade from "@/components/BlurFade";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import EnhancedMagneticButton from "@/components/EnhancedMagneticButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Headphones,
  CheckCircle2,
  Globe,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Loader2,
  Info,
  HelpCircle,
  Shield,
  Lock,
  Zap,
  Award,
} from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/../../shared/config";
import { fadeSlideUp, staggerContainer, staggerItem } from "@/lib/motion";

/**
 * Contact form validation schema using Zod
 * Ensures all fields meet minimum requirements before submission
 */
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  category: z.enum(["technical", "payment", "tournament", "general", "account"], {
    required_error: "Please select a category",
  }),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Frequently Asked Questions data array
// Provides instant answers to common player queries
const faqs = [
  {
    question: "How do I register for a tournament?",
    answer: "Select your desired tournament (Solo, Duo, or Squad), complete the payment using our official payment method, and fill out the registration form with accurate details including your payment screenshot and transaction ID.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept payments via UPI. After payment, you must upload a clear screenshot and provide the transaction ID for verification.",
  },
  {
    question: "When will I receive my prize money?",
    answer: "Prize money is distributed within 24-48 hours after the tournament concludes. Winners will be contacted via WhatsApp at +917541024846.",
  },
  {
    question: "Can I change my team members after registration?",
    answer: "No, team members cannot be changed after registration is complete. Please ensure all player details are accurate before submitting the registration form.",
  },
  {
    question: "What happens if my payment is not verified?",
    answer: "If payment verification fails, your slot will be automatically canceled. Ensure you provide proper payment proof and transaction ID.",
  },
  {
    question: "Will the tournament be streamed on YouTube?",
    answer: "We plan to stream tournaments on our official YouTube channel based on majority voting. You can vote for streaming preference in the registration form.",
  },
  {
    question: "How quickly will I get a response to my query?",
    answer: "WhatsApp support is available 24/7 with response times typically under 30 minutes. Email inquiries are answered within 24 hours during business days. For urgent issues, WhatsApp is the fastest contact method.",
  },
  {
    question: "What should I do if I have a technical issue during the tournament?",
    answer: "Contact our support team immediately via WhatsApp at +917541024846. Have your tournament ID and registered BGMI ID ready. For game crashes or connection issues, try to rejoin quickly as matches won't be paused for individual technical problems.",
  },
  {
    question: "Can I get a refund if I can't participate?",
    answer: "No refunds are provided after registration is complete and payment is verified. Make sure you're fully available before registering. In case of tournament cancellation by GameArena, full refunds will be issued to all participants.",
  },
  {
    question: "How do I know if my slot is confirmed?",
    answer: "You'll receive a WhatsApp confirmation message within 2-6 hours after payment verification. The message will include your slot number, tournament details, and joining instructions. Save this message as you'll need it on tournament day.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize contact form with validation schema
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: undefined,
      message: "",
    },
  });

  /**
   * Handle contact form submission
   * Simulates API call with 2-second delay
   * Shows success toast and resets form
   * In production, this would send data to backend API
   */
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Show success notification
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form and loading state
    form.reset();
    setIsSubmitting(false);
  };

  // Scroll-triggered animation hooks for different sections
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [trustRef, trustInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [supportRef, supportInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Header with FloatingOrbs and BlurFade Animation */}
      <div className="relative pt-24 pb-12 overflow-hidden">
        {/* 3 FloatingOrbs in hero/header section */}
        <FloatingOrbs count={3} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <BlurFade blur={10} direction="down" delay={0}>
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary" data-testid="badge-contact">
                <MessageCircle className="w-3 h-3 mr-1" />
                Get in Touch
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="heading-contact">
                Contact GameArena
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-description">
                Have questions about tournaments, payments, or need support? We're here to help you 24/7.
              </p>
            </div>
          </BlurFade>

          {/* Trust Panels - Company Credibility Indicators */}
          <motion.div
            ref={trustRef}
            initial="hidden"
            animate={trustInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16"
          >
            <motion.div variants={staggerItem}>
              <Card className="hover-elevate text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Secure Payments</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">SSL Encrypted</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="hover-elevate text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Verified Platform</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Trusted by 5000+</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="hover-elevate text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Fast Response</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Under 30 mins</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="hover-elevate text-center">
                <CardContent className="pt-6 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Data Protected</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Privacy First</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Methods Section with BentoGrid and FloatingOrbs */}
          <div className="relative mb-16">
            {/* 2 FloatingOrbs in contact methods section */}
            <FloatingOrbs count={2} />
            
            <BentoGrid columns={3} className="relative z-10">
              {/* WhatsApp Card - Primary contact method spanning 2 columns */}
              <BentoCard colSpan={2} delay={0} data-testid="card-whatsapp">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <SiWhatsapp className="w-7 h-7 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">WhatsApp</CardTitle>
                    <CardDescription className="text-base">24/7 Instant Support - Our Primary Contact Method</CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    <Clock className="w-3 h-3 mr-1" />
                    Available Now
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline font-medium text-lg"
                    data-testid="link-whatsapp"
                  >
                    {CONTACT_INFO.whatsapp}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Fastest response for urgent queries, payment issues, and tournament support. Get replies within 30 minutes!
                  </p>
                  <EnhancedMagneticButton
                    magneticStrength={0.4}
                    enableGlow={true}
                    fullWidth
                    size="lg"
                    asChild
                  >
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </EnhancedMagneticButton>
                </CardContent>
              </BentoCard>

              {/* Phone Card */}
              <BentoCard delay={0.1} data-testid="card-phone">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Phone</CardTitle>
                    <CardDescription className="text-base">Call Us Anytime</CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    <Clock className="w-3 h-3 mr-1" />
                    9 AM - 9 PM
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="flex items-center gap-2 text-primary hover:underline font-medium text-lg"
                    data-testid="link-phone"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Direct phone support for immediate assistance
                  </p>
                  <EnhancedMagneticButton
                    magneticStrength={0.3}
                    fullWidth
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <a href={`tel:${CONTACT_INFO.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </EnhancedMagneticButton>
                </CardContent>
              </BentoCard>

              {/* Email Card */}
              <BentoCard delay={0.2} data-testid="card-email">
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">Email</CardTitle>
                    <CardDescription className="text-base">Detailed Inquiries</CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    <Clock className="w-3 h-3 mr-1" />
                    24h Response
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-2 text-primary hover:underline font-medium text-sm break-all"
                    data-testid="link-email"
                  >
                    {CONTACT_INFO.email}
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </a>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For detailed queries and documentation
                  </p>
                  <EnhancedMagneticButton
                    magneticStrength={0.3}
                    fullWidth
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <a href={`mailto:${CONTACT_INFO.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </EnhancedMagneticButton>
                </CardContent>
              </BentoCard>
            </BentoGrid>
          </div>

          <BlurFade blur={6} direction="up" delay={0.1}>
            <Card className="mb-16" data-testid="card-map">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Our Location</CardTitle>
                    <CardDescription className="text-base">
                      IIT Patna Campus, Patna, Bihar, 801106
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4856668658706!2d84.84891261501744!3d25.536167583755677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2e321c!2sIndian%20Institute%20of%20Technology%20Patna!5e0!3m2!1sen!2sin!4v1635421234567!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GameArena Location - IIT Patna Campus"
                    data-testid="iframe-map"
                  />
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          {/* Contact Form and FAQ Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form with BlurFade and FloatingOrbs */}
            <div className="relative">
              {/* 2 FloatingOrbs in contact form section */}
              <FloatingOrbs count={2} />
              
              <BlurFade blur={8} direction="up" delay={0.2}>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6" data-testid="heading-send-message">
                    Send Us a Message
                  </h2>
                  <Card data-testid="card-contact-form">
                    <CardContent className="pt-6">
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <motion.div
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Input
                                      placeholder="Your name"
                                      {...field}
                                      data-testid="input-name"
                                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                    />
                                  </motion.div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid sm:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <motion.div
                                      whileFocus={{ scale: 1.01 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <Input
                                        type="email"
                                        placeholder="your@email.com"
                                        {...field}
                                        data-testid="input-email"
                                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                      />
                                    </motion.div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone</FormLabel>
                                  <FormControl>
                                    <motion.div
                                      whileFocus={{ scale: 1.01 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <Input
                                        placeholder="+91 XXXXX XXXXX"
                                        {...field}
                                        data-testid="input-phone"
                                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                      />
                                    </motion.div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <motion.div
                                      whileFocus={{ scale: 1.01 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <SelectTrigger 
                                        data-testid="select-category"
                                        className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                      >
                                        <SelectValue placeholder="Select a category" />
                                      </SelectTrigger>
                                    </motion.div>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="tournament">Tournament Registration</SelectItem>
                                    <SelectItem value="payment">Payment Issues</SelectItem>
                                    <SelectItem value="technical">Technical Support</SelectItem>
                                    <SelectItem value="account">Account Issues</SelectItem>
                                    <SelectItem value="general">General Inquiry</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                  <motion.div
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Input
                                      placeholder="Brief subject of your message"
                                      {...field}
                                      data-testid="input-subject"
                                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                    />
                                  </motion.div>
                                </FormControl>
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
                                  <motion.div
                                    whileFocus={{ scale: 1.01 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Textarea
                                      placeholder="Describe your query in detail..."
                                      rows={5}
                                      {...field}
                                      data-testid="textarea-message"
                                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                                    />
                                  </motion.div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <EnhancedMagneticButton
                            magneticStrength={0.4}
                            enableGlow={true}
                            fullWidth
                            size="lg"
                            onClick={form.handleSubmit(onSubmit)}
                            data-testid="button-submit"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Sending Message...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </EnhancedMagneticButton>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </div>
              </BlurFade>
            </div>

            {/* FAQ Section with BlurFade */}
            <BlurFade blur={8} direction="up" delay={0.3}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold" data-testid="heading-faq">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-4 hover-elevate transition-all duration-300"
                    data-testid={`faq-item-${index}`}
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Info className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-left">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2">
                      <div className="pl-6">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </BlurFade>
          </div>

          <BlurFade blur={6} direction="up" delay={0.2}>
            <Card className="mb-16" data-testid="card-social">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Connect With Us</CardTitle>
                <CardDescription>
                  Follow us on social media for updates, announcements, and community engagement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-4">
                  <EnhancedMagneticButton
                    variant="outline"
                    size="lg"
                    magneticStrength={0.3}
                    asChild
                    data-testid="button-instagram"
                  >
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <SiInstagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </EnhancedMagneticButton>

                  <EnhancedMagneticButton
                    variant="outline"
                    size="lg"
                    magneticStrength={0.3}
                    asChild
                    data-testid="button-facebook"
                  >
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <SiFacebook className="w-5 h-5" />
                      Facebook
                    </a>
                  </EnhancedMagneticButton>

                  <EnhancedMagneticButton
                    variant="outline"
                    size="lg"
                    magneticStrength={0.3}
                    asChild
                    data-testid="button-twitter"
                  >
                    <a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <SiX className="w-5 h-5" />
                      Twitter/X
                    </a>
                  </EnhancedMagneticButton>

                  <EnhancedMagneticButton
                    variant="outline"
                    size="lg"
                    magneticStrength={0.3}
                    asChild
                    data-testid="button-linkedin"
                  >
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      <SiLinkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </EnhancedMagneticButton>
                </div>
              </CardContent>
            </Card>
          </BlurFade>

          <BlurFade blur={6} direction="up" delay={0.25}>
            <Card className="bg-primary/5 border-primary/20" data-testid="card-support-hours">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">WhatsApp Support</h3>
                    <p className="text-sm text-muted-foreground">24/7 Available</p>
                  </div>
                  <div>
                    <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-sm text-muted-foreground">Response within 4-6 hours</p>
                  </div>
                  <div>
                    <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">Mon-Sun: 9 AM - 11 PM IST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>

      <Footer />
    </div>
  );
}
