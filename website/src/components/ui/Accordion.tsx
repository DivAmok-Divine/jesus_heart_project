import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  q: string;
  a: string;
}

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-black/10 overflow-hidden rounded-md ring-1 ring-black/5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink">{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-brand-600 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
