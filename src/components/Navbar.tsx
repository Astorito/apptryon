import { motion } from "framer-motion";
import widgetIcon from "@/assets/Widget.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 px-6">
      <nav
        className="flex items-center justify-between h-14 px-6 rounded-2xl border border-white/20"
        style={{
          width: "70%",
          backgroundColor: "rgba(247, 244, 239, 0.45)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo + Widget icon */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-playfair font-bold tracking-tight text-foreground">
            Try Look<span className="text-primary">.</span>
          </span>
          <img src={widgetIcon} alt="Widget" style={{ width: 72, height: 72 }} className="object-contain" />
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

          {/* Demo — outline style like "Try it live", but with bounce */}
          <motion.a
            href="/demo"
            className="text-sm font-inter font-medium rounded-full px-4 py-1.5 flex items-center gap-1.5 whitespace-nowrap border-2 border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background transition-colors duration-200"
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 rgba(0,0,0,0)",
                "0 0 10px 2px rgba(0,0,0,0.12)",
                "0 0 0 0 rgba(0,0,0,0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
            Demo
          </motion.a>
        </div>

        {/* Join the waitlist */}
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