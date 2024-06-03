import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterSubcategory } from 'modules/content/prefooters/entities/prefooter-subcategory.entity';

export class PrefootersSubcategorySpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SpidCategory,
      label: 'Contáctanos',
      path: '/ayuda/contactanos',
      order: 3,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SpidCategory,
      label: 'Comprar en Spid',
      path: '/ayuda/comprar-spid/como-hago-un-pedido',
      order: 1,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SpidCategory,
      label: 'Modificar datos',
      path: '/ayuda/modificar-datos/quiero-cambiar-mis-datos',
      order: 2,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SpidCategory,
      label: 'Buscar Productos',
      path: '/ayuda/comprar-spid/como-busco-productos',
      order: 3,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SpidCategory,
      label: 'Problemas con un pedido',
      path: '/ayuda/problemas-pedido/producto-cobrado-y-no-enviado',
      order: 4,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SpidCategory,
      label: 'Medios de Pago',
      path: '/ayuda/medios-pago/cuales-son-los-medios-de-pago-disponibles',
      order: 5,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SpidCategory,
      label: 'Servicio al cliente',
      path: '/ayuda/servicio-cliente/servicio-al-cliente',
      order: 6,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.spidCategory,
      label: '¿Cómo funciona?',
      path: 'https://spidchile.cl/',
      order: 7,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.spidCategory,
      label: '¿Dónde repartimos?',
      path: 'https://spidchile.cl/',
      order: 8,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.spidCategory,
      label: 'Nuestras tiendas',
      path: 'https://spidchile.cl/',

      order: 9,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Paris',
      path: 'https://www.paris.cl/',
      order: 10,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Jumbo',
      path: 'https://www.jumbo.cl/',
      order: 11,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Easy',
      path: 'https://www.easy.cl/tienda/',
      order: 12,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Santa Isabel',
      path: 'https://www.santaisabel.cl/',
      order: 13,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Tarjeta Cencosud Scotiabank',
      path: 'https://www.tarjetacencosud.cl/TarjetaMasWEB/inicio.do?utm_source=jumbo_cl&utm_medium=Footer&utm_content=rfcl&utm_campaign=Marca',
      order: 14,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Seguro Cencosud',
      path: 'https://www.seguroscencosud.cl/',
      order: 15,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Puntos Cencosud',
      path: '/ayuda/puntos-cencosud/informacion-puntos-cencosud',
      order: 16,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Giftcard',
      path: 'https://www.giftcard.cl/',
      order: 17,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Trabaja con Nosotros',
      path: 'https://cencosud.trabajando.com/',
      order: 18,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SpidCategory,
      label: 'Venta Empresa',
      path: 'https://www.ventaempresascencosud.cl/',
      order: 19,
    });
  }
}
