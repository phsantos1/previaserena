import { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Sparkles } from 'lucide-react';
import { SPA_SERVICES, SPA_PHONE_RAW } from '../data/spaData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, initialServiceId }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(initialServiceId || 'head-spa');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState<'manha' | 'tarde' | 'qualquer'>('qualquer');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;

    const chosenServiceObj = SPA_SERVICES.find((s) => s.id === selectedService);
    const serviceName = chosenServiceObj ? chosenServiceObj.name : 'Procedimento Geral';

    const periodLabel =
      preferredPeriod === 'manha'
        ? 'Manhã'
        : preferredPeriod === 'tarde'
        ? 'Tarde'
        : 'Qualquer horário';

    const dateStr = preferredDate ? `para ${preferredDate}` : 'data a combinar';
    const notesStr = notes.trim() ? `\nObs: ${notes.trim()}` : '';

    const text = `Olá, Serene SPA! 🌿\n\nMeu nome é *${clientName.trim()}*.\nGostaria de agendar:\n✨ *${serviceName}*\n📅 ${dateStr} (${periodLabel})${notesStr}\n\nPodem me informar a disponibilidade?`;

    const url = `https://wa.me/${SPA_PHONE_RAW}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-[#16A34A]/20 relative">
        <div className="bg-[#FAF8F5] p-6 border-b border-[#16A34A]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#16A34A]" />
            <h3 className="font-serif text-2xl text-[#0A2417] font-medium">
              Agendamento Rápido
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#16A34A]/20 flex items-center justify-center text-[#0A2417] hover:bg-[#16A34A] hover:text-white transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-1.5">
              Ritual Desejado
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-lg text-sm text-[#0A2417] focus:outline-none focus:ring-1 focus:ring-[#16A34A]"
            >
              {SPA_SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.duration})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-1.5">
                Data Preferida
              </label>
              <input
                type="date"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-lg text-xs text-[#0A2417] focus:outline-none focus:ring-1 focus:ring-[#16A34A]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-1.5">
                Turno
              </label>
              <select
                value={preferredPeriod}
                onChange={(e) => setPreferredPeriod(e.target.value as any)}
                className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-lg text-xs text-[#0A2417] focus:outline-none focus:ring-1 focus:ring-[#16A34A]"
              >
                <option value="qualquer">Qualquer turno</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-1.5">
              Seu Nome *
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-[#16A34A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Como prefere ser chamada"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-lg text-sm text-[#0A2417] focus:outline-none focus:ring-1 focus:ring-[#16A34A]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0A2417] mb-1.5">
              Seu Telefone / WhatsApp
            </label>
            <div className="relative">
              <Phone className="w-3.5 h-3.5 text-[#16A34A] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="(37) 99999-9999"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-[#FAF8F5] border border-[#16A34A]/20 rounded-lg text-sm text-[#0A2417] focus:outline-none focus:ring-1 focus:ring-[#16A34A]"
              />
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-bold tracking-[0.2em] uppercase rounded-lg shadow-sm transition-colors"
            >
              Confirmar no WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
