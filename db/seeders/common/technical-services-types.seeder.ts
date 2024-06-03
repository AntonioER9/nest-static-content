import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { TechnicalServiceType } from 'modules/content/technical-services/entities/technical-service-type.entity';

export class TechnicalServicesTypesSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.Info = em.create(TechnicalServiceType, {
      name: 'INFO',
      order: 1,
    });

    context.Link = em.create(TechnicalServiceType, {
      name: 'LINK',
      order: 2,
    });

    context.Mail = em.create(TechnicalServiceType, {
      name: 'MAIL',
      order: 3,
    });

    context.Phone = em.create(TechnicalServiceType, {
      name: 'PHONE',
      order: 4,
    });
  }
}
