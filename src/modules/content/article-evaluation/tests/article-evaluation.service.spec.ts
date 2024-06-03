import { Test, TestingModule } from '@nestjs/testing';
import { ArticleEvaluationService } from '../article-evaluation.service';
import { ArticleEvaluationOption } from '../entities/article-evaluation-option.entity';
import { getRepositoryToken } from '@mikro-orm/nestjs';
import { mockCreateArticleEvaluationDto, mockEntityManager } from './models/article-evaluation.model';
import { mockArticleEvaluationOption, ArticleEvaluationOptionModel } from './models/article-evaluation-option.model';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';
import { EntityManager } from '@mikro-orm/postgresql';

describe('ArticleEvaluationService with data', () => {
  let service: ArticleEvaluationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleEvaluationService,
        {
          provide: EntityManager,
          useValue: mockEntityManager,
        },
        {
          provide: getRepositoryToken(ArticleEvaluationOption),
          useClass: ArticleEvaluationOptionModel,
        },
      ],
    }).compile();

    service = module.get<ArticleEvaluationService>(ArticleEvaluationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an ArticleEvaluation', async () => {
    const result = await service.createArticleEvaluation(dummyTraceId, dummyHeader, mockCreateArticleEvaluationDto);
    expect(result).toEqual(true);
  });

  it('should create an ArticleEvaluation with option', async () => {
    mockCreateArticleEvaluationDto.isUseful = false;
    mockCreateArticleEvaluationDto.response = 'No tiene la información que necesito';
    const result = await service.createArticleEvaluation(dummyTraceId, dummyHeader, mockCreateArticleEvaluationDto);

    expect(result).toEqual(true);
  });

  it('should get ArticleEvaluationOptions', async () => {
    const result = await service.getArticleEvaluationOptions(dummyTraceId, dummyHeader);
    expect(result).toEqual([mockArticleEvaluationOption]);
  });
});
