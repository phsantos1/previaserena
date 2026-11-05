import { MapPin, Phone, MessageCircle, ExternalLink, Heart } from 'lucide-react';
import { SPA_ADDRESS, SPA_MAPS_URL, SPA_PHONE_DISPLAY, getWhatsAppUrl } from '../data/spaData';

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-[#071F14] text-[#FAF8F5] pt-24 pb-12 relative overflow-hidden border-t border-[#10B981]/20">
      {/* Subtle organic glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#16A34A]/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-[#10B981]/15">
          {/* Brand & Concept - 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <img
                  src="/logo.png"
                  alt="Serene SPA"
                  className="w-12 h-12 object-contain rounded-full border border-[#10B981]/30 bg-white/5 p-0.5"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div>
                  <h3 className="font-serif text-3xl tracking-[0.06em] text-white">
                    SERENE SPA
                  </h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-[#10B981]">
                    Salão de Beleza &amp; Head Spa
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#A8C4B3] font-light leading-relaxed max-w-sm">
                Um refúgio de silêncio, beleza e acolhimento no coração de Formiga - MG. Onde o cuidado capilar, corporal e sensorial renovam o seu bem-estar.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#10B981]/15">
              <span className="text-xs uppercase tracking-widest text-[#10B981] font-semibold block mb-2">
                Atendimento Personalizado
              </span>
              <p className="text-xs text-[#8BAE97] font-light">
                Agendamentos individuais com privacidade e horário exclusivo.
              </p>
            </div>
          </div>

          {/* Contact Details - 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.28em] text-[#10B981] font-semibold">
              Contato &amp; Localização
            </h4>

            {/* Address */}
            <div className="space-y-2">
              <div className="flex items-start gap-2.5 text-xs text-[#A8C4B3]">
                <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <p className="font-light leading-relaxed">
                  {SPA_ADDRESS}
                </p>
              </div>
              <a
                href={SPA_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#10B981] hover:text-white transition-colors pl-6"
              >
                <span>Ver rota no Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Phone & WhatsApp */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#A8C4B3]">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <a
                  href={`tel:+5537998280838`}
                  className="hover:text-white transition-colors font-mono tracking-wider"
                >
                  {SPA_PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <a
                  href={getWhatsAppUrl('Olá! Gostaria de agendar um horário no Serene SPA em Formiga.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#10B981] hover:bg-[#059669] text-[#071F14] font-bold text-xs tracking-wider uppercase rounded-sm shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Oficial</span>
                </a>
              </div>
            </div>
          </div>

          {/* Location Map Visual - 4 cols */}
          <div className="lg:col-span-4">
            <div className="bg-[#0E2E1E] p-6 rounded-2xl border border-[#10B981]/20">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#10B981] font-semibold mb-3">
                Como Chegar
              </h4>
              <p className="text-xs text-[#A8C4B3] font-light leading-relaxed mb-4">
                Nosso espaço está situado na Rua Margarida Lourenço Soares em Formiga - MG, em localização tranquila com fácil estacionamento.
              </p>

              <div className="rounded-xl overflow-hidden border border-[#10B981]/30 relative aspect-video bg-[#071F14] flex flex-col items-center justify-center p-4 text-center group">
                <MapPin className="w-8 h-8 text-[#10B981] mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-serif text-lg text-white font-medium">
                  Serene SPA · Formiga - MG
                </span>
                <span className="text-[11px] text-[#8BAE97] mt-1 font-light">
                  Rua Margarida Lourenço Soares
                </span>

                <a
                  href={SPA_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-4 py-1.5 bg-[#10B981]/20 hover:bg-[#10B981] hover:text-[#071F14] text-[#10B981] text-[11px] font-semibold tracking-wider uppercase rounded transition-all flex items-center gap-1.5"
                >
                  <span>Abrir no GPS / Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9E88] font-light">
          <p>
            © {currentYear} Serene SPA. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Beleza, autocuidado e serenidade em Formiga - MG</span>
            <Heart className="w-3 h-3 text-[#10B981] fill-[#10B981] ml-1 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}
