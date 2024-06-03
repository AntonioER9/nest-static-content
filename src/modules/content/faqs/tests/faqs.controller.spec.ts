import { getRepositoryToken } from '@mikro-orm/nestjs';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { Flag } from 'modules/flags/entities/flag.entity';
import { FlagModel } from 'modules/flags/tests/models/flag.model';
import { Faq } from '../entities/faq.entity';
import { FaqController } from '../faqs.controller';
import { FaqService } from '../faqs.service';
import { FaqModel, mockFaq } from './models/faq.model';
import { dummyTraceId, dummyHeader } from '../../../../common/constants/constants';
import { SqlEntityManager } from '@mikro-orm/postgresql';
import { HelpCategoryService } from '../../help-category/help-category.service';
import { HelpCategoryModel } from 'modules/content/help-category/tests/models/help-category.model';
import { HelpCategory } from 'modules/content/help-category/entities/help-category.entity';

describe('FaqController', (): void => {
  let controller: FaqController;

  beforeEach(async (): Promise<void> => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaqController],
      providers: [
        FaqService,
        HelpCategoryService,
        {
          provide: SqlEntityManager,
          useClass: HelpCategoryModel,
        },
        {
          provide: getRepositoryToken(Faq),
          useClass: FaqModel,
        },
        {
          provide: getRepositoryToken(Flag),
          useClass: FlagModel,
        },
        {
          provide: getRepositoryToken(HelpCategory),
          useClass: HelpCategoryModel,
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock'),
          },
        },
      ],
    }).compile();

    controller = module.get<FaqController>(FaqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should findAllByFlag return data', async () => {
    expect(await controller.findAllByFlag(dummyHeader, dummyTraceId)).toEqual([mockFaq]);
  });

  it('should findAllWithServiceNav no return data', async () => {
    expect(await controller.findAllWithHelpCategory(dummyHeader, dummyTraceId)).toEqual([]);
  });
});
