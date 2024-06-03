import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterCategory } from 'modules/content/prefooters/entities/prefooter-category.entity';

export class PrefootersCategorySisaSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.column1SisaCategory = em.create(PrefooterCategory, {
      title: 'Centro de Ayuda',
      order: 1,
      flag: context.sisa,
    });

    context.sisaCategory = em.create(PrefooterCategory, {
      title: 'Santa Isabel',
      order: 2,
      flag: context.sisa,
    });

    context.column3SisaCategory = em.create(PrefooterCategory, {
      title: 'Cencosud',
      order: 3,
      flag: context.sisa,
    });
  }
}
