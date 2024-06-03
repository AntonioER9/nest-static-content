import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { MostPopular } from './entities/most-populars.entity';
import { MostPopularsService } from './most-populars.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('most-populars')
@ApiTags('Content - Most Populars')
@ApiBearerAuth(swaggerBearerName)
export class MostPopularsController {
  constructor(private readonly mostPopularsService: MostPopularsService) {}

  @Get()
  @ApiOperation({ summary: 'Find all most populars by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<MostPopular[]> {
    return this.mostPopularsService.findByFlag(traceId, headers);
  }
}
