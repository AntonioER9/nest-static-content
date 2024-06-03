import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { Rrss } from './entities/rrss.entity';
import { Flag } from 'modules/flags/entities/flag.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Injectable()
export class RrssService {
  private readonly logger: CDALogger = new CDALogger(RrssService.name);
  private readonly findOptions: FindOptions<Rrss> = {
    fields: ['facebook', 'twitter', 'instagram', 'youtube'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(Rrss)
    private readonly entityRepo: EntityRepository<Rrss>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const rrss = await this.entityRepo.findOne({ flag, display: true }, this.findOptions);

    if (!rrss) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return rrss;
  }
}
