import { Collection } from '@mikro-orm/core';
import { MockModel } from 'common/models/mock.model';
import { DeliveryCostLocation } from '../../entities/delivery-cost-location.entity';
import { Flag } from 'modules/flags/entities/flag.entity';
import { DeliveryCostType } from '../../entities/delivery-cost-type.entity';

export const mockDeliveryCostLocation: DeliveryCostLocation = {
  id: 1,
  name: 'prueba',
  flags: new Collection<Flag>(['paris']),
  parent: null,
};

export const mockDeliveryCostType: DeliveryCostType = {
  id: 1,
  name: 'prueba',
  description: 'descripcion de prueba',
  flag: {
    id: 2,
    label: 'paris',
  },
};

export const mockTypeResponse: object = {
  id: 317,
  price: 4990,
  name: 'Pequeño',
  icon: 'https://d31w2ybspxswhh.cloudfront.net/TxD/paris/paris-small.png',
  description: 'Hasta 10 unidades, si el origen desde donde se envía es el mismo, aplica una tarifa de despacho',
  package: 'Menor a 1,20 x 70 x 70 cm.',
  weight: 'Menos de 15 kg.',
};

export class DeliveryCostLocationModel extends MockModel<DeliveryCostLocation> {
  protected entityStub = mockDeliveryCostLocation;
}

export class DeliveryCostLocationModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}

export class DeliveryCostTypeModel {
  createQueryBuilder(): any {
    const createQueryBuilder: any = {
      select: () => createQueryBuilder,
      leftJoin: () => createQueryBuilder,
      where: () => createQueryBuilder,
      andWhere: () => createQueryBuilder,
      execute: () => [mockTypeResponse],
    };

    return createQueryBuilder;
  }
}

export class DeliveryCostTypeModelNull {
  createQueryBuilder(): any {
    const createQueryBuilder: any = {
      select: () => createQueryBuilder,
      leftJoin: () => createQueryBuilder,
      where: () => createQueryBuilder,
      andWhere: () => createQueryBuilder,
      execute: () => [],
    };

    return createQueryBuilder;
  }
}
