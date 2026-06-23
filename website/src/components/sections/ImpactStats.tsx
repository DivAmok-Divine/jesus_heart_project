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
    <section className="relative z-10 -mt-12">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-black/5 shadow-card lg:grid-cols-4">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center bg-white p-6 text-center sm:p-8"
            >
              <Icon name={stat.icon} className="h-7 w-7 text-brand-600" />
              <div className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium text-ink-muted sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
