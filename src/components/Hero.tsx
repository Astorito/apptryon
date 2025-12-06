import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 opacity-0 fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">AI-Powered Virtual Try-On</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
              Try your clothes
              <br />
              <span className="text-gradient">before buying it</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-md leading-relaxed">
              AI Widget for your website. Let customers see how clothes look on them instantly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="glass-button rounded-full px-8 py-6 text-primary font-semibold text-base"
              >
                Talk with sales
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="rounded-full px-8 py-6 font-medium text-base group"
              >
                <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Watch demo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> brands already using TryOn
              </p>
            </div>
          </div>

          {/* Right content - Video placeholder */}
          <div className="relative opacity-0 fade-up stagger-2">
            <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden shadow-2xl shadow-primary/5">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                <button className="w-20 h-20 rounded-full glass-button flex items-center justify-center group hover:scale-105 transition-transform">
                  <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                <div className="flex-1 h-1 rounded-full bg-foreground/10">
                  <div className="h-full w-0 rounded-full bg-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">2:34</span>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-card border border-border shadow-lg animate-float">
              <p className="text-sm font-medium">✨ Powered by AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
