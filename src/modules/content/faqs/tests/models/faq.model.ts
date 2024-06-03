import { MockModel } from 'common/models/mock.model';
import { Faq } from '../../entities/faq.entity';
import { Collection } from '@mikro-orm/core';
import { HelpContent } from 'modules/content/help-category/entities/help-content.entity';

export const mockFaq: Faq = {
  id: 2,
  question: '¿En cuántos días veré reflejada la devolución del dinero?',
  answer:
    'En caso de anulación de la compra, una vez que el producto haya sido físicamente devuelto a Paris, se emitirá una nota de crédito para reembolsar tu dinero. Ten presente que el medio de pago que utilizaste es el que determina el plazo en que recibirás el reembolso de tu dinero. Si realizaste tu compra con **Tarjeta Cencosud, Tarjetas Scotiabank Cencosud, Tarjetas de Crédito o Giftcard** el dinero será reembolsado (reversa o abono) en 72 horas hábiles aproximadamente y puede variar dependiendo de la entidad bancaria. Dicho reembolso se verá reflejado en tu estado de cuenta siguiente o subsiguiente dependiendo de la fecha de facturación mensual de tu tarjeta.\n\nSi ocupaste Tarjeta de Débito, te contactaremos para solicitar los datos Bancarios y una vez que ya contemos con ellos, realizaremos una transferencia electrónica en un plazo de 15 días hábiles.',
  link: 'https://ayuda.paris.cl/ayuda/promesa-paris/medios-de-pago/preguntas-frecuentes/devolucion-del-dinero',
  helpContent: {
    id: 1,
    content: 'prueba',
    label: 'prueba',
    order: 1,
    reference: 'prueba',
    description: 'prueba',
    icon: 'prueba',
    faqs: new Collection<Faq>([]),
    helpCategory: {
      id: 2,
      icon: '',
      reference: '',
      title: '',
      flag: {
        id: 0,
        label: 'paris',
      },
      helpContents: new Collection<HelpContent>([]),
    },
  },
  flag: {
    id: 1,
    label: 'Paris',
  },
};

export class FaqModel extends MockModel<Faq> {
  protected entityStub = mockFaq;
}

export class FaqModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
