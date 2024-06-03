import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { CDALogger } from 'common/loggers/cda.logger';
import { PaymentMethod } from './entities/payment-methods.entity';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FindOptions, QueryOrder } from '@mikro-orm/core';

@Injectable()
export class PaymentMethodService {
  private readonly logger = new CDALogger(PaymentMethodService.name);
  private readonly findOptions: FindOptions<PaymentMethod> = {
    fields: ['name', 'icon'],
    orderBy: { order: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(PaymentMethod)
    private readonly entityRepo: EntityRepository<PaymentMethod>,
  ) {}

  async findByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const paymentMethods = await this.entityRepo.find({ flag }, this.findOptions);

    if (paymentMethods.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }

    return paymentMethods;
  }
}
