import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { CDALogger } from 'common/loggers/cda.logger';
import { InfoMessage } from './entities/info-message.entity';
import { Flag } from 'modules/flags/entities/flag.entity';

@Injectable()
export class InfoMessagesService {
  private readonly logger: CDALogger = new CDALogger(InfoMessagesService.name);

  private readonly findOptions: FindOptions<InfoMessage, 'flag'> = {
    fields: ['id', 'message'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(InfoMessage)
    private readonly entityRepo: EntityRepository<InfoMessage>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };
    const messageInfo = await this.entityRepo.findOne({ flag, display: true }, this.findOptions);

    if (!messageInfo) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return messageInfo;
  }
}
