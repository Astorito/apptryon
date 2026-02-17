import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import ForBrands from "@/components/ForBrands";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <VideoSection />
      <PainPoints />
      <HowItWorks />
      <ForBrands />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
