import { MockModel } from 'common/models/mock.model';
import { InfoMessage } from '../../entities/info-message.entity';

export const mockInfoMessage: InfoMessage = {
  id: 1,
  message: 'test',
  flag: {
    id: 2,
    label: 'paris',
  },
};

export class InfoMessageModel extends MockModel<InfoMessage> {
  protected entityStub = mockInfoMessage;
}

export class InfoMessageModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
