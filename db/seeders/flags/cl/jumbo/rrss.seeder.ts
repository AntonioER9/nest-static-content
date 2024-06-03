import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Rrss } from 'modules/content/rrss/entities/rrss.entity';

export class RrssJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Rrss, {
      facebook: 'https://www.facebook.com/jumbochile',
      twitter: 'https://twitter.com/jumbochile',
      instagram: 'https://www.instagram.com/jumbochile/',
      youtube: 'https://www.youtube.com/user/SupermercadoJumbo',
      flag: context.jumbo,
    });
  }
}
