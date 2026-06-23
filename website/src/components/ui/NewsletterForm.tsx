import { useState } from 'react';
import { Send, Check } from 'lucide-react';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

/** Footer newsletter signup. Posts to Formspree if configured, else falls back to mailto. */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    if (FORMSPREE_ID && FORMSPREE_ID !== 'xxxxxxxx') {
      try {
        await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ email, _subject: 'Newsletter signup' }),
        });
      } catch {
        /* ignore */
      }
    }
    setDone(true);
    setEmail('');
  };

  if (done) {
    return (
      <p className="mt-3 inline-flex items-center gap-2 text-sm text-brand-400">
        <Check className="h-4 w-4" /> Thanks for subscribing!
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="mt-3 flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
        className="min-w-0 flex-1 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 outline-none focus:border-brand-400"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex items-center justify-center rounded-md bg-brand-600 px-3 text-white hover:bg-brand-700"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
