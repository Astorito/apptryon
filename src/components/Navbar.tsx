import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="text-xl font-playfair font-bold tracking-tight text-foreground">
          TryOn<span className="text-primary">.</span>
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
        </div>

        <Button asChild variant="cta" className="rounded-full px-6">
          <a href="#contact">Talk with sales</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;