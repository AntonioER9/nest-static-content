import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterSubcategory } from 'modules/content/prefooters/entities/prefooter-subcategory.entity';

export class PrefootersSubcategoryEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1EasyCategory,
      label: 'Problemas con tu pedido',
      path: '/ayuda/despacho-retiro/problemas-con-despacho',
      order: 1,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1EasyCategory,
      label: 'Cómo modificar mis datos',
      path: 'https://www.easy.cl/UserRegistrationForm?editRegistration=Y&catalogId=10051&langId=-5&storeId=10151&userRegistrationStyle=strong',
      order: 2,
      display: false,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1EasyCategory,
      label: 'Servicio Técnico',
      path: 'https://www.easy.cl/es/cl/easy-chile/servicio-tecnico',
      order: 3,
      display: false,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1EasyCategory,
      label: 'Modos de entrega y cobertura',
      path: '/ayuda/despacho-retiro/cobertura-y-horarios-despacho',
      order: 4,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1EasyCategory,
      label: 'Retiro en Tienda',
      path: '/ayuda/despacho-retiro/informaciones-retiro-en-tienda',
      order: 5,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1EasyCategory,
      label: 'Despacho a domicilio',
      path: '/ayuda/despacho-retiro/cobertura-y-horarios-despacho',
      order: 6,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1EasyCategory,
      label: 'Cambios y Devoluciones',
      path: '/ayuda/servicios-postventa/cambios-y-devoluciones',
      order: 7,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1EasyCategory,
      label: 'Servicio al cliente',
      path: 'tel:6006003010',
      order: 9,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.easyCategory,
      label: 'Acerca de Easy',
      path: '/ayuda/acerca-easy/quienes-somos',
      order: 10,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.easyCategory,
      label: 'Acerca de Cencosud',
      path: 'https://www.cencosud.com/',
      order: 11,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.easyCategory,
      label: 'Nuestras Tiendas',
      path: 'https://www.easy.cl/es/cl/easy-chile/tiendas',
      order: 12,
      display: false,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.easyCategory,
      label: 'Consejos e Inspiración',
      path: 'https://inspiracionesparatuhogar.cl/?_ga=2.32411134.1508817699.1603720265-609916566.1601907563',
      order: 13,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Paris',
      path: 'https://www.paris.cl',
      order: 14,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Jumbo',
      path: 'https://www.jumbo.cl/',
      order: 15,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Santa Isabel',
      path: 'https://www.santaisabel.cl/',
      order: 16,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Tarjeta Cencosud Scotiabank',
      path: 'https://www.tarjetacencosud.cl/?utm_source=paris_cl&utm_medium=Footer&utm_content=rfcl&utm_campaign=Marca',
      order: 17,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Seguro Cencosud',
      path: 'https://www.seguroscencosud.cl/',
      order: 18,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Puntos Cencosud',
      path: '/ayuda/puntos-cencosud/informacion-puntos-cencosud',
      order: 19,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Giftcard',
      path: 'https://www.giftcard.cl/',
      order: 20,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Trabaja con Nosotros',
      path: 'https://cencosud.trabajando.com/',
      order: 21,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Venta Empresa',
      path: 'https://www.ventaempresascencosud.cl/',
      order: 22,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3EasyCategory,
      label: 'Venta Telefónica',
      path: 'tel:6004006400',
      order: 23,
    });
  }
}
