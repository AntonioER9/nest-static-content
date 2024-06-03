import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MostPopular } from 'modules/content/most-populars/entities/most-populars.entity';

export class MostPopularsJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(MostPopular, {
      label: 'Problemas con mi pedido',
      link: '/ayuda/problemas-pedido/producto-cobrado-no-enviado',
      reference: '/ayuda/problemas-pedido/producto-cobrado-no-enviado',
      flag: context.jumbo,
      order: 1,
    });

    em.create(MostPopular, {
      label: 'Información de pago',
      link: '/ayuda/medios-pago/medios-pago',
      reference: '/ayuda/medios-pago/medios-pago',
      flag: context.jumbo,
      order: 2,
    });
    em.create(MostPopular, {
      label: 'Locales Jumbo',
      link: '/ayuda/locales-jumbo/locales-jumbo',
      reference: '/ayuda/locales-jumbo/locales-jumbo',
      flag: context.jumbo,
      order: 3,
    });
    em.create(MostPopular, {
      label: 'Jumbo Prime',
      link: '/ayuda/jumbo-prime/que-es-jumbo-prime',
      reference: '/ayuda/jumbo-prime/que-es-jumbo-prime',
      flag: context.jumbo,
      order: 4,
    });
    em.create(MostPopular, {
      label: 'Cómo buscar productos',
      link: '/ayuda/comprar-jumbo/buscar-productos',
      reference: '/ayuda/comprar-jumbo/buscar-productos',
      flag: context.jumbo,
      order: 5,
    });
  }
}
