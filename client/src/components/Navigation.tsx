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

const tournaments = [
  {
    name: "Solo",
    path: "/solo",
    icon: Trophy,
    description: "Individual battle royale competition",
    entryFee: "₹20",
    slots: "100 Players",
    prize: "₹350",
    color: "text-chart-1",
  },
  {
    name: "Duo",
    path: "/duo",
    icon: UserPlus,
    description: "Partner up for duo domination",
    entryFee: "₹40",
    slots: "50 Teams",
    prize: "₹350",
    color: "text-chart-2",
  },
  {
    name: "Squad",
    path: "/squad",
    icon: Users,
    description: "4-player team championship",
    entryFee: "₹80",
    slots: "25 Squads",
    prize: "₹350",
    color: "text-chart-3",
  },
];

const pages = [
  { name: "Home", path: "/", icon: Home },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleNavigation = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-background/80 backdrop-blur-lg border-b border-transparent"
        )}
      >
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

            <div className="hidden md:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/">
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate active-elevate-2",
                          location === "/" && "bg-secondary"
                        )}
                        data-testid="link-nav-home"
                      >
                        <Home className="w-4 h-4 mr-2" />
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger data-testid="button-tournaments-menu">
                      <Trophy className="w-4 h-4 mr-2" />
                      Tournaments
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[500px] lg:w-[600px]" data-testid="mega-menu-tournaments">
                        <div className="grid gap-3">
                          {tournaments.map((tournament) => {
                            const Icon = tournament.icon;
                            return (
                              <Link
                                key={tournament.path}
                                href={tournament.path}
                              >
                                <Card
                                  className="hover-elevate active-elevate-2 cursor-pointer transition-all group"
                                  data-testid={`tournament-card-${tournament.name.toLowerCase()}`}
                                >
                                  <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                                    <div className={cn("w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", tournament.color)}>
                                      <Icon className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                      <CardTitle className="text-base group-hover:text-primary transition-colors">
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
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact">
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover-elevate active-elevate-2",
                          location === "/contact" && "bg-secondary"
                        )}
                        data-testid="link-nav-contact"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </NavigationMenuLink>
                    </Link>
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

                  <div className="mt-8 space-y-4">
                    <div className="space-y-2">
                      {pages.map((page) => {
                        const Icon = page.icon;
                        return (
                          <Button
                            key={page.path}
                            variant={location === page.path ? "secondary" : "ghost"}
                            className="w-full justify-start"
                            onClick={() => handleNavigation(page.path)}
                            data-testid={`link-mobile-${page.name.toLowerCase()}`}
                          >
                            <Icon className="w-4 h-4 mr-2" />
                            {page.name}
                          </Button>
                        );
                      })}
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                        Tournaments
                      </div>
                      {tournaments.map((tournament) => {
                        const Icon = tournament.icon;
                        return (
                          <motion.div
                            key={tournament.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Button
                              variant={location === tournament.path ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => handleNavigation(tournament.path)}
                              data-testid={`link-mobile-${tournament.name.toLowerCase()}`}
                            >
                              <Icon className={cn("w-4 h-4 mr-2", tournament.color)} />
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
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between px-3 py-2">
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
                    </div>
                  </div>
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
