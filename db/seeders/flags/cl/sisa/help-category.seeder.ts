import type { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpCategory } from 'modules/content/help-category/entities/help-category.entity';

export class HelpCategorySisaSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.comprarSisa = em.create(HelpCategory, {
      icon: '/icons/cards/buyInSisa.svg',
      title: 'Comprar en SantaIsabel.cl',
      reference: '/ayuda/comprar-santa-isabel',
      flag: context.sisa,
    });

    context.problemasPedidoSisa = em.create(HelpCategory, {
      icon: '/icons/cards/orderProblems.svg',
      title: 'Problemas con pedido',
      reference: '/ayuda/problemas-con-pedido',
      flag: context.sisa,
    });

    context.mediosPagoSisa = em.create(HelpCategory, {
      icon: '/icons/cards/methodsPayment.svg',
      title: 'Medios de Pago',
      reference: '/ayuda/medios-de-pago',
      flag: context.sisa,
    });

    context.despachoRetiroSisa = em.create(HelpCategory, {
      icon: '/icons/cards/homeDelivery.svg',
      title: 'Despacho y Retiro',
      reference: '/ayuda/despacho-retiro',
      flag: context.sisa,
    });

    context.puntosCencosudSisa = em.create(HelpCategory, {
      icon: '/icons/cards/cencosudPoints.svg',
      title: 'Puntos Cencosud',
      reference: '/ayuda/puntos-cencosud',
      flag: context.sisa,
    });

    context.modificarDatosSisa = em.create(HelpCategory, {
      icon: '/icons/cards/changeInfo.svg',
      title: 'Modificar Datos',
      reference: '/ayuda/modificar-datos',
      flag: context.sisa,
    });

    context.servicioClienteSisa = em.create(HelpCategory, {
      icon: '/icons/cards/customerService.svg',
      title: 'Servicio al Cliente',
      reference: '/ayuda/servicio-cliente',
      flag: context.sisa,
    });

    context.localesSisa = em.create(HelpCategory, {
      icon: '/icons/cards/shop.svg',
      title: 'Locales Santa Isabel',
      reference: '/ayuda/locales-santa-isabel',
      flag: context.sisa,
    });
  }
}
