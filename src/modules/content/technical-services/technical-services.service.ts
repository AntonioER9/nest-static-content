import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { FindOptions, QueryOrder } from '@mikro-orm/core';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CDALogger } from 'common/loggers/cda.logger';
import { TechnicalServiceBrand } from './entities/technical-service-brand.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { Flag } from 'modules/flags/entities/flag.entity';

@Injectable()
export class TechnicalServiceService {
  private readonly logger: CDALogger = new CDALogger(TechnicalServiceService.name);
  private readonly findOptionsAllBrands: FindOptions<TechnicalServiceBrand, 'flag'> = {
    fields: ['id', 'name'],
    orderBy: { name: QueryOrder.ASC },
  };
  private readonly findOptionsOneBrand: FindOptions<TechnicalServiceBrand, 'flag'> = {
    fields: ['id', 'name', { technicalServices: ['id', 'info', 'notes', { type: ['name', 'order'] }] }],
    orderBy: { name: QueryOrder.ASC },
  };

  constructor(
    @InjectRepository(TechnicalServiceBrand)
    private readonly entityRepo: EntityRepository<TechnicalServiceBrand>,
  ) {}

  async findAllBrandsByFlag(traceId: string, headers: HelpCenterHeaders) {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };

    const technicalServices = await this.entityRepo.find({ flag, display: true }, this.findOptionsAllBrands);

    if (technicalServices.length === 0) {
      this.logger.cdaWarn(traceId, 'findByFlag', 'not found', { headers });
      throw new NotFoundException();
    }
    return technicalServices;
  }
  async findOneBrandById(traceId: string, id: number) {
    const technicalService = await this.entityRepo.findOne({ id, display: true }, this.findOptionsOneBrand);

    if (!technicalService) {
      this.logger.cdaWarn(traceId, 'findOneBrandById', 'not found');
      throw new NotFoundException();
    }
    return technicalService;
  }
}
