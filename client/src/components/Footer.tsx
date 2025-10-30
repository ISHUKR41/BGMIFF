import { Trophy } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">GameArena</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional BGMI tournament platform with transparent payment verification and exciting prizes.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tournaments</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>BGMI Solo</li>
              <li>BGMI Duo</li>
              <li>BGMI Squad</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Payment Help</li>
              <li>Registration Guide</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GameArena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
