import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿How do I install it?",
    answer: "Simply copy and paste our widget code into your website. It's a single line of JavaScript that works instantly. No complex setup or technical knowledge required. Our team is also available to help with custom integrations.",
  },
  {
    question: "¿Can I integrate with e-commerce platforms?",
    answer: "Yes! TryOn works seamlessly with Shopify, WooCommerce, Hostinger, Webflow, Nube, MercadoShops, and virtually any platform that supports custom JavaScript. We also offer native plugins for popular platforms.",
  },
  {
    question: "¿How is the billing?",
    answer: "We use usage-based billing, meaning you only pay for the try-ons your customers actually use. There are no monthly minimums or hidden fees. You can start with our free tier to test the integration, then scale as your usage grows.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about TryOn
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
