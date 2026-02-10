import HeroSection from "../sections/HeroSection";
import FeatureSection from "../sections/FeatureSection";
import FeedbackSection from "../sections/FeedbackSection";
import PartnershipSection from "../sections/PartnershipSection";
import ContactSection from "../sections/ContactSection";
import CtaSection from "../sections/CtaSection";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <div className="page">
      <HeroSection />
      <FeatureSection />
      <FeedbackSection />
      <PartnershipSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
