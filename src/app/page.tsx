import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import ContentSection from '@/components/ContentSection';
import TeamSection from '@/components/TeamSection';
import SliderSection from '@/components/SliderSection';
import ClientMarquee from '@/components/ClientMarquee';

export default function Home() {
  return (
    <main>
      <Hero />

      <SliderSection />

      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: 0 }} />

      <ClientMarquee />

      <ContentSection
        title="Pretium imperdiet"
        text="Turpis vel fermentum hendrerit facilisis semper ata ante quis. Erat sapien montes aliquam sapien enim nascetur ornare lectus nisl viverra nascetur aliquam."
      />

      <FeatureSection
        title="Justo leo nec pretium"
        description="Feugiat magnis mattis facilisis vestibulum tortor. Aliquet eu parturient sit risus amet fermentum semper. Tempor et neque felis. Urna ultricies cep quisque suscipit integer lacus gravida metus sapien sed."
        imageSrc="/assets/orange_lamp_1769577532378.png"
        imageAlt="Orange lamp"
      />

      <StatsSection />

      <ContentSection
        title="Our Team"
        text="Meet the dedicated individuals behind our success."
      />

      <TeamSection />

      <div style={{ height: '4rem' }}></div> {/* Spacer */}
    </main>
  );
}
