import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import ContentSection from '@/components/ContentSection';

import SliderSection from '@/components/SliderSection';
import ClientMarquee from '@/components/ClientMarquee';
import ServicesSection from '@/components/ServicesSection';
import ImageFeatureSection from '@/components/ImageFeatureSection';
import FooterContactSection from '@/components/FooterContactSection';

export default function Home() {
  return (
    <main>
      <Hero />

      <SliderSection />

      <ClientMarquee />

      <ServicesSection />

      <ImageFeatureSection />



      <StatsSection />

      <FooterContactSection />


    </main>
  );
}
