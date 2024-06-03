import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { Banner } from './entities/banner.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';

@Injectable()
export class BannerService {
  private readonly logger: CDALogger = new CDALogger(BannerService.name);
  private readonly findOptions: FindOptions<Banner, 'flag'> = {
    fields: ['id', 'title', 'body', 'button', 'action', 'icon', 'image', 'alt', 'order', 'display'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(Banner)
    private readonly entityRepo: EntityRepository<Banner>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const banners = await this.entityRepo.find({ flag, display: true }, this.findOptions);

    if (banners.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return banners;
  }
}
