import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Offer from "@/components/Offer";
import HowItWorks from "@/components/HowItWorks";
import Curriculum from "@/components/Curriculum";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Offer />
        <HowItWorks />
        <Curriculum />
        <Gallery />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
