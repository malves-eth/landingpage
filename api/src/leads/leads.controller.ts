import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UsePipes,
  HttpException,
  HttpStatus,
  Logger,
  UseGuards,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { LeadsService } from './leads.service';
import { CreateLeadDto, CreateLeadSchema } from './dto/create-lead.dto';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { AuthGuard } from '../common/guards/auth.guard';

@Controller('leads')
export class LeadsController {
  private readonly logger = new Logger(LeadsController.name);

  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  @Throttle({ default: { limit: 10, ttl: 60000 } }) // 10 requests per minute
  @UsePipes(new ZodValidationPipe(CreateLeadSchema))
  async create(@Body() createLeadDto: CreateLeadDto) {
    try {
      this.logger.log(`Creating lead for: ${createLeadDto.name}`);
      return await this.leadsService.create(createLeadDto);
    } catch (error) {
      this.logger.error('Error in create endpoint:', error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll() {
    try {
      return await this.leadsService.findAll();
    } catch (error) {
      this.logger.error('Error in findAll endpoint:', error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    try {
      const lead = await this.leadsService.findOne(id);
      if (!lead) {
        throw new HttpException('Lead not found', HttpStatus.NOT_FOUND);
      }
      return lead;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      this.logger.error('Error in findOne endpoint:', error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
