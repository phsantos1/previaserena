import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadSpaHighlight from './components/HeadSpaHighlight';
import DigitalMenu from './components/DigitalMenu';
import AboutSection from './components/AboutSection';
import BookingSection from './components/BookingSection';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [activeServiceForModal, setActiveServiceForModal] = useState<string>('head-spa');

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setActiveServiceForModal(serviceId);
    }
    setBookingModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    // Scroll smoothly to booking form or open modal
    const section = document.getElementById('agendamento');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking(serviceId);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1B2B20] selection:bg-[#16A34A]/20 selection:text-[#0A2417] relative">
      {/* Fixed Luxury Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main>
        {/* 1. Primeira tela impecável: Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Ponto Forte: Head Spa Sensorial */}
        <HeadSpaHighlight onSelectService={handleSelectServiceForBooking} />

        {/* 3. Cardápio Digital Interativo de Rituais & Serviços */}
        <DigitalMenu onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 4. Sobre o Refúgio & Ambiente em Formiga */}
        <AboutSection />

        {/* 5. Agendamento Online & Depoimentos */}
        <BookingSection preselectedServiceId={activeServiceForModal} />
      </main>

      {/* 6. Localização & Rodapé Elegante */}
      <ContactFooter />

      {/* Floating Fast WhatsApp */}
      <FloatingWhatsApp />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={activeServiceForModal}
      />
    </div>
  );
}
