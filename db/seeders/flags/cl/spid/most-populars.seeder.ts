import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MostPopular } from 'modules/content/most-populars/entities/most-populars.entity';

export class MostPopularsSpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(MostPopular, {
      label: 'Cobertura Spid',
      link: 'https://spidchile.cl/',
      reference: 'https://spidchile.cl/',
      flag: context.spid,
      order: 1,
    });
    em.create(MostPopular, {
      label: 'Buscar Productos',
      link: '/ayuda/comprar-spid/stock-de-productos',
      reference: '/ayuda/comprar-spid/stock-de-productos',
      flag: context.spid,
      order: 2,
    });
    em.create(MostPopular, {
      label: 'Medios de Pago',
      link: '/ayuda/medios-pago/cuales-son-los-medios-de-pago-disponibles',
      reference: '/ayuda/medios-pago/cuales-son-los-medios-de-pago-disponibles',
      flag: context.spid,
      order: 3,
    });
    em.create(MostPopular, {
      label: 'Problemas con mi pedido',
      link: '/ayuda/problemas-pedido/producto-cobrado-y-no-enviado',
      reference: '/ayuda/problemas-pedido/producto-cobrado-y-no-enviado',
      flag: context.spid,
      order: 4,
    });
    em.create(MostPopular, {
      label: 'Cambio de clave',
      link: '/ayuda/modificar-datos/quiero-cambiar-mi-clave',
      reference: '/ayuda/modificar-datos/quiero-cambiar-mi-clave',
      flag: context.spid,
      order: 5,
    });
  }
}
