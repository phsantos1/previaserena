import { ArrowDown, Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '../data/spaData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#FAF8F5]"
    >
      {/* Subtle organic emerald aura */}
      <div
        className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-[#10B981]/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -left-32 w-[400px] h-[400px] rounded-full bg-[#16A34A]/6 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content - Left */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker (Clean text, no pill badge) */}
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-[#16A34A] font-semibold mb-6">
              <span className="w-8 h-[1px] bg-[#16A34A]/60" />
              <span>Salão de Beleza & Head Spa Urbano</span>
            </div>

            {/* Huge confident headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.4rem] font-light leading-[1.05] tracking-tight text-[#0A2417] text-balance">
              A calma que renova sua <span className="italic font-normal text-[#16A34A]">melhor versão</span>.
            </h1>

            {/* Single supporting sentence with generous breathing room */}
            <p className="mt-7 text-lg sm:text-xl text-[#3E5346] font-light leading-relaxed max-w-xl text-pretty">
              Rituais exclusivos de Head Spa com cascata morna, massagens terapêuticas e estética delicada em Formiga - MG.
            </p>

            {/* High-intent CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de agendar um horário no Serene SPA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-white bg-[#16A34A] hover:bg-[#15803d] active:scale-[0.98] transition-all duration-300 shadow-md rounded-sm"
              >
                Entrar em contato
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-xs tracking-[0.2em] uppercase font-semibold text-[#0A2417] hover:text-[#16A34A] border border-[#16A34A]/30 hover:border-[#16A34A] transition-all duration-300 rounded-sm bg-white/60 backdrop-blur-xs"
              >
                <Sparkles className="w-4 h-4 text-[#10B981]" />
                <span>Agendar Sessão</span>
              </button>
            </div>

            {/* Quick quiet reassurance */}
            <div className="mt-12 flex items-center gap-6 text-xs text-[#526B5C] font-light">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Atendimento exclusivo com hora marcada</span>
              </div>
              <span className="text-[#A4B8AB]">·</span>
              <div>Formiga - MG</div>
            </div>
          </div>

          {/* One breathtaking, dominant image - Right */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative architectural frame */}
              <div className="relative overflow-hidden rounded-t-[140px] rounded-b-2xl shadow-2xl border border-[#16A34A]/20 bg-[#FAF8F5]">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="Ritual de Head Spa e cuidados capilares no Serene SPA"
                  className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Gentle emerald overlay at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2417]/70 via-transparent to-transparent pointer-events-none" />

                {/* Subtitle tag integrated in photo */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#10B981] font-semibold block mb-1">
                    Experiência Exclusiva
                  </span>
                  <p className="font-serif text-2xl font-light italic">
                    Head Spa com Cascata Morna
                  </p>
                </div>
              </div>

              {/* Floating aesthetic stamp */}
              <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#16A34A]/15 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#10B981]/15 flex items-center justify-center text-[#16A34A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#0A2417] uppercase tracking-wider">
                    Paz &amp; Renovação
                  </p>
                  <p className="text-[11px] text-[#526B5C]">
                    Cuidado holístico do couro ao corpo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle invitation to scroll: next section peek */}
      <div className="w-full flex justify-center pt-8">
        <a
          href="#head-spa"
          className="group flex flex-col items-center gap-1.5 text-[11px] tracking-[0.25em] uppercase text-[#6B8576] hover:text-[#16A34A] transition-colors"
          aria-label="Rolar para a seção Head Spa"
        >
          <span>Descubra o ritual</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1 text-[#16A34A]" />
        </a>
      </div>
    </section>
  );
}
