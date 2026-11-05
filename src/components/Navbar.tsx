import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { SPA_PHONE_DISPLAY, getWhatsAppUrl } from '../data/spaData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Head Spa', href: '#head-spa' },
    { label: 'Cardápio Digital', href: '#cardapio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#16A34A]/15 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#inicio"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] rounded-sm"
          aria-label="Serene SPA - Início"
        >
          <img
            src="/logo.png"
            alt="Logo Serene SPA"
            className="w-10 h-10 object-contain rounded-full shadow-xs border border-[#16A34A]/20 transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Graceful fallback to SVG if image is still loading
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.08em] font-medium text-[#0A2417] leading-tight">
              SERENE SPA
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#16A34A] font-light">
              Salão de Beleza
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] text-[#2D4536]" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 font-medium hover:text-[#16A34A] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#16A34A] hover:after:w-full after:transition-all after:duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#16A34A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-4 py-2 text-xs tracking-wider uppercase font-semibold text-[#16A34A] hover:text-[#0A2417] transition-colors focus-visible:outline-none"
          >
            <Calendar className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Agendamento</span>
          </button>

          <a
            href={getWhatsAppUrl('Olá! Gostaria de entrar em contato e tirar dúvidas com o Serene SPA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#16A34A] hover:bg-[#15803d] active:scale-[0.98] transition-all duration-200 shadow-sm rounded-sm"
          >
            <Phone className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
            <span>Entrar em contato</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0A2417] hover:text-[#16A34A] transition-colors focus-visible:outline-none"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#16A34A]/20 px-6 py-6 shadow-xl transition-all">
          <nav className="flex flex-col gap-4 text-base font-serif text-[#0A2417]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-lg border-b border-[#16A34A]/10 hover:text-[#16A34A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 border border-[#16A34A] text-[#16A34A] text-xs font-semibold tracking-wider uppercase rounded-sm"
            >
              <Calendar className="w-4 h-4" />
              Agendar Horário
            </button>
            <a
              href={getWhatsAppUrl('Olá! Gostaria de atendimento no Serene SPA.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#16A34A] text-white text-xs font-semibold tracking-wider uppercase rounded-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Entrar em contato · {SPA_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
