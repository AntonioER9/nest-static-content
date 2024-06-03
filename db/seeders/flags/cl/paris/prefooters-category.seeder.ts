import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterCategory } from 'modules/content/prefooters/entities/prefooter-category.entity';

export class PrefootersCategoryParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.column1ParisCategory = em.create(PrefooterCategory, {
      title: 'Te ayudamos',
      order: 1,
      flag: context.paris,
    });

    context.parisCategory = em.create(PrefooterCategory, {
      title: 'Mundo Paris',
      order: 2,
      flag: context.paris,
    });

    context.column3ParisCategory = em.create(PrefooterCategory, {
      title: 'Cencosud',
      order: 3,
      flag: context.paris,
    });
  }
}
