import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { Flag } from 'modules/flags/entities/flag.entity';
import { RelatedTopics } from './entities/related-topics.entity';

@Injectable()
export class RelatedTopicsService {
  private readonly logger: CDALogger = new CDALogger(RelatedTopicsService.name);
  private readonly findOptions: FindOptions<RelatedTopics> = {
    fields: ['id', 'title', 'reference', 'topicId', 'subtopicId'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(RelatedTopics)
    private readonly entityRepo: EntityRepository<RelatedTopics>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const relatedTopics = await this.entityRepo.find({ flag, display: true }, this.findOptions);

    if (relatedTopics.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return relatedTopics;
  }

  async findBySubtopic(topicId: number, subtopicId: number) {
    return await this.entityRepo.find({ display: true, topicId, subtopicId }, this.findOptions);
  }
}
