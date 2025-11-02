/**
 * Navigation Component
 * 
 * Main navigation bar for the BGMI and Free Fire Max tournament website.
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Desktop mega-menu showing all tournaments with details
 * - Global search functionality (Cmd/Ctrl + K)
 * - Dark/Light theme toggle
 * - Sticky header with scroll-based styling
 * - Smooth navigation between pages
 * 
 * The navigation adapts based on screen size and provides quick access to
 * all tournament pages and important links for both BGMI and Free Fire Max.
 */

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Menu, 
  X, 
  Trophy, 
  Sun, 
  Moon, 
  Search, 
  Home, 
  Users, 
  UserPlus, 
  Coins, 
  Mail,
  ChevronDown,
  Ticket
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { slideInRight, fadeSlideUp } from "@/lib/motion";

// Tournament menu items with metadata for navigation mega-menu
// Includes both BGMI and Free Fire Max tournaments
const tournaments = [
  // BGMI Tournaments
  {
    name: "BGMI Solo",
    path: "/solo",
    icon: Trophy,
    description: "Individual battle royale competition",
    entryFee: "₹20",
    slots: "100 Players",
    prize: "₹350",
    color: "text-chart-1",
    game: "BGMI",
  },
  {
    name: "BGMI Duo",
    path: "/duo",
    icon: UserPlus,
    description: "Partner up for duo domination",
    entryFee: "₹40",
    slots: "50 Teams",
    prize: "₹350",
    color: "text-chart-2",
    game: "BGMI",
  },
  {
    name: "BGMI Squad",
    path: "/squad",
    icon: Users,
    description: "4-player team championship",
    entryFee: "₹80",
    slots: "25 Squads",
    prize: "₹350",
    color: "text-chart-3",
    game: "BGMI",
  },
  // Free Fire Max Tournaments
  {
    name: "Free Fire Solo",
    path: "/freefire-solo",
    icon: Trophy,
    description: "Individual Free Fire battle royale",
    entryFee: "₹20",
    slots: "50 Players",
    prize: "₹200",
    color: "text-chart-1",
    game: "Free Fire",
  },
  {
    name: "Free Fire Duo",
    path: "/freefire-duo",
    icon: UserPlus,
    description: "Partner up for duo domination",
    entryFee: "₹40",
    slots: "24 Teams",
    prize: "₹200",
    color: "text-chart-2",
    game: "Free Fire",
  },
  {
    name: "Free Fire Squad",
    path: "/freefire-squad",
    icon: Users,
    description: "4-player team championship",
    entryFee: "₹80",
    slots: "12 Squads",
    prize: "₹200",
    color: "text-chart-3",
    game: "Free Fire",
  },
];

// Main navigation pages (shown in both desktop and mobile menus)
const pages = [
  { name: "Home", path: "/", icon: Home },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Navigation() {
  // Track current route for active link highlighting
  const [location, setLocation] = useLocation();
  
  // UI state management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  // Mobile hamburger menu toggle
  const [searchOpen, setSearchOpen] = useState(false);          // Command palette search dialog
  const [scrolled, setScrolled] = useState(false);              // Scroll state for header styling
  const [scrollProgress, setScrollProgress] = useState(0);      // Scroll progress for indicator bar
  
  // Theme management (dark/light mode)
  const { theme, setTheme } = useTheme();

  /**
   * Monitor scroll position to add shadow/backdrop blur to header
   * and calculate scroll progress for the progress indicator
   * Triggers visual change when user scrolls past 10px
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Calculate scroll progress percentage for progress indicator
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Set up keyboard shortcut for search (Cmd+K on Mac, Ctrl+K on Windows/Linux)
   * Provides quick access to global search functionality
   */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  /**
   * Centralized navigation handler
   * Updates route and closes all open menus/dialogs
   */
  const handleNavigation = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  /**
   * Toggle between dark and light themes
   */
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Main Navigation Bar with Glassmorphic Effect */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "glass-effect shadow-lg"
            : "bg-background/60 backdrop-blur-md border-b border-border/50"
        )}
      >
        {/* Scroll Progress Indicator */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary via-chart-2 to-chart-1 origin-left"
          style={{ width: `${scrollProgress}%` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          data-testid="scroll-progress-indicator"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-lg transition-all"
              data-testid="link-home"
            >
              <Trophy className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">GameArena</span>
            </button>

            {/* Desktop Navigation Menu with Active State Indicators */}
            <div className="hidden md:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavigation("/")}
                      className={cn(
                        "group relative inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover-elevate active-elevate-2 bg-transparent border-0",
                        location === "/" && "text-primary"
                      )}
                      data-testid="link-nav-home"
                    >
                      <Home className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                      <span>Home</span>
                      {/* Active State Underline Indicator */}
                      {location === "/" && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                          layoutId="activeNav"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className="group"
                      data-testid="button-tournaments-menu"
                    >
                      <Trophy className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                      <span>Tournaments</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px]" data-testid="mega-menu-tournaments">
                        <div className="grid gap-3">
                          {tournaments.map((tournament) => {
                            const Icon = tournament.icon;
                            return (
                              <Card
                                key={tournament.path}
                                onClick={() => handleNavigation(tournament.path)}
                                className="hover-elevate active-elevate-2 cursor-pointer transition-all group"
                                data-testid={`tournament-card-${tournament.name.toLowerCase()}`}
                              >
                                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                  {/* Icon with enhanced hover animation */}
                                  <motion.div 
                                    className={cn("w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", tournament.color)}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                  >
                                    <Icon className="w-5 h-5" />
                                  </motion.div>
                                  <div className="flex-1">
                                    <CardTitle className="text-base group-hover:text-primary transition-colors duration-300">
                                      {tournament.name} Tournament
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                      {tournament.description}
                                    </CardDescription>
                                  </div>
                                </CardHeader>
                                <CardContent>
                                  <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                      <Ticket className="w-4 h-4 text-muted-foreground" />
                                      <span className="font-medium">{tournament.entryFee}</span>
                                    </div>
                                    <Separator orientation="vertical" className="h-4" />
                                    <div className="flex items-center gap-1">
                                      <Users className="w-4 h-4 text-muted-foreground" />
                                      <span>{tournament.slots}</span>
                                    </div>
                                    <Separator orientation="vertical" className="h-4" />
                                    <div className="flex items-center gap-1">
                                      <Trophy className="w-4 h-4 text-muted-foreground" />
                                      <span className="text-primary font-semibold">{tournament.prize}</span>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            );
                          })}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavigation("/contact")}
                      className={cn(
                        "group relative inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover-elevate active-elevate-2 bg-transparent border-0",
                        location === "/contact" && "text-primary"
                      )}
                      data-testid="link-nav-contact"
                    >
                      <Mail className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                      <span>Contact</span>
                      {/* Active State Underline Indicator */}
                      {location === "/contact" && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                          layoutId="activeNav"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Separator orientation="vertical" className="h-6 mx-2" />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                data-testid="button-search"
              >
                <Search className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                data-testid="button-search-mobile"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Mobile Menu with Slide-in Animation */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="button-mobile-menu"
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-primary" />
                      GameArena
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Menu Content with Staggered Animation */}
                  <motion.div 
                    className="mt-8 space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.07,
                          delayChildren: 0.1
                        }
                      }
                    }}
                  >
                    <motion.div 
                      className="space-y-2"
                      variants={slideInRight}
                    >
                      {pages.map((page, index) => {
                        const Icon = page.icon;
                        return (
                          <motion.div
                            key={page.path}
                            variants={slideInRight}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Button
                              variant={location === page.path ? "secondary" : "ghost"}
                              className="w-full justify-start group"
                              onClick={() => handleNavigation(page.path)}
                              data-testid={`link-mobile-${page.name.toLowerCase()}`}
                            >
                              <Icon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                              {page.name}
                            </Button>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    <Separator />

                    <motion.div 
                      className="space-y-2"
                      variants={slideInRight}
                    >
                      <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                        Tournaments
                      </div>
                      {tournaments.map((tournament, index) => {
                        const Icon = tournament.icon;
                        return (
                          <motion.div
                            key={tournament.path}
                            variants={slideInRight}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Button
                              variant={location === tournament.path ? "secondary" : "ghost"}
                              className="w-full justify-start group hover-elevate"
                              onClick={() => handleNavigation(tournament.path)}
                              data-testid={`link-mobile-${tournament.name.toLowerCase()}`}
                            >
                              <Icon className={cn("w-4 h-4 mr-2 transition-transform group-hover:scale-110", tournament.color)} />
                              <div className="flex-1 text-left">
                                <div className="font-medium">{tournament.name}</div>
                                <div className="text-xs text-muted-foreground">
                                  {tournament.entryFee} • {tournament.slots}
                                </div>
                              </div>
                            </Button>
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    <Separator />

                    {/* Theme Toggle with Slide-in Animation */}
                    <motion.div 
                      className="flex items-center justify-between px-3 py-2"
                      variants={slideInRight}
                    >
                      <span className="text-sm font-medium">Theme</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleTheme}
                        data-testid="button-theme-toggle-mobile"
                      >
                        {theme === "dark" ? (
                          <>
                            <Sun className="w-4 h-4 mr-2" />
                            Light
                          </>
                        ) : (
                          <>
                            <Moon className="w-4 h-4 mr-2" />
                            Dark
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search tournaments, pages..." data-testid="input-search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <CommandItem
                  key={page.path}
                  onSelect={() => handleNavigation(page.path)}
                  data-testid={`search-result-${page.name.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <span>{page.name}</span>
                </CommandItem>
              );
            })}
          </CommandGroup>
          <CommandGroup heading="Tournaments">
            {tournaments.map((tournament) => {
              const Icon = tournament.icon;
              return (
                <CommandItem
                  key={tournament.path}
                  onSelect={() => handleNavigation(tournament.path)}
                  data-testid={`search-result-${tournament.name.toLowerCase()}`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <div className="flex-1">
                    <div className="font-medium">{tournament.name} Tournament</div>
                    <div className="text-xs text-muted-foreground">
                      {tournament.description}
                    </div>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {tournament.entryFee}
                  </Badge>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
