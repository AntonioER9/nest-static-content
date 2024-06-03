import type { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpCategory } from 'modules/content/help-category/entities/help-category.entity';

export class HelpCategoryWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.puntosCencosudWong = em.create(HelpCategory, {
      icon: '/icons/cards/cencosudPoints.svg',
      title: 'Puntos Cencosud',
      reference: '/ayuda/puntos-cencosud',
      flag: context.wong,
      display: false,
    });
    context.ayudaWong = em.create(HelpCategory, {
      icon: '/icons/cards/buyInWong.svg',
      title: 'Ayuda',
      reference: '/ayuda/ayuda-wong',
      flag: context.wong,
      display: false,
    });
    context.institucionalWong = em.create(HelpCategory, {
      icon: '/icons/cards/buyInWong.svg',
      title: 'Institucional',
      reference: '/ayuda/institucional',
      flag: context.wong,
    });
  }
}
