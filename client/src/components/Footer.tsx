import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
  SiTwitter,
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

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function Footer() {
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    console.log("Newsletter subscription:", data);
    setSubscribeSuccess(true);
    form.reset();
    setTimeout(() => setSubscribeSuccess(false), 5000);
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 pb-12 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2" data-testid="text-newsletter-title">
                Stay Updated
              </h3>
              <p className="text-sm text-muted-foreground" data-testid="text-newsletter-description">
                Subscribe to our newsletter for tournament updates, exclusive offers, and gaming tips.
              </p>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            {...field}
                            data-testid="input-newsletter-email"
                            className="h-10"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="h-10"
                    data-testid="button-subscribe-newsletter"
                  >
                    Subscribe
                  </Button>
                </form>
              </Form>
              {subscribeSuccess && (
                <p className="text-sm text-primary mt-2 flex items-center gap-2" data-testid="text-subscribe-success">
                  <CheckCircle2 className="w-4 h-4" />
                  Successfully subscribed!
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-2" data-testid="text-privacy-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-primary" data-testid="icon-footer-logo" />
              <span className="text-xl font-bold" data-testid="text-company-name">GameArena</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-company-description">
              Professional BGMI tournament platform with transparent payment verification and exciting prizes.
            </p>
            
            {/* Company Details */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-company-address">
                  123 Gaming Street,<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:support@gamearena.com" className="hover:text-foreground transition-colors" data-testid="link-company-email">
                  support@gamearena.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-foreground transition-colors" data-testid="link-company-phone">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span data-testid="text-business-hours">
                  Mon-Sat: 10AM-8PM IST
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

        {/* Social Media Links */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-center mb-4" data-testid="heading-social-media">
            Follow Us
          </h4>
          <div className="flex justify-center gap-4">
            <a
              href="https://youtube.com/@gamearena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-social-youtube"
              aria-label="YouTube"
            >
              <SiYoutube className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/gamearena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-social-instagram"
              aria-label="Instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/gamearena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-social-twitter"
              aria-label="Twitter"
            >
              <SiTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com/gamearena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-social-facebook"
              aria-label="Facebook"
            >
              <SiFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://discord.gg/gamearena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-social-discord"
              aria-label="Discord"
            >
              <SiDiscord className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/gamearena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-social-telegram"
              aria-label="Telegram"
            >
              <SiTelegram className="w-6 h-6" />
            </a>
          </div>
        </div>

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
              &copy; {new Date().getFullYear()} GameArena. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
