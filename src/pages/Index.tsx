import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LandingBackgroundVideo from "@/components/LandingBackgroundVideo";
import VideoSection from "@/components/VideoSection";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import ForBrands from "@/components/ForBrands";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <LandingBackgroundVideo />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <VideoSection />
        <PainPoints />
        <HowItWorks />
        <ForBrands />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
