import { MockModel } from 'common/models/mock.model';
import { PaymentMethod } from '../../entities/payment-methods.entity';

export const mockPaymentMethod: PaymentMethod = {
  id: 1,
  name: 'visa',
  icon: '/icons/paymentMethods/visa.svg',
  flag: {
    id: 1,
    label: 'jumbo',
  },
};

export class PaymentMethodModel extends MockModel<PaymentMethod> {
  protected entityStub = mockPaymentMethod;
}

export class PaymentMethodModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
