interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${
        subtitle ? 'mb-12' : 'mb-10'
      }`}
    >
      {eyebrow && (
        <span
          className={`eyebrow eyebrow-rule ${
            align === 'center' ? 'justify-center' : ''
          } ${light ? 'text-gold-400' : ''}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-[2rem] leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-xl text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/80' : 'text-ink-soft'
          } ${align === 'left' ? 'ml-0' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
