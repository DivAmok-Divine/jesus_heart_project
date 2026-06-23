import { MessageCircle } from 'lucide-react';
import { ORG } from '@/lib/constants';

/** Floating WhatsApp "chat with us" button — the most-used channel in Ghana. */
export default function WhatsAppButton() {
  const href = `https://wa.me/${ORG.whatsapp}?text=${encodeURIComponent(
    `Hello ${ORG.name}, I’d like to know more about your work.`
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-3
        font-semibold text-white transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
