import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository, FindOptions } from '@mikro-orm/core';
import { CreateArticleEvaluationDto } from './dtos/create-article-evaluation.dto';
import { ArticleEvaluationOption } from './entities/article-evaluation-option.entity';
import { HelpCenterHeaders } from 'common/headers/hc-header.type';
import { Flag } from 'modules/flags/entities/flag.entity';
import { CDALogger } from 'common/loggers/cda.logger';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class ArticleEvaluationService {
  private readonly logger: CDALogger = new CDALogger(ArticleEvaluationService.name);
  private readonly findOptions: FindOptions<ArticleEvaluationOption, 'flag'> = {
    fields: ['id', 'optionText'],
  };
  constructor(
    private readonly em: EntityManager,
    @InjectRepository(ArticleEvaluationOption)
    private readonly articleEvaluationOptionRepository: EntityRepository<ArticleEvaluationOption>,
  ) {}

  async createArticleEvaluation(
    traceId: string,
    headers: HelpCenterHeaders,
    createArticleEvaluation: CreateArticleEvaluationDto,
  ): Promise<boolean> {
    const { isUseful, contentRef, response } = createArticleEvaluation;
    let evaluationResponse = '';
    let evaluationComment = '';
    const formattedDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

    try {
      if (!isUseful && response) {
        const option = await this.articleEvaluationOptionRepository.findOne({ optionText: response });
        option ? (evaluationResponse = response) : (evaluationComment = response);
      }
      await this.em.getConnection().execute(
        `INSERT INTO public.article_evaluation (created_at, flag_id, content_ref, is_useful, response, comment)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [formattedDate, headers.flagId, contentRef, isUseful, evaluationResponse, evaluationComment],
      );
      return true;
    } catch (error) {
      this.logger.cdaError(traceId, 'create ArticleEvaluation', 'internal server error', { error });
      throw new InternalServerErrorException();
    }
  }

  async getArticleEvaluationOptions(traceId: string, headers: HelpCenterHeaders): Promise<ArticleEvaluationOption[]> {
    const flag: Flag = {
      id: headers.flagId,
      label: headers.flagLabel,
    };
    try {
      const options = await this.articleEvaluationOptionRepository.find({ flag, display: true }, this.findOptions);
      return options;
    } catch (error) {
      this.logger.cdaError(traceId, 'getArticleEvaluationOptions', 'internal server error', { error });
      throw new InternalServerErrorException();
    }
  }
}
