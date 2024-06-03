import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { PrefooterCategory } from './entities/prefooter-category.entity';
import { PrefooterService } from './prefooters.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('pre-footer')
@ApiTags('Content - Pre footer')
@ApiBearerAuth(swaggerBearerName)
export class PrefooterController {
  constructor(private readonly prefooterService: PrefooterService) {}

  @Get()
  @ApiOperation({ summary: 'Find all pre footers by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<PrefooterCategory[]> {
    return this.prefooterService.findByFlag(traceId, headers);
  }
}
