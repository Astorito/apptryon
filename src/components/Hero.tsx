import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import RotatingTypewriter from "@/components/RotatingTypewriter";
import { Progress } from "@/components/ui/progress";

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
              <span className="font-roboto inline-block" style={{ transform: "scale(1.26)", transformOrigin: "left center", display: "inline-block" }}>
                <RotatingTypewriter speed={58} />
              </span>
              <br />
              <span className="text-gradient text-5xl font-sans font-normal">Virtual Try On</span>
            </motion.h1>
            
            <motion.div
              className="max-w-md space-y-2"
              initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut",
              }}
              style={{ willChange: "transform" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-inter font-semibold text-primary tracking-wide">Early Access</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-playfair font-bold text-foreground">9</span>
                  <span className="text-lg text-muted-foreground font-inter">/ 15</span>
                  <span className="text-xs font-inter font-semibold text-muted-foreground tracking-widest ml-1">BRANDS</span>
                </div>
              </div>
              <div className="relative h-3 w-full rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all"
                  style={{ width: `${(9 / 15) * 100}%` }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    width: `${(9 / 15) * 100}%`,
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s infinite",
                  }}
                />
              </div>
            </motion.div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="cta" size="lg" className="rounded-full px-8 py-6 text-base">
                <a href="#contact">Secure your spot</a>
              </Button>
            </div>

            <p className="text-sm font-inter text-muted-foreground pt-2">
              Prices increase automatically when 15 brands join
            </p>
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