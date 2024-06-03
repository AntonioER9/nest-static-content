import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterCategory } from 'modules/content/prefooters/entities/prefooter-category.entity';

export class PrefootersCategoryJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.column1JumboCategory = em.create(PrefooterCategory, {
      title: 'Centro de Ayuda',
      order: 1,
      flag: context.jumbo,
    });

    context.jumboCategory = em.create(PrefooterCategory, {
      title: 'Jumbo',
      order: 2,
      flag: context.jumbo,
    });

    context.column3JumboCategory = em.create(PrefooterCategory, {
      title: 'Cencosud',
      order: 3,
      flag: context.jumbo,
    });
  }
}
