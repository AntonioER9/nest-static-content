import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterCategory } from 'modules/content/prefooters/entities/prefooter-category.entity';

export class PrefootersCategoryWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.column1WongCategory = em.create(PrefooterCategory, {
      title: 'Centro de Ayuda',
      order: 1,
      flag: context.wong,
    });

    context.wongCategory = em.create(PrefooterCategory, {
      title: 'Wong',
      order: 2,
      flag: context.wong,
    });

    context.column3WongCategory = em.create(PrefooterCategory, {
      title: 'Cencosud',
      order: 3,
      flag: context.wong,
    });
  }
}
