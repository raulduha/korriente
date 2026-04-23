import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { Services } from '@/components/sections/Services';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { WhyKorriente } from '@/components/sections/WhyKorriente';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowWeWork />
        <WhyKorriente />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
