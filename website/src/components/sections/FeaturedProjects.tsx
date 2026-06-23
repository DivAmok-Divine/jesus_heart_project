import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import ProjectCard from '@/components/ui/ProjectCard';
import { featuredProjects } from '@/data/projects';

export default function FeaturedProjects() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Our Work"
        title="Projects that change lives"
        subtitle="From feeding families to empowering students and persons with disabilities — here is some of what we’ve accomplished together."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/projects" className="btn-secondary">
          View all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
