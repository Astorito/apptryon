import { Button } from "@/components/ui/button";

const Hero = () => {
  return <section className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 opacity-0 fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-inter font-medium text-muted-foreground">AI-Powered Virtual Try-On</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair leading-[1.1] tracking-tight text-foreground font-semibold">
              Try your clothes
              <br />
              <span className="text-gradient text-5xl font-sans font-normal">before buying it</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-inter text-muted-foreground max-w-md leading-relaxed">
              AI Widget for your website. Let customers see how clothes look on them instantly.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="cta" size="lg" className="rounded-full px-8 py-6 text-base">
                <a href="#contact">Talk with sales</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-inter font-medium">
                    {String.fromCharCode(64 + i)}
                  </div>)}
              </div>
              <p className="text-sm font-inter text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> brands already using TryOn
              </p>
            </div>
          </div>

          {/* Right content - Video */}
          <div className="relative opacity-0 fade-up stagger-2">
            <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden shadow-2xl shadow-primary/5">
              <video 
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source 
                  src="https://nlimqvmcazgrpyficals.supabase.co/storage/v1/object/public/video/Video%20Demo%20(1).mp4" 
                  type="video/mp4" 
                />
                Tu navegador no soporta el tag de video.
              </video>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-card border border-border shadow-lg animate-float">
              <p className="text-sm font-inter font-medium text-foreground">✨ Powered by AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;