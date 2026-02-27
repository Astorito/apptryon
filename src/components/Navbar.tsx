import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import widgetIcon from "@/assets/Widget.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-3">
      <nav className="flex items-center justify-between h-14 px-5 rounded-2xl bg-background/70 backdrop-blur-xl border border-border/40 shadow-sm">

        {/* Logo + Widget icon */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-playfair font-bold tracking-tight text-foreground">
            Try Look<span className="text-primary">.</span>
          </span>
          <img
            src={widgetIcon}
            alt="Widget"
            className="w-6 h-6 object-contain opacity-85"
          />
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#how-it-works" className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            How it works
          </a>
          <a href="#for-brands" className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
            For Brands
          </a>
          <a href="#faq" className="text-sm font-inter font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>

          {/* Demo button — brown bg, white text */}
          <motion.a
            href="/demo"
            className="text-sm font-inter font-semibold rounded-full px-4 py-1.5 flex items-center gap-1.5 whitespace-nowrap"
            style={{ backgroundColor: "hsl(28 31% 45%)", color: "#fff" }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 hsl(28 31% 45% / 0)",
                "0 0 12px 2px hsl(28 31% 45% / 0.35)",
                "0 0 0 0 hsl(28 31% 45% / 0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Demo
          </motion.a>
        </div>

        {/* Join the waitlist — brown bg, white text */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full px-5 h-9 text-sm font-inter font-semibold shrink-0 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "hsl(28 31% 45%)", color: "#fff" }}
        >
          Join the waitlist
        </a>

      </nav>
    </div>
  );
};

export default Navbar;