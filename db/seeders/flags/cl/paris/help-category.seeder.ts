import type { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpCategory } from 'modules/content/help-category/entities/help-category.entity';

export class HelpCategoryParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.serviciosPosventaParis = em.create(HelpCategory, {
      icon: '/icons/cards/servicesPostSales.svg',
      title: 'Servicios postventa',
      reference: '/ayuda/servicios-postventa',
      flag: context.paris,
    });

    context.despachoDomicilioParis = em.create(HelpCategory, {
      icon: '/icons/cards/homeDelivery.svg',
      title: 'Despacho a domicilio',
      reference: '/ayuda/despacho-a-domicilio',
      flag: context.paris,
    });

    context.retiroTiendaParis = em.create(HelpCategory, {
      icon: '/icons/cards/storeRetire.svg',
      title: 'Retiro en tienda',
      reference: '/ayuda/retiro-en-tienda',
      flag: context.paris,
    });

    context.garantiaProductosParis = em.create(HelpCategory, {
      icon: '/icons/cards/productWarranty.svg',
      title: 'Garantía de productos',
      reference: '/ayuda/garantia-de-producto',
      flag: context.paris,
    });

    context.comprarParis = em.create(HelpCategory, {
      icon: '/icons/cards/buyInParis.svg',
      title: 'Comprar en paris',
      reference: '/ayuda/comprar-en-paris',
      flag: context.paris,
    });

    context.cencosudParis = em.create(HelpCategory, {
      icon: '/icons/cards/cencosud.svg',
      title: 'Cencosud',
      reference: '/ayuda/cencosud',
      flag: context.paris,
    });

    context.accesibilidadParis = em.create(HelpCategory, {
      icon: '/icons/cards/a11y.svg',
      title: 'Accesibilidad',
      reference: '/ayuda/accesibilidad',
      flag: context.paris,
    });
  }
}
