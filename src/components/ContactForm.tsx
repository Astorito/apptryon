import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container max-w-xl">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-12"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl">🎉</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground">
                Amazing!
              </h2>
              <p className="font-inter text-muted-foreground text-lg max-w-md mx-auto">
                You are now in the TryLook waitlist. We are going to get in touch soon.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-playfair font-normal tracking-tight text-foreground">
                  Join the <span className="text-gradient font-bold">waitlist</span>
                </h2>
                <p className="font-inter text-muted-foreground text-lg">
                  Be among the first to use Try Look on your store.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-inter text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="font-inter bg-background border-border rounded-xl h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website" className="font-inter text-foreground">Your website</Label>
                  <Input
                    id="website"
                    name="website"
                    type="url"
                    placeholder="https://yourstore.com"
                    required
                    className="font-inter bg-background border-border rounded-xl h-12"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full rounded-full py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Joining..." : "Join the waitlist"}
                </Button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
