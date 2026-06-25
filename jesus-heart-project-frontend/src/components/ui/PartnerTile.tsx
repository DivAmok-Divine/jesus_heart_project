import type { Partner } from '@/types';

/** A partner logo tile (grayscale → colour on hover), with a clean name fallback. */
export default function PartnerTile({ partner }: { partner: Partner }) {
  const Tag = partner.website ? 'a' : 'div';
  const linkProps = partner.website
    ? { href: partner.website, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Tag
      {...linkProps}
      title={partner.name}
      className="group flex h-full min-h-[120px] flex-col items-center justify-center gap-3 rounded-md
        bg-white p-5 text-center ring-1 ring-ink/[0.06] transition-colors hover:ring-brand-300 sm:p-6"
    >
      {partner.logo ? (
        <>
          <img
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
            className="h-14 w-auto max-w-[80%] object-contain opacity-80 grayscale
              transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-16"
          />
          <span className="text-xs font-medium text-ink-muted">
            {partner.short ?? partner.name}
          </span>
        </>
      ) : (
        <span className="text-sm font-semibold leading-snug text-ink">{partner.name}</span>
      )}
    </Tag>
  );
}
