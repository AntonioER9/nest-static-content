import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { SocialMedia } from './entities/social-media.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { Flag } from 'modules/flags/entities/flag.entity';

@Injectable()
export class SocialMediaService {
  private readonly logger: CDALogger = new CDALogger(SocialMediaService.name);
  private readonly findOptions: FindOptions<SocialMedia> = {
    fields: ['id', 'name', 'link', 'icon'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(SocialMedia)
    private readonly entityRepo: EntityRepository<SocialMedia>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const socialMedia = await this.entityRepo.find({ flag, display: true }, this.findOptions);

    if (socialMedia.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return socialMedia;
  }
}
