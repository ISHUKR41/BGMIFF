/**
 * Footer Component
 * 
 * Comprehensive footer for the BGMI tournament website.
 * Features:
 * - Newsletter subscription form with email validation
 * - Company information and contact details
 * - Quick links to all tournament pages
 * - Support and resource links
 * - Social media integration (YouTube, Instagram, Twitter, Facebook, Discord, Telegram)
 * - Trust indicators (player stats, ratings, security badges)
 * - Payment method logos
 * - Legal links (Terms, Privacy, Cookies, Disclaimer)
 * 
 * This footer provides comprehensive site navigation and builds user trust
 * by showcasing platform statistics and security credentials.
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CONTACT_INFO, SOCIAL_LINKS, COMPANY_INFO } from "@/../../shared/config";
import {
  Trophy,
  User,
  Users,
  UsersRound,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  CheckCircle2,
  HeadphonesIcon,
  RotateCcw,
  Award,
  Star,
  CreditCard,
} from "lucide-react";
import {
  SiYoutube,
  SiInstagram,
  SiX,
  SiFacebook,
  SiDiscord,
  SiTelegram,
  SiGooglepay,
  SiPhonepe,
  SiPaytm,
  SiVisa,
  SiMastercard,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { fadeSlideUp, staggerContainer, staggerItem } from "@/lib/motion";

// Newsletter form validation schema - requires valid email format
const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function Footer() {
  // Track newsletter subscription success state for user feedback
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  // Initialize form with validation
  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  /**
   * Handle newsletter subscription form submission
   * Shows success message for 5 seconds, then resets form
   * In production, this would send data to a backend API
   */
  const onSubmit = async (data: NewsletterFormData) => {
    console.log("Newsletter subscription:", data);
    setSubscribeSuccess(true);
    form.reset();
    // Auto-hide success message after 5 seconds
    setTimeout(() => setSubscribeSuccess(false), 5000);
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section with Enhanced Visual Hierarchy and Fade-in Animations */}
        <motion.div 
          className="mb-16 pb-16 border-b border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeSlideUp}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeSlideUp}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" data-testid="text-newsletter-title">
                Stay Updated
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-newsletter-description">
                Subscribe to our newsletter for tournament updates, exclusive offers, and gaming tips delivered directly to your inbox.
              </p>
            </motion.div>
            <motion.div
              variants={fadeSlideUp}
              transition={{ delay: 0.2 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Enter your email address"
                            {...field}
                            data-testid="input-newsletter-email"
                            className="h-12 px-4 text-base"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 px-8"
                    data-testid="button-subscribe-newsletter"
                  >
                    Subscribe
                  </Button>
                </form>
              </Form>
              {subscribeSuccess && (
                <motion.p 
                  className="text-sm text-primary mt-3 flex items-center gap-2" 
                  data-testid="text-subscribe-success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Successfully subscribed!
                </motion.p>
              )}
              <p className="text-sm text-muted-foreground mt-3" data-testid="text-privacy-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-primary" data-testid="icon-footer-logo" />
              <span className="text-xl font-bold" data-testid="text-company-name">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-company-description">
              {COMPANY_INFO.description}
            </p>
            
            {/* Company Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-company-address">
                  {CONTACT_INFO.address.street},<br />
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state} {CONTACT_INFO.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-foreground transition-colors" data-testid="link-company-email">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-foreground transition-colors" data-testid="link-company-phone">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-business-hours">
                  {CONTACT_INFO.businessHours}
                </span>
              </div>
            </div>
          </div>

          {/* Tournaments */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-tournaments">Tournaments</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/solo" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2" data-testid="link-tournament-solo">
                  <User className="w-4 h-4" />
                  Solo Tournaments
                </a>
              </li>
              <li>
                <a href="/duo" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2" data-testid="link-tournament-duo">
                  <Users className="w-4 h-4" />
                  Duo Tournaments
                </a>
              </li>
              <li>
                <a href="/squad" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2" data-testid="link-tournament-squad">
                  <UsersRound className="w-4 h-4" />
                  Squad Tournaments
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-company">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-foreground transition-colors" data-testid="link-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors" data-testid="link-contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-foreground transition-colors" data-testid="link-careers">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-foreground transition-colors" data-testid="link-blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-support">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/help" className="hover:text-foreground transition-colors" data-testid="link-help-center">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-foreground transition-colors" data-testid="link-faqs">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-foreground transition-colors" data-testid="link-terms">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="heading-resources">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/guides" className="hover:text-foreground transition-colors" data-testid="link-guides">
                  Gaming Guides
                </a>
              </li>
              <li>
                <a href="/tutorials" className="hover:text-foreground transition-colors" data-testid="link-tutorials">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/api-docs" className="hover:text-foreground transition-colors" data-testid="link-api-docs">
                  API Documentation
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-foreground transition-colors" data-testid="link-community">
                  Community Forum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Social Proof & Trust Indicators */}
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-center" data-testid="heading-social-proof">
            Trusted by Gamers Across India
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center" data-testid="stat-players">
              <div className="text-2xl font-bold text-primary">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Players</div>
            </div>
            <div className="text-center" data-testid="stat-tournaments">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Tournaments Hosted</div>
            </div>
            <div className="text-center" data-testid="stat-prizes">
              <div className="text-2xl font-bold text-primary">₹5L+</div>
              <div className="text-sm text-muted-foreground">Prizes Distributed</div>
            </div>
            <div className="text-center" data-testid="stat-rating">
              <div className="flex justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">5-Star Rated</div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="outline" className="gap-2" data-testid="badge-ssl-secure">
              <Shield className="w-4 h-4" />
              SSL Secure
            </Badge>
            <Badge variant="outline" className="gap-2" data-testid="badge-verified">
              <CheckCircle2 className="w-4 h-4" />
              Verified Platform
            </Badge>
            <Badge variant="outline" className="gap-2" data-testid="badge-support">
              <HeadphonesIcon className="w-4 h-4" />
              24/7 Support
            </Badge>
            <Badge variant="outline" className="gap-2" data-testid="badge-moneyback">
              <RotateCcw className="w-4 h-4" />
              Money-back Guarantee
            </Badge>
            <Badge variant="outline" className="gap-2" data-testid="badge-fairplay">
              <Award className="w-4 h-4" />
              Fair Play Certified
            </Badge>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-sm font-semibold text-center mb-3 text-muted-foreground" data-testid="heading-payment-methods">
              Accepted Payment Methods
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-2 text-muted-foreground" data-testid="payment-upi">
                <CreditCard className="w-5 h-5" />
                <span className="text-sm">UPI</span>
              </div>
              <SiGooglepay className="w-8 h-8 text-muted-foreground" data-testid="payment-googlepay" />
              <SiPhonepe className="w-8 h-8 text-muted-foreground" data-testid="payment-phonepe" />
              <SiPaytm className="w-8 h-8 text-muted-foreground" data-testid="payment-paytm" />
              <SiVisa className="w-8 h-8 text-muted-foreground" data-testid="payment-visa" />
              <SiMastercard className="w-8 h-8 text-muted-foreground" data-testid="payment-mastercard" />
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Social Media Links with Hover Glow Effects */}
        <motion.div 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
        >
          <motion.h4 
            className="text-sm font-semibold text-center mb-6" 
            data-testid="heading-social-media"
            variants={staggerItem}
          >
            Follow Us
          </motion.h4>
          <motion.div 
            className="flex justify-center gap-6"
            variants={staggerContainer}
          >
            {/* YouTube Link with Glow Effect */}
            <motion.a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-on-hover text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg border border-transparent"
              data-testid="link-social-youtube"
              aria-label="YouTube"
              variants={staggerItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiYoutube className="w-7 h-7" />
            </motion.a>
            {/* Instagram Link with Glow Effect */}
            <motion.a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-on-hover text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg border border-transparent"
              data-testid="link-social-instagram"
              aria-label="Instagram"
              variants={staggerItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiInstagram className="w-7 h-7" />
            </motion.a>
            {/* Twitter/X Link with Glow Effect */}
            <motion.a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-on-hover text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg border border-transparent"
              data-testid="link-social-twitter"
              aria-label="Twitter"
              variants={staggerItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiX className="w-7 h-7" />
            </motion.a>
            {/* Facebook Link with Glow Effect */}
            <motion.a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-on-hover text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg border border-transparent"
              data-testid="link-social-facebook"
              aria-label="Facebook"
              variants={staggerItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiFacebook className="w-7 h-7" />
            </motion.a>
            {/* Discord Link with Glow Effect */}
            <motion.a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-on-hover text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg border border-transparent"
              data-testid="link-social-discord"
              aria-label="Discord"
              variants={staggerItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiDiscord className="w-7 h-7" />
            </motion.a>
            {/* Telegram Link with Glow Effect */}
            <motion.a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-on-hover text-muted-foreground hover:text-primary transition-all duration-300 p-3 rounded-lg border border-transparent"
              data-testid="link-social-telegram"
              aria-label="Telegram"
              variants={staggerItem}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiTelegram className="w-7 h-7" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/terms" className="hover:text-foreground transition-colors" data-testid="link-legal-terms">
                Terms & Conditions
              </a>
              <a href="/privacy" className="hover:text-foreground transition-colors" data-testid="link-legal-privacy">
                Privacy Policy
              </a>
              <a href="/cookies" className="hover:text-foreground transition-colors" data-testid="link-legal-cookies">
                Cookie Policy
              </a>
              <a href="/disclaimer" className="hover:text-foreground transition-colors" data-testid="link-legal-disclaimer">
                Disclaimer
              </a>
            </div>
            <p className="text-center" data-testid="text-copyright">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
