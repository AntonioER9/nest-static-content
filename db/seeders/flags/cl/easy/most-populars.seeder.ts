import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MostPopular } from 'modules/content/most-populars/entities/most-populars.entity';

export class MostPopularsEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(MostPopular, {
      label: 'Cómo comprar',
      link: '/ayuda/seguimiento-compra/como-comprar',
      reference: '/ayuda/seguimiento-compra/como-comprar',
      flag: context.easy,
      order: 1,
    });
    em.create(MostPopular, {
      label: 'Tiendas Easy',
      link: 'https://www.easy.cl/es/cl/easy-chile/tiendas',
      reference: 'https://www.easy.cl/es/cl/easy-chile/tiendas',
      flag: context.easy,
      order: 2,
    });
    em.create(MostPopular, {
      label: 'Cambios y devoluciones',
      link: '/ayuda/servicios-postventa/cambios-y-devoluciones',
      reference: '/ayuda/servicios-postventa/cambios-y-devoluciones',
      flag: context.easy,
      order: 3,
    });
    em.create(MostPopular, {
      label: 'Tarjeta Cencosud',
      link: 'https://www.tarjetacencosud.cl',
      reference: 'https://www.tarjetacencosud.cl',
      flag: context.easy,
      order: 4,
    });
  }
}
