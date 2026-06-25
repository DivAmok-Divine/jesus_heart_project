import { useMemo, useState } from 'react';
import { Heart, Loader2, CheckCircle2, Smartphone, Sparkles } from 'lucide-react';
import { DONATION, ORG } from '@/lib/constants';
import { givingTiers } from '@/data/giving';
import { openPaystack } from '@/lib/paystack';
import type { GivingTier } from '@/types';

type Frequency = 'one-time' | 'monthly';

interface DonateFormProps {
  /** Program / fund this gift supports (designated giving). */
  designation?: string;
  /** Impact giving levels; falls back to the default tiers. */
  tiers?: GivingTier[];
  title?: string;
}

const sym = () => (DONATION.currency === 'GHS' ? '₵' : DONATION.currency === 'USD' ? '$' : '');

export default function DonateForm({ designation, tiers, title }: DonateFormProps) {
  const levels = tiers && tiers.length ? tiers : givingTiers;
  const [amount, setAmount] = useState<number>(levels[0]?.amount ?? 100);
  const [custom, setCustom] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const finalAmount = custom ? Number(custom) : amount;
  const keyConfigured = Boolean(DONATION.paystackPublicKey);
  const s = sym();

  // charity:water-style dynamic impact: the best tier at or below the amount
  const matchedImpact = useMemo(() => {
    const sorted = [...levels].sort((a, b) => a.amount - b.amount);
    let match: GivingTier | undefined;
    for (const t of sorted) if (finalAmount >= t.amount) match = t;
    return match;
  }, [levels, finalAmount]);

  const handleDonate = async () => {
    setError('');
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email so we can send your receipt.');
      return;
    }
    if (!finalAmount || finalAmount < 1) {
      setError('Please choose or enter a valid amount.');
      return;
    }
    if (!keyConfigured) {
      setError('Online giving is not yet activated. Please use the Mobile Money details below.');
      return;
    }
    setLoading(true);
    try {
      await openPaystack({
        key: DONATION.paystackPublicKey,
        email,
        amount: Math.round(finalAmount * 100),
        currency: DONATION.currency,
        metadata: {
          custom_fields: [
            { display_name: 'Donor Name', variable_name: 'donor_name', value: name },
            { display_name: 'Frequency', variable_name: 'frequency', value: frequency },
            {
              display_name: 'Designation',
              variable_name: 'designation',
              value: designation ?? 'Where needed most',
            },
          ],
        },
        onSuccess: () => {
          setDone(true);
          setLoading(false);
        },
        onClose: () => setLoading(false),
      });
    } catch {
      setError('We could not start the payment. Please try again or use Mobile Money below.');
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="card p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-green-500" />
        <h3 className="mt-4 text-2xl">Thank you! 💖</h3>
        <p className="mt-2 text-ink-soft">
          Your generosity helps us bring food, education and hope to those who need it most. A
          receipt is on its way to your email.
        </p>
        <button className="btn-secondary mt-6" onClick={() => setDone(false)}>
          Make another gift
        </button>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-8">
      <h3 className="text-2xl">{title ?? 'Make a donation'}</h3>
      {designation && (
        <p className="mt-1 text-sm text-ink-soft">
          You’re supporting: <span className="font-semibold text-brand-600">{designation}</span>
        </p>
      )}

      {/* Frequency */}
      <div className="mt-5 grid grid-cols-2 gap-2 rounded-md bg-brand-50 p-1">
        {(['one-time', 'monthly'] as Frequency[]).map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className={`rounded-md py-2 text-sm font-semibold capitalize transition ${
              frequency === f ? 'bg-brand-600 text-white' : 'text-brand-700'
            }`}
          >
            {f.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Impact tiers */}
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {levels.map((t) => {
          const active = !custom && amount === t.amount;
          return (
            <button
              key={t.amount}
              onClick={() => {
                setAmount(t.amount);
                setCustom('');
              }}
              className={`rounded-md border-2 p-3 text-left transition ${
                active ? 'border-brand-600 bg-brand-50' : 'border-black/10 hover:border-brand-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">
                  {s}
                  {t.amount.toLocaleString()}
                </span>
                <span className="text-xs font-semibold text-brand-600">{t.title}</span>
              </div>
              <p className="mt-1 text-xs leading-snug text-ink-muted">{t.impact}</p>
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div className="mt-3 flex items-center rounded-md border-2 border-black/10 px-3 focus-within:border-brand-400">
        <span className="text-ink-muted">{s}</span>
        <input
          type="number"
          min={1}
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="Enter another amount"
          className="w-full bg-transparent px-2 py-3 text-sm outline-none"
        />
      </div>

      {/* Dynamic impact message */}
      {matchedImpact && (
        <div className="mt-3 flex items-start gap-2 rounded-md bg-gold-500/10 p-3 text-sm text-ink-soft">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
          <span>
            Your {s}
            {finalAmount.toLocaleString()} gift {frequency === 'monthly' ? 'each month ' : ''}
            — <strong className="text-ink">{matchedImpact.impact}</strong>
            {frequency === 'monthly' && (
              <>
                {' '}
                That’s {s}
                {(finalAmount * 12).toLocaleString()} of impact a year.
              </>
            )}
          </span>
        </div>
      )}

      {/* Donor details */}
      <div className="mt-4 grid gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="rounded-md border-2 border-black/10 px-3 py-3 text-sm outline-none focus:border-brand-400"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email (for your receipt)"
          required
          className="rounded-md border-2 border-black/10 px-3 py-3 text-sm outline-none focus:border-brand-400"
        />
      </div>

      {error && <p className="mt-3 text-sm font-medium text-brand-600">{error}</p>}

      <button onClick={handleDonate} disabled={loading} className="btn-primary mt-5 w-full">
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <Heart className="h-4 w-4" /> Give {s}
            {(finalAmount || 0).toLocaleString()}
            {frequency === 'monthly' ? '/mo' : ''}
          </>
        )}
      </button>

      {/* Mobile Money fallback */}
      <div className="mt-6 rounded-md bg-brand-50 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
          <Smartphone className="h-4 w-4" /> Prefer Mobile Money?
        </div>
        <p className="mt-1 text-sm text-ink-soft">
          Send your gift via MoMo to <strong>{ORG.phones[1]}</strong> and message us on{' '}
          <a
            href={`https://wa.me/${ORG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-600 underline"
          >
            WhatsApp
          </a>{' '}
          so we can thank you and send a receipt.
        </p>
      </div>
    </div>
  );
}
