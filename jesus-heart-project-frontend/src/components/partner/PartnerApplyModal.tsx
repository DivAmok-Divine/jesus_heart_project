import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Building2,
  HandHeart,
  Gift,
  Users,
  Loader2,
  CheckCircle2,
  Send,
  Heart,
} from 'lucide-react';
import Modal from '@/components/ui/Modal';
import { ORG, DONATION } from '@/lib/constants';
import { openPaystack } from '@/lib/paystack';

// Partnership types. `pay: true` → can involve money that can be sent now.
export const PARTNER_TYPES = [
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate & CSR',
    text: 'Align your company with a trusted cause and report real, measurable community impact.',
    pay: true,
  },
  {
    id: 'sponsor',
    icon: HandHeart,
    title: 'Sponsor a program',
    text: 'Fund a specific project — like the ICT centre — and transform an entire community.',
    pay: true,
  },
  {
    id: 'in-kind',
    icon: Gift,
    title: 'In-kind support',
    text: 'Donate equipment, food, books or services. Your resources go straight to the field.',
    pay: false,
  },
  {
    id: 'community',
    icon: Users,
    title: 'Faith & community',
    text: 'Churches, NGOs and local groups joining hands with us to reach further, together.',
    pay: false,
  },
];

const PAY_PRESETS = [250, 500, 1000, 2500];
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;
const SYM = DONATION.currency === 'GHS' ? '₵' : DONATION.currency === 'USD' ? '$' : '';

interface FormValues {
  name: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  initialType?: string;
}

export default function PartnerApplyModal({ open, onClose, initialType = 'corporate' }: Props) {
  const [type, setType] = useState(initialType);
  const [amount, setAmount] = useState('');
  const [skipMoney, setSkipMoney] = useState(false);
  const [payError, setPayError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();

  // Reset to the requested type each time the modal opens.
  useEffect(() => {
    if (open) {
      setType(initialType);
      setAmount('');
      setSkipMoney(false);
      setPayError('');
      setStatus('idle');
    }
  }, [open, initialType]);

  const current = PARTNER_TYPES.find((t) => t.id === type);
  const typeTitle = current?.title ?? type;
  const payType = current?.pay ?? false;
  const showMoney = payType && !skipMoney;
  const hasAmount = showMoney && Number(amount) > 0;

  const pickType = (id: string) => {
    setType(id);
    setAmount('');
    setSkipMoney(false);
    setPayError('');
  };

  const payNow = async () => {
    setPayError('');
    const email = getValues('email');
    if (!/^\S+@\S+\.\S+$/.test(email || '')) {
      setPayError('Please enter a valid email above first.');
      return;
    }
    if (!Number(amount) || Number(amount) < 1) {
      setPayError('Please choose or enter an amount.');
      return;
    }
    if (!DONATION.paystackPublicKey) {
      setPayError('Online payment isn’t active yet — send your application and we’ll arrange payment.');
      return;
    }
    setStatus('sending');
    try {
      await openPaystack({
        key: DONATION.paystackPublicKey,
        email,
        amount: Math.round(Number(amount) * 100),
        currency: DONATION.currency,
        metadata: {
          custom_fields: [
            { display_name: 'Partnership', variable_name: 'partnership', value: typeTitle },
            { display_name: 'Name', variable_name: 'name', value: getValues('name') || '' },
          ],
        },
        onSuccess: () => setStatus('sent'),
        onClose: () => setStatus('idle'),
      });
    } catch {
      setStatus('error');
      setPayError('Could not start payment. Please try again or send an application instead.');
    }
  };

  const onSubmit = async (data: FormValues) => {
    setStatus('sending');
    const subject = `Partnership application: ${typeTitle}`;
    const intended = hasAmount ? `${SYM}${Number(amount).toLocaleString()}` : '—';
    if (FORMSPREE_ID && FORMSPREE_ID !== 'xxxxxxxx') {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: subject,
            partnershipType: typeTitle,
            intendedContribution: intended,
            ...data,
          }),
        });
        if (res.ok) {
          setStatus('sent');
          reset();
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      const body = encodeURIComponent(
        `Partnership type: ${typeTitle}\nIntended contribution: ${intended}\nName: ${
          data.name
        }\nOrganization: ${data.organization || '—'}\nEmail: ${data.email}\nPhone: ${
          data.phone || '—'
        }\n\n${data.message}`
      );
      window.location.href = `mailto:${ORG.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setStatus('sent');
      reset();
    }
  };

  const inputClass =
    'w-full rounded-md border-2 border-black/10 px-3 py-3 text-sm outline-none focus:border-brand-400';

  return (
    <Modal open={open} onClose={onClose} label="Partnership application" size="3xl">
      <div className="p-6 sm:p-8">
        {status === 'sent' ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-500" />
            <h3 className="mt-4 text-2xl">Thank you! 🤝</h3>
            <p className="mt-2 text-ink-soft">
              We’ve received your details. Our team will reach out to you shortly to take the next
              step together.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button className="btn-secondary" onClick={() => setStatus('idle')}>
                Submit another
              </button>
              <button className="btn-ghost" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <span className="eyebrow">Apply to partner</span>
            <h3 className="mt-2 text-2xl sm:text-3xl">Start your partnership</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Choose how you’d like to partner and tell us a little about you.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
              {/* Type selector */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {PARTNER_TYPES.map((t) => {
                  const active = type === t.id;
                  return (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => pickType(t.id)}
                      className={`flex flex-col items-center gap-2 rounded-md border-2 p-3 text-center transition ${
                        active ? 'border-brand-600 bg-brand-50' : 'border-black/10 hover:border-brand-300'
                      }`}
                    >
                      <t.icon className={`h-5 w-5 ${active ? 'text-brand-600' : 'text-ink-muted'}`} />
                      <span className="text-xs font-semibold leading-tight text-ink">{t.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Smart money step (only for money-type partnerships) */}
              {payType && (
                <div className="mt-4 rounded-md bg-cream p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-ink">
                      Your contribution{' '}
                      {!skipMoney && <span className="font-normal text-ink-muted">(optional)</span>}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSkipMoney((s) => !s)}
                      className="text-xs font-semibold text-brand-600 underline"
                    >
                      {skipMoney ? 'Add a contribution' : 'Skip for now'}
                    </button>
                  </div>
                  {!skipMoney && (
                    <>
                      <div className="mt-3 grid grid-cols-4 gap-2">
                        {PAY_PRESETS.map((p) => (
                          <button
                            type="button"
                            key={p}
                            onClick={() => setAmount(String(p))}
                            className={`rounded-md border-2 py-2 text-sm font-bold transition ${
                              Number(amount) === p
                                ? 'border-brand-600 bg-brand-50 text-brand-700'
                                : 'border-black/10 text-ink-soft hover:border-brand-300'
                            }`}
                          >
                            {SYM}
                            {p.toLocaleString()}
                          </button>
                        ))}
                      </div>
                      <input
                        type="number"
                        min={1}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder={`Other amount (${SYM})`}
                        className={`${inputClass} mt-2`}
                      />
                      <p className="mt-2 text-xs text-ink-muted">
                        Pay securely now, or send it as an application and we’ll follow up.
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Fields */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    {...register('name', { required: 'Please enter your name' })}
                    placeholder="Full name *"
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1 text-xs text-brand-600">{errors.name.message}</p>}
                </div>
                <input
                  {...register('organization')}
                  placeholder="Organization (optional)"
                  className={inputClass}
                />
                <div>
                  <input
                    {...register('email', {
                      required: 'Please enter your email',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                    })}
                    placeholder="Email *"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-brand-600">{errors.email.message}</p>
                  )}
                </div>
                <input {...register('phone')} placeholder="Phone (optional)" className={inputClass} />
              </div>
              <div className="mt-4">
                <textarea
                  {...register('message', { required: 'Tell us how you’d like to help' })}
                  rows={3}
                  placeholder="How would you like to partner with us? *"
                  className={inputClass}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-brand-600">{errors.message.message}</p>
                )}
              </div>

              {(payError || status === 'error') && (
                <p className="mt-3 text-sm text-brand-600">
                  {payError || `Something went wrong. Please try again or email ${ORG.email}.`}
                </p>
              )}

              {/* Actions */}
              {hasAmount ? (
                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={payNow}
                    disabled={status === 'sending'}
                    className="btn-primary"
                  >
                    {status === 'sending' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Heart className="h-4 w-4" /> Pay {SYM}
                        {Number(amount).toLocaleString()} now
                      </>
                    )}
                  </button>
                  <button type="submit" disabled={status === 'sending'} className="btn-secondary">
                    <Send className="h-4 w-4" /> Send as application
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary mt-5 w-full"
                >
                  {status === 'sending' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send application
                    </>
                  )}
                </button>
              )}
              <p className="mt-3 text-center text-xs text-ink-muted">
                Applying as: <span className="font-semibold text-brand-600">{typeTitle}</span>
              </p>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
}
