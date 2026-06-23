import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-bold ${
            project.status === 'upcoming'
              ? 'bg-gold-500 text-ink'
              : 'bg-brand-600 text-white'
          }`}
        >
          {project.status === 'upcoming' ? 'Upcoming' : project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {project.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {project.location.split(',')[0]}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold leading-snug text-ink group-hover:text-brand-600">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-ink-soft">{project.summary}</p>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
          Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
