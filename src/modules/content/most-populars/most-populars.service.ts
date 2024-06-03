import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { MostPopular } from './entities/most-populars.entity';
import { Flag } from 'modules/flags/entities/flag.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Injectable()
export class MostPopularsService {
  private readonly logger: CDALogger = new CDALogger(MostPopularsService.name);
  private readonly findOptions: FindOptions<MostPopular, 'flag'> = {
    fields: ['id', 'label', 'link', 'order', 'reference'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(MostPopular)
    private readonly entityRepo: EntityRepository<MostPopular>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };
    const mostPopulars = await this.entityRepo.find({ flag, display: true }, this.findOptions);

    if (mostPopulars.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return mostPopulars;
  }
}
