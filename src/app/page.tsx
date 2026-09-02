import { AuroraBackground } from '@/components/AuroraBackground';
import { ScrollProgress } from '@/components/ScrollProgress';
import { TimelineApp } from '@/components/TimelineApp';
import { About } from '@/components/About';
import { Tips } from '@/components/Tips';
import { Protect } from '@/components/Protect';
import { Faq } from '@/components/Faq';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <div className="relative z-10">
        <TimelineApp />
        <About />
        <Tips />
        <Protect />
        <Faq />
        <Footer />
      </div>
    </>
  );
}
