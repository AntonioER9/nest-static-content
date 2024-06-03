import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { CDALogger } from 'common/loggers/cda.logger';
import { Flag } from 'modules/flags/entities/flag.entity';
import { ContactChannel } from './entities/contact-channel.entity';

@Injectable()
export class ContactChannelsService {
  private readonly logger: CDALogger = new CDALogger(ContactChannelsService.name);
  private readonly findOptions: FindOptions<ContactChannel, 'flag'> = {
    fields: ['id', 'icon', 'title', 'buttonLabel', 'actionType', 'reference', 'order'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(ContactChannel)
    private readonly entityRepo: EntityRepository<ContactChannel>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };
    const contactChannels = await this.entityRepo.find({ flag, display: true }, this.findOptions);

    if (contactChannels.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return contactChannels;
  }
}
