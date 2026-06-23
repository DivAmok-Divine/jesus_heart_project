// Lightweight loader for the Paystack inline checkout script.
// Paystack supports Mobile Money (MTN, Telecel, AT) and cards in Ghana.

let loadPromise: Promise<void> | null = null;

export function loadPaystack(): Promise<void> {
  if (window.PaystackPop) return Promise.resolve();
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Paystack'));
    document.body.appendChild(script);
  });

  return loadPromise;
}

export interface PaystackOptions {
  key: string;
  email: string;
  amount: number; // in minor units (kobo/pesewas)
  currency: string;
  metadata?: Record<string, unknown>;
  onClose?: () => void;
  onSuccess?: (reference: string) => void;
}

export async function openPaystack(opts: PaystackOptions): Promise<void> {
  await loadPaystack();
  if (!window.PaystackPop) throw new Error('Paystack not available');

  const handler = window.PaystackPop.setup({
    key: opts.key,
    email: opts.email,
    amount: opts.amount,
    currency: opts.currency,
    metadata: opts.metadata,
    channels: ['mobile_money', 'card', 'bank', 'ussd'],
    callback: (response: { reference: string }) => opts.onSuccess?.(response.reference),
    onClose: () => opts.onClose?.(),
  });
  handler.openIframe();
}
