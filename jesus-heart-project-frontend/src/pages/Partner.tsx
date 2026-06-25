import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Check, Megaphone, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import PartnerTile from '@/components/ui/PartnerTile';
import PartnerApplyModal, { PARTNER_TYPES } from '@/components/partner/PartnerApplyModal';
import { partners } from '@/data/partners';

const benefits = [
  'Fulfil your corporate social responsibility',
  'Make a lasting impact on vulnerable communities',
  'Enhance your brand’s reputation and visibility',
  'Join a passionate community of change-makers',
];

export default function Partner() {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('corporate');

  const openModal = (id = 'corporate') => {
    setSelectedType(id);
    setOpen(true);
  };

  return (
    <>
      <SEO
        title="Partner With Us"
        description="Partner with The Jesus Heart Project — corporate CSR, project sponsorship, in-kind support and community partnerships that change lives in northern Ghana."
        image="/images/projects/pwd/img-1.jpg"
      />
      <PageHeader
        eyebrow="Partner With Us"
        title="Together, we reach further"
        subtitle="Join hands with us to bring food, education and hope to more communities across northern Ghana."
        image="/images/projects/pwd/img-1.jpg"
      />

      {/* Why partner */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src="/images/projects/pwd/img-2.jpg"
              alt="Partnership in action"
              loading="lazy"
              className="w-full rounded-md object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 text-brand-600">
              <Megaphone className="h-5 w-5" />
              <span className="eyebrow">Why partner</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Your support, <span className="italic text-brand-700">multiplied</span>
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              We cannot do this alone. Whether you’re a company, an organization or an individual,
              partnering with the Jesus Heart Project turns your generosity into tangible change —
              food on tables, children in school, and dignity restored to the vulnerable.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-600 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink-soft">{b}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => openModal()} className="btn-primary mt-8">
              <Handshake className="h-4 w-4" /> Become a partner
            </button>
          </Reveal>
        </div>
      </Section>

      {/* Ways to partner */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="How it works"
          title="Ways to partner with us"
          subtitle="Pick the partnership that fits your goals and apply — every form of support makes a difference."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_TYPES.map((w, i) => (
            <Reveal key={w.id} delay={(i % 4) * 0.08}>
              <div className="card flex h-full flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{w.text}</p>
                <button
                  onClick={() => openModal(w.id)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5"
                >
                  Apply <ArrowRight className="h-4 w-4 transition-all" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Current partners */}
      <Section>
        <SectionHeading
          eyebrow="In good company"
          title="Organizations we work with"
          subtitle="We’re grateful to partner with local government, schools and like-minded organizations."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={(i % 4) * 0.06}>
              <PartnerTile partner={partner} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-700 py-16 text-white sm:py-20">
        <div className="absolute inset-0">
          <img
            src="/images/gallery/img-6.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-800/85" />
        </div>
        <div className="container-page relative text-center">
          <span className="eyebrow eyebrow-rule justify-center text-gold-400">Let’s talk</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight text-white sm:text-4xl">
            Ready to make a <span className="italic text-gold-400">lasting</span> difference?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Apply to partner and our team will reach out to explore how we can change lives together.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => openModal()} className="btn-gold btn-lg">
              <Handshake className="h-4 w-4" /> Become a partner
            </button>
            <Link
              to="/contact"
              className="btn btn-lg border border-white/70 bg-transparent text-white hover:bg-white hover:text-brand-700"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <PartnerApplyModal open={open} onClose={() => setOpen(false)} initialType={selectedType} />
    </>
  );
}
