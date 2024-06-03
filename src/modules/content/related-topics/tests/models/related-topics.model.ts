import { MockModel } from 'common/models/mock.model';
import { RelatedTopics } from 'modules/content/related-topics/entities/related-topics.entity';

export const mockRelatedTopics: RelatedTopics = {
  id: 1,
  title: 'Reembolsos',
  reference: 'https://ayuda.paris.cl/ayuda/servicios-postventa/reembolso-dinero',
  flag: {
    id: 2,
    label: 'paris',
  },
  topicId: 1,
  subtopicId: 5,
};

export class RelatedTopicsModel extends MockModel<RelatedTopics> {
  protected entityStub = mockRelatedTopics;
}

export class RelatedTopicsModelNull extends MockModel<undefined> {
  protected entityStub = undefined;
}
