import { useEffect, useCallback } from 'react';
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

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        className="absolute right-4 top-4 rounded-md bg-white/10 p-2 text-white hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        className="absolute left-4 rounded-md bg-white/10 p-2 text-white hover:bg-white/20"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <img
        src={images[index]}
        alt={`Photo ${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] rounded-md object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="absolute right-4 rounded-md bg-white/10 p-2 text-white hover:bg-white/20"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-md bg-white/10 px-3 py-1 text-sm text-white">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}
