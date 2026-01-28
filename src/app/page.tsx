import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import ContentSection from '@/components/ContentSection';
import TeamSection from '@/components/TeamSection';
import SliderSection from '@/components/SliderSection';
import ClientMarquee from '@/components/ClientMarquee';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />

      <SliderSection />

      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: 0 }} />

      <ClientMarquee />

      <ContentSection
        title="Professional Summary"
        text="A dedicated and detail-oriented professional contributing abilities and skills to dynamic organizations. I specialize in enhancing content strategy through comprehensive research, keyword analysis, and new ideas, backed by a strong academic background in Public Health and Botany."
      />

      <FeatureSection
        title="Data Analytics & Research"
        description="Proficient in analyzing complex datasets to extract meaningful insights using PowerBI, Tableau, and MySQL. Experience includes data management for community health programs and market competitor research."
        imageSrc="/assets/orange_lamp_1769577532378.png"
        imageAlt="Data Analytics"
      />

      <StatsSection />

      <ContentSection
        title="Our Team"
        text="Meet the dedicated individuals behind our success."
      />

      <TeamSection />

      <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: 0 }} />

      <ContactForm />

      <div style={{ height: '4rem' }}></div> {/* Spacer */}
    </main>
  );
}
