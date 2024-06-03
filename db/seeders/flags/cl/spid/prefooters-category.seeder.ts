import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterCategory } from 'modules/content/prefooters/entities/prefooter-category.entity';

export class PrefootersCategorySpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.column1SpidCategory = em.create(PrefooterCategory, {
      title: 'Centro de Ayuda',
      order: 1,
      flag: context.spid,
    });

    context.spidCategory = em.create(PrefooterCategory, {
      title: 'Spid',
      order: 2,
      flag: context.spid,
    });

    context.column3SpidCategory = em.create(PrefooterCategory, {
      title: 'Cencosud',
      order: 3,
      flag: context.spid,
    });
  }
}
