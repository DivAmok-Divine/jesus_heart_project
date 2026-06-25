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
            <div className="card h-full p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                <Icon name={value.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{value.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{value.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
