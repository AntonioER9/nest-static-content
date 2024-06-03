import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { SocialMedia } from 'modules/content/social-media/entities/social-media.entity';

export class SocialMediaParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(SocialMedia, {
      name: 'facebook',
      link: 'https://www.facebook.com/TiendasParis',
      icon: '/icons/rrss/facebook.svg',
      flag: context.paris,
    });

    em.create(SocialMedia, {
      name: 'twitter',
      link: 'https://twitter.com/tiendas_paris',
      icon: '/icons/rrss/twitter.svg',
      flag: context.paris,
    });

    em.create(SocialMedia, {
      name: 'instagram',
      link: 'https://www.instagram.com/tiendas_paris/',
      icon: '/icons/rrss/instagram.svg',
      flag: context.paris,
    });
  }
}
