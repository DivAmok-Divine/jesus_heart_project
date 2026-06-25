import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import { coreValues } from '@/data/values';

export default function CoreValues() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="What guides us"
        title="Our core values"
        subtitle="Eight principles, rooted in the gospel, shape every outreach we undertake."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {coreValues.map((value, i) => (
          <Reveal key={value.title} delay={(i % 4) * 0.08}>
            <div className="card relative h-full overflow-hidden p-6">
              {/* Oversized, tilted icon bleeding off the right edge as a soft brand watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[20px] top-[calc(50%-20px)] -translate-y-1/2 -rotate-[14deg] text-brand-600 opacity-[0.12]"
              >
                <Icon name={value.icon} className="h-16 w-16 sm:h-24 sm:w-24" />
              </span>

              {/* Invisible spacer keeps the exact height/position the old icon tile occupied */}
              <div aria-hidden="true" className="h-12 w-12" />

              <h3 className="relative z-10 mt-4 text-lg font-bold">{value.title}</h3>
              <p className="relative z-10 mt-2 text-sm text-ink-soft">{value.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
