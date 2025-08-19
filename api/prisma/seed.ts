import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');
  
  // Optional: create sample data for testing
  const sampleLead = await prisma.lead.create({
    data: {
      name: 'João Silva',
      whatsapp: '+15551234567',
      state: 'FL',
      age: 35,
      goal: 'beneficio-vida',
      utmSource: 'google',
      utmMedium: 'cpc',
      utmCampaign: 'seguro-vida',
    },
  });
  
  console.log('✅ Sample lead created:', sampleLead);
  console.log('🎉 Seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });