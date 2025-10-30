import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
} from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/../../shared/config";

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
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary" data-testid="badge-contact">
              <MessageCircle className="w-3 h-3 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="heading-contact">
              Contact GameArena
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-description">
              Have questions about tournaments, payments, or need support? We're here to help you 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover-elevate" data-testid="card-whatsapp">
              <CardHeader>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <SiWhatsapp className="w-6 h-6 text-green-500" />
                </div>
                <CardTitle>WhatsApp</CardTitle>
                <CardDescription>24/7 Instant Support</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                  data-testid="link-whatsapp"
                >
                  {CONTACT_INFO.whatsapp}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  Fastest response for urgent queries, payment issues, and tournament support
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-phone">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call Us Anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-2 text-primary hover:underline"
                  data-testid="link-phone"
                >
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  Direct phone support for immediate assistance and queries
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-email">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription>Detailed Inquiries</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 text-primary hover:underline break-all"
                  data-testid="link-email"
                >
                  {CONTACT_INFO.email}
                </a>
                <p className="text-sm text-muted-foreground mt-3">
                  For detailed queries, documentation, and official correspondence
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
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
                              <Input
                                placeholder="Your name"
                                {...field}
                                data-testid="input-name"
                              />
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
                                <Input
                                  type="email"
                                  placeholder="your@email.com"
                                  {...field}
                                  data-testid="input-email"
                                />
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
                                <Input
                                  placeholder="+91 XXXXX XXXXX"
                                  {...field}
                                  data-testid="input-phone"
                                />
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
                                <SelectTrigger data-testid="select-category">
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
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
                              <Input
                                placeholder="Brief subject of your message"
                                {...field}
                                data-testid="input-subject"
                              />
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
                              <Textarea
                                placeholder="Describe your query in detail..."
                                rows={5}
                                {...field}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                        data-testid="button-submit"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="heading-faq">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-4"
                    data-testid={`faq-item-${index}`}
                  >
                    <AccordionTrigger className="hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <Card className="mb-16" data-testid="card-social">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Connect With Us</CardTitle>
              <CardDescription>
                Follow us on social media for updates, announcements, and community engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  size="lg"
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
                </Button>

                <Button
                  variant="outline"
                  size="lg"
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
                </Button>

                <Button
                  variant="outline"
                  size="lg"
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
                </Button>

                <Button
                  variant="outline"
                  size="lg"
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
                </Button>
              </div>
            </CardContent>
          </Card>

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
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
