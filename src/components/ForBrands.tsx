import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const integrations = [
  "Shopify",
  "WooCommerce", 
  "Hostinger",
  "Webflow",
  "Nube",
  "MercadoShops",
];

const ForBrands = () => {
  return (
    <section id="for-brands" className="section-padding bg-card/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Code preview */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl bg-foreground p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <pre className="text-sm overflow-x-auto">
                <code className="text-primary-foreground/70">
                  <span className="text-primary-foreground/40">{"<!-- Add TryOn to your site -->"}</span>
                  {"\n"}
                  <span className="text-blue-400">{"<script "}</span>
                  <span className="text-green-400">src</span>
                  <span className="text-primary-foreground/70">{"="}</span>
                  <span className="text-orange-400">"https://tryon.ai/widget.js"</span>
                  <span className="text-blue-400">{">"}</span>
                  {"\n"}
                  <span className="text-blue-400">{"</script>"}</span>
                </code>
              </pre>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">For Brands</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                One line of code.
                <br />
                <span className="text-gradient">Endless possibilities.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Integrate TryOn in minutes, not days. Our widget works seamlessly with all major e-commerce platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {integrations.map((platform) => (
                <div 
                  key={platform}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-background border border-border"
                >
                  <Check className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{platform}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Usage-based billing</h4>
                  <p className="text-sm text-muted-foreground">
                    Only pay for what you use. No monthly minimums, no hidden fees.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="glass-button rounded-full px-8 py-6 text-primary font-semibold text-base"
            >
              Start integrating today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBrands;
