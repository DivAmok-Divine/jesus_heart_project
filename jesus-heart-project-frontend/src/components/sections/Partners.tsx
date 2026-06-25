import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import PartnerTile from '@/components/ui/PartnerTile';
import { partners } from '@/data/partners';

export default function Partners() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Working together"
        title="Our partners & collaborators"
        subtitle="We achieve more by joining hands with local government, schools and like-minded organizations."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {partners.map((partner, i) => (
          <Reveal key={partner.name} delay={(i % 4) * 0.06}>
            <PartnerTile partner={partner} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
