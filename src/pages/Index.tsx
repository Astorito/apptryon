import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LandingBackgroundVideo from "@/components/LandingBackgroundVideo";
import VideoSection from "@/components/VideoSection";
import PainPoints from "@/components/PainPoints";
import TryOnFlowSection from "@/components/TryOnFlowSection";
import HowItWorks from "@/components/HowItWorks";
import ForBrands from "@/components/ForBrands";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <main className="relative min-h-screen">
      <LandingBackgroundVideo onVideoEnded={() => setVideoEnded(true)} />
      <div className="relative z-10">
        <Navbar />
        <Hero garmentsVisible={videoEnded} />
        <VideoSection />
        <PainPoints />
        <TryOnFlowSection />
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
