import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { CDALogger } from 'common/loggers/cda.logger';
import { Faq } from './entities/faq.entity';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FindOptions, QueryOrder } from '@mikro-orm/core';

@Injectable()
export class FaqService {
  private readonly logger = new CDALogger(FaqService.name);
  private readonly findOptions: FindOptions<Faq, 'helpContent'> = {
    fields: ['id', 'question', 'answer', 'link', 'helpContent'],
    populate: [],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(Faq)
    private readonly entityRepo: EntityRepository<Faq>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const faqs = await this.entityRepo.find({ flag, display: true }, this.findOptions);

    if (faqs.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return faqs;
  }
}
