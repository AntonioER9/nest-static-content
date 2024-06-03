import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { Footer } from './entities/footer.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { Flag } from 'modules/flags/entities/flag.entity';

@Injectable()
export class FooterService {
  private readonly logger: CDALogger = new CDALogger(FooterService.name);
  private readonly findOptions: FindOptions<Footer, 'flag'> = {
    fields: ['id', 'label', 'link', 'title'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(Footer)
    private readonly entityRepo: EntityRepository<Footer>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const footers = await this.entityRepo.find({ flag, display: true }, this.findOptions);

    if (footers.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return footers;
  }
}
