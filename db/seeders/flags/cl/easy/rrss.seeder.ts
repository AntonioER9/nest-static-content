import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Rrss } from 'modules/content/rrss/entities/rrss.entity';

export class RrssEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Rrss, {
      facebook: 'https://www.facebook.com/easychile/',
      twitter: 'https://twitter.com/easytienda/',
      instagram: 'https://www.instagram.com/easytienda/',
      youtube: 'https://www.youtube.com/user/easychile',
      flag: context.easy,
    });
  }
}
