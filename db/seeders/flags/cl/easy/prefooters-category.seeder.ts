import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterCategory } from 'modules/content/prefooters/entities/prefooter-category.entity';

export class PrefootersCategoryEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.column1EasyCategory = em.create(PrefooterCategory, {
      title: 'Centro de Ayuda',
      order: 1,
      flag: context.easy,
    });

    context.easyCategory = em.create(PrefooterCategory, {
      title: 'Easy',
      order: 2,
      flag: context.easy,
    });

    context.column3EasyCategory = em.create(PrefooterCategory, {
      title: 'Cencosud',
      order: 3,
      flag: context.easy,
    });
  }
}
