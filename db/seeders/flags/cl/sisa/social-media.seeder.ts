import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { SocialMedia } from 'modules/content/social-media/entities/social-media.entity';

export class SocialMediaSisaSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(SocialMedia, {
      name: 'facebook',
      link: 'https://www.facebook.com/SantaIsabelChile/',
      icon: '/icons/rrss/facebook.svg',
      flag: context.sisa,
    });

    em.create(SocialMedia, {
      name: 'twitter',
      link: 'https://twitter.com/santaisabelcl?lang=es',
      icon: '/icons/rrss/twitter.svg',
      flag: context.sisa,
    });

    em.create(SocialMedia, {
      name: 'instagram',
      link: 'https://www.instagram.com/santaisabelcl/',
      icon: '/icons/rrss/instagram.svg',
      flag: context.sisa,
    });

    em.create(SocialMedia, {
      name: 'youtube',
      link: 'https://www.youtube.com/channel/UCxGa6vKRwa_wpfSZv6cDzCQ',
      icon: '/icons/rrss/youtube.svg',
      flag: context.sisa,
    });
  }
}
