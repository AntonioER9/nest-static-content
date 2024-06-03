import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { InfoMessage } from 'modules/content/info-messages/entities/info-message.entity';

export class InfoMessagesWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(InfoMessage, {
      message:
        '**Importante: tenemos una nueva forma de cobro** Para mejorar tu experiencia de compra hemos creado un nuevo sistema de cobro en las tarjetas de crédito y débito. Infórmate [aquí](/ayuda/medios-de-pago/cobro-tarjeta).',
      flag: context.wong,
      display: false,
    });
  }
}
