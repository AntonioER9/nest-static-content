import { Controller, Get, Query, Headers } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags, ApiOperation } from '@nestjs/swagger';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { SocialMedia } from './entities/social-media.entity';
import { SocialMediaService } from './social-media.service';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Controller('social-media')
@ApiTags('Content - Social media')
@ApiBearerAuth(swaggerBearerName)
export class SocialMediaController {
  constructor(private readonly socialMediaService: SocialMediaService) {}

  @Get()
  @ApiOperation({ summary: 'Find all social media by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<SocialMedia[]> {
    return this.socialMediaService.findByFlag(traceId, headers);
  }
}
