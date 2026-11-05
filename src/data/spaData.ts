import { ServiceItem } from '../types';

export const SPA_PHONE_DISPLAY = '(37) 99828-0838';
export const SPA_PHONE_RAW = '5537998280838';
export const SPA_ADDRESS = 'Rua Margarida Lourenço Soares, Formiga - MG, Brasil';
export const SPA_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Rua+Margarida+Louren%C3%A7o+Soares,+Formiga+-+MG,+Brasil';

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Olá! Gostaria de informações sobre os atendimentos e agendamento no Serene SPA.';
  const message = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${SPA_PHONE_RAW}?text=${message}`;
}

export const SPA_SERVICES: ServiceItem[] = [
  {
    id: 'head-spa',
    name: 'Head Spa Sensorial',
    category: 'head-spa',
    shortDesc: 'O ritual assinatura com cascata morna, esfoliação capilar e massagem craniana profunda.',
    fullDesc: 'O ponto alto do Serene SPA. Uma imersão relaxante inspirada nas terapias orientais, combinando cascata contínua de água aromatizada, desintoxicação do couro cabeludo, aromaterapia pura e manobras precisas na cabeça, nuca e ombros para dissolver o estresse acumulado.',
    duration: '60 a 90 min',
    benefits: [
      'Alívio instantâneo da tensão mental e enxaquecas',
      'Desintoxicação profunda e oxigenação capilar',
      'Sensação indescritível de paz e renovação'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    isSignature: true,
    isPopular: true
  },
  {
    id: 'massagem-relaxante',
    name: 'Massagem Relaxante & Aromaterapia',
    category: 'massagem',
    shortDesc: 'Toques suaves e fluidos com óleos essenciais puros aquecidos.',
    fullDesc: 'Movimentos contínuos e ritmados que acolhem o corpo todo, estimulando a liberação de serotonina e endorfina. Os blends botânicos exclusivos envolvem os sentidos em calma serena.',
    duration: '50 a 80 min',
    benefits: [
      'Relaxamento muscular e alívio do estresse diário',
      'Harmonização das frequências emocionais',
      'Hidratação profunda com óleos botânicos nobres'
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
    isPopular: true
  },
  {
    id: 'drenagem-linfatica',
    name: 'Drenagem Linfática',
    category: 'estetica',
    shortDesc: 'Manobras suaves e ritmadas para eliminar líquidos e toxinas.',
    fullDesc: 'Método fisiológico suave que drena retenções de líquidos, alivia o cansaço nas pernas, auxilia na redução de medidas e estimula as defesas naturais do organismo.',
    duration: '50 min',
    benefits: [
      'Redução visível de inchaço e edemas',
      'Estímulo da circulação de retorno e imunidade',
      'Leveza corporal imediata pós-sessão'
    ],
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'massagem-modeladora',
    name: 'Massagem Modeladora',
    category: 'estetica',
    shortDesc: 'Técnica vigorosa e precisa com foco em contorno corporal.',
    fullDesc: 'Manobras manuais intensas, deslizamentos profundos e amassamentos que ativam a circulação local, auxiliam no combate à gordura localizada e devolvem firmeza à pele.',
    duration: '50 min',
    benefits: [
      'Ativação do metabolismo e circulação tecidual',
      'Contorno e tonificação da silhueta',
      'Melhora expressiva na textura da pele'
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'ventosaterapia',
    name: 'Ventosaterapia Terapêutica',
    category: 'massagem',
    shortDesc: 'Liberação miofascial e oxigenação tecidual profunda.',
    fullDesc: 'Aplicação cuidadosa de ventosas que criam vácuo suave sobre pontos de tensão e meridianos de dor. Desata nós musculares, oxigena as fibras e traz alívio rápido a dores nas costas e ombros.',
    duration: '45 min',
    benefits: [
      'Descompressão de nós de tensão nas costas e trapézio',
      'Aumento da oxigenação sanguínea local',
      'Restauração da mobilidade e sensação de leveza'
    ],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'spa-dos-pes',
    name: 'Spa dos Pés Revigorante',
    category: 'cuidados',
    shortDesc: 'Imersão em sais aromáticos, esfoliação nutritiva e reflexologia.',
    fullDesc: 'Um carinho merecido para a base do seu corpo. Escalda-pés morno com sais marinhos e óleos calmantes, esfoliação com manteigas botânicas e massagem reflexológica em pontos vitais.',
    duration: '40 min',
    benefits: [
      'Alívio do cansaço e peso nas pernas e pés',
      'Pele aveludada, livre de calosidades e ressecamento',
      'Estímulo reflexológico de bem-estar integral'
    ],
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'depilacao',
    name: 'Depilação Suave & Higiênica',
    category: 'cuidados',
    shortDesc: 'Ceras especiais e protocolos delicados que protegem a pele.',
    fullDesc: 'Técnica meticulosa realizada com materiais 100% descartáveis e cera emoliente de baixa temperatura que ameniza o desconforto, deixando a pele acetinada, calma e impecável.',
    duration: '30 a 60 min',
    benefits: [
      'Produtos hipoalergênicos de alto conforto',
      'Toque macio e hidratação calmante pós-depilatória',
      'Higiene absoluta e privacidade reservada'
    ],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=85'
  }
];

export const TESTIMONIALS = [
  {
    author: 'Mariana Duarte',
    role: 'Cliente Serene SPA',
    quote: 'O Head Spa é uma experiência de outro mundo. A cascata de água morna e a massagem no couro cabeludo levaram todo o meu cansaço embora. Ambiente impecável!',
    treatment: 'Head Spa Sensorial'
  },
  {
    author: 'Camila Fernandes',
    role: 'Cliente Serene SPA',
    quote: 'Faço massagem relaxante com aromaterapia toda quinzena. O atendimento é extremamente delicado e a energia do espaço em Formiga é única.',
    treatment: 'Massagem com Aromaterapia'
  },
  {
    author: 'Beatriz Rezende',
    role: 'Cliente Serene SPA',
    quote: 'A ventosaterapia me tirou de uma crise horrível nas costas em uma única sessão. As profissionais são muito atenciosas e o cuidado é evidente.',
    treatment: 'Ventosaterapia'
  }
];
