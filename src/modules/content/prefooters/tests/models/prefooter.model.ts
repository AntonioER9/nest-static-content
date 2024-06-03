import { Collection } from '@mikro-orm/core';
import { MockModel } from 'common/models/mock.model';
import { PrefooterCategory } from '../../entities/prefooter-category.entity';
import { PrefooterSubcategory } from '../../entities/prefooter-subcategory.entity';

export const mockPrefooter: PrefooterCategory = {
  id: 2,
  order: 1,
  title: 'Cencosud',
  links: new Collection<PrefooterSubcategory>(PrefooterSubcategory),
  flag: {
    id: 1,
    label: 'Paris',
  },
};

export class PrefooterModel extends MockModel<PrefooterCategory> {
  protected entityStub = mockPrefooter;
}

export class PrefooterModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
