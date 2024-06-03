import { MockModel } from 'common/models/mock.model';
import { ArticleEvaluationOption } from '../../entities/article-evaluation-option.entity';

export const mockArticleEvaluationOption: ArticleEvaluationOption = {
  id: 1,
  optionText: 'No tiene la información que necesito',
  flag: {
    id: 1,
    label: 'jumbo',
  },
};

export class ArticleEvaluationOptionModel extends MockModel<ArticleEvaluationOption> {
  protected entityStub: ArticleEvaluationOption = mockArticleEvaluationOption;
}
