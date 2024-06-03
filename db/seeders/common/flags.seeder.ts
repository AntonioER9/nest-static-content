import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Flag } from 'modules/flags/entities/flag.entity';

export class FlagsSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.jumbo = em.create(Flag, {
      label: 'jumbo',
    });

    context.paris = em.create(Flag, {
      label: 'paris',
    });

    context.easy = em.create(Flag, {
      label: 'easy',
    });

    context.sisa = em.create(Flag, {
      label: 'sisa',
    });

    context.spid = em.create(Flag, {
      label: 'spid',
    });

    context.ghost = em.create(Flag, {
      label: 'ghost',
    });
    context.wong = em.create(Flag, {
      label: 'wong',
    });
  }
}
