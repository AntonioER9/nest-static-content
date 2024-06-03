import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Service } from 'modules/content/services/entities/service.entity';

export class ServicesJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Service, {
      icon: '/icons/services/compras.svg',
      label: 'Mis compras',
      label_mobile: '- Estado del pedido\n- Anular pedido\n- Reprogramar entrega',
      actionLabel: 'Ir a Mis compras',
      flag: context.jumbo,
      order: 1,
      invitedReference: 'https://www.jumbo.cl/_secure/compras',
      reference: 'https://www.jumbo.cl/_secure/compras',
    });
    em.create(Service, {
      icon: '/icons/services/tienda.svg',
      label: 'Agenda tu visita',
      label_mobile: 'Agéndate y evita la fila',
      actionLabel: 'Agendar visita',
      flag: context.jumbo,
      order: 2,
      display: false,
      invitedReference: 'https://evitalafilajumbo.powerappsportals.com/',
      reference: 'https://evitalafilajumbo.powerappsportals.com/',
    });
    em.create(Service, {
      icon: '/icons/services/contacto.svg',
      label: 'Contáctanos',
      label_mobile: 'Ingresa tu solicitud, notifica el problema y nosotros lo resolvemos',
      actionLabel: 'Crear solicitud',
      flag: context.jumbo,
      order: 3,
      invitedReference: '/ayuda/contactanos',
      reference: '/ayuda/contactanos',
    });
    em.create(Service, {
      icon: '/icons/services/solicitud.svg',
      label: 'Estado de las solicitudes',
      label_mobile: 'Hazle seguimiento a tus solicitudes y revisa las que ingresaste anteriormente.',
      actionLabel: 'Ir a mis solicitudes',
      flag: context.jumbo,
      order: 4,
      invitedReference: '/ayuda/estado-de-tus-solicitudes',
      reference: '/ayuda/estado-de-tus-solicitudes',
      display: false,
    });
  }
}
