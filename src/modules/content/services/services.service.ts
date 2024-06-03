import { EntityRepository, FindOptions, QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { Service } from './entities/service.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { Flag } from 'modules/flags/entities/flag.entity';

@Injectable()
export class ServiceService {
  private readonly logger = new CDALogger(ServiceService.name);
  private readonly findOptions: FindOptions<Service, 'flag'> = {
    fields: ['id', 'label', 'reference', 'order', 'label_mobile', 'actionLabel', 'icon', 'invitedReference'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(Service)
    private readonly entityRepo: EntityRepository<Service>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const services = await this.entityRepo.find({ flag, display: true }, this.findOptions);

    if (services.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return services;
  }
}
