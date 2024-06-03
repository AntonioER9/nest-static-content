import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PaymentMethod } from 'modules/content/payment-methods/entities/payment-methods.entity';

export class PaymentMethodSpidSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    em.create(PaymentMethod, {
      name: 'scotiabank-cencosud',
      icon: '/icons/paymentMethods/cencosudScotiabank.svg',
      flag: context.spid,
    });
    em.create(PaymentMethod, {
      name: 'mastercard',
      icon: '/icons/paymentMethods/mastercard.svg',
      flag: context.spid,
    });
    em.create(PaymentMethod, {
      name: 'visa',
      icon: '/icons/paymentMethods/visa.svg',
      flag: context.spid,
    });
    em.create(PaymentMethod, {
      name: 'magna',
      icon: '/icons/paymentMethods/magna.svg',
      flag: context.spid,
    });
    em.create(PaymentMethod, {
      name: 'diners-club',
      icon: '/icons/paymentMethods/dinersclub.svg',
      flag: context.spid,
    });
    em.create(PaymentMethod, {
      name: 'american-express',
      icon: '/icons/paymentMethods/americanexpress.svg',
      flag: context.spid,
    });
    em.create(PaymentMethod, {
      name: 'redcompra',
      icon: '/icons/paymentMethods/redcompra.svg',
      flag: context.spid,
    });
  }
}
