import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];
    const expectedApiKey = this.configService.get('API_KEY');
    const clientIp = request.ip || 'unknown';

    // Always require API key in production
    if (!expectedApiKey) {
      this.logger.error('API_KEY not configured on server');
      throw new UnauthorizedException('Server configuration error');
    }

    if (!apiKey || apiKey !== expectedApiKey) {
      // Log security event
      this.logger.warn(`Unauthorized access attempt from ${clientIp}`, {
        ip: clientIp,
        userAgent: request.headers['user-agent'],
        timestamp: new Date().toISOString(),
        hasApiKey: !!apiKey,
      });
      throw new UnauthorizedException('Invalid or missing API key');
    }

    // Log successful authentication for monitoring
    this.logger.log(`Successful authentication from ${clientIp}`);
    return true;
  }
}
