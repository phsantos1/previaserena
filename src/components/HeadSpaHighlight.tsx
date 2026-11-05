import { Droplets, Sparkles, Wind, Heart, Clock } from 'lucide-react';
import { getWhatsAppUrl } from '../data/spaData';

interface HeadSpaHighlightProps {
  onSelectService: (serviceId: string) => void;
}

export default function HeadSpaHighlight({ onSelectService }: HeadSpaHighlightProps) {
  const steps = [
    {
      num: '01',
      title: 'Desintoxicação & Esfoliação',
      desc: 'Remoção suave de resíduos e ativação da microcirculação com óleos essenciais.',
      icon: Wind,
    },
    {
      num: '02',
      title: 'Cascata de Água Morna',
      desc: 'O arco de água em fluxo contínuo induz ondas cerebrais de relaxamento profundo.',
      icon: Droplets,
    },
    {
      num: '03',
      title: 'Massagem Craniana & Nuca',
      desc: 'Pressões terapêuticas que desfazem nós de estresse e aliviam cefaleias e fadiga.',
      icon: Heart,
    },
    {
      num: '04',
      title: 'Nutrição & Brilho Natural',
      desc: 'Finalização com máscara botânica e selagem térmica reconfortante dos fios.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="head-spa" className="py-24 md:py-36 bg-[#0A2417] text-[#FAF8F5] relative overflow-hidden">
      {/* Decorative luxury emerald light glow */}
      <div
        className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-[#10B981]/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-[#16A34A]/10 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Inverted rhythm: large photo on the left, refined editorial on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image & Atmosphere - Left Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main picture: Scalp care / hair spa / relaxing wash */}
              <div className="relative rounded-2xl overflow-hidden border border-[#10B981]/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
                  alt="Sessão imersiva de Head Spa no Serene SPA em Formiga"
                  className="w-full h-[520px] object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2417] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#10B981] font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Duração: 60 a 90 minutos de pura imersão</span>
                  </div>
                  <p className="font-serif text-xl italic text-white/95">
                    "O corpo descansa onde a mente encontra paz."
                  </p>
                </div>
              </div>

              {/* Decorative accent card */}
              <div className="absolute -top-6 -right-6 bg-[#0E3522] border border-[#10B981]/40 p-5 rounded-xl shadow-xl hidden sm:block max-w-[200px]">
                <span className="text-[10px] uppercase tracking-widest text-[#10B981] font-semibold block mb-1">
                  Ponto Forte
                </span>
                <p className="font-serif text-lg text-white font-normal leading-snug">
                  Ritual Exclusivo em Formiga
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content - Right Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-[#10B981] font-semibold mb-4">
              <span className="w-8 h-[1px] bg-[#10B981]" />
              <span>Experiência Assinatura</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.1] text-white">
              Head Spa: o ápice do <span className="italic text-[#10B981]">relaxamento sensorial</span>.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#BFD4C6] font-light leading-relaxed max-w-xl">
              Mais do que um tratamento capilar, uma cerimônia de descompressão. A união da hidroterapia morna com a aromaterapia e toques craneofaciais que calam o ruído do dia a dia.
            </p>

            {/* The 4 Ritual Steps */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="p-5 rounded-lg bg-[#0E3522]/60 border border-[#10B981]/15 hover:border-[#10B981]/40 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#10B981] font-semibold tracking-wider">
                        {step.num}
                      </span>
                      <Icon className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <h3 className="font-serif text-lg text-white font-medium mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#9BB5A4] leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectService('head-spa')}
                className="px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-[#0A2417] text-xs font-bold tracking-[0.2em] uppercase rounded-sm shadow-lg transition-all duration-300 hover:shadow-[#10B981]/20"
              >
                Agendar Head Spa
              </button>

              <a
                href={getWhatsAppUrl('Olá! Quero saber valores e disponibilidade para o ritual de Head Spa no Serene SPA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#10B981] hover:text-white border border-[#10B981]/40 hover:border-[#10B981] rounded-sm transition-all"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
