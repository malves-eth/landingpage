import { z } from 'zod';

export const CreateLeadSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  whatsapp: z.string().min(10, 'WhatsApp deve ter pelo menos 10 dígitos'),
  state: z.string().min(1, 'Estado é obrigatório'),
  age: z
    .number()
    .min(18, 'Idade mínima é 18 anos')
    .max(80, 'Idade máxima é 80 anos'),
  goal: z.string().min(1, 'Objetivo é obrigatório'),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmContent: z.string().optional(),
  utmTerm: z.string().optional(),
});

export type CreateLeadDto = z.infer<typeof CreateLeadSchema>;
