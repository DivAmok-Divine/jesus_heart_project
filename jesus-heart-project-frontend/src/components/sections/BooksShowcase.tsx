import { BookOpen, Plus, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { books, type Book } from '@/data/books';
import { ORG } from '@/lib/constants';

const AUTHOR = 'Prince Kwakuvi Amaglo';

/** A book cover — uses a real image if provided, otherwise a stylized generated cover. */
function BookCover({ book }: { book: Book }) {
  if (book.cover) {
    return (
      <img
        src={book.cover}
        alt={book.title}
        className="aspect-[2/3] w-full rounded-md object-cover ring-1 ring-black/10"
      />
    );
  }
  return (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md bg-gradient-to-br from-brand-600 to-brand-900 ring-1 ring-black/10">
      {/* book spine */}
      <div className="absolute inset-y-0 left-0 w-3 bg-black/25" />
      <div className="absolute inset-y-0 left-3 w-px bg-white/20" />
      <div className="flex h-full flex-col items-center justify-center px-5 py-6 text-center text-white">
        <BookOpen className="h-8 w-8 text-gold-400" />
        <h3 className="mt-4 font-display text-lg font-bold leading-tight sm:text-xl">
          {book.title}
        </h3>
        {book.subtitle && <p className="mt-2 text-xs text-white/80">{book.subtitle}</p>}
        <span className="mt-auto pt-5 text-[10px] uppercase tracking-[0.2em] text-white/70">
          by {AUTHOR}
        </span>
      </div>
    </div>
  );
}

export default function BooksShowcase() {
  return (
    <Section tone="cream">
      <SectionHeading
        eyebrow="Author"
        title="Books by Prince Amaglo"
        subtitle="Get to know the mind behind the mission through his writing."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book, i) => (
          <Reveal key={book.title} delay={(i % 3) * 0.08}>
            <article className="card flex h-full flex-col gap-5 p-5 sm:flex-row">
              <div className="w-32 shrink-0 sm:w-28">
                <BookCover book={book} />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="text-lg font-bold leading-snug">{book.title}</h3>
                {book.year && <p className="text-xs text-ink-muted">{book.year}</p>}
                <p className="mt-2 flex-1 text-sm text-ink-soft">{book.description}</p>
                {book.tags && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {book.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-brand-50 px-2 py-1 text-[11px] font-medium text-brand-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {book.link ? (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
                  >
                    Get the book <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <a
                    href={`mailto:${ORG.email}?subject=${encodeURIComponent(`Enquiry about "${book.title}"`)}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
                  >
                    Enquire about this book <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}

        {/* Space for future titles */}
        <Reveal delay={(books.length % 3) * 0.08}>
          <div className="flex h-full min-h-[180px] flex-col items-center justify-center rounded-md border-2 border-dashed border-black/15 p-6 text-center">
            <Plus className="h-7 w-7 text-ink-muted" />
            <p className="mt-3 text-sm font-semibold text-ink">More titles coming soon</p>
            <p className="mt-1 text-xs text-ink-muted">
              New books by Prince will appear here as they’re published.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
