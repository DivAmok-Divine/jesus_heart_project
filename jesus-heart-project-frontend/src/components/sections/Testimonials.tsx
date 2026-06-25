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
            <figure className="card flex h-full flex-col p-7">
              <Quote className="h-9 w-9 text-gold-500" />
              <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/[0.08] pt-5">
                {t.image && (
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-md object-cover"
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
      <p className="mt-8 text-center text-xs text-ink-muted">
        Sample stories shown for layout — real testimonials &amp; photos to be added.
      </p>
    </Section>
  );
}
