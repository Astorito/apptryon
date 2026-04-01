import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { marketingFaqs } from "@/data/faqContent";

const faqs = marketingFaqs;

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-background/55 backdrop-blur-sm">
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
