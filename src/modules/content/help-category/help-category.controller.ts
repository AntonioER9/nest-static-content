import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { HelpCategory } from './entities/help-category.entity';
import { HelpCategoryService } from './help-category.service';

@Controller('help-category')
@ApiTags('Content - HelpCategory')
@ApiBearerAuth('auth-token')
export class HelpCategoryController {
  constructor(private readonly helpCategoryService: HelpCategoryService) {}

  @Get('/legacy')
  @ApiOperation({ summary: 'Find all help categories by country and flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<HelpCategory[]> {
    return this.helpCategoryService.findByFlag(traceId, headers);
  }

  @Get('/filtered')
  @ApiOperation({ summary: 'Find help categories and help contents filtered by country and flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findFilteredByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<HelpCategory[]> {
    return this.helpCategoryService.findFilteredByFlag(traceId, headers);
  }
}
