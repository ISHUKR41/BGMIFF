import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import contactImage from "@assets/stock_images/customer_support_con_c758fde6.jpg";

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
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        <section className="bg-gradient-to-b from-background to-card/50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-contact-title">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions? We're here to help. Reach out to us through any of the channels below.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form and we'll respond within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          data-testid="input-email"
                        />
                      </div>
                      <div>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="WhatsApp Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          data-testid="input-phone"
                        />
                      </div>
                      <div>
                        <Input
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          data-testid="input-subject"
                        />
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          data-testid="textarea-message"
                        />
                      </div>
                      <Button type="submit" className="w-full" size="lg" data-testid="button-submit-contact">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Connect on Social Media</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start" data-testid="button-youtube">
                      <Youtube className="w-5 h-5 mr-2 text-red-500" />
                      YouTube
                    </Button>
                    <Button variant="outline" className="justify-start" data-testid="button-instagram">
                      <Instagram className="w-5 h-5 mr-2 text-pink-500" />
                      Instagram
                    </Button>
                    <Button variant="outline" className="justify-start" data-testid="button-twitter">
                      <Twitter className="w-5 h-5 mr-2 text-blue-400" />
                      Twitter
                    </Button>
                    <Button variant="outline" className="justify-start" data-testid="button-facebook">
                      <Facebook className="w-5 h-5 mr-2 text-blue-600" />
                      Facebook
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video">
                    <img
                      src={contactImage}
                      alt="Customer Support"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">support@gamearena.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-sm text-muted-foreground">Mumbai, Maharashtra</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Working Hours</p>
                        <p className="text-sm text-muted-foreground">24/7 Support</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">WhatsApp Community</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Join our WhatsApp group to stay updated with tournament schedules, payment QR codes, and announcements.
                    </p>
                    <Button variant="outline" className="w-full" data-testid="button-join-whatsapp">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Join WhatsApp Group
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-center mb-8">
                Find quick answers to common questions
              </p>
              
              <Accordion type="multiple" className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
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
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
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
                  ></iframe>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
