import type { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpCategory } from 'modules/content/help-category/entities/help-category.entity';

export class HelpCategoryJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.comprarJumbo = em.create(HelpCategory, {
      icon: '/icons/cards/buyInJumbo.svg',
      title: 'Comprar en Jumbo.cl',
      reference: '/ayuda/comprar-jumbo',
      flag: context.jumbo,
    });

    context.problemasPedidoJumbo = em.create(HelpCategory, {
      icon: '/icons/cards/orderProblems.svg',
      title: 'Problemas con pedido',
      reference: '/ayuda/problemas-pedido',
      flag: context.jumbo,
    });

    context.mediosPagoJumbo = em.create(HelpCategory, {
      icon: '/icons/cards/methodsPayment.svg',
      title: 'Medios de Pago',
      reference: '/ayuda/medios-pago',
      flag: context.jumbo,
    });

    context.localesJumbo = em.create(HelpCategory, {
      icon: '/icons/cards/shop.svg',
      title: 'Locales Jumbo',
      reference: '/ayuda/locales-jumbo',
      flag: context.jumbo,
    });

    context.despachoRetiroJumbo = em.create(HelpCategory, {
      icon: '/icons/cards/homeDelivery.svg',
      title: 'Despacho y Retiro',
      reference: '/ayuda/despacho-retiro',
      flag: context.jumbo,
    });

    context.puntosCencosudJumbo = em.create(HelpCategory, {
      icon: '/icons/cards/cencosudPoints.svg',
      title: 'Puntos Cencosud',
      reference: '/ayuda/puntos-cencosud',
      flag: context.jumbo,
    });

    context.modificarDatosJumbo = em.create(HelpCategory, {
      icon: '/icons/cards/changeInfo.svg',
      title: 'Modificar Datos',
      reference: '/ayuda/modificar-datos',
      flag: context.jumbo,
    });

    context.servicioClienteJumbo = em.create(HelpCategory, {
      icon: '/icons/cards/customerService.svg',
      title: 'Servicio al Cliente',
      reference: '/ayuda/servicio-cliente',
      flag: context.jumbo,
    });

    context.jumboPrime = em.create(HelpCategory, {
      icon: '/icons/cards/jumboPrime.svg',
      title: 'Jumbo Prime',
      reference: '/ayuda/jumbo-prime',
      flag: context.jumbo,
    });
  }
}
