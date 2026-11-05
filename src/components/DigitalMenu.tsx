import { useState } from 'react';
import { Clock, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { SPA_SERVICES, getWhatsAppUrl } from '../data/spaData';
import { ServiceItem } from '../types';

interface DigitalMenuProps {
  onSelectServiceForBooking: (serviceId: string) => void;
}

export default function DigitalMenu({ onSelectServiceForBooking }: DigitalMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Rituais' },
    { id: 'head-spa', label: 'Head Spa' },
    { id: 'massagem', label: 'Massagens & Terapias' },
    { id: 'estetica', label: 'Estética Corporal' },
    { id: 'cuidados', label: 'Cuidados & Spa' },
  ];

  const filteredServices = SPA_SERVICES.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="cardapio" className="py-24 md:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading: Centered & Architectural */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#16A34A] font-semibold mb-4">
            <span className="w-6 h-[1px] bg-[#16A34A]" />
            <span>Cardápio Digital Serene</span>
            <span className="w-6 h-[1px] bg-[#16A34A]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#0A2417] leading-[1.1]">
            Rituais pensados para a sua <span className="italic text-[#16A34A]">renovação</span>.
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#526B5C] font-light max-w-xl mx-auto">
            Escolha o tratamento ideal e agende com exclusividade diretamente com nossa equipe.
          </p>

          {/* Interactive Filter Control - Clean Segmented Buttons (Compliant with frontend-design rule) */}
          <div className="mt-10 inline-flex flex-wrap justify-center gap-2 p-1.5 bg-[#F0ECE6] rounded-xl border border-[#16A34A]/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-lg transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#0A2417] shadow-sm border border-[#16A34A]/20'
                    : 'text-[#526B5C] hover:text-[#0A2417]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredServices.map((service, index) => {
            const isFeatured = service.isSignature || index === 0;
            return (
              <article
                key={service.id}
                className={`group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                  isFeatured
                    ? 'border-[#10B981]/40 ring-1 ring-[#10B981]/20'
                    : 'border-[#16A34A]/12 hover:border-[#16A34A]/30'
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 h-full">
                  {/* Photo Column */}
                  <div className="sm:col-span-5 relative min-h-[220px] sm:min-h-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />

                    {service.isSignature && (
                      <div className="absolute top-3 left-3 bg-[#0A2417]/90 text-[#10B981] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm border border-[#10B981]/40 backdrop-blur-xs">
                        Ponto Forte
                      </div>
                    )}
                  </div>

                  {/* Information Column */}
                  <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                    <div>
                      {/* Quiet metadata */}
                      <div className="flex items-center gap-2 text-xs text-[#16A34A] font-medium mb-2">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.duration}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#6B8576]">Sessão individual</span>
                      </div>

                      <h3 className="font-serif text-2xl text-[#0A2417] font-medium leading-tight group-hover:text-[#16A34A] transition-colors">
                        {service.name}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-[#526B5C] font-light leading-relaxed line-clamp-2">
                        {service.shortDesc}
                      </p>

                      {/* Benefits bullets - concise & clean */}
                      <ul className="mt-4 space-y-1.5 text-xs text-[#2D4536]">
                        {service.benefits.slice(0, 2).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                            <span className="font-light">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 pt-5 border-t border-[#16A34A]/10 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="text-xs font-semibold tracking-wider text-[#0A2417] hover:text-[#16A34A] flex items-center gap-1 transition-colors"
                      >
                        <span>Detalhes</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectServiceForBooking(service.id)}
                          className="px-3.5 py-2 text-[11px] font-semibold tracking-wider uppercase text-[#16A34A] hover:bg-[#16A34A]/10 rounded-sm transition-colors border border-[#16A34A]/30"
                        >
                          Agendar
                        </button>

                        <a
                          href={getWhatsAppUrl(`Olá! Gostaria de agendar o procedimento de ${service.name} no Serene SPA.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#16A34A] hover:bg-[#15803d] text-white rounded-sm transition-colors shadow-xs"
                          aria-label={`Agendar ${service.name} no WhatsApp`}
                          title="Agendar no WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#16A34A]/20 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative h-56">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Fechar modal de detalhes"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedService.duration}</span>
              </div>
              <h3 className="font-serif text-3xl text-[#0A2417] font-normal mb-3">
                {selectedService.name}
              </h3>
              <p className="text-sm text-[#4A6353] leading-relaxed mb-6 font-light">
                {selectedService.fullDesc}
              </p>

              <div className="space-y-2 mb-8 bg-[#F8FAF8] p-4 rounded-xl border border-[#16A34A]/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0A2417] mb-2">
                  Benefícios do Procedimento:
                </p>
                {selectedService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#2D4536]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={getWhatsAppUrl(`Olá! Vi os detalhes do ritual ${selectedService.name} no site e quero agendar meu horário.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-semibold tracking-widest uppercase text-center rounded-sm transition-colors shadow-sm"
                >
                  Agendar via WhatsApp
                </a>
                <button
                  onClick={() => {
                    const id = selectedService.id;
                    setSelectedService(null);
                    onSelectServiceForBooking(id);
                  }}
                  className="px-5 py-3.5 border border-[#0A2417] text-[#0A2417] hover:bg-[#0A2417] hover:text-white text-xs font-semibold tracking-widest uppercase rounded-sm transition-colors"
                >
                  Online
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
