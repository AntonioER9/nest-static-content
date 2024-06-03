import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { Footer } from './entities/footer.entity';
import { FooterService } from './footers.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('footers')
@ApiTags('Content - Footers')
@ApiBearerAuth(swaggerBearerName)
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Get()
  @ApiOperation({ summary: 'Find all footers by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<Footer[]> {
    return this.footerService.findByFlag(traceId, headers);
  }
}
