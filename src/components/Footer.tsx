import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      {/* CTA Section */}
      <div className="section-padding bg-gradient-to-b from-background to-card/50">
        <div className="container text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to transform your
            <br />
            <span className="text-gradient">customer experience?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join 500+ brands using TryOn to increase conversions and reduce returns.
          </p>
          <Button 
            size="lg" 
            className="glass-button rounded-full px-10 py-6 text-primary font-semibold text-base"
          >
            Talk with sales
          </Button>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8 border-t border-border">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold tracking-tight">
            TryOn<span className="text-primary">.</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 TryOn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
