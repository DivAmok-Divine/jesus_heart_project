import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import StampBadge from '@/components/ui/StampBadge';

// Outreach photos that rotate in the "Who we are" collage.
const IMAGES = [
  '/images/projects/dining/img-1.jpg',
  '/images/gallery/img-3.jpg',
  '/images/gallery/img-5.jpg',
  '/images/projects/back-to-school/img-6.jpg',
  '/images/projects/pwd/img-4.jpg',
  '/images/gallery/img-7.jpg',
];

const ROTATE_MS = 6000;
const OFFSET = 3; // 2nd frame shows a different photo than the 1st

/** A frame that crossfades through the image set, showing the image at `active`. */
function Frame({
  active,
  className,
  alt,
}: {
  active: number;
  className: string;
  alt: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-md shadow-card ${className}`}>
      {IMAGES.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={idx === active ? alt : ''}
          aria-hidden={idx !== active}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            idx === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default function MissionPreview() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => setI((x) => (x + 1) % IMAGES.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Section tone="cream">
      <div className="relative">
        {/* Rubber-stamp badge, top-right of the section */}
        <StampBadge className="pointer-events-none absolute right-4 top-2 z-20 hidden h-24 w-24 text-brand-600/90 sm:block lg:right-8 lg:top-4 lg:h-28 lg:w-28" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Frame active={i} alt="Community food outreach" className="aspect-[3/4] w-full" />
              <Frame
                active={(i + OFFSET) % IMAGES.length}
                alt="Sharing food and supplies"
                className="mt-10 aspect-[3/4] w-full"
              />
            </div>
          </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow eyebrow-rule">Who we are</span>
          {/* pr on lg reserves clearance for the top-right StampBadge so the heading
              never wraps underneath it as the text column narrows. */}
          <h2 className="mt-4 max-w-xl text-3xl leading-tight sm:text-4xl lg:pr-40 lg:text-[2.75rem]">
            Faith in action, <span className="italic text-brand-700">compassion</span> in practice
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Founded in Tamale, The Jesus Heart Project extends a helping hand to the marginalized,
            guided by the teachings of Christ’s love and empathy. Through practical initiatives and
            spiritual support, we provide essential resources, education and a sense of belonging.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Our mission is to empower individuals and families to overcome poverty and achieve
            lasting change — creating a community where justice, kindness and unity are lived out.
          </p>
          <Link to="/about" className="btn-secondary mt-8">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        </div>
      </div>
    </Section>
  );
}
