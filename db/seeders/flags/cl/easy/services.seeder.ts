import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Service } from 'modules/content/services/entities/service.entity';

export class ServicesEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Service, {
      icon: '/icons/services/contacto.svg',
      label: 'Contáctanos',
      label_mobile: 'Ingresa tu solicitud, notifica el problema y nosotros lo resolvemos',
      actionLabel: 'Crear solicitud',
      flag: context.easy,
      order: 1,
      invitedReference: '/ayuda/contactanos',
      reference: '/ayuda/contactanos',
    });
    em.create(Service, {
      icon: '/icons/services/pedido.svg',
      label: 'Mis compras',
      label_mobile: '- Seguimiento de compra\n- Recuperar boleta',
      actionLabel: 'Ir a Mis compras',
      flag: context.easy,
      order: 2,
      invitedReference: '/mis-compras',
      reference: '/mis-compras',
    });
  }
}
