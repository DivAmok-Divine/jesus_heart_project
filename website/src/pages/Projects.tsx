import { useState } from 'react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

const filters = ['All', 'Completed', 'Upcoming'] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');

  const shown = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return p.status === 'completed';
    return p.status === 'upcoming';
  });

  return (
    <>
      <SEO title="Our Work" description="Explore the humanitarian projects of The Jesus Heart Project — food outreach, student empowerment, disability inclusion and digital literacy." />
      <PageHeader
        eyebrow="Our Work"
        title="Projects that bring hope to life"
        subtitle="Every initiative is a step toward a more compassionate, empowered community."
        image="/images/projects/back-to-school/img-5.jpg"
      />

      <Section>
        <div className="mb-10 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md px-5 py-2 text-sm font-semibold transition ${
                filter === f
                  ? 'bg-brand-600 text-white'
                  : 'bg-cream text-ink-soft hover:bg-brand-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
