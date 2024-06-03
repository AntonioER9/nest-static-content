import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Service } from 'modules/content/services/entities/service.entity';

export class ServicesParisSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Service, {
      icon: '/icons/services/pedido.svg',
      label: 'Mis compras',
      label_mobile: 'Realiza el **seguimiento**, recupera tu boleta, **devuelve** o **cancela** tu compra.',
      actionLabel: 'Ir a Mis compras',
      flag: context.paris,
      order: 1,
      invitedReference: 'https://www.paris.cl/mi-cuenta/mis-compras',
      reference: 'https://www.paris.cl/mi-cuenta/mis-compras',
    });
    em.create(Service, {
      icon: '/icons/services/contacto.svg',
      label: 'Problemas con mi compra',
      label_mobile: 'Ingresa tu **solicitud**, **reclamo** o notifica el problema y nosotros lo resolvemos',
      actionLabel: 'Crear solicitud o reclamo',
      flag: context.paris,
      order: 2,
      invitedReference: '/ayuda/contactanos',
      reference: '/ayuda/contactanos',
    });
    em.create(Service, {
      icon: '/icons/services/cuenta.svg',
      label: 'Mi cuenta',
      label_mobile: 'Revisa tus tarjetas, añade direcciones de despacho y cuenta bancaria para reembolso.',
      actionLabel: 'Ir a Mi cuenta',
      flag: context.paris,
      order: 3,
      invitedReference: 'https://www.paris.cl/informacion-personal',
      reference: 'https://www.paris.cl/informacion-personal',
    });
    em.create(Service, {
      icon: '/icons/services/whatsapp.svg',
      label: 'Atención por Whatsapp',
      label_mobile: 'Si necesitas ayuda en línea, escríbenos al **+56964963826** y un ejecutivo te atenderá',
      actionLabel: 'Ir a Whatsapp Paris',
      flag: context.paris,
      order: 4,
      invitedReference: 'https://api.whatsapp.com/send/?phone=56964963826&text&app_absent=0',
      reference: 'https://api.whatsapp.com/send/?phone=56964963826&text&app_absent=0',
    });
    em.create(Service, {
      icon: '/icons/services/solicitud.svg',
      label: 'Estado de las solicitudes',
      label_mobile: 'Hazle seguimiento a tus solicitudes y revisa las que ingresaste anteriormente.',
      actionLabel: 'Ir a mis solicitudes',
      flag: context.paris,
      order: 6,
      invitedReference: '/ayuda/estado-de-tus-solicitudes',
      reference: '/ayuda/estado-de-tus-solicitudes',
    });
  }
}
