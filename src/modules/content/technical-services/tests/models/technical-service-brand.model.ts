import { MockModel } from 'common/models/mock.model';
import { TechnicalServiceBrand } from '../../entities/technical-service-brand.entity';

export const mockTechnicalServiceBrand: TechnicalServiceBrand = {
  id: 1,
  name: 'Copyright © 2020 Cencosud - Jumbo',
  flag: {
    id: 1,
    label: 'jumbo',
  },
};

export class TechnicalServiceBrandModel extends MockModel<TechnicalServiceBrand> {
  protected entityStub = mockTechnicalServiceBrand;
}

export class TechnicalServiceBrandModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
