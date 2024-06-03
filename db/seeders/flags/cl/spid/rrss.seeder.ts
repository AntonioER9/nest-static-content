import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Rrss } from 'modules/content/rrss/entities/rrss.entity';

export class RrssSpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Rrss, {
      facebook: 'https://www.facebook.com/Spidchile-100305485373377',
      instagram: 'https://www.instagram.com/spidchile/',
      flag: context.spid,
    });
  }
}
