import { Test, TestingModule } from '@nestjs/testing';
import { ArticleEvaluationController } from '../article-evaluation.controller';
import { ArticleEvaluationService } from '../article-evaluation.service';
import { mockArticleEvaluationOption } from './models/article-evaluation-option.model';
import { dummyHeader, dummyTraceId } from 'common/constants/constants';
import { mockCreateArticleEvaluationDto } from './models/article-evaluation.model';

const mockArticleEvaluationService = () => ({
  createArticleEvaluation: jest.fn(),
  getArticleEvaluationOptions: jest.fn(),
});

describe('ArticleEvaluationController', () => {
  let controller: ArticleEvaluationController;
  let service: ArticleEvaluationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticleEvaluationController],
      providers: [
        {
          provide: ArticleEvaluationService,
          useFactory: mockArticleEvaluationService,
        },
      ],
    }).compile();

    controller = module.get<ArticleEvaluationController>(ArticleEvaluationController);
    service = module.get<ArticleEvaluationService>(ArticleEvaluationService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an ArticleEvaluation', async () => {
    jest.spyOn(service, 'createArticleEvaluation').mockResolvedValue(true);
    const result = await controller.create(dummyTraceId, mockCreateArticleEvaluationDto, dummyHeader);
    expect(result).toEqual(true);
  });

  it('should get ArticleEvaluationOptions', async () => {
    jest.spyOn(service, 'getArticleEvaluationOptions').mockResolvedValue([mockArticleEvaluationOption]);
    const result = await controller.getArticleEvaluationOptions(dummyTraceId, dummyHeader);
    expect(result).toEqual([mockArticleEvaluationOption]);
  });
});
