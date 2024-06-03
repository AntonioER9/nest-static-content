import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { DeliveryCostType } from 'modules/content/delivery-cost/entities/delivery-cost-type.entity';

export class DeliveryCostTypeSeederJumbo extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(DeliveryCostType, {
      name: 'Lunes',
      description: '14:30-19:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes a viernes',
      description: '09:30-14:30\n14:30-19:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Sábado',
      description: '09:30-14:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Domingo',
      description: '09:30-14:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes y Jueves',
      description: '11:00-18:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Viernes',
      description: '09:30-14:30\n14:30-19:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Lunes',
      description: '09:30-13:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes a Sábado',
      description: '09:30-13:30\n15:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Domingo',
      description: '09:30-13:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes, viernes y sábado',
      description: '11:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes, viernes y sábado',
      description: '14:30-19:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Lunes a domingo',
      description: '09:00-12:00\n12:00-16:00\n16:00-19:00\n18:00-20:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Miércoles y Sábado',
      description: '09:00-17:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Lunes',
      description: '12:00-17:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes',
      description: '09:00-17:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes a viernes',
      description: '09:00-15:00\n15:00-17:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Sábado y domingo',
      description: '09:00-15:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Jueves',
      description: '09:00-17:00\n17:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Lunes a domingo',
      description:
        '9:00-12:00\n11:00-13:00\n12:00-15:00\n13:00-15:00\n14:00-17:00\n15:00-17:00\n16:00-19:00\n17:00-19:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes y jueves',
      description: '14:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Miércoles y viernes',
      description: '14:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Sábado',
      description: '11:00-18:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Lunes',
      description: '15:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Sábado',
      description: '15:00-20:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Viernes',
      description: '11:00-16:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes',
      description: '11:00-16:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Miércoles, viernes y sábado',
      description: '14:30-00:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes, miércoles y jueves',
      description: '12:00-19:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Viernes',
      description: '11:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes',
      description: '14:30-20:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Jueves',
      description: '11:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Sábado y domingo',
      description: '09:30-14:30',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes a sábado',
      description: '09:30-14:30\n15:00-20:00',
      flag: context.jumbo,
    });
    em.create(DeliveryCostType, {
      name: 'Martes a sábado',
      description: '09:30-14:30\n14:30-19:30',
      flag: context.jumbo,
    });
  }
}
