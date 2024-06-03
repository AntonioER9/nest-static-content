import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { ContactChannel } from 'modules/content/contact-channels/entities/contact-channel.entity';

export class ContactChannelJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.contactoCanalDeContactoJumbo = em.create(ContactChannel, {
      icon: '/icons/cards/contacto.svg',
      title: 'Contáctanos',
      buttonLabel: 'Ir al Formulario',
      actionType: 'redirect-int',
      reference: '/ayuda/contactanos',
      order: 1,
      flag: context.jumbo,
    });

    context.whatsappCanalDeContactoJumbo = em.create(ContactChannel, {
      icon: '/icons/cards/whatsapp.svg',
      title: '+56 9 4154 0961',
      buttonLabel: 'Ir a Whatsapp Prime',
      actionType: 'redirect-ext',
      reference: 'https://api.whatsapp.com/send/?phone=56941540961&text&type=phone_number&app_absent=0',
      order: 2,
      flag: context.jumbo,
    });

    context.callCenterCanalDeContactoJumbo = em.create(ContactChannel, {
      icon: '/icons/cards/callcenter.svg',
      title: '600 400 3000',
      buttonLabel: 'Llamar al Call Center',
      actionType: 'redirect-ext',
      reference: 'tel:6004003000',
      order: 3,
      flag: context.jumbo,
    });
  }
}
