import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { partners } from '@/data/partners';

export default function Partners() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Working together"
        title="Our partners & collaborators"
        subtitle="We achieve more by joining hands with local government, schools and like-minded organizations."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
        {partners.map((partner, i) => {
          const Tag = partner.website ? 'a' : 'div';
          return (
            <Reveal key={partner.name} delay={(i % 3) * 0.06}>
              <Tag
                {...(partner.website
                  ? { href: partner.website, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                title={partner.name}
                className="group flex h-full flex-col items-center justify-center gap-3 rounded-md
                  bg-white p-5 text-center ring-1 ring-black/5 transition-colors hover:ring-brand-300 sm:p-6"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className="h-14 w-auto max-w-[80%] object-contain opacity-80 grayscale
                      transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-16"
                  />
                ) : (
                  <span className="text-lg font-bold text-ink">{partner.name}</span>
                )}
                <span className="text-xs font-medium text-ink-muted">
                  {partner.short ?? partner.name}
                </span>
              </Tag>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
