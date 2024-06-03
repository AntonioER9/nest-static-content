import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { InfoMessage } from 'modules/content/info-messages/entities/info-message.entity';

export class InfoMessagesParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(InfoMessage, {
      message:
        '**¡Agiliza tus reembolsos!**\n\nActualiza tu cuenta bancaria y recibe reembolsos más rápidos. [Ir a actualizar](https://www.paris.cl/?showform=true&targeturl=/mi-cuenta/datos-bancarios).',
      flag: context.paris,
    });
  }
}
