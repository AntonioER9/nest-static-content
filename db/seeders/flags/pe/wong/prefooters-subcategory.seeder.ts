import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterSubcategory } from 'modules/content/prefooters/entities/prefooter-subcategory.entity';

export class PrefootersSubcategoryWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1WongCategory,
      label: 'Beneficios',
      path: 'https://www.wong.pe/institucional/beneficios',
      order: 1,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1WongCategory,
      label: 'Cómo Comprar',
      path: 'https://www.wong.pe/como-comprar',
      order: 2,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1WongCategory,
      label: 'Medios de Pago',
      path: 'https://www.wong.pe/institucional/medios-de-pago',
      order: 3,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1WongCategory,
      label: 'Servicios de entrega',
      path: 'https://www.wong.pe/institucional/servicios-de-entrega',
      order: 4,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1WongCategory,
      label: 'Condiciones de Promociones',
      path: 'https://www.wong.pe/legales',
      order: 5,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.wongCategory,
      label: 'Bienvenidos a Wong',
      path: 'https://www.wong.pe/institucional/bienvenidos',
      order: 6,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.wongCategory,
      label: 'Ventas Corporativas',
      path: 'https://www.wong.pe/institucional/ventas-corporativas',
      order: 7,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.wongCategory,
      label: 'Memoria Cencosud',
      path: 'http://s2.q4cdn.com/740885614/files/doc_financials/2020/ar/Memoria-Cencosud-2020.pdf',
      order: 8,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Paris',
      path: 'https://www.paris.cl',
      order: 9,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Jumbo',
      path: 'https://www.jumbo.cl/',
      order: 10,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Sisa',
      path: 'https://www.santaisabel.cl/',
      order: 11,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Easy',
      path: 'https://www.easy.cl/tienda/',
      order: 12,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Tarjeta Cencosud Scotiabank',
      path: 'https://www.tarjetacencosud.cl/TarjetaMasWEB/inicio.do?utm_source=jumbo_cl&utm_medium=Footer&utm_content=rfcl&utm_campaign=Marca',
      order: 13,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Seguro Cencosud',
      path: 'https://www.seguroscencosud.cl/',
      order: 14,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Puntos Cencosud',
      path: '/ayuda/puntos-cencosud/informacion-puntos-cencosud',
      order: 15,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Giftcard',
      path: 'https://www.giftcard.cl/',
      order: 16,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Trabaja con Nosotros',
      path: 'https://cencosud.trabajando.com/',
      order: 17,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3WongCategory,
      label: 'Venta Empresa',
      path: 'https://www.ventaempresascencosud.cl/',
      order: 18,
    });
  }
}
