import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { CencoNavService } from './cenco-nav.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('cenco-nav')
@ApiTags('Content - Cenco nav')
@ApiBearerAuth(swaggerBearerName)
export class CencoNavController {
  constructor(private readonly cencoNavService: CencoNavService) {}

  @Get()
  @ApiOperation({ summary: 'Find cenco nav by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  findByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ) {
    return this.cencoNavService.findByFlag(traceId, headers);
  }
}
