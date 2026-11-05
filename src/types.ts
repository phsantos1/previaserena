export interface ServiceItem {
  id: string;
  name: string;
  category: 'head-spa' | 'massagem' | 'estetica' | 'cuidados';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  priceNote?: string;
  benefits: string[];
  image: string;
  isPopular?: boolean;
  isSignature?: boolean;
}

export interface BookingFormData {
  serviceId: string;
  clientName: string;
  clientPhone: string;
  preferredPeriod: 'manha' | 'tarde' | 'qualquer';
  preferredDay: string;
  notes: string;
}
