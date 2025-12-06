import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="container max-w-2xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-playfair font-normal tracking-tight text-foreground">
            Let's <span className="text-gradient font-bold">talk</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Ready to boost your conversions? Get in touch with our team.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-inter text-foreground">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                className="font-inter bg-background border-border rounded-xl h-12"
              />
            </div>
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
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company" className="font-inter text-foreground">Company</Label>
              <Input
                id="company"
                name="company"
                placeholder="Your company name"
                className="font-inter bg-background border-border rounded-xl h-12"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website" className="font-inter text-foreground">Website</Label>
              <Input
                id="website"
                name="website"
                type="url"
                placeholder="https://yourstore.com"
                className="font-inter bg-background border-border rounded-xl h-12"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-inter text-foreground">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="font-inter bg-background border-border rounded-xl resize-none"
            />
          </div>

          <Button
            type="submit"
            variant="cta"
            size="lg"
            className="w-full rounded-full py-6 text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;