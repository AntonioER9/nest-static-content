import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { SocialMedia } from 'modules/content/social-media/entities/social-media.entity';

export class SocialMediaJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(SocialMedia, {
      name: 'facebook',
      link: 'https://www.facebook.com/jumbochile',
      icon: '/icons/rrss/facebook.svg',
      flag: context.jumbo,
    });

    em.create(SocialMedia, {
      name: 'twitter',
      link: 'https://twitter.com/jumbochile',
      icon: '/icons/rrss/twitter.svg',
      flag: context.jumbo,
    });

    em.create(SocialMedia, {
      name: 'instagram',
      link: 'https://www.instagram.com/jumbochile/',
      icon: '/icons/rrss/instagram.svg',
      flag: context.jumbo,
    });

    em.create(SocialMedia, {
      name: 'youtube',
      link: 'https://www.youtube.com/user/SupermercadoJumbo',
      icon: '/icons/rrss/youtube.svg',
      flag: context.jumbo,
    });
  }
}
