import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('LeadsController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect((res) => {
        expect(res.body.status).toBe('ok');
        expect(res.body.service).toBe('alves-cury-api');
      });
  });

  it('/api/leads (POST) - valid data', () => {
    const validLead = {
      name: 'João Silva',
      whatsapp: '5551234567',
      state: 'FL',
      age: 35,
      goal: 'beneficio-vida',
    };

    return request(app.getHttpServer())
      .post('/api/leads')
      .send(validLead)
      .expect(201)
      .expect((res) => {
        expect(res.body.success).toBe(true);
        expect(res.body.id).toBeDefined();
      });
  });

  it('/api/leads (POST) - invalid data', () => {
    const invalidLead = {
      name: 'A', // Too short
      whatsapp: '123', // Too short
      state: '',
      age: 17, // Too young
      goal: '',
    };

    return request(app.getHttpServer())
      .post('/api/leads')
      .send(invalidLead)
      .expect(400)
      .expect((res) => {
        expect(res.body.message).toBe('Validation failed');
        expect(res.body.errors).toBeDefined();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});