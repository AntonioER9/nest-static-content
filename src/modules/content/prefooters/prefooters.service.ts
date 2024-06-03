import { EntityRepository, FindOptions } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { PrefooterCategory } from './entities/prefooter-category.entity';
import { Flag } from 'modules/flags/entities/flag.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Injectable()
export class PrefooterService {
  private readonly logger = new CDALogger(PrefooterService.name);
  private readonly findOptions: FindOptions<PrefooterCategory, 'links'> = {
    fields: ['title', 'order', { links: ['label', 'path', 'order'] }],
    populate: ['links'],
    orderBy: { order: 'ASC', links: { order: 'ASC' } },
  };

  constructor(
    @InjectRepository(PrefooterCategory)
    private readonly prefooterRepository: EntityRepository<PrefooterCategory>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders): Promise<PrefooterCategory[]> {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };
    const prefooterLists = await this.prefooterRepository.find({ flag, display: true }, this.findOptions);

    if (prefooterLists.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return prefooterLists;
  }
}
