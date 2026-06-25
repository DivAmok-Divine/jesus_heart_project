import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import { impactStats } from '@/data/stats';

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section className="relative z-10 -mt-20 sm:-mt-24">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-sand shadow-lift ring-1 ring-ink/[0.06] lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col items-center bg-white p-6 text-center sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={stat.icon} className="h-5 w-5" />
              </span>
              <div className="mt-4 font-display text-4xl font-semibold leading-none text-ink sm:text-[2.75rem]">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mx-auto mt-2 h-0.5 w-6 rounded-md bg-gold-500" />
              <div className="mt-3 text-sm font-medium text-ink-soft sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
