import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Banner } from 'modules/content/banners/entities/banner.entity';

export class BannersParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Banner, {
      title: '¿Sabes cómo generar una solicitud o reclamo?',
      body: '# Aprende cómo autogestionar tus casos y ahorrar tiempo.',
      button: 'Descubrir más',
      action: '/ayuda/servicios-postventa/como-ingresar-solicitud',
      icon: 'icons/boot.svg',
      image: '/images/banner-img.svg',
      alt: 'image',
      order: 1,
      active: true,
      flag: context.paris,
    });
  }
}
