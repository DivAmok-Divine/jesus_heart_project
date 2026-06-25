import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Heart,
  Quote,
  GraduationCap,
  Tv,
  Award,
  Church,
  BookOpen,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import BooksShowcase from '@/components/sections/BooksShowcase';
import { founderProfile as f } from '@/data/founder';

export default function Founder() {
  return (
    <>
      <SEO
        title={`${f.name} — Founder`}
        description={`Meet ${f.name}, founder & CEO of The Jesus Heart Project — entrepreneur, broadcaster, author and philanthropist.`}
        image={f.photos[0]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img
            src={f.photos[1]}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-[center_20%] blur-md scale-150"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-brand-950/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80" />
        </div>

        <div className="container-page relative z-10 grid items-center gap-10 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-16">
          <Reveal>
            <img
              src={f.photos[0]}
              alt={f.name}
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-md object-cover object-top ring-1 ring-white/10"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/team"
              className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to team
            </Link>
            <span className="mt-5 block text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
              Founder &amp; CEO
            </span>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
              {f.name}
            </h1>
            <p className="mt-4 text-lg text-white/80">{f.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {f.hats.map((h) => (
                <span
                  key={h}
                  className="rounded-md bg-white/10 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15"
                >
                  {h}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/get-involved" className="btn-primary">
                <Heart className="h-4 w-4" /> Support his mission
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Biography */}
      <Section tone="cream">
        <div className="mx-auto max-w-3xl">
          <span className="eyebrow eyebrow-rule">His story</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.75rem]">
            The journey of Prince Amaglo
          </h2>
          <p className="dropcap mt-6 leading-relaxed text-ink-soft">{f.bio[0]}</p>
          <div className="mt-5 space-y-5 leading-relaxed text-ink-soft">
            {f.bio.slice(1, 3).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Photo strip */}
          <div className="my-8 grid grid-cols-3 gap-3">
            {f.photos.slice(1, 4).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${f.name} ${i + 2}`}
                loading="lazy"
                className="aspect-square w-full rounded-md object-cover object-top"
              />
            ))}
          </div>

          {/* Pull quote */}
          <figure className="my-8 border-l-4 border-brand-600 pl-5">
            <Quote className="h-7 w-7 text-brand-200" />
            <blockquote className="mt-2 font-display text-xl font-semibold leading-snug text-ink sm:text-2xl">
              {f.pullQuote}
            </blockquote>
          </figure>

          <div className="space-y-5 text-ink-soft">
            {f.bio.slice(3).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section>
        <SectionHeading eyebrow="Background" title="Journey & credentials" />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card relative h-full overflow-hidden p-6">
              {/* Oversized, tilted icon bleeding off the right edge as a soft brand watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[20px] top-[calc(50%-20px)] -translate-y-1/2 -rotate-[14deg] text-brand-600 opacity-[0.12]"
              >
                <GraduationCap className="h-16 w-16 sm:h-24 sm:w-24" />
              </span>

              {/* Invisible spacer keeps the exact height/position the old icon tile occupied */}
              <div aria-hidden="true" className="h-11 w-11" />

              <h3 className="relative z-10 mt-4 text-lg font-bold">Education & learning</h3>
              <ul className="relative z-10 mt-3 space-y-2 text-sm text-ink-soft">
                {f.education.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-md bg-brand-600" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card relative h-full overflow-hidden p-6">
              {/* Oversized, tilted icon bleeding off the right edge as a soft brand watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[20px] top-[calc(50%-20px)] -translate-y-1/2 -rotate-[14deg] text-brand-600 opacity-[0.12]"
              >
                <Tv className="h-16 w-16 sm:h-24 sm:w-24" />
              </span>

              {/* Invisible spacer keeps the exact height/position the old icon tile occupied */}
              <div aria-hidden="true" className="h-11 w-11" />

              <h3 className="relative z-10 mt-4 text-lg font-bold">Media collaborations</h3>
              <p className="relative z-10 mt-1 text-sm text-ink-muted">
                As executive director of Atsu Prince A. Multimedia.
              </p>
              <div className="relative z-10 mt-3 flex flex-wrap gap-2">
                {f.mediaHouses.map((m) => (
                  <span
                    key={m}
                    className="rounded-md bg-cream px-3 py-1.5 text-sm font-medium text-ink-soft"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card relative h-full overflow-hidden p-6">
              {/* Oversized, tilted icon bleeding off the right edge as a soft brand watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[20px] top-[calc(50%-20px)] -translate-y-1/2 -rotate-[14deg] text-brand-600 opacity-[0.12]"
              >
                <Award className="h-16 w-16 sm:h-24 sm:w-24" />
              </span>

              {/* Invisible spacer keeps the exact height/position the old icon tile occupied */}
              <div aria-hidden="true" className="h-11 w-11" />

              <h3 className="relative z-10 mt-4 text-lg font-bold">Awards & recognition</h3>
              <ul className="relative z-10 mt-3 space-y-3">
                {f.awards.map((a) => (
                  <li key={a.title}>
                    <div className="text-sm font-semibold text-ink">{a.title}</div>
                    <div className="text-xs text-ink-muted">
                      {a.org} · {a.year}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="card relative h-full overflow-hidden p-6">
              {/* Oversized, tilted icon bleeding off the right edge as a soft brand watermark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-[20px] top-[calc(50%-20px)] -translate-y-1/2 -rotate-[14deg] text-brand-600 opacity-[0.12]"
              >
                <Church className="h-16 w-16 sm:h-24 sm:w-24" />
              </span>

              {/* Invisible spacer keeps the exact height/position the old icon tile occupied */}
              <div aria-hidden="true" className="h-11 w-11" />

              <h3 className="relative z-10 mt-4 text-lg font-bold">Faith & community</h3>
              <p className="relative z-10 mt-3 text-sm text-ink-soft">
                Prince’s philanthropy flows from his Christian faith. He worships and serves at the{' '}
                <strong className="text-ink">{f.church}</strong>, embodying a spirit of service and
                compassion.
              </p>
              <Link
                to="/about"
                className="relative z-10 mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
              >
                <BookOpen className="h-4 w-4" /> About the project
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Books */}
      <BooksShowcase />

      {/* CTA */}
      <section className="bg-brand-600 py-10 text-white sm:py-12 lg:py-16">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-2xl text-2xl text-white sm:text-3xl">
            Join Prince in serving the underprivileged
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Every gift and partnership helps The Jesus Heart Project bring hope to more communities.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/get-involved" className="btn-gold">
              <Heart className="h-4 w-4" /> Support the mission
            </Link>
            <Link
              to="/team"
              className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-600"
            >
              <ArrowLeft className="h-4 w-4" /> Meet the team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
