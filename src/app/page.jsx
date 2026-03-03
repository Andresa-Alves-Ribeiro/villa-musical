'use client';

import HeroSection from './components/hero/hero';
import AboutSection from './components/about-section/about-section';
import InstrumentsSection from './components/instruments-section/instruments-section';
import GallerySection from './components/gallery-section/gallery-section';
import ContactSection from './components/contact-section/contact-section';
import Footer from './components/footer/page';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <InstrumentsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
