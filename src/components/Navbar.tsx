import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="text-xl font-playfair font-bold tracking-tight text-foreground">
          Try Look<span className="text-primary">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#for-brands" className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors">
            For Brands
          </a>
          <a href="#faq" className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
          <motion.a
            href="/demo"
            className="text-sm font-inter font-semibold bg-primary text-primary-foreground rounded-full px-4 py-1.5 flex items-center gap-1.5"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 hsl(28 31% 61% / 0)",
                "0 0 12px 2px hsl(28 31% 61% / 0.3)",
                "0 0 0 0 hsl(28 31% 61% / 0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
            Demo
          </motion.a>
        </div>

        <Button asChild variant="cta" className="rounded-full px-6">
          <a href="#contact">Join the waitlist</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;