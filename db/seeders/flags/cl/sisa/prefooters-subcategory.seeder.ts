import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterSubcategory } from 'modules/content/prefooters/entities/prefooter-subcategory.entity';

export class PrefootersSubcategorySisaSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SisaCategory,
      label: 'Problemas con tu pedido',
      path: '/ayuda/problemas-con-pedido/inconvenientes-productos',
      order: 1,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SisaCategory,
      label: 'Información de Pago',
      path: '/ayuda/medios-de-pago/problemas-cobro-tarjeta-debito',
      order: 2,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SisaCategory,
      label: 'Cómo modificar mis datos',
      path: '/ayuda/modificar-datos/actualizar-datos-clave',
      order: 3,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SisaCategory,
      label: 'Modos de Entrega y Cobertura',
      path: '/ayuda/despacho-retiro/modos-entrega-despacho-retiro',
      order: 4,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SisaCategory,
      label: 'Locales Santa Isabel',
      path: '/ayuda/locales-santa-isabel/locales-santa-isabel',
      order: 5,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1SisaCategory,
      label: 'Cómo comprar en SantaIsabel.cl',
      path: '/ayuda/comprar-santa-isabel/crear-cuenta',
      order: 6,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.sisaCategory,
      label: 'Locales Santa Isabel',
      path: '/ayuda/locales-santa-isabel/locales-santa-isabel',
      order: 7,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.sisaCategory,
      label: 'Productos Exclusivos',
      path: 'https://www.santaisabel.cl/busca?fq=H:777',
      order: 8,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.sisaCategory,
      label: 'Proveedores',
      path: 'https://www.santaisabel.cl/institucional/proveedores',
      order: 9,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.sisaCategory,
      label: 'Concursos',
      path: 'https://www.santaisabel.cl/institucional/concursos',
      order: 10,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Paris',
      path: 'https://www.paris.cl',
      order: 11,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Jumbo',
      path: 'https://www.jumbo.cl/',
      order: 12,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Easy',
      path: 'https://www.easy.cl/tienda/',
      order: 13,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Tarjeta Cencosud Scotiabank',
      path: 'https://www.tarjetacencosud.cl/TarjetaMasWEB/inicio.do?utm_source=jumbo_cl&utm_medium=Footer&utm_content=rfcl&utm_campaign=Marca',
      order: 14,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Seguro Cencosud',
      path: 'https://www.seguroscencosud.cl/',
      order: 15,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Puntos Cencosud',
      path: '/ayuda/puntos-cencosud/informacion-puntos-cencosud',
      order: 16,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Giftcard',
      path: 'https://www.giftcard.cl/',
      order: 17,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Trabaja con Nosotros',
      path: 'https://cencosud.trabajando.com/',
      order: 18,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3SisaCategory,
      label: 'Venta Empresa',
      path: 'https://www.ventaempresascencosud.cl/',
      order: 19,
    });
  }
}
