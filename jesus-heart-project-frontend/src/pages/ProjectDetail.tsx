import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Calendar,
  MapPin,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Heart,
  Clock,
  Wallet,
  Quote,
  Users,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import Lightbox from '@/components/ui/Lightbox';
import FundProgress from '@/components/ui/FundProgress';
import DonateForm from '@/components/donate/DonateForm';
import PartnerTile from '@/components/ui/PartnerTile';
import { getProject, projects } from '@/data/projects';
import { getPartnerByName } from '@/data/partners';
import { DONATION } from '@/lib/constants';

const money = (n: number, c = 'USD') =>
  `${c === 'GHS' ? '₵' : c === 'USD' ? '$' : c + ' '}${n.toLocaleString()}`;

const SYM = DONATION.currency === 'GHS' ? '₵' : DONATION.currency === 'USD' ? '$' : '';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!project) {
    return (
      <Section>
        <div className="py-16 text-center">
          <h1 className="text-3xl">Project not found</h1>
          <Link to="/projects" className="btn-secondary mt-6">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </div>
      </Section>
    );
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const bc = project.budgetCurrency ?? 'USD';

  return (
    <>
      <SEO title={project.title} description={project.summary} image={project.cover} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
        </div>
        <div className="container-page relative py-10 sm:py-12 lg:py-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-md px-3 py-1 text-xs font-bold ${
                project.status === 'upcoming' ? 'bg-gold-500 text-ink' : 'bg-brand-600 text-white'
              }`}
            >
              {project.status === 'upcoming' ? 'Upcoming' : 'Completed'}
            </span>
            <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-semibold">
              {project.category}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          {project.tagline && <p className="mt-3 max-w-2xl text-lg text-white/85">{project.tagline}</p>}
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-brand-400" /> {project.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-400" /> {project.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-400" /> {project.metricValue}{' '}
              {project.metricLabel}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div>
            {project.need && (
              <Reveal>
                <h2 className="text-2xl sm:text-3xl">The need</h2>
                <p className="dropcap mt-4 leading-relaxed text-ink-soft">{project.need[0]}</p>
                {project.need.slice(1).map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-ink-soft">
                    {p}
                  </p>
                ))}
              </Reveal>
            )}

            <Reveal>
              <h2 className="mt-10 text-2xl">{project.status === 'upcoming' ? 'The plan' : 'What we did'}</h2>
              {project.description.map((p, i) => (
                <p key={i} className="mt-4 text-ink-soft">
                  {p}
                </p>
              ))}
              <ul className="mt-5 space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-ink-soft">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Impact stats */}
            {project.stats && (
              <Reveal>
                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {project.stats.map((st) => (
                    <div key={st.label} className="rounded-md bg-cream p-4 text-center">
                      <div className="font-display text-2xl font-extrabold text-brand-600">
                        {st.value}
                      </div>
                      <div className="mt-1 text-xs text-ink-muted">{st.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {/* Timeline */}
            {project.timeline && (
              <Reveal>
                <h2 className="mt-10 flex items-center gap-2 text-2xl">
                  <Clock className="h-6 w-6 text-brand-600" /> Programme timeline
                </h2>
                <ol className="mt-5 space-y-4 border-l-2 border-brand-100 pl-5">
                  {project.timeline.map((ph) => (
                    <li key={ph.phase} className="relative">
                      <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-md bg-brand-600" />
                      <div className="text-xs font-bold uppercase tracking-wide text-brand-600">
                        {ph.phase}
                      </div>
                      <div className="font-semibold text-ink">{ph.title}</div>
                      <div className="text-sm text-ink-soft">{ph.detail}</div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}

            {/* Budget */}
            {project.budget && (
              <Reveal>
                <h2 className="mt-10 flex items-center gap-2 text-2xl">
                  <Wallet className="h-6 w-6 text-brand-600" /> Where the funds go
                </h2>
                <p className="mt-2 text-sm text-ink-muted">
                  Projected budget from the project proposal ({bc}).
                </p>
                <div className="mt-4 overflow-hidden rounded-md ring-1 ring-black/5">
                  {project.budget.map((b, i) => {
                    const pct = project.budgetTotal
                      ? Math.round((b.amount / project.budgetTotal) * 100)
                      : 0;
                    return (
                      <div
                        key={b.label}
                        className={`flex items-center justify-between gap-4 px-4 py-3 text-sm ${
                          i % 2 ? 'bg-white' : 'bg-cream'
                        }`}
                      >
                        <span className="flex-1 text-ink-soft">{b.label}</span>
                        <span className="hidden text-xs text-ink-muted sm:inline">{pct}%</span>
                        <span className="w-24 text-right font-semibold text-ink">
                          {money(b.amount, bc)}
                        </span>
                      </div>
                    );
                  })}
                  {project.budgetTotal && (
                    <div className="flex items-center justify-between bg-brand-600 px-4 py-3 text-sm font-bold text-white">
                      <span>Total project cost</span>
                      <span>{money(project.budgetTotal, bc)}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            )}

            {/* Partners involved */}
            {project.partnersInvolved && project.partnersInvolved.length > 0 && (
              <Reveal>
                <h2 className="mt-10 flex items-center gap-2 text-2xl">
                  <Users className="h-6 w-6 text-brand-600" /> Partners involved
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {project.partnersInvolved.map((p) => (
                    <PartnerTile key={p} partner={getPartnerByName(p)} />
                  ))}
                </div>
              </Reveal>
            )}

            {/* Testimonial */}
            {project.testimonial && (
              <Reveal>
                <figure className="mt-10 rounded-md bg-cream p-6">
                  <Quote className="h-8 w-8 text-brand-200" />
                  <blockquote className="mt-2 text-lg font-medium text-ink">
                    “{project.testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-ink-muted">
                    — {project.testimonial.name}, {project.testimonial.role}
                  </figcaption>
                </figure>
              </Reveal>
            )}
          </div>

          {/* Sticky sidebar */}
          <Reveal delay={0.1}>
            <div className="sticky top-24 space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-bold">
                  {project.status === 'upcoming' ? 'Expected outcomes' : 'Outcomes & impact'}
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                      <span className="text-sm text-ink-soft">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                {project.fund && <FundProgress fund={project.fund} />}
                <p className={`text-sm text-ink-soft ${project.fund ? 'mt-4' : ''}`}>
                  {project.status === 'upcoming'
                    ? 'Help us bring this program to life.'
                    : 'Support outreach like this one.'}
                </p>
                <a href="#support" className="btn-primary mt-4 w-full">
                  <Heart className="h-4 w-4" /> Support this program
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Support this program */}
      <Section id="support" tone="cream">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Make a difference</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">Support this program</h2>
            <p className="mt-4 text-ink-soft">
              Your gift is designated to <strong>{project.title}</strong>. Choose an amount below and
              see exactly what your support provides.
            </p>
            {project.fund && (
              <div className="mt-6 card p-5">
                <FundProgress fund={project.fund} />
              </div>
            )}
            {project.tiers && (
              <ul className="mt-6 space-y-3">
                {project.tiers.map((t) => (
                  <li key={t.amount} className="flex items-start gap-3">
                    <Heart className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <span className="text-sm text-ink-soft">
                      <strong className="text-ink">
                        {SYM}
                        {t.amount.toLocaleString()}
                      </strong>{' '}
                      — {t.impact}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <DonateForm designation={project.title} tiers={project.tiers} title="Give to this program" />
          </Reveal>
        </div>
      </Section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <Section>
          <h2 className="mb-8 text-2xl">Photo gallery</h2>
          <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
            {project.gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightbox(i)}
                className="block w-full overflow-hidden rounded-md"
              >
                <img
                  src={src}
                  alt={`${project.title} photo ${i + 1}`}
                  loading="lazy"
                  className="w-full transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </Section>
      )}

      {lightbox !== null && (
        <Lightbox
          images={project.gallery}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
        />
      )}

      {/* Other projects */}
      <Section tone="cream">
        <h2 className="mb-8 text-2xl">More of our work</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="card group overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-bold leading-snug group-hover:text-brand-600">
                  {p.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
