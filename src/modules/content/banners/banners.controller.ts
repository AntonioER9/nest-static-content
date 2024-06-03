import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { BannerService } from './banners.service';
import { Banner } from './entities/banner.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('banners')
@ApiTags('Content - Banners')
@ApiBearerAuth(swaggerBearerName)
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  @ApiOperation({ summary: 'Find all banners by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<Banner[]> {
    return this.bannerService.findByFlag(traceId, headers);
  }
}
