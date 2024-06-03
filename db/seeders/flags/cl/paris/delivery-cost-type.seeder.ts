import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { DeliveryCostType } from 'modules/content/delivery-cost/entities/delivery-cost-type.entity';

export class DeliveryCostTypeSeederParis extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(DeliveryCostType, {
      name: 'Pequeño',
      icon: 'https://d31w2ybspxswhh.cloudfront.net/TxD/paris/paris-small.png',
      description: 'Hasta 10 unidades, si el origen desde donde se envía es el mismo, aplica una tarifa de despacho',
      package: 'Menor a 1,20 x 70 x 70 cm.',
      weight: 'Menos de 15 kg.',
      flag: context.paris,
    });
    em.create(DeliveryCostType, {
      name: 'Mediano',
      icon: 'https://d31w2ybspxswhh.cloudfront.net/TxD/paris/paris-medium.png',
      description: 'Por cada unidad, se cobra una tarifa de despacho',
      package: 'Igual o mayor a 1,20 x 70 x 70 cm.',
      weight: 'Entre 15 y 40 kg.',
      flag: context.paris,
    });
    em.create(DeliveryCostType, {
      name: 'Grande',
      icon: 'https://d31w2ybspxswhh.cloudfront.net/TxD/paris/paris-big.png',
      description: 'Por cada unidad, se cobra una tarifa de despacho',
      package: 'Productos extra grandes',
      weight: 'Más de 40 kg.',
      flag: context.paris,
    });
  }
}
