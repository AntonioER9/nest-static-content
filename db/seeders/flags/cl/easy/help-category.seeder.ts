import type { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpCategory } from 'modules/content/help-category/entities/help-category.entity';

export class HelpCategoryEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.comprarEasy = em.create(HelpCategory, {
      icon: '/icons/cards/buyInEasy.svg',
      title: 'Comprar en Easy.cl',
      reference: '/ayuda/seguimiento-compra',
      flag: context.easy,
    });

    context.miCuentaEasy = em.create(HelpCategory, {
      icon: '',
      title: 'Mi cuenta',
      reference: '/ayuda/mi-cuenta',
      flag: context.easy,
    });

    context.despachoRetiroEasy = em.create(HelpCategory, {
      icon: '/icons/cards/homeDelivery.svg',
      title: 'Despacho y retiro',
      reference: '/ayuda/despacho-retiro',
      flag: context.easy,
    });

    context.serviciosPosventaEasy = em.create(HelpCategory, {
      icon: '/icons/cards/servicesPostSales.svg',
      title: 'Servicios postventa',
      reference: '/ayuda/servicios-postventa',
      flag: context.easy,
    });

    context.acercaEasy = em.create(HelpCategory, {
      icon: '/icons/cards/buyInEasy.svg',
      title: 'Acerca de Easy',
      reference: '/ayuda/acerca-easy',
      flag: context.easy,
    });

    context.cencosudEasy = em.create(HelpCategory, {
      icon: '/icons/cards/cencosud.svg',
      title: 'Cencosud',
      reference: '/ayuda/cencosud',
      flag: context.easy,
    });
  }
}
