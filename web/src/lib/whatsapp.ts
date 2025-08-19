export interface LeadData {
  name: string;
  whatsapp: string;
  state: string;
  age: number;
  goal: string;
}

export function normalizePhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `+1${cleaned}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+${cleaned}`;
  }
  
  return `+1${cleaned}`;
}

export function formatPhoneForDisplay(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    const withoutCountry = cleaned.slice(1);
    return `(${withoutCountry.slice(0, 3)}) ${withoutCountry.slice(3, 6)}-${withoutCountry.slice(6)}`;
  }
  
  return phone;
}

export function createWhatsAppUrl(leadData: LeadData): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "15618231966";
  const message = `Oi! Sou ${leadData.name}. Quero uma cotação de seguro com benefício em vida. WhatsApp: ${leadData.whatsapp}; Estado: ${leadData.state}; Idade: ${leadData.age}; Objetivo: ${leadData.goal}.`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}