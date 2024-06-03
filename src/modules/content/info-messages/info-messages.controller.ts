import { Controller, Get, Headers, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { swaggerBearerName } from 'config/swagger.config';
import { ParseTraceIDPipe } from 'common/pipes/parse-trace-id.pipe';
import { InfoMessage } from './entities/info-message.entity';
import { InfoMessagesService } from './info-messages.service';

@Controller('info-messages')
@ApiTags('Content - Info Messages')
@ApiBearerAuth(swaggerBearerName)
export class InfoMessagesController {
  constructor(private readonly infoMessagesService: InfoMessagesService) {}

  @Get()
  @ApiOperation({ summary: 'Find one message info by flag' })
  @ApiQuery({ name: 'traceId', required: false })
  async findOneByFlag(
    @Headers() headers: HelpCenterHeaders,
    @Query('traceId', new ParseTraceIDPipe({ version: '4' })) traceId: string,
  ): Promise<InfoMessage> {
    return this.infoMessagesService.findByFlag(traceId, headers);
  }
}
