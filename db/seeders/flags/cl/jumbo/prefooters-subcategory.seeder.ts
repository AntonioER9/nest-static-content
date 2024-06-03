import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterSubcategory } from 'modules/content/prefooters/entities/prefooter-subcategory.entity';

export class PrefootersSubcategoryJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1JumboCategory,
      label: 'Información de pago',
      path: '/ayuda/medios-pago/medios-pago',
      order: 2,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1JumboCategory,
      label: 'Cómo modificar mis datos',
      path: '/ayuda/modificar-datos/actualizar-datos',
      order: 3,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1JumboCategory,
      label: 'Modos de Entrega y Cobertura',
      path: '/ayuda/despacho-retiro/modos-entrega',
      order: 4,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1JumboCategory,
      label: 'Locales Jumbo',
      path: '/ayuda/locales-jumbo/locales-jumbo',
      order: 5,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1JumboCategory,
      label: 'Cómo comprar en Jumbo.cl',
      path: '/ayuda/comprar-jumbo/crear-cuenta',
      order: 6,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1JumboCategory,
      label: 'Servicio al Cliente',
      path: '/ayuda/servicio-cliente/informacion-contacto',
      order: 7,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.jumboCategory,
      label: 'Compromisos Jumbo',
      path: 'https://www.jumbo.cl/institucional/compromisos',
      order: 8,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.jumboCategory,
      label: 'Mundos Jumbo',
      path: 'https://www.mundosjumbo.cl/?_ga=2.61730031.2142417556.1603736550-906526711.1601907393',
      order: 9,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.jumboCategory,
      label: 'Locales Jumbo',
      path: '/ayuda/locales-jumbo/locales-jumbo',
      order: 10,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.jumboCategory,
      label: 'Productos',
      path: 'https://www.jumbo.cl/jumbo',
      order: 11,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.jumboCategory,
      label: 'Jumbo Proveedores',
      path: 'https://www.jumbo.cl/institucional/proveedores',
      order: 12,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.jumboCategory,
      label: 'Concursos',
      path: 'https://www.jumbo.cl/institucional/concursos',
      order: 13,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Paris',
      path: 'https://www.paris.cl/',
      order: 14,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Easy',
      path: 'https://www.easy.cl/tienda/',
      order: 15,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Santa Isabel',
      path: 'https://www.santaisabel.cl/',
      order: 16,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Tarjeta Cencosud Scotiabank',
      path: 'https://www.tarjetacencosud.cl/TarjetaMasWEB/inicio.do?utm_source=jumbo_cl&utm_medium=Footer&utm_content=rfcl&utm_campaign=Marca',
      order: 17,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Seguro Cencosud',
      path: 'https://www.seguroscencosud.cl/',
      order: 18,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Puntos Cencosud',
      path: '/ayuda/puntos-cencosud/informacion-puntos-cencosud',
      order: 19,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Giftcard',
      path: 'https://www.giftcard.cl/',
      order: 20,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Trabaja con Nosotros',
      path: 'https://cencosud.trabajando.com/',
      order: 21,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3JumboCategory,
      label: 'Venta Empresa',
      path: 'https://www.ventaempresascencosud.cl/',
      order: 22,
    });
  }
}
