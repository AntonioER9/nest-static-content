import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Rrss } from 'modules/content/rrss/entities/rrss.entity';

export class RrssParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Rrss, {
      facebook: 'https://www.facebook.com/TiendasParis',
      twitter: 'https://twitter.com/tiendas_paris',
      instagram: 'https://www.instagram.com/tiendas_paris/',
      flag: context.paris,
    });
  }
}
