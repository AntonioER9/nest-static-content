import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Banner } from 'modules/content/banners/entities/banner.entity';

export class BannersJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Banner, {
      title: '¿Sabes cómo generar una solicitud?',
      body: 'Aprende cómo autogestionar tus casos y ahorrar tiempo.',
      button: 'Descubrir más',
      action: '/ayuda/problemas-pedido/como-ingresar-solicitud',
      icon: 'icons/boot.svg',
      image: '/images/banner-img.svg',
      alt: 'image',
      order: 1,
      active: true,
      flag: context.jumbo,
    });
  }
}