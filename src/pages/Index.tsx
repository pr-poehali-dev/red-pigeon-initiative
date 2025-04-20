import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import BirdGrid from "@/components/BirdGrid";
import PigeonHelp from "@/components/PigeonHelp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <BirdGrid />
        <PigeonHelp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
