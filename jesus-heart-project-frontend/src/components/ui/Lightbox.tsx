import { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

export default function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  const prev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange]
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange]
  );

  const activeThumbRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  // Smoothly bring the active thumbnail into view whenever the image changes.
  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [index]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-stretch justify-center gap-3 bg-black/90 p-4 sm:gap-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close */}
      <button
        className="absolute right-4 top-4 z-30 rounded-full bg-brand-600/80 p-2 text-white backdrop-blur transition-colors hover:bg-brand-600"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Main image area — sits to the left of the thumbnail rail */}
      <div className="relative flex flex-1 items-center justify-center">
        <img
          src={images[index]}
          alt={`Photo ${index + 1}`}
          className="max-h-[88vh] max-w-full rounded-md object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Left edge zone — only appears when the cursor is near the left; click = previous */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous"
          className="absolute inset-y-0 left-0 flex w-[16%] items-center justify-start pl-3 opacity-0 transition-opacity duration-200 hover:opacity-100"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-600/70 via-brand-600/25 to-transparent backdrop-blur-[3px]" />
          <ChevronLeft className="relative h-9 w-9 text-white drop-shadow" />
        </button>

        {/* Right edge zone — click = next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next"
          className="absolute inset-y-0 right-0 flex w-[16%] items-center justify-end pr-3 opacity-0 transition-opacity duration-200 hover:opacity-100"
        >
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-l from-brand-600/70 via-brand-600/25 to-transparent backdrop-blur-[3px]" />
          <ChevronRight className="relative h-9 w-9 text-white drop-shadow" />
        </button>

        {/* Counter */}
        <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-600/80 px-3 py-1 text-sm text-white backdrop-blur">
          {index + 1} / {images.length}
        </span>
      </div>

      {/* Thumbnail rail (right) — smooth-scroll, click to select */}
      <div
        className="hidden w-20 shrink-0 flex-col gap-2 overflow-y-auto scroll-smooth py-1 sm:flex lg:w-24"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((src, i) => (
          <button
            key={src}
            ref={i === index ? activeThumbRef : null}
            onClick={() => onIndexChange(i)}
            aria-label={`View photo ${i + 1}`}
            aria-current={i === index}
            className={`relative aspect-square w-full shrink-0 overflow-hidden rounded-md ring-2 transition-all duration-200 ${
              i === index
                ? 'ring-brand-600'
                : 'opacity-50 ring-transparent hover:opacity-100'
            }`}
          >
            <img src={src} alt={`Thumbnail ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
