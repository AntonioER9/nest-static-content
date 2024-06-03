import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HealthStatusResponseDto } from './dtos/health.dto';

@Injectable()
export class HealthService {
  constructor(private configService: ConfigService) {}

  getStatus(): HealthStatusResponseDto {
    const deployedTime = `App is running - UPTIME: ${process.uptime().toFixed(0)} seconds`;

    return {
      status: 'Running',
      deployedTime,
      serverTime: new Date().toString(),
      envVars: { name: this.configService.get<string>('name'), log: this.configService.get<string>('log') },
    };
  }
}
