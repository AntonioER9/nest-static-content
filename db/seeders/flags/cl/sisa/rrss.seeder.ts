import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Rrss } from 'modules/content/rrss/entities/rrss.entity';

export class RrssSisaSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Rrss, {
      facebook: 'https://www.facebook.com/SantaIsabelChile/',
      twitter: 'https://twitter.com/santaisabelcl?lang=es',
      instagram: 'https://www.instagram.com/santaisabelcl/',
      youtube: 'https://www.youtube.com/channel/UCxGa6vKRwa_wpfSZv6cDzCQ',
      flag: context.sisa,
    });
  }
}
