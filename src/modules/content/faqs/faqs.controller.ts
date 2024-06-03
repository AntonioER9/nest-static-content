import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { Faq } from './entities/faq.entity';
import { FaqService } from './faqs.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { HelpCategoryService } from '../help-category/help-category.service';

@Controller('faqs')
@ApiTags('Content - Faqs')
@ApiBearerAuth(swaggerBearerName)
export class FaqController {
  constructor(private readonly faqService: FaqService, private readonly helpCategoryService: HelpCategoryService) {}

  @Get()
  @ApiOperation({ summary: 'Find all faqs by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<Faq[]> {
    return this.faqService.findByFlag(traceId, headers);
  }

  @Get('/help-category')
  @ApiOperation({ summary: 'Find all faqs with help category and help content by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllWithHelpCategory(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ) {
    return this.helpCategoryService.findWithFaqsByFlag(traceId, headers);
  }
}
