import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Service } from 'modules/content/services/entities/service.entity';

export class ServicesWongSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Service, {
      icon: '/icons/services/contacto.svg',
      label: 'Contáctanos',
      label_mobile: 'Ingresa tu solicitud o reclamo, notifica el problema y nosotros lo resolvemos.',
      actionLabel: 'Registrarse',
      flag: context.wong,
      order: 1,
      invitedReference: 'https://www.wong.pe/consultas-y-sugerencias',
      reference: 'https://www.wong.pe/consultas-y-sugerencias',
    });
    em.create(Service, {
      icon: '/icons/services/suscripcion.svg',
      label: 'Suscripción',
      label_mobile: 'Regístrate aquí para que podamos sorprenderte con nuestras novedades y promociones.',
      actionLabel: 'Registrarse',
      flag: context.wong,
      order: 2,
      invitedReference: 'https://librorec.wong.pe/frmClie/frmClie.aspx',
      reference: 'https://librorec.wong.pe/frmClie/frmClie.aspx',
    });
    em.create(Service, {
      icon: '/icons/services/boleta.svg',
      label: 'Descarga tu boleta',
      label_mobile: 'Hazle seguimiento a tus solicitudes y revisa las que ingresaste anteriormente.',
      actionLabel: 'Ir a Descargar Boleta',
      flag: context.wong,
      order: 3,
      invitedReference: 'https://asp401r.paperless.com.pe/BoletaWong/',
      reference: 'https://asp401r.paperless.com.pe/BoletaWong/',
    });
  }
}
