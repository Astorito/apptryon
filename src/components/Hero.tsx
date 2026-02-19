import { Button } from "@/components/ui/button";
import { Store, ShoppingBag, Shirt, Gem } from "lucide-react";
import { motion } from "framer-motion";

const GIF_URL = "https://nlimqvmcazgrpyficals.supabase.co/storage/v1/object/public/video/GIF-Landing.gif";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 opacity-0 fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-inter font-medium text-muted-foreground">AI-Powered Virtual Try-On</span>
            </div>
            
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair leading-[1.1] tracking-tight text-foreground font-semibold"
              initial={{ y: -220, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                mass: 0.9,
              }}
              style={{ willChange: "transform" }}
            >
              <span className="font-roboto inline-block" style={{ transform: "scale(1.4)", transformOrigin: "left center", display: "inline-block" }}>More Sales with</span>
              <br />
              <span className="text-gradient text-5xl font-sans font-normal">Virtual Try On</span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl font-inter text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              style={{ willChange: "transform" }}
            >
              Increase conversion, reduce returns and boost order value. Beat your competition with instant AI virtual experience.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="cta" size="lg" className="rounded-full px-8 py-6 text-base">
                <a href="#contact">Talk with sales</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[Store, ShoppingBag, Shirt, Gem].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-inter text-muted-foreground">
                <span className="font-semibold text-foreground">25+</span> brands already using TryOn
              </p>
            </div>
          </div>

          {/* Right content - Video directo sin box */}
          <div className="relative opacity-0 fade-up stagger-2">
            <img 
              src={GIF_URL}
              alt="Virtual Try-On Demo"
              className="w-full aspect-video rounded-2xl object-cover shadow-2xl"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-card border border-border shadow-lg animate-float">
              <p className="text-sm font-inter font-medium text-foreground">✨ Powered by AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;