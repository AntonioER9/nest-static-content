import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Service } from 'modules/content/services/entities/service.entity';

export class ServicesSpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Service, {
      icon: '/icons/services/contacto.svg',
      label: 'Contáctanos',
      label_mobile: 'Ingresa tu solicitud, notifica el problema y nosotros lo resolvemos',
      actionLabel: 'Crear solicitud',
      flag: context.spid,
      order: 1,
      invitedReference: '/ayuda/contactanos',
      reference: '/ayuda/contactanos',
    });
    em.create(Service, {
      icon: '/icons/services/solicitud.svg',
      label: 'Estado de las solicitudes',
      label_mobile: 'Hazle seguimiento a tus solicitudes y revisa las que ingresaste anteriormente.',
      actionLabel: 'Ir a mis solicitudes',
      flag: context.spid,
      order: 2,
      invitedReference: '/ayuda/estado-de-tus-solicitudes',
      reference: '/ayuda/estado-de-tus-solicitudes',
      display: false,
    });
  }
}
