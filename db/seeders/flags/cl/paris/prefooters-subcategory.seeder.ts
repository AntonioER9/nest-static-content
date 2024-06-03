import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PrefooterSubcategory } from 'modules/content/prefooters/entities/prefooter-subcategory.entity';

export class PrefootersSubcategoryParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1ParisCategory,
      label: 'Seguimiento de mis compras',
      path: 'http://www.paris.cl/mi-cuenta/mis-compras',
      order: 1,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1ParisCategory,
      label: 'Recuperar mi boleta',
      path: 'http://www.paris.cl/mi-cuenta/mis-compras',
      order: 2,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1ParisCategory,
      label: 'Servicios postventa',
      path: '/ayuda/servicios-postventa/servicio-armado',
      order: 3,
      display: false,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1ParisCategory,
      label: 'Garantía de producto',
      path: '/ayuda/garantia-de-producto/garantia-minima-legal',
      order: 4,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1ParisCategory,
      label: 'Cambios y devoluciones',
      path: '/ayuda/servicios-postventa/cambios-devoluciones',
      order: 5,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1ParisCategory,
      label: 'Medios de pago',
      path: '/ayuda/comprar-en-paris/medios-pago',
      order: 6,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1ParisCategory,
      label: 'Servicio al Cliente',
      path: 'tel:6004008000',
      order: 7,
      display: false,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.parisCategory,
      label: '',
      path: '',
      order: 9,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.parisCategory,
      label: 'Novios Paris',
      path: 'https://club.noviosparis.cl/home',
      order: 10,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.parisCategory,
      label: 'Bebé Paris',
      path: 'http://www.bebeparis.cl/',
      order: 11,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.parisCategory,
      label: 'Casa Paris',
      path: 'http://www.casaparis.cl/',
      order: 12,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.parisCategory,
      label: 'Conciencia Celeste',
      path: 'https://www.paris.cl/conciencia-celeste/',
      order: 13,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.parisCategory,
      label: 'Cyber Day',
      path: 'https://www.paris.cl/cyberday/',
      order: 14,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Jumbo',
      path: 'https://www.jumbo.cl/',
      order: 16,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Easy',
      path: 'https://www.easy.cl/tienda/',
      order: 17,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Santa Isabel',
      path: 'https://www.santaisabel.cl/',
      order: 18,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Tarjeta Cencosud',
      path: 'https://www.tarjetacencosud.cl/?utm_source=Paris_cl&utm_medium=Footer&utm_campaign=Marca&utm_content=home-publico',
      order: 19,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Seguros Cencosud',
      path: 'https://www.seguroscencosud.cl/',
      order: 21,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Puntos Cencosud',
      path: 'https://www.puntoscencosud.cl/puntos/ingresar',
      order: 22,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Venta Empresa',
      path: 'https://www.ventaempresascencosud.cl/',
      order: 23,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Venta Telefónica',
      path: 'tel:6004006400',
      order: 0,
      display: false,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Trabaja con Nosotros',
      path: 'https://cencosud.trabajando.com/',
      order: 24,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.parisCategory,
      label: 'Día de la Madre',
      path: 'https://www.paris.cl/dia-de-la-madre/',
      order: 15,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column3ParisCategory,
      label: 'Scotiabank',
      path: 'https://www.scotiabankchile.cl/',
      order: 20,
    });
    em.create(PrefooterSubcategory, {
      titleCategory: context.column1ParisCategory,
      label: 'Atención por Whatsapp',
      path: 'https://api.whatsapp.com/send/?phone=56964963826&text&app_absent=0',
      order: 8,
    });
  }
}
