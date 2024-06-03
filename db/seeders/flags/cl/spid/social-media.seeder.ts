import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { SocialMedia } from 'modules/content/social-media/entities/social-media.entity';

export class SocialMediaSpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(SocialMedia, {
      name: 'facebook',
      link: 'https://www.facebook.com/Spidchile-100305485373377',
      icon: '/icons/rrss/facebook.svg',
      flag: context.spid,
    });

    em.create(SocialMedia, {
      name: 'instagram',
      link: 'https://www.instagram.com/spidchile/',
      icon: '/icons/rrss/instagram.svg',
      flag: context.spid,
    });
  }
}
