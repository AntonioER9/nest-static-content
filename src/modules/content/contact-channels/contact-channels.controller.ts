import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { swaggerBearerName } from 'config/swagger.config';
import { ContactChannelsService } from './contact-channels.service';
import { ContactChannel } from './entities/contact-channel.entity';

@Controller('contact-channels')
@ApiTags('Content - Contact Channels')
@ApiBearerAuth(swaggerBearerName)
export class ContactChannelsController {
  constructor(private readonly contactChannelsService: ContactChannelsService) {}

  @Get()
  @ApiOperation({ summary: 'Find all contact channels by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findAllByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<ContactChannel[]> {
    return this.contactChannelsService.findByFlag(traceId, headers);
  }
}
