import type { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { HelpCategory } from 'modules/content/help-category/entities/help-category.entity';

export class HelpCategorySpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    context.pedirSpid = em.create(HelpCategory, {
      icon: '/icons/cards/buyInSpid.svg',
      title: 'Pedir en Spid',
      reference: '/ayuda/comprar-spid',
      flag: context.spid,
    });

    context.cambiarDatosSpid = em.create(HelpCategory, {
      icon: '/icons/cards/changeInfo.svg',
      title: 'Cambiar Datos',
      reference: '/ayuda/modificar-datos',
      flag: context.spid,
    });

    context.problemasPedidoSpid = em.create(HelpCategory, {
      icon: '/icons/cards/orderProblems.svg',
      title: 'Problemas con mi pedido',
      reference: '/ayuda/problemas-pedido',
      flag: context.spid,
    });

    context.mediosPagoSpid = em.create(HelpCategory, {
      icon: '/icons/cards/methodsPayment.svg',
      title: 'Medios de pago',
      reference: '/ayuda/medios-pago',
      flag: context.spid,
    });

    context.servicioClienteSpid = em.create(HelpCategory, {
      icon: '/icons/cards/customerService.svg',
      title: 'Servicio al cliente',
      reference: '/ayuda/servicio-cliente',
      flag: context.spid,
    });
  }
}
