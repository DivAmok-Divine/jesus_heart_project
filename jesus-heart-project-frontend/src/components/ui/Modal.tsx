import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { X } from 'lucide-react';

const SIZES = {
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
} as const;

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Accessible label for the dialog */
  label?: string;
  size?: keyof typeof SIZES;
}

export default function Modal({ open, onClose, children, label, size = '2xl' }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm sm:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <div
        className={`relative my-8 w-full ${SIZES[size]} rounded-md bg-white shadow-lift`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 rounded-md p-2 text-ink-muted transition-colors hover:bg-cream hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}
