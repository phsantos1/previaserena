import { SPA_PHONE_DISPLAY, getWhatsAppUrl } from '../data/spaData';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 md:py-36 bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Narrative - Left Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-[0.28em] text-[#16A34A] font-semibold mb-6">
              <span className="w-8 h-[1px] bg-[#16A34A]" />
              <span>O Refúgio Serene</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#0A2417] leading-[1.08] text-balance">
              Criado para desacelerar seus passos e <span className="italic text-[#16A34A]">cuidar de você</span>.
            </h2>

            <p className="mt-7 text-base sm:text-lg text-[#4A6353] font-light leading-relaxed max-w-lg">
              Em Formiga, o Serene SPA nasceu do desejo de proporcionar um intervalo sagrado na rotina. Aqui, cada atendimento é individual, silencioso e dedicado unicamente ao seu descanso e beleza.
            </p>

            {/* Three Editorial Anchors (natural numbering, no AI code prefixes) */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-serif text-xl text-[#16A34A] font-medium leading-none pt-0.5">
                  01
                </span>
                <div>
                  <h3 className="font-serif text-lg text-[#0A2417] font-medium">
                    Privacidade &amp; Hora Marcada
                  </h3>
                  <p className="text-xs text-[#5C7565] mt-1 font-light leading-relaxed">
                    Sem filas ou salas agitadas. Cada horário é reservado para que você desfrute de calma absoluta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-xl text-[#16A34A] font-medium leading-none pt-0.5">
                  02
                </span>
                <div>
                  <h3 className="font-serif text-lg text-[#0A2417] font-medium">
                    Técnicas Sensoriais &amp; Head Spa
                  </h3>
                  <p className="text-xs text-[#5C7565] mt-1 font-light leading-relaxed">
                    Especialistas no inovador Head Spa e massoterapias corporais com aromaterapia envolvente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="font-serif text-xl text-[#16A34A] font-medium leading-none pt-0.5">
                  03
                </span>
                <div>
                  <h3 className="font-serif text-lg text-[#0A2417] font-medium">
                    Higiene &amp; Produtos Selecionados
                  </h3>
                  <p className="text-xs text-[#5C7565] mt-1 font-light leading-relaxed">
                    Materiais descartáveis, protocolos estéreis e dermocosméticos botânicos de alta afinidade dérmica.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-4">
              <a
                href={getWhatsAppUrl('Olá! Gostaria de agendar uma visita ou horário no Serene SPA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#16A34A] hover:text-[#0A2417] transition-colors pb-1 border-b border-[#16A34A]"
              >
                <span>Fale diretamente com nossa equipe · {SPA_PHONE_DISPLAY}</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Luxury Visual Composition - Right Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Primary large image: Spa atmosphere / massage bed / botanical serenity */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#16A34A]/20">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                  alt="Espaço relaxante e acolhedor do Serene SPA em Formiga"
                  className="w-full h-[460px] object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Overlapping secondary detail photo: Natural botanicals and spa oils */}
              <div className="absolute -bottom-8 -left-8 w-48 sm:w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-[#F5F2EB] hidden sm:block">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=85"
                  alt="Óleos essenciais e botânicos Serene SPA"
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Clean text badge (no AI slop pill, elegant square tag) */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-5 py-4 rounded-xl border border-[#16A34A]/20 shadow-md">
                <p className="text-[11px] uppercase tracking-widest text-[#16A34A] font-semibold">
                  Serene SPA
                </p>
                <p className="font-serif text-lg text-[#0A2417] italic">
                  Formiga, Minas Gerais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
