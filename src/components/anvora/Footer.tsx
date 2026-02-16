import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="font-display text-xl font-bold mb-4">
          <span className="text-gradient-gold">Anvora</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Service-first digital solutions for students, startups, and small businesses.
        </p>
        <div className="flex items-center justify-center gap-6 mb-6 text-sm">
          <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">Community</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
        </div>
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-3 h-3 text-gold" /> by Anvora © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
