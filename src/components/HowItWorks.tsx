import { Code, Upload, Shirt, Sparkles, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Code,
    title: "Put TryOn in your website",
    description: "Add one line of code to embed the widget",
  },
  {
    icon: Upload,
    title: "Client uploads their picture",
    description: "Simple drag & drop or camera capture",
  },
  {
    icon: Shirt,
    title: "Choose the clothes",
    description: "Browse your catalog with try-on enabled",
  },
  {
    icon: Sparkles,
    title: "TryOn works for you",
    description: "AI generates realistic try-on in seconds",
  },
  {
    icon: ShoppingCart,
    title: "Your client buys it",
    description: "Higher conversion, fewer returns",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-playfair font-normal tracking-tight text-foreground">
            How it <span className="text-gradient font-bold">works</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Five simple steps to transform your customer experience
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-border hidden lg:block" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-background p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-3 left-6 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-inter font-bold">
                    {index + 1}
                  </div>
                  
                  <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="font-playfair font-semibold mb-2 text-lg text-foreground">{step.title}</h3>
                  <p className="text-sm font-inter text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;