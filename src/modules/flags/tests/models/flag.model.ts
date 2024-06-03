import { MockModel } from 'common/models/mock.model';
import { Flag } from '../../entities/flag.entity';

export const mockFlag: Flag = {
  id: 1,
  label: 'jumbo',
};

export class FlagModel extends MockModel<Flag> {
  protected entityStub = mockFlag;

  findFlagById(): Flag {
    return this.entityStub;
  }

  findFlagByLabel(): Flag {
    return this.entityStub;
  }
}

export class FlagModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
