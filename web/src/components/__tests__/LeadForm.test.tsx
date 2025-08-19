import { CreateLeadSchema } from '../../../api/src/leads/dto/create-lead.dto';

describe('LeadForm Validation', () => {
  it('should validate correct lead data', () => {
    const validLead = {
      name: 'João Silva',
      whatsapp: '5551234567',
      state: 'FL',
      age: 35,
      goal: 'beneficio-vida',
    };

    const result = CreateLeadSchema.safeParse(validLead);
    expect(result.success).toBe(true);
  });

  it('should reject invalid lead data', () => {
    const invalidLead = {
      name: 'A', // Too short
      whatsapp: '123', // Too short
      state: '',
      age: 17, // Too young
      goal: '',
    };

    const result = CreateLeadSchema.safeParse(invalidLead);
    expect(result.success).toBe(false);
    
    if (!result.success) {
      expect(result.error.errors.length).toBeGreaterThan(0);
    }
  });

  it('should handle UTM parameters', () => {
    const leadWithUTM = {
      name: 'Maria Santos',
      whatsapp: '5559876543',
      state: 'CA',
      age: 28,
      goal: 'protecao-renda',
      utmSource: 'google',
      utmMedium: 'cpc',
      utmCampaign: 'seguro-vida',
    };

    const result = CreateLeadSchema.safeParse(leadWithUTM);
    expect(result.success).toBe(true);
  });
});