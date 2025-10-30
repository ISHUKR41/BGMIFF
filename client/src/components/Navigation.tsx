import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Trophy } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/solo", label: "Solo" },
    { path: "/duo", label: "Duo" },
    { path: "/squad", label: "Squad" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavigation = (path: string) => {
    setLocation(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-lg"
            data-testid="link-home"
          >
            <Trophy className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold">GameArena</span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={location === link.path ? "secondary" : "ghost"}
                size="sm"
                onClick={() => handleNavigation(link.path)}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={location === link.path ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleNavigation(link.path)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
