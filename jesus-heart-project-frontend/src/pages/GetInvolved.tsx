import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HandHeart,
  Users,
  Handshake,
  Building2,
  Megaphone,
  Check,
  Smartphone,
  Landmark,
  Gift,
  GraduationCap,
  CalendarHeart,
  ArrowRight,
} from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import Accordion from '@/components/ui/Accordion';
import DonateForm from '@/components/donate/DonateForm';
import PartnerApplyModal from '@/components/partner/PartnerApplyModal';
import { funds } from '@/data/giving';
import { donationFaq } from '@/data/faq';
import { ORG } from '@/lib/constants';

const ways = [
  { icon: HandHeart, title: 'Give a donation', text: 'A one-time or monthly gift provides food, school supplies and care to families in need.', cta: 'Donate now', action: 'donate' },
  { icon: Handshake, title: 'Become a partner', text: 'Organizations and businesses can partner with us to expand our reach and impact.', cta: 'Become a partner', action: 'partner' },
  { icon: Users, title: 'Volunteer', text: 'Lend your time and skills at our outreaches, conferences and community programs.', cta: 'Volunteer with us', action: 'volunteer' },
  { icon: Building2, title: 'Sponsor a project', text: 'Fund a specific project — like our ICT centre — and transform a whole community.', cta: 'Sponsor a project', action: 'donate' },
];

const otherWays = [
  {
    icon: Smartphone,
    title: 'Mobile Money',
    body: `Send via MTN / Telecel / AT MoMo to ${ORG.phones[1]}, then message us on WhatsApp for a receipt.`,
    cta: 'Give with Mobile Money',
    action: 'donate',
  },
  {
    icon: Landmark,
    title: 'Bank transfer',
    body: 'Bank name, account name and account number — to be provided. (Placeholder)',
    cta: 'Contact for details',
    action: 'contact',
  },
  {
    icon: Gift,
    title: 'In-kind donations',
    body: 'Donate books, clothing, food or equipment. Contact us to arrange a drop-off or pickup.',
    cta: 'Arrange a donation',
    action: 'contact',
  },
  {
    icon: GraduationCap,
    title: 'Sponsor a student',
    body: 'Sponsor a student’s supplies or digital-literacy training. We’ll keep you updated on their progress.',
    cta: 'Sponsor a student',
    action: 'donate',
  },
];

const partnerBenefits = [
  'Fulfil your corporate social responsibility',
  'Make a lasting impact on vulnerable communities',
  'Enhance your brand’s reputation',
  'Join a passionate community of change-makers',
];

export default function GetInvolved() {
  const [fund, setFund] = useState(funds[0]);
  const [partnerOpen, setPartnerOpen] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const runAction = (action: string) => {
    if (action === 'donate') scrollTo('donate');
    else if (action === 'partner') setPartnerOpen(true);
    else if (action === 'volunteer') scrollTo('volunteer');
    else if (action === 'contact') window.location.href = `mailto:${ORG.email}`;
  };

  return (
    <>
      <SEO title="Get Involved" description="Donate, partner or volunteer with The Jesus Heart Project. Support food, education and empowerment programs in northern Ghana." />
      <PageHeader
        eyebrow="Get Involved"
        title="Be the change. Join the Jesus Heart Project."
        subtitle="We cannot do this alone — your support, as a donor, partner or volunteer, changes lives."
        image="/images/gallery/img-1.jpg"
      />

      {/* Choose a fund + donate */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Give with purpose</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">Choose where your gift goes</h2>
            <p className="mt-4 text-ink-soft">
              Direct your donation to the cause closest to your heart, or let us put it where it’s
              needed most. Every gift is tied to real, tangible impact.
            </p>
            <div className="mt-6 space-y-3">
              {funds.map((f) => {
                const active = fund.slug === f.slug;
                return (
                  <button
                    key={f.slug}
                    onClick={() => setFund(f)}
                    className={`flex w-full items-start gap-3 rounded-md border-2 p-4 text-left transition ${
                      active ? 'border-brand-600 bg-brand-50' : 'border-black/10 hover:border-brand-300'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 ${
                        active ? 'border-brand-600 bg-brand-600 text-white' : 'border-black/20'
                      }`}
                    >
                      {active && <Check className="h-3 w-3" />}
                    </span>
                    <span>
                      <span className="block font-semibold text-ink">{f.label}</span>
                      <span className="block text-sm text-ink-soft">{f.blurb}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="donate" className="scroll-mt-24">
              <DonateForm designation={fund.label} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ways to help */}
      <Section tone="cream">
        <SectionHeading eyebrow="Ways to help" title="Your support changes lives" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 0.08}>
              <div className="card relative flex h-full flex-col overflow-hidden p-6">
                {/* Oversized, tilted icon bleeding off the right edge as a soft brand watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[20px] top-[calc(50%-20px)] -translate-y-1/2 -rotate-[14deg] text-brand-600 opacity-[0.12]"
                >
                  <w.icon className="h-16 w-16 sm:h-24 sm:w-24" />
                </span>

                {/* Invisible spacer keeps the exact height/position the old icon tile occupied */}
                <div aria-hidden="true" className="h-11 w-11" />

                <h3 className="relative z-10 mt-4 text-lg font-bold">{w.title}</h3>
                <p className="relative z-10 mt-2 flex-1 text-sm text-ink-soft">{w.text}</p>
                <button
                  onClick={() => runAction(w.action)}
                  className="relative z-10 mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-600 hover:gap-2.5"
                >
                  {w.cta} <ArrowRight className="h-4 w-4 transition-all" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Other ways to give */}
      <Section>
        <SectionHeading
          eyebrow="More ways to give"
          title="Other ways to support us"
          subtitle="Prefer not to give online? Here are other ways to make a difference."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherWays.map((w, i) => (
            <Reveal key={w.title} delay={(i % 4) * 0.08}>
              <div className="card relative flex h-full flex-col overflow-hidden p-6">
                {/* Oversized, tilted icon bleeding off the right edge as a soft brand watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[20px] top-[calc(50%-20px)] -translate-y-1/2 -rotate-[14deg] text-brand-600 opacity-[0.12]"
                >
                  <w.icon className="h-16 w-16 sm:h-24 sm:w-24" />
                </span>

                {/* Invisible spacer keeps the exact height/position the old icon tile occupied */}
                <div aria-hidden="true" className="h-11 w-11" />

                <h3 className="relative z-10 mt-4 text-lg font-bold">{w.title}</h3>
                <p className="relative z-10 mt-2 flex-1 text-sm text-ink-soft">{w.body}</p>
                <button
                  onClick={() => runAction(w.action)}
                  className="relative z-10 mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-600 hover:gap-2.5"
                >
                  {w.cta} <ArrowRight className="h-4 w-4 transition-all" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Partner with us */}
      <Section tone="cream">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src="/images/projects/pwd/img-1.jpg"
              alt="Partnership in action"
              loading="lazy"
              className="w-full rounded-md object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 text-brand-600">
              <Megaphone className="h-5 w-5" />
              <span className="eyebrow">Why partner with us</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl">Together, we reach further</h2>
            <ul className="mt-6 space-y-3">
              {partnerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-600 text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-ink-soft">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={() => setPartnerOpen(true)} className="btn-primary">
                <Handshake className="h-4 w-4" /> Become a partner
              </button>
              <Link to="/partner" className="btn-secondary">
                Learn more
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Volunteer callout */}
      <Section id="volunteer" className="scroll-mt-24">
        <div className="rounded-md bg-ink px-6 py-10 text-center text-white sm:px-10">
          <CalendarHeart className="mx-auto h-10 w-10 text-gold-400" />
          <h2 className="mt-4 text-2xl text-white sm:text-3xl">Lend your hands and heart</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            We’re always looking for volunteers for our outreaches and conferences. Tell us how you’d
            like to help and we’ll be in touch.
          </p>
          <a
            href={`mailto:${ORG.email}?subject=Volunteering%20with%20The%20Jesus%20Heart%20Project`}
            className="btn-gold mt-6"
          >
            <HandHeart className="h-4 w-4" /> Become a volunteer
          </a>
        </div>
      </Section>

      {/* Donation FAQ */}
      <Section tone="cream">
        <SectionHeading eyebrow="Good to know" title="Donation FAQ" />
        <Accordion items={donationFaq} />
      </Section>

      <PartnerApplyModal open={partnerOpen} onClose={() => setPartnerOpen(false)} />
    </>
  );
}
