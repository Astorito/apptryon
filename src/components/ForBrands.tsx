import { Button } from "@/components/ui/button";
import { ShoppingBag, ShoppingCart, Globe, Code, Cloud, Store } from "lucide-react";

const integrations = [
  { name: "Shopify", icon: ShoppingBag },
  { name: "WooCommerce", icon: ShoppingCart },
  { name: "Hostinger", icon: Globe },
  { name: "Webflow", icon: Code },
  { name: "Nube", icon: Cloud },
  { name: "MercadoShops", icon: Store },
];

const ForBrands = () => {
  return (
    <section id="for-brands" className="section-padding overflow-hidden bg-card/45 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Code preview */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl bg-foreground p-4 md:p-6 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <pre className="text-sm overflow-x-auto max-w-full">
                <code className="text-primary-foreground/70">
                  <span className="text-primary-foreground/40">{"<!-- Add Try Look to your site -->"}</span>
                  {"\n"}
                  <span className="text-blue-400">{"<script "}</span>
                  <span className="text-green-400">src</span>
                  <span className="text-primary-foreground/70">{"="}</span>
                  <span className="text-orange-400">"https://trylook.ai/widget.js"</span>
                  <span className="text-blue-400">{">"}</span>
                  {"\n"}
                  <span className="text-blue-400">{"</script>"}</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8 overflow-hidden">
            <div className="space-y-4">
              <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">For Brands</span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-normal tracking-tight text-foreground">
                One line of code.
                <br />
                <span className="text-gradient font-bold">Endless possibilities.</span>
              </h2>
              <p className="text-base md:text-lg font-inter text-muted-foreground leading-relaxed">
                Integrate Try Look in minutes, not days. Our widget works seamlessly with all major e-commerce platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {integrations.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <div 
                    key={platform.name}
                    className="flex items-center gap-2 px-3 py-3 rounded-xl bg-background border border-border overflow-hidden"
                  >
                    <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-inter font-medium text-foreground truncate">{platform.name}</span>
                  </div>
                );
              })}
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-playfair font-semibold mb-1 text-foreground">Usage-based billing</h4>
                  <p className="text-sm font-inter text-muted-foreground">
                    Only pay for what you use. No monthly minimums, no hidden fees.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              asChild
              variant="cta"
              size="lg" 
              className="rounded-full px-8 py-6 text-base"
            >
              <a href="#contact">Join the waitlist</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBrands;
