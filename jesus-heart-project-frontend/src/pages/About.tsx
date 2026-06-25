import { Link } from 'react-router-dom';
import { Target, Eye, Quote, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import { coreValues } from '@/data/values';
import { founder } from '@/data/team';
import { ORG } from '@/lib/constants';

const focusAreas = [
  'Food distribution to families in need',
  'Education & skills development',
  'Medical assistance and health screening',
  'Shelter and housing support',
  'Counseling and emotional support',
  'Community building and belonging',
  'Spiritual guidance and prayer',
  'Emergency relief in times of crisis',
  'Long-term empowerment out of poverty',
  'Advocacy and awareness for the vulnerable',
];

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about The Jesus Heart Project — our vision, mission, values and the people we serve in northern Ghana." />
      <PageHeader
        eyebrow="About Us"
        title="A community of compassion, empowerment and faith"
        subtitle="The Jesus Heart Project is a humanitarian organization helping the poor and needy through the gospel of Christ."
      />

      {/* Intro */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow eyebrow-rule">Our story</span>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              Born from a heart for the <span className="italic text-brand-700">hurting</span>
            </h2>
            <p className="dropcap mt-6 leading-relaxed text-ink-soft">
              The Jesus Heart Project began in {ORG.city.split(',')[0]} with a simple conviction: that every
              person deserves to live a life of dignity, security and opportunity. What started as
              small community outreaches — sharing food and fellowship with families in need — has
              grown into a wide-ranging humanitarian ministry.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Today we serve students, persons with disabilities, orphans, the elderly and
              marginalized communities, addressing both immediate needs and the root causes of
              suffering through sustainable, community-driven programs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/gallery/img-2.jpg" alt="Outreach" loading="lazy" className="aspect-square w-full rounded-md object-cover shadow-card" />
              <img src="/images/projects/pwd/img-4.jpg" alt="Empowering PWDs" loading="lazy" className="mt-6 aspect-square w-full rounded-md object-cover shadow-card" />
              <img src="/images/projects/back-to-school/img-3.jpg" alt="Students" loading="lazy" className="-mt-6 aspect-square w-full rounded-md object-cover shadow-card" />
              <img src="/images/gallery/img-7.jpg" alt="Community" loading="lazy" className="aspect-square w-full rounded-md object-cover shadow-card" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section tone="cream">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl">Our Vision</h3>
              <p className="mt-3 text-ink-soft">
                To create a world where the transformative power of the gospel of Christ is
                harnessed to uplift the lives of the poor and needy — fostering a community of
                compassion, empowerment and holistic well-being.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-2xl">Our Mission</h3>
              <p className="mt-3 text-ink-soft">
                To extend a helping hand to the marginalized, guided by Christ’s love and empathy.
                Through practical initiatives and spiritual support, we provide essential resources,
                education and a sense of belonging — empowering families to overcome poverty and
                achieve lasting change.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What we do */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Ten ways we serve our communities"
          subtitle="Our outreach meets people where they are — body, mind and spirit."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((area, i) => (
            <Reveal key={area} delay={(i % 2) * 0.05}>
              <div className="flex items-center gap-3 rounded-md bg-cream px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-ink-soft">{area}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Core values */}
      <Section tone="cream">
        <SectionHeading eyebrow="What guides us" title="Our core values" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => (
            <Reveal key={value.title} delay={(i % 4) * 0.06}>
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

      {/* Founder note */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <img
              src={founder.image}
              alt={founder.name}
              loading="lazy"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-md object-cover object-top shadow-card"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Quote className="h-10 w-10 text-brand-200" />
            <blockquote className="mt-2 text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              “My journey as a humanitarian is driven by a profound sense of empathy, a commitment
              to social justice, and an unwavering belief in the inherent dignity and worth of every
              individual.”
            </blockquote>
            <div className="mt-5">
              <div className="font-display text-lg font-bold">{founder.name}</div>
              <div className="text-sm text-ink-muted">{founder.role}</div>
            </div>
            <Link to="/team" className="btn-secondary mt-6">
              Meet the team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
