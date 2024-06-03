import { MockModel } from 'common/models/mock.model';
import { Rrss } from '../../entities/rrss.entity';

export const mockRrss: Rrss = {
  id: 1,
  facebook: 'https://www.facebook.com/jumbo/',
  flag: {
    id: 1,
    label: 'jumbo',
  },
};

export class RrssModel extends MockModel<Rrss> {
  protected entityStub = mockRrss;
}

export class RrssModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
