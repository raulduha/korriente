import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { Services } from '@/components/sections/Services';
import { Sectors } from '@/components/sections/Sectors';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowWeWork />
        <Services />
        <Sectors />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
