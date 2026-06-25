/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAYSTACK_PUBLIC_KEY: string;
  readonly VITE_DONATION_CURRENCY: string;
  readonly VITE_FORMSPREE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Paystack inline script global (loaded on demand)
interface PaystackPop {
  setup(options: Record<string, unknown>): { openIframe(): void };
}
interface Window {
  PaystackPop?: PaystackPop;
}
