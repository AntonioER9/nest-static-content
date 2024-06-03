import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Banner } from 'modules/content/banners/entities/banner.entity';

export class BannersWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Banner, {
      title: '¿Conoces Wong Prime?',
      body: '# Disfruta de muchos beneficios con el programa de membresia',
      button: 'Descubrir más',
      action: 'https://www.wongprime.pe/',
      icon: 'icons/boot.svg',
      image: '/images/banner-wong-img.svg',
      alt: 'image',
      order: 1,
      active: true,
      flag: context.wong,
    });
  }
}
