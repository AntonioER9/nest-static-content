import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthCheck, HealthCheckResult, HealthCheckService, MikroOrmHealthIndicator } from '@nestjs/terminus';
import { Public } from '../auth/is-public.decorator';
import { HealthStatusResponseDto } from './dtos/health.dto';
import { HealthService } from './health.service';

@Public()
@Controller('health')
@ApiTags('Health')
export class HealthController {
  constructor(
    private healthService: HealthService,
    private healthCheckService: HealthCheckService,
    private database: MikroOrmHealthIndicator,
  ) {}

  @Get('probe')
  @ApiResponse({
    status: 200,
  })
  status(): HealthStatusResponseDto {
    return this.healthService.getStatus();
  }

  @Get('check')
  @HealthCheck()
  async check(): Promise<HealthCheckResult> {
    return await this.healthCheckService.check([() => this.database.pingCheck('database', { timeout: 1500 })]);
  }
}
