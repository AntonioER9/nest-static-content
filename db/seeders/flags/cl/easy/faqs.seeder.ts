import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Faq } from 'modules/content/faqs/entities/faq.entity';

export class FaqsEasySeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(Faq, {
      question: '¿En cuántos días veré reflejada la devolución del dinero?',
      answer:
        '  En caso de anulación de la compra, una vez que el producto haya sido físicamente devuelto a\n  Paris, se emitirá una nota de crédito para reembolsar tu dinero.\n  Ten presente que el medio de pago que utilizaste es el que determina el plazo en que\n  recibirás el reembolso de tu dinero.\n  Si realizaste tu compra con **Tarjeta Cencosud, Tarjetas Scotiabank Cencosud,Tarjetas de\n  Crédito o Giftcard** el dinero será reembolsado (reversa o abono) en 10 días hábiles\n  aproximadamente y puede variar dependiendo de la entidad bancaria.\n  Dicho reembolso se verá reflejado en tu estado de cuenta siguiente o subsiguiente\n  dependiendo de la fecha de facturación mensual de tu tarjeta.\n  Si ocupaste una **Tarjeta de Débito** realizaremos una transferencia electrónica a la cuenta\n  corriente que tú nos indiques, dentro de máximo 15 días hábiles desde que se emite la Nota de\n  Crédito y que tenemos tus datos bancarios.',
      link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/devolucion-del-dinero',
      helpContent: context.comoComprarEasy,
      flag: context.easy,
      display: false,
    });

    em.create(Faq, {
      question: '¿Cuáles son los datos de la identificación de la transferencia recibida?',
      answer: '- Pago Safetypay 0764117298\n- Pago Recibido PRV 076411729-8 Banco Estado\n- Pago Proveedores Safetypay',
      link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/transferencia',
      helpContent: context.comoComprarEasy,
      flag: context.easy,
      display: false,
    });

    em.create(Faq, {
      question: '¿En cuántos días veré reflejada la devolución del dinero?',
      answer:
        '  En caso de anulación de la compra, una vez que el producto haya sido físicamente devuelto a Paris,\n  se emitirá una nota de crédito para reembolsar tu dinero. Ten presente que el medio de pago que\n  utilizaste es el que determina el plazo en que recibirás el reembolso de tu dinero.\n  Si realizaste tu compra con **Tarjeta Cencosud, Tarjetas Scotiabank Cencosud,Tarjetas de Crédito\n  o Giftcard** el dinero será reembolsado (reversa o abono) en 10 días hábiles aproximadamente y\n  puede variar dependiendo de la entidad bancaria. Dicho reembolso se verá reflejado en tu estado\n  de cuenta siguiente o subsiguiente dependiendo de la fecha de facturación mensual de tu tarjeta.\n\n  Si ocupaste una **Tarjeta de Débito** realizaremos una transferencia electrónica a la cuenta\n  corriente que tú nos indiques, dentro de máximo 15 días hábiles desde que se emite la Nota de\n  Crédito y que tenemos tus datos bancarios.',
      link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/devolucion-del-dinero',
      helpContent: context.serviciosTiendaEasy,
      flag: context.easy,
      display: false,
    });

    em.create(Faq, {
      question: '¿Cuáles son los datos de la identificación de la transferencia recibida?',
      answer:
        '  - Pago Safetypay 0764117298\n  - Pago Recibido PRV 076411729-8 Banco Estado\n  - Pago Proveedores Safetypay',
      link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/transferencia',
      helpContent: context.serviciosTiendaEasy,
      flag: context.easy,
      display: false,
    });
  }
}
