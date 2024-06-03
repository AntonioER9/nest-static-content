import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Faq } from 'modules/content/faqs/entities/faq.entity';

export class FaqsJumboSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Faq, {
      question: '¿Qué hago si me cobraron el envío siendo cliente Prime?',
      answer: `Para ayudarte, debes ingresar en tu portal de usuario Prime con tu clave secreta. Luego, dirígete a la sección “Ayuda Prime”, donde podrás completar la información para que un ejecutivo se ponga en contacto contigo.`,
      link: '#',
      helpContent: context.queEsJumboPrime,
      flag: context.jumbo,
    });

    em.create(Faq, {
      question: '¿Cómo puedo finalizar mi suscripción a Jumbo Prime?',
      answer:
        'Para finalizar con tu suscripción, debes seguir con los siguientes pasos:\n\n- Ingresa al portal de usuario de Jumbo Prime e ingresa tu clave.\n- Selecciona la sección "Mis datos".\n- Haz clic en "Cancelar mi suscripción". También puedes solicitar la devolución de tu dinero al suscribirte antes de que\npasen 10 días desde el momento del cobro.',
      link: '#',
      helpContent: context.queEsJumboPrime,
      flag: context.jumbo,
    });
  }
}
