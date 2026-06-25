import SEO from '@/components/SEO';
import Hero from '@/components/sections/Hero';
import ImpactStats from '@/components/sections/ImpactStats';
import MissionPreview from '@/components/sections/MissionPreview';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import CoreValues from '@/components/sections/CoreValues';
import Testimonials from '@/components/sections/Testimonials';
import Partners from '@/components/sections/Partners';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <ImpactStats />
      <MissionPreview />
      <FeaturedProjects />
      <CoreValues />
      <Testimonials />
      <Partners />
      <CTASection />
    </>
  );
}
