import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { SocialMedia } from 'modules/content/social-media/entities/social-media.entity';

export class SocialMediaEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(SocialMedia, {
      name: 'facebook',
      link: 'https://www.facebook.com/easychile/',
      icon: '/icons/rrss/facebook.svg',
      flag: context.easy,
    });

    em.create(SocialMedia, {
      name: 'twitter',
      link: 'https://twitter.com/easytienda/',
      icon: '/icons/rrss/twitter.svg',
      flag: context.easy,
    });

    em.create(SocialMedia, {
      name: 'instagram',
      link: 'https://www.instagram.com/easytienda/',
      icon: '/icons/rrss/instagram.svg',
      flag: context.easy,
    });

    em.create(SocialMedia, {
      name: 'youtube',
      link: 'https://www.youtube.com/user/easychile',
      icon: '/icons/rrss/youtube.svg',
      flag: context.easy,
    });
  }
}
