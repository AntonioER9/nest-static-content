import { MockModel } from 'common/models/mock.model';
import { Service } from '../../entities/service.entity';

export const mockService: Service = {
  id: 1,
  label: 'service mock',
  actionLabel: '',
  flag: {
    id: 1,
    label: 'paris',
  },
  icon: 'my-icon',
  label_mobile: 'mobile text',
  reference: 'https://cenco.mock.cl',
  invitedReference: 'https://cenco.mock.cl',
};

export class ServiceModel extends MockModel<Service> {
  protected entityStub = mockService;
}

export class ServiceModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
