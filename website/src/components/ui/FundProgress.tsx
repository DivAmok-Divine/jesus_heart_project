import type { ProjectFund } from '@/types';

const symbol = (c: string) => (c === 'GHS' ? '₵' : c === 'USD' ? '$' : `${c} `);

export default function FundProgress({ fund }: { fund: ProjectFund }) {
  const pct = Math.min(100, Math.round((fund.raised / fund.goal) * 100));
  const s = symbol(fund.currency);

  return (
    <div>
      <div className="flex items-end justify-between text-sm">
        <span className="font-bold text-ink">
          {s}
          {fund.raised.toLocaleString()}
          <span className="font-normal text-ink-muted">
            {' '}
            raised of {s}
            {fund.goal.toLocaleString()}
          </span>
        </span>
        <span className="font-semibold text-brand-600">{pct}%</span>
      </div>
      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-md bg-brand-50">
        <div className="h-full rounded-md bg-brand-600 transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-ink-muted">
        {typeof fund.donors === 'number' && <span>{fund.donors} donors</span>}
        {fund.placeholder && (
          <span className="rounded bg-gold-500/20 px-2 py-0.5 font-medium text-gold-600">
            Sample figures — to be updated
          </span>
        )}
      </div>
    </div>
  );
}
