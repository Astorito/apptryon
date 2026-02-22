import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿How do I install it?",
    answer: "Yo me encargo de instalarlo por ti. En menos de 3 días tendrás Try Look funcionando en tu sitio web. Solo necesitas proporcionarme acceso a tu plataforma.",
  },
  {
    question: "¿Can I integrate with e-commerce platforms?",
    answer: "Yes! Try Look works seamlessly with Shopify, WooCommerce, Hostinger, Webflow, Nube, MercadoShops, and virtually any platform that supports custom JavaScript. We also offer native plugins for popular platforms.",
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
          <h2 className="text-3xl sm:text-4xl font-playfair font-normal tracking-tight text-foreground">
            Frequently asked <span className="text-gradient font-bold">questions</span>
          </h2>
          <p className="font-inter text-muted-foreground text-lg">
            Everything you need to know about Try Look
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
            >
              <AccordionTrigger className="text-left font-playfair font-semibold hover:no-underline py-6 text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-inter text-muted-foreground leading-relaxed pb-6">
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
