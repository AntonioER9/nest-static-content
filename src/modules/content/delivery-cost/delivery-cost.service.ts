import { EntityRepository, FilterQuery, FindOptions } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DeliveryCostLocation } from 'modules/content/delivery-cost/entities/delivery-cost-location.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { CDALogger } from 'common/loggers/cda.logger';
import { DeliveryCostLocationType } from './entities/delivery-cost-location-type.entity';
import { EntityManager } from '@mikro-orm/postgresql';
import { DeliveryCostLocationDto } from './dtos/delivery-cost-location.dto';

@Injectable()
export class DeliveryCostService {
  private readonly logger: CDALogger = new CDALogger(DeliveryCostService.name);

  constructor(
    private readonly em: EntityManager,
    @InjectRepository(DeliveryCostLocation)
    private readonly locationRepo: EntityRepository<DeliveryCostLocation>,
  ) {}

  async getLocations(traceId: string, headers: HelpCenterHeaders): Promise<DeliveryCostLocationDto[]> {
    const flag = this.getFlag(headers);

    const parentTree = await this.locationRepo.findOne({
      name: flag.country.toUpperCase(),
    });

    if (!parentTree) {
      this.logger.cdaWarn(traceId, 'getLocations', 'not found', { headers, flag });
      throw new NotFoundException('Parent not found');
    }

    const result = await this.getLocationsByParent(parentTree.id, flag.id);

    const locations: DeliveryCostLocationDto[] = await Promise.all(
      result.map(async (parent) => ({
        ...parent,
        children: await this.getLocationsByParent(parent.id, flag.id),
      })),
    );

    return locations;
  }

  async getTypes(
    traceId: string,
    headers: HelpCenterHeaders,
    locationId: number | undefined,
  ): Promise<DeliveryCostLocationType[]> {
    const flag = this.getFlag(headers);

    if (!locationId) {
      this.logger.cdaWarn(traceId, 'getTypes', 'bad request', { headers, flag, locationId });
      throw new BadRequestException();
    }

    const qb = this.em.createQueryBuilder(DeliveryCostLocationType, 'lt');
    const result = await qb
      .select(['lt.id', 'lt.price', 't.name', 't.icon', 't.description', 't.package', 't.weight'])
      .leftJoin('lt.type', 't')
      .where({ type: { flag: flag.id } })
      .andWhere({ location: locationId })
      .execute('all');

    return result;
  }

  private getFlag(headers: HelpCenterHeaders) {
    return {
      id: headers.flagId,
      label: headers.flagLabel,
      country: headers.flagCountry,
    };
  }

  private async getLocationsByParent(parentId: number, flagId: number): Promise<DeliveryCostLocation[]> {
    const filter: FilterQuery<DeliveryCostLocation> = { parent: parentId, flags: [flagId], display: true };
    const findOptions: FindOptions<DeliveryCostLocation> = { fields: ['name'] };

    return await this.locationRepo.find(filter, findOptions);
  }
}
