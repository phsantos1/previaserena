import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, SPA_PHONE_DISPLAY } from '../data/spaData';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <a
        href={getWhatsAppUrl('Olá! Gostaria de falar com o Serene SPA.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar no WhatsApp oficial do Serene SPA: ${SPA_PHONE_DISPLAY}`}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#16A34A] hover:bg-[#15803d] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]"
      >
        <MessageCircle className="w-5 h-5 fill-white text-white shrink-0 group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wider pr-1">
          WhatsApp SPA
        </span>

        {/* Gentle ambient pulse */}
        <span
          className="absolute -inset-1 rounded-full bg-[#16A34A]/30 animate-ping -z-10 pointer-events-none"
          aria-hidden="true"
        />
      </a>
    </aside>
  );
}
