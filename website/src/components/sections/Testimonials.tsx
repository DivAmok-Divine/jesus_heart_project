import { Quote } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Voices"
        title="Stories from the people we serve"
        subtitle="The heart of our work is people. Here is what beneficiaries, partners and volunteers say."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name + i} delay={(i % 3) * 0.08}>
            <figure className="card flex h-full flex-col p-6">
              <Quote className="h-8 w-8 text-brand-200" />
              <blockquote className="mt-3 flex-1 text-ink-soft">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {t.image && (
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-11 w-11 rounded-md object-cover"
                  />
                )}
                <div>
                  <div className="text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-ink-muted">
        Sample stories shown for layout — real testimonials &amp; photos to be added.
      </p>
    </Section>
  );
}
