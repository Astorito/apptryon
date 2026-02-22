import { Undo2, ShoppingCart, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: Undo2,
    title: "High Return Rates",
    description: 'The "buy two, return one" habit erodes your margins and impacts sustainability.',
  },
  {
    icon: ShoppingCart,
    title: "Abandoned Carts",
    description: "64% of shoppers leave because they aren't sure how the piece will fit their body.",
  },
  {
    icon: TrendingDown,
    title: "Lower Conversion",
    description: "Fear of a poor fit is the #1 barrier between discovery and checkout.",
  },
];

const PainPoints = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold tracking-tight text-foreground leading-tight">
            Your customers hesitate.
            <br />
            And hesitation <span className="text-gradient italic">kills revenue.</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg max-w-2xl mx-auto">
            Static photos and generic size charts aren't enough for the modern luxury shopper. Guesswork leads to three major profit drains:
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-foreground border border-border rounded-2xl p-8 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-background">{point.title}</h3>
              <p className="text-sm font-inter text-background/70 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
