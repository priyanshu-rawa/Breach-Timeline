import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Timeline } from "@/components/Timeline";
import { Evolution } from "@/components/Evolution";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { OpenAccess } from "@/components/OpenAccess";
import { WhyIBuiltThis } from "@/components/WhyIBuiltThis";
import { HelpfulTips } from "@/components/HelpfulTips";
import { DeviceProtection } from "@/components/DeviceProtection";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Ticker } from "@/ui/Ticker";
import { BackToTop } from "@/ui/BackToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <StatsBar />
        <Ticker />
        <Timeline />
        <Evolution />
        <Features />
        <Benefits />
        <OpenAccess />
        <WhyIBuiltThis />
        <HelpfulTips />
        <DeviceProtection />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
