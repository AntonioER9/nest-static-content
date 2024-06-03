import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { MostPopular } from 'modules/content/most-populars/entities/most-populars.entity';

export class MostPopularsParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(MostPopular, {
      label: 'Cambios y devoluciones',
      link: '/ayuda/servicios-postventa/cambios-devoluciones',
      reference: '/ayuda/servicios-postventa/cambios-devoluciones',
      flag: context.paris,
      order: 1,
    });
    em.create(MostPopular, {
      label: 'Garantía extendida',
      link: '/ayuda/garantia-de-producto/garantia-extendida',
      reference: '/ayuda/garantia-de-producto/garantia-extendida',
      flag: context.paris,
      order: 2,
    });
    em.create(MostPopular, {
      label: 'Horario y plazo de entrega',
      link: '/ayuda/despacho-a-domicilio/horario-tipos-de-despacho',
      reference: '/ayuda/despacho-a-domicilio/horario-tipos-de-despacho',
      flag: context.paris,
      order: 3,
    });
    em.create(MostPopular, {
      label: 'Servicio técnico',
      link: '/ayuda/servicios-postventa/servicio-tecnico',
      reference: '/ayuda/servicios-postventa/servicio-tecnico',
      flag: context.paris,
      order: 4,
    });
    em.create(MostPopular, {
      label: 'Tarjeta Cencosud',
      link: 'https://www.tarjetacencosud.cl/TarjetaMasWEB/home.html',
      reference: 'https://www.tarjetacencosud.cl/TarjetaMasWEB/home.html',
      flag: context.paris,
      order: 5,
    });
  }
}
