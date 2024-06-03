import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { Service } from './entities/service.entity';
import { ServiceService } from './services.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('services')
@ApiTags('Content - Services')
@ApiBearerAuth('auth-token')
export class ServiceController {
  constructor(private readonly servicesService: ServiceService) {}

  @Get()
  @ApiOperation({ summary: 'Find all services by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<Service[]> {
    return this.servicesService.findByFlag(traceId, headers);
  }
}
