import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MostPopular } from 'modules/content/most-populars/entities/most-populars.entity';

export class MostPopularsSisaSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(MostPopular, {
      label: '¿Cómo seguir mi pedido?',
      link: '/ayuda/problemas-con-pedido/atraso-en-entrega-pedido',
      reference: '/ayuda/problemas-con-pedido/atraso-en-entrega-pedido',
      flag: context.sisa,
      order: 1,
    });
    em.create(MostPopular, {
      label: 'Locales Santa Isabel',
      link: '/ayuda/locales-santa-isabel/locales-santa-isabel',
      reference: '/ayuda/locales-santa-isabel/locales-santa-isabel',
      flag: context.sisa,
      order: 2,
    });
    em.create(MostPopular, {
      label: 'Cobro tarjeta débito',
      link: '/ayuda/medios-de-pago/problemas-cobro-tarjeta-debito',
      reference: '/ayuda/medios-de-pago/problemas-cobro-tarjeta-debito',
      flag: context.sisa,
      order: 3,
    });
    em.create(MostPopular, {
      label: 'Medios de pago',
      link: '/ayuda/medios-de-pago/medios-de-pago',
      reference: '/ayuda/medios-de-pago/medios-de-pago',
      flag: context.sisa,
      order: 4,
    });
    em.create(MostPopular, {
      label: 'Cómo crear una cuenta',
      link: '/ayuda/comprar-santa-isabel/crear-cuenta',
      reference: '/ayuda/comprar-santa-isabel/crear-cuenta',
      flag: context.sisa,
      order: 5,
    });
  }
}
