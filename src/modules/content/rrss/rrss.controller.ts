import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { Rrss } from './entities/rrss.entity';
import { RrssService } from './rrss.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('rrss')
@ApiTags('Content - Rrss')
@ApiBearerAuth(swaggerBearerName)
export class RrssController {
  constructor(private readonly rrssService: RrssService) {}

  @Get()
  @ApiOperation({ summary: 'Find all rrss by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<Rrss> {
    return this.rrssService.findByFlag(traceId, headers);
  }
}
