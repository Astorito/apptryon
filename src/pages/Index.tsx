import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LandingBackgroundVideo from "@/components/LandingBackgroundVideo";
import LandingGarmentBoxes from "@/components/LandingGarmentBoxes";
import VideoSection from "@/components/VideoSection";
import PainPoints from "@/components/PainPoints";
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
      <LandingGarmentBoxes visible={videoEnded} />
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
