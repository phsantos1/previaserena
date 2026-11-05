import { useState } from 'react';
import { Calendar, Clock, User, Phone, Check, Sparkles } from 'lucide-react';
import { SPA_SERVICES, SPA_PHONE_RAW, TESTIMONIALS } from '../data/spaData';

interface BookingSectionProps {
  preselectedServiceId?: string;
}

export default function BookingSection({ preselectedServiceId }: BookingSectionProps) {
  const [selectedService, setSelectedService] = useState(preselectedServiceId || 'head-spa');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState<'manha' | 'tarde' | 'qualquer'>('qualquer');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;

    const chosenServiceObj = SPA_SERVICES.find((s) => s.id === selectedService);
    const serviceName = chosenServiceObj ? chosenServiceObj.name : 'Atendimento Geral';

    const periodLabel =
      preferredPeriod === 'manha'
        ? 'Período da Manhã'
        : preferredPeriod === 'tarde'
        ? 'Período da Tarde'
        : 'Qualquer horário disponível';

    const dateStr = preferredDate ? `para o dia ${preferredDate}` : 'na data mais próxima disponível';
    const notesStr = notes.trim() ? `\nObservação: ${notes.trim()}` : '';

    const text = `Olá, equipe Serene SPA! 🌿\n\nMeu nome é *${clientName.trim()}*${
      clientPhone.trim() ? ` (${clientPhone.trim()})` : ''
    }.\n\nGostaria de solicitar um agendamento para o ritual:\n✨ *${serviceName}*\n📅 Preferência: ${dateStr} (${periodLabel})${notesStr}\n\nPodem me confirmar a disponibilidade de horários? Obrigada!`;

    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${SPA_PHONE_RAW}?text=${encoded}`;

    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-24 md:py-36 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Testimonials Carousel / Editorial Block */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.28em] text-[#16A34A] font-semibold block mb-2">
              Experiências Reais
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#0A2417] font-light">
              O que dizem quem já vivenciou nossa serenidade
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#16A34A]/12 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-[#10B981] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <p className="font-serif text-base italic text-[#2D4536] leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#16A34A]/10">
                  <p className="text-xs font-semibold text-[#0A2417]">
                    {item.author}
                  </p>
                  <p className="text-[11px] text-[#6B8576]">
                    {item.treatment} · Formiga - MG
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form Layout */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#16A34A]/20 shadow-xl relative overflow-hidden">
          {/* Subtle background embellishment */}
          <div
            className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bg-[#10B981]/5 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#16A34A] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agendamento Online</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#0A2417] leading-tight">
              Reserve seu momento de <span className="italic text-[#16A34A]">paz</span>.
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#526B5C] font-light">
              Preencha os detalhes e nossa recepção confirmará os horários imediatamente via WhatsApp oficial.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Escolha do Ritual */}
            <div>
              <label htmlFor="service-select" className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-2">
                1. Escolha o Ritual ou Serviço
              </label>
              <select
                id="service-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-xl text-sm text-[#0A2417] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 transition-all font-sans"
              >
                {SPA_SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.duration}) {s.isSignature ? '★ Destaque' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Preferência de Data e Período */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="pref-date" className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-2">
                  2. Data de Preferência
                </label>
                <div className="relative">
                  <input
                    id="pref-date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-xl text-sm text-[#0A2417] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-2">
                  Período Preferido
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'manha', label: 'Manhã' },
                    { id: 'tarde', label: 'Tarde' },
                    { id: 'qualquer', label: 'Qualquer' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPreferredPeriod(p.id as any)}
                      className={`py-3 text-xs font-medium rounded-xl border transition-all ${
                        preferredPeriod === p.id
                          ? 'bg-[#16A34A] text-white border-[#16A34A] shadow-xs'
                          : 'bg-[#FAF8F5] text-[#4A6353] border-[#16A34A]/20 hover:border-[#16A34A]/50'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Seus Dados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="client-name" className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-2">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#16A34A] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="Ex: Amanda Silva"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-xl text-sm text-[#0A2417] placeholder:text-[#889E90] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="client-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-2">
                  Seu WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#16A34A] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="client-phone"
                    type="tel"
                    placeholder="(37) 99999-9999"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-xl text-sm text-[#0A2417] placeholder:text-[#889E90] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 transition-all font-sans"
                  />
                </div>
              </div>
            </div>

            {/* 4. Observações */}
            <div>
              <label htmlFor="client-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-2">
                Algum detalhe ou preferência especial? (Opcional)
              </label>
              <textarea
                id="client-notes"
                rows={2}
                placeholder="Ex: Primeira vez no Head Spa, foco em dores na nuca, etc."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-xl text-sm text-[#0A2417] placeholder:text-[#889E90] focus:outline-none focus:ring-2 focus:ring-[#16A34A]/40 transition-all font-sans"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#16A34A] hover:bg-[#15803d] active:scale-[0.99] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Solicitar Horário via WhatsApp</span>
                <span className="text-white/80">→</span>
              </button>

              <p className="text-center text-[11px] text-[#718A7B] mt-3">
                Ao clicar, você será direcionada para a conversa oficial no WhatsApp com os dados preenchidos.
              </p>
            </div>
          </form>

          {submitted && (
            <div className="mt-6 p-4 rounded-xl bg-[#F0FDF4] border border-[#16A34A]/30 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#16A34A]">
                <Check className="w-4 h-4" />
                <span>Pedido de agendamento enviado com sucesso!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
