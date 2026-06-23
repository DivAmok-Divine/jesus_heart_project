import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { team } from '@/data/team';
import type { TeamMember } from '@/types';

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => !['Pastor', 'Dr.', 'Mr.', 'Mrs.', 'Ms.'].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

function Avatar({ member, large = false }: { member: TeamMember; large?: boolean }) {
  if (member.image) {
    return (
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className={`w-full rounded-md object-cover object-top shadow-card ${large ? 'aspect-[4/5]' : 'aspect-square'}`}
      />
    );
  }
  return (
    <div
      className={`flex w-full items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-brand-700 font-display font-bold text-white shadow-card ${
        large ? 'aspect-[4/5] text-6xl' : 'aspect-square text-4xl'
      }`}
    >
      {initials(member.name)}
    </div>
  );
}

export default function Team() {
  const founder = team.find((m) => m.category === 'founder')!;
  const coreTeam = team.filter((m) => m.category === 'team');
  const advisors = team.filter((m) => m.category === 'advisor');

  return (
    <>
      <SEO title="Our Team" description="Meet the people behind The Jesus Heart Project — the founder, core team and advisors serving northern Ghana." />
      <PageHeader
        eyebrow="Our Team"
        title="The people behind the mission"
        subtitle="A dedicated team united by faith and a passion for serving others."
        image="/images/gallery/img-12.jpg"
        imagePosition="object-[center_40%]"
      />

      {/* Founder spotlight */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="mx-auto max-w-sm">
              <Avatar member={founder} large />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Founder & CEO</span>
            <h2 className="mt-2 text-3xl sm:text-4xl">{founder.name}</h2>
            <p className="mt-4 text-ink-soft">{founder.bio}</p>
            <Link to="/founder" className="btn-secondary mt-6">
              Read more <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Core team */}
      <Section tone="cream">
        <SectionHeading eyebrow="Leadership" title="Our core team" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreTeam.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 0.06}>
              <div className="card h-full flex flex-col overflow-hidden border-0">
                <div className="relative">
                  {member.image ? (
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-full aspect-[4/5] object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-600 via-transparent to-transparent opacity-70" />
                    </>
                  ) : (
                    <Avatar member={member} />
                  )}
                </div>
                <div className="p-5 flex-1 bg-white relative z-10">
                  <h3 className="text-base font-bold">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-600">{member.role}</p>
                  <p className="mt-2 text-sm text-ink-soft">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Advisors */}
      <Section>
        <SectionHeading eyebrow="Guidance" title="Advisory team" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {advisors.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <div className="card flex h-full items-start gap-4 p-6">
                <div className="w-20 shrink-0">
                  <Avatar member={member} />
                </div>
                <div>
                  <h3 className="text-base font-bold">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-600">{member.role}</p>
                  <p className="mt-2 text-sm text-ink-soft">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
