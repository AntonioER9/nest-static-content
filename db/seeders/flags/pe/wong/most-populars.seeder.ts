import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MostPopular } from 'modules/content/most-populars/entities/most-populars.entity';

export class MostPopularsWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(MostPopular, {
      label: 'Políticas de privacidad',
      link: '/ayuda/institucional/politicas-de-privacidad',
      reference: '/ayuda/institucional/politicas-de-privacidad',
      flag: context.wong,
      order: 1,
    });
    em.create(MostPopular, {
      label: 'Términos y condiciones',
      link: '/ayuda/institucional/terminos-y-condiciones',
      reference: '/ayuda/institucional/terminos-y-condiciones',
      flag: context.wong,
      order: 2,
    });
    em.create(MostPopular, {
      label: 'Wong Primer',
      link: '/ayuda/institucional/terminos-y-condiciones-wong-prime',
      reference: '/ayuda/institucional/terminos-y-condiciones-wong-prime',
      flag: context.wong,
      order: 3,
    });
    em.create(MostPopular, {
      label: 'RAEE',
      link: '/ayuda/institucional/raee',
      reference: '/ayuda/institucional/raee',
      flag: context.wong,
      order: 4,
    });
    em.create(MostPopular, {
      label: '¿Qué es Cencosud?',
      link: '/ayuda/institucional/cencosud',
      reference: '/ayuda/institucional/cencosud',
      flag: context.wong,
      order: 5,
    });
  }
}
