import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateLeadDto } from './dto/create-lead.dto';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import escapeHtml from 'escape-html';

@Injectable()
export class LeadsService {
  private readonly logger = new Logger(LeadsService.name);
  private readonly prisma = new PrismaClient();
  private readonly transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    // Configure nodemailer
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('SMTP_HOST'),
      port: this.configService.get('SMTP_PORT'),
      secure: false,
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASS'),
      },
    });
  }

  async create(createLeadDto: CreateLeadDto) {
    try {
      // Save lead to database
      const lead = await this.prisma.lead.create({
        data: {
          name: createLeadDto.name,
          whatsapp: createLeadDto.whatsapp,
          state: createLeadDto.state,
          age: createLeadDto.age,
          goal: createLeadDto.goal,
          utmSource: createLeadDto.utmSource,
          utmMedium: createLeadDto.utmMedium,
          utmCampaign: createLeadDto.utmCampaign,
          utmContent: createLeadDto.utmContent,
          utmTerm: createLeadDto.utmTerm,
        },
      });

      this.logger.log(`Lead created with ID: ${lead.id}`);

      // Send email notification
      await this.sendEmailNotification(lead);

      // Optional: Send webhook
      await this.sendWebhook(lead);

      return { success: true, id: lead.id };
    } catch (error) {
      this.logger.error('Error creating lead:', error);
      throw error;
    }
  }

  private async sendEmailNotification(lead: any) {
    try {
      const notifyTo = this.configService.get('NOTIFY_TO');
      if (!notifyTo) {
        this.logger.warn('NOTIFY_TO not configured, skipping email notification');
        return;
      }

      // Sanitize user data to prevent HTML injection
      const safeData = {
        name: escapeHtml(lead.name || ''),
        whatsapp: escapeHtml(lead.whatsapp || ''),
        state: escapeHtml(lead.state || ''),
        age: Number(lead.age) || 0,
        goal: escapeHtml(lead.goal || ''),
        utmSource: escapeHtml(lead.utmSource || ''),
        utmMedium: escapeHtml(lead.utmMedium || ''),
        utmCampaign: escapeHtml(lead.utmCampaign || ''),
        utmContent: escapeHtml(lead.utmContent || ''),
        utmTerm: escapeHtml(lead.utmTerm || ''),
        id: escapeHtml(lead.id || '')
      };

      const emailHTML = `
        <h2>🎯 Novo Lead - Seguro de Vida</h2>
        
        <h3>Dados do Cliente:</h3>
        <ul>
          <li><strong>Nome:</strong> ${safeData.name}</li>
          <li><strong>WhatsApp:</strong> ${safeData.whatsapp}</li>
          <li><strong>Estado:</strong> ${safeData.state}</li>
          <li><strong>Idade:</strong> ${safeData.age} anos</li>
          <li><strong>Objetivo:</strong> ${safeData.goal}</li>
        </ul>
        
        ${safeData.utmSource ? `
        <h3>Dados UTM:</h3>
        <ul>
          <li><strong>Source:</strong> ${safeData.utmSource}</li>
          <li><strong>Medium:</strong> ${safeData.utmMedium}</li>
          <li><strong>Campaign:</strong> ${safeData.utmCampaign}</li>
          <li><strong>Content:</strong> ${safeData.utmContent}</li>
          <li><strong>Term:</strong> ${safeData.utmTerm}</li>
        </ul>
        ` : ''}
        
        <p><strong>Data:</strong> ${new Date(lead.createdAt).toLocaleString('pt-BR')}</p>
        
        <hr>
        <p><em>Lead ID: ${safeData.id}</em></p>
      `;

      await this.transporter.sendMail({
        from: this.configService.get('SMTP_USER'),
        to: notifyTo,
        subject: `🎯 Novo Lead: ${safeData.name} - ${safeData.goal}`,
        html: emailHTML,
      });

      this.logger.log(`Email notification sent for lead ${lead.id}`);
    } catch (error) {
      this.logger.error('Error sending email notification:', error);
    }
  }

  private async sendWebhook(lead: any) {
    try {
      const webhookUrl = this.configService.get('WEBHOOK_URL');
      if (!webhookUrl) {
        this.logger.log('WEBHOOK_URL not configured, skipping webhook');
        return;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'lead_created',
          data: lead,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        this.logger.log(`Webhook sent successfully for lead ${lead.id}`);
      } else {
        this.logger.error(`Webhook failed with status ${response.status}`);
      }
    } catch (error) {
      this.logger.error('Error sending webhook:', error);
    }
  }

  async findAll() {
    return this.prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.lead.findUnique({
      where: { id },
    });
  }
}