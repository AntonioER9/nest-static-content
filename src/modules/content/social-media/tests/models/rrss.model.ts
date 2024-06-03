import { MockModel } from 'common/models/mock.model';
import { SocialMedia } from 'modules/content/social-media/entities/social-media.entity';

export const mockSocialMedia: SocialMedia = {
  id: 1,
  name: 'test',
  link: 'test',
  icon: 'test',
  flag: {
    id: 1,
    label: 'jumbo',
  },
};

export class SocialMediaModel extends MockModel<SocialMedia> {
  protected entityStub = mockSocialMedia;
}

export class SocialMediaModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
